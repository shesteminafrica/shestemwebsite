"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import styles from "../../styles/BlogPage/blogcontent.module.scss";

const BlogContent = () => {
  const filters = [
    "All",
    "Entrepreneurship",
    "Innovation",
    "Inspiring African women in science",
    "Opportunities",
    "Events",
    "News",
    "STEM",
  ];

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = (filter: string) => {
    const params = new URLSearchParams(searchParams);

    if (filter) {
      params.set("filter", filter);
    } elseif {
      params.delete("filter");
    }

    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={`sectioner ${styles.bc__section}`}>
      <div className={`containerr ${styles.bc__container}`}>
        <div className={styles.bcf__slider}>
          <div className={styles.bc__filter}>
            {filters.map((data, i) => (
              <span key={i} className={styles.bcf__item}>
                {data}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.bc__articles}></div>
      </div>
    </div>
  );
};

export default BlogContent;
