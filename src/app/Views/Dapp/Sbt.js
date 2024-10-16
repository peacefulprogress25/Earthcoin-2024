import { CgDanger } from "react-icons/cg";
import { useState, useRef, useEffect } from "react";
import { envObj } from "../../utils/env";
import { Contract, providers, utils, ethers } from "ethers";
import Web3Modal from "web3modal";
import Soulbound from "./abi/SoulBound.json";
import { useSelector } from "react-redux";
import { profileState } from "../../redux/profileSlice";
import useNotification from "../../Hooks/useNotification";
import { BtnLoader, Loader } from "../../Components/Loader";
import { nexaflowPageObj } from "../../utils/constants";
import NodeDapp from "./Node";
import { TwitterShareButton } from "react-share";

const twitter = "/assets/icons/twitter.png";
const exclamationIcon = "/assets/images/exclamation-mark.png"
const soulboundAddress = envObj.soulboundAddress;
const templateId = envObj.personaTemplateId;
const twitterContent = `I just became an $EARTH NODE to create a mycelium network that makes climate change history, regeneration a reality and seeds the solarpunk paradigm.


#letsGROW #Refi
`;

export default function Sbt() {
  const { showMessage } = useNotification();
  const [pageStatus, setPageStatus] = useState({
    verifyStatus: "",
    verify: false,
    whiteListed: false,
    minted: false,
  });
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState({
    verifyLoading: false,
    signLoading: false,
    whitelistLoading: false,
    mintLoading: false,
  });

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const walletAddressRef = useRef();
  const web3ModalRef = useRef();
  const signatureRef = useRef();
  const { wallet: account } = useSelector(profileState);

  const getProviderOrSigner = async (needSigner = false) => {
    try {
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);

      const { chainId } = await web3Provider.getNetwork();
      console.log(chainId);
      // if (chainId !== 80001) {
      //   window.alert("Change the network to Polygon");
      //   throw new Error("Change network to Polygon");
      // }

      const signer = web3Provider.getSigner();
      walletAddressRef.current = await signer.getAddress();
      if (needSigner) {
        return signer;
      }
      return web3Provider;
    } catch (e) {
      console.log(e);
    }
  };

  async function signData() {
    if (signatureRef.current === undefined) {
      setLoading((loading) => ({ ...loading, signLoading: true }));
      try {
        const signer = await getProviderOrSigner(true);
        const message = utils.solidityKeccak256(
          ["string"],
          ["You confirm you are the owner of this wallet"]
        );

        // Sign the data

        const signature = await signer.signMessage(
          "You confirm you are the owner of this wallet"
        );
        signatureRef.current = signature;
        console.log("Signature", signatureRef.current);
        setSigned(true);
      } catch (e) {
        showMessage({
          type: "error",
          value: e.code,
        });
        setLoading((loading) => ({ ...loading, signLoading: false }));

        console.log(e.code);
      }
    }
  }

  const isVerified = async () => {
    setLoading((loading) => ({ ...loading, verifyLoading: true }));
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": envObj.nexaflow_api_key,
      },
      body: JSON.stringify({ method: "get" }),
    };
    fetch(
      `${envObj.nexaflow_api_url}/api/cors/${nexaflowPageObj.corsId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data, "JJJJJJ");
        for (let i = 0; i < response.data.length; i++) {
          const refId = response.data[i].attributes["reference-id"];
          const status = response.data[i].attributes["status"];

          console.log(refId, status);
          if (refId?.toLowerCase() === account?.toLowerCase()) {
            if (status === "approved") {
              setPageStatus((pageStatus) => ({
                ...pageStatus,
                verifyStatus: status,
                verify: true,
              }));
            } else {
              setPageStatus((pageStatus) => ({
                ...pageStatus,
                verifyStatus: status,
                verify: false,
              }));
            }
            break;
          }
        }
        setLoading((loading) => ({ ...loading, verifyLoading: false }));
      })
      .catch((err) => {
        setLoading((loading) => ({ ...loading, verifyLoading: false }));

        console.error(err);
      });
    // setShowBalance(true);
  };

  const safeMint = async (e) => {
    e.preventDefault();

    if (!pageStatus.verify) {
      showMessage({
        type: "error",
        value: "Please Complete your KYC to mint this SBT",
      });
      return;
    }
    if (typeof window?.ethereum !== undefined) {
      setLoading((loading) => ({ ...loading, mintLoading: true }));

      try {
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
        const signer = provider.getSigner();
        const tt = await signer.getAddress();
        let contract = new ethers.Contract(
          soulboundAddress,
          Soulbound.abi,
          signer
        );

        let transaction = await contract.safeMint();
        await transaction.wait();

        isMinted();
        showMessage({ type: "success", value: "Successfully Minted!" });
        setLoading((loading) => ({ ...loading, mintLoading: false }));
      } catch (e) {
        console.log(e);
        showMessage({ type: "error", value: e.code });
        setLoading((loading) => ({ ...loading, mintLoading: false }));
      }
    }
  };
  const whitelistAddress = async () => {
    if (typeof window?.ethereum !== undefined) {
      try {
        setLoading((loading) => ({ ...loading, whitelistLoading: true }));
        const signer = await getProviderOrSigner(true);
        const contract = new Contract(soulboundAddress, Soulbound.abi, signer);
        const tx = await contract.addToWhiteList(account);
        await tx.wait();
        setLoading((loading) => ({ ...loading, whitelistLoading: false }));
        showMessage({ type: "success", value: "Address Added to whitelist" });
      } catch (e) {
        showMessage({ type: "error", value: e.code });
        console.error(e);
        setLoading((loading) => ({ ...loading, whitelistLoading: false }));
      }
    }
  };

  const handleUnstake = () => {
    console.log(input);
    for (let i in input) {
      if (!input[i]) {
        showMessage({ type: "error", value: `${i} is required` });
        return;
      }
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const isValid = emailRegex.test(input.email);

    if (!isValid) {
      showMessage({ type: "error", value: `Invalid email` });

      return;
    }

    signData();
  };

  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "goerli",
      providerOptions: {},
      disableInjectedProvider: false,
    });

    if (account) {
      isVerified();
      isWhitelisted();
      isMinted();
    }
  }, [account]);

  if (loading.verifyLoading) {
    return (
      <div className='dapp-loading-container'>
        <Loader id='loading' />
      </div>
    );
  }

  const isMinted = async () => {
    if (typeof window?.ethereum !== undefined) {
      try {
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
        const signer = provider.getSigner();
        const tt = await signer.getAddress();
        let contract = new ethers.Contract(
          soulboundAddress,
          Soulbound.abi,
          signer
        );

        let result = await contract.tokenMintedAddress(account);
        setPageStatus((status) => ({ ...status, minted: result }));
        console.log({ minted: result });
      } catch (e) {
        console.log(e);
        showMessage({ type: "error", value: e.code });
      }
    }
  };

  const isWhitelisted = async () => {
    if (typeof window?.ethereum !== undefined) {
      try {
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
        const signer = provider.getSigner();
        const tt = await signer.getAddress();
        let contract = new ethers.Contract(
          soulboundAddress,
          Soulbound.abi,
          signer
        );
        ``;
        let result = await contract.whitelistedAddresses(account);
        setPageStatus((status) => ({ ...status, whiteListed: result }));
        console.log({ whiteListed: result });
        result && isMinted();
      } catch (e) {
        console.log(e);
        showMessage({ type: "error", value: e.code });
      }
    }
  };

  const handlePersonaCompletion = () => {
    setSigned(false);
    isVerified();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  if (pageStatus.minted) {
    return (
      <div className='flex flex-col items-center justify-center gap-3'>
        <p className='text-lg message text-primary font-syne'>Verified and Soulbound Token Minted</p>
        <TwitterShareButton url={twitterContent}>
          <button className='flex flex-col items-center justify-center gap-2 text-md "w-[80px] ml-auto text-white font-inter h-10 rounded-md bg-[#EC8000] p-2 text-sm'>
            Share via Twitter
          </button>
        </TwitterShareButton>
      </div>
    );
  }
  else if (
    pageStatus.verifyStatus &&
    pageStatus.verifyStatus === "completed" &&
    !pageStatus.verify &&
    !pageStatus.whiteListed &&
    !pageStatus.minted
  ) {
    return (
      <div className='flex flex-col items-center justify-center w-3/4 gap-4'>

        <img className='error-icon' src={exclamationIcon} alt='error' />
        <p className='text-center sbt-kyc-comp-description font-syne'>
          Once your verification have been approved, your wallet will be
          whitelisted to mint this SBT
        </p>
      </div>
    );
  }
  else if (pageStatus.verify && !pageStatus.whiteListed) {
    return (
      <NodeDapp />

    );
  } else if (
    pageStatus.verify &&
    !pageStatus.minted &&
    pageStatus.whiteListed
  ) {
    return (
      <div className='flex flex-col items-center justify-center w-full gap-3'>
        <CgDanger color='#c1272d' size='60' />
        <p className='text-[22px] text-center font-inter font-medium text-black'>
          SOUL BOUND TOKEN <br />{" "}
          <span className='text-[#c94247]'>NOT FOUND</span>
        </p>
        <p className='text-black font-inter text-[12px] font-normal'>
          Know more
        </p>
        <button
          onClick={safeMint}
          className=' text-white gap-2 font-inter flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-xs'
        >
          MINT SOUL BOUND TOKEN
          {loading.mintLoading ? <BtnLoader /> : null}
        </button>
      </div>
    );
  } else if (
    !pageStatus.verify &&
    (pageStatus.verifyStatus !== "completed" ||
      pageStatus.verifyStatus !== "approved" ||
      !pageStatus.verifyStatus)
  ) {
    return (
      <div className='flex  z-[5] items-center p-4 flex-col gap-3'>
        <p className='text-black text-center font-inter text-[16px] font-medium'>
          Complete your KYC to mint this <br /> Soul Bound NFT
        </p>
        <div className='flex w-[90%] flex-col gap-1'>
          <input
            type='text'
            placeholder='First Name'
            className='p-1 text-black border-2 border-black'
            autoFocus={true}
            name='firstName'
            value={input.firstName}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Last Name'
            className='p-1 text-black border-2 border-black'
            name='lastName'
            value={input.lastName}
            onChange={handleChange}
          />
          <input
            type='email'
            placeholder='Email'
            className='p-1 text-black border-2 border-black'
            name='email'
            value={input.email}
            onChange={handleChange}
          />
        </div>

        <button
          onClick={handleUnstake}
          className='w-[170px] text-white gap-2 font-inter flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-sm'
        >
          GET WHITELISTED {loading.signLoading ? <BtnLoader /> : null}
        </button>

        {!pageStatus.verified &&
          (!pageStatus.verifyStatus ||
            pageStatus.verifyStatus !== "completed" ||
            pageStatus.verifyStatus !== "approved") &&
          signed ? (
          <Verifier
            address={walletAddressRef}
            setLoading={setLoading}
            input={input}
            handlePersonaCompletion={handlePersonaCompletion}
          // setShowBalance={setShowBalance}
          />
        ) : null}
      </div>
    );
  }
}

const Verifier = ({
  address,
  setLoading,
  input,
  handlePersonaCompletion,
  // setShowBalance,
}) => {
  const [referenceId, setReferenceId] = useState("");
  const Persona = require("persona");

  return (
    <div className='persona-auth-overlay '>
      {!referenceId ? (
        <div className='persona-popup'>
          <Persona.Inquiry
            className='persona'
            allow='*'
            onReady={() => {
              // setShowBalance(false);
              setLoading((loading) => ({ ...loading, signLoading: false }));
            }}
            templateId={templateId}
            // environmentId='env_oHeLwXnBxzNS7qsLHeEtkBqv'
            referenceId={address.current}
            fields={{
              nameFirst: input?.firstName,
              nameLast: input?.lastName,
              emailAddress: input?.email,
            }}
            onLoad={() => {
              console.log("Loaded inline");
            }}
            onComplete={({ inquiryId, status, fields }) => {
              setReferenceId(inquiryId);
              handlePersonaCompletion(inquiryId);

              // Inquiry completed. Optionally tell your server about it.
              console.log(`Sending finished inquiry ${inquiryId} to backend`);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
