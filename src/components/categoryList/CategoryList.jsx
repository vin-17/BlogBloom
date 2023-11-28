import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// ${process.env.NEXTAUTH_URL}
// };
const getData = async () => {

  const apiUrl = typeof window === 'undefined' ? `${process.env.NEXTAUTH_URL}/api/categories` : '/api/categories';


  try {
    const res = await fetch(apiUrl, {
      method : 'GET',
      cache: "no-store",
    });
    // const res = await import(`../api/categories`);
    
    if (!res.ok) {
      throw new Error("Failed");
    }

    // await (await res.handler()).json() 
    return res.json();
  } catch (error) {
    // Handle the error here, e.g., log it or return an error response
    console.error("Error:", error);
    return { error: "An error occurred while fetching data." };
  }
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data && data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
        {/* <div className={styles.categories}>
          <Link href="/blog?cat=style" 
          className={`${styles.category} ${styles.style}`}>
             <Image src="/style.png"
              alt=""
              height={32}
              width={32}
              className={styles.image}
              /> 
              Style
          </Link>
          
          <Link href={`/blog`} 
          className={`${styles.category} ${styles.fashion}`}>
             <Image src="/fashion.png"
              alt=""
              height={32}
              width={32}
              className={styles.image}
              />
              Fashion
          </Link>

          <Link href={`/blog`} 
          className={`${styles.category} ${styles.food}`}>
             <Image src="/food.png"
              alt=""
              height={32}
              width={32}
              className={styles.image}
              />
              Food
          </Link>

          <Link href={`/blog`} 
          className={`${styles.category} ${styles.travel}`}>
             <Image src="/travel.png"
              alt=""
              height={32}
              width={32}
              className={styles.image}
              />
              Travel
          </Link>

          <Link href={`/blog`} 
          className={`${styles.category} ${styles.culture}`}>
             <Image src="/culture.png"
              alt=""
              height={32}
              width={32}
              className={styles.image}
              />
              Culture
          </Link>

          <Link href={`/blog`} 
          className={`${styles.category} ${styles.coding}`}>
             <Image src="/coding.png"
              alt=""
              height={32}
              width={32}
              className={styles.image}
              />
              Coding
          </Link>
        </div> */}
    </div>
  );
};

export default CategoryList;
