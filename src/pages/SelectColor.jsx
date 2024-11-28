import { useState } from "react";

function SelectColor() {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <input  className="box-color"   type="color" value={color} onChange={handleColorChange} />
      <h2 style={{ color: color }}>CAR CLOLR</h2>
    </div>
  );
}

export default SelectColor;
