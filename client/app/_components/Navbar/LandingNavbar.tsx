'use client';
import Link from 'next/link';
import { cn } from '../../_lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Marcellus } from 'next/font/google';
import MaxWidthWrapper from '../MaxWidthWrapper';

const marcellus = Marcellus({ weight: ['400'], subsets: ['latin'] });

const LandingNavbar = ({ className }: { className?: string }) => {
  const [show, setScroll] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);

  //TODO: Making animation for navbar

  const handleScroll = () => {
    if (window.scrollY > 30) {
      lastScrollY > window.scrollY;
      //   ? setScroll("bg-white text-black shadow-md transalate-y-0 top-0")
      //   : setScroll(" -translate-y-10 duration-700");
      setScroll('top-0 transalate-y-0 ');
    } else {
      setScroll('bg-transparent transalate-y-0 text-white');
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log(lastScrollY);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        'w-full bg-[#F1F1F1]/[0.5] border-b border-black flex justify-between items-center h-16 px-5 py-9 z-50  transition-transform duration-300 shadow-md',
        className,
        marcellus.className,
        scroll
      )}
    >
      <MaxWidthWrapper className="flex justify-between items-center">
        <div className="flex">
          <Image
            src="/logo.svg"
            alt="LandingNavbar-logo"
            width={60}
            height={60}
            className="h-12"
          />
          <h2 className={cn('my-auto font-medium uppercase text-3xl')}>
            Unifi
          </h2>
        </div>

        <Link
          href="/get-started"
          className={
            'bg-[#48637C] text-white flex justify-between items-center rounded-lg py-2 px-9 border border-b-4 border-black/[0.4] hover:translate-y-[3px] hover:border-b-2 transition-transform duration-300'
          }
        >
          <h2 className="text-xl font-normal tracking-wider font-cg_reg">
            Start Transfering
          </h2>
        </Link>
      </MaxWidthWrapper>
    </nav>
  );
};

export default LandingNavbar;
