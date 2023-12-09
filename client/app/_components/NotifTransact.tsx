import Image from "next/image";
import React from "react";

const NotifTransact = () => {
  return (
    <div className="bg-[linear-gradient(286deg,_#EDFFFB_0%,_#CEEDFF_100%)] rounded-[16px] p-4 flex flex-col gap-[10px] w-[240px]">
      {/* sent/recived */}
      <div className="flex gap-[10px] py-[5px] px-5 rounded-full bg-[#D19A96] place-self-start">
        <Image src={"/outbox.svg"} alt="recieved" width={15} height={15} />
        <h4 className="text-[16px] text-[#8C0808]">sent</h4>
      </div>
      {/* from */}
      <h4 className="text-[16px] place-self-center">
        from <span className="u underline underline-offset-4">vitalik.ens</span>{" "}
        on
      </h4>
      {/* from Chains */}
      <div className="flex gap-[10px] rounded-full border-[1px] border-solid border-[#98A6A1] px-[10px] py-[5px] w-[100%] justify-center">
        <Image
          src={"simpleBlender.svg"}
          alt="chains"
          width={15}
          height={20}
          className="self-center place-self-end"
        />
        <h4 className="text-[16px] self-center place-self-start">
          mixed chains
        </h4>
      </div>
      {/* arrow down */}
      <Image
        src={"/dowwnArrow.svg"}
        alt="arrow"
        width={10}
        height={6}
        className="place-self-center"
      />
      {/* to */}
      <h4 className="text-[16px] place-self-center">
        to{" "}
        <span className="underline underline-offset-4">roaringkitty.ens</span>{" "}
        on
      </h4>
      {/* to Chains */}
      <div className="flex gap-[10px] rounded-full border-[1px] border-solid border-[#98A6A1] px-[10px] py-[5px] w-[100%] justify-center">
        <Image
          src={"simpleBlender.svg"}
          alt="chains"
          width={15}
          height={20}
          className="self-center place-self-end"
        />
        <h4 className="text-[16px] self-center place-self-start">
          mixed chains
        </h4>
      </div>
      {/* view btn */}
      <div className="bg-[#48637C] text-[#ffffff] rounded-full py-[5px] gap-[8px] flex justify-center">
        <Image src={"/actionWeb.svg"} alt="web" width={20} height={20} />
        <h1>view on explorer</h1>
      </div>
    </div>
  );
};

export default NotifTransact;
