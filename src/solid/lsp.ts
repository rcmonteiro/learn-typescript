/**
 * LSP - Liskov Substitution Principle
 *
 * "Uma classe derivada deve ser substituível por sua classe base"
 *
 */

// Classe base para representar um produto
export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
  ) {}

  getPrice(): number {
    return this.price
  }
}

// Classe derivada representando um produto físico
export class PhysicalProduct extends Product {
  constructor(id: string, name: string, price: number) {
    super(id, name, price)
  }

  // Método específico para produtos físicos
  calculateShippingCost(): number {
    // Lógica para calcular o custo de envio de produtos físicos
    return 5
  }
}

// Classe derivada representando um produto digital
export class DigitalProduct extends Product {
  constructor(id: string, name: string, price: number) {
    super(id, name, price)
  }

  // Método específico para produtos digitais
  generateDownloadLink(): string {
    // Lógica para gerar o link de download para produtos digitais
    return `https://example.com/download/${this.id}`
  }
}
