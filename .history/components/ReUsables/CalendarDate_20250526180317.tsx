import React from 'react'
import styles from "../../"

const CalendarDate = () => {
  return (
    <div className={styles.adate}>
                  <span className={styles.acalendar}>
                    <Icon icon="healthicons:calendar-outline" />
                  </span>
                  <span className={styles.amaindate}>{data.date}</span>
                </div>
  )
}

export default CalendarDate