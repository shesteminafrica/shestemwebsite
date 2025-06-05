import React from "react";
import styles from "../../styles/BlogPage/blogdetails.module.scss";

const BlogDetails = () => {
  return (
    <div className={`sectioner ${styles.bd__section}`}>
      <div className={`containerr ${styles.bd__container}`}>
        <div className={styles.bd__wrapper}>
          <div className={`containerr2 ${styles.bd__container2}`}>
            <div className={styles.bdc__top}>
              <div className={styles.bd__read}>
                <div className={styles.read__item}>
                  <span className={styles.read__dot}></span> <p>10 min read</p>
                </div>
                <div className={styles.read__item}>
                  <span className={styles.read__dot}></span>{" "}
                  <p>April 30, 2025</p>
                </div>
              </div>
              <div className={styles.bdt__bottom}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
