import Image from 'next/image'
import { castToCurrency } from 'src/lib/utils'
import styles from '@styles/components/ProductItem.module.css'

const ProductItem = ({ brand, description, image, price, discount }) => {
  return (
    <div data-test="product-item" className={styles['product-item']}>
      <div data-test="product-item-image" className={styles['product-item-image']}>
        <Image src={`https://${image}`} alt={description} width={100} height={100} />
      </div>
      <div className={styles['product-item-info']}>
        <p data-test="product-item-price" className={styles['product-item-price']}>
          <span>{castToCurrency(price)}</span>
          {discount !== 0 && (
            <>
              <span data-test="product-item-discount-price" className={styles['product-item-discount-price']}>
                {castToCurrency(price * discount)}
              </span>
              <span data-test="product-item-discount" className={styles['product-item-discount']}>
                {discount * 100}%
              </span>
            </>
          )}
        </p>
        <p>
          <span data-test="product-item-brand" className={styles['product-item-brand']}>
            {brand}
          </span>
          <span data-test="product-item-description">{description}</span>
        </p>
        <button data-test="product-item-btn-buy" className={`btn ${styles['product-item-btn']}`}>
          Buy now
        </button>
      </div>
    </div>
  )
}

export default ProductItem
