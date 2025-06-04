import React from 'react'
import Image from 'next/image';
import { PartnersData } from '@/utils';
import styles from "../../styles/HomePage/ourpartners.module.scss"




const Marquee = () => {

  return (
    <div className={styles.marquee}>
      {
        PartnersData.map((data, i) => (
          <div className={styles.partner__box} key={i}>
            <div className={styles.partner__image} style={{width: data.width, aspectRatio: data.aspectRatio}}>
              <Image fill quality={100} src={data.image} alt={data.name}/>
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
      <h2 className={styles.partner__header}>Our Partners</h2>
      <div className={styles.partners__container}>
        <Marquee />
      </div>
    </div>
  )
}

export default OurPartners