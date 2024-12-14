"use client";
import { type } from "os";
import { useState } from "react";

const nodeResponsibilities = "/assets/images/Responsibilities-Node.png";
const nodeResponsibilities1 = "/assets/images/Responsibilities-Node1.png";
const nodeResponsibilities2 = "/assets/images/Responsibilities-Node2.png";
const nodeResponsibilities3 = "/assets/images/Responsibilities-Node3.png";
const nodeResponsibilities4 = "/assets/images/Responsibilities-Node4.png";

const responsibilitiesNodes = [
  {
    title: "Purge",
  },
  {
    title: "Partnerships",
  },
  {
    title: "Projects",
  },
  {
    title: "Policy",
  },
];

export default function ResponsibilitiesOfNode() {
  const [title, setTitle] = useState("Responsibilities Of Node");
  const [title1, setTitle1] = useState("Purge");
  const [title2, setTitle2] = useState("Partnerships");
  const [title3, setTitle3] = useState("Projects");
  const [title4, setTitle4] = useState("Policy");
  const handleClick = (title) => {
    setTitle(title);
    setTitle1(title1);
    setTitle2(title2);
    setTitle3(title3);
    setTitle4(title4);
  };
  return (
    <div className="w-[100%] pr-2 max-[480px]:w-full">
      {title === "Responsibilities Of Node" && (
        <div className="flex flex-col justify-between w-full shadow-lg md:flex-row lg:flex-row xl:flex-row">
          <div className="relative w-full">
            <img
              className="object-contain"
              src={nodeResponsibilities}
              alt="node"
            />
            <div className="absolute top-10 left-10">
              <p className="font-syne text-white font-semibold text-[35px] max-[480px]:text-[18px]">
                Responsibilities
                <br />
                of a Node
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[100%]  border-b-[1px]  border-r-[1px] border-[#D0D5DD]">
            {responsibilitiesNodes && responsibilitiesNodes.length
              ? responsibilitiesNodes?.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleClick(item.title)}
                    style={{ cursor: "pointer" }}
                    className=" flex justify-center items-center border-t-[1px] p-5 sm:p-0 h-[25%]  border-[#D0D5DD]"
                  >
                    <p className="font-syne h-full flex flex-col justify-center items-center   text-[#000000] font-semibold text-[26px]">
                      {item.title}
                    </p>
                  </div>
                );
              })
              : null}

            {/* <div style={{ cursor: "pointer" }} className=" flex justify-center items-center border-t-[1px] h-[25%] border-[#D0D5DD]">
                        <a > <p className="font-syne text-center   text-[#000000] font-semibold text-[26px]">Partnerships</p></a>
                    </div>
                    <div style={{ cursor: "pointer" }} className=" flex justify-center items-center border-t-[1px] h-[25%] border-[#D0D5DD]">
                        <a ><p className="font-syne text-center   text-[#000000] font-semibold text-[26px]">Projects</p></a>
                    </div>
                    <div style={{ cursor: "pointer" }} className=" flex justify-center items-center border-t-[1px] h-[25%] mt- border-[#D0D5DD]">
                        <a><p className="font-syne text-center    text-[#000000] font-semibold text-[26px]">Policy</p></a>
                    </div> */}
          </div>
        </div>
      )}

      {title === "Purge" && (
        <div className="flex flex-col justify-between w-full shadow-lg md:flex-row lg:flex-row xl:flex-row">
          <div className="relative w-full">
            <img
              className="object-contain"
              src={nodeResponsibilities1}
              alt="node"
            />
            <div className="absolute top-10 left-10">
              <p className="font-syne text-white font-semibold text-[35px] max-[480px]:text-[18px]">
                Responsibilities
                <br />
                of a Node
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[100%]  border-b-[1px] border-[#D0D5DD]">
            <div className="flex flex-col px-10 py-5 md:h-[14rem] md:overflow-y-auto xl:overflow-y-hidden lg:h-[20rem] xl:h-[28rem] ">
              <p className="font-syne text-[#000000] font-semibold text-[30px] ">
                Purge
              </p>
              <p className="font-syne leading-5 mt-5 w-full font-light text-[#475467]  max-[480px]:text-[10px]">
                We envision $EARTH treasury to be a source of patient, aligned
                $$$ waiting to deployed towards projects that are building net
                zero infrastructure. Addressing climate change is no longer a
                technology, knowledge or feasibility problem but a finance
                problem. An absolute zero emission future is a function of
                millions of climate solutions (link) being deployed as quickly
                as possible. For this to be a reality we need ginormous amounts
                of capital. ($3-4 Trillion/Yr climate finance gap)
              </p>
              <p className="font-syne leading-5 mt-3 mb-4 w-full font-light text-[#475467]  max-[480px]:text-[10px]">
                Since Nodes are the only ones with permission to mint $EARTH and
                only when $EARTH is minted directly at the protocol do the $
                flow into the treasury, it will be up to all the Nodes combined
                to ensure the treasury is equipped to do what&apos;s necessary
                at all times. We see this as a function of nodes personally
                purging their petro $ at regular intervals + seeking aligned
                capital from within their network.
              </p>
            </div>

            <div
              onClick={() => handleClick(title2)}
              style={{ cursor: "pointer" }}
              className=" border-t-[1px] border-[#D0D5DD]"
            >
              <p className="font-syne px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Partnerships
              </p>
            </div>
            <div
              onClick={() => handleClick(title3)}
              style={{ cursor: "pointer" }}
              className=" border-t-[1px] border-[#D0D5DD]"
            >
              <p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Projects
              </p>
            </div>
            <div
              onClick={() => handleClick(title4)}
              style={{ cursor: "pointer" }}
              className=" border-t-[1px] border-[#D0D5DD]"
            >
              <p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Policy
              </p>
            </div>
          </div>
        </div>
      )}

      {title === "Partnerships" && (
        <div className="flex flex-col justify-between w-full shadow-lg md:flex-row lg:flex-row xl:flex-row">
          <div className="relative w-full">
            <img
              className="object-contain"
              src={nodeResponsibilities2}
              alt="node"
            />
            <div className="absolute top-10 left-10">
              <p className="font-syne text-white font-semibold sm:text-[20px] lg:text-[35px] max-[480px]:text-[18px]">
                Responsibilities
                <br />
                of a Node
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[100%]  border-b-[1px] border-[#D0D5DD]">
            <div
              onClick={() => handleClick(title1)}
              style={{ cursor: "pointer" }}
              className=" border-b-[1px] border-t-[1px] border-[#D0D5DD]"
            >
              <p className="font-syne px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Purge
              </p>
            </div>
            <div className="flex flex-col md:h-[14rem] md:overflow-y-auto xl:overflow-y-hidden lg:h-[20rem] xl:h-[28rem] px-10 py-5 ">
              <p className="font-syne text-[#000000] font-semibold text-[30px]">
                Partnerships
              </p>
              <p className="font-syne leading-5 mt-5 w-full font-light text-[#475467]  max-[480px]:text-[10px]">
                Warm introductions or complete coordination with any
                organisation or individual that can contribute to $EARTH
                mission/vision. This can take the form of a) Onboarding new
                Nodes b) Onboarding merchants who accept payments in $EARTH c)
                Onboarding organisations or individuals who in any way shape or
                form can further our mission/vision.
              </p>
            </div>

            <div
              onClick={() => handleClick(title3)}
              style={{ cursor: "pointer" }}
              className=" border-t-[1px] border-[#D0D5DD]"
            >
              <p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Projects
              </p>
            </div>
            <div
              onClick={() => handleClick(title4)}
              style={{ cursor: "pointer" }}
              className=" border-t-[1px] border-[#D0D5DD]"
            >
              <p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Policy
              </p>
            </div>
          </div>
        </div>
      )}

      {title === "Projects" && (
        <div className="flex flex-col justify-between w-full shadow-lg md:flex-row lg:flex-row xl:flex-row">
          <div className="relative w-full">
            <img
              className="object-contain"
              src={nodeResponsibilities3}
              alt="node"
            />
            <div className="absolute top-10 left-10">
              <p className="font-syne text-white font-semibold text-[35px] max-[480px]:text-[18px]">
                Responsibilities
                <br />
                of a Node
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[100%]  border-b-[1px] border-[#D0D5DD]">
            <div
              onClick={() => handleClick(title1)}
              style={{ cursor: "pointer" }}
              className=" border-b-[1px] border-t-[1px] border-[#D0D5DD]"
            >
              <p className="font-syne px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Purge
              </p>
            </div>
            <div
              onClick={() => handleClick(title2)}
              style={{ cursor: "pointer" }}
              className=" border-b-[1px] border-[#D0D5DD]"
            >
              <p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Partnerships
              </p>
            </div>
            <div className="flex flex-col md:h-[14rem] md:overflow-y-auto xl:overflow-y-hidden lg:h-[23rem] xl:h-[31rem] sm:px-10 py-5 px-10 ">
              <p className="font-syne text-[#000000] font-semibold text-[30px]">
                Projects
              </p>
              <p className="font-syne leading-5 sm:mt-5 w-full font-light text-[#475467]  max-[480px]:text-[10px]">
                Connecting Dao to economically/ecologically viable projects that
                can be potentially funded by $EARTH treasury ( from the 5
                sectors we are focusing on).
              </p>
              <p className="font-syne leading-5 mt-3 mb-4 w-full font-light text-[#475467]  max-[480px]:text-[10px]">
                Projects should transparently communicate their impact funded
                with $EARTH to the DAO to validate their activity and earn
                rewards by accomplishing milestones and impact projections.
              </p>
              <p className="font-syne leading-5 sm:mt-3 mb-4 w-full font-light text-[#475467]  max-[480px]:text-[10px]">
                Projects should have an impact report manual so the DAO could
                have community events to evaluate the different projects
                trajectory backed by $EARTH.
              </p>
            </div>

            <div
              onClick={() => handleClick(title4)}
              style={{ cursor: "pointer" }}
              className=" border-t-[1px]  border-[#D0D5DD]"
            >
              <p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Policy
              </p>
            </div>
          </div>
        </div>
      )}

      {title === "Policy" && (
        <div className="flex flex-col justify-between w-full shadow-lg md:flex-row lg:flex-row xl:flex-row">
          <div className="relative w-full">
            <img
              className="object-contain"
              src={nodeResponsibilities4}
              alt="node"
            />
            <div className="absolute top-10 left-10">
              <p className="font-syne text-white font-semibold text-[35px] max-[480px]:text-[18px]">
                Responsibilities
                <br />
                of a Node
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[100%]  border-b-[1px] border-[#D0D5DD]">
            <div
              onClick={() => handleClick(title1)}
              style={{ cursor: "pointer" }}
              className=" border-b-[1px] border-t-[1px] border-[#D0D5DD]"
            >
              <p className="font-syne px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Purge
              </p>
            </div>
            <div
              onClick={() => handleClick(title2)}
              style={{ cursor: "pointer" }}
              className=" border-b-[1px] border-[#D0D5DD]"
            >
              <p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Partnerships
              </p>
            </div>
            <div
              onClick={() => handleClick(title3)}
              style={{ cursor: "pointer" }}
              className=" border-b-[1px]  border-[#D0D5DD]"
            >
              <p className="font-syne  px-10 py-3 text-[#000000] font-semibold text-[26px]">
                Projects
              </p>
            </div>
            <div className="flex flex-col px-10 py-5 md:h-[14rem] md:overflow-y-auto xl:overflow-y-hidden lg:h-[20rem] xl:h-[28rem] font-syne">
              <p className="font-syne text-[#000000] font-semibold text-[30px]">
                Policy
              </p>
              <p className="font-syne leading-5 mt-5 w-full font-light text-[#475467]  max-[480px]:text-[10px]">
                Co-ordinating on monetary and fiscal policy for $EARTH to
                achieve its goals.
              </p>
              <p className="font-syne leading-5 mt-5 w-full font-light text-[#475467]  max-[480px]:text-[10px]">
                Monetary policy will involve deciding on the premium $EARTH
                commands over the $ value of assets in our treasury to fulfil
                our goals. Controlling the supply of $EARTH in the secondary
                market for maintaining desired price levels.
              </p>
              <p className="font-syne leading-5 mt-3 mb-4 w-full font-light text-[#475467]  max-[480px]:text-[10px]">
                Fiscal policy would involve deciding how best to deploy $EARTH
                that is in the treasury. Current usage is for APY, LP, DAO,
                Rewarding community, rewarding projects and partners.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
