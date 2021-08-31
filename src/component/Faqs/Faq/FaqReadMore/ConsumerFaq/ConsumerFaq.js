import React from "react";
import "./style.css";
import {ConsumerData} from '../FixerConsumerdData/Data';
import TitlePara from '../TitlePara/TitlePara';

function ConsumerFaq() {
  return (
    <section className="question-answer">
      <div className="fixer-page">
        <div className="faq-title">
          <h2>Customer Faqs</h2>
        </div>
        <div>
        { ConsumerData.map((val)=>

          <TitlePara title={val.title} text={val.text} />

        )  }
        </div>
      </div>
    </section>
  );
}

export default ConsumerFaq;
