import { useServicesContext } from '@context/services.context'
import ProductItem from './ProductItem'
import List from '@components/ui/List'

const sortOptions = [
  {
    label: 'Price: low to high',
    value: 'price_asc'
  },
  {
    label: 'Price: high to low',
    value: 'price_desc'
  }
]

const Products = () => {
  const { ProductService } = useServicesContext()

  return (
    <div>
      <h1 className="title">Products</h1>
      <List Service={ProductService} method="getProducts" ItemComponent={ProductItem} sortOptions={sortOptions} />
    </div>
  )
}

export default Products
