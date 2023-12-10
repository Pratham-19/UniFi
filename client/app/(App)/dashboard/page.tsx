<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import { chains } from "@/app/_lib/constants";
import { ChainFund, ChooseChain, ChainSubtotal } from "../../_components";
import Image from "next/image";
import {
    GetAddressFromEns,
    GetAddressFromLens,
    GetENSFromAddress,
} from "@/app/_lib/airstack_queries";
import { LogInWithAnonAadhaar } from "anon-aadhaar-react";

import { init, useQuery } from "@airstack/airstack-react";
init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY ?? "");

const DashboardPage = () => {
    const [recipient, setRecipient] = useState("");
    const [network, setNetwork] = useState("");
    const [amount, setAmount] = useState("");
    const [verified, setVerified] = useState(false);
=======
'use client';
// celo40 zkevm30 sepolia30
import React, { useState } from 'react';
import { chains } from '@/app/_lib/constants';
import { ChainFund, ChooseChain, ChainSubtotal } from '../../_components';
import Image from 'next/image';
import {
  GetAddressFromEns,
  GetAddressFromLens,
  GetENSFromAddress,
  GetLensFromAddress
} from '@/app/_lib/airstack_queries';
import { init, useQuery } from '@airstack/airstack-react';
init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY ?? '');

