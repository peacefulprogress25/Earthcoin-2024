import React from "react";
import HTMLFlipBook from "react-pageflip";
import jungle from "../../../../public/assets/images/jungle.png";
import space from "../../../../public/assets/images/space.png";
import man from "../../../../public/assets/images/man.png";
import ImageView from "../../Components/ImageView";
import tree from "../../../../public/assets/images/tree.png";

const FlipBook = () => {
  return (
    <div className='flex items-center justify-center py-10 flipbook-container'>
      <HTMLFlipBook
        width={1000}
        height={620}
        flippingTime={1000} // Smooth transition
        style={{
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          borderRadius: "1rem",
          background: "linear-gradient(to right, #ffffff, #f0f0f0)", // Subtle gradient
          overflow: "hidden",
          position: "relative",
        }}
        className='flipbook'
      >
        {/* Page 1 */}
        <div className='p-8 demoPage'>
          <div className='flex flex-row w-full'>
            {/* Text Content */}
            <div className='w-1/2 pr-4'>
              <p className='text-[#101828] font-semibold text-left mt-2 text-[20px] sm:text-[28px] leading-6 sm:leading-7 font-syne'>
                Context before currency,
                <span className='text-[#EC8000]'> Planet before profits</span>
              </p>
              <br />
              <div className='p-4 mt-1 sm:p-1'>
                <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
                  A cosmic satellite observing Sapiens on Earth would certainly
                  admit we have progressed leaps and bounds in eliminating
                  existential threats and pushing the envelope of our
                  consciousness. From developing language to communicate
                  mythical tales of imagined orders now known as culture to
                  establishing settled societies because of agriculture, we have
                  propelled ourselves to the top of the food chain like a rocket
                  on a geological time scale. Our neocortical abilities have
                  enabled us to take complex actions in large-scale cooperation
                  frameworks (religion, economy, and politics), decode phenomena
                  around us, and harness the power of resources due to which we
                  have largely bypassed our biological limitations and succeeded
                  in hosting over 7 billion of us on Earth. The sapiens design
                  coupled with Earth&apos;s resources and its presence in the
                  goldilocks zone has created a realm of endless possibilities
                  where we are only{" "}
                  <span className='text-[#EC8000] font-semibold'>
                    limited by our imagination and boundaries of science.
                  </span>
                </p>
              </div>
            </div>

            {/* Images */}
            <div className='flex flex-col w-1/2 gap-8 pl-4 mt-10'>
              <div className='w-full h-[220px] rounded-lg overflow-hidden'>
                <ImageView
                  src={jungle}
                  alt='Jungle'
                  width={500}
                  height={220}
                  className='object-cover'
                />
              </div>
              <div className='w-full h-[220px] rounded-lg overflow-hidden'>
                <ImageView
                  src={space}
                  alt='Space'
                  width={500}
                  height={220}
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Page 2 */}
        <div className='p-8 demoPage'>
          <div className='flex flex-row w-full'>
            {/* Text Content */}
            <div className='w-1/2 pr-4'>
              <p className='text-[#101828] font-semibold text-left mt-2 text-[20px] sm:text-[28px] leading-6 sm:leading-7 font-syne'>
                The recently experienced exponential advances although are not
                <span className='text-[#EC8000]'> decoupled</span> from its{" "}
                <span className='text-[#EC8000]'>tradeoffs</span> -
              </p>
              <br />
              <div className='p-4 mt-1 sm:p-1'>
                <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
                  We have sacrificed our connection to the natural world,
                  perceiving it as something that can be domesticated by human
                  will (fairly succeeded at that too). <br /> <br />
                  · Accepted incessant planning for the future as a given since
                  the advent of the agricultural revolution. <br /> <br />·
                  Assumed invincibility of our species which has been in
                  existence for over a couple million years on this earth. The
                  same earth which has had 5 mass extinctions from 450 million
                  yrs back till date that has wiped out between 75-90 percent of
                  species every time. 4 of those have been climate change
                  induced.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className='flex flex-col w-1/2 gap-5 pl-4 mt-15'>
              <div className='w-full h-[280px] rounded-lg overflow-hidden'>
                <ImageView
                  src={man}
                  alt='Man'
                  width={500}
                  height={220}
                  className='object-cover'
                />
              </div>
              <div className='p-4 mt-1 sm:p-1'>
                <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
                  The dissonance amongst humanity in recognizing the
                  interconnectedness of life and that{" "}
                  <b>
                    we are all simply matter processing information differently
                  </b>{" "}
                  (whether we got the better bargain in this only time can
                  tell). What began with our departure from the hunter/gatherer
                  lifestyle has meandered its way to the pervasion of neoliberal
                  thought that is assumed for &rsquo;reality&rsquo; in
                  today&rsquo;s time. The quote that says it is easier to
                  imagine the end of world than
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page 3 */}
        <div className='p-8 demoPage'>
          <div className='flex flex-row w-full'>
            {/* Text Content */}
            <div className='w-1/2 pr-4'>
              <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
                Capitalism has never been more true. It is essential we
                understand that{" "}
                <span className='text-[#EC8000]'>
                  our current superiority is small parts our effort and in large
                  parts serendipity.
                </span>{" "}
                Our perpetual superiority will be large parts effort and small
                parts luck. Hence tread carefully we must as we are yet to find
                a sign of intelligent life absolutely anywhere across the
                enormously chaotic universe we exist in. Even if we do, life as
                we know it is a planetary phenomenon, we will never feel
                completely at home anywhere else in the universe.
                <br />
                <br />
                <p className='font-semibold text-[28px] font-syne text-black'>
                  The aforementioned tradeoffs or shifts in perception have now
                  come seeking reparations. The Anthropocene era characterized
                  by -
                  <br />
                  <br />
                </p>
                · Our unrestrained extraction of the decayed plant and animal
                matter converted to fuel over hundreds of millions of years
                being exposed to the atmosphere in a matter of mere centuries.
              </p>
            </div>

            {/* Images */}
            <div className='flex flex-col w-1/2 gap-5 pl-4 mt-15'>
              <div className='p-4 mt-1 sm:p-1'>
                <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
                  · Our unhindered destruction of thriving natural ecosystems
                  for raw materials, grazing and agriculture. <br />
                  · Our infusion of deadly chemicals into the soil, air and
                  water for intensifying agricultural output. <br />· Our toxic
                  use and throw consumerism for exponential growth.
                </p>
              </div>
              <div className='w-full h-[340px] rounded-lg overflow-hidden'>
                <ImageView
                  src={tree}
                  alt='Tree'
                  width={500}
                  height={220}
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Page 4 */}
        <div className='p-8 demoPage'>
          <div className='flex flex-row w-full'>
            {/* Text Content */}
            <div className='w-1/2 pr-4'>
              <div className='p-4 mt-1 sm:p-1'>
                <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
                  The massive rise in our standards of living at nature&rsquo;s
                  expense has now come claiming the debt in the face of climate
                  change.{" "}
                  <b>
                    A debt for which we are unable to come up with the necessary
                    accounting standards to restructure it as we have done so
                    for our economies.
                  </b>{" "}
                  A debt that is topped with air pollution, land degradation,
                  plastification of oceans, biodiversity loss, mounting
                  landfills and freshwater depletion. <br /> <br />
                  The onslaught of major environmental issues is a reflection of
                  the deep systemic fault lines that exist within our ideology
                  of sustaining life currently and it is nature&rsquo;s way of
                  returning the favor we have so dearly bestowed upon it in
                  recent times.
                  <br /> <br />
                  Climate change is more of an umbrella term to describe the
                  various repercussions that a warming earth can have. From
                  raging wildfires, rising sea levels, floods and droughts,
                  intensified cyclones, widespread hunger, unbearable
                  temperatures to unbreathable air. These elements of chaos are
                  fully capable of making the COVID pandemic feel like a ripple
                  in a tsunami. Waves of which we have already
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className='flex flex-col w-1/2 gap-5 pl-4 mt-15'>
              <div className='p-4 mt-1 sm:p-1'>
                <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
                  Begun witnessing and these consequences are still simply what
                  is within our scope of comprehension, unforeseen feedback
                  loops are the icing on the proverbial multi-layered climate
                  change cake.
                </p>{" "}
                <br />
                <p className='font-semibold text-[22px] font-syne text-black'>
                  The onslaught of major environmental issues is a reflection of
                  the deep systemic fault lines that exist within our ideology
                  of sustaining life currently.
                  <br />
                  <br />
                </p>
                <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
                  Also before we begin to rationalize climate changes on
                  geological timelines it behooves us to keep in mind that there
                  weren&rsquo;t over 7 going to 9 billion humans breathing on
                  this planet to face its aftermath in the past. While the
                  fruits of development have been unevenly distributed, the
                  perils of climate change too are unevenly distributed. It is
                  now a commonly accepted premise that
                </p>{" "}
                <br />
              </div>
            </div>
          </div>
        </div>

        {/* Page 5 */}
        <div className='p-8 demoPage'>
          <div className='flex flex-row w-full'>
            {/* Text Content */}
            <div className='w-1/2 pr-4'>
              <div className='p-4 mt-1 sm:p-1'>
                <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
                  The part of humanity that is largely responsible for the
                  predicament at hand is also better equipped to deal with the
                  problem while the lower rungs of society will be left gasping
                  as usual. Un/Fortunately cyclones, fires, viruses, and floods
                  don&rsquo;t comprehend rich and poor neighborhoods, all are
                  equally eligible for the trials and tribulations served by the
                  natural world.
                  <br />
                  Since we all (some more than others) have our un/conscious
                  contributions towards the creation of this climate disaster,
                  we need to address the climate disaster collectively (some
                  more than others). Surely in retrospect we don&rsquo;t want to
                  realize that all the while we were{" "}
                  <b>
                    {" "}
                    focused on aiming for the sky that we were actually digging
                    our graves.{" "}
                  </b>{" "}
                  Earth has provided more than our wildest dreams could ask for
                  and continues to do so, but progress of humanity on earth with
                  deeper strides in technological innovation, higher standards
                  of living, and becoming a multi-planetary species is truly
                  only possible when the environment is conducive towards it.
                  Not when every action undertaken to date by 21st-century
                  humans is in direct detriment of the planet we inhabit.
                </p>
              </div>
            </div>
            {/* Right Side */}
            <div className='flex flex-col w-1/2 gap-5 pl-4 mt-15'>
              <div className='p-4 mt-1 sm:p-1'>
                <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
                  Although we see governments and corporates try to take
                  &rsquo;bold&rsquo; action to ward off the worst of climate
                  change, it&rsquo;s like Einstein said - it is not possible to
                  solve a problem from the same level of frequency that created
                  it. Just like a web3 world cannot be created with a web2
                  business model, the Solarpunk paradigm cannot be established
                  with the current socio-economic framework. <br />
                  It is in the spirit of addressing the concerns holistically
                  that SolarpunkDAO has conceptualized{" "}
                  <span className='text-[#EC8000]'>$Earth. </span>
                  Recognizing that the problems have come from the separation of
                  environment and economy and that for Sapiens to thrive, a
                  <span className='text-[#EC8000]'>
                    synergistic relationship between ecology and economy is
                    essential.{" "}
                  </span>
                  Given the systemic nature of the climate change problem,
                  addressing them also addresses several other problems in our
                  society. <br />
                  <span className='text-[#EC8000]'>
                    While the economy is futile without ecology, ecology is
                    absolutely fine without the economy.{" "}
                  </span>
                  <b>
                    {" "}
                    Creating resonance between the two is the only way forward.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default FlipBook;