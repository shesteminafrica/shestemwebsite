import React from "react";
import styles from "../../styles/HomePage/annualreport.module.scss"

const BlogSection = () => {
  return (
    <div className={`sectioner ${styles.annual__section}`}>
      <div className={`containerr2 ${styles.annual__container}`}>
        <h2 className={styles.annual__h2}>Annual Report</h2>
        <div className={styles.annual__content}>
          {AnnualReportData.map((data, i) => (
            <ImageCard data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
