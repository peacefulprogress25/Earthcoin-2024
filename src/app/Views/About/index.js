import { useEffect, useState } from "react";
import ImageView from "../../Components/ImageView";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";
import Link from "next/link";
import { Loader } from "../../Components/Loader";
import { LuArrowUpRight } from "react-icons/lu";
import useNotification from "../../Hooks/useNotification";

const media = "/assets/images/media.png";
const people = "/assets/images/people.png";
const clock = "/assets/icons/clock.svg";
const location = "/assets/icons/location.svg";
const dollar = "/assets/icons/dollar-sign.svg";

const fields = {
  email: "",
};

export default function About() {
  const [teams, setTeams] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState(fields);
  const [loading, setLoading] = useState(false);
  const { showMessage } = useNotification();
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("View all");

  const emailValidation = (data) => {
    const emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(data);
  };

  // const handlechange = (e) =>{
  //   const {name,value} = e.target;
  //   setEmail( (prev) => ({
  //     ...prev,[name] :value}))
  // }
  const handleChange = (e) => {
    if (e.target.value.length === 0) {
      setIsPlaceholderVisible(true);
    } else {
      setIsPlaceholderVisible(false);
    }
    const { name, value } = e.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email)
  // };

  const handleSubmit = async () => {
    console.log(formData);
    if (!formData.email) {
      showMessage({
        type: "error",
        value: "Email field is required",
      });
      return;
    }

    if (!emailValidation(formData.email)) {
      showMessage({
        type: "error",
        value: "Invalid Email",
      });
      return;
    }

    setLoading(true);
    const getEmailData = await nexaflowApi.getGoogleSheetData({
      googleSheetId: nexaflowPageObj.googleSheetId,
    });

    if (!getEmailData) {
      setLoading(false);
      showMessage({ value: "Email failed to submit", type: "error" });
      return;
    }

    const emailArray = getEmailData.slice(1).map((innerArray) => innerArray[0]);

    if (emailArray.includes(formData.email)) {
      showMessage({ value: "Subscription already active", type: "error" });

      setLoading(false);
      return;
    }
    const response = await nexaflowApi.postGoogleSheetData({
      googleSheetId: nexaflowPageObj.googleSheetId,
      data: [[formData.email]],
    });

    if (!response) {
      showMessage({ value: "Email failed to submit", type: "error" });

      setLoading(false);

      return;
    }
    showMessage({
      value: "Email submitted successfully",
      type: "success",
    });

    setLoading(false);

    setFormData(fields);
  };

  const handleFocus = (event) => {
    if (event.target.value.length === 0) {
      setIsPlaceholderVisible(true);
    }
  };

  const handleBlur = (event) => {
    if (event.target.value.length === 0) {
      setIsPlaceholderVisible(true);
    }
  };

  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.teamPage,
        websiteId: nexaflowPageObj.website,
      });
      console.log(page);
      setTeams(page?.Teams);
      setJobs(page?.jobs);
    };

    getPageByID();
  }, []);
  const category = [
    {
      section: "View all",
    },
    {
      section: "Design",
    },
    {
      section: "Software Development",
    },
    {
      section: "Marketing",
    },
  ];
  const filteredPosts =
    selectedCategory === "View all"
      ? jobs
      : jobs?.filter((post) => post?.title === selectedCategory);
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[8%] flex gap-10 flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            The Team
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            Meet the team behind SolarpunkDAO
          </p>
          <p className="text-[#475467] text-center font-normal w-[80%] sm:w-[60%] text-[16px] font-inter">
            On a mission to make climate change history and seed the solarpunk
            paradigm
          </p>
        </div>
        <div className="w-[90%] mx-auto sm:w-full flex flex-col items-center">
          {teams && teams.length ? (
            <div className="grid grid-cols-1 mt-10 mb-10 sm:grid-cols-3 gap-x-6 gap-y-12 sm:justify-items-center">
              {teams?.map((people, index) => (
                <PeopleCard people={people} key={index} />
              ))}
            </div>
          ) : (
            <div className="h-[60vh] w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
        </div>

        <div className="w-full h-[1px] bg-[#F2F4F7]"></div>
        <div className="flex flex-col items-center gap-2 mt-10">
          <p className="text-[#EC8000] p-1 px-2 rounded-full bg-[#FFFCF8] font-semibold text-center text-[12px] font-inter">
            Open positions
          </p>
          <p className="text-[#101828] font-semibold text-center text-[25px] sm:text-[36px] font-syne">
            Always looking for aligned, enthusiastic individuals
          </p>
          <p className="text-[#475467] text-center font-normal w-[80%] sm:w-[55%] text-[16px] font-inter">
            We have a bold mission and a very grand vision. If you feel you can
            add value anywhere just get in touch with us anywhere in the
            metaverse <br /> <br />
            Besides that we have some positions we are hiring for right now
          </p>
        </div>
        <ImageView
          src={people}
          alt="coverpic"
          width={400}
          height={400}
          className="w-full mt-4 object-cover h-[45vh]"
        />
        <div className="flex flex-wrap items-center justify-center w-full gap-4 px-2 py-4 cursor-pointer md:gap-2 lg:gap-1">
          {category.map((option, index) => (
            <p
              key={index}
              onClick={() => setSelectedCategory(option?.section)}
              className={`font-inter text-[14px] px-2 md:px-3 lg:px-4 py-2 font-semibold text-[#475467] ${
                selectedCategory === option.section
                  ? "bg-[#FFFCF8] rounded-md text-[#EC8000]"
                  : ""
              }`}
            >
              {option.section}
            </p>
          ))}
        </div>

        <div className="flex flex-col items-center w-full gap-6 ">
          {filteredPosts && filteredPosts.length ? (
            filteredPosts?.map((position, index) => (
              <div className="flex flex-col items-start gap-6" key={index}>
                {/* <p className="text-[#101828] font-semibold text-left text-[18px] font-inter">
                  {position?.title}
                </p> */}
                <div className="flex flex-col w-full gap-8">
                  {position?.position?.map((option, index) => (
                    <Link
                      className="flex flex-col !w-[20rem] sm:!w-[50rem] rounded-lg border-2 border-[#EAECF0] items-start p-6"
                      key={index}
                      href={option?.link}
                      target="_blank"
                    >
                      <div className="flex justify-between w-full">
                        <p className="text-[#EC8000] font-semibold text-left text-[14px] font-inter">
                          {position?.title}
                        </p>
                        <button className="flex cursor-pointer gap-2 text-[#EC8000] font-semibold text-left text-[14px] font-inter">
                          View job <LuArrowUpRight size={18} color="#EC8000" />
                        </button>
                      </div>
                      <p className="text-[#101828] mt-2 font-semibold text-left text-[16px] font-inter">
                        {option?.title}
                      </p>
                      <div className="flex gap-3 mt-2">
                        <div className="flex items-center gap-1">
                          <ImageView
                            src={location}
                            alt="location"
                            width={40}
                            height={40}
                            className="object-cover w-4 h-4"
                          />
                          <p className="text-[#475467] font-medium text-left text-[14px] font-inter">
                            Remote
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <ImageView
                            src={clock}
                            alt="clock"
                            width={40}
                            height={40}
                            className="object-cover w-4 h-4"
                          />
                          <p className="text-[#475467] font-medium text-left text-[14px] font-inter">
                            {option?.type}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : filteredPosts && filteredPosts.length ? (
            <div className="h-[60vh] w-full flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <div className="h-[60vh] w-full flex items-center justify-center">
              <p className="text-[#475467] font-medium text-left text-[14px] font-inter">
                No Data
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col mt-20 items-center justify-center py-20 px-4 bg-[#F9FAFB]">
        <p className="text-[#101828] font-semibold text-center text-[32px] font-syne">
          Get notified when new roles open up
        </p>
        <p className="text-[#475467] mt-3 font-normal  text-center text-[16px] font-inter">
          Be the first to know when new jobs are posted!
        </p>
        <form>
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex flex-col items-center gap-3 mt-8 sm:items-start sm:flex-row sm:items-center">
              <input
                name="email"
                onChange={handleChange}
                value={formData?.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Enter your email"
                className="border-2 border-[#EAECF0] w-full max-w-[350px] h-10 outline-none rounded-md p-3"
              />
              <button
                type="button"
                onClick={() => {
                  handleSubmit();
                }}
                className="w-[120px] xs:w-[150px] sm:w-[100px] mt-3 sm:mt-0 font-inter flex text-white items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm"
              >
                Subscribe
              </button>
            </div>
            <p className="text-[12px] mt-3 sm:mt-1 text-left font-normal text-[#475467] font-inter">
              We care about your data in our{" "}
              <span className="underline decoration-[#475467]">
                <a href="/privacy-policy">privacy policy</a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export function PeopleCard({ people }) {
  const socialLink = people?.socialLinks;
  const socialIcons = [
    {
      icon: "/assets/icons/twitter.svg",
      link: socialLink?.twitter,
    },

    {
      icon: "/assets/icons/linkedin.svg",
      link: socialLink?.linkedin,
    },
    {
      icon: "/assets/icons/football.svg",
      link: socialLink?.twitter,
    },
  ];
  return (
    <div className="flex flex-col gap-1  max-w-[16rem] w-full">
      <ImageView
        src={people?.image}
        width={400}
        height={400}
        className="w-full h-[14rem]"
      />
      <p className="font-inter mt-3 text-[#101828] font-semibold text-[16px]">
        {people?.name}
      </p>
      <p className="font-inter text-[#EC8000] font-normal text-[14px]">
        {people?.title}
      </p>
      <p className="font-inter text-[#475467] mt-3 font-normal text-[13px]">
        {people?.description}
      </p>
      <div className="flex gap-4 mt-3">
        {socialIcons.map((icons, index) => (
          <Link href={icons?.link} target="_blank" key={index}>
            <ImageView
              src={icons?.icon}
              width={400}
              height={400}
              className="w-5 h-5 cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
