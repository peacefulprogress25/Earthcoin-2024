import ImageView from "../../Components/ImageView";

const media = "/assets/images/media.png";
const people = "/assets/images/people.png";
const clock = "/assets/icons/clock.svg";
const dollar = "/assets/icons/dollar-sign.svg";

export default function About() {
  const peoplelist = [
    {
      Role: "Founder",
      img: media,
      Name: "William",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      Role: "Founder",
      img: media,
      Name: "William",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      Role: "Founder",
      img: media,
      Name: "William",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      Role: "Founder",
      img: media,
      Name: "William",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      Role: "Founder",
      img: media,
      Name: "William",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
  ];
  const positions = [
    {
      title: "Design",
      position: [
        {
          title: "Product Designer",
          description:
            "We’re looking for a mid-level product designer to join our team.",
          type: "Full-time",
          salary: "80k - 100k",
        },
        {
          title: "UX Designer",
          description:
            "We’re looking for a mid-level product designer to join our team.",
          type: "Full-time",
          salary: "80k - 100k",
        },
      ],
    },
    {
      title: "Software Development",
      position: [
        {
          title: "Product Designer",
          description:
            "We’re looking for a mid-level product designer to join our team.",
          type: "Full-time",
          salary: "80k - 100k",
        },
        {
          title: "UX Designer",
          description:
            "We’re looking for a mid-level product designer to join our team.",
          type: "Full-time",
          salary: "80k - 100k",
        },
        {
          title: "UX Designer",
          description:
            "We’re looking for a mid-level product designer to join our team.",
          type: "Full-time",
          salary: "80k - 100k",
        },
      ],
    },
    {
      title: "Customer Success",
      position: [
        {
          title: "Customer Success Manager",
          description:
            "We’re looking for a mid-level product designer to join our team.",
          type: "Full-time",
          salary: "80k - 100k",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[8%] flex gap-10 flex-col items-center">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[16px] font-inter">
            The Team
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[48px] font-syne">
            Meet the team behind SolarpunkDAO
          </p>
          <p className="text-[#475467] text-center font-normal w-[80%] sm:w-[60%] text-[16px] font-inter">
            We’re a small team that loves to create great experiences and make
            meaningful connections between builders and customers. Join our
            remote ream!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-6 gap-x-6 gap-y-10">
          {peoplelist.map((people, index) => (
            <PeopleCard people={people} key={index} />
          ))}
        </div>
        <div className="w-full h-[1px] bg-[#F2F4F7]"></div>
        <div className="flex mt-8 flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[16px] font-inter">
            Open positions
          </p>
          <p className="text-[#101828] font-semibold text-center text-[25px] sm:text-[48px] font-syne">
            We’re looking for talented people
          </p>
          <p className="text-[#475467] text-center font-normal w-[80%] sm:w-[55%] text-[16px] font-inter">
            Untitled is growing fast, and we are always looking for passionate,
            dynamic, and talented individuals to join our distributed team all
            around the world.
          </p>
        </div>
        <ImageView
          src={people}
          alt="coverpic"
          width={400}
          height={400}
          className="w-full mt-4 object-cover h-[45vh]"
        />
        <div className="flex w-full items-center flex-col gap-6 ">
          {positions?.map((position, index) => (
            <div className="flex flex-col items-start gap-6" key={index}>
              <p className="text-[#101828] font-semibold text-left text-[20px] font-inter">
                {position?.title}
              </p>
              <div className="flex w-full flex-col gap-8">
                {position?.position?.map((option, index) => (
                  <div
                    className="flex flex-col !w-[20rem] sm:!w-[50rem] rounded-lg border border-[#EAECF0] items-start p-6"
                    key={index}
                  >
                    <p className="text-[#101828] font-semibold text-left text-[17px] font-inter">
                      {option?.title}
                    </p>
                    <p className="text-[#475467] mt-1 font-normal text-left text-[15px] font-inter">
                      {option?.description}
                    </p>
                    <div className="flex mt-6 gap-3">
                      <div className="flex items-center gap-1">
                        <ImageView
                          src={clock}
                          alt="clock"
                          width={40}
                          height={40}
                          className="w-4 object-cover h-4"
                        />
                        <p className="text-[#475467] font-normal text-left text-[16px] font-inter">
                          {option?.type}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <ImageView
                          src={dollar}
                          alt="dollar"
                          width={40}
                          height={40}
                          className="w-4 object-cover h-4"
                        />
                        <p className="text-[#475467] font-normal text-left text-[16px] font-inter">
                          {option?.salary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col mt-10 items-center justify-center py-20 px-4 bg-[#F9FAFB]">
        <p className="text-[#101828] font-semibold text-center text-[36px] font-syne">
          Get notified when new roles open up
        </p>
        <p className="text-[#475467] mt-3 font-normal  text-center text-[18px] font-inter">
          Be the first to know when new jobs are posted!
        </p>
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex-col mt-8 flex sm:flex-row gap-3 items-start sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 border-[#EAECF0] w-[350px] h-10 outline-none rounded-md p-3"
            />
            <button className="w-[80px] sm:w-[100px] font-inter flex text-white items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm">
              Subscribe
            </button>
          </div>
          <p className="text-[12px] mt-3 sm:mt-1 text-left font-normal text-[#475467] font-inter">
            We care about your data in our{" "}
            <span className="underline decoration-[#475467]">
              privacy policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function PeopleCard({ people }) {
  const socialIcons = [
    {
      icon: "/assets/icons/twitter.svg",
    },

    {
      icon: "/assets/icons/linkedin.svg",
    },
    {
      icon: "/assets/icons/football.svg",
    },
  ];
  return (
    <div className="flex flex-col gap-2 max-w-[18rem] w-full">
      <ImageView
        src={people?.img}
        width={400}
        height={400}
        className="w-full h-[16rem]"
      />
      <p className="font-inter text-[#101828] font-semibold text-[16px]">
        {people?.Name}
      </p>
      <p className="font-inter text-[#EC8000] font-normal text-[14px]">
        {people?.Role}
      </p>
      <p className="font-inter text-[#475467] font-normal text-[13px]">
        Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
      </p>
      <div className="flex gap-3">
        {socialIcons.map((icons, index) => (
          <ImageView
            src={icons?.icon}
            width={400}
            height={400}
            key={index}
            className="w-5 cursor-pointer h-5"
          />
        ))}
      </div>
    </div>
  );
}
