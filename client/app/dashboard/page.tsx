import React from "react";
import {
  Navbar,
  Footer,
  ChainFund,
  ChooseChain,
  ChainSubtotal,
} from "../_components";
import Image from "next/image";

const dashboardPage = () => {
  return (
    <>
      <div className="w-[100vw] bg-[linear-gradient(299deg,_#FFFCEA_0%,_#FFF8D4_0.01%,_#F8FCFF_100%)]">
        <Navbar />
        <div className="grid grid-flow-col pt-6 gap-4 pb-16">
          {/* lhs */}
          <div className="h-[100%] flex flex-col gap-4 self-start place-self-end">
            {/* prof and total funds */}
            <div className="w-[288px] bg-[linear-gradient(286deg,_#EDFFFB_0%,_#CEEDFF_100%)] rounded-3xl p-4 grid gap-4">
              {/* profile */}
              <div className="self-center place-self-center w-[100%] text-[#f1f1f1] grid grid-flow-col gap-4 rounded-full bg-[#48637C]">
                <Image
                  src={"/defaultpfp.png"}
                  alt="pfp"
                  width={72}
                  height={72}
                  className="self-center place-self-start"
                />
                <h3 className="text-[24px] self-center place-self-start">
                  vitalik.ens
                </h3>
                <Image
                  className="self-center place-self-start mr-6 hover:border-[1px] border-solid border-[#48637C]"
                  src={"/copy.svg"}
                  alt="copy"
                  height={24}
                  width={24}
                />
              </div>
              {/* Totalfunds */}
              <div className="flex flex-col self-center place-self-center">
                {" "}
                <h2 className="text-left text-[27px] mb-[-9px]">
                  Total Funds:
                </h2>
                <h1 className="text-center text-[54px]">$25.000</h1>
                <h4 className="text-center text-[16px]">
                  *assets represented in USDC
                </h4>
              </div>
            </div>
            {/* chain number */}
            <div className="w-[100%] bg-[linear-gradient(286deg,_#EDFFFB_0%,_#CEEDFF_100%)] rounded-3xl px-4 py-[12px] grid grid-flow-col gap-4 h-fit">
              <Image
                className="self-center place-self-end"
                src={"/web.svg"}
                alt="web"
                width={24}
                height={24}
              />
              <h3 className=" text-[24px] self-center place-self-start">
                13 chains in total
              </h3>
            </div>
            {/* chains and their funds */}
            <div className="w-[288px] grid gap-[16px] overflow-scroll max-h-[413px]">
              {chains.map((chain) => (
                <ChainFund chain={chain.name} bgCol={chain.bgProp} />
              ))}
            </div>
          </div>
          {/* rhs */}
          <div className="w-[694px] bg-[#f1f1f1] rounded-[24px] p-6 flex flex-col gap-4">
            <h1 className="text-center text-[27px] w-[100%]">Transfer funds</h1>
            {/* recipient */}
            <div className="w-[100%] grid gap-2">
              <h3 className="text-start text-[21px]">Type Recipient</h3>
              <input
                type="text"
                placeholder="Type address or ens or lens"
                className="p-[10px] text-center text-[18px] rounded-full hover:border-[2px] border-solid border-[#eeeeee] hover:p-[9px]"
              />
            </div>
            {/* network */}
            <div className="grid gap-2">
              <h3 className="text-start text-[21px]">Select Network</h3>
              <div className="grid grid-flow-col overflow-x-scroll gap-[8px]">
                {chains.map((chain) => (
                  <ChooseChain chain={chain.name} />
                ))}
              </div>
            </div>
            {/* amount */}
            <div className="grid gap-2 w-[100%]">
              <h3 className="text-start text-[21px]">Choose Amount</h3>
              <div className="grid grid-flow-col gap-[8px]">
                <input
                  type="text"
                  placeholder="Type amount"
                  className="p-[10px] text-center text-[18px] rounded-full w-[470px] hover:border-[2px] border-solid border-[#eeeeee] hover:p-[9px]"
                />
                {/* btn */}
                <div className="px-[20px] py-[10px] grid grid-flow-col rounded-full gap-2 bg-[linear-gradient(286deg,_#EDFFFB_0%,_#CEEDFF_100%)] hover:cursor-pointer hover:border-b-[4px] border-[1px] border-solid border-[#000000] hover:py-[8px]">
                  <h4 className="text-[21px] place-self-center self-center">
                    Transfer
                  </h4>
                  <Image
                    src={"/rocket.svg"}
                    height={24}
                    width={24}
                    alt="transfer"
                    className="self-center place-self-center"
                  />
                </div>
              </div>
            </div>
            {/* deduction detail */}
            <div className="w-[100%] grid gap-3 p-4 rounded-[16px] bg-[linear-gradient(286deg,_#EDFFFB_0%,_#CEEDFF_100%)]">
              <h2 className="text-center text-[24px]">
                Deduction detailed by chain:
              </h2>
              {/* deduction content */}
              <div className="grid grid-flow-col gap-4">
                {/* deduction LHS */}
                <div className="w-[366px] ">
                  {/* heading */}
                  <div className="grid grid-flow-col bg-[#ffffff] w-[366px] rounded-[8px] mb-[8px]">
                    <h4 className="w-[220px] p-[6px] text-center text-[21px]  border-r-[1px] border-solid border-[#1C1B1F]">
                      Chain
                    </h4>
                    <h4 className="text-center text-[21px] p-[6px] w-[146px]">
                      Subtotal
                    </h4>
                  </div>
                  {/* chain - subtotal */}
                  <div className="grid gap-2 overflow-y-scroll h-[180px]">
                    {chains.map((chain) => (
                      <ChainSubtotal chain={chain.name} />
                    ))}
                  </div>
                </div>
                {/* deduction RHS */}
                <div className="bg-[#CFE3E2] border-[#1c1b1f1b] border-solid border-[1px] rounded-[8px] w-[100%] h-[100%] grid p-s2">
                  <div className="grid grid-flow-col gap-[10px] pb-[16px] self-ends place-self-center">
                    <Image
                      src={"/logo.svg"}
                      alt="logo"
                      width={30}
                      height={30}
                      className="self-center place-self-center"
                    />
                    <h1 className="text-[32px] self-center place-self-center">
                      Unify Total
                    </h1>
                  </div>
                  <h2 className="text-[32px] self-start place-self-center">
                    $3.000 usdc
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default dashboardPage;

const chains = [
  {
    name: "ethereum",
    bgProp: "bg-[98deg,_#9BBFEA_11.35%,_#BBEBFF_88%]",
  },
  {
    name: "polygon",
    bgProp: "bg-[linear-gradient(82deg,_#DCABFF_0%,_#E4D3FF_100%)]",
  },
  {
    name: "scroll",
    bgProp: "bg-[linear-gradient(82deg,_#EFC676_0%,_#FCF9AA_100%)]",
  },
  {
    name: "base",
    bgProp: "bg-[linear-gradient(82deg,_#55C1E3_0%,_#D6FFF5_100%)]",
  },
  {
    name: "celo",
    bgProp: "bg-[linear-gradient(82deg,_#E2DA18_0%,_#FFEFB8_100%)]",
  },
  {
    name: "optimism",
    bgProp: "bg-[linear-gradient(82deg,_#FF8693_0%,_#FFE5E8_100%)]",
  },
  {
    name: "arbitrum",
    bgProp: "bg-[linear-gradient(82deg,_#12AAFF_0%,_#9DCCED_100%)]",
  },
  {
    name: "mantle",
    bgProp: "bg-[linear-gradient(82deg,_#B8E4B4_0%,_#EAEAEA_100%)]",
  },
  {
    name: "xdc",
    bgProp: "bg-[linear-gradient(82deg,_#F1F1F1_0%,_#9DDBEF_100%)]",
  },
  {
    name: "zetachain",
    bgProp: "bg-[linear-gradient(82deg,_#1CAF8A_0%,_#C0FFD2_100%)]",
  },
  {
    name: "linea",
    bgProp: "bg-[linear-gradient(82deg,_#B6B6B6_0.01%,_#FBFBFB_100%)]",
  },
  {
    name: "okx",
    bgProp: "bg-[linear-gradient(82deg,_#AAB99B_0.01%,_#D2FFA6_100%)]",
  },
  {
    name: "avalanche",
    bgProp: "bg-[linear-gradient(82deg,_#BD6F70_0.01%,_#FCC6C7_100%)]",
  },
];
