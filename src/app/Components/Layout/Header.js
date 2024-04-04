import Link from "next/link";
import ImageView from "../ImageView";
import { IoIosArrowDown } from "react-icons/io";

const logo = "/assets/images/logo.png";

export default function Header() {
  return (
    <nav className="fixed hidden sm:block left-0 top-0 z-10 right-0 bg-white">
      <div className="flex h-20 w-full mx-auto border-b border-[#F2F4F7] gap-2 items-center px-[1%]  sm:px-[8%]">
        <ImageView
          alt="logo"
          src={logo}
          width={100}
          height={100}
          className="object-contain"
        />
        <div className="items-center ml-2 sm:ml-8 flex gap-2 sm:gap-9 font-inter text-[#475467] font-semibold text-sm">
          <Link href="/projects">Projects</Link>
          <Link className="flex items-end gap-1" href="/">
            Raison D’etre <IoIosArrowDown />{" "}
          </Link>
          <Link className="flex items-end gap-1" href="/thesis">
            Thesis <IoIosArrowDown />{" "}
          </Link>
          <Link href="/tokenomics">Tokenomics</Link>
        </div>
        <>
          <Link
            href="/dapp"
            className="w-[80px] ml-auto text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm"
          >
            DAPP
          </Link>
        </>
      </div>
    </nav>
  );
}
