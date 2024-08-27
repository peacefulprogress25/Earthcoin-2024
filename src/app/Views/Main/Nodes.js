import Image from "next/image";

const img = "/assets/images/landing-page-node.png";
const checkIcon = "/assets/icons/check-icon.png";

function Nodes() {
  const list = [
    "Mint $Earth",
    "Vote on projects to fund",
    "Vote on monetary, fiscal policy",
  ];

  return (
    <div className='px-[6%] w-full max-w-screen-2xl'>
      <section className='flex flex-col items-center justify-center w-full gap-3'>
        <h6 className='text-[#EC8000] font-inter text-xs'>NODES</h6>
        <h1 className='text-3xl font-medium font-syne '>$Earth Nodes</h1>
        <p className='text-[#475467] font-inter text-md font-light'>
          Mycelium network coordinating to make climate change history and seed
          the solarpunk paradigm
        </p>
      </section>
      <div className='flex items-center justify-between w-full mt-12'>
        <section className='flex flex-col w-1/2 gap-6'>
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
                <section className='flex items-center gap-3'>
                  <Image src={checkIcon} width={25} height={25} />
                  <p className='m-0 text-xl font-medium font-syne'>{item}</p>
                </section>
              );
            })}
          </section>
          <section className='flex items-center gap-3 mr-auto'>
            <button className='  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs'>
              Learn more
            </button>
            <button className='  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs'>
              Become a NODE
            </button>
          </section>
        </section>
        <section className='flex w-1/2'>
          <Image src={img} className='w-3/4 ml-auto' width={400} height={400} />
        </section>
      </div>
    </div>
  );
}

export default Nodes;
