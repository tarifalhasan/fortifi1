"use client";
import { useState } from "react";
import Select from "react-select";
import CustomIndicator from "./CustomIndicator";
import { options, selectStyles } from "./data";
import "./styles.css";

const RSelect = () => {
  const [value, setVal] = useState(null);

  const CustomIndicatorSeparator = () => {
    return null;
  };

  const onChange = (val) => {
    setVal(val);
  };
  return (
    <div className="select-ctn">
      <Select
        value={value}
        placeholder="Select Position"
        className={`r-select`}
        isSearchable={false}
        styles={selectStyles()}
        options={options}
        onChange={(value) => onChange(value)}
        components={{
          DropdownIndicator: CustomIndicator,
          IndicatorSeparator: CustomIndicatorSeparator,
        }}
      />
    </div>
  );
};

export default RSelect;
