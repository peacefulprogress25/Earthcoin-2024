import { useParams } from "next/navigation";
import ProjectHeader from "./ProjectHeader";
import OverView from "./OverView";
import ImageView from "../../Components/ImageView";
import ProjectImpact from "./ProjectImpact";
import SeekingFund from "./SeekingFund";
import GetInTouch from "./GetInTouch";
import TermsofFunding from "./TermsofFunding";
import ContractDetails from "./ContractDetails";
import PeopleSlider from "./PeopleSlider";
import { Steps } from "antd";
import FAQ from "./FAQ";
import Media from "./Media";
import "./project.css";
export default function Projectdetails() {
  const { id } = useParams();
  const Projects = [
    {
      projectId: "1",
      projectName: "Kekén Solar Project, 69kWp",
      projectValue: "$70,000",
      subtitle: "High Impact solar installation in Sahé, México.",
      category: "CLEAN ENERGY",
      country: "Mexico",
      Irr: "8",
      coverPic: "/assets/images/coverpic.png",
      icon: "/assets/images/Avatar.png",
      context: "Helios ",
      returnValue: "8%",
      status: "To Be Commisioned",
      dateApproved: "1/1/2024",
      fundingNeeded: "$10,000",
      description1:
        '<p><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">- Project: Kekén 69 kWp</span><span style="font-size: 24px;font-family: Tahoma;"><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">- Location: Sahé, México</span><span style="font-size: 24px;font-family: Tahoma;"><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">- Client: Kekén, Grupo KUO</span><span style="font-size: 24px;font-family: Tahoma;"><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">- Energy price: US$60 / MWh</span><span style="font-size: 24px;font-family: Tahoma;"><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">- PPA length: 30 years</span><span style="font-size: 24px;font-family: Tahoma;"><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">- Purchase price: US$1/Wp --- US$70k</span><span style="font-size: 24px;font-family: Tahoma;"><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">- This 60 kWp project is part of a 500 kWp PPA at Sahé, MX with Kekén. It was first constructed as a pilot to the PPA.</span><span style="font-size: 24px;font-family: Tahoma;"><br><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">This high impact solar project is Helios\' first foray into LatAm solar. We\'ve chosen a very low risk project with highly trusted partners to ensure a successful first project in the region. This installation will generate clean electricity sold directly to the commercial customer (no government interference) for the next 30 years. </span><span style="font-size: 24px;font-family: Tahoma;"> </span></p>\n',
      description2:
        '<p><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">Helios is an open-source platform enabling both web3 &amp; traditional investment in profitable, high impact solar projects in emerging markets, earning users stable, double digit yields uncorrelated with crypto or public markets while averting millions of tonnes of CO2 emissions each year. </span><span style="font-size: 24px;font-family: Tahoma;"><br><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">With a portfolio of solar assets across 4 continents, Helios is perpetually deploying capital &amp; seeking new C&amp;I solar investment opportunities (50-500kW) globally.</span><span style="font-size: 24px;font-family: Tahoma;"><br><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">Our project is entirely open source; no Helios employees take any salary; we aim to reinvest all earnings back into solar to create compounding impact.</span><span style="font-size: 24px;font-family: Tahoma;"> </span></p>\n',
      impact:
        '<p style="text-align:start;"><span style="font-size: 24px;font-family: Tahoma;">Clean Air</span></p>\n<p></p>\n<p><span style="font-size: 24px;font-family: Tahoma;">Address Climate Change</span></p>\n<p></p>\n<p><span style="font-size: 24px;font-family: Tahoma;">Builds Solarpunk Paradigm</span></p>\n',
      people: [
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
      ],
      faq: [
        {
          Question: "Who operates the plant?",
          Answer:
            '<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;">During the term length of the agreement, Helios will be managing the solar plant, production and billing.</span>&nbsp;</p>\n',
        },
        {
          Question: "When do payouts occur?",
          Answer:
            '<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;">End of every month</span></p>\n',
        },
        {
          Question: "",
          Answer: '<p style="text-align:start;"></p>\n',
        },
      ],
      termsOfFunding:
        '<p><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">For this project, we can waive the moratorium, meaning you\'ll start earning yield immediately following capital deployment. Lock up period is 6 months with full liquidity guaranteed by the Helios treasury</span><span style="font-size: 24px;font-family: Tahoma;"> </span></p>\n',
      positiveExternalities: "",
      subText: "Helios",
      homePage: "Yes",
    },
    {
      projectId: "2",
      projectName: "Ethic Hub",
      projectValue: "$10,000",
      subtitle:
        "EthicHub, founded in 2017, is the first Regenerative Finance (ReFi) solution for the financially underserved: helping them secure lending for sustainable impact.",
      category: "Regenerative Agriculture",
      country: "Brazil",
      Irr: "8%",
      coverPic: "/assets/images/coverpic.png",
      icon: "/assets/images/Avatar.png",
      context: "Ethic Hub",
      returnValue: "8%",
      status: "TO BE COMMISIONED",
      dateApproved: "11/2/2023",
      fundingNeeded: "$5000",
      description1:
        '<p style="text-align:left;"><span style="color: rgb(61,61,61);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">Many farmers in Brazil do not possess dry milling capabilities, and once they need to export their coffees, they need to pay for milling and coffee bagging services from local warehouses.</span></p>\n<p><span style="color: rgb(61,61,61);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">This funding project is intended to help them pay for third party services in preparing their coffees for exporting. This includes drymill services, and transportation of coffees to local warehouses.</span><span style="font-size: 24px;font-family: Tahoma;"><br> </span></p>\n',
      description2:
        '<p><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, Arial, sans-serif;">EthicHub, founded in 2017, is the first Regenerative Finance (ReFi) solution for the financially underserved: helping them secure lending for sustainable impact.<br><br>A **crowd-lending backed by crowd-collateral** (a Blended Finance 2.0 improvement thanks to using blockchain technology), allows us to back unbanked farmers, **connecting DeFi to the productive economy of the real world**.</span>&nbsp;</p>\n',
      impact:
        "<p>Healthy Soil</p>\n<p>Clean Water</p>\n<p>Addressing Climate Change</p>\n<p>Increases Biodiversity</p>\n",
      termsOfFunding:
        '<p><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 14px;font-family: Roboto, Arial, sans-serif;">Over-collaterilized by our compensation system</span>&nbsp;</p>\n',
      positiveExternalities: "",
      subText: "Ethic Hub",
      homePage: "Yes",
      people: [
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
      ],
      faq: [
        {
          Question: "",
          Answer: "<p></p>\n",
        },
      ],
    },
    {
      projectId: "3",
      projectName: "Traditional Dream Factory",
      projectValue: "$ 5,000,000",
      subtitle:
        "We are building a regenerative village, including productive farm, co-living, co-housing, makerspace and co-working",
      category: "Solarpunk Spaces",
      country: "Portugal",
      Irr: "7",
      coverPic: "/assets/images/coverpic.png",
      icon: "/assets/images/Avatar.png",
      context: "TDF",
      returnValue: "8%",
      status: "Operational",
      dateApproved: "04/01/2024",
      fundingNeeded: "$ 10,000",
      description1:
        '<p><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">TDF is a pioneering eco-village in Portugal, blending community living with regenerative agriculture, technology, and sustainability, aimed at creating a self-sustaining, eco-positive lifestyle.</span><span style="font-size: 24px;font-family: Tahoma;"> </span></p>\n',
      description2:
        '<p><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">OASA is a non profit aiming to take land out of public markets to conserve and regenerate them. TDF is the first property in the OASA network.</span><span style="font-size: 24px;font-family: Tahoma;"> </span></p>\n',
      impact:
        '<p><span style="font-size: 24px;font-family: Tahoma;">Clean Air</span></p>\n<p><span style="font-size: 24px;font-family: Tahoma;">Healthy Soil</span></p>\n<p><span style="font-size: 24px;font-family: Tahoma;">Increases Biodiversity</span></p>\n<p><span style="font-size: 24px;font-family: Tahoma;">Clean Water</span></p>\n<p><span style="font-size: 24px;font-family: Tahoma;">Increase Nutrient Density</span></p>\n<p><span style="font-size: 24px;font-family: Tahoma;">Address Climate Change</span></p>\n<p><span style="font-size: 24px;font-family: Tahoma;">Build Solarpunk Paradigm </span></p>\n',
      termsOfFunding:
        '<p><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">Bonds backed by real estate, fixed annual return</span><span style="font-size: 24px;font-family: Tahoma;"> </span></p>\n',
      positiveExternalities: "",
      subText: "Trditional Dream Factory",
      homePage: "Yes",
      people: [
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
      ],
      faq: [
        {
          Question: "",
          Answer: "<p></p>\n",
        },
        {
          Question: "",
          Answer: "<p></p>\n",
        },
      ],
    },
    {
      projectId: "4",
      projectName: "Kokonut Network",
      projectValue: "$1,200,000",
      subtitle:
        "Kokonut V1 is the first plantation being developed using the Kokonut Framework; it will be a 60,000 coconut trees' plantation located in the Dominican Republic.",
      category: "REGENERATIVE AGRICULTURE",
      country: "DOMINICAN REPUBLIC",
      Irr: "60%",
      coverPic: "/assets/images/coverpic.png",
      icon: "/assets/images/Avatar.png",
      context: "KOKONUT DAO",
      returnValue: "60%",
      status: "OPERATIONAL",
      dateApproved: "12/1/2023",
      fundingNeeded: "$5,000",
      description1:
        '<p><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">Kokonut Network was created with the aim of reducing the obstacles to agricultural development, rural project funding, and democratizing investment in real-world projects. We will use blockchain technology to establish multiple plantations across the country, providing advantages to the global crypto communities and everyone in the network.</span><span style="font-size: 24px;font-family: Tahoma;"><br><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">This project will benefit the entire society of the Municipality of Las Salinas, Barahona Province, Dominican Republic. The coconut plants will be planted 7.5 x 7.5 meters apart, equating to ninety-six (96) plants per acre of land, or 60,000 plants across the six hundred and twenty (620) Acres of land. This variety of coconut yields approximately three hundred (300) fruits per plant, resulting in an annual yield of 18,000,000 units. The Kokonut DAO treasury will receive 100% of the profits.</span><span style="font-size: 24px;font-family: Tahoma;"> </span></p>\n',
      description2:
        '<p><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">There are many DAOs with great ideas, copywriting, and marketing, but without a solid business model. Unfortunately, many of these projects are rug-pulled or abandoned by users due to lack of a quality product.</span><span style="font-size: 24px;font-family: Tahoma;"><br><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 24px;font-family: Tahoma;">Kokonut Network has a distinct approach. Rather than establishing our proposal or business plan by taking advantage of our users, attempting to get them to purchase some non-backed token, we have created a system that is resilient over time. It is backed by coconut plants on our land, and has a DAO for governance, funds allocation, and rewards sharing.</span><span style="font-size: 24px;font-family: Tahoma;"> </span></p>\n',
      impact:
        '<p style="text-align:start;"><span style="color: rgb(0,0,0);font-size: 24px;font-family: Tahoma;">Clean Air</span></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-size: 24px;font-family: Tahoma;">Healthy Soil</span></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-size: 24px;font-family: Tahoma;">Biodiversity</span></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-size: 24px;font-family: Tahoma;">Address Climate Change</span></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-size: 24px;font-family: Tahoma;">Build Solarpunk Paradigm</span><span style="font-size: 24px;font-family: Tahoma;"> </span></p>\n',
      termsOfFunding:
        '<p style="text-align:start;"><span style="color: rgb(0,0,0);font-size: 24px;font-family: Tahoma;">Kokonut Dao Voting Shares</span></p>\n<p style="text-align:start;"><span style="color: rgb(0,0,0);font-size: 24px;font-family: Tahoma;">Buy tokens on Gnosis Chain</span><span style="font-size: 24px;font-family: Tahoma;"> </span></p>\n',
      positiveExternalities: "",
      subText: "Kokonut Dao",
      homePage: "Yes",
      people: [
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
        {
          Role: "Founder",
          img: "/assets/images/media.png",
          Name: "William",
        },
      ],
      faq: [
        {
          Question: "Who operates the project?",
          Answer:
            '<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;">Kokonut Dao</span>&nbsp;</p>\n',
        },
      ],
    },
  ];
  const category = [
    {
      section: "Overview",
    },
    {
      section: "Impact",
    },
    {
      section: "Details",
    },
    {
      section: "Contact",
    },
  ];
  const details = Projects.find((project) => project.projectId === id);
  return (
    <div className="min-h-screen mt-20 w-full">
      <ProjectHeader details={details} />
      <div className="w-full  cursor-pointer gap-4 sm:gap-12 border-b border-[#F2F4F7] flex px-2 items-center justify-center h-20">
        {category.map((option, index) => (
          <p
            key={index}
            className="font-inter text-[14px] sm:text-[16px] px-1 sm:px-5 font-semibold text-[#475467]"
          >
            {option.section}
          </p>
        ))}
      </div>
      <div className="max-w-screen-2xl mx-auto h-fit flex flex-col px-4 sm:px-[8%] gap-8 sm:gap-16 items-center justify-center w-full">
        <OverView details={details} />
        <ImageView
          src={details.coverPic}
          alt="coverpic"
          width={400}
          height={400}
          className="w-full object-cover h-[25vh]"
        />
        <ProjectImpact details={details} />
        <div className="flex gap-8 border w-full border-[#FCCA6B] rounded-md p-4">
          <div className="border-[#EAECF0] grow border-r">
            <Steps
              progressDot
              current={1}
              direction="vertical"
              className="custom-step font-inter text-[#101828] font-semibold"
              items={[
                {
                  title: "Pipeline",
                  description: "30 Apr 2022 - 544 days",
                },
                {
                  title: "Approved",
                  description: "25 Oct 2023 - 106 days so far",
                },
                {
                  title: "Under implementation",
                  description: "",
                },
                {
                  title: "Completed",
                  description: "",
                },
              ]}
            />
          </div>
          <div className="flex items-start grow flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="border-b border-[#EAECF0] text-[#EC8000] font-medium text-[14px] sm:text-[16px]">
                REIGON
              </p>
              <p className="text-[#101828] font-medium  text-[20px] sm:text-[32px]">
                {details?.country}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="border-b border-[#EAECF0] text-[#EC8000] font-medium text-[14px] sm:text-[16px]">
                INVESTMENT TYPE
              </p>
              <p className="text-[#101828] font-medium text-[14px] sm:text-[16px]">
                Debt
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="border-b border-[#EAECF0] text-[#EC8000] font-medium text-[14px] sm:text-[16px]">
                PROJECT SIZE
              </p>
              <p className="text-[#101828] font-medium text-[14px] sm:text-[16px]">
                Medium
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-start gap-2">
          <p className="font-inter text-[#EC8000] font-medium text-[14px]">
            ACCREDITED ENTITY
          </p>
          <div className="flex w-full justify-between gap-2 items-center">
            <p className="font-syne text-[#101828] font-semibold text-[18px] sm:text-[27px]">
              African Development Bank
            </p>
            <button className="sm:w-[180px] w-[150px]  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs  sm:text-sm">
              Visit company website
            </button>
          </div>
          <p className="font-inter text-[#475467] font-normal text-[14px]">
            Principal Climate and Environment Finance Officer <br />
            African Development Bank Climate Change and Green Growth Department
            CCIA.
            <br /> Rue Jean Paul II, Plateau, 01 BP 1387 Abidjan 01, Côte
            d’Ivoire
          </p>
        </div>
        <PeopleSlider details={details} />
        <Media details={details} />
        <TermsofFunding details={details} />
        <ContractDetails details={details} />
        <FAQ details={details} />
        <GetInTouch />
        <SeekingFund />
      </div>
    </div>
  );
}