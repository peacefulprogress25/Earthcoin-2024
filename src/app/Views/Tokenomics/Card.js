export default function Card({ option }) {
  return (
    <div className=" py-6 lg:py-14 px-10 rounded-lg border justify-center !items-center border-[#EAECF0] w-full shadow-lg">
      <p className="font-inter text-[14px]  mt-1 text-center font-normal color-[#475467]">
        {option?.title}
      </p>
      <p className="font-inter text-[18px] text-center font-semibold color-[#101828]">
        {option?.subtitle}
      </p>
      <p className="font-inter mt-4 text-[14px] px-4 !text-center font-normal color-[#475467]">
        {option?.description}
      </p>
    </div>
  );
}
