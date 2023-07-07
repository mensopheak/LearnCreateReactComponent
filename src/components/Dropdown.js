import { useState, useEffect, useRef } from "react";
import Panel from "./Panel";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

function Dropdown({ value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handleDropdownClick = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDropdownClick, true);

    return () => {
      document.removeEventListener("click", handleDropdownClick, true);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-slate-500 hover:text-white rounded-md p-1"
        onClick={() => handleChange(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-full relative" ref={dropdownRef}>
      <Panel
        className="z-0 flex justify-between items-center"
        onClick={handleClick}
      >
        {value?.label || "Select One"}
        {isOpen ? <FaAngleDown /> : <FaAngleLeft />}
      </Panel>
      {isOpen && (
        <Panel className="z-10 absolute bg-white w-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
