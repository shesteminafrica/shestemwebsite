import React from 'react'
import { AnnualReport } from '@/utils'
import styles from "../../styles/HomePage/annualreport.module.scss"

const AnnualReport = () => {
  return (
    <div className={`sectioner ${styles.annual__section}`}>
      <div className={`containerr2 ${styles.annual__container}`}>
        <h2 className={styles.annual__h2}>Annual Report</h2>
        <div className={styles.annual__content}>

        </div>
      </div>
    </div>
  )
}

export default AnnualReport