import React from 'react'
import Image from 'next/image'
import GRADIENT from "../../"
import styles from "../../styles/HomePage/ourchallenges.module.scss"

const OurChallenges = () => {
  return (
    <div className={`sectioner ${styles.oc__section}`}>
      <div className={`containerr ${styles.oc__container}`}>
        <div className={styles.oc__header}>
          <h2 className={styles.oc__h2}>Our Challenges</h2>
        </div>
        <div className={styles.oc__content}>
          <div className={styles.occ__left}>
            <div className={styles.occ__block}>
              <div className={styles.ocb__top}>

              </div>
              <div className={styles.ocb__bottom}>

              </div>
            </div>
          </div>
          <div className={styles.occ__right}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default OurChallenges