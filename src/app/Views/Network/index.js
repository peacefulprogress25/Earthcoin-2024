"use client";
import ImageView from "../../Components/ImageView";
import { useMediaQuery } from "react-responsive";

const community = "/assets/images/community.png";
const nature = "/assets/images/nature1.png";
const purge = "/assets/images/purge.png";
const partnership = "/assets/images/partnership.png";
const projects = "/assets/images/projects.png";
const policy = "/assets/images/policy.png";

import ResponsibilitiesOfNode from "../../Components/NodeResponsibilities";
const networkPage = "/assets/images/network-page.png";

export default function Network() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[#EC8000] font-semibold text-center text-[14px] max-[480px]:text-[12px] font-inter">
          Network
        </p>
        <p className="text-[#101828] font-semibold text-center text-[30px] max-[480px]:text-[22px] sm:text-[40px] font-syne">
          What are $EARTH NODES?
        </p>
        <p className="text-[#475467] text-center font-normal  text-[16px] max-[480px]:text-[12px] font-inter max-[480px]:w-[90%]">
          Mycelium network creating a regenerative economy using $EARTH
        </p>
      </div>
      <div className="relative w-full ">
        <ImageView
          src={networkPage}
          alt="earthcoin"
          width={500}
          height={500}
          className="object-contain w-full h-full"
        />

        {!isMobile ? (
          <div className="absolute px-10 sm:px-[10%] flex flex-col justify-center items-center md:top-[6rem] lg:top-[8rem] xl:top-[12rem] w-full">
            <p className="font-apercu-pro w-full text-left font-noraml md:text-[18px] lg:text-[22px] xl:text-[30px] text-[#101828]">
              <span className="text-[#EC8000]">Gm</span> Degens, Regens,
              Treegens, Beegens, Seagens, Lunarpunks, <br /> Mycopunks,
              Junglepunks and Solarpunks!
            </p>
            <p className="text-[#475467] mt-3 sm:mt-6 w-full font-apercu-pro text-left font-noraml md:text-[10px] lg:text-[14px] xl:text-[18px]">
              We find ourselves at a critical crossroads in the history of our
              species. With over 8 Billion of us on this planet and existential
              challenges (Climate, AI) of our own making looming over us, how we
              act going forward makes all the difference. Radical advances in
              technology and tools of coordination has ensured a fairly decent
              material standard of living relative to our past but has also
              dramatically amplified our power/influence on this planet as the
              keystone species and as the saying goes with great power comes
              great... Our detrimental presence on the climate / environment is
              an undeniable fact now and with EARTH being the only floating rock
              that has the serendipitous capacity to house LIFE, the question
              arises -{" "}
              <span className="text-[#1D2939]">WTF are we doing!?</span>
            </p>
            <p className="text-[#475467] mt-3 sm:mt-6 w-full font-apercu-pro text-left font-noraml md:text-[10px] lg:text-[14px] xl:text-[18px]">
              It is our belief that everyone reading this has asked this
              Question at some point in time. We are all here because there is
              some deep dissatisfaction and discomfort in the direction we are
              heading . We are currently inhabiting an economic framework that
              rewards externalizing negativities, promotes short term thinking,
              where doing the right thing usually means compromising on material
              gains, needs perpetual growth to survive and where optimizing for
              financial capital is the north star. This experiment of neoliberal
              capitalism has played itself out and it will only exacerbate the
              meta crisis if we empower it further. In retrospect we surely
              don&apos;t want to be{" "}
              <span className="text-[#1D2939]">
                digging our graves while aiming for the sky.
              </span>
            </p>
            <p className="text-[#475467] mt-3 sm:mt-6 w-full font-apercu-pro text-left font-noraml md:text-[10px] lg:text-[14px] xl:text-[18px]">
              So what now ? Well as our beloved advisor loves to say - One
              cannot solve a problem from the same frequency that created it.
              The socio-economic frequency we inhabit is simply a function of
              the story we tell ourselves manifesting itself via incentives for
              complex coordinated action leveraging the technologies we have
              today and fueled by one of the best know technologies of our time
              - MONEY. Thanks to Bitcoin we are{" "}
              <span className="text-[#1D2939]">
                experiencing a regenaissance in the frequencies programmable
                MONEY can manifest.
              </span>
            </p>
            <p className="text-[#475467] mt-3 sm:mt-6 w-full font-apercu-pro text-left font-noraml md:text-[10px] lg:text-[14px] xl:text-[18px]">
              Today we can design our own monetary system on a permissionless,
              transparent, immutable, borderless ledger. Ascribe value to what
              we think is important, decide what kind of backing we want
              powering our monetary systems, incentivize aligned economic
              activity, subsidize critical elements, reward required actions,
              coordinate globally with complete sovereignty and without any
              intermediaries.
            </p>
            <p className="text-[#475467] mt-3 sm:mt-6 w-full font-apercu-pro text-left font-noraml md:text-[10px] lg:text-[14px] xl:text-[18px]">
              We no longer have an excuse to blame any external agencies. Today
              we have the tools to take matters into our hands and create the
              regen/solarpunk reality we know is possible deep within.
              <span className="text-[#1D2939]">
                {" "}
                Transformation from where we are to where we want to be is
                probably one of the biggest, most radical transformations ever
                undertaken on this planet.{" "}
              </span>
              We essentially want to go from a reality where every single action
              we undertake has direct negative consequences on this biosphere to
              one where every action directly regenerates our biosphere. A
              reality where our energy only comes from clean sources, food from
              healthy soil, our homes regenerate us and our surroundings, our
              transport doesn&apos;t choke our lungs, natural ecosystems and its
              biodiversity is perceived as the only scarce resource in this
              solar system, businesses are regenerative by design, well being is
              the north star, AGI helps us focus on becoming more human...
            </p>
            <p className="text-[#475467] mt-2 sm:mt-6 w-full font-apercu-pro text-left font-noraml md:text-[10px] lg:text-[14px] xl:text-[18px]">
              This definitely is an unprecedented challenge but humanity&apos;s
              past is replete with instances where a committed collective of
              aligned frequencies have dramatically changed the world for the
              better. It is with this belief we present to you our vision for{" "}
              <span className="text-[#1D2939]">NODES of $EARTH</span> - Where
              aligned individuals and organizations that are committed to
              holistically addressing the climate/environment/meta crisis can
              max leverage this multifaceted tool/network ($EARTH) to coordinate
              like the mycelium network (vibrant, adaptive, diverse & symbiotic)
              to fulfil our mission & vision. Mission - Make anthropogenic
              climate change history, Vision - Seed the Solarpunk paradigm
            </p>
            <p className="text-[#475467]  w-full font-apercu-pro text-left font-noraml max-[322px]:text-[5px] max-[480px]:text-[6px] md:text-[10px] lg:text-[14px] xl:text-[18px]">
              Mission - Make anthropogenic climate change history
            </p>
            <p className="text-[#475467]  w-full font-apercu-pro text-left font-noraml max-[322px]:text-[5px] max-[480px]:text-[6px] md:text-[10px] lg:text-[14px] xl:text-[18px]">
              Vision - Seed the Solarpunk paradigm
            </p>
          </div>
        ) : (
          <>
            <div className=" absolute top-8 px-4 max-[322px]:px-4  max-[480px]:px-5  flex flex-col justify-center items-center w-full">
              <p className="font-apercu-pro w-full text-left font-noraml max-[322px]:text-[8px] max-[480px]:text-[9px] text-[#101828]">
                <span className="text-[#EC8000]">Gm</span> Degens, Regens,
                Treegens, Beegens, Seagens, Lunarpunks, <br /> Mycopunks,
                Junglepunks and Solarpunks!
              </p>
              <p className="text-[#475467] mt-1 w-full font-apercu-pro text-left font-noraml max-[322px]:text-[5px] max-[480px]:text-[6px] ">
                We find ourselves at a critical crossroads in the history of our
                species. With over 8 Billion of us on this planet and
                existential challenges (Climate, AI) of our own making looming
                over us, how we act going forward makes all the difference.
                Radical advances in technology and tools of coordination has
                ensured a fairly decent material standard of living relative to
                our past but has also dramatically amplified our power/influence
                on this planet as the keystone species and as the saying goes
                with great power comes great... Our detrimental presence on the
                climate / environment is an undeniable fact now and with EARTH
                being the only floating rock that has the serendipitous capacity
                to house LIFE, the question arises -{" "}
                <span className="text-[#1D2939]">WTF are we doing!?</span>
              </p>
              <p className="text-[#475467] mt-1  w-full font-apercu-pro text-left font-noraml max-[322px]:text-[5px] max-[480px]:text-[6px] ">
                It is our belief that everyone reading this has asked this
                Question at some point in time. We are all here because there is
                some deep dissatisfaction and discomfort in the direction we are
                heading . We are currently inhabiting an economic framework that
                rewards externalizing negativities, promotes short term
                thinking, where doing the right thing usually means compromising
                on material gains, needs perpetual growth to survive and where
                optimizing for financial capital is the north star. This
                experiment of neoliberal capitalism has played itself out and it
                will only exacerbate the meta crisis if we empower it further.
                In retrospect we surely don&apos;t want to be{" "}
                <span className="text-[#1D2939]">
                  digging our graves while aiming for the sky.
                </span>
              </p>
              <p className="text-[#475467] mt-1 sm:mt-6 w-full font-apercu-pro text-left font-noraml max-[322px]:text-[5px] max-[480px]:text-[6px]">
                So what now ? Well as our beloved advisor loves to say - One
                cannot solve a problem from the same frequency that created it.
                The socio-economic frequency we inhabit is simply a function of
                the story we tell ourselves manifesting itself via incentives
                for complex coordinated action leveraging the technologies we
                have today and fueled by one of the best know technologies of
                our time - MONEY. Thanks to Bitcoin we are{" "}
                <span className="text-[#1D2939]">
                  experiencing a regenaissance in the frequencies programmable
                  MONEY can manifest.
                </span>
              </p>
              <p className="text-[#475467] mt-1  w-full font-apercu-pro text-left font-noraml max-[322px]:text-[5px] max-[480px]:text-[6px]">
                Today we can design our own monetary system on a permissionless,
                transparent, immutable, borderless ledger. Ascribe value to what
                we think is important, decide what kind of backing we want
                powering our monetary systems, incentivize aligned economic
                activity, subsidize critical elements, reward required actions,
                coordinate globally with complete sovereignty and without any
                intermediaries.
              </p>
              <p className="text-[#475467] mt-1  w-full font-apercu-pro text-left font-noraml max-[322px]:text-[5px] max-[480px]:text-[6px]">
                We no longer have an excuse to blame any external agencies.
                Today we have the tools to take matters into our hands and
                create the regen/solarpunk reality we know is possible deep
                within.
                <span className="text-[#1D2939]">
                  {" "}
                  Transformation from where we are to where we want to be is
                  probably one of the biggest, most radical transformations ever
                  undertaken on this planet.{" "}
                </span>
                We essentially want to go from a reality where every single
                action we undertake has direct negative consequences on this
                biosphere to one where every action directly regenerates our
                biosphere. A reality where our energy only comes from clean
                sources, food from healthy soil, our homes regenerate us and our
                surroundings, our transport doesn&apos;t choke our lungs,
                natural ecosystems and its biodiversity is perceived as the only
                scarce resource in this solar system, businesses are
                regenerative by design, well being is the north star, AGI helps
                us focus on becoming more human...
              </p>
              <p className="text-[#475467] mt-1 sm:mt-6 w-full font-apercu-pro text-left font-noraml max-[322px]:text-[5px] max-[480px]:text-[6px]">
                This definitely is an unprecedented challenge but
                humanity&apos;s past is replete with instances where a committed
                collective of aligned frequencies have dramatically changed the
                world for the better. It is with this belief we present to you
                our vision for{" "}
                <span className="text-[#1D2939]">NODES of $EARTH</span> - Where
                aligned individuals and organizations that are committed to
                holistically addressing the climate/environment/meta crisis can
                max leverage this multifaceted tool/network ($EARTH) to
                coordinate like the mycelium network (vibrant, adaptive, diverse
                & symbiotic) to fulfil our mission & vision.
              </p>
              <p className="text-[#475467] w-full font-apercu-pro text-left font-noraml max-[322px]:text-[5px] max-[480px]:text-[6px]">
                Mission - Make anthropogenic climate change history
              </p>
              <p className="text-[#475467]  w-full font-apercu-pro text-left font-noraml max-[322px]:text-[5px] max-[480px]:text-[6px]">
                Vision - Seed the Solarpunk paradigm
              </p>
            </div>
          </>
        )}
      </div>

      <ResponsibilitiesOfNode />
    </div>
  );
}
