"use client";

import React, {useRef} from "react";

import Image from "next/image";
import IMAGE from "../../public/images/homehero.jpg";
import styles from "../../styles/BlogPage/bloghero.module.scss";

const BlogHero = () => {
  return (
    <div className={styles.blog__hero}>
      <div className={styles.bh__imageback}>
        <div className={styles.bh__overlay}></div>
        <div className={styles.bh__image}>
          <Image fill quality={100} src={IMAGE} alt="Our blog" />
        </div>
      </div>
      <div className={styles.bh__content}>
        <h2 className={styles.bh__h2}></h2>
      </div>
    </div>
  );
};

export default BlogHero;
