import ImageView from "../../Components/ImageView";
const tokenomics = "/assets/images/tokenomics.png";
export default function Mechanics() {
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[16px] font-inter">
            About
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[48px] font-syne">
            TOKENOMICS
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            The economic models behind $Earth driving our solarpunk vision home
          </p>
        </div>
        <ImageView
          src={tokenomics}
          alt="tokenomics"
          width={400}
          height={400}
          className="w-full mt-4 object-cover"
        />
        <p className="text-[#101828] font-semibold text-center text-[20px] sm:text-[30px] mr-10 font-syne">
          $Earth has been created to -
        </p>
        <div></div>
      </div>
    </div>
  );
}
