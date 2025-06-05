"use client";

import React, { useState, useEffect } from "react";
import Image
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
  icon?: StaticImageData
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
    if (!isSubmitting) { // Skip onBlur during form reset/submission
      setFocused(true);
    }
  };

  return (
    <div className={styles.input__wrapper}>
      {data.inputState ? (
        <div className={styles.input__wrapper}>

          <input
            className={styles.input}
            name={data.name}
            type={data.type}
            placeholder={data.placeholder}
            required={data.required}
            minLength={data.minlength}
            onBlur={handleFocus}
            data-focused={focused.toString()}
          />
          <div className={styles.input__image}>

          </div>
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
    </div>
  );
};

export default FormInput;