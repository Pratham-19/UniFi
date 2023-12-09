import Image from 'next/image';
import React from 'react';
import { cn } from '../_lib/utils';

const Footer = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'w-full bg-[#48637C] flex justify-center item-center py-3 absolute bottom-0 z-50',
        className
      )}
    >
      <Image
        className="self-center place-self-center"
        src={'/ethindiaLogo.svg'}
        alt="ethIndia"
        width={120}
        height={30}
      />
    </div>
  );
};

export default Footer;
