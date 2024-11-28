import { useState } from "react";
function seletColor(color) {

    const [color, setColor] = useState('#000000');

    const handleColorChange = (e) => {
      setColor(e.target.value);}

}
export default seletColor;