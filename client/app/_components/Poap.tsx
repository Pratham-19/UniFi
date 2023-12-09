import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Poap = () => {
  return (
    <div className="bg-[#F1F1F1] rounded-[24px] px-[16px] pt-[16px] w-[288px] h-[368px]">
      <Image
        src={'/gnosis-logo.png'}
        height={50}
        width={50}
        alt="eth"
        className="mb-[-60px] ml-[10px] mt-[9px] z-20 relative p-2 rounded-full bg-[#f1f1f1]"
      />
      <Image
        src={'/nftdummy1.png'}
        height={270}
        width={256}
        alt="nft"
        className="z-10 relative w-[255px] h-[300px]"
      />
      <div className=" bg-[#f1f1f187] backdrop-blur-md pb-4 flex flex-col mt-[-42px] z-30 relative">
        <h3 className="text-[24px] bg-[#f1f1f15e] pb-[6px] pt-2 font-light">
          Pirate Toy Face
        </h3>
        <div className="flex w-[100%] justify-between items-center bg-[#f1f1f1cc] font-bold">
          <h6 className="text-[16px]">Id #999</h6>
          <Image
            src={'/poap.png'}
            width={120}
            height={60}
            alt="poap"
            className="rounded-[9px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Poap;
