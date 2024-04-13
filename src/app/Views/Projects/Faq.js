import { Loader } from "../../Components/Loader";

export default function Faq({ faq }) {
  return (
    <div className="flex flex-col pb-8 items-center sm:items-start">
      <p className="text-[#101828] font-semibold text-center sm:text-left text-[24px] sm:text-[28px] font-syne">
        FAQs
      </p>
      <p className="text-[#475467] text-center sm:text-left font-normal mt-2 text-[14px] font-inter">
        Everything you need to know about the product and billing. Can’t find
        the answer <br /> you’re looking for? Please{" "}
        <a className="underline">chat to our friendly team</a>
      </p>

      {faq && faq?.length ? (
        <div className="grid grid-cols-1 w-full items-center sm:items-start my-8 mb-10 gap-x-2 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
          {faq?.map((faq, index) => (
            <div
              className="flex flex-col items-center sm:items-start  gap-2"
              key={index}
            >
              <p className="text-[#101828] text-center sm:text-left mt-2 font-semibold  text-[14px] font-inter">
                {faq?.Question}
              </p>
              <p className="text-[#475467] w-[75%] text-center sm:text-left font-normal  text-[14px] font-inter">
                {faq?.Answer}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[60vh] w-full flex items-center justify-center">
          <Loader />
        </div>
      )}

      {/* <div className="w-full flex bg-[#F9FAFB] items-center sm:items-start  p-4 py-6 rounded-md justify-between flex-col sm:flex-row">
        <div className="flex  flex-col">
          <p className="text-[#101828] font-inter text-center sm:text-left  font-medium text-[16px]">
            Still have questions?
          </p>
          <p className="text-[#475467] font-inter text-center sm:text-left mt-1 font-normal text-[14px]">
            Can’t find the answer you’re looking for? Please drop a message to
            our team.
          </p>
        </div>
        <button className="w-[100px] mt-2 sm:mt-0  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 cursor-pointer text-sm">
          Get in touch
        </button>
      </div> */}
    </div>
  );
}
