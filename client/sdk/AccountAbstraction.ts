import { SafeAuthPack, SafeAuthInitOptions } from '@safe-global/auth-kit';
import {
  MetaTransactionData,
  MetaTransactionOptions
} from '@safe-global/safe-core-sdk-types';
import { Eip1193Provider, ethers, BrowserProvider } from 'ethers';
import Safe, { EthersAdapter, SafeFactory } from '@safe-global/protocol-kit';
import { GelatoRelayPack } from '@safe-global/relay-kit';

let authRes: any;
let signer: any;
let provider: any;

const safeAuthInitOptions: SafeAuthInitOptions = {
  showWidgetButton: false, // Set to true to show the SafeAuth widget button
  chainConfig: {
    blockExplorerUrl: 'https://sepolia.etherscan.io/', // The block explorer URL
    chainId: '0xaa36a7', // The chain ID
    displayName: 'Ethereum Sepolia', // The chain name
    rpcTarget: 'https://sepolia.infura.io/v3/', // The RPC target
    ticker: 'ETH', // The chain ticker
    tickerName: 'Ethereum' // The chain ticker name
  }
};
const safeAuthPack = new SafeAuthPack();
const init = async () => {
  await safeAuthPack.init(safeAuthInitOptions);
};
init();

const loginWeb3Auth = async () => {
  try {
    await safeAuthPack.init(safeAuthInitOptions);

    const safeAuthSignInResponse = await safeAuthPack.signIn();
    console.log(safeAuthSignInResponse);

    const provider = new BrowserProvider(
      safeAuthPack?.getProvider() as Eip1193Provider
    );
    console.log(provider);

    const signer = await provider.getSigner();
    console.log('>>>>>>>>', signer);

    if (safeAuthSignInResponse.safes?.length === 0) {
      const ethAdapter = new EthersAdapter({
        ethers,
        signerOrProvider: signer
      } as any);

      const safeFactory = await SafeFactory.create({ ethAdapter });
      const safe = await safeFactory.deploySafe({
        safeAccountConfig: {
          threshold: 1,
          owners: [safeAuthSignInResponse?.eoa as string]
        }
      });
      console.log('SAFE Created!', await safe.getAddress());
      safeAuthSignInResponse.safes = [await safe.getAddress()];
    }
    console.log('SAFE Created!', safeAuthSignInResponse.safes);
    authRes = safeAuthSignInResponse;
    localStorage.setItem(
      'smartWallet',
      JSON.stringify({
        safe: safeAuthSignInResponse?.safes,
        eoa: safeAuthSignInResponse.eoa
      })
    );
    return safeAuthSignInResponse;
  } catch (e) {
    console.log(e);
  }
};

const logoutWeb3Auth = async () => {
  await safeAuthPack.signOut();
};

const handleTxnx = async () => {
  const ethAdapter = new EthersAdapter({
    ethers,
    signerOrProvider: signer || provider
  });

  const safeAddress = authRes?.safes?.[0] || '0x';

  const protocolKit = await Safe.create({
    ethAdapter,
    safeAddress
  });
  console.log('protocol', protocolKit);

  const safeTransactionData: MetaTransactionData = {
    to: ethers.getAddress('0x6C5B323C02E01218689D59f250BBdA6283edd3f7'),
    data: '0x',
    value: ethers.parseUnits('0.0001', 'ether').toString()
  };
  console.log('txn obj', safeTransactionData);
  const safeTransaction = await protocolKit.createTransaction({
    transactions: [safeTransactionData]
  });

  const tx = await protocolKit.signTransaction(safeTransaction);

  // Execute the transaction
  const txResult = await protocolKit.executeTransaction(tx);

  console.log('txn res:', txResult);
};

const relayTxnx = async (transactions: MetaTransactionData[]) => {
  const options: MetaTransactionOptions = {
    isSponsored: true
  };

  const ethAdapter = new EthersAdapter({
    ethers,
    signerOrProvider: signer
  });

  const protocolKit = await Safe.create({
    ethAdapter,
    safeAddress: authRes.safes[0]
  });

  const relayKit = new GelatoRelayPack({
    apiKey: 'Yir_qIBuBBo7CAAvcQkRw5Rw86CTXmv7iQBfdWZYxJU_',
    protocolKit
  });

  const safeTransaction = await relayKit.createRelayedTransaction({
    transactions,
    options
  });

  const signedSafeTransaction =
    await protocolKit.signTransaction(safeTransaction);
  const response = await relayKit.executeRelayTransaction(
    signedSafeTransaction,
    options
  );

  console.log(
    `Relay Transaction Task ID: https://relay.gelato.digital/tasks/status/${response.taskId}`
  );
};

export {
  authRes,
  signer,
  provider,
  safeAuthInitOptions,
  safeAuthPack,
  init,
  relayTxnx,
  handleTxnx,
  loginWeb3Auth,
  logoutWeb3Auth
};
