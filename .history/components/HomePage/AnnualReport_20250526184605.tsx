import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageCard from "../ReUsables/ImageCard";
import { AnnualReportData } from "@/utils";
import styles from "../../styles/HomePage/annualreport.module.scss";

const AnnualReport = () => {
  
  return (
    <div className={`sectioner ${styles.annual__section}`}>
      <div className={`containerr2 ${styles.annual__container}`}>
        <h2 className={styles.annual__h2}>Annual Report</h2>
        <div className={styles.annual__content}>
          {AnnualReportData.map((data, i) => (
            <ImageCard data={data}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnualReport;
