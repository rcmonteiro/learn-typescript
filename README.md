# Testes do Princípio SOLID com vitest

Este repositório contém exemplos de testes em TypeScript para os princípios SOLID (SRP, OCP, LSP, ISP e DIP) usando a biblioteca de testes vitest.

## Princípios SOLID

Os princípios SOLID são um conjunto de diretrizes de design de software que visam tornar o código mais legível, sustentável e fácil de manter. Eles incluem:

- **SRP** (Single Responsibility Principle): Uma classe deve ter apenas uma razão para mudar.
- **OCP** (Open/Closed Principle): Uma classe deve estar aberta para extensão, mas fechada para modificação.
- **LSP** (Liskov Substitution Principle): Objetos de uma classe derivada devem ser substituíveis por objetos de sua classe base sem interromper a funcionalidade do programa.
- **ISP** (Interface Segregation Principle): Uma classe não deve ser forçada a depender de métodos que não utiliza.
- **DIP** (Dependency Inversion Principle): As classes de alto nível não devem depender de classes de baixo nível, mas sim de abstrações.

## Estrutura do Repositório

- `src/solid/*.ts`: Contém exemplos de código TypeScript para cada princípio SOLID.
- `src/solid/*.spec.ts`: Contém testes usando a biblioteca vitest para garantir que os princípios SOLID estejam sendo respeitados.

## Executando os Testes

- Certifique-se de ter o Node.js instalado em sua máquina.
- Clone este repositório.
- Navegue até o diretório do projeto no terminal.
- Execute o comando npm install para instalar as dependências.
- Execute o comando npm run test para executar os testes utilizando o vitest.

## Contribuindo

Se você encontrar algum problema ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request. Todas as contribuições são bem-vindas!

## Licença

Este projeto está licenciado sob a Licença MIT.