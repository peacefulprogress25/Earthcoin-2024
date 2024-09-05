"use client";
import Link from "next/link";
import buttonConfig from "../utils/button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

export default function TradeDapp() {
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
        setCopied(true);
    };
    return (
        <div className="bg-white w-[15rem] p-6 flex flex-col gap-5 items-center">
            <p className="text-[#101828] font-inter font-semibold text-center text-[14px]">Trade $Dai <br />for $Earth</p>
            <div className="flex flex-col items-center">
                <p className="text-black font-inter font-bold text-center text-[10px]">Network:</p>
                <p className="text-[#101828] font-inter font-semibold text-center text-[10px]">Polygon POS</p>

            </div>
            <div className="flex flex-col items-center">
                <p className="text-black font-inter font-bold text-center text-[10px]">$EARTH Address: </p>

                <div style={{ cursor: "pointer" }} className="flex flex-col items-center line-clamp-3 w-[10rem]">
                    <p className="text-[#101828] font-inter  font-semibold text-center text-[10px]">0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6</p>
                    <CopyToClipboard onCopy={onCopy} text="0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6">
                        <FaCopy style={copied ? { color: "#EC8000 " } : ""} />
                    </CopyToClipboard>
                </div>
            </div>
            <Link
                className="text-white px-6 py-2 border-[1px] border-[#EC8000] bg-[#EC8000] rounded-lg shadow-lg font-inter font-semibold text-[10px]"
                href={buttonConfig?.dapp_trade?.link || ""}
                target={buttonConfig?.dapp_trade?.external ? "_blank" : "_self"}
            >
                {buttonConfig?.dapp_trade?.title}
            </Link>
        </div>
    )
}