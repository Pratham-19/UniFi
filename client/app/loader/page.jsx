import React from 'react';
import Image from 'next/image';

const LoaderPage = () => {
  return (
    <main className="w-[100vw] h-[90vh] bg-[#F1F1F1] grid md:grid-cols-2 grid-flow-row">
      <div className="w-[600px] py-4 flex flex-col justify-center items-center gap-8 px-[64px] place-self-center">
        <h1 className="text-[48px]">Welcome to Unifi!</h1>
        <h2 className="text-[32px]">We are getting things ready...</h2>
        <div className="bg-[#48637c66] rounded-[16px] px-8 py-4 flex flex-col gap-8">
          <h2 className="text-[32px] text-[#ffffff]">Logging you to UNIFI</h2>
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
  );
};

export default LoaderPage;
