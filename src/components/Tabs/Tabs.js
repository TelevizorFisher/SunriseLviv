import React, { useState } from "react";
import data from "./dataTabs";
import SingleQuestion from "./Question";
import "../../scss/Tabs.scss";

function Tabs() {
  const [questions, setQuestions] = useState(data);
  return (
    <div>
      <div className="container-grid">
        <div>Запитання і відповіді про нашу компанію:</div>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Tabs;
