import React from "react";
import "./style.css";
import FixersData from "../FixerConsumerdData/Data";
import TitlePara from '../TitlePara/TitlePara';

function FaqReadMore() {
  return (
    <section className="question-answer">
      <div className="fixer-page">
        <div className="faq-title">
          <h2>Fixer's Faqs</h2>
        </div>
        <div>
        { FixersData.map((val)=>

          <TitlePara title={val.title} text={val.text} />

        )  }
        </div>
      </div>
    </section>
  );
}

export default FaqReadMore;
