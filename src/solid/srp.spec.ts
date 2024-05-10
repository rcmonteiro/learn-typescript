import { describe, expect, test } from 'vitest'
import { Product, ProductManager } from './srp'

describe('SRP - Single Responsibility Principle', () => {
  test('Product has a single responsibility', () => {
    const product = new Product('1', 'Camiseta', 20, 0.1)

    // Testando se a classe Product tem apenas uma responsabilidade, que é representar um produto
    expect(product).toHaveProperty('id')
    expect(product).toHaveProperty('name')
    expect(product).toHaveProperty('price')
    expect(product).toHaveProperty('discount')
    expect(product.calculatePrice).toBeInstanceOf(Function)
  })

  test('ProductManager has a single responsibility', () => {
    const productManager = new ProductManager()
    const product1 = new Product('1', 'Camiseta', 20, 0.1)

    // Testando se a classe ProductManager tem apenas uma responsabilidade, que é gerenciar produtos
    productManager.addProduct(product1)
    expect(productManager.getAllProducts()).toContain(product1)

    productManager.removeProduct('1')
    expect(productManager.getAllProducts()).not.toContain(product1)
  })
})
