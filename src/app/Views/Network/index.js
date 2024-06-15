import ImageView from "../../Components/ImageView";

const community = "/assets/images/community.png";
const misson = "/assets/images/Mission-Vission.png";
const purge = "/assets/images/purge.png";

export default function Network() {
  return (
    <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
          Community
        </p>
        <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
          Become an $Earth Node
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
        <div className="relative w-full flex items-center justify-center">
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
      </div>
    </div>
  );
}
