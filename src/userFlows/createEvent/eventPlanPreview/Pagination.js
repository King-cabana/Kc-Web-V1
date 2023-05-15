import React from "react";

function Pagination(props) {
  const { dots, index, onChangeIndex } = props;

  const handleClick = (newIndex) => {
    onChangeIndex(newIndex);
  };

  const renderDots = () => {
    const items = [];
    for (let i = 0; i < dots; i++) {
      const isActive = i === index;
      items.push(
        <span
          key={i}
          style={{
            cursor: "pointer",
            fontSize: "50px",
            color: isActive ? "#ff2957" : "#ff2957",
            zIndex: "999999",
          }}
          onClick={() => handleClick(i)}>
          {isActive ? "\u2022" : "\u25E6"}
        </span>
      );
    }
    return items;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "-20px",
        // zIndex: "9",
      }}>
      {renderDots()}
    </div>
  );
}

export default Pagination;
