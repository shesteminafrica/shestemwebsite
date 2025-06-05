import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import CalendarDate from "./CalendarDate";
import styles from "../../styles/ReUsables/imagecard.module.scss";

interface CardProps {
  name: string;
  date: string;
  image: StaticImageData;
  link: string;
  category: string;
  contributor?: string;
  tag?: string;
}

const ImageCard = ({ data }: { data: CardProps }) => {
    if (data.category==="report") {
      return(

    <Link
      href={data.link}
      className={styles.report__wrapper}
      download
    >
      <div className={styles.report__left}>
        <Image fill quality={100} alt={data.name} src={data.image} />
      </div>
      <div className={styles.report__right}>
        <div className={styles.rr__top}>
    
          <CalendarDate
            date={data.date}
            border={data.category === "report" ? true : false}
          />
        </div>
        <div className={styles.rr__bottom}>
          <p className={styles.report__p}>{data.name}</p>
        </div>
      </div>
    </Link>
      )

    } else {
      return(

        <Link
          href={data.link}
          className={styles.report__wrapper}
          download={data.category === "report" ? true : false}
        >
          <div className={styles.report__left}>
            <Image fill quality={100} alt={data.name} src={data.image} />
          </div>
          <div className={styles.report__right}>
            <div className={styles.rr__top}>
              <span className={styles.rrt__tag} style={{display: data.category==="blog" ? "block" : "none"}}>{data.tag}</span>
              <CalendarDate
                date={data.date}
                border={data.category === "report" ? true : false}
              />
            </div>
            <div className={styles.rr__bottom}>
              <p className={styles.report__p}>{data.name}</p>
              {data.contributor && (
                <span className={styles.r__con}>
                  Posted by{" "}
                  <span className={styles.rc__name}>
                    {data.contributor}
                  </span>
                </span>
              )}
            </div>
          </div>
        </Link>
          )
    }
};

export default ImageCard;
