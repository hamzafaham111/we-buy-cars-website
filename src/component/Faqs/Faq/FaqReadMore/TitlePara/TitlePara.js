import React from "react";
import './style.css';

const TitlePara = (props) => {
  return (
    <>
      <h5 className="ques-heading">{props.title}</h5>
      <p className="ans-para">
       {props.text}
      </p>
    </>
  );
};

export default TitlePara;
