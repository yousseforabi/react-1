import { useState } from "react";

function SelectColor() {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleColorChange} />
      <h2 style={{ color: color }}>Hello World!</h2>
    </div>
  );
}

export default SelectColor;
