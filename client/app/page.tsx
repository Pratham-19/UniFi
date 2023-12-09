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
          <div>
            <div className="rounded-full border-solid border-[1px] border-[#ffffff] px-4 py-2 flex gap-[10px]">
              <Image
                src={'/mainLanding/icon-people.png'}
                alt="lanign"
                height={280}
                width={380}
                className="rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
