'use client';
import Image from 'next/image';
import { Navbar } from './_components';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-[100vw] bg-[linear-gradient(299deg,_#FFFCEA_0%,_#FFF8D4_0.01%,_#F8FCFF_100%)] flex flex-col items-center justify-center">
      <Navbar />
      <main className="flex flex-row justify-between pt-[40px]">
        <Image
          src={'/mainLanding/landing-boxleft.png'}
          alt="coin input"
          width={350}
          height={469}
          className=""
        />
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[39px] text-center">
            transferring cross-chain simplified
          </h3>
          <h1 className="text-[51px] font-semibold text-center">
            ONE CLICK TRANSFERS
          </h1>
          <button className="hover:shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31]">
            <Image
              src={'/blender.svg'}
              alt="blender"
              height={40}
              width={40}
              className="self-center"
            />
            <Link href={'/getStarted'} className="text-[24px] self-center">
              Start Transferring
            </Link>
          </button>
        </div>
        <Image
          src={'/mainLanding/landing-boxright.png'}
          alt="coin input"
          width={450}
          height={450}
          className=""
        />
      </main>
      <div className="bg-[#091D31] px-16 flex w-[100vw] pt-8 justify-around">
        <Image
          src={'/mainLanding/landing-boxes.png'}
          alt="lanign"
          height={280}
          width={380}
          className="rounded-[16px]"
        />
        <div className="flex flex-col gap-8">
          <h1 className="text-[54px] text-[#ffffff] font-semibold">
            Transfer between any chain
          </h1>
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="rounded-full w-fit border-solid border-[1px] border-[#ffffff] px-4 py-2 flex justify-center items-center gap-[10px]">
              <Image
                src={'/mainLanding/icon-people.png'}
                alt="landing"
                height={24}
                width={61}
                className="max-h-[24px] min-w-[61]"
              />
              <h4 className="text-[32px] text-[#ffffff] ">To anyone</h4>
            </div>
            <div className="rounded-full w-fit border-solid border-[1px] border-[#ffffff] px-4 py-2 flex gap-[10px]">
              <Image
                src={'/mainLanding/icon-globe.svg'}
                alt="landing"
                height={30}
                width={30}
                className=""
              />
              <h4 className="text-[32px] text-[#ffffff] ">Anywhere</h4>
            </div>
            <div className="rounded-full w-fit border-solid border-[1px] border-[#ffffff] px-4 py-2 flex gap-[10px]">
              <Image
                src={'/mainLanding/icon-time.svg'}
                alt="landing"
                height={24}
                width={33}
                className=""
              />
              <h4 className="text-[32px] text-[#ffffff] ">At Anytime</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[24px] py-[48px]">
        <div className="flex pr-8 rounded-[32px] bg-[radial-gradient(1508.38%_141.42%_at_0%_100%,_#D2FFA6_0%,_rgba(210,_255,_166,_0.20)_100%)]">
          <Image
            src={'/mainLanding/wallet.png'}
            alt="wallet"
            width={280}
            height={140}
          />
          <div className="py-12 ">
            <h5 className="text-[24px]">Experience the power of</h5>
            <h3 className="text-[48px]">Smart wallets</h3>
          </div>
        </div>
        <div className="flex pr-8 rounded-[32px] bg-[radial-gradient(1508.38%_141.42%_at_0%_100%,_#D8A6FF_0%,_rgba(216,_166,_255,_0.20)_100%)]">
          <Image
            src={'/mainLanding/landing-ethusd.png'}
            alt="wallet"
            width={280}
            height={140}
          />
          <div className="py-12 ">
            <h5 className="text-[24px]">Start transferring</h5>
            <h3 className="text-[48px]">Between chains</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <h3 className="text-[48px]">Time to chill and stop worrying</h3>
          <h1 className="text-[80px]">SOCIAL RECOVERY</h1>
          <h3 className="text-[48px]">for your wallet and funds</h3>
        </div>
        <Image
          src={'/mainLanding/shaking-hands.png'}
          alt="hanshake"
          height={500}
          width={666}
        />
      </div>
    </div>
  );
}
