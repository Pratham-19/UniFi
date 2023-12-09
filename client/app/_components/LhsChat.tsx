'use client';
import React, { useState } from 'react';
import { ChatProfile } from '.';

const LhsChat = () => {
  const [chat, setChat] = useState(false);
  return (
    <>
      <div className="flex gap-2 mt-6">
        <h1
          onClick={() => {
            setChat(true);
          }}
          className={`px-3 rounded-md hover:cursor-pointer hover:bg-[#b8b8b8] text-[24px] ${
            chat ? 'bg-[#b8b8b8]' : ''
          }`}
        >
          Chats
        </h1>
        <h1
          onClick={() => {
            setChat(false);
          }}
          className={`px-3 rounded-md hover:cursor-pointer hover:bg-[#b8b8b8] text-[24px] ${
            chat ? '' : 'bg-[#b8b8b8]'
          }`}
        >
          Invite
        </h1>
      </div>
      {chat && (
        <div className=" overflow-scroll">
          <ChatProfile notif={1} type="chat" />{' '}
          <ChatProfile notif={0} type="chat" />{' '}
          <ChatProfile notif={3} type="chat" />{' '}
          <ChatProfile notif={8} type="chat" />{' '}
          <ChatProfile notif={10} type="chat" />
        </div>
      )}
      {!chat && (
        <div>
          <div className=" overflow-scroll">
            <ChatProfile type="invite" /> <ChatProfile type="invite" />{' '}
            <ChatProfile type="invite" /> <ChatProfile type="invite" />{' '}
            <ChatProfile type="invite" />
          </div>
        </div>
      )}
    </>
  );
};

export default LhsChat;
