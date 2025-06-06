"use client";

import React, {useRef, s} from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import IMAGE from "../../public/images/homehero.jpg";
import styles from "../../styles/BlogPage/bloghero.module.scss";
import BlogSearch from "./BlogSearch";

const BlogHero = () => {
  //Parallax For Image
  const container = useRef(null);
  const { scrollYProgress: scroll1 } = useScroll({
    target: container,

    offset: ["start 106px", "end 106px"],
  });

  const y = useTransform(scroll1, [0, 1], [-100, 0]);

  return (
    <div className={styles.blog__hero} ref={container}>
      <motion.div className={styles.bh__imageback} style={{y}}>
        <div className={styles.bh__overlay}></div>
        <div className={styles.bh__image}>
          <Image fill quality={100} src={IMAGE} alt="Our blog" />
        </div>
      </motion.div>
      <div className={styles.bh__content}>
        <h2 className={styles.bh__h2}>Our Blogs</h2>
        <Suspense fallback={<div>Loading search…</div>}>
        <BlogSearch />
      </Suspense>
      </div>
    </div>
  );
};

export default BlogHero;
