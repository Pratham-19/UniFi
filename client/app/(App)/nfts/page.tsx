import { Footer, Nft } from '@/app/_components';
import Poap from '@/app/_components/NFTPage/Poap';
import React from 'react';

const MyNftPage = () => {
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
