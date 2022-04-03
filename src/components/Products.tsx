import type { NextPage } from 'next'
import ProductItem from './ProductItem'
import styles from '@styles/Products.module.css'
import useProducts from '@hooks/useProducts'
import Paginator from './Paginator'

const Products: NextPage = () => {
  const {
    isLoading,
    error,
    data,
    page,
    sortOptions,
    pageSizeOptions,
    handleSearch,
    handlePage,
    handlePageSize,
    handleSort
  } = useProducts()

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    if (text.length >= 3) {
      handleSearch(text)
    } else {
      handleSearch('')
    }
  }

  return (
    <div>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.filters}>
        <input className={styles['search-input']} placeholder="Search" onChange={onSearch} />
        <select onChange={event => handleSort(event.target.value)}>
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select onChange={event => handlePageSize(parseInt(event.target.value))}>
          {pageSizeOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {data && (
        <>
          <div className={styles.products}>
            {data.data.map(product => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
          <Paginator page={page} totalPages={data.totalPages} handleChangePage={handlePage} />
        </>
      )}
    </div>
  )
}

export default Products
