import React from "react";
import Image from "next/image";
import Link from "next/link";
import CalendarDate from "../ReUsables/CalendarDate";
import { AnnualReportData } from "@/utils";
import styles from "../../styles/HomePage/annualreport.module.scss";

const AnnualReport = () => {
  
  return (
    <div className={`sectioner ${styles.annual__section}`}>
      <div className={`containerr2 ${styles.annual__container}`}>
        <h2 className={styles.annual__h2}>Annual Report</h2>
        <div className={styles.annual__content}>
          {AnnualReportData.map((data, i) => (
            <Link className={styles.report__wrapper} key={i}>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnualReport;
