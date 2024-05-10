/**
 * ISP - Interface Segregation Principle
 *
 * "Clientes não devem ser forçados a depender de métodos que não usam"
 *
 */

// Interface para produtos físicos
export interface PhysicalProduct {
  calculateShippingCost(): number
}

// Interface para produtos digitais
export interface DigitalProduct {
  generateDownloadLink(): string
}

// Classe representando um produto físico
export class Book implements PhysicalProduct {
  calculateShippingCost(): number {
    return 5
  }
}

// Classe representando um produto digital
export class Ebook implements DigitalProduct {
  generateDownloadLink(): string {
    return 'https://example.com/ebook'
  }
}
