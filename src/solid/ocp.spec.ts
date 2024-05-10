import { describe, expect, test } from 'vitest'
import {
  FixedShippingCostStrategy,
  ShippingCalculator,
  WeightBasedShippingCostStrategy,
} from './ocp'

describe('OCP - Open/Closed Principle', () => {
  test('ShippingCalculator follows the Open/Closed Principle', () => {
    // Criando uma instância de ShippingCalculator com FixedShippingCostStrategy
    const fixedShippingCalculator = new ShippingCalculator(
      new FixedShippingCostStrategy(),
    )
    // Testando se o custo de envio é calculado corretamente para uma estratégia fixa
    expect(fixedShippingCalculator.calculateShippingCost(2)).toBe(10)

    // Criando uma instância de ShippingCalculator com WeightBasedShippingCostStrategy
    const weightBasedShippingCalculator = new ShippingCalculator(
      new WeightBasedShippingCostStrategy(),
    )
    // Testando se o custo de envio é calculado corretamente para uma estratégia baseada no peso
    expect(weightBasedShippingCalculator.calculateShippingCost(2)).toBe(1)
  })
})
