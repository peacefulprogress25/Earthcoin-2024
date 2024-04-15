import ImageView from "../../Components/ImageView";
import Community from "../../Components/Community";

export default function Resources() {
  const resources = "/assets/images/resources.png";
  const section = "/assets/images/section.png";
  const economy = "/assets/images/economy.png";
  const earthValues = [
    "$EARTH is new unit of VALUE. It is not pegged to any fiat currency nor to any crypto currency. Much like how Bitcoin and Eth are new units of value, $EARTH is a new unit of value which gets its value from on ground regenerative assets backing $EARTH, the positive externalities that are created by those projects and the demand of $EARTH as a medium of exchange",
    "$EARTH is a medium of exchange for merchants providing goods and services that take us to a regenerative solarpunk paradigm. We intend to use $EARTH to subsidize such merchants to - a) make them more competitive with businesses that are extractive and hence cheap in $ terms b) Get them economies of scale which should help provide these goods and services to a larger section of society",
    "$EARTH is creating a monetary system that is powered by projects that are catering to our CORE needs of energy, food, transport, shelter and a hospitable environment. As $EARTH scales it elevates standard of living for all of humanity.",
    "$EARTH ensures infrastructure powering our future is not owned by nation states or corporations but all those that hold $EARTH",
    "$EARTH embodies Solarpunk values of radical optimism, compassion, regeneration, tech serving nature, harmony, peace etc. It will be utilized in whatever manner deemed fit to serve these values as occasions arise.",
    "$EARTH is a tool to process economic + ecological risk while disbursing capital",
    "$EARTH facilitates a shift from extractive to regenerative economies",
  ];
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
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            The economic models behind $Earth driving our solarpunk vision home
          </p>
        </div>
        <ImageView
          src={resources}
          alt="resources"
          width={400}
          height={200}
          className="w-full mt-4 object-cover"
        />

        <div className="sm:px-[20%] px-4 flex mt-6 flex-col w-full items-start">
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            $EARTH is a fairly multi faceted token/currency/tool and while our
            tagline is -
          </p>
          <p className="text-[#101828] font-semibold text-center sm:text-left mt-2 text-[20px] sm:text-[28px] sm:mr-10 font-syne">
            Digital currency backed by climate solutions, ecosystem services and
            solarpunk values.
          </p>
          <div className="mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              It is difficult to get a sense of all that is $EARTH
              <br />
              <br />
              <br />
              Elephant meme 
              <br />
              <br />
              <br />
              So here we will shed light on various aspects of $EARTH and how it
              each parts contributes to our mission/vision in some way. 
              <br />
              <br />
              $EARTH is a digital currency that is 
              <span className="text-[#EC8000] font-semibold">purely</span>
               backed by projects in the following sectors -
            </p>
          </div>
        </div>
        <ImageView
          src={section}
          alt="section"
          width={800}
          height={500}
          className="object-cover w-full mt-6"
        />
        <div className="sm:px-[20%] px-4 flex mt-6 flex-col w-full items-start">
          <div className="mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              So like fiat is backed by the government and its military or was
              backed by gold at some point, how DAI is backed by Eth, Btc, Usdc
              etc and how ETH is backed by the economic activity on its chain
              and L2s similary these projects mentioned above will serve as
              backing for Earth.
              <br />
              <br />
            </p>
            <ol className="list-decimal">
              <li className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
                $EARTH is a funnel to raise petro $$$ across the world to fund
                projects tackling climate/env crisis across the world. Every $
                that is purged directly at the protocol is guaranteed to be
                allocated to projects building infrastructure for a net zero
                future in the most transparent manner possible.
              </li>
              <br />
              <li className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
                $EARTH is currency that values ecosystem services. When you buy
                $EARTH you are by default putting a $ price on -
                <br />
                <br />
                <ul className="list-disc pl-6">
                  <li>Clean Air</li>
                  <li>Clean Water</li>
                  <li>Biodiversity</li>
                  <li>Carbon sequestration</li>
                  <li>Soil health</li>
                  <li>Nutrient cycling</li>
                  <li>Pollination</li>
                  <li>etc etc ( See full list here )</li>
                </ul>
              </li>
            </ol>
            <br />
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              By doing this we create a reality where we are putting the value
              of ECOLOGY in our ECONOMY.
            </p>
          </div>
          <ImageView
            src={economy}
            alt="economy"
            width={800}
            height={500}
            className="object-cover w-full mt-6"
          />
          <div className="mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              As the community continues to price these positive externalities,
              projects creating these start getting access to capital and the
              success of the project is measured by more holistic parameters
            </p>
            <br />
            <ol className="list-decimal">
              {earthValues.map((value, index) => (
                <li
                  key={index}
                  className="text-[#475467] text-center mb-4 sm:text-left font-normal text-[16px] font-inter"
                >
                  {value}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="w-full h-[1.5px] my-8 bg-[#F2F4F7]"></div>

      <Community
        title="Still curious?"
        description="Join our social community to understand further!"
      />
    </div>
  );
}
