import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if(!res.ok){
    throw new Error ('Faild to get Data')
  }
  return res.json();
}
export default async function Post({params}) {
  const product = await getData(params.id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
          src={product.thumbnail}
          alt={product.title}
          fill={true}
          className={styles.postImage}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map(image => (
            <Image 
            key={product.id}
              src={image}
              alt={product.title}
              width={100}
              height={100}
              />
          ))}
        </div>
        {/* <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dicta laudantium non est ullam veniam vitae commodi itaque autem incidunt laborum amet a magni consequatur optio voluptate nulla, atque dolorum neque soluta at eveniet. Est, at autem? Suscipit quo repellat perferendis cupiditate quae, placeat dolorum fugiat deserunt nesciunt at. Molestiae.
        </p> */}
      </div>
    </div>
  )
}
