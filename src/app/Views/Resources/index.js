"use client";
import ImageView from "../../Components/ImageView";
import Community from "../../Components/Community";
import Video from "../../Components/Video";

export default function Resources() {
  const resources = "/assets/images/resources.png";
  const section = "/assets/images/section.png";
  const bottomSection = "/assets/images/below-section.png";
  const economy = "/assets/images/economy.png";
  const asset = "/assets/images/Climatesolutions.png";
const govern = "/assets/images/Communitygoverned.png";
const range = "/assets/images/Rangebound.png";
const pool = "/assets/images/Liquiditypool.png";
const newUnitValue = "/assets/images/New-unit-of-value.png";
const economyHome = "/assets/images/Economy-home1.png";
const solarPunk = "/assets/images/Solarpunk-Values1.png";
const environmentClimate = "/assets/images/climate-environment.png";
const earthResources = "/assets/video/What-is-$EARTH.mp4";

  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col w-full gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Resources
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            What is $EARTH?
          </p>
          {/* <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            The economic models behind $Earth driving our solarpunk vision home
          </p> */}

        
        <div className="sm:px-[5%] px-4 flex mt-6 flex-col w-full items-center">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
            Digital currency backed by climate solutions, ecosystem services and solarpunk values.
              <br />
              <br />
              </p>
              <div className="w-[95%]">
              <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
              $EARTH is a fairly multi faceted token/currency/tool. Here we shed light on various aspects of $EARTH and how it each parts contributes to our objective of making anthropogenic climate change history and seeding the solarpunk paradigm.
              <br />
            </p>
            </div>
          </div>
          </div>
          </div>
           <Video
          src={earthResources}
          alt='earthcoin'
           className="w-full mt-4 object-cover"
        />
        
        {/* <ImageView
          src={resources}
          alt="resources"
          width={400}
          height={200}
          className="w-full mt-4 object-cover"
        /> */}
        <div className="mt-16 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
         <div className='flex flex-col gap-8 mt-3'>
          <div className='flex flex-col shadow gap-4 sm:flex-row p-5 items-center sm:items-start justify-between border-2 border-[#EAECF0] rounded-lg'>
            <div className='flex flex-col w-full sm:w-[60%] p-10 justify-center items-center sm:items-start '>
              <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
                Backed by{" "}
                <span className='text-[#EC8000]'> Climate Solutions</span>
              </p>
              <p className='text-[#475467]  text-center sm:text-left text-[16px] py-5 font-normal font-inter'>
                Each $EARTH is backed by a variety of on ground projects that
                are directly addressing the climate / environmental crisis while
                catering to humanities core needs
              </p>
            </div>
            <div className='p-5'>
              <ImageView
                src={asset}
                alt='service'
                width={600}
                height={300}
                className={` w-48 h-44 object-contain `}
              />
            </div>
          </div>
          <div className='flex flex-col shadow gap-4 sm:flex-row p-5 items-center sm:items-start justify-between border-2 border-[#EAECF0] rounded-lg'>
            <div className='flex flex-col w-full sm:w-[60%] justify-center p-10 items-center sm:items-start '>
              <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-[#EC8000]'>
                Community
                <span className='text-black'> Governed</span>
              </p>
              <p className='text-[#475467]  text-center sm:text-left text-[16px] py-5  font-normal font-inter'>
                Monetary policy of $EARTH will be governed by Nodes of $EARTH
                with goal of achieving our mission/vision
              </p>
            </div>
            <div className='p-5'>
              <ImageView
                src={govern}
                alt='service'
                width={600}
                height={300}
                className={` w-48 h-44 object-contain `}
              />
            </div>
          </div>
          <div className='flex flex-col shadow gap-4 sm:flex-row p-5 items-center sm:items-start justify-between border-2 border-[#EAECF0] rounded-lg'>
            <div className='flex flex-col w-full sm:w-[60%] justify-center p-10 items-center sm:items-start '>
              <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-[#EC8000]'>
                Range
                <span className='text-black'> Bound</span>
              </p>
              <p className='text-[#475467]  text-center sm:text-left text-[16px] py-5  font-normal font-inter'>
                $EARTH is a new unit of value, not pegged to any currency.
                Designed to be loosely range bound, assets backing each token
                serve as the floor while valuing positive externalities created
                by those assets and the utility of the currency create a soft
                ceiling.
              </p>
            </div>
            <div className='p-5'>
              <ImageView
                src={range}
                alt='service'
                width={600}
                height={300}
                className={` w-48 h-44 object-contain `}
              />
            </div>
          </div>
          <div className='flex flex-col shadow gap-4 sm:flex-row p-5 items-center sm:items-start justify-between border-2 border-[#EAECF0] rounded-lg'>
            <div className='flex flex-col w-full sm:w-[60%] justify-center p-10 items-center sm:items-start '>
              <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black '>
                Protocol Owned
                <span className='text-[#EC8000]'> Liquidity</span>
              </p>
              <p className='text-[#475467]  text-center sm:text-left text-[16px] py-5  font-normal font-inter'>
                Perpetual liquidity for you to swap your $EARTH for $DAI
                whenever you choose to irrespective of market conditions. This
                LP is owned by the treasury as a service to currency holders.
              </p>
            </div>
            <div className='p-5'>
              <ImageView
                src={pool}
                alt='service'
                width={600}
                height={300}
                className={` w-48 h-44 object-contain `}
              />
            </div>
          </div>
          <div className='flex flex-col shadow gap-4 sm:flex-row p-5 items-center sm:items-start justify-between border-2 border-[#EAECF0] rounded-lg'>
            <div className='flex flex-col w-full sm:w-[60%] p-10 justify-center items-center sm:items-start '>
              <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
              New Unit of <span className='text-[#EC8000]'>Value</span>
              </p>
              <p className='text-[#475467]  text-center sm:text-left text-[16px] py-5 font-normal font-inter'>
              $EARTH is a new unit of value, not pegged to any currency. Designed to
          be loosely range bound, <br /> assets backing each token serve as the
          floor while valuing positive externalities created by those <br />{" "}
          assets and the utility of the currency create a soft ceiling.
              </p>
            </div>
            <div className='p-5'>
              <ImageView
                src={newUnitValue}
                alt='service'
                width={600}
                height={300}
                className={` w-48 h-44 object-contain `}
              />
            </div>
          </div>
          <div className='flex flex-col shadow gap-4 sm:flex-row p-5 items-center sm:items-start justify-between border-2 border-[#EAECF0] rounded-lg'>
            <div className='flex flex-col w-full sm:w-[60%] p-10 justify-center items-center sm:items-start '>
              <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
              Putting the Eco in <span className='text-[#EC8000]'>Economy</span>
              </p>
              <p className='text-[#475467]  text-center sm:text-left text-[16px] py-5 font-normal font-inter'>
              When you pay a premium over the base value of $EARTH it represents{" "}
          <br /> the economic value placed on ecosystems and it services. This
          helps us <br /> reward projects creating more of this
              </p>
            </div>
            <div className='p-5'>
              <ImageView
                src={economyHome}
                alt='service'
                width={600}
                height={300}
                className={` w-48 h-44 object-contain `}
              />
            </div>
          </div>
          <div className='flex flex-col shadow gap-4 sm:flex-row p-5 items-center sm:items-start justify-between border-2 border-[#EAECF0] rounded-lg'>
            <div className='flex flex-col w-full sm:w-[60%] p-10 justify-center items-center sm:items-start '>
              <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
              Program <span className='text-[#EC8000]'>Solarpunk Values</span> into
              Money
              </p>
              <p className='text-[#475467]  text-center sm:text-left text-[16px] py-5 font-normal font-inter'>
              $EARTH utility will be designed to acknowledge and reward people &
              merchants that <br /> are imbibing these above mentioned values.
              </p>
            </div>
            <div className='p-5'>
              <ImageView
                src={solarPunk}
                alt='service'
                width={600}
                height={300}
                className={` w-48 h-44 object-contain `}
              />
            </div>
          </div>
          <div className='flex flex-col shadow gap-4 sm:flex-row p-5 items-center sm:items-start justify-between border-2 border-[#EAECF0] rounded-lg'>
            <div className='flex flex-col w-full sm:w-[60%] p-10 justify-center items-center sm:items-start '>
              <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
              Climate finance <span className='text-[#EC8000]'> funnel</span>
              </p>
              <p className='text-[#475467]  text-center sm:text-left text-[16px] py-5 font-normal font-inter'>
              $Earth acts as a borderless, capital efficient funnel <br />
          to incentivize, mobilize & allocate capital <br />
          towards climate solutions.
              </p>
            </div>
            <div className='p-5 '>
              <ImageView
                src={environmentClimate}
                alt='service'
                width={600}
                height={300}
                className={` w-48 h-44 object-contain `}
              />
            </div>
          </div>
        </div>
      </div>

        {/* <div className="sm:px-[20%] px-4 flex mt-6 flex-col w-full items-start">
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            $EARTH is a fairly multi faceted token/currency/tool and while our
            tagline is -
          </p>
          <p className="text-[#101828] font-semibold text-center sm:text-left mt-2 text-[20px] sm:text-[28px]  font-syne">
            Digital currency backed by climate solutions, ecosystem services and
            solarpunk values.
          </p>
          <div className="mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              It is difficult to get a sense of all that is $EARTH. So here we
              will shed light on various aspects of $EARTH and how it each parts
              contributes to our mission/vision in some way.
              <br />
              <br />
              $EARTH is a digital currency that is purely backed by projects in
              the following sectors -
              <br />
              <br />
              So like fiat is backed by the government and its military or was
              backed by gold at some point, how DAI is backed by Eth, Btc, Usdc
              etc and how ETH is backed by the economic activity on its chain
              and L2s similarly these projects mentioned above will serve as
              backing for Earth.
              <br />
            </p>
          </div>
        </div> */}
        <div className="sm:px-[8%] px-4 flex mt-6 gap-8 flex-col w-full items-start">
          {/* <div className="w-full h-[1.5px] my-8  bg-[#F2F4F7]"></div> */}

          {/* <Community
            title="Still curious?"
            description="Join our social community to understand further!"
          /> */}
        </div>
      </div>
  );
}
