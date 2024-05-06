import styles from './footer.module.css'
import Image from 'next/image'
import { social_media } from './data'
function Footer() {
  return (
      <div className={styles.container}>
        <div>©2024 Hexashop. All rights reserved.</div>
        <div className={styles.social}>
        {social_media.map(media =>
          <Image 
          key={media.id}
          src={`/images/${media.name}.png`}
          width={20}
          height={20}
          className={styles.icon}
          alt={`Hexashop ${media.name} link`} 
          />
        )}
        </div>
      </div>
  )
}

export default Footer
