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
  contributor?: {
    name: string;
    link: string;
  };
  tag?: string;
}

const ImageCard = ({ data }: { data: CardProps }) => {
  return (
    <Link href={} className={styles.report__wrapper}>
      <div className={styles.report__left}>
        <Image fill quality={100} alt={data.name} src={data.image} />
      </div>
      <div className={styles.report__right}>
        <div className={styles.rr__top}>
          <span className={styles.rrt__tag}>{data.tag}</span>
          <CalendarDate
            date={data.date}
            border={data.category === "report" ? true : false}
          />
        </div>
        <div className={styles.rr__bottom}>

        <p className={styles.report__p}>{data.name}</p>
        <span>Posted by</span>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
