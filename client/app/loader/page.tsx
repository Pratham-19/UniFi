'use client';
import Image from 'next/image';
import AuthNavbar from '../_components/Navbar/LoginNavbar';
import { useEffect } from 'react';
import { loginWeb3Auth, init } from '@/sdk/AccountAbstraction';
import toast from 'react-hot-toast';

const LoaderPage = () => {
  useEffect(() => {
    toast.loading('Connecting to wallet..', {
      id: 'connectWallet'
    });
    init();
    loginWeb3Auth();
    toast.dismiss('connectWallet');
  }, []);
  return (
    <>
      <AuthNavbar />
      <main className="w-[99vw] h-[90vh] bg-[#F1F1F1] grid md:grid-cols-2 grid-flow-row">
        <div className="w-[600px] py-4 flex flex-col justify-center items-center gap-8 px-[64px] place-self-center">
          <h1 className="text-[48px]">Welcome to Unifi!</h1>
          <h2 className="text-[32px]">We are getting things ready...</h2>
          <div className="bg-[#48637c66] rounded-[16px] px-8 py-4 flex flex-col gap-8">
            <h2 className="text-[32px] text-[#ffffff]">Logging you to UNIFI</h2>
          </div>
        </div>
        <div className="w-full h-[100%]">
          <Image
            src={'/wallet-boxes.png'}
            width={1024}
            height={1024}
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
              <h1 className="text-8xl self-center font-mar_reg">UNIFI</h1>
            </div>

            <h3 className="self-center place-self-center text-[32px]">
              Start transfering CrossChain
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoaderPage;
