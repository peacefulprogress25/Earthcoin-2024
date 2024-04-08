export default function Mint() {
  return (
    <div className="flex w-[72%] items-center flex-col gap-3">
      <p className="text-black text-center font-inter text-[28px] font-medium">
        Mint $Earth <br /> by passing $Dai
      </p>
      <p className="text-[16px] text-center font-inter font-medium text-black">
        New Tokens can only be minted at the protocol using DAPP
      </p>
      <div className="flex gap-3 w-full mt-2 justify-center">
        <div className="flex flex-col w-[130px]">
          <p className="text-black text-center font-inter text-[12px] font-medium">
            Enter $Dai amount
          </p>
          <div className="flex border-2 border-[#EAECF0] items-center p-1">
            <input
              type="text"
              className="outline-none w-[60px]"
              placeholder="158.68"
            />
            <p className="text-black text-center font-inter text-[12px] font-medium">
              $DAI
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[130px]">
          <p className="text-black text-center font-inter text-[12px] font-medium">
            You will recieve
          </p>
          <div className="flex border-2 border-[#EAECF0] items-center p-1">
            <input
              type="text"
              className="outline-none w-[60px]"
              placeholder="158.68"
            />
            <p className="text-black text-center font-inter text-[12px] font-medium">
              $EARTH
            </p>
          </div>
        </div>
      </div>
      <button className="w-[120px] text-white mt-2 font-inter flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-[14px]">
        MINT
      </button>
    </div>
  );
}
