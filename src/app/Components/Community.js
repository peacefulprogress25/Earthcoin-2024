import ImageView from "./ImageView";
function Community({ title, description }) {
  const socialIcons = [
    {
      icon: "/assets/icons/twitter.svg",
    },
    {
      icon: "/assets/icons/linkedin.svg",
    },
    {
      icon: "/assets/icons/facebook.svg",
    },
    {
      icon: "/assets/icons/github.svg",
    },
  ];
  return (
    <div className="flex flex-col w-full  mb-16 p-8 items-center rounded-md justify-center bg-[#F9FAFB]">
      <p className="text-[#101828] font-syne text-center font-semibold text-[20px] sm:text-[26px]">
        {title}
      </p>
      <p className="text-[#475467] font-inter mt-2 text-center font-normal text-[16px]">
        {description}
      </p>
      <div className="flex mt-6 gap-1">
        {socialIcons.map((icons, index) => (
          <button className="cursor-pointer w-8 h-8" key={index}>
            <ImageView
              alt={icons.icon}
              src={icons.icon}
              width={20}
              height={20}
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Community;
