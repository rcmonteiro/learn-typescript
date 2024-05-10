import { describe, expect, test } from 'vitest'
import { DigitalProduct, PhysicalProduct, type Product } from './lsp'

describe('LSP - Liskov Substitution Principle', () => {
  test('LSP is respected for PhysicalProduct', () => {
    const physicalProduct: Product = new PhysicalProduct('1', 'Book', 20)
    // Verificando se um objeto de PhysicalProduct pode ser usado em vez de um objeto de Product
    expect(physicalProduct.getPrice()).toBe(20)
  })

  test('LSP is respected for DigitalProduct', () => {
    const digitalProduct: Product = new DigitalProduct('2', 'E-book', 15)
    // Verificando se um objeto de DigitalProduct pode ser usado em vez de um objeto de Product
    expect(digitalProduct.getPrice()).toBe(15)
  })
})
