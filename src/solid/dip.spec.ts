import { describe, expect, test } from 'vitest'
import {
  OrderProcessor,
  PaypalPaymentProcessor,
  type PaymentProcessor,
} from './dip'

describe('DIP - Dependency Inversion Principle', () => {
  test('DIP is respected for OrderProcessor with PaypalPaymentProcessor', () => {
    // Mocking a PaypalPaymentProcessor
    const paymentProcessor: PaymentProcessor = new PaypalPaymentProcessor()

    const orderProcessor = new OrderProcessor(paymentProcessor)
    // Verificando se a classe OrderProcessor depende de uma abstração (PaymentProcessor)
    expect(orderProcessor.processOrder(100)).toBe(true)
  })
})
