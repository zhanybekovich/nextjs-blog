import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/img/website.jpg"
            alt="Website"
            fill={true}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>Title</h3>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/img/website.jpg"
            alt="Website"
            fill={true}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>Title</h3>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
