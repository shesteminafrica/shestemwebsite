import React from 'react'
import styles from "../../styles/ReUsables/"

const ImageCard = () => {
  return (
    <Link href="/" className={styles.report__wrapper} key={i}>
              <div className={styles.report__left}>
                <Image fill quality={100} alt={data.name} src={data.image} />
              </div>
              <div className={styles.report__right}>
                <CalendarDate date={data.date} border={true} />
                <p className={styles.report__p}>
                  {data.name}
                </p>
              </div>
            </Link>
  )
}

export default ImageCard