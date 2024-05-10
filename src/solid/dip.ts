/**
 * DIP - Dependency Inversion Principle
 *
 * "Módulos de alto nível não devem depender de módulos de baixo nível
 *  Ambos devem depender da abstração. Abstrações não devem depender de
 *  detalhes. Detalhes devem depender de abstrações"
 *
 */

// Interface para processadores de pagamento
export interface PaymentProcessor {
  processPayment(amount: number): boolean
}

// Implementação concreta de um processador de pagamento
export class PaypalPaymentProcessor implements PaymentProcessor {
  processPayment(amount: number): boolean {
    // Lógica para processar o pagamento via PayPal
    console.log(`Pagamento de ${amount} processado via PayPal.`)
    return true
  }
}

// Classe de alto nível que depende da interface PaymentProcessor
export class OrderProcessor {
  constructor(private paymentProcessor: PaymentProcessor) {}

  processOrder(amount: number): boolean {
    return this.paymentProcessor.processPayment(amount)
  }
}
