import React from 'react';
import { chains } from '@/app/_lib/constants';
import {
  Navbar,
  Footer,
  ChainFund,
  ChooseChain,
  ChainSubtotal
} from '../_components';
import Image from 'next/image';

const DashboardPage = () => {
  return (
    <>
      <div className="z-0 w-[100vw] flex flex-col bg-[linear-gradient(299deg,_#FFFCEA_0%,_#FFF8D4_0.01%,_#F8FCFF_100%)]">
        <Image
          src={'/mainLanding/landing-nettop.png'}
          width={1200}
          height={900}
          alt="bg"
          className="absolute top-[100px] opacity-75 self-center z-0"
        />
        <div className="flex flex-row pt-0 z-10">
          <div className="flex flex-col gap-4 self-start place-self-end p-4">
            <div className="w-[288px] bg-[#FECE00] rounded-[16px] p-4 grid gap-4">
              {/* profile */}
              <div className="self-center place-self-center w-[100%] text-[#f1f1f1] grid grid-flow-col gap-4 rounded-[8px] bg-[#0BD262]">
                <Image
                  src={'/defaultpfp.png'}
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
                  src={'/copy.svg'}
                  alt="copy"
                  height={24}
                  width={24}
                />
              </div>
              {/* total funds */}
              <div className="flex flex-col self-center place-self-center font-normal">
                {' '}
                <h2 className="text-left text-[27px]">Total Funds:</h2>
                <h1 className="text-center text-[54px] leading-[60px]">
                  $25.000
                </h1>
                <h4 className="text-center text-[16px]">
                  *assets represented in USDC
                </h4>
              </div>
            </div>
            {/* chain number */}
            <div className="w-[100%] bg-[#FECE00] font-normal rounded-[16px] px-4 py-[12px] grid grid-flow-col gap-4 h-fit">
              <Image
                className="self-center place-self-end"
                src={'/web.svg'}
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
                <ChainFund
                  chain={chain.name}
                  bgCol={chain.bgProp}
                  key={chain.name}
                />
              ))}
            </div>
          </div>
          <div className="w-[694px] bg-[#00000000] rounded-[24px] p-6 flex flex-col gap-4">
            <h1 className="text-center text-[42px] w-[100%] font-bold">
              Transfer funds
            </h1>
            {/* recipient */}
            <div className="w-[100%] grid gap-2">
              <h3 className="text-start text-[21px]">Type Recipient</h3>
              <input
                type="text"
                placeholder="Type address or ens or lens"
                className="p-[10px] bg-[#f1f1f1] text-start text-[21px] rounded-[8px] border-[1px] border-solid border-[#BDCFD0]"
              />
            </div>
            {/* network */}
            <div className="grid gap-2">
              <h3 className="text-start text-[21px]">Select Network</h3>
              <div className="grid grid-flow-col overflow-x-scroll gap-[8px]">
                {chains.map((chain) => (
                  <ChooseChain chain={chain.name} key={chain.name} />
                ))}
              </div>
            </div>
            {/* amount */}
            <div className="grid gap-2 w-[100%]">
              <h3 className="text-start text-[21px]">Choose Amount</h3>
              <div className="grid grid-flow-col gap-[8px]">
                <div className="flex  bg-[#f1f1f1] text-start text-[21px] rounded-[8px] w-[470px] border-[1px] border-solid border-[#BDCFD0] ">
                  <input
                    type="text"
                    placeholder="Type amount"
                    className="w-[100%] h-[100%] p-[10px] rounded-[12xp]"
                  />
                  <select name="dropdown" className="">
                    <option value={'usdc'}>USDC</option>
                    <option value={'fxd'}>FXD</option>
                  </select>
                </div>
                {/* btn */}
                <div className="px-[20px] py-[10px] grid grid-flow-col rounded-[8px] gap-2 bg-[#48637C] hover:cursor-pointer hover:border-b-[4px] hover:py-[8px]">
                  <h4 className="text-[21px] text-[#ffffff] font-bold place-self-center self-center">
                    Preview
                  </h4>
                </div>
              </div>
            </div>
            <Image
              src={'/transfer-chest.png'}
              alt="transaction chest"
              width={374}
              height={374}
            />
          </div>
          <div className="h-fit flex flex-col gap-3 m-4 p-4 rounded-[16px] bg-[#FECE00]">
            <h2 className="text-center text-[24px]">
              Deduction detailed by chain:
            </h2>
            {/* deduction content */}
            <div className="flex flex-col items-center">
              {/* deduction LHS */}
              <div className="w-[366px]">
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
                <div className="flex flex-col overflow-y-scroll h-[450px]">
                  {chains.map((chain) => (
                    <ChainSubtotal chain={chain.name} key={chain.name} />
                  ))}
                </div>
              </div>
              {/* deduction total */}
              <div className="bg-[#f1f1f1] font-normal border-[#1c1b1f1b] border-solid border-[1px] rounded-[8px] w-[100%] h-[100%] flex flex-col p-2 items-center justify-center">
                <div className="grid grid-flow-col gap-[10px] pb-[0px] font-semibold">
                  <Image
                    src={'/logo.svg'}
                    alt="logo"
                    width={30}
                    height={30}
                    className="self-center place-self-center"
                  />
                  <h1 className="text-[32px] self-center place-self-center">
                    Unify Total
                  </h1>
                </div>
                <h2 className="text-[32px]">$3.000 usdc</h2>
              </div>
              <button className="mt-2 w-[100%] text-[21px] font-normal bg-[#0BD262] text-[#000000] hover:shadow-[0px_6px_0px_0px_#091D31] h-fit  rounded-[8px] px-8 py-2 flex items-center justify-center gap-4  border-[1px] border-solid border-[#091D31] z-50">
                <h4>Transfer Now</h4>
                <Image
                  src={'/rocket.svg'}
                  alt="transfer"
                  width={21}
                  height={21}
                  className=""
                />
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DashboardPage;
