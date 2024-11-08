import { useEffect, useState } from "react";
import { networks } from "./constants/network";
import { Select } from "antd";
import "./dapp.css"
import { useDispatch, useSelector } from "react-redux";
import { networkFn, profileState } from "../../redux/profileSlice";

export default function Network() {
  const { Option } = Select;

  const chainId = useSelector(profileState)?.chainId
  const dispatch = useDispatch()

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (value) => {
    // Find the selected object based on the value
    const selectedObj = networks.filter((option) => option?.chainId === value);
    setSelectedOption(selectedObj[0]);
    dispatch(networkFn(selectedObj[0]?.chainId))
    console.log(selectedObj[0]);  // logs the name of the selected object
  };

  useEffect(() => {


    if (chainId) {
      const filtered = networks.filter(
        (item) => item.chainId === chainId
      );
      setSelectedOption(filtered[0]);
      console.log(filtered[0])
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