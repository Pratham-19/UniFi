import { cn } from '../../_lib/utils';
import Image from 'next/image';
import React from 'react';
import { Marcellus } from 'next/font/google';
import MaxWidthWrapper from '../MaxWidthWrapper';

const marcellus = Marcellus({ weight: ['400'], subsets: ['latin'] });

const AuthNavbar = ({
  className,
  address
}: {
  className?: string;
  address?: string;
}) => {
  return (
    <nav
      className={cn(
        'w-full bg-[#F1F1F1]/[0.5] border-b border-black flex justify-between items-center h-16 px-5 py-9 z-50  transition-transform duration-300 shadow-md backdrop-blur-lg sticky top-0 ',
        className,
        marcellus.className
      )}
    >
      <MaxWidthWrapper className="flex justify-between items-center">
        <div className="flex">
          <Image
            src="/logo.svg"
            alt="AuthNavbar-logo"
            width={60}
            height={60}
            className="h-12"
          />
          <h2 className={cn('my-auto font-medium uppercase text-3xl')}>
            Unifi
          </h2>
        </div>

        <button
          className={
            'bg-[#48637C] text-white flex justify-between items-center rounded-lg py-2 px-9 border border-b-4 border-black/[0.4] hover:translate-y-[3px] hover:border-b-2 transition-transform duration-300'
          }
        >
          <h2 className="text-xl font-normal tracking-wider font-cg_reg">
            {address
              ? address.substring(0, 4) +
                '....' +
                address.substring(address.length - 4)
              : 'Connect Wallet'}
          </h2>
        </button>
      </MaxWidthWrapper>
    </nav>
  );
};

export default AuthNavbar;