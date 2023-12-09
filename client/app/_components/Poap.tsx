import Image from 'next/image';
import React from 'react';

const Poap = () => {
  return (
    <div className="bg-[#F1F1F1] rounded-[24px] px-[16px] pt-[16px] w-[288px] h-[368px]">
      <Image
        src={'/ethBcoin.svg'}
        height={50}
        width={50}
        alt="eth"
        className="mb-[-60px] ml-[10px] mt-[9px] z-20 relative"
      />
      <Image
        src={'/nftdummy1.png'}
        height={270}
        width={256}
        alt="nft"
        className="z-10 relative w-[256px] h-[270px]"
      />
      <div className=" bg-[#f1f1f1cc] pb-4 flex flex-col mt-[-30px] z-30 relative">
        <h3 className="text-[24px] bg-[#f1f1f1cc] pb-[6px] text-center">
          3564
        </h3>
      </div>
    </div>
  );
};

export default Poap;
