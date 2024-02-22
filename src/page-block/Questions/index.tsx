import React from "react";
import style from "./Questions.module.css";
import Accordion from "src/components/Accordion";

const Questions = () => {
  const accordionData = [
    {
      title: "How long does delivery take?",
      content:
        "You Can Get Information By Contacting Our Support Team Have 24/7 Service.  What’s The Difference Between Free And Paid Plan ?",
    },
    {
      title: "How long does delivery take?",
      content:
        "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
    },

    {
      title: "How does your food delivery service work?",
      content:
        "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
    },
    {
      title: "What payment options do you accept?",
      content:
        "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
    },
    {
      title: "Do you offer discounts or promotions?",
      content:
        "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?",
    },
  ];

  return (
    <section className={style.area} id="FAQ">
      <p className={style.area__title}>
        Frequently Asked <br></br>
        <span className="highlight">Questions</span>
      </p>
      <div className={style.list__area}>
        {accordionData.map(({ title, content }, index) => (
          <Accordion title={title} content={content} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Questions;
