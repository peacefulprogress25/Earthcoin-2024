import ImageView from "../../Components/ImageView";

const community = "/assets/images/community.png";
const misson = "/assets/images/Mission-Vission.png";
const purge = "/assets/images/purge.png";
const partnership = "/assets/images/partnership.png";
const projects = "/assets/images/projects.png";
const policy = "/assets/images/policy.png";

export default function Network() {
  return (
    <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
          Network
        </p>
        <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
          What are Nodes of $Earth?
        </p>
        <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
          From purging petro dollars to forming partnerships to policy making,
          these NODES keep <br /> the $EARTH network running
        </p>
      </div>
      <ImageView
        src={community}
        alt="purpose"
        width={400}
        height={300}
        className="w-full h-[18rem]  mt-4 object-cover"
      />
      <div className="sm:px-[8%] px-4 flex flex-col w-full items-start">
        <p className=" font-semibold text-left mt-6 text-[#EC8000] text-[20px] sm:text-[28px] mr-10 font-syne">
          GM{" "}
          <span className="text-black">
            Degens, Regens, Treegens, Beegens, Seagens, Lunarpunks, Mycopunks,
            Junglepunks and Solarpunks!
          </span>
        </p>
        <div className="mt-6">
          <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
            We find ourselves at a critical crossroads in the history of our
            species. With over 8 Billion of us on this planet and existential
            challenges (Climate, AI) of our own making looming over us, how we
            act going forward makes all the difference. Radical advances in
            technology and tools of coordination has ensured a fairly decent
            material standard of living relative to our past but has also
            dramatically amplified our power/influence on this planet as the
            keystone species and as the saying goes with great power comes
            great... Our detrimental presence on the climate / environment is an
            undeniable fact now and with EARTH being the only floating rock that
            has the serendipitous capacity to house LIFE, the question arises -
            <span className="text-black font-semibold">WTF are we doing!?</span>
          </p>
          <br />
          <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
            It is our belief that everyone reading this has asked this Question
            at some point in time. We are all here because there is some deep
            dissatisfaction and discomfort in the direction we are heading . We
            are currently inhabiting an economic framework that rewards
            externalizing negativities, promotes short term thinking, where
            doing the right thing usually means compromising on material gains,
            needs perpetual growth to survive and where optimizing for financial
            capital is the north star. This experiment of neoliberal capitalism
            has played itself out and it will only exacerbate the meta crisis if
            we empower it further. In retrospect we surely don&apos;t want to be
            <span className="text-black font-semibold">
              digging our graves while aiming for the sky.
            </span>
          </p>
          <br />
          <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
            So what now ? Well as our beloved advisor loves to say - One cannot
            solve a problem from the same frequency that created it. The
            socio-economic frequency we inhabit is simply a function of the
            story we tell ourselves manifesting itself via incentives for
            complex coordinated action leveraging the technologies we have today
            and fueled by one of the best know technologies of our time - MONEY.
            Thanks to Bitcoin{" "}
            <span className="text-black font-semibold">
              {" "}
              we are experiencing a regenaissance in the frequencies
              programmable MONEY can manifest.
            </span>
          </p>
          <br />
          <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
            Today we can design our own monetary system on a permissionless,
            transparent, immutable, borderless ledger. Ascribe value to what we
            think is important, decide what kind of backing we want powering our
            monetary systems, incentivize aligned economic activity, subsidize
            critical elements, reward required actions, coordinate globally with
            complete sovereignty and without any intermediaries.
          </p>
          <br />
          <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
            We no longer have an excuse to blame any external agencies. Today we
            have the tools to take matters into our hands and create the
            regen/solarpunk reality we know is possible deep within.
            <span className="text-black font-semibold">
              Transformation from where we are to where we want to be is
              probably one of the biggest, most radical transformations ever
              undertaken on this planet.
            </span>{" "}
            We essentially want to go from a reality where every single action
            we undertake has direct negative consequences on this biosphere to
            one where every action directly regenerates our biosphere. A reality
            where our energy only comes from clean sources, food from healthy
            soil, our homes regenerate us and our surroundings, our transport
            doesn&apos;t choke our lungs, natural ecosystems and its
            biodiversity is perceived as the only scarce resource in this solar
            system, businesses are regenerative by design, well being is the
            north star, AGI helps us focus on becoming more human…..
          </p>
          <br />
          <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
            This definitely is an unprecedented challenge but humanity’s past is
            replete with instances where a committed collective of aligned
            frequencies have dramatically changed the world for the better. It
            is with this belief we present to you our vision for{" "}
            <span className="text-black font-semibold"> NODES of $EARTH </span>-
            Where aligned individuals and organizations that are committed to
            holistically addressing the climate/environment/meta crisis can max
            leverage this multifaceted tool/network ($EARTH) to coordinate like
            the mycelium network (vibrant, adaptive, diverse & symbiotic) to
            fulfil our mission & vision -
          </p>
        </div>
        <ImageView
          src={misson}
          alt="purpose"
          width={400}
          height={300}
          className="w-full h-[28rem]  mt-7 object-cover"
        />
        <p className="text-[#101828] mt-12 font-semibold text-center text-[30px] sm:text-[40px] font-syne">
          Responsibilities of a node
        </p>
        <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
          Once you become a Node, you can take one or more of these
          responsibilities to GROW $EARTH -
        </p>
        <div className="relative w-full flex mt-6 items-center justify-center">
          <ImageView
            src={purge}
            alt="purpose"
            width={400}
            height={300}
            className="w-full h-[12rem]  mt-7 object-cover"
          />
          <p className="text-white absolute font-semibold text-center text-[30px]  font-syne">
            #1 Purge
          </p>
        </div>
        <p className="text-[#475467] text-left mt-6 font-normal  text-[16px] font-inter">
          We envision $EARTH treasury to be a source of patient, aligned $$$
          waiting to deployed towards projects that are building net zero
          infrastructure. Addressing climate change is no longer a technology,
          knowledge or feasibility problem but a finance problem. An absolute
          zero emission future is a function of millions of climate solutions
          (link) being deployed as quickly as possible. For this to be a reality
          we need ginormous amounts of capital. ($3-4 Trillion/Yr climate
          finance gap)
          <br />
          <br />
          Since Nodes are the only ones with permission to mint $EARTH and only
          when $EARTH is minted directly at the protocol do the $ flow into the
          treasury, it will be up to all the Nodes combined to ensure the
          treasury is equipped to do what&apos;s necessary at all times. We see
          this as a function of nodes personally purging their petro $ at
          regular intervals + seeking aligned capital from within their network.
          <br />
          <br />
          For this
          <span className="text-[#EC8000] font-semibold">
            each Node will be eligible to earn 5% of $EARTH
          </span>
          over and above the APY their staked $EARTH is earning. This 5% will be
          calculated on the total no of $EARTH that is minted via that
          particular SBT every month and will vest over a period of 6 months.
          <span className="text-[#EC8000] font-semibold">
            Nodes will also earn 2.5% of the total value of $EARTH mints in form
            of $SLRPNK (Solarpunk Dao governance token).
          </span>
        </p>
        <div className="relative w-full flex mt-6 items-center justify-center">
          <ImageView
            src={partnership}
            alt="partnership"
            width={400}
            height={300}
            className="w-full h-[12rem]  mt-7 object-cover"
          />
          <p className="text-white absolute font-semibold text-center text-[30px]  font-syne">
            #2 Partnerships
          </p>
        </div>
        <p className="text-[#475467] text-left mt-6 font-normal  text-[16px] font-inter">
          Warm introductions or complete coordination with any organization or
          individual that can contribute to $EARTH mission/vision. This can take
          the form of: a) Onboarding new Nodes b) Onboarding merchants who
          accept payments in $EARTH c) Onboarding organizations or individuals
          who in any way shape or form can further our mission/vision.
          <br />
          <br />
          <span className="text-[#EC8000] font-semibold">
            Reward - Combination of $EARTH and $SLRPNK (Amount not decided yet)
          </span>
        </p>
        <div className="relative w-full flex mt-6 items-center justify-center">
          <ImageView
            src={projects}
            alt="projects"
            width={400}
            height={300}
            className="w-full h-[12rem]  mt-7 object-cover"
          />
          <p className="text-white absolute font-semibold text-center text-[30px]  font-syne">
            #3 Projects
          </p>
        </div>
        <p className="text-[#475467] text-left mt-6 font-normal  text-[16px] font-inter">
          Connecting Dao to economically/ecologically viable projects that can
          be potentially funded by $EARTH treasury ( from the 5 sectors we are
          focusing on).
          <br />
          <br />
          <span className="text-[#EC8000] font-semibold">
            Reward - SLRPNK (Amount not decided yet)
          </span>
          <br />
          <br />
          Projects should transparently communicate their impact funded with
          $EARTH to the DAO to validate their activity and earn rewards by
          accomplishing milestones and impact projections
          <br />
          <br />
          Projects should have an impact report manual so the DAO could have
          community events to evaluate the different projects trajectory backed
          by $EARTH
        </p>
        <div className="relative w-full flex mt-6 items-center justify-center">
          <ImageView
            src={policy}
            alt="policy"
            width={400}
            height={300}
            className="w-full h-[12rem]  mt-7 object-cover"
          />
          <p className="text-white absolute font-semibold text-center text-[30px]  font-syne">
            #4 Policy
          </p>
        </div>
        <p className="text-[#475467] text-left mt-6 font-normal  text-[16px] font-inter">
          Coordinating on monetary and fiscal policy for $EARTH to achieve its
          goals.
          <br />
          <br />
          Monetary policy will involve deciding on the premium $EARTH commands
          over the $ value of assets in our treasury to fulfil our goals.
          Controlling the supply of $EARTH in the secondary market for
          maintaining desired price levels.
          <br />
          <br />
          Fiscal policy would involve deciding how best to deploy $EARTH that is
          in the treasury. Current usage is for APY, LP, DAO, Rewarding
          community, rewarding projects and partners.
          <br />
          <br />
          <span className="text-[#EC8000] font-semibold">
            Reward - Combination of $EARTH and $SLRPNK (Amount not decided yet)
          </span>
          <br />
          <br />
          Given the way $EARTH is designed it is our sincere belief that by
          simply undertaking one or more responsibilities as stated above there
          is no reason that this tribe of Degens, Regens, Treegens, Beegens,
          Seagens, Lunarpunks, Mycopunks, Junglepunks and Solarpunks cannot come
          together and address one of the biggest existential challenges of our
          time.
        </p>
      </div>
    </div>
  );
}
