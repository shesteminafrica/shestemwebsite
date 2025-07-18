import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/ReUsables/calendar.module.scss";



const CalendarDate = ({date, border}: {date: string, border: boolean}) => {
  return (
    <div className={styles.adate} style={{border: border ? "1px solid rgba(0,0,0,0.2)" : "none", padding: border ? "0.5rem 1.2rem" : "0rem"}}>
      <span className={styles.acalendar}>
        <Icon icon="healthicons:calendar-outline" />
      </span>
      <span className={styles.amaindate}>{date}</span>
    </div>
  );
};

export default CalendarDate;
