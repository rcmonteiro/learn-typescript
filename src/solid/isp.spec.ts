import { describe, expect, test } from 'vitest'
import { Book, Ebook } from './isp'

describe('ISP - Interface Segregation Principle', () => {
  test('ISP is respected for Book', () => {
    const book = new Book()
    // Verificando se a classe Book implementa apenas a interface PhysicalProduct
    expect(book.calculateShippingCost()).toBe(5)
    expect(book).not.toHaveProperty('generateDownloadLink')
  })

  test('ISP is respected for Ebook', () => {
    const ebook = new Ebook()
    // Verificando se a classe Ebook implementa apenas a interface DigitalProduct
    expect(ebook.generateDownloadLink()).toBe('https://example.com/ebook')
    expect(ebook).not.toHaveProperty('calculateShippingCost')
  })
})
