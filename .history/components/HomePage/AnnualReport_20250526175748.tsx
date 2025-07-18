import React from 'react'
import { AnnualReportData } from '@/utils'
import styles from "../../styles/HomePage/annualreport.module.scss"

const AnnualReport = () => {
  return (
    <div className={`sectioner ${styles.annual__section}`}>
      <div className={`containerr2 ${styles.annual__container}`}>
        <h2 className={styles.annual__h2}>Annual Report</h2>
        <div className={styles.annual__content}>
          {
            AnnualReportData.map((data, i) => (
              <div className={styles.report__wrapper} key={i}>
                <div className={styles.report__left}>
                  
                </div>
                <div className={styles.report__right}>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AnnualReport