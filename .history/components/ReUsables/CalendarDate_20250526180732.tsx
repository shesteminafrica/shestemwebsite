import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/ReUsables/calendar.module.scss";

interface Calendar {
  date: string;
  border: boolean
}


const CalendarDate = ({}: {data: Calendar}) => {
  return (
    <div className={styles.adate}>
      <span className={styles.acalendar}>
        <Icon icon="healthicons:calendar-outline" />
      </span>
      <span className={styles.amaindate}>{data.date}</span>
    </div>
  );
};

export default CalendarDate;
