import Image from 'next/image'
import { castToCurrency } from 'src/lib/utils'
import styles from '@styles/components/ProductItem.module.css'

const ProductItem = ({ name, brand, description, image, price, discount }) => {
  return (
    <div className={styles['product-item']}>
      <div className={styles['product-item-image']}>
        <Image src={`https://${image}`} alt={name} width={100} height={100} />
      </div>
      <div className={styles['product-item-info']}>
        <p className={styles['product-item-price']}>
          <span>{castToCurrency(price)}</span>
          {discount !== 0 && (
            <>
              <span className={styles['product-item-discount-price']}>{castToCurrency(price * discount)}</span>
              <span className={styles['product-item-discount']}>{discount * 100}%</span>
            </>
          )}
        </p>
        <p>
          <span className={styles['product-item-brand']}>{brand}</span>
          <span>{description}</span>
        </p>
        <button className={`btn ${styles['product-item-btn']}`}>Buy now</button>
      </div>
    </div>
  )
}

export default ProductItem
