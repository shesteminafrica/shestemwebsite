import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/ReUsables/calendar.module.scss";

interface Calendar {
  date: string;
  border: boolean
}


const CalendarDate = ({date, border}: {date: string, border: boolean}) => {
  return (
    <div className={styles.adate} style={{border: border ? ""}}>
      <span className={styles.acalendar}>
        <Icon icon="healthicons:calendar-outline" />
      </span>
      <span className={styles.amaindate}>{date}</span>
    </div>
  );
};

export default CalendarDate;
