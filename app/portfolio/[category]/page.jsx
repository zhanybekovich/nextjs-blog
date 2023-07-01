import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from "next/image";

const Category = ({params}) => {
  return <div className={styles.container}>
    <h1 className={styles.catTitle}>{params.category}</h1>
    <div className={styles.item}>
    <div className={styles.content}>
      <h2 className={styles.title}>Test</h2>
      <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a maiores deleniti? Impedit, quaerat ipsa possimus autem optio, neque recusandae provident doloribus non dolorum enim eveniet eum dolores quas necessitatibus?</p>
      <Button url="/" text="See more" />
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} fill={true} src="/img/illustration.jpg" alt="Illustration" />
      </div>
    </div>
    <div className={styles.item}>
    <div className={styles.content}>
      <h2 className={styles.title}>Test</h2>
      <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a maiores deleniti? Impedit, quaerat ipsa possimus autem optio, neque recusandae provident doloribus non dolorum enim eveniet eum dolores quas necessitatibus?</p>
      <Button url="/" text="See more" />
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} fill={true} src="/img/illustration.jpg" alt="Illustration" />
      </div>
    </div>
  </div>;
};

export default Category;
