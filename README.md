# iTextoprovatecnica

Este repositório contém testes automatizados utilizando o framework Cypress e documentação do processo de teste manual da barra de pesquisa e automáticos da função de cadastro.

## Índice

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Testes em Gherkin](#testes-em-gherkin)
- [Documentação](#documentação)
- [Autor](#autor)

## Descrição

O projeto tem como objetivo implementar testes automatizados para validar o cadastro de usuários. Os testes são escritos em JavaScript e utilizam a biblioteca Cypress para automação.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes de frontend.
- [Faker](https://github.com/faker-js/faker) - Biblioteca para geração de dados fictícios.
- [cypress-html-reporter](https://github.com/Shelex/cypress-html-reporter) - Relatório HTML para testes do Cypress.

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

## Scripts Disponíveis

- **Executar testes Cypress:**

```bash
npm run cypress:run
```

- **Iniciar o servidor de relatório:**

```bash
npm run start-report
```

## Testes em Gherkin

Os testes da barra de pesquisa estão documentados utilizando Gherkin e podem ser encontrados na pasta `CasoDeTesteCódigoGherkin`.

## Documentação

A documentação do plano de teste, incluindo cenários e casos de teste, está localizada na pasta `documentacao`.

## Autor

Fernando
