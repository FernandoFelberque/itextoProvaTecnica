/// <reference types ="cypress"/>

const { faker } = require('@faker-js/faker');

const dadosUsuario = require("../fixtures/usuarios.json");
const dadosBlog = require("../fixtures/blogs.json");
const pageCadastro = require("../support/pageObjects/pageCadastro.page")


describe('CN001 Fluxo de Cadastro', () => {

  beforeEach(() => {
    cy.visit('/cadastro')
  });


  it('CT001 Realizar cadastros com credenciais válidas e sem blog', () => {
    const nomeUsuarioFake = faker.internet.userName();  // Gerando nome de usuário fake
    const emailFake = faker.internet.email();           // Gerando e-mail fake

    pageCadastro.dadosUsuario(
      nomeUsuarioFake,
      emailFake,
      dadosUsuario[0].senha,
      dadosUsuario[0].miniBiografia
    );
    cy.get('.cadastrar__usuario').click();
    cy.get('.menus').find('a.menu-link[href="/eu"]').should('contain', 'Você');
  })

  it('CT002 Falhar em realizar cadastros com email inválido', () => {

    pageCadastro.dadosUsuario(
      dadosUsuario[0].nomeUsuario,
      dadosUsuario[0].email,
      dadosUsuario[0].senha,
      dadosUsuario[0].miniBiografia
    );
    cy.get('.cadastrar__usuario').click();
    cy.get('input[name="email"]:invalid').should('exist');

  })

  it('CT003 Realizar cadastros com credenciais válidas e com blog', () => {
    const nomeUsuarioFake = faker.internet.userName();  // Gerando nome de usuário fake que ser utilizado no nome do usuario e do blog 
    const emailFake = faker.internet.email();           // Gerando e-mail fake    
    const enderecoBlogFake = faker.internet.url();
    pageCadastro.dadosUsuario(
      nomeUsuarioFake,
      emailFake,
      dadosUsuario[0].senha,
      dadosUsuario[0].miniBiografia
    );

    pageCadastro.dadosBlog(
      nomeUsuarioFake,
      enderecoBlogFake,
      enderecoBlogFake,
      dadosBlog[0].sobre
    )
    cy.intercept('POST', 'https://api.devall.com.br/api/v1/autor').as('postAutor');
    cy.get('.cadastrar__usuario').click();
    cy.wait('@postAutor');
    cy.get(':nth-child(5) > .menu-link').click();
    cy.get('.autor__site').should('contain', nomeUsuarioFake);
  })

  it('CT004 Cadastro com campos vazios', () => {

    cy.get('.cadastrar__usuario').click();

    cy.get('input[name="nome"]:invalid').should('exist');
    cy.get('input[name="email"]:invalid').should('exist');
    cy.get('input[name="senha"]:invalid').should('exist');
  })
})