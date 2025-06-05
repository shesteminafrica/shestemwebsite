import React from 'react'
import Image from 'next/image';
import { PartnersData } from '@/utils';
import styles from "../../styles/HomePage/ourpartners.module.scss"




const Marquee = () => {

  return (
    <div className={styles.marquee}>
      {
        PartnersData.map(() => (
          <div className={styles.partner__box}>
            <div className={styles.partner__}>

            </div>
          </div>
        ))
      }
    </div>
  );
};




const OurPartners = () => {
  return (
    <div className={`sectionerr ${styles.partners__section}`}>
      <div className={styles.partners__container}>

      </div>
    </div>
  )
}

export default OurPartners