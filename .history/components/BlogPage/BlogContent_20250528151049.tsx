"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import styles from "../../styles/BlogPage/blogcontent.module.scss";

const BlogContent = () => {
  const filters = [
    {
      name: "All",
      slug: "all"
    },
    {
      name: "Entrepreneurship",
      slug: "entrepreneurship"
    },
    {
      name: "Innovation",
      slug: "innovation"
    },
    {
      name: "Inspiring African women in science",
      slug: "inspiring-african-women-in-science"
    },
    {
      name: "Opportunities",
      slug: "opportunities"
    },
    {
      name: "Events",
      slug: "events"
    },
    {
      name: "News",
      slug: "news"
    },
    {
      name: "STEM",
      slug: "stem"
    }
  ];

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);

    if (filter == "all") {
      params.delete("filter");
    } else {
      // This value will have to chnage if the "All" is different
      params.set("filter", filter);
    }

    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  const activeFilter = searchParams.get("fi")

  return (
    <div className={`sectioner ${styles.bc__section}`}>
      <div className={`containerr ${styles.bc__container}`}>
        <div className={styles.bcf__slider}>
          <div className={styles.bc__filter}>
            {filters.map((data, i) => (
              <span
                key={i}
                className={styles.bcf__item}
                onClick={() => handleFilter(data.slug)}
              >
                {data.name}
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
