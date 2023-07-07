import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(null);
  const [color, setColor] = useState(null);

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const colors = [
    { label: "Red", value: "1" },
    { label: "Blue", value: "2" },
    { label: "Green", value: "3" },
  ];

  const handleChange = (option) => {
    setValue(option);
  };

  const handleChangeColor = (color) => {
    setColor(color);
  };

  return (
    <div className="flex gap-1">
      <Dropdown onChange={handleChange} value={value} options={options} />
      <Dropdown onChange={handleChangeColor} value={color} options={colors} />
    </div>
  );
}

export default App;
