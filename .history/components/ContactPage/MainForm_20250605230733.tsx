"use client";

import React, { useRef, useState } from "react";
import ContactCheck from "./ContactCheck";
import ContactButton from "./ContactButton";
import FormInput from "./FormInput";
import { ContactFormFields } from "@/utils";
import styles from "../../styles/ContactPage/mainform.module.scss";
import { list } from "postcss";


// Define an interface for the service objects.
export interface Service {
  name: string;
  slug: string;
}

const MainForm = () => {
  const [buttonText, setButtonText] = useState("Submit message");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tickError, setTickError] = useState(false);

  // This state will hold the names of active (checked) services.
  const [activeChecks, setActiveChecks] = useState<string[]>([]);

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
      slug: "networking",
    },
    {
      name: "Other",
      slug: "other",
    },
  ];

  const submitData = {
    name: buttonText,
    background: "var(--pink)",
    text: "#ffffff",
    round: "#ffffff",
    border: "1px solid transparent",
    arrow: "var(--pink)",
    hovBack: "#ffffff",
    hovText: "var(--pink)",
    hovBorder: "1px solid var(--pink)",
    hovArrow: "white",
    hovRound: "var(--pink)",
  };

  // Handler to add or remove a service's name from activeChecks.
  // Note the use of the Service interface in the parameter type.
  const handleToggleCheck = (service: Service, isActive: boolean): void => {
    if (isActive) {
      setActiveChecks((prev) =>
        prev.includes(service.name) ? prev : [...prev, service.name]
      );

      // Since at least one box is now checked, clear any existing error
    setTickError(false);
    } else {
      setActiveChecks((prev) =>
        prev.filter((name) => name !== service.name)
      );
    }
  };


  //Handle Submit to check all errors on submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // If checkbox is not ticked, show error and stop submission
    if (activeChecks.length === 0) {
      setTickError(true);
      return;
    }
    setTickError(false);

    //Form Data
    const formData = new FormData(event.currentTarget);

    // Retrieve form fields
    const firstname = formData.get("firstname") as string | null;
    const lastname = formData.get("lastname") as string | null;
    const email = formData.get("email") as string | null;
    const levelstudy = formData.get("levelstudy") as string | null;
    const abstract = formData.get("abstract") as string | null;
    const services = activeChecks as string[] | null

    // Change button text and show "Submitting..."
    setButtonText("Submitting message...");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/speakers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          levelstudy,
          abstract,
        }),
      });

      if (response.ok) {
        // On success, update button text
        setButtonText("Thankyou! We'll get back to you shortly.");

        // Reset form after a successful submission
        if (formRef.current) {
          formRef.current.reset();
        }
        setActiveBox(false)
      } else {
        // If API response is not ok, show error
        setButtonText("Sorry, an error occurred");
      }
    } catch (error) {
      console.error("Error during form submission", error);
      setButtonText("Sorry, an error occurred");
      setIsSubmitting(false);
    } finally {
      // After 3 seconds, reset the button text to "Submit form"
      setIsSubmitting(false); // Enable the button again

      setTimeout(() => {
        setButtonText("Apply to speak");
      }, 5000);
    }

  }

  

  return (
    <div className={styles.form__wrapper}>
      <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
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
            {activeServices.map((data, i) => (
              <ContactCheck key={i}
              data={data}
              // Check if the service is active based on the stored names.
              active={activeChecks.includes(data.name)}
              onToggle={handleToggleCheck}/>
            ))}
          </div>
          {tickError && (
              <span className={styles.checkbox__error}>
                Please check atleast one of the services you need.
              </span>
            )}
        </div>
        <div className={styles.button__content}>
          <ContactButton buttonprops={submitData} disabled={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default MainForm;
