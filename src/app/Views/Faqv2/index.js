import { IoSearchOutline } from "react-icons/io5";
import ImageView from "../../Components/ImageView";
import GetInTouch from "../../Components/GetInTouch";

export default function Faqv2() {
  const faqData = [
    {
      icon: "/assets/icons/like.svg",
      title: "What is Solarpunk DAO’s goal with $Earth?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
    {
      icon: "/assets/icons/reset.svg",
      title: "What is Solarpunk DAO’s goal with $Earth?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
    {
      icon: "/assets/icons/cancel.svg",
      title: "What is Solarpunk DAO’s goal with $Earth?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
    {
      icon: "/assets/icons/circle-add.svg",
      title: "What is Solarpunk DAO’s goal with $Earth?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
    {
      icon: "/assets/icons/account.svg",
      title: "What is Solarpunk DAO’s goal with $Earth?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
    {
      icon: "/assets/icons/email.svg",
      title: "What is Solarpunk DAO’s goal with $Earth?",
      description:
        "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    },
  ];
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            FAQs
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            Frequently asked questions
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            Have questions? We’re here to help.
          </p>
          <div className="w-[250px] border  my-8 sm:mb-0 flex gap-2 p-2 rounded-md border-[#D0D5DD] shadow-sm">
            <IoSearchOutline size={22} color="#667085" />
            <input
              type="text"
              placeholder="Search"
              className="text-[#667085] font-inter text-[14px] font-normal"
            />
          </div>
          <div className="grid grid-cols-1 my-8 mb-10 gap-x-2 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
            {faqData?.map((faq, index) => (
              <div className="flex flex-col items-center  gap-2" key={index}>
                <ImageView src={faq?.icon} alt="icon" width={40} height={40} />
                <p className="text-[#101828] text-center mt-2 font-semibold  text-[14px] font-inter">
                  {faq?.title}
                </p>
                <p className="text-[#475467] w-[78%] text-center font-normal  text-[14px] font-inter">
                  {faq?.description}
                </p>
              </div>
            ))}
          </div>
          <GetInTouch />
        </div>
      </div>
    </div>
  );
}
