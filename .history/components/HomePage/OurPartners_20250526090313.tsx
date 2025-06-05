import React from 'react'
import styles from "../../styles/HomePage/ourpartners.module.scss"




const ClickRight = () => {
  const swiper = useSwiper();

  return (
    <span
      onClick={() => {
        swiper.slideNext();
        setActiveSlide(swiper.activeIndex);
      }}
      ref={rightButton}
    ></span>
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