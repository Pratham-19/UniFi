import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-[100vw] bg-[#48637C] px-[70px] py-[9px] grid fixed bottom-0">
      <Image
        className="self-center place-self-center"
        src={"/ethindiaLogo.svg"}
        alt="ethIndia"
        width={120}
        height={30}
      />
    </div>
  );
};

export default Footer;
