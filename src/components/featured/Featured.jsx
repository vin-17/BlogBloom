import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, BlogBloomers!</b> Discover the stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/pexel.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>“Blogging is a communications mechanism handed to us by the long tail of the Internet.”</h1>
          <p className={styles.postDesc}>
          In the last decade, blogging has turned the publishing world on its head. A blog allows you to write and publish anything, from anywhere, and have it be immediately available to billions of people all around the world.
          </p>
          {/* <button className={styles.button}>Read More</button> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
