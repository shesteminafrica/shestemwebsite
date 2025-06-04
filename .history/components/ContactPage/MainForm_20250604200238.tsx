"use client";

import React, { useRef, useState, useEffect } from "react";
import ContactCheck from "./ContactCheck";
import FormInput from "./FormInput";
import { ContactFormFields } from "@/utils";
import styles from "../../styles/ContactPage/mainform.module.scss";

const MainForm = () => {
  const [buttonText, setButtonText] = useState("Apply to speak");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBox, setActiveBox] = useState(false);
  const [tickError, setTickError] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const firstTwo = ContactFormFields.slice(0, 2); // Gets the first 2 items
  const nextTwo = ContactFormFields.slice(2, 4); // Gets the next 2 items
  const textArea = ContactFormFields[4]; //Get the last

  const activeServices = [
    {
      name: "Search for funding",
      slug: "search-for-funding",
    },
    {
      name: "Coaching / Personal support",
      slug: "coaching-personal-support",
    },
    {
      name: "Mentoring",
      slug: "mentoring",
    },
    {
      name: "Vocational guidance / Career choice",
      slug: "vocational-guidance-career-choice",
    },
    {
      name: "Research initiation",
      slug: "research-initiation",
    },
    {
      name: "School guidance",
      slug: "school-guidance",
    },
    {
      name: "Networking",
      slug: "Networking,
    },
    {
      name: "Search for funding",
      slug: "search-for-funding",
    },
    {
      name: "Search for funding",
      slug: "search-for-funding",
    },
  ];

  return (
    <div className={styles.form__wrapper}>
      <form ref={formRef} className={styles.form}>
        <div className={styles.form__top}>
          <div className={styles.form__boxone}>
            {firstTwo.map((data, i) => (
              <FormInput
                data={data}
                key={`fs${i}`}
                isSubmitting={isSubmitting}
              />
            ))}
          </div>
          <div className={styles.form__box}>
            {nextTwo.map((data, i) => (
              <FormInput
                data={data}
                key={`fs${i}`}
                isSubmitting={isSubmitting}
              />
            ))}
          </div>
          <div className={styles.form__box}>
            <FormInput
              data={textArea}
              key={`fsi`}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
        <div className={styles.form__bottom}>
          <h3 className={styles.fbb__h3}>Which service do you need?*</h3>
          <div className={styles.checkbox__section}>
            <ContactCheck />
            <ContactCheck />
            <ContactCheck />
            <ContactCheck />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainForm;
