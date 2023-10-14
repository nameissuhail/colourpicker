import React, { useState } from 'react';
import './color-picker.css';
function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('');
  const [showColorList, setShowColorList] = useState(false);

  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'black', 'grey', 'violet']; // Sample array of colors

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker">
      <button onClick={handleButtonClick}>Pick a color</button>
      <div className={`color-list ${showColorList ? 'show' : ''}`}>
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(color)}
            className="color-square"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      {selectedColor && (
        <div className="selected-color" style={{ backgroundColor: selectedColor }}>
          You picked {selectedColor}
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
