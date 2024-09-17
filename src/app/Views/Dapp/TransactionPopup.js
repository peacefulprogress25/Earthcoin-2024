import ImageView from "../../Components/ImageView";

const wallet = "/assets/icons/wallet-green.svg";
export default function TransactionPopup({
  setShowTransactionPopup,
  children,
  handleSubmit,
  handleCancel,
  progress,
  loading,
  transaction
}) {

  const progressFn = () => {
    if (progress && Object.keys(progress).length) {
      const values = Object.values(progress);
      return values.includes(false)
    }
  }
  const loadingFn = () => {
    if (loading && Object.keys(loading).length) {
      const values = Object.values(loading);
      return values.includes(true)
    }
  }


  return (
    <div className='fixed w-full p-5 z-10 top-0 right-0 left-0 bottom-0 h-screen bg-[#101828B2]'>
      <div className='w-[85%] sm:w-[23%] h-fit p-4 gap-2 flex bg-white absolute top-[53%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col items-start justify-start rounded-lg shadow-lg '>
        <ImageView src={wallet} alt='wallet' width={40} height={40} />
        <p className='font-inter text-[16px] mt-2 font-semibold text-[#101828]'>
          Transaction sent to wallet
        </p>
        {children}
        <div className='flex items-center justify-center w-full gap-4 mt-4'>
          <button
            onClick={handleCancel}
            className='w-[150px] text-black font-inter flex h-10 items-center justify-center rounded-md bg-white border border-[#D0D5DD] p-2 cursor-pointer text-sm'
          >
            {progressFn() ? "Cancel" : "Close"}
          </button>
          {progressFn() && !transaction ? <button
            onClick={handleSubmit}
            disabled={loadingFn()}
            className='w-[150px] text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 cursor-pointer text-sm'
          >
            Confirm
          </button> : null}
        </div>
      </div>
    </div>
  );
}
