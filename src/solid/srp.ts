/**
 * SRP - Single Responsibility Principle
 *
 * "Uma classe deve ter apenas uma razão para mudar"
 *
 */

// Classe representando um produto
export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public discount: number,
  ) {}

  // Método para calcular o preço com desconto
  calculatePrice(): number {
    return this.price * (1 - this.discount)
  }
}

// Classe responsável pelo gerenciamento de produtos
export class ProductManager {
  private products: Product[]

  constructor() {
    this.products = []
  }

  addProduct(product: Product): void {
    this.products.push(product)
  }

  removeProduct(productId: string): void {
    this.products = this.products.filter((prod) => prod.id !== productId)
  }

  getProduct(productId: string): Product | undefined {
    return this.products.find((prod) => prod.id === productId)
  }

  getAllProducts(): Product[] {
    return this.products
  }
}
