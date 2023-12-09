"use client";
import Image from "next/image";
import React, { useState } from "react";
import { NotifTransact } from ".";

const Navbar = () => {
  const currentPage = window.location.pathname;
  const [notifClicked, setNotifClicked] = useState(false);
  console.log(currentPage);
  return (
    <div className="w-[100vw] grid grid-flow-col py-[6px] pl-32 pr-20 border-b-[1px] border-solid border-[#1c1b1f] bg-[#f1f1f1]">
      {/* logo name */}
      <div className="self-center place-self-start grid grid-flow-col gap-[10px] w-fit">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={50}
          height={50}
          className="self-center place-self-center"
        />
        <h2 className="text-[39px] self-center place-self-center">UNIFY</h2>
      </div>
      {/* nav name notif */}
      {currentPage != "/" && (
        <div className="grid grid-flow-col gap-8 self-center place-self-end">
          {/* nav items */}
          <div className="grid grid-flow-col self-center place-self-center pl-8 gap-8">
            <h3
              className={`text-[21px] hover:border-b-2 hover:font-semibold hover:cursor-pointer
            ${
              currentPage == "/chat" ? "border-b-2" : ""
            } border-solid border-[#1c1b1f]`}
            >
              Chat
            </h3>
            <h3
              className={`text-[21px] hover:border-b-2 hover:font-semibold hover:cursor-pointer ${
                currentPage == "/home" ? "border-b-2" : ""
              } border-solid border-[#1c1b1f]`}
            >
              Transfer
            </h3>
            <h3
              className={`text-[21px] hover:border-b-2 hover:font-semibold hover:cursor-pointer ${
                currentPage == "/mynfts" ? "border-b-2" : ""
              } border-solid border-[#1c1b1f]`}
            >
              My NFTs
            </h3>
          </div>
          {/* name notif */}
          <div className="rounded-full border-[1px] border-[#48637C] border-solid grid grid-flow-col">
            {/* name */}
            <div className="px-5 grid grid-flow-col gap-[10px] py-[6px]">
              <Image
                src={"/wallet.svg"}
                alt="wallet"
                width={24}
                height={24}
                className="self-center place-self-center"
              />
              <h3 className="text-[21px] self-center place-self-center">
                vitalik.ens
              </h3>
            </div>
            {/* notif */}
            <div
              className="px-5 grid grid-flow-col gap-[10px] bg-[#48637C] py-[6px] rounded-r-full text-[#ffffff]"
              onClick={() => setNotifClicked(!notifClicked)}
            >
              <Image
                src={"/notifications.png"}
                alt="notif bell"
                width={24}
                height={24}
              />
              <h3 className="text-[21px]">{"1 "}new</h3>
            </div>
            {/* notif drop down */}
            {notifClicked && (
              <div className="absolute bg-[#f1f1f199] p-4 mt-[48px] h-[500px] rounded-[24px] border-[1px] border-solid border-[#cfe3e2] flex flex-col gap-[16px] overflow-scroll">
                {/* head cross */}
                <div className="w-[100%] grid grid-flow-col gap-3 self-start place-self-center p-[10px] rounded-full bg-[#48637C]">
                  <div className="grid grid-flow-col text-[#ffffff] gap-1">
                    <Image
                      src={"/bell.svg"}
                      width={15}
                      height={15}
                      alt="updates"
                      className="self-center place-self-start"
                    />
                    <h3 className="text-[15px] self-center place-self-start">
                      Updates
                    </h3>
                  </div>
                  <Image
                    src={"/close.svg"}
                    alt="cross"
                    width={24}
                    height={24}
                    className="self-center place-self-end"
                    onClick={() => setNotifClicked(!notifClicked)}
                  />
                </div>
                {/* transaction */}
                <NotifTransact />
                <NotifTransact />
                <NotifTransact />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;