import ImageView from "./ImageView";

const faq = "/assets/images/faq.png";

export default function Gpt() {
  return (
    <div className="relative  w-full">
      <ImageView
        src={faq}
        alt="faq"
        width={800}
        height={800}
        className="w-full  mb-24 h-[35vh] sm:h-[50vh] rounded-md object-cover"
      />
      <div className="flex w-full justify-between gap-6 items-center py-4 px-8 absolute bottom-2 sm:bottom-4">
        <div className="flex flex-col gap-2 items-start">
          <p className="text-white font-syne font-semibold text-[15px] sm:text-[28px]">
            Converse with our AI assitant
          </p>
          <p className="text-white font-inter font-normal  text-[10px] sm:text-[16px]">
            Can’t find the answer you’re looking for? Ask our AI assistant.
          </p>
        </div>
        <button className="w-[80px] sm:w-[100px]  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm">
          Earth GPT
        </button>
      </div>
    </div>
  );
}
