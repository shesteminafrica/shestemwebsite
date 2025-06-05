import React from 'react'
import Image from "../../public/images/homehero.jpg"
import styles from "../../styles/ReUsables/activitycard.module.scss"

const ActivityCard = () => {
  return (
    <div className={styles.activitycard}>
      <div className={styles.ac__left}>
        <Image fill quali/>
      </div>
      <div className={styles.ac__right}>

      </div>
    </div>
  )
}

export default ActivityCard