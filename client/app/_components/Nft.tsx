import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Nft = ({ chain }: any) => {
  return (
    <div className="bg-[#F1F1F1] rounded-[24px] px-[16px] pt-[16px] w-[288px] h-[368px]">
      {chain == 1 && (
        <Image
          src={'/ethBcoin.svg'}
          height={50}
          width={50}
          alt="eth"
          className="mb-[-60px] ml-[10px] mt-[9px] z-20 relative"
        />
      )}
      {chain == 2 && (
        <Image
          src={'/polygoncoin.svg'}
          height={50}
          width={50}
          alt="eth"
          className="mb-[-60px] ml-[10px] mt-[9px] z-20 relative"
        />
      )}
      {chain == 3 && (
        <Image
          src={'/base-coin.png'}
          height={50}
          width={50}
          alt="eth"
          className="mb-[-60px] ml-[10px] mt-[9px] z-20 relative"
        />
      )}
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
        <div className="flex w-[100%] justify-between items-center bg-[#f1f1f1cc]">
          <div className="flex gap-2">
            {' '}
            <Image src={'/sell.svg'} height={24} width={24} alt="sell" />
            <h6 className="text-[16px] font-bold">$6557 USDC</h6>
          </div>

          <Link
            href={'/'}
            className="rounded-full bg-[#48637C] px-2 flex gap-2 hover:py-1"
          >
            <Image
              src={'openSea.svg'}
              height={24}
              width={24}
              alt="open sea"
              className="self-center"
            />
            <h6 className="text-[16px] self-center text-[#ffffff]">view</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nft;
