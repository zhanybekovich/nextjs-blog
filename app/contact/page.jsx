
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

const Contact = () => {
  return <div className={styles.container}>
    <h1 className={styles.title}>Let's Keep in Touch</h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} alt="Contact" src="/img/contact.jpg" fill={true} />
      </div>
      <form className={styles.form}>
        <input className={styles.input} type="name" placeholder="name" />
        <input className={styles.input} type="email" placeholder="email" />
        <textarea className={styles.textarea} placeholder="message" name="message"></textarea>
        <Button url="/" text="Send" />
      </form>
    </div>
  </div>;
};

export default Contact;
