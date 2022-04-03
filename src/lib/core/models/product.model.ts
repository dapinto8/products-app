export class Product {
  id: number
  name: string
  brand: string
  description: string
  image: string
  price: number
  discount: string

  constructor(data: any) {
    this.id = data.id
    this.name = data.name
    this.brand = data.brand
    this.description = data.description
    this.image = data.image
    this.price = data.price
    this.discount = data.discount ?? 0
  }
}
