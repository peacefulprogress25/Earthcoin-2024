import ImageView from "../../Components/ImageView";

const form = "/assets/images/level.png";
export default function FormV2() {
  const sectorList = [
    {
      sector: "Clean Energy",
    },
    {
      sector: "Ecosystem Conservation",
    },
    {
      sector: "Regenerative Agriculture",
    },
    {
      sector: "Climate Tech",
    },
    {
      sector: "Clean Transport",
    },
    {
      sector: "Solarpunk Society",
    },
  ];
  return (
    <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
      <div className="w-full sm:w-[64rem] h-fit sm:h-[65rem] shadow-md flex-col sm:flex-row flex">
        <ImageView
          src={form}
          alt="form"
          width={900}
          height={1000}
          className="h-[50%] sm:h-[100%] w-full sm:w-[50%] object-cover"
        />
        <div className="flex flex-col w-full gap-1 p-4 sm:p-14">
          <p className="font-syne text-center sm:text-left font-semibold text-[#101828] leading-[2.5rem] text-[34px]">
            Let’s level up your <br /> funding, together funds?
          </p>
          <p className="font-inter text-center sm:text-left font-normal mt-3 text-[#475467] text-[14px]">
            You can reach us anytime via{" "}
            <span className="font-medium text-[#EC8000]">
              hi@untitledui.com
            </span>
          </p>

          <label className="text-[#344054] mt-6 font-inter text-[12px] font-medium">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="text-[#667085] font-inter p-2 shadow-sm rounded-md border border-[#D0D5DD] text-[12px] font-normal"
          />
          <label className="text-[#344054] mt-3 font-inter text-[12px] font-medium">
            Your Email
          </label>
          <input
            type="text"
            placeholder="you@company.com"
            className="text-[#667085] font-inter p-2 shadow-sm rounded-md border border-[#D0D5DD] text-[12px] font-normal"
          />
          <label className="text-[#344054] mt-3 font-inter text-[12px] font-medium">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Company Name"
            className="text-[#667085] font-inter p-2 shadow-sm rounded-md border border-[#D0D5DD] text-[12px] font-normal"
          />
          <label className="text-[#344054] mt-3 font-inter text-[12px] font-medium">
            Phone number
          </label>
          <div className="flex p-2 rounded-md border shadow-sm border-[#D0D5DD]">
            <select className="w-[60px] font-inter font-normal text-[14px] bg-white outline-none text-[#101828]">
              <option value="us">us</option>
              <option value="ind">ind</option>
              <option value="pt">pt</option>
            </select>
            <input
              type="tel"
              className="text-[#667085] font-inter outline-none text-[12px] font-normal"
            />
          </div>
          <label className="text-[#344054] mt-6 font-inter text-[12px] font-medium">
            How can we help?
          </label>
          <textarea
            type="text"
            placeholder="Tell us a little about the project..."
            className="text-[#667085] font-inter outline-none  resize-none p-2 h-[110px] shadow-sm rounded-md border border-[#D0D5DD] text-[12px] font-normal"
          />
          <label className="text-[#344054] mt-6 font-inter text-[12px] font-medium">
            Sector*
          </label>
          <div className="grid justify-between items-center gap-2 sm:gap-4 grid-cols-2">
            {sectorList?.map((sectors, index) => (
              <button
                className="cursor-pointer flex items-center gap-2 text-[#344054] text-[12px] text-left sm:text-[14px] font-medium font-inter"
                key={index}
              >
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  value="true"
                  className="!w-[1rem] !h-[1rem] form-checkbox cursor-pointer border-2"
                />
                {sectors?.sector}
              </button>
            ))}
          </div>
          <button className="w-full rounded-md bg-[#EC8000] text-white mt-4 font-semibold font-inter p-2 shadow-sm text-[14px]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
