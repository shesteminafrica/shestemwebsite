import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/homehero.jpg"
import styles from "../../styles/ReUsables/activitycard.module.scss"

const ActivityCard = () => {
  return (
    <div className={styles.activitycard}>
      <div className={styles.ac__left}>
        <Image fill quality={100} src={IMAGE} />
      </div>
      <div className={styles.ac__right}>

      </div>
    </div>
  )
}

export default ActivityCard