const DashboardPage = () => {
  const [recipient, setRecipient] = useState('');
  const [network, setNetwork] = useState('');
  const [amount, setAmount] = useState('');
  const [send, setSend] = useState(0);
  let sum = 0;
  chains.map((chain) => {
    const fund = chain.name.charCodeAt(0) * 3 - chain.name.charCodeAt(2) * 2;
    sum = sum + fund;
  });
  const networks: any = [];
>>>>>>> 69d2cac (dashboard related)

    // ens TO ADD
    // const { data, loading, error } = useQuery(GetAddressFromEns, {
    //   name: 'lucifer0x17.eth'
    // });
    // const address = data.Domain.resolvedAddress;

    // lens to Add
    // const { data, loading, error } = useQuery(GetAddressFromLens, {
    //   lensHandle: 'lucifer0x17.lens'
    // });
    // const address = data.Socials.Social[0].userAddress;

<<<<<<< HEAD
    return (
        <>
            <div className="z-0 w-[100vw] flex flex-col bg-[linear-gradient(299deg,_#FFFCEA_0%,_#FFF8D4_0.01%,_#F8FCFF_100%)]">
=======
  // ADD to ENS
  const { data, loading, error } = useQuery(GetENSFromAddress, {
    resolvedAddress: '0x2acdf6a2f893687ccd341a1ad7e27102b665d8c4'
  });
  // console.log(data?.Domain?.name);
  const ens = data?.Domain?.name ?? 'vitalik.ens';

  // const {
  //   data: datax,
  //   loading: loadingx,
  //   error: errorx
  // } = useQuery(GetLensFromAddress, {
  //   resolvedAddress: '0x2acdf6a2f893687ccd341a1ad7e27102b665d8c4'
  // });
  // const lens = data.Socials.Social[0].profileName;
  // lens.map((profile: any) => {
  //   console.log(profile.profileImage);
  //   console.log(profile.profileName);
  // });

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
>>>>>>> 69d2cac (dashboard related)
                <Image
                    src={"/mainLanding/landing-nettop.png"}
                    width={1200}
                    height={900}
                    alt="bg"
                    className="absolute top-[100px] opacity-75 self-center z-0"
                />
<<<<<<< HEAD
                <div className="flex flex-row pt-0 z-10">
                    <div className="flex flex-col gap-4 self-start place-self-end p-4">
                        <div className="w-[288px] bg-[#FECE00] rounded-[16px] p-4 grid gap-4">
                            {/* profile */}
                            <div className="self-center place-self-center w-[100%] text-[#f1f1f1] grid grid-flow-col gap-4 rounded-[8px] bg-[#0BD262]">
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
                            {/* total funds */}
                            <div className="flex flex-col self-center place-self-center font-normal">
                                {" "}
                                <h2 className="text-left text-[27px]">
                                    Total Funds:
                                </h2>
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
                            {chains.map(chain => (
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
                            <h3 className="text-start text-[21px]">
                                Type Recipient
                            </h3>
                            <input
                                onChange={e => {
                                    setRecipient(e.target.value);
                                }}
                                type="text"
                                placeholder="Type address or ens or lens"
                                className="p-[10px] bg-[#f1f1f1] text-start text-[21px] rounded-[8px] border-[1px] border-solid border-[#BDCFD0]"
                            />
                        </div>
                        {/* network */}
                        <div className="grid gap-2">
                            <h3 className="text-start text-[21px]">
                                Select Network
                            </h3>
                            <div className="grid grid-flow-col overflow-x-scroll gap-[8px]">
                                {chains.map(chain => (
                                    <ChooseChain
                                        chain={chain.name}
                                        key={chain.name}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* amount */}
                        <div className="grid gap-2 w-[100%]">
                            <h3 className="text-start text-[21px]">
                                Choose Amount
                            </h3>
                            <div className="grid grid-flow-col gap-[8px]">
                                <div className="flex  bg-[#f1f1f1] text-start text-[21px] rounded-[8px] w-[470px] border-[1px] border-solid border-[#BDCFD0] ">
                                    <input
                                        type="text"
                                        placeholder="Type amount"
                                        className="w-[100%] h-[100%] p-[10px] rounded-[12xp]"
                                        onChange={e => {
                                            setAmount(e.target.value);
                                        }}
                                    />
                                    <select name="dropdown" className="">
                                        <option value={"usdc"}>USDC</option>
                                        <option value={"fxd"}>FXD</option>
                                    </select>
                                </div>
                                {/* btn */}
                                {verified ? (
                                    <div className="px-[20px] py-[10px] grid grid-flow-col rounded-[8px] gap-2 bg-[#48637C] hover:cursor-pointer hover:border-b-[4px] hover:py-[8px]">
                                        <h4 className="text-[21px] text-[#ffffff] font-bold place-self-center self-center">
                                            Preview
                                        </h4>
                                    </div>
                                ) : (
                                    <LogInWithAnonAadhaar />
                                )}
                            </div>
                        </div>
                        <Image
                            src={"/transfer-chest.png"}
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
                                    {chains.map(chain => (
                                        <ChainSubtotal
                                            chain={chain.name}
                                            key={chain.name}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* deduction total */}
                            <div className="bg-[#f1f1f1] font-normal border-[#1c1b1f1b] border-solid border-[1px] rounded-[8px] w-[100%] h-[100%] flex flex-col p-2 items-center justify-center">
                                <div className="grid grid-flow-col gap-[10px] pb-[0px] font-semibold">
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
                                <h2 className="text-[32px]">$3.000 usdc</h2>
                            </div>
                            <button className="mt-2 w-[100%] text-[21px] font-normal bg-[#0BD262] text-[#000000] hover:shadow-[0px_6px_0px_0px_#091D31] h-fit  rounded-[8px] px-8 py-2 flex items-center justify-center gap-4  border-[1px] border-solid border-[#091D31] z-50">
                                <h4>Transfer Now</h4>
                                <Image
                                    src={"/rocket.svg"}
                                    alt="transfer"
                                    width={21}
                                    height={21}
                                    className=""
                                />
                            </button>
                        </div>
                    </div>
=======
                <h3 className="text-[21px] self-center place-self-start">
                  {ens}
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
                  ${sum}
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
              {chains.map((chain) => {
                const fund =
                  chain.name.charCodeAt(0) * 3 - chain.name.charCodeAt(2) * 2;
                sum = sum + fund;
                return (
                  <ChainFund
                    chain={chain.name}
                    bgCol={chain.bgProp}
                    key={chain.name}
                    fund={fund}
                  />
                );
              })}
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
                onChange={(e) => {
                  setRecipient(e.target.value);
                }}
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
                  <div
                    onClick={() => {
                      networks.push(chain.name);
                      console.log(networks);
                    }}
                  >
                    <ChooseChain chain={chain.name} key={chain.name} />
                  </div>
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
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                  <select name="dropdown" className="">
                    <option value={'usdc'}>USDC</option>
                    <option value={'fxd'}>FXD</option>
                  </select>
>>>>>>> 69d2cac (dashboard related)
                </div>
            </div>
<<<<<<< HEAD
        </>
    );
=======
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
                <ChainSubtotal chain="celo" fund={40} />
                <ChainSubtotal chain="polygon" fund={30} />
                <ChainSubtotal chain="ethereum" fund={30} />
                {/* {send == 0 && (
                  <div className="flex flex-col overflow-y-scroll h-[450px]">
                    {chains.map((chain: any) => (
                      <ChainSubtotal chain={chain.name} key={chain} />
                    ))}
                  </div>
                )}
                {send != 0 && (
                  <div className="flex flex-col overflow-y-scroll h-[450px]">
                    {networks.map((chain: any) => (
                      <ChainSubtotal
                        chain={chain}
                        key={chain}
                        fund={send / networks.length()}
                      />
                    ))}
                  </div>
                )} */}
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
                <h2 className="text-[32px]">$100 usdc</h2>
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
      </div>
    </>
  );
>>>>>>> 69d2cac (dashboard related)
};

export default DashboardPage;
