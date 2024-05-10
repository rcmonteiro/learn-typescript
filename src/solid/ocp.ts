/**
 * OCP - Open/Closed Principle
 *
 * "As classes devem ser abertas para extensão,
 *       mas fechadas para modificação"
 *
 */

// Interface para definir o contrato de uma estratégia de cálculo de custo de envio
export interface ShippingStrategy {
  calculateShippingCost(weight: number): number
}

// Implementação de uma estratégia de cálculo de custo de envio fixo
export class FixedShippingCostStrategy implements ShippingStrategy {
  calculateShippingCost(): number {
    return 10 // Custo de envio fixo
  }
}

// Implementação de uma estratégia de cálculo de custo de envio com base no peso
export class WeightBasedShippingCostStrategy implements ShippingStrategy {
  calculateShippingCost(weight: number): number {
    return weight * 0.5 // Custo de envio baseado no peso
  }
}

// Classe que usa uma estratégia de cálculo de custo de envio para calcular o custo de envio de um produto
export class ShippingCalculator {
  private shippingStrategy: ShippingStrategy

  constructor(shippingStrategy: ShippingStrategy) {
    this.shippingStrategy = shippingStrategy
  }

  calculateShippingCost(weight: number): number {
    return this.shippingStrategy.calculateShippingCost(weight)
  }
}
