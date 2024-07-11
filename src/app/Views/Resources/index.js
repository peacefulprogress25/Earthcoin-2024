"use client";
import ImageView from "../../Components/ImageView";
import Community from "../../Components/Community";

export default function Resources() {
  const resources = "/assets/images/resources.png";
  const section = "/assets/images/section.png";
  const bottomSection = "/assets/images/below-section.png";
  const economy = "/assets/images/economy.png";

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
              <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              $EARTH is a fairly multi faceted token/currency/tool. Here we shed light on various aspects of $EARTH and how it each parts contributes to our objective of making anthropogenic climate change history and seeding the solarpunk paradigm.
              <br />
            </p>
            </div>
          </div>
          </div>
        
        <ImageView
          src={resources}
          alt="resources"
          width={400}
          height={200}
          className="w-full mt-4 object-cover"
        />

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

          <Community
            title="Still curious?"
            description="Join our social community to understand further!"
          />
        </div>
      </div>
    </div>
  );
}
