

export default function ProjectDetails({ obj }) {
   return (
      <div className="flex flex-col w-3/4">
         <div className="flex items-center justify-start gap-3 mt-5">
            <img src={obj?.icon} alt="avatar" className="object-contain w-10 h-10" />
            <p className="text-black font-inter font-semibold text-[14px]">{obj?.subText}</p>

         </div>
         <p className="mt-5 text-xl font-medium text-black font-syne">{obj?.projectName}</p>
         <p className="text-[#EC8000] font-syne font-medium text-sm my-3"> {obj?.category}</p>
         <p className="mt-3 text-sm font-light w-[3/4] text-black !font-inter">{obj?.subtitle}</p>

         <div className="flex justify-start gap-16 mt-5">
            <div className="flex flex-col items-center w-[10rem]">
               <p className="text-[#EC8000] font-syne font-semibold text-[28px]">{obj?.projectValue}</p>
               <p className="text-sm font-medium text-black font-inter">Total Project Value</p>
            </div>
            <div className="flex flex-col items-center">
               <p className="text-[#EC8000] font-syne font-semibold text-[28px]">{obj?.Irr}%</p>
               <p className="text-sm font-medium text-black font-inter">Internal rate of return</p>
            </div>
         </div>
         <div className="flex justify-start gap-16 mt-5">
            <div className="flex flex-col items-center w-[10rem]">
               <p className="text-[#EC8000] font-syne font-semibold text-[28px]">{obj?.region}</p>
               <p className="text-sm font-medium text-black font-inter">Location</p>
            </div>
            <div className="flex flex-col items-center ">
               <p className="text-[#EC8000] font-syne font-semibold text-[28px]">{obj?.fundingNeeded}</p>
               <p className="text-sm font-medium text-black font-inter">Funding Needed</p>
            </div>
         </div>
      </div>
   )
}