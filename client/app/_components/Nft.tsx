import Image from "next/image";
import React from "react";

const Nft = () => {
  return (
    <div className="bg-[#F1F1F1] rounded-[24px] px-[16px] pt-[16px] w-[288px] h-[368px]">
      <Image
        src={"/ethBcoin.svg"}
        height={50}
        width={50}
        alt="eth"
        className="mb-[-60px] ml-[10px] mt-[9px] z-20 relative"
      />
      <Image
        src={"/nftdummy1.png"}
        height={270}
        width={256}
        alt="nft"
        className="z-10 relative"
      />
      <div className=" bg-[#f1f1f1cc] pb-4 flex flex-col mt-[-54px] z-30 relative">
        <h3 className="text-[24px] bg-[#f1f1f1cc] pb-[6px]">3564</h3>
        <div className="flex w-[100%] justify-between items-center bg-[#f1f1f1cc]">
          <div className="flex gap-2">
            {" "}
            <Image src={"/sell.svg"} height={24} width={24} alt="sell" />
            <h6 className="text-[16px]">$6557 USDC</h6>
          </div>

          <button className="rounded-full bg-[#48637C] px-2 flex gap-2">
            <Image
              src={"openSea.svg"}
              height={24}
              width={24}
              alt="open sea"
              className="self-center"
            />
            <h6 className="text-[16px] self-center text-[#ffffff]">view</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nft;
