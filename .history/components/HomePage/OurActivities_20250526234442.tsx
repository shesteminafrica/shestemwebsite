import React from "react";
import ActivityCard from "../ReUsables/ActivityCard";
import { ActivitiesData } from "@/utils";
import styles from "../../styles/HomePage/ouractivities.module.scss";

const OurActivities = () => {
  return (
    <div className={`sectioner ${styles.oa__section}`}>
      <div className={`containerr ${styles.oa__container}`}>
        <h2 className={styles.oa__h2}>Our activities</h2>
        <div className={styles.oa__content}>
          {
            ActivitiesData.map((data, i) => (

              <ActivityCard />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default OurActivities;
