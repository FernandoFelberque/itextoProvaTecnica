# iTextoProvaTecnica

Este repositório contém testes automatizados utilizando o framework Cypress.
## Índice

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Testes em Gherkin](#testes-em-gherkin)
- [Documentação](#documentação)
- [Autor](#autor)

## Descrição

O projeto tem como objetivo implementar testes para validar as funcionalidades de cadastro e pesquisa de usuários.

- **Funcionalidade de Cadastro**: Inclui testes automatizados usando Cypress.

- **Funcionalidade de Pesquisa**: Possui casos de teste escritos em Gherkin.

Ambas as funcionalidades possuem documentação do plano de teste, com um cenário de teste para cada uma.

Além disso, foi criado um GitHub Action que gera um relatório na gh-pages do projeto, facilitando o acompanhamento dos resultados dos testes.

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
