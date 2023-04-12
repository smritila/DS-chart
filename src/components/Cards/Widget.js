import React from "react";

const Widget = (props) => {
  return (
    <div className="widget">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <ul className="bullet">
        <li>{props.desc}</li>
        <li>{props.desc1}</li>
        <li>{props.desc2}</li>
      </ul>
    </div>
  );
};

export default Widget;
