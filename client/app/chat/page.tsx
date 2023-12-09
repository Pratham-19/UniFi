import Image from 'next/image';
import React from 'react';
import { ChatProfile, ChatRecieved, ChatSent, LhsChat } from '../_components';

const ChatPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="w-[600px] p-2 gap-4">
        <div className="mb-4 self-center place-self-center w-[100%] text-[#f1f1f1] grid grid-flow-col gap-4 rounded-[8px] bg-[#0BD262]">
          <Image
            src={'/defaultpfp.png'}
            alt="pfp"
            width={72}
            height={72}
            className="self-center place-self-start"
          />
          <h3 className="text-[18px] self-center place-self-start text-[#000000]">
            vitalik.ens
          </h3>
          <Image
            className="self-center place-self-start mr-6 hover:border-[1px] border-solid border-[#48637C]"
            src={'/copy2.svg'}
            alt="copy"
            height={24}
            width={24}
          />
        </div>
        <div className="rounded-[8px] bg-[#CFE3E2] py-3 px-2 flex w-[100%] justify-between">
          {' '}
          <input
            type="text"
            name=""
            id=""
            className="bg-[#CFE3E2] text-[16px] w-[100%]"
            placeholder="Search address, ens, lens..."
          />
          <Image src={'/icon-search.svg'} width={24} height={24} alt="search" />
        </div>
        <LhsChat />
      </div>
      <div className="flex flex-col w-[100%] rounded-[24px] bg-[#CFE3E2] p-4">
        <div className="overflow-scroll flex flex-col gap-2">
          <ChatRecieved
            timeStamp="14:31"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam, molestias molestiae nulla, dolorem distinctio unde odio modi illum sapiente fugiat illo provident explicabo accusamus quam sequi! Nemo, perferendis reprehenderit!"
          />
          <ChatSent
            timeStamp="14:31"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam, molestias molestiae nulla, dolorem distinctio unde odio modi illum sapiente fugiat illo provident explicabo accusamus quam sequi! Nemo, perferendis reprehenderit!"
          />
        </div>
        <div className="bottom-2 fixed flex bg-[#BDCFD0] rounded-[12px] px-2 max-w-[900px] w-[100%] self-center justify-self-center">
          <button className="p-1 w-fit">
            <Image src={'/icon-attach.svg'} alt="file" width={24} height={24} />
          </button>
          <input
            type="text"
            name=""
            id=""
            className="w-[100%] h-[100%] bg-[#BDCFD0] py-3"
            placeholder="Type your message..."
          />
          <button className="p-1 w-fit">
            <Image src={'/icon-send.svg'} alt="send" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
