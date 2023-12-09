import Image from 'next/image';
import React from 'react';

const ChatRecieved = ({ timeStamp, text }: any) => {
  return (
    <div className="flex gap-[10px] bg-[#ffffff] p-4 rounded-e-[8px] rounded-ss-[8px] max-w-[69%]">
      <div className="flex flex-col justify-between">
        <Image src={'/dummyPfp.png'} height={36} width={36} alt="pfp" />
        <h6 className="bg-[#091D31] text-[9px] rounded-full px-2 py-1 self-end place-self-end w-fit h-fit text-[#ffffff]">
          {timeStamp}
        </h6>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ChatRecieved;
