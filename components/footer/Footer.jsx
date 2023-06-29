import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>&copy; Blogger. All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/mirlan.urzhanov" target="_blank">
          <Image
            src="/img/fb.png"
            alt="Facebook"
            width={15}
            height={15}
            className={styles.icon}
          />
        </Link>

        <Image
          src="/img/in.png"
          alt="Instagram"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/img/tw.png"
          alt="Twitter"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </footer>
  );
};

export default Footer;
