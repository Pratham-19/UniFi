import Image from 'next/image';
import React from 'react';

const ChatProfile = ({ notif, type }: any) => {
  return (
    <div className="p-2 gap-2 flex w-[100%] justify-between">
      <div className="rounded-full bg-[#091D31] p-[2px] w-fit h-fit">
        <Image
          src={'/dummyPfp.png'}
          alt="pfp"
          height={24}
          width={24}
          className=""
        />
        {notif && notif > 0 && (
          <h2 className="bg-[#ffffff] mt-2 rounded-full p-[2px] text-[12px] text-center font-bold">
            {notif}
          </h2>
        )}
      </div>

      {type == 'chat' && (
        <div className="w-[100%]">
          <h2 className="text-[18px] font-bold">0xfe...2n3G</h2>
          <div className="flex self-center place-self-start justify-between">
            <h4 className="text-[15px] text-[#505050]">
              lorem ipsum dolor ame...
            </h4>
            <h6 className="bg-[#091D31] text-[9px] rounded-full px-2 py-1 self-end place-self-end w-fit h-fit text-[#ffffff]">
              15:22
            </h6>
          </div>
        </div>
      )}
      {type == 'invite' && (
        <div className="flex flex-row w-[100%] justify-between items-center">
          <h2 className="text-[18px] font-bold">0xfe...2n3G</h2>
          <h6 className="bg-[#091D31] text-[15px] text-right rounded-full px-6 py-2 w-fit h-fit text-[#ffffff]">
            Invite!
          </h6>
        </div>
      )}
    </div>
  );
};

export default ChatProfile;
