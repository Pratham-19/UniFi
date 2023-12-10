import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import AuthNavbar from '@/app/_components/Navbar/LoginNavbar';

const CreatePage = () => {
  return (
    <>
      <AuthNavbar />
      <main className="w-full h-[90vh] bg-[#F1F1F1] grid md:grid-cols-2 grid-flow-row">
        <div className="md:w-[600px] w-[510px] py-4 flex flex-col justify-center items-center gap-4 px-[64px] place-self-center">
          <h1 className="text-[39px] pb-8 font-normal">Create Wallet</h1>
          <Link
            href={'create/loader'}
            className="w-[100%] hover:shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31] hover:scale-95 transition-transform duration-300 "
          >
            <Image
              src={'/google.svg'}
              alt="google"
              height={40}
              width={40}
              className="self-center"
            />
            <h3 className="text-[24px] self-center">Google</h3>
          </Link>
          <h2 className="w-[100%] text-[24px] self-center place-self-center text-center">
            or
          </h2>
          <div className="w-[100%] flex flex-col gap-1">
            <label htmlFor="" className="text-[24px]">
              Email
            </label>
            <input
              type="email"
              id=""
              placeholder="roaringkitty@meowmail.com"
              className="text-[16px] rounded-[8px] border-[1px] border-[#091D31] border-solid py-4 px-2 bg-[#00000000]"
            />
          </div>
          <Link
            href={'/create'}
            className="w-[100%] shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31] hover:scale-95 transition-transform duration-300"
          >
            <Image
              src={'/magicLink.svg'}
              alt="magic link"
              height={40}
              width={40}
              className="self-center"
            />
            <h3 className="text-[24px] self-center">Send OTP</h3>
          </Link>
        </div>
        <div className="w-[100%] h-[80%]">
          <Image
            src={'/wallet-hands.png'}
            width={1024}
            height={1024}
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
              <h1 className="text-8xl self-center font-mar_reg">UNIFI</h1>
            </div>
            {/* Caption */}
            <h3 className="self-center place-self-center text-[32px]">
              Start transfering CrossChain
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreatePage;
