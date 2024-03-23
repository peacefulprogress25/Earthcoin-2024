import Link from "next/link";
import ImageView from "../ImageView";
import { IoIosArrowDown } from "react-icons/io";

const logo = "/assets/images/logo.png";

export default function Header() {
  return (
    <nav className="fixed left-0 top-0 z-10 right-0 bg-white h-20">
      <div className="flex w-full h-full max-w-[1440px] mx-auto gap-2 items-center  px-[8%]">
        <ImageView
          alt="logo"
          src={logo}
          width={100}
          height={100}
          className="object-contain"
        />
        <div className="items-center ml-8 flex gap-9 font-inter text-[#475467] font-semibold text-sm">
          <Link href="/projects">Projects</Link>
          <Link className="flex items-end gap-1" href="/">
            Raison D’etre <IoIosArrowDown />{" "}
          </Link>
          <Link className="flex items-end gap-1" href="/">
            Thesis <IoIosArrowDown />{" "}
          </Link>
          <Link href="/">Tokenomics</Link>
        </div>
        <button className="w-[80px] ml-auto text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm">
          DAPP
        </button>
      </div>
    </nav>
  );
}
