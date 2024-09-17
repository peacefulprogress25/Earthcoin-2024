import { ethers } from "ethers";

const soulboundAddress = process.env.REACT_APP_SOULBOUND_CONTRACT_ADDRESS;
const EarthTreasuryAddress = process.env.REACT_APP_EARTHTREASURY_ADDRESS;
const PresaleAddress = process.env.REACT_APP_PRESALE_ADDRESS;
const EarthStakingAddress = process.env.REACT_APP_EARTH_STAKING_ADDRESS;

export const totalEarth = async () => {
  if (typeof window?.ethereum !== undefined) {
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    const signer = provider.getSigner();
    const treasuryContract = new ethers.Contract(
      EarthTreasuryAddress,
      EarthTreasuryJSON.abi,
      signer
    );
    const presaleContract = new ethers.Contract(
      PresaleAddress,
      PresaleJSON.abi,
      signer
    );
    try {
      const info = await treasuryContract.intrinsicValueRatio();
      const ratio =
        info.earth.toString() !== "0"
          ? parseFloat(info.stablec.toString() / Math.pow(10, 18)) /
            parseFloat(info.earth.toString() / Math.pow(10, 18))
          : 0;

      const mintMultiple = await presaleContract.mintMultiple();
      let t = mintMultiple.toString() / 10;
      console.log(mintMultiple.toString());
      return Math.round(100 * (parseFloat(ratio) * parseFloat(t))) / 100;
    } catch (error) {
      console.log(error);
    }
  }
};
