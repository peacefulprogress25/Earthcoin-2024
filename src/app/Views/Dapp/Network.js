import { useEffect, useState } from "react";
import { networks } from "./constants/network";
import { Select } from "antd";
import "./dapp.css"

export default function Network() {
    const { Option } = Select;

    const chainId = "0x89";

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (value) => {
      // Find the selected object based on the value
      const selectedObj = networks.filter((option) => option.value === value);
      setSelectedOption(selectedObj);
      console.log(selectedObj[0]);  // logs the name of the selected object
    };

    useEffect(() => {
       
        const selectedValue = chainId
        if (selectedValue) {
          const filtered = networks.filter(
            (item) => item.chainId === selectedValue
          );
          setSelectedOption(filtered[0]);
          console.log(filtered[0])
        }
      }, [chainId]);

    return (

        <Select
            style={{ width: "11rem",height:"35px" }}
            placeholder="Search to Select"
            optionFilterProp="label"
            onChange={handleChange}
            value={selectedOption?.chainName }
        >
            {networks.map((option) => (
                <Option key={option.value} >
                    {option.chainName}
                </Option>

            ))}
        </Select>
    )
}