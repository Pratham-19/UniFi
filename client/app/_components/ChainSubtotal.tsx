import Image from 'next/image';
import React from 'react';

const ChainSubtotal = ({ chain }: any) => {
  return (
    <div className="w-[366px] border-b-[1px] border-solid border-[#000000] grid grid-flow-col bg-[#f4eed3] py-1">
      <div className="w-[220px] px-4 py-[4px] grid grid-flow-col gap-[10px]">
        <Image
          src={`/chainSubtotal/${chain}.png`}
          height={30}
          width={30}
          alt="optimism chain"
          className="place-self-start self-center"
        />
        <h4 className="text-[18px] capitalize">{chain}</h4>
      </div>
      <h4 className="w-[146px] text-[#000000] px-[10px] py-[4px] text-center text-[18px] rounded-r-[8px]">
        $230
      </h4>
    </div>
  );
};

export default ChainSubtotal;
