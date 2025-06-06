import React from "react";
import ActivityCard from "../ReUsables/ActivityCard";
import { JoinData } from "@/utils";
import styles from "../../styles/ContactPage/joinmovement.module.scss";

const JoinMovement = () => {
  return (
    <div className={`section ${styles.jm__section}`}>
      <div className={`container ${styles.jm__container}`}>
        <h2 className={styles.jm__h2}>Join the She STEMin Africa Movement</h2>
        <div className={styles.jm__content}>
        {Data.map((data, i) => (
            <ActivityCard data={data} key={i} keyId={i+1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinMovement;
