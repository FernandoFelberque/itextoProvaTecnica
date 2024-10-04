
/// <reference types ="cypress"/>

class pageCadastro {

    get #nomeUsuario(){ return cy.get(':nth-child(2) > .form-component') };
    get #email(){ return cy.get('.bloco > :nth-child(3) > .form-component') };
    get #senha(){ return cy.get('.bloco > :nth-child(5) > .form-component') };
    get #miniBiografia(){ return cy.get('.bloco > :nth-child(6) > .form-component') };

    get #nomeBlog(){ return cy.get('form.ng-dirty > :nth-child(3) > .form-component')};
    get #url(){ return cy.get('form.ng-dirty > :nth-child(4) > .form-component')};
    get #rss(){ return cy.get('form.ng-dirty > :nth-child(5) > .form-component')};
    get #sobreBlog(){ return cy.get('form.ng-dirty > :nth-child(6) > .form-component')};
    
 
    
    dadosUsuario(nomeUsuario, email, senha, miniBiografia){
        this.#nomeUsuario.type(nomeUsuario);
        this.#email.type(email);
        this.#senha.type(senha);
        this.#miniBiografia.type(miniBiografia);
    };

    dadosBlog(nomeBlog, url, rss, sobreBlog){

        this.#nomeBlog.type(nomeBlog);
        this.#url.type(url);
        this.#rss.type(rss);
        this.#sobreBlog.type(sobreBlog);
    };
        
    };
    
    module.exports = new pageCadastro();