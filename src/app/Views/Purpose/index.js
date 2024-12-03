import ImageView from "../../Components/ImageView";
import Community from "../../Components/Community";
import FlipBook from "./FlipBook";

const purpose = "/assets/images/purpose.png";
const jungle = "/assets/images/jungle.png";
const slogan = "/assets/images/slogan.png";
const space = "/assets/images/space.png";
const ecology = "/assets/images/ecology.png";
const economy = "/assets/images/economys.png";
const mountain = "/assets/images/mountain.png";
const tree = "/assets/images/tree.png";

export default function Purpose() {
  return (
    <div>
      <div className="mt-32 w-full px-4 sm:px-[6%] 2xl:px-0 flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] max-[480px]:text-[12px] font-inter">
            About
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] max-[480px]:text-[20px] sm:text-[40px] font-syne">
            PURPOSE
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] max-[480px]:text-[12px] font-inter">
            Why $EARTH
          </p>
        </div>
      </div>

      {/* Image with book animation */}
      <div className="flex items-center justify-center">
        <FlipBook />
      </div>

      <div className="w-full px-20 py-20 max-[480px]:px-3 max-[480px]:py-5 ">
        <div className="h-[2px] my-8 bg-[#F2F4F7]"></div>
        <div className="mt-20 max-[480px]:mt-6 -mb-20">
          <Community
            title=""
            description=""
          />
        </div>
      </div>
    </div>
  );
}
