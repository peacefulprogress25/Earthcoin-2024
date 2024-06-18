import ImageView from "../../Components/ImageView";

const wallet = "/assets/icons/wallet-green.svg";
export default function TransactionPopup({ setShowTransactionPopup }) {
  return (
    <div className="fixed w-full p-5 z-10 top-0 right-0 left-0 bottom-0 h-screen bg-[#101828B2]">
      <div className="w-[85%] sm:w-[23%] h-fit p-4 gap-2 flex bg-white absolute top-[53%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col items-start justify-start rounded-lg shadow-lg ">
        <ImageView src={wallet} alt="wallet" width={40} height={40} />
        <p className="font-inter text-[16px] mt-2 font-semibold text-[#101828]">
          Transaction sent to wallet
        </p>
        <ul
          className="font-inter list-disc pl-4 caret-[#12B76A] text-[12px] font-normal text-[#12B76A]"
          style={{ color: "#12B76A" }}
        >
          <li className="text-[#12B76A] font-inter">
            Increase allowance (Complete)
          </li>
          <li className="text-[#475467] font-inter">Mint $Earth (Pending)</li>
        </ul>
        <div className="flex w-full mt-4 gap-4 justify-center items-center">
          <button
            onClick={() => setShowTransactionPopup(false)}
            className="w-[150px] text-black font-inter flex h-10 items-center justify-center rounded-md bg-white border border-[#D0D5DD] p-2 cursor-pointer text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowTransactionPopup(false)}
            className="w-[150px] text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 cursor-pointer text-sm"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
