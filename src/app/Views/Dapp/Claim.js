import { CgDanger } from "react-icons/cg";
import ImageView from "../../Components/ImageView";
import { envObj } from "../../utils/env";
import ClaimJson from "./abi/TokenAirdrop.json";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { profileState } from "../../redux/profileSlice";
import useNotification from "../../Hooks/useNotification";
import { BtnLoader, Loader } from "../../Components/Loader";
import { TwitterShareButton } from "react-share";

const claim = "/assets/images/Claim illustration.png";

const claimAddress = envObj.claimAddress;

function Claim({ setScreen }) {
  const { showMessage } = useNotification();
  const [loading, setLoading] = useState({
    whitelist: false,
    claim: false,
  });
  const account = useSelector(profileState).wallet;
  const [progress, setProgress] = useState({
    whitelisted: true,
    claim: false,
  });

  const isWhitelisted = async () => {
    if (typeof window.ethereum !== undefined) {
      try {
        setLoading((obj) => ({ ...obj, whitelist: true }));
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        let contract = new ethers.Contract(claimAddress, ClaimJson.abi, signer);
        let result = await contract.isWhitelisted(account);
        console.log({ result });
        setProgress((progress) => ({ ...progress, whitelisted: result }));
        setLoading((obj) => ({ ...obj, whitelist: false }));
      } catch (e) {
        console.log(e);
        showMessage({ type: "error", value: e.code });
        setLoading((obj) => ({ ...obj, whitelist: false }));
      }
    }
  };

  useEffect(() => {
    isWhitelisted();
  }, []);

  const claimFn = async () => {
    if (typeof window.ethereum !== undefined) {
      const providers = new ethers.providers.Web3Provider(window.ethereum);
      const signer = providers.getSigner();
      const contract = new ethers.Contract(claimAddress, ClaimJson.abi, signer);
      setLoading((obj) => ({ ...obj, claim: true }));

      try {
        const info = await contract.claimTokens();

        await info.wait();
        setLoading((obj) => ({ ...obj, claim: false }));

        setProgress((progress) => ({ ...progress, claim: true }));
        setClaimed(true);
        showMessage({ type: "success", value: "Transaction Success" });
      } catch (error) {
        console.log(error);
        setLoading((obj) => ({ ...obj, claim: false }));

        setProgress((progress) => ({ ...progress, claim: false }));
        let message =
          "execution reverted: You are not whitelisted or have already claimed";
        showMessage({
          type: "error",
          value:
            error.reason === message
              ? "Your wallet is not whitelisted"
              : error.reason,
        });
      }
    }
  };

  if (loading.whitelist) {
    return (
      <div className='dapp-loading-container'>
        <Loader />
      </div>
    );
  }
  const twitterContent = `I just earned $Earth from @solarpunkdao for my contribution towards making the #Refi dream a tangible reality.
  
Let's GROW 🌞💚`;

  return !progress.claim ? (
    progress.whitelisted ? (
      <div className='flex justify-center w-[73%] items-center flex-col gap-2'>
        {" "}
        {/* <CgDanger color="#c1272d" size="70" className="mb-2" /> */}
        <ImageView
          src={claim}
          alt='icon'
          width={70}
          height={70}
          className='mb-2'
        />
        <p className='text-[18px] text-center font-inter font-medium text-black'>
          You have earned this $Earth in recognition of your contributions
          towards making #Refi dream a tangible reality
        </p>
        <p className='text-black font-inter cursor-pointer text-[12px] font-normal'>
          Know more
        </p>
        <button
          onClick={claimFn}
          className='w-[120px] text-white font-inter mt-2 flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-sm'
        >
          {loading.claim ? <BtnLoader /> : "CLAIM"}
        </button>
      </div>
    ) : (
      <div>
        <p className='sbt-message'>Your wallet is not whitelisted</p>
      </div>
    )
  ) : (
    <div className='flex flex-col items-center gap-3'>
      <p className='text-lg text-primary'>Congrats on claiming the tokens</p>
      <TwitterShareButton
        url={twitterContent}
        className='flex flex-col items-center justify-center gap-3'
        style={{ margin: "auto" }}
      >
        {/* <img
          className='w-8 h-8'
          src={"/assets/icons/twitter.png"}
          alt='twitter'
        /> */}
        <button className='flex flex-col items-center justify-center gap-2 text-md "w-[80px] ml-auto text-white font-inter h-10 rounded-md bg-[#EC8000] p-2 text-sm'>
          Share via Twitter
        </button>
      </TwitterShareButton>
      <p className='text-sm text-center'>
        Stake your $Earth{" "}
        <button onClick={() => setScreen("STAKE")} className='text-primary'>
          here
        </button>{" "}
        to earn APY, fund net zero infrastructure and seed the solarpunk
        paradigm.
      </p>
    </div>
  );
}

export default Claim;
