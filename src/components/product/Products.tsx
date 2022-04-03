import { useServicesContext } from '@context/services.context'
import ProductItem from './ProductItem'
import List from '@components/ui/List'

const Products = () => {
  const { ProductService } = useServicesContext()

  return (
    <div>
      <h1 className="title">Products</h1>
      <List Service={ProductService} method="getProducts" ItemComponent={ProductItem} />
    </div>
  )
}

export default Products
