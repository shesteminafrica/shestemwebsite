import React from 'react'
import Image from 'next/image'
import { Icon } from "@iconify/react";
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
                  <Image fill quality={100} alt={data.name} src={data.image}/>
                </div>
                <div className={styles.report__right}>
                <div className={styles.date}>
                    <span className={styles.calendar}>
                      <Icon icon="healthicons:calendar-outline" />
                    </span>
                    <span className={styles.maindate}>{data.date}</span>
                  </div>
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