'use client';
import Image from 'next/image';
import { Footer, Navbar } from '../_components';
import { useState } from 'react';
import Link from 'next/link';

const GetStartedPage = () => {
  const [login, setLogin] = useState(0);
  // const [showPassword1, setShowPassword1] = useState(false);
  // const [showPassword2, setShowPassword2] = useState(false);
  // const [linkSent, setLinkSent] = useState(false);
  return (
    <>
      <main className="w-[100vw] h-[90vh] bg-[#F1F1F1] grid md:grid-cols-2 grid-flow-row">
        <div className="md:w-[600px] w-[510px] py-4 flex flex-col justify-center gap-4 px-[64px] place-self-center">
          <Link
            href={'/login'}
            className="hover:shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31]"
          >
            <Image
              src={'/walletConnectB.svg'}
              alt="wallet connect"
              height={40}
              width={40}
              className="self-center"
            />
            <h3 className="text-[24px] self-center">Wallet Connect</h3>
          </Link>
          <Link
            href={'/login'}
            className="hover:shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31]"
          >
            <Image
              src={'/metamask.svg'}
              alt="metamask"
              height={40}
              width={40}
              className="self-center"
            />
            <h3 className="text-[24px] self-center">Metamask</h3>
          </Link>
          <h2 className="text-[24px] self-center place-self-center">or</h2>
          <Link
            href={'/create'}
            className="hover:shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31]"
          >
            <Image
              src={'/safeWallet.svg'}
              alt="login email"
              height={40}
              width={40}
              className="self-center"
            />
            <h3 className="text-[24px] self-center">Log in</h3>
          </Link>
        </div>
        <div className="w-[100%] h-[100%]">
          <Image
            src={'/landing.png'}
            width={1200}
            height={1200}
            alt="mixers"
            className="min-h-[96%]"
          />
          <div className="grid bg-[#f1f1f133] backdrop-blur-[25px] mt-[-147px] rounded-ee-[32px] p-4">
            {/* LOGO NAME */}
            <div className="flex flex-row justify-center gap-6 self-center">
              <Image
                className="place-self-center self-center"
                src={'/logo.svg'}
                alt="logo"
                width={100}
                height={100}
              />
              <h1 className="text-8xl self-center">UNIFY</h1>
            </div>
            {/* Caption */}
            <h3 className="self-center place-self-center text-[32px]">
              Start transfering CrossChain
            </h3>
          </div>
        </div>
      </main>

      {/* {login == 9 && (
        <main className="w-[100vw] h-[90vh] bg-[#F1F1F1] grid md:grid-cols-2 grid-flow-row">
          <div className="w-[600px] py-4 flex flex-col justify-center items-center gap-8 px-[64px] place-self-center">
            <h1 className="text-[48px]">Welcome to Unifi!</h1>
            <h2 className="text-[32px]">We are getting things ready...</h2>
            <div className="bg-[#48637c66] rounded-[16px] px-8 py-4 flex flex-col gap-8">
              <h2 className="text-[32px] text-[#ffffff]">
                Logging you to UNIFI
              </h2>
    
            </div>
          </div>
          <div className="w-[100%] h-[100%]">
            <Image
              src={'/landing4.png'}
              width={1200}
              height={1200}
              alt="mixers"
              className="min-h-[96%]"
            />
            <div className="grid bg-[#f1f1f133] backdrop-blur-[25px] mt-[-147px] rounded-ee-[32px] p-4">

              <div className="flex flex-row justify-center gap-6 self-center">
                <Image
                  className="place-self-center self-center"
                  src={'/logo.svg'}
                  alt="logo"
                  width={100}
                  height={100}
                />
                <h1 className="text-8xl self-center">UNIFY</h1>
              </div>

              <h3 className="self-center place-self-center text-[32px]">
                Start transfering CrossChain
              </h3>
            </div>
          </div>
        </main>
      )} */}
      {/* <Footer /> */}
    </>
  );
};

export default GetStartedPage;

const chains = [
  {
    name: 'ethereum',
    bgProp: 'bg-[98deg,_#9BBFEA_11.35%,_#BBEBFF_88%]'
  },
  {
    name: 'polygon',
    bgProp: 'bg-[linear-gradient(82deg,_#DCABFF_0%,_#E4D3FF_100%)]'
  },
  {
    name: 'scroll',
    bgProp: 'bg-[linear-gradient(82deg,_#EFC676_0%,_#FCF9AA_100%)]'
  },
  {
    name: 'base',
    bgProp: 'bg-[linear-gradient(82deg,_#55C1E3_0%,_#D6FFF5_100%)]'
  },
  {
    name: 'celo',
    bgProp: 'bg-[linear-gradient(82deg,_#E2DA18_0%,_#FFEFB8_100%)]'
  },
  {
    name: 'optimism',
    bgProp: 'bg-[linear-gradient(82deg,_#FF8693_0%,_#FFE5E8_100%)]'
  },
  {
    name: 'arbitrum',
    bgProp: 'bg-[linear-gradient(82deg,_#12AAFF_0%,_#9DCCED_100%)]'
  },
  {
    name: 'mantle',
    bgProp: 'bg-[linear-gradient(82deg,_#B8E4B4_0%,_#EAEAEA_100%)]'
  },
  {
    name: 'xdc',
    bgProp: 'bg-[linear-gradient(82deg,_#F1F1F1_0%,_#9DDBEF_100%)]'
  },
  {
    name: 'zetachain',
    bgProp: 'bg-[linear-gradient(82deg,_#1CAF8A_0%,_#C0FFD2_100%)]'
  },
  {
    name: 'linea',
    bgProp: 'bg-[linear-gradient(82deg,_#B6B6B6_0.01%,_#FBFBFB_100%)]'
  },
  {
    name: 'okx',
    bgProp: 'bg-[linear-gradient(82deg,_#AAB99B_0.01%,_#D2FFA6_100%)]'
  },
  {
    name: 'avalanche',
    bgProp: 'bg-[linear-gradient(82deg,_#BD6F70_0.01%,_#FCC6C7_100%)]'
  }
];
