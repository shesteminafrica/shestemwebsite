import React from 'react'
import styles from "../../styles/HomePage/buildfuture.module.scss"

const BuildFuture = () => {
  return (
    <div className={`sectioner ${styles.bf__section}`}>
      <div className={`containerr ${styles.bf__container}`}>
        <div className={styles.bf__header}>
          <h2 className={styles.bf__h2}>Build you future</h2>
        </div>
      </div>
    </div>
  )
}

export default BuildFuture