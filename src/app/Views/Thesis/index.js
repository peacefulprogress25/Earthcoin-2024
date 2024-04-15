import ImageView from "../../Components/ImageView";
import Community from "../../Components/Community";

const thesis = "/assets/images/thesis.png";
const funnel = "/assets/images/funnel.svg";
const agriculture = "/assets/images/agriculture.png";
const pieChart = "/assets/images/Piechart-2.png";
const exportImg = "/assets/images/Export.png";
const earthPower = "/assets/images/Earthpowers.png";

export default function Thesis() {
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
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center">
        <div className="flex flex-col w-full gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            About
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            THESIS
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            $Earth leverages crypto to fund climate solutions, backing a
            currency with essential utility for humanity.
          </p>
        </div>
        <ImageView
          src={thesis}
          alt="thesis"
          width={400}
          height={200}
          className="w-full mt-4 object-cover"
        />
        <div className="sm:px-[20%] px-4 flex flex-col w-full items-start">
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            FUEL to our FIRE
          </p>
          <div className="mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              Addressing climate change is truly one of those 
              <span className="text-[#EC8000] font-semibold">
                once in a generation opportunity.
              </span>
               The world as we know it will have to change completely if we are
              to address climate change holistically. 
              <span className="text-[#101828] font-semibold">
                50 GT of CO2 eqv has to become ZERO in the next 30 years
              </span>
               and the only way that happens is all the infrastructure
              supporting humanities core needs becomes 
              <span className="text-[#EC8000] font-semibold">
                solarpunk in nature.
              </span>
            </p>
          </div>
        </div>
      </div>
      <ImageView
        src={funnel}
        alt="funnel"
        width={400}
        height={500}
        className="w-full object-cover"
      />
      <div className="w-full max-w-screen-2xl sm:mt-[-4rem] mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="sm:px-[20%] px-4 flex flex-col w-full items-start">
          <p className="text-[#101828] font-semibold text-left  text-[20px] sm:text-[28px] mr-10 font-syne">
            This transition is no longer a IF but a 
            <span className="text-[#EC8000]">WHEN.</span>
          </p>
          <div className="mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              Even if we are to believe the righteous intentions of all nation
              states, climate change will never be their to priority because
              they are boundary bound plus lack of incentives for long term
              action.
              <br />
              <br />
              We believe that the biggest impediment towards scaling climate
              action globally is capital. $Earth leverages the best of 
              <span className="text-[#EC8000] font-semibold">
                crypto economics to incentivize blockchain to mobilize
              </span>
               capital globally in a capital efficient manner.
              <br />
              <br />
              Our priority with $Earth is to ensure that viable projects
              building the Solarpunk Infra stack do not face any capital
              constraints. To this effect we intend to be {" "}
              <span className="text-[#EC8000] font-semibold">
                perpetual holding partners
              </span>
               in these projects to the maximum extent possible, structuring
              deals in a way that we always earn pro rata of the projects
              earnings and are 
              <span className="text-[#EC8000] font-semibold">
                equal partners in wins and loses.
              </span>
            </p>
          </div>
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            Sectors we are focusing on -
          </p>
        </div>
        <div className="px-[6%]">
          <div className="px-[6%]">
            <ImageView
              src={earthPower}
              alt="earthPower"
              width={400}
              height={600}
              className="w-full object-cover"
            />
          </div>
          <div className="rounded-md bg-[#F9FAFB] flex justify-between border border-[#F2F4F7] p-1">
            {earthPowerData.map((power, index) => (
              <button
                className={` rounded-md p-1 px-2 text-[#667085]  text-[9px] sm:text-[13px] font-inter font-semibold ${
                  index === 0 ? "bg-[#FFFFFF] shadow-md text-[#344054]" : ""
                }`}
                key={index}
              >
                {power.title}
              </button>
            ))}
          </div>
          <div className="bg-[#F9FAFB] border mt-2 border-[#F2F4F7] rounded-lg px-[10%] py-6">
            <p className="text-[#101828] font-semibold text-left  text-[14px] sm:text-[18px] mr-10 font-inter">
              Regenerative Agricuture
            </p>
            <div className="mt-6">
              <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
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
                soil. So not only does it 
                <span className="text-[#EC8000] font-semibold">
                  provide nutrient rich food, ensures farming is sustainable in
                  the long run, decreases external input dependency but also
                  absorbs a lot of carbon.
                </span>
                 We will be funding stewards looking to shift to these
                regenerative agriculture practices plus the ancillary ecosystem
                required to make it happen.
              </p>
            </div>
            <ImageView
              src={agriculture}
              alt="agriculture"
              width={400}
              height={600}
              className="w-full mt-10 mb-5 object-cover"
            />
          </div>
        </div>
        <div className="sm:px-[20%] px-4 flex flex-col">
          <div className="flex flex-col gap-16 mt-3 w-full  items-center justify-between sm:flex-row">
            <ImageView
              src={pieChart}
              alt="piechart"
              width={250}
              height={250}
              className="mt-4 object-cover"
            />
            <div className="flex gap-2 w-full sm:w-[50%] flex-col">
              {chartData?.map((chart, index) => (
                <div
                  className="flex justify-between grow  gap-8 relative items-start"
                  key={index}
                >
                  <div
                    className={`${
                      chart.title === "Regenerative Agriculture"
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
          </div>
          <p className="text-[#101828] font-semibold text-left mt-8 text-[20px] sm:text-[28px] mr-10 font-syne">
            Rationale behind sector selection -
          </p>
          <ol className="mt-6 list-decimal">
            <li className="mb-3 text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              <p className="">
                They directly address 
                <span className="text-[#EC8000] font-semibold">all causes</span>
                 of climate change.
              </p>
            </li>
            <li className="mb-3 text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
                They cater to humanities 
                <span className="text-[#EC8000] font-semibold">
                  core needs 
                </span>
                - energy, food, transport, materials and ecosystems to sustain
                LIFE
              </p>
            </li>
            <li className="mb-3 text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
                All these climate solutions generate tremendous amounts of 
                <span className="text-[#EC8000] font-semibold">
                  positive externalities
                </span>
                 - Clean Air, Healthy soil, Increasing Biodiversity, Nutrient
                rich food, Clean Water, Energy Independence, reducing pollution
                etc.
              </p>
            </li>
            <li className="mb-2 text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
                These real world solutions have undisputed long term value which
                also provide 
                <span className="text-[#EC8000] font-semibold">
                  monetary yields
                </span>
                 uncorrelated to crypto sentiment which ensures strong floor
                value for $Earth.
              </p>
            </li>
          </ol>
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            How?
          </p>
          <div className="w-full mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              We have tried to make it as easy and rewarding for anyone across
              the planet to take constructive climate action by simply buying
              $Earth and using it eventually to build a sustainable, circular,
              solarpunky economy.
              <br />
              <br />
              Unlike BTC or ETH which are minted as block rewards for validating
              transactions on the blockchain, $Earth is only minted against
              purged $$$ which are used to fund climate solutions. For the first
              time we will have a 
              <span className="text-[#EC8000] font-semibold">
                 currency that is backed by climate solutions
              </span>
               which provide essential utility for humanity and not by a shiny
              metal or military forces.
            </p>
          </div>
        </div>
        <div className="sm:px-[16%] w-full px-4">
          <ImageView
            src={exportImg}
            alt="export"
            width={550}
            height={600}
            className="!w-full mt-6 object-cover"
          />
        </div>
        <Community
          title="Ready to go down the rabbit hole?"
          description="Join our social community!"
        />
      </div>
    </div>
  );
}
