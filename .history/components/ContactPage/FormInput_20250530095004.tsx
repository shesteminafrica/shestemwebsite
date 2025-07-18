"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "../../styles/ContactPage/forminput.module.scss";

interface FormField {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  required: boolean;
  minlength?: number;
  inputState: boolean;
  icon?: StaticImageData;
}

const FormInput = ({
  data,
  isSubmitting,
}: {
  data: FormField;
  isSubmitting: boolean;
}) => {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      setFocused(false);
    }
  }, [isSubmitting]);

  const handleFocus = () => {
    if (!isSubmitting) {
      // Skip onBlur during form reset/submission
      setFocused(true);
    }
  };

  return (
    <div className={styles.input__wrapper}>
      {data.inputState ? (
        <div className={styles.input__wrapper2}>
          <input
            className={`${styles.input} ${data.icon ? styles.inputicon : ""}`}
            name={data.name}
            type={data.type}
            placeholder={data.placeholder}
            required={data.required}
            minLength={data.minlength}
            onBlur={handleFocus}
          />
        </div>
      ) : (
        <textarea
          className={styles.textarea}
          name={data.name}
          placeholder={data.placeholder}
          required={data.required}
          minLength={data.minlength}
          onBlur={handleFocus}
          data-focused={focused.toString()}
        />
      )}
      <span className={styles.error}>{data.errorMessage}</span>
      {data.icon && (
        <div className={styles.input__image}>
          <Image fill quality={100} alt="icon" src={data.icon} />
        </div>
      )}
    </div>
  );
};

export default FormInput;
