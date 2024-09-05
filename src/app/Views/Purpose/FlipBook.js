import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import jungle from "../../../../public/assets/images/jungle.png";
import space from "../../../../public/assets/images/space.png";
import man from "../../../../public/assets/images/man.png";
import ImageView from "../../Components/ImageView";
import tree from "../../../../public/assets/images/tree.png";

// Page component
const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="demoPage"
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        borderRadius: '8px',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {props.children}
      {/* <p className="text-right mt-2 font-bold">Page number: {props.number}</p> */}
    </div>
  );
});

// FlipBook component
function FlipBook() {
  return (
    <HTMLFlipBook
     width={500}
      height={600}
      maxShadowOpacity={0.5}
      flippingTime={1000}
      style={{
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)', 
        margin: '50px auto',
        borderRadius: '10px',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        overflow: 'hidden',
      }}
    >
      {/* Page 1 */}
      <Page number="1">
        <div className="w-full pr-4 pt-4">
          <p className="text-[#101828] font-semibold text-left mt-2 text-[20px] sm:text-[28px] leading-6 sm:leading-7 font-syne">
            Context before currency,
            <span className="text-[#EC8000]"> Planet before profits</span>
          </p>
          <div className='p-4 mt-1'>
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
      </Page>

      {/* Page 2 - Image Content */}
      <Page number="2">
        <div className="w-full pr-10 pt-4">
          <div className="h-[230px] rounded-lg overflow-hidden"> {/* Increased height */}
            <ImageView src={jungle} alt="Jungle" width={1060} height={260} className="object-cover" />
          </div>
          <div className="h-[230px] mt-2 rounded-lg overflow-hidden"> {/* Increased height */}
            <ImageView src={space} alt="Space" width={1060} height={260} className="object-cover" />
          </div>
        </div>
      </Page>

      {/* Page 3 */}
      <Page number="3">
        <div className='w-full'>
          <p className='text-[#101828] font-semibold text-left mt-2 text-[20px] sm:text-[28px] leading-6 sm:leading-7 font-syne'>
            The recently experienced exponential advances although are not
            <span className='text-[#EC8000]'> decoupled</span> from its{" "}
            <span className='text-[#EC8000]'>tradeoffs</span> -
          </p>
          <div className='p-4 mt-1'>
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
      </Page>

      {/* Page 4 */}
      <Page number="4">
        <div className="w-full pr-10 pt-4">
          <div className="h-[260px] rounded-lg overflow-hidden"> {/* Increased height */}
            <ImageView src={man} alt="Man" width={960} height={260} className="object-cover" />
          </div>
          <div className="p-4 mt-2">
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
      </Page>

      {/* Page 5 */}
      <Page number="5">
        <div className="w-full pt-4 pr-4">
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
      </Page>

      {/* Page 6 */}
      <Page number="6">
        <div className="pt-4 pr-10">
          <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
          
                  · Our unhindered destruction of thriving natural ecosystems
                  for raw materials, grazing and agriculture. <br />
                  · Our infusion of deadly chemicals into the soil, air and
                  water for intensifying agricultural output. <br />· Our toxic
                  use and throw consumerism for exponential growth.
                  </p>   
                  <div className=" mt-4 pr-4 h-[430px] rounded-lg overflow-hidden"> {/* Increased height */}
            <ImageView src={tree} alt="Tree" width={960} height={260} className="object-cover" />
          </div>
          
        </div>
      </Page>

      {/* Page 7 */}
      <Page number="7">
        <div className="p-4">
          <p className='text-[#475467] text-left font-normal text-[15px] leading-6 sm:leading-7 font-inter'>
            The massive rise in our standards of living at nature&rsquo;s
            expense has now come claiming the debt in the face of climate
            change.{" "}
            <br />
            <b>
              A debt for which we are unable to come up with the necessary
              accounting standards to restructure it as we have done so
              for our economies.
            {" "}</b>
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
      </Page>

      {/* Page 8 */}
      <Page number="8">
        <div className="pr-10 pt-4">
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
        </div>
      </Page>

      {/* Page 9 */}
      <Page number="9">
        <div className="p-4">
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
      </Page>

      {/* Page 10 */}
      <Page number="10">
        <div className="pr-10 pt-4">
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
      </Page>
    </HTMLFlipBook>
  );
}

export default FlipBook;