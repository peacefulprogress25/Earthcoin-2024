import Updates from "../../Components/Update";

export default function ChronoPage() {
  
  if (typeof window === "undefined") {
  }

  return (
    <div>
      <div className="mt-44 w-full h-fit max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Updates
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            $EARTH Updates
          </p>
          <p className="text-[#475467] text-center font-normal w-[70%]  text-[16px] font-inter">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam.
          </p>
        </div>
        <div className="flex flex-col h-fit">
          <Updates/>
        </div>
      </div>
    </div>
  );
}
