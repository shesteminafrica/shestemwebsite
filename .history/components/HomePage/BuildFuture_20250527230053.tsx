import React from 'react'
import MainButton from '../ReUsables/MainButton'
import styles from "../../styles/HomePage/buildfuture.module.scss"

const BuildFuture = () => {
  return (
    <div className={`sectioner ${styles.bf__section}`}>
      <div className={`containerr ${styles.bf__container}`}>
        <div className={styles.bf__header}>
          <h2 className={styles.bf__h2}>Build your future</h2>
          <MainButton buttonprops={}/>
        </div>
      </div>
    </div>
  )
}

export default BuildFuture