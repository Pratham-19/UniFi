'use client';
import { Footer, Nft } from '@/app/_components';
import Poap from '@/app/_components/NFTPage/Poap';
import { GetNFTs, FetchPoapFromAddress } from '@/app/_lib/airstack_queries';
import { useQuery, init } from '@airstack/airstack-react';
import React from 'react';
init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY ?? '');

const MyNftPage = () => {
  init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY ?? '');

  const { data, loading, error } = useQuery(GetNFTs, {
    resolvedAddress: '0x2acdf6a2f893687ccd341a1ad7e27102b665d8c4'
  });
  const { data: poapData, loading: poapLoading } = useQuery(
    FetchPoapFromAddress,
    {
      resolvedAddress: '0x2acdf6a2f893687ccd341a1ad7e27102b665d8c4'
    }
  );

  if (loading || poapLoading || error) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        ;
      </div>
    );
  }

  if (poapData && data)
    return (
      <div className="w-[100vw] bg-[linear-gradient(299deg,_#FFFCEA_0%,_#FFF8D4_0.01%,_#F8FCFF_100%)]">
        <div className="">
          <div className="flex justify-center items-center flex-wrap gap-7 py-4 pb-16">
            {poapData?.Poaps?.Poap.map(
              (poap: { tokenUri: string; chainId: React.Key }) => (
                <Poap url={poap.tokenUri} key={poap.tokenUri} />
              )
            )}
            {data?.Base?.TokenBalance &&
              data?.Base?.TokenBalance.map(
                (token: {
                  amount: string;
                  tokenAddress: React.Key | null | undefined;
                  tokenId: any;
                  tokenNfts: {
                    contentValue: {
                      image: {
                        large: string | undefined;
                      };
                    };
                  };
                }) => (
                  <Nft
                    amt={token.amount}
                    chain={3}
                    key={token.tokenAddress}
                    link={`https://opensea.io/assets/base/${token.tokenAddress}/${token.tokenId}`}
                    image={token.tokenNfts?.contentValue?.image?.large}
                    tokenId={token?.tokenId}
                  />
                )
              )}
            {data?.Polygon?.TokenBalance &&
              data?.Polygon?.TokenBalance.map(
                (token: {
                  amount: string;
                  tokenAddress: React.Key | null | undefined;
                  tokenId: any;
                  tokenNfts: {
                    contentValue: {
                      image: {
                        large: string | undefined;
                      };
                    };
                  };
                }) => (
                  <Nft
                    amt={token.amount}
                    chain={2}
                    tokenId={token?.tokenId}
                    key={token.tokenAddress}
                    link={`https://opensea.io/assets/polygon/${token.tokenAddress}/${token.tokenId}`}
                    image={token.tokenNfts?.contentValue?.image?.large}
                  />
                )
              )}
            {data?.Ethereum?.TokenBalance &&
              data?.Ethereum?.TokenBalance.map(
                (token: {
                  amount: string;
                  tokenAddress: React.Key | null | undefined;
                  tokenId: any;
                  tokenNfts: {
                    contentValue: {
                      image: {
                        large: string | undefined;
                      };
                    };
                  };
                }) => (
                  <Nft
                    amt={token.amount}
                    chain={1}
                    tokenId={token?.tokenId}
                    key={token.tokenAddress}
                    link={`https://opensea.io/assets/ethereum/${token.tokenAddress}/${token.tokenId}`}
                    image={token.tokenNfts?.contentValue?.image?.large}
                  />
                )
              )}
          </div>
        </div>
      </div>
    );
};

export default MyNftPage;
