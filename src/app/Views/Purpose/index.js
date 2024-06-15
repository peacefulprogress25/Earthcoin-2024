import ImageView from "../../Components/ImageView";
import Community from "../../Components/Community";

const purpose = "/assets/images/purpose.png";
const jungle = "/assets/images/jungle.png";
const slogan = "/assets/images/slogan.png";
const space = "/assets/images/space.png";
const mountain = "/assets/images/mountain.png";
const tree = "/assets/images/tree.png";

export default function Purpose() {
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            About
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            PURPOSE
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            Why $EARTH
          </p>
        </div>
        <ImageView
          src={purpose}
          alt="purpose"
          width={400}
          height={200}
          className="w-full mt-4 object-cover"
        />
        <div className="sm:px-[15%] px-4 flex flex-col w-full items-start">
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            Context before currency,
            <span className="text-[#EC8000]">Planet before profits</span>
          </p>
          <div className="mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              A cosmic satellite observing Sapiens on Earth would certainly
              admit we have progressed leaps and bounds in eliminating
              existential threats and pushing the envelope of our consciousness.
              From developing language to communicate mythical tales of imagined
              orders now known as &apos;culture&apos; to establishing settled
              socieities because of agriculture , we have propelled ourselves to
              the top of the food chain like a rocket on a geological time
              scale. Our neocortical abilities have enabled us to take complex
              actions in large scale cooperation frameworks (religion, economy
              and politics), decode phenomenon around us and harness the power
              of resources due to which we have largely bypassed our biological
              limitations and succeeded in hosting over 7 billion of us on
              earth. The sapiens design coupled with earth&apos;s resources and
              its presence in the goldilocks zone has created a realm of endless
              possibilities where we are only 
              <span className="text-[#EC8000] font-semibold">
                limited by our imagination and boundaries of science.
              </span>
            </p>
          </div>
          <div className="mt-12 w-full justify-center flex flex-col sm:flex-row gap-2">
            <ImageView
              src={jungle}
              alt="jungle"
              width={270}
              height={200}
              className="object-cover"
            />
            <ImageView
              src={space}
              alt="space"
              width={270}
              height={200}
              className="object-cover"
            />
          </div>
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            The recently experienced exponential advances although are not 
            <span className="text-[#EC8000] font-semibold">decoupled </span>from
            its <span className="text-[#EC8000] font-semibold">tradeoffs</span>
             -
          </p>
          <div className="mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              We have sacrificed our connection to the natural world, perceiving
              it as something that can be domesticated by human will (fairly
              succeeded at that too).
              <br />
              <br />· Accepted incessant planning for the future as a given
              since the advent of the agricultural revolution.
              <br />
              <br />· Assumed invincibility of our species which has been in
              existence for over a couple million years on this earth. The same
              earth which has had 5 mass extinctions from 450 million yrs back
              till date that has wiped out between 75-90 percent of species
              every time. 4 of those have been climate change induced.
            </p>
            <div className="mt-12 w-full justify-center flex">
              <ImageView
                src={slogan}
                alt="slogan"
                width={470}
                height={200}
                className="object-cover"
              />
            </div>
            <br />
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              The dissonance amongst humanity in recognizing the inter
              connectedness of life and that 
              <span className="text-[#000000] font-semibold">
                we are all simply matter processing information differently
              </span>
               (whether we got the better bargain in this only time can tell).
              What began with our departure from the hunter/gatherer lifestyle
              has meandered its way to the pervasion of neoliberal thought that
              is assumed for &apos;reality&apos; in today&apos;s time. The quote
              that says it is easier to imagine the end of world than capitalism
              has never been more true. It is essential we understand that 
              <span className="text-[#000000] font-semibold">
                our current superiority is small parts our effort and in large
                parts serendipity.
              </span>
               
              <span className="text-[#EC8000] font-semibold">
                Our perpetual superiority will be large parts effort and small
                parts luck.
              </span>
               Hence tread carefully we must as we are yet to find sign of
              intelligent life absolutely anywhere across the enormously chaotic
              universe we exist in. Even if we do Life as we know it is a
              planetary phenomenon, we will never feel completely at home
              anywhere else in the universe.
            </p>
          </div>
          <ImageView
            src={mountain}
            alt="mountain"
            width={200}
            height={200}
            className="w-full h-[12rem] mt-10 object-cover"
          />
        </div>

        <div className="sm:px-[15%] px-4 flex flex-col w-full items-start">
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            The aforementioned tradeoffs or shifts in perception have now come
            seeking reparations. The Anthropocene era characterized by -
          </p>

          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            The aforementioned tradeoffs or shifts in perception have now come
            seeking reparations. The Anthropocene era characterized by -
          </p>

          <div className="mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              · Our unrestrained extraction of the decayed plant and animal
              matter converted to fuel over hundreds of millions of years being
              exposed to the atmosphere in a matter of mere centuries.
              <br />
              <br />· Our unhindered destruction of thriving natural ecosystems
              for raw materials, grazing and agriculture.
              <br />
              <br />· Our infusion of deadly chemicals into the soil, air and
              water for intensifying agricultural output.
              <br />
              <br />· Our toxic use and throw consumerism for exponential
              growth.
            </p>
          </div>
          <div className="mt-6 flex justify-center w-full">
            <ImageView
              src={tree}
              alt="tree"
              width={600}
              height={240}
              className="object-cover"
            />
          </div>
          <div className="mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              The massive rise in our standards of living at nature&apos;s
              expense has now come claiming the debt in the face of climate
              change. 
              <span className="text-black font-semibold">
                A debt for which we are unable to come up the necessary
                accounting standards to restructure it as we have done so for
                our economies.
              </span>
               A debt that is topped with air pollution, land degradation,
              plastification of oceans, biodiversity loss, mounting landfills
              and freshwater depletion.
              <br />
              <br />
              The onslaught of major environmental issues is a reflection of the
              deep systemic fault lines that exist within our ideology of
              sustaining life currently and it is nature&apos;s way of returning
              the favor we have so dearly bestowed upon it in recent times.
              <br />
              <br />
              Climate change is more of an umbrella term to describe the various
              repercussions that a warming earth can have. From raging
              wildfires, rising sea levels, floods and droughts, intensified
              cyclones, widespread hunger, unbearable temperatures to
              unbreathable air. These elements of chaos are fully capable of
              making the COVID pandemic feel like a ripple in a tsunami. Waves
              of which we have already begun witnessing and these consequences
              are still simply what is within our scope of comprehension, 
              <span className="text-black font-semibold">
                unforeseen feedback loops are the icing on the proverbial multi
                layered climate change cake.
              </span>
            </p>
          </div>
          <div className="mt-8 border-l-2 flex flex-col items-start border-[#EC8000] pl-5">
            <p className="text-[26px]  text-left font-medium text-[#101828] font-syne">
              The onslaught of major environmental issues is a reflection of the
              deep systemic fault lines that exist within our ideology of
              sustaining life currently
            </p>
          </div>
          <div className="my-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              Also before we begin to rationalize climate changes on geological
              timelines it behooves us to keep in mind that there weren&apos;t
              over 7 going to 9 billion humans breathing on this planet to face
              its aftermath in the past. While the fruits of development have
              been unevenly distributed, perils of climate change too are
              unevenly distributed.
              <br />
              <br />
              It is now a commonly accepted premise that section of humanity
              that is largely responsible for the predicament at hand is also
              better equipped to deal with the problem while the lower rungs of
              society will be left gasping as usual. Un/Fortunately cyclones,
              fires, viruses and floods don&apos;t comprehend rich and poor
              neighborhoods, all are equally eligible for the trials and
              tribulations served by the natural world.
              <br />
              <br />
              Since we all (some more than others) have our un/conscious
              contributions towards the creation of this climate disaster we
              need to address the climate disaster also collectively (some more
              than others). Surely in retrospect we don&apos;t want to realize
              that all the while we were 
              <span className="text-black font-semibold">
                focused on aiming for the sky that we were actually digging our
                graves.
              </span>
               Earth has provided more than our wildest dreams could ask for it
              continues to do so but progress of humanity on earth with deeper
              strides in technological innovation, higher standards of living
              and becoming a multi planetary species is truly only possible only
              when the environment is conducive towards it. Not when every
              action undertaken to date by 21st century humans is in direct
              detriment of the planet we inhabit.
              <br />
              <br />
              Although we see governments and corporates try to take
              &apos;bold&apos; action to ward the worst of climate change, its
              like Einstein said - it is not possible to solve a problem from
              the same level of frequency that created it. Just like a web3
              world cannot be created with a web2 business model, the Solarpunk
              paradigm cannot be established with the current socio-economic
              framework.
              <br />
              <br />
              It is in the spirit of addressing the concerns holistically that
              SolarpunkDao has conceptualized 
              <span className="text-[#EC8000] font-semibold">$Earth.</span>
               Recognizing that the problems have come from the separation of
              environment and economy and that for Sapiens to thrive a 
              <span className="text-[#EC8000] font-semibold">
                synergistic relationship between ecology and economy is
                essential.
              </span>
               Given the systemic nature of the climate change problem,
              addressing them also addresses several other problems in our
              society
              <br />
              <br />
              <span className="text-[#EC8000] font-semibold">
                While the economy is futile without ecology, ecology is
                absolutely fine without the economy.
              </span>
               
              <span className="text-black font-semibold">
                Creating resonance between the two is the only way forward.
              </span>
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] my-8 bg-[#F2F4F7]"></div>
        <Community
          title="Ready to go down the rabbit hole?"
          description="Join our social community!"
        />
      </div>
    </div>
  );
}
