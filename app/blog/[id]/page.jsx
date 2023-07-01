import Image from "next/image";
import styles from "./page.module.css";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam
            quasi deserunt maiores adipisci atque id, sit ab. Dolore dolores
            libero consequatur repellendus alias reprehenderit repudiandae
            itaque officia dolorum. Dicta.
          </p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              src="/img/application.jpg"
              alt="Author"
              width={40}
              height={40}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/img/website.jpg"
            alt="Image"
            fill={true}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          delectus cum libero saepe impedit at minus ipsam, maxime ab eius
          assumenda modi omnis molestiae tenetur ipsa labore veniam ea aliquam?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          delectus cum libero saepe impedit at minus ipsam, maxime ab eius
          assumenda modi omnis molestiae tenetur ipsa labore veniam ea aliquam?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          delectus cum libero saepe impedit at minus ipsam, maxime ab eius
          assumenda modi omnis molestiae tenetur ipsa labore veniam ea aliquam?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
