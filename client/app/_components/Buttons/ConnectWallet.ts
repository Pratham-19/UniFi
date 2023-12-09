import { BrowserProvider } from 'ethers';

declare var window: any;

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      return signer?.address;
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error('No web3 provider found');
  }
};
