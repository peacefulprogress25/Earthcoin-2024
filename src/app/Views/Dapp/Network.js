import { useContext, useEffect, useState } from "react";
import { contractAddressList, networks } from "./constants/network";
import { Select } from "antd";
import "./dapp.css"
import { useDispatch, useSelector } from "react-redux";
import { networkFn, profileState } from "../../redux/profileSlice";
import { VerifyNetwork } from "./utils";
import { AddressContext } from "../../Providers";

export default function Network() {
  const { Option } = Select;

  const { wallet, chainId } = useSelector(profileState)
  const dispatch = useDispatch()
  const [selectedOption, setSelectedOption] = useState(null);
  const { setAddressObj } = useContext(AddressContext)



  const assignAddress = (chain) => {
    try {
      const chainId = parseInt(chain, 16);
      const addressList = contractAddressList[chainId];
      setAddressObj(addressList);
      console.log(addressList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (value) => {
    // Find the selected object based on the value
    const selectedObj = networks.filter((option) => option?.chainId === value);
    wallet && await VerifyNetwork(selectedObj[0]);
    dispatch(networkFn(selectedObj[0]?.chainId))
    console.log(selectedObj[0]);  // logs the name of the selected object
    setSelectedOption(selectedObj[0]);
    assignAddress(selectedObj[0].chainId)
  };

  useEffect(() => {


    if (chainId) {
      const filtered = networks.filter(
        (item) => item.chainId === chainId
      );
      setSelectedOption(filtered[0]);
      assignAddress(filtered[0].chainId)
      console.log(filtered[0])
    }
    else {
      setSelectedOption('')
    }
  }, [chainId]);

  return (

    <Select
      style={{ width: "11rem", height: "35px" }}
      placeholder="Search to Select"
      optionFilterProp="label"
      onChange={handleChange}
      value={selectedOption?.chainName}
    >
      {networks.map((option) => (
        <Option key={option.chainId} >
          {option.chainName}
        </Option>

      ))}
    </Select>
  )
}