const avatar = "/assets/images/Avatar.png";
export default function Treasury() {
    return (
      <div className="flex flex-col">
        <p className="text-[#EC8000] font-syne font-semibold text-[22px]">Solarpunk Spaces</p>
        <div className=" border-b-[1px] mt-3 w-[200px] border-[#EC8000]"></div>
        <div className="flex items-center mt-5 justify-start gap-3">
        <img src={avatar} alt="avatar" className="object-contain w-10 h-10" />
            <p className="text-black font-inter font-semibold text-[14px]">TDF</p>
            
        </div>
        <p className="text-black mt-5 font-syne font-semibold text-[22px]">Traditional Dream Factory</p>
        <p className="text-black mt-3 font-inter font-normal text-[18px]">Building a regenerative village, including productive <br /> farm, co-living, co-housing, makerspace and co-working</p>
         <div className="flex mt-5 justify-start gap-16">
          <div className="flex flex-col items-center w-[10rem]">
             <p className="text-[#EC8000] font-syne font-semibold text-[28px]">$598.1 M</p>
             <p className="text-black font-inter font-semibold text-[10px]">Total Project Value</p>
          </div>
          <div className="flex flex-col items-center">
             <p className="text-[#EC8000] font-syne font-semibold text-[28px]">18%</p>
             <p className="text-black font-inter font-semibold text-[10px]">Internal rate of return</p>
          </div>
         </div>
         <div className="flex mt-5 justify-start gap-16">
          <div className="flex flex-col items-center w-[10rem]">
             <p className="text-[#EC8000] font-syne font-semibold text-[28px]">Portugal</p>
             <p className="text-black font-inter font-semibold text-[10px]">Location</p>
          </div>
          <div className="flex flex-col items-center ">
             <p className="text-[#EC8000] font-syne font-semibold text-[28px]">$110,000</p>
             <p className="text-black font-inter font-semibold text-[10px]">Funding Needed</p>
          </div>
         </div>
      </div>
    )
}