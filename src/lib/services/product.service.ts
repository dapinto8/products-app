import { HttpClient } from '@core/interfaces/http-client.interface'
import { PaginatedData } from '@core/interfaces/paginated-data.interface'
import { Product } from '@core/models/product.model'

export class ProductService {
  constructor(private http: HttpClient) {}

  async getProducts(params: any): Promise<PaginatedData<Product>> {
    const { data } = await this.http.get(`/products`, { params })
    return {
      ...data,
      data: data.data.map((product: any) => new Product(product))
    }
  }
}
