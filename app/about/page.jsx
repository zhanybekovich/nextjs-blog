import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="Hero"
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            possimus necessitatibus aut enim mollitia reprehenderit perspiciatis
            ratione. Deleniti totam vel facilis voluptas quod enim fugit,
            aspernatur, ipsam quam ipsa distinctio?
          </p>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            itaque veritatis eveniet tempore sint illum, suscipit, facilis
            similique harum impedit quae dolorum veniam architecto. Voluptates
            tempora ipsum ad quam accusantium!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            possimus necessitatibus aut enim mollitia reprehenderit perspiciatis
            ratione. Deleniti totam vel facilis voluptas quod enim fugit.
          </p>
          <ul>
            <li>Link item</li>
            <li>Link item</li>
            <li>Link item</li>
          </ul>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
