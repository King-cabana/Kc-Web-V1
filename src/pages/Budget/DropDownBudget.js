import React from "react";

const DropDown = () => {
    const [box, setBox] =useState([])
    const inputs = <div><input type="text"/>
    <input type="text"/></div>
    const handleClick = () => {
      setBox(prev => [...prev,inputs]);
    }
    return (
      <div>
        {box.map(item, index => {
          <div key={index}>
            {item}
            <button onClick={() => handleClick(index)}>Click</button>
          </div>
          {/* return <div>{item}</div> */}
        })}
        <button onClick={handleClick}>Add</button>
      </div>
    )
  }
export default DropDown;
