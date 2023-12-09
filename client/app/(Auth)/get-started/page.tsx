"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ethers, BrowserProvider } from "ethers";

declare var window: any;

const GetStartedPage = () => {
    const [provider, setProvider] = useState({});
    useEffect(() => {
        const browserProvider = new BrowserProvider(window.ethereum);
        setProvider(browserProvider);
    }, []);

    async function connectWallet() {
        if (window.ethereum) {
            try {
                const provider = new BrowserProvider(window.ethereum);
                const signer = provider.getSigner();
                console.log(signer);
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error("No web3 provider found");
        }
    }
    return (
        <>
            <main className="w-screen h-[90vh] bg-[#F1F1F1] grid md:grid-cols-2 grid-flow-row">
                <div className="md:w-[600px] w-[510px] py-4 flex flex-col justify-center space-y-6 px-[64px] place-self-center">
                    <button
                        onClick={connectWallet}
                        className="hover:scale-95 cursor-pointer transition-transform duration-300 shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31]"
                    >
                        <Image
                            src={"/walletConnectB.svg"}
                            alt="wallet connect"
                            height={40}
                            width={40}
                            className="self-center  basis-1/3 w-7 h-7"
                        />
                        <h3 className="text-[24px] text-start basis-2/3">
                            Wallet Connect
                        </h3>
                    </button>
                    <button
                        onClick={connectWallet}
                        className="hover:scale-95 cursor-pointer transition-transform duration-300 shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31]"
                    >
                        <Image
                            src={"/metamask.svg"}
                            alt="metamask"
                            height={40}
                            width={40}
                            className="self-center  basis-1/3 w-8 h-8"
                        />
                        <h3 className="text-[24px] text-start basis-2/3">
                            Metamask
                        </h3>
                    </button>
                    <h2 className="text-[24px] self-center place-self-center my-2">
                        or
                    </h2>
                    <Link
                        href={"/login"}
                        className="hover:scale-95 cursor-pointer transition-transform duration-300 shadow-[0px_6px_0px_0px_#091D31] h-fit rounded-[8px] px-8 py-3 flex gap-4 justify-center border-[1px] border-solid border-[#091D31]"
                    >
                        <Image
                            src={"/safeWallet.svg"}
                            alt="login email"
                            height={40}
                            width={40}
                            className="self-center basis-1/3 w-8 h-8"
                        />
                        <h3 className="text-[24px] self-center basis-2/3">
                            Log in
                        </h3>
                    </Link>
                </div>
                <div className="w-[100%] h-[100%]">
                    <Image
                        src={"/wallet-blender.png"}
                        width={1024}
                        height={1024}
                        alt="mixers"
                        className="min-h-[96%]"
                    />
                    <div className="grid bg-[#f1f1f133] backdrop-blur-[20px] mt-[-147px] rounded-ee-[32px] p-4">
                        {/* LOGO NAME */}
                        <div className="flex flex-row justify-center gap-6 self-center">
                            <Image
                                className="place-self-center self-center"
                                src={"/logo.svg"}
                                alt="logo"
                                width={100}
                                height={100}
                            />
                            <h1 className="text-8xl self-center">UNIFY</h1>
                        </div>
                        {/* Caption */}
                        <h3 className="self-center place-self-center text-[32px] font-cg_med">
                            Start transfering CrossChain
                        </h3>
                    </div>
                </div>
            </main>
        </>
    );
};

export default GetStartedPage;
