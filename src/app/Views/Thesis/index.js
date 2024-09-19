import ImageView from "../../Components/ImageView";
import Community from "../../Components/Community";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";
import Link from "next/link";
import { Loader } from "../../Components/Loader";
import { useState, useEffect } from "react";

const thesis = "/assets/images/thesis.png";
const funnel = "/assets/images/funnel1.png";
const skeleton = "/assets/images/skeleton.png";
const thesisbg1 = "/assets/images/thesisbg.png";
const thesisbg2 = "/assets/images/thesisbg2.png";
const thesisbg3 = "/assets/images/thesisbg3.png";
const thesisbg4 = "/assets/images/thesisbg4.png";
const agriculture = "/assets/images/agriculture.png";
const solarpunkSpaces = "/assets/images/solarpunk-spaces.png";
const pieChart = "/assets/images/Piechart-2.png";
const exportImg = "/assets/images/Export.png";
const assetthesis = "/assets/images/assetthesis.png"
const earthPower = "/assets/images/Earthpowers.png";
const clean = "/assets/images/clean-energy.png";
const eco = "/assets/images/eco-system.png";
const transport = "/assets/images/clean-transport.png";
const solarpunk = "/assets/images/solarpunk.png";

export default function Thesis() {
  const [fundingData, setFundingData] = useState([]);
  const [title, setTitle] = useState("Clean Energy");
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.dashboardPage,
        websiteId: nexaflowPageObj.website,
      });
      console.log(page);
      setFundingData(page?.FundingNeeds);
    };

    getPageByID();
  }, []);
  const handleClick = (title) => {
    setTitle(title);
  };
  const chartData = [
    {
      title: "Regenerative Agriculture",
      percent: "15.15%",
    },
    {
      title: "Ecosystem Conservation",
      percent: "14.14%",
    },
    {
      title: "Clean Energy",
      percent: "40.40%",
    },
    {
      title: "Solarpunk Spaces",
      percent: "10.10%",
    },
    {
      title: "Clean Transport",
      percent: "20.20%",
    },
  ];
  const earthPowerData = [
    {
      title: "Regenerative Agriculture",
    },
    {
      title: "Clean Transport",
    },
    {
      title: "Ecosystem Conservation",
    },
    {
      title: "Solarpunk Spaces",
    },
    {
      title: "Clean Energy",
    },
  ];
  return (
    <div>
      <div className='mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center'>
        <div className='flex flex-col items-center w-full gap-2'>
          <p className='text-[#EC8000] font-semibold text-center text-[14px] font-inter'>
            About
          </p>
          <p className='text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne'>
            THESIS
          </p>
          <p className='text-[#475467] text-center font-normal  text-[16px] font-inter'>
            Every crisis comes with an opportunity, here we breakdown the thesis
            driving $EARTH
          </p>
        </div>
        <ImageView
          src={thesis}
          alt='thesis'
          width={400}
          height={200}
          className='object-cover w-full mt-4'
        />
        <div className='sm:px-[8%]  px-4 flex flex-col w-full items-start'>
          <p className='text-[#101828] font-semibold text-center w-full mt-6 text-[20px] sm:text-[28px] mr-10 font-syne'>
            FUEL to our FIRE
          </p>
          <div className='mt-6'>
            <p className='text-[#475467] text-center w-full font-normal  text-[15px] font-inter'>
              Addressing climate change is truly one of those{" "}
              <span className='text-[#EC8000] font-semibold'>
                once in a generation opportunity.
              </span>{" "}
              The world as we know it will have to change completely if we are
              to address climate change holistically.{" "}
              <span className='text-[#101828] font-semibold'>
                43 GT of CO2 eqv has to become ZERO in the next 30 years
              </span>{" "}
              and the only way that happens is all the infrastructure supporting
              humanities core needs becomes{" "}
              <span className='text-[#EC8000] font-semibold'>
                solarpunk in nature.
              </span>
            </p>
          </div>
        </div>
      </div>
      <ImageView
        src={funnel}
        alt='funnel'
        width={400}
        height={500}
        className='object-cover w-full'
      />
      <div className='w-full max-w-screen-2xl md:flex-row sm:mt-10 mx-auto px-4 sm:px-[5%] flex gap-10 flex-col items-center pb-10'>
        <div className='flex flex-col items-start w-full px-4 '>
          <p className='text-[#101828] font-semibold text-left  text-[20px] sm:text-[28px] mr-10 font-syne'>
            This transition is no longer a IF but a
            <span className='text-[#EC8000]'> WHEN.</span>
          </p>
          <div className='mt-6'>
            <p className='text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter'>
              Even if we are to believe the righteous intentions of all nation
              states, climate change will never be their to priority because
              they are boundary bound plus lack of incentives for long term
              action.
              <br />
              <br />
              We believe that the biggest impediment towards scaling climate
              action globally is capital. $Earth leverages the best of{" "}
              <span className='text-[#EC8000] font-semibold'>
                crypto economics to incentivize and blockchain to mobilize
              </span>{" "}
              capital globally in a capital efficient manner.
              <br />
              <br />
              Our priority with $Earth is to ensure that viable projects
              building the Solarpunk Infra stack do not face any capital
              constraints. To this effect we intend to be {" "}
              <span className='text-[#EC8000] font-semibold'>
                perpetual holding partners
              </span>{" "}
              in these projects to the maximum extent possible, structuring
              deals in a way that we always earn pro rata of the projects
              earnings and are{" "}
              <span className='text-[#EC8000] font-semibold'>
                equal partners in wins and loses.
              </span>
            </p>
          </div>
        </div>
        <div>
          <ImageView
            src={skeleton}
            alt='skeleton'
            width={200}
            height={200}
            className='object-contain w-[400px] h-[300px]'
          />
        </div>

      </div>
      <div className='flex justify-center w-full'>
        <p className='text-[#101828] font-semibold text-center mt-6 text-[20px] sm:text-[28px] mr-10 lg:mr-0 lg:mt-[5rem] font-syne'>
          Sectors we are focusing on -
        </p>
      </div>
      <div className='px-[6%] flex gap-8 py-[4%] justify-between'>
        {/* <ImageView
          src={earthPower}
          alt='earthPower'
          width={400}
          height={600}
          className='object-cover w-full'
        /> */}

        <div className='flex flex-col justify-between  w-[25%] gap-6 '>
          {fundingData && fundingData.length ? (
            fundingData?.map((power, index) => {
              const title = power.title?.split(" ");

              return (
                <div
                  key={index}
                  onClick={() => handleClick(power.title)}
                  className='flex flex-col cursor-pointer gap-2 grow w-full  rounded-lg overflow-hidden border border-[#EAECF0] justify-between'
                >
                  <div
                    className={`rounded-md p-2 lg:mt-2 my-auto flex justify-between  
                `}
                  >
                    <p className='text-[#101828] w-[50%] md:px-5 text-[9px] sm:text-[15px] font-semibold font-inter'>
                      {title[0]} <br /> {title[1]}
                    </p>
                    <ImageView
                      src={power.icon}
                      alt='chart'
                      width={55}
                      height={55}
                      className='object-contain w-12 h-12 '
                    />
                  </div>
                  <div
                    className={`w-full h-2 ${power.title === "Clean Energy"
                      ? "bg-[#486D2F]"
                      : power.title === "Regenerative Agriculture"
                        ? "bg-[#F4AB1F]"
                        : power.title === "Ecosystem Conservation"
                          ? "bg-[#B2BC45]"
                          : power.title === "Clean Transport"
                            ? "bg-[#EC8000]"
                            : power.title === "Solarpunk Spaces"
                              ? "bg-[#045047]"
                              : ""
                      }`}
                  ></div>
                </div>
              );
            })
          ) : (
            <div className='h-[60vh] w-full flex items-center justify-center'>
              <Loader />
            </div>
          )}
        </div>
        <div className="w-[75%]">
          {title === "Regenerative Agriculture" && (
            <div className='border-2 h-full lg:flex lg:gap-5 border-[#F2F4F7] rounded-lg px-[6%] py-6'>
              <div className="lg:w-[60%]">
                <p className='text-[#101828] font-semibold text-left  text-[14px] sm:text-[18px] mr-10 lg:mr-0 font-inter'>
                  Regenerative Agricuture
                </p>
                <div className='mt-6'>
                  <p className='text-[#475467] text-center sm:text-left font-normal lg:text-[14px]  text-[16px] font-inter'>
                    As of today less than 5% of our food production comes from
                    regenerative sources. Majority of farming in todays time is
                    chemical intensive using industrial inputs to produce highest
                    yields from land in order to maximize profit. This is highly
                    extractive in nature as it depletes the natural resources
                    required for nutrient rich food and makes no provision to
                    replenish instead pumps more chemicals to compensate.
                    <br />
                    <br />
                    This process also make the land a net carbon emitter where as if
                    the farmer shifts to more regenerative practices which
                    essentially translates to less tilling, more sustainable farming
                    methods to improve top soil health naturally, recycle waste
                    produce as inputs and maintain a robust ecosystem around the
                    farmland. This practice as an added benefit also is capable of
                    absorbing up to 8-9 tones of CO2/acre land annually in its top
                    soil. So not only does it{" "}
                    <span className='text-[#EC8000] font-semibold'>
                      provide nutrient rich food, ensures farming is sustainable in
                      the long run, decreases external input dependency but also
                      absorbs a lot of carbon.
                    </span>{" "}
                    We will be funding stewards looking to shift to these
                    regenerative agriculture practices plus the ancillary ecosystem
                    required to make it happen.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-[40%] lg:px-0 flex justify-center px-[8%]'>
                <ImageView
                  src={agriculture}
                  alt='agriculture'
                  width={500}
                  height={500}
                  className='object-cover mt-10 mb-5'
                />
              </div>
            </div>
          )}
          {title === "Clean Energy" && (
            <div className='border-2 lg:flex lg:gap-5 border-[#F2F4F7] rounded-lg px-[6%] h-full py-6'>
              <div className="lg:w-[60%]">
                <p className='text-[#101828] font-semibold text-left  text-[14px] sm:text-[18px] mr-10 font-inter'>
                  Clean Energy
                </p>
                <div className='mt-6'>
                  <p className='text-[#475467] text-center sm:text-left font-normal  text-[16px] lg:text-[14px] font-inter'>
                    Currently clean electricity generation comprises of 35% market
                    share of the total electricity consumed which in itself is less
                    than 20% of total energy consumption. So in effect of the over
                    450 Exa Joules (10^18) produced annually for consumption across
                    sectors, only 8% is from clean sources. This needs to get to
                    over 90% in the next 30 yrs and for that we will need to fund
                    inordinate amounts of wind/solar + battery storage and nuclear
                    power plants.{" "}
                    <span className='text-[#EC8000] font-semibold'>
                      That’s over 100 Billion MWh of excess capacity that needs to
                      be installed.
                    </span>{" "}
                    This is estimated to take an annual investment of $1.5 – 2
                    Trillion for setting up plants + grid to accommodate clean
                    energy production and disbursement, of which we aim to be an
                    integral part of.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-[40%] lg:px-0 flex justify-center px-[8%]'>
                <ImageView
                  src={clean}
                  alt='clean'
                  width={500}
                  height={500}
                  className='object-cover mt-10 mb-5'
                />
              </div>
            </div>
          )}
          {title === "Ecosystem Conservation" && (
            <div className='border-2 lg:flex lg:gap-5 border-[#F2F4F7] h-full rounded-lg px-[6%] py-6'>
              <div className="lg:w-[60%]">
                <p className='text-[#101828] font-semibold text-left  text-[14px] sm:text-[18px] mr-10 font-inter'>
                  Ecosystem Conservation
                </p>
                <div className='mt-6'>
                  <p className='text-[#475467] text-center sm:text-left font-normal  text-[16px] lg:text-[14px] font-inter'>
                    We have destroyed over 50% of our forest cover in the last 200
                    yrs primarily because of urbanization, agriculture, resource
                    demand and cattle grazing. On last count over 10 football fields
                    of primary forest was being lost every minute. We are literally
                    digging our own graves. These ecosystems are the only thing
                    keeping{" "}
                    <span
                      className='text-[#EC8000]
                  font-semibold'
                    >
                      LIFE
                    </span>{" "}
                    on earth habitable as we know it. Providing countless benefits
                    we haven&apos;t even realized.{" "}
                    <span
                      className='text-[#EC8000]
                  font-semibold'
                    >
                      Natural Ecosystems are truly the only scarce resource in this
                      Solar System and it is high time we start valuing them as
                      such.
                    </span>{" "}
                    We intend to deploy capital to be able to buy these natural
                    ecosystems in alignment with indigenous communities in order to
                    ensure they get compensated for not destroying these ecosystems
                    and can choose to live harmoniously with them. In a world where
                    between Gold and Bitcoin we have allocated over $8 Trillion in
                    wealth, surely we can find the necessary amount to protect
                    ecosystems which sustain life on earth. Our goal is to ensure
                    that we go from 25% land under conservation currently to 50%
                    total area of Earth under conservation by 2050.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-[40%] lg:px-0 flex justify-center px-[8%]'>
                <ImageView
                  src={eco}
                  alt='eco'
                  width={500}
                  height={500}
                  className='object-cover mt-10 mb-5'
                />
              </div>
            </div>
          )}
          {title === "Clean Transport" && (
            <div className='border-2 lg:flex h-full lg:gap-5 border-[#F2F4F7] rounded-lg px-[6%] py-6'>
              <div className="lg:w-[60%]">
                <p className='text-[#101828] font-semibold text-left  text-[14px] sm:text-[18px] mr-10 font-inter'>
                  Clean Transport
                </p>
                <div className='mt-6'>
                  <p className='text-[#475467] text-center sm:text-left font-normal  text-[16px] lg:text-[14px] font-inter'>
                    Transportation contributes about 10-15% of the emission problem.
                    We are already began witnessing the wave of transition forming
                    towards electric vehicles. Right now, at less than 10% of market
                    share, EVs + Hydrogen trucks will become 100% of private
                    transport and EV buses + Metro will become 100% of public
                    transport in the next 30 yrs. We will be funding{" "}
                    <span
                      className='text-[#EC8000]
                  font-semibold'
                    >
                      EV taxis, charging infrastructure, battery manufacturing and
                      its recycling plants, electric buses
                    </span>{" "}
                    for public transport to ensure a fully clean transportation
                    system.{" "}
                    {/* <span
                  className='text-[#EC8000]
                  font-semibold'
                >
                  Natural Ecosystems are truly the only scarce resource in this
                  Solar System and it is high time we start valuing them as
                  such.
                </span>{" "}
                We intend to deploy capital to be able to buy these natural
                ecosystems in alignment with indigenous communities in order to
                ensure they get compensated for not destroying these ecosystems
                and can choose to live harmoniously with them. In a world where
                between Gold and Bitcoin we have allocated over $8 Trillion in
                wealth, surely we can find the necessary amount to protect
                ecosystems which sustain life on earth. Our goal is to ensure
                that we go from 25% land under conservation currently to 50%
                total area of Earth under conservation by 2050. */}
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-[40%] lg:px-0 flex justify-center px-[8%]'>
                <ImageView
                  src={transport}
                  alt='transport'
                  width={500}
                  height={500}
                  className='object-cover mt-10 mb-5'
                />
              </div>
            </div>
          )}
          {title === "Solarpunk Spaces" && (
            <div className='border-2 lg:flex h-full lg:gap-5 border-[#F2F4F7] rounded-lg px-[6%] py-6'>
              <div className="lg:w-[60%]">
                <p className='text-[#101828] font-semibold text-left  text-[14px] sm:text-[18px] mr-10 font-inter'>
                  Solarpunk Spaces
                </p>
                <div className='mt-8'>
                  <p className='text-[#475467] text-center sm:text-left font-normal  text-[16px] lg:text-[14px] font-inter'>
                    Built environment is a major contributor to GHG emissions. The
                    construction process itself is energy-intensive with production
                    of materials like cement, steel, and glass that involves high
                    emissions of C02. Construction activities, including the
                    operation of machinery and transportation of materials, also
                    contribute to greenhouse gas emissions. Buildings consume a
                    substantial amount of energy for heating, cooling, lighting, and
                    other operations. This energy is often sourced from fossil
                    fuels, leading to greenhouse gas emissions. According to the
                    International Energy Agency (IEA), buildings and their
                    construction account for 36% of global energy use and 39% of
                    energy-related C02 emissions annually.
                  </p>
                  <br />
                  <br />
                  <p className='text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter'>
                    Shelter being a core human need we dont anticipate the demand
                    tapering anytime soon so $EARTH treasury will be funding
                    construction that lis energy effecient, using renewable energy,
                    using low carbon materials such as recycled steel or low
                    emission concrete, designed keeping bioregion dynamics in mind,
                    having effective waste management, aiming to become self
                    sustainable entities.
                  </p>
                  {/* <ol className="list-decimal mt-4 pl-4 text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
                  <li>) Clean material manufacturing (steel, concrete etc.)</li>
                  <br />
                  <li>) Energy storage</li>
                  <br />

                  <li>) Recycling</li>
                  <br />
                  <li>) Energy Production</li>
                  <br />
                  <li>) Regenerative Agriculture ecosystem</li>
                  <br />
                  <li>) Energy Efficiency</li>
                  <br />
                  <li>) Clean Public transport</li>
                  <br />
                  <li>) Tech for Solarpunk paradigm</li>
                </ol> */}
                </div>
              </div>
              <div className='w-full lg:w-[40%] lg:px-0 flex justify-center px-[8%]'>
                <ImageView
                  src={solarpunkSpaces}
                  alt='eco'
                  width={500}
                  height={500}
                  className='object-cover mt-10 mb-5'
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='sm:px-[8%] px-4 flex flex-col'>
        {/* <div className="flex flex-col items-center justify-between w-full gap-16 mt-3 sm:flex-row">
            <ImageView
              src={pieChart}
              alt="piechart"
              width={250}
              height={250}
              className="object-cover mt-4"
            />
            <div className="flex gap-2 w-full sm:w-[50%] flex-col">
              {chartData?.map((chart, index) => (
                <div
                  className="relative flex items-start justify-between gap-8 grow"
                  key={index}
                >
                  <div
                    className={`${chart.title === "Regenerative Agriculture"
                        ? "bg-[#F4AB1F]"
                        : chart.title === "Ecosystem Conservation"
                          ? "bg-[#B2BC45]"
                          : chart.title === "Clean Energy"
                            ? "bg-[#486D2F]"
                            : chart.title === "Solarpunk Spaces"
                              ? "bg-[#045047]"
                              : chart.title === "Clean Transport"
                                ? "bg-[#EC8000]"
                                : ""
                      } w-[5px]  -left-3 top-[8px] absolute h-[5px] rounded-full`}
                  ></div>
                  <p className="text-[#475467] font-inter text-[14px] font-normal">
                    {chart?.title}
                  </p>
                  <p className="text-[#475467] font-inter text-[14px] font-normal">
                    {chart?.percent}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        <p className='text-[#101828] font-semibold text-center mt-16 text-[20px] sm:text-[28px] xl:text-[32px] 2xl:text-[36px] mr-10 font-syne'>
          Rationale behind sector selection -
        </p>

        <div className="relative mt-5">
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:top-1/2 md:left-1/2 lg:top-1/2 lg:left-2/5 xl:top-1/2 xl:left-1/2">
            <p className='mb-3 text-center font-semibold  md:text-[14px] lg:text-[18px] xl:text-[20px] font-syne '>
              They <span className='text-white '> directly address</span>{" "} all causes of climate change
            </p>
          </div>
          <ImageView
            src={thesisbg1}
            alt="graph"
            width={600}
            height={600}
            className="object-contain w-full "
          />
        </div>

        <div className="relative mt-5">
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:top-1/2 md:left-1/2 lg:top-1/2 lg:left-2/5 xl:top-1/2 xl:left-1/2">
            <p className='mb-3 text-center font-semibold  md:text-[14px] lg:text-[18px] xl:text-[20px] font-syne text-nowrap'>
              They cater to humanities <span className='text-white '> core needs</span>{" "} - energy, food, transport, <br /> materials and ecosystems to sustain LIFE
            </p>
          </div>
          <ImageView
            src={thesisbg2}
            alt="graph"
            width={200}
            height={200}
            className="object-contain w-full "
          />
        </div>

        <div className="relative mt-5">
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:top-1/2 md:left-1/2 lg:top-1/2 lg:left-2/5 xl:top-1/2 xl:left-1/2">
            <p className='mb-3 text-center font-semibold  md:text-[14px] lg:text-[18px] xl:text-[20px] font-syne text-nowrap'>
              All these climate solutions generate tremendous amounts of  <span className='text-white '> positive <br /> externalities </span>{" "}- Clean Air, Healthy soil, Increasing Biodiversity, Nutrient rich <br /> food, Clean Water, Energy Independence, reducing pollution etc.
            </p>
          </div>
          <ImageView
            src={thesisbg3}
            alt="graph"
            width={200}
            height={200}
            className="object-contain w-full "
          />
        </div>

        <div className="relative mt-5">
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:top-1/2 md:left-1/2 lg:top-1/2 lg:left-2/5 xl:top-1/2 xl:left-1/2">
            <p className='mb-3 text-center font-semibold  md:text-[14px] lg:text-[18px] xl:text-[20px] font-syne text-nowrap'>
              These real world solutions have undisputed long term value which <br /> also provide  <span className='text-white '> monetary yields </span>{" "} uncorrelated to crypto sentiment <br /> which ensures strong floor value for $Earth.
            </p>
          </div>
          <ImageView
            src={thesisbg4}
            alt="graph"
            width={600}
            height={600}
            className="object-contain w-full "
          />
        </div>




        {/* <ol className='pl-6 mt-6 list-decimal'>
          <li className='mb-3 text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter'>
            <p className=''>
              They directly address{" "}
              <span className='text-[#EC8000] font-semibold'>all causes</span>{" "}
              of climate change.
            </p>
          </li>
          <li className='mb-3 text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter'>
            <p className='text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter'>
              They cater to humanities{" "}
              <span className='text-[#EC8000] font-semibold'>core needs</span> -
              energy, food, transport, materials and ecosystems to sustain LIFE
            </p>
          </li>
          <li className='mb-3 text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter'>
            <p className='text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter'>
              All these climate solutions generate tremendous amounts of{" "}
              <span className='text-[#EC8000] font-semibold'>
                positive externalities
              </span>{" "}
              - Clean Air, Healthy soil, Increasing Biodiversity, Nutrient rich
              food, Clean Water, Energy Independence, reducing pollution etc.
            </p>
          </li>
          <li className='mb-2 text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter'>
            <p className='text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter'>
              These real world solutions have undisputed long term value which
              also provide{" "}
              <span className='text-[#EC8000] font-semibold'>
                monetary yields
              </span>{" "}
              uncorrelated to crypto sentiment which ensures strong floor value
              for $Earth.
            </p>
          </li>
        </ol> */}
        <div className="flex justify-between gap-10 mt-32 mb-24">
          <div className="md:w-[70%] lg:w-[50%]">
            <p className='text-[#101828] font-semibold text-left mt-6 md:text-[16px] lg:text-[28px] mr-10 font-syne'>
              How?
            </p>
            <div className='w-full mt-6'>
              <p className='text-[#475467] text-center sm:text-left font-normal  md:text-[10px] lg:text-[14px] xl:text-[16px] font-inter'>
                We have tried to make it as easy and rewarding for anyone across the
                planet to take constructive climate action by simply buying $Earth
                and using it eventually to build a sustainable, circular, solarpunky
                economy.
                <br />
                <br />
                Unlike BTC or ETH which are minted as block rewards for validating
                transactions on the blockchain, $Earth is only minted against purged
                $$$ which are used to fund climate solutions. For the first time we
                will have a{" "}
                <span className='text-[#EC8000]md:text-[10px] lg:text-[14px] xl:text-[16px] font-semibold'>
                  currency that is backed by climate solutions
                </span>{" "}
                which provide essential utility for humanity and not by a shiny
                metal or military forces.
              </p>
            </div>
          </div>
          <div>
            <ImageView
              src={assetthesis}
              alt='asset'
              width={500}
              height={500}
              className='object-cover'
            />
          </div>
        </div>
      </div>

      <Community
        title='Ready to go down the rabbit hole?'
        description='Join our social community!'
      />
    </div>
  );
}
