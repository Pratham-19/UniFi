import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <main className="w-[100vw] h-[90vh] bg-[#F1F1F1] grid md:grid-cols-2 grid-flow-row">
        <div className="md:w-[600px] w-[510px] py-4 flex flex-col justify-center items-center gap-4 px-[64px] place-self-center">
          <h1 className="text-[39px] pb-8 font-normal">Create @</h1>
          <button className="w-[100%] hover:shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31]">
            <Image
              src={'/google.svg'}
              alt="google"
              height={40}
              width={40}
              className="self-center"
            />
            <h3 className="text-[24px] self-center">Google</h3>
          </button>
          <button className="w-[100%] hover:shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31]">
            <Image
              src={'/google.svg'}
              alt="google"
              height={40}
              width={40}
              className="self-center"
            />
            <h3 className="text-[24px] self-center">Google</h3>
          </button>
          <h2 className="w-[100%] text-[24px] self-center place-self-center text-center">
            or
          </h2>
          <div className="w-[100%] flex flex-col gap-1">
            <label htmlFor="" className="text-[24px]">
              Write email here
            </label>
            <input
              type="email"
              name=""
              id=""
              placeholder="e.g. roaringkitty@meowmail.com"
              className="text-[16px] rounded-[8px] border-[1px] border-[#091D31] border-solid py-4 px-2 bg-[#00000000]"
            />
          </div>
          {/* <div className="flex flex-col gap-1">
      <label htmlFor="" className="text-[24px]">
        Password
      </label>
      <div className="flex justify-between items-center text-[18px] rounded-[8px] px-2 border-[1px] border-[#091D31] border-solid  bg-[#00000000]">
        <input
          type={showPassword1 ? "text" : "password"}
          name=""
          id=""
          placeholder="enter your password"
          className="bg-[#00000000] w-[100%] py-4 outline-none"
        />
        <Image
          src={showPassword1 ? "/closeEye.svg" : "/eye.svg"}
          onClick={() => {
            setShowPassword1(!showPassword1);
          }}
          alt="password"
          height={38}
          width={38}
          className="hover:cursor-pointer hover:bg-[#bdcfd123] h-fit rounded-full"
        />
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="text-[24px]">
        Confirm Password
      </label>
      <div className="flex justify-between items-center text-[18px] rounded-[8px] px-2 border-[1px] border-[#091D31] border-solid  bg-[#00000000]">
        <input
          type={showPassword2 ? "text" : "password"}
          name=""
          id=""
          placeholder="enter your password"
          className="bg-[#00000000] w-[100%] py-4 outline-none"
        />
        <Image
          src={showPassword2 ? "/closeEye.svg" : "/eye.svg"}
          onClick={() => {
            setShowPassword2(!showPassword2);
          }}
          alt="password"
          height={38}
          width={38}
          className="hover:cursor-pointer hover:bg-[#bdcfd123] h-fit rounded-full"
        />
      </div>
    </div> */}
          <Link
            href={'/login/otp'}
            className="w-[100%] hover:shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31]"
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
        <div className="w-[100%] h-[100%]">
          <Image
            src={'/landing2.png'}
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
    </>
  );
};

export default LoginPage;
