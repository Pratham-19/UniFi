import Image from 'next/image';
import Link from 'next/link';
import LandingNavbar from '@/app/_components/Navbar/LandingNavbar';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-[linear-gradient(299deg,_#FFFCEA_0%,_#FFF8D4_0.01%,_#F8FCFF_100%)] ">
      <LandingNavbar />
      <div className="min-h-[80vh] flex flex-row justify-between pt-[40px] z-10">
        <Image
          src={'/mainLanding/landing-boxleft.png'}
          alt="coin input"
          width={712}
          height={964}
          quality={100}
          className="absolute left-0 w-[25vw] "
        />
        <div className="flex flex-col justify-start items-center z-20 pt-12 space-y-3">
          <h3 className="text-[39px] text-center font-normal">
            transferring cross-chain simplified
          </h3>
          <h1 className="text-[66px] font-bold text-center">
            ONE CLICK TRANSFERS
          </h1>
          <Link
            href="/get-started"
            className="shadow-md  h-fit rounded-[8px] px-12 py-3 flex gap-4 justify-center items-center border-[1px] border-solid border-[#091D31] border-b-[6px] hover:border-b-4 transition-transform duration-300 hover:scale-95 bg-[#f1f1f1]"
          >
            <Image
              src={'/blender.svg'}
              alt="blender"
              height={30}
              width={30}
              className="self-center w-6 h-6"
            />
            <h2 className="text-lg">Start Transfering</h2>
          </Link>
        </div>
        <Image
          src={'/mainLanding/landing-boxright.png'}
          alt="coin input"
          width={940}
          height={980}
          className="absolute right-0 w-[32vw]"
        />
      </div>

      <Image
        src={'/mainLanding/landing-nettop.png'}
        width={1200}
        height={900}
        alt="bg"
        className="absolute top-0 opacity-75 w-full"
        aria-hidden="true"
      />
      <div className="bg-[#091D31] px-16 flex w-full pt-8 justify-around z-10">
        <Image
          src={'/mainLanding/landing-boxes.png'}
          alt="lanign"
          height={400}
          width={270}
          className="rounded-[16px] w-[30vw]"
        />
        <div className="flex flex-col gap-6 px-16 self-center items-center justify-centers">
          <h1 className="text-[45px] text-[#ffffff] font-semibold text-center">
            Transfer between any chain.
          </h1>
          <div className="flex flex-row justify-center items-center gap-4 font-semibold">
            <div className="rounded-full w-fit border-solid border-[1px] border-[#ffffff] px-4 py-1 flex justify-center items-center gap-[10px]">
              <Image
                src={'/mainLanding/icon-people.png'}
                alt="landing"
                height={24}
                width={61}
                className="max-h-[24px] min-w-[61]"
              />
              <h4 className="text-[21px] text-[#ffffff] ">To anyone</h4>
            </div>
            <div className="rounded-full w-fit border-solid border-[1px] border-[#ffffff] px-4 py-1 flex gap-[10px]">
              <Image
                src={'/mainLanding/icon-globe.svg'}
                alt="landing"
                height={30}
                width={30}
                className=""
              />
              <h4 className="text-[21px] text-[#ffffff] ">Anywhere</h4>
            </div>
            <div className="rounded-full w-fit border-solid border-[1px] border-[#ffffff] px-4 py-1 flex gap-[10px]">
              <Image
                src={'/mainLanding/icon-time.svg'}
                alt="landing"
                height={24}
                width={33}
                className=""
              />
              <h4 className="text-[21px] text-[#ffffff] ">At Anytime</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[24px] py-[48px] font-semibold px-6 z-10">
        <div className="flex pr-8 gap-6 rounded-[32px] bg-[radial-gradient(1508.38%_141.42%_at_0%_100%,_#D2FFA6_0%,_rgba(210,_255,_166,_0.20)_100%)]">
          <Image
            src={'/mainLanding/wallet.png'}
            alt="wallet"
            width={280}
            height={200}
            quality={100}
            className="h-[90%] self-end"
          />
          <div className="py-12 self-center">
            <h5 className="text-[24px]">Experience the power of</h5>
            <h3 className="text-[39px] leading-10">Smart wallets</h3>
          </div>
        </div>
        <div className="flex pr-8 gap-4 rounded-[32px] bg-[radial-gradient(1508.38%_141.42%_at_0%_100%,_#D8A6FF_0%,_rgba(216,_166,_255,_0.20)_100%)]">
          <Image
            src={'/mainLanding/landing-ethusd.png'}
            alt="wallet"
            width={280}
            height={200}
            quality={100}
            className="h-[90%] self-end"
          />
          <div className="py-12 self-center">
            <h5 className="text-[24px]">Start transferring</h5>
            <h3 className="text-[39px] leading-10">Between chains</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] z-10 mt-12">
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-[40px] font-normal">
            Time to chill and stop worrying
          </h3>
          <h1 className="text-[80px] font-cg_bold">SOCIAL RECOVERY</h1>
          <h3 className="text-[40px] font-normal">for your wallet and funds</h3>
        </div>
        <Image
          src={'/mainLanding/shaking-hands.png'}
          alt="hanshake"
          height={500}
          width={666}
          className="self-center"
        />
      </div>
      <Image
        src={'/mainLanding/landing-netbtm.png'}
        alt="bg"
        height={900}
        width={1200}
        className="absolute pt-[1200px] opacity-50 self-end z-0 w-full"
      />
    </main>
  );
}
