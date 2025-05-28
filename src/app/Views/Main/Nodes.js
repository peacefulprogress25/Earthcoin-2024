import Image from "next/image";
import Link from "next/link";
import buttonConfig from "../../utils/button";

const img = "/assets/images/landing-page-node1.png";
const checkIcon = "/assets/icons/check-icon.png";

function Nodes() {
  const list = [
    "Mint $Earth",
    "Vote on projects to fund",
    "Vote on monetary, fiscal policy",
    "Propose partnerships"
  ];

  return (
    <div className='flex flex-col items-center justify-center mt-16'>  
      <section className='flex flex-col items-center justify-center w-full gap-3'>
        <h6 className='text-[#EC8000] font-inter text-[14px]'>NODES</h6>
        <h1 className='text-[30px] sm:text-[40px] font-semibold font-syne '>$EARTH NODES</h1>
        <p className='text-[#475467] font-inter text-[16px] font-light'>
          Become a Node, steward the Network
        </p>
      </section>
      <div className='flex flex-col items-center justify-between w-full mt-12 md:flex-row'>
        <section className='flex flex-col w-full gap-6 md:w-1/2 sm:mt-4'>
          <section className='flex flex-col gap-5'>
            <p className='text-[#475467] font-inter text-sm font-light'>
              Just like Bitcoin has miners, Ethereum has validators, we have
              NODES <br />
              that secure & operate $EARTH as a digital currency.
            </p>
            <p className='text-[#475467] font-inter text-sm font-medium'>
              Only NODES have the power to -
            </p>
          </section>
          <section className='flex flex-col gap-3 my-4'>
            {list.map((item) => {
              return (
                <section key={item} className='flex items-center gap-3'>
                  <Image src={checkIcon} width={25} height={25} />
                  <p className='m-0 text-xl font-medium font-syne'>{item}</p>
                </section>
              );
            })}
          </section>
          <section className='flex items-center w-full gap-3 mr-auto sm:justify-start'>
            <button className='text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs'>
            <Link
              href={buttonConfig?.home_earthNode_learnMore?.link || ""}
              target={buttonConfig?.home_earthNode_learnMore?.external ? "_blank" : "_self"}
            >
              {buttonConfig?.home_earthNode_learnMore?.title}
            </Link>
            </button>
            <button className='  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs'>
            <Link
              href={buttonConfig?.home_earthNode_becomeNode?.link || ""}
              target={buttonConfig?.home_earthNode_becomeNode?.external ? "_blank" : "_self"}
            >
              {buttonConfig?.home_earthNode_becomeNode?.title}
            </Link>
            </button>
          </section>
        </section>
        <section className='flex justify-center w-full mt-2 md:w-1/2' style={{marginTop:"2rem"}}>
          <Image src={img} className='w-full object-contain sm:w-[100%]' width={400} height={400} />
        </section>
      </div>
    </div>
  );
}

export default Nodes;