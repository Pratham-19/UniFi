'use client';
import { Footer, Nft } from '@/app/_components';
import Poap from '@/app/_components/NFTPage/Poap';
import { GetNFTs } from '@/app/_lib/airstack_queries';
import { init, useQuery } from '@airstack/airstack-react';
import React from 'react';
init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY ?? '');

const MyNftPage = () => {
  // const { data, loading, error } = useQuery(GetNFTs, {
  //   resolvedAddress: '0x2acdf6a2f893687ccd341a1ad7e27102b665d8c4'
  // });
  // similarly for Base and Ethereum like below polygon
  // data.Polygon.TokenBalance.map((item: any) => {
  //   console.log(item);
  // });
  return (
    <div className="w-[100vw] bg-[linear-gradient(299deg,_#FFFCEA_0%,_#FFF8D4_0.01%,_#F8FCFF_100%)]">
      <div className="grid pt-[21px] gap-4 pb-28 py-5">
        <div className="self-start place-self-center grid grid-flow-col gap-4">
          <Nft chain={1} />
          <Poap />
          <Poap />
          <Nft chain={2} />
        </div>
        <div className="self-start place-self-center grid grid-flow-col gap-4">
          <Nft chain={1} />
          <Poap />
          <Nft chain={1} />
          <Nft chain={1} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MyNftPage;
