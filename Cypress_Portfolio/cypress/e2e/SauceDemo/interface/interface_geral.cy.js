/// <reference types="Cypress"/>

describe('Testes de interface na tela de login', () => {
    it('Titulo está aparente', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('.login_logo').should('exist')
    });

    it('Campos User e Senha aparentes e digitáveis, botão login visivel', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')

        cy.get('[data-test="username"]').type('aaa')
        cy.get('[data-test="password"]').type('aaa')

        cy.get('[data-test="login-button"]').should('be.visible')
    });

    it('Campo dos usuários e senha aceitos visivel', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="login-credentials"]').should('be.visible')
        cy.get('[data-test="login-credentials"] > h4').should('be.visible')


        cy.get('[data-test="login-password"]').should('be.visible')
        cy.get('[data-test="login-password"] > h4').should('be.visible')
    });
});

describe('Teste de interface na tela inicial', () => {
    it('Verificar se os elementos Titulo, Icone do Carrinho, Filtro, Icone Sandwiche e Rodape estão visiveis', () => {
        //login inicial
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')

        cy.get('.app_logo').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="product-sort-container"]').should('be.visible')
        cy.get('.bm-burger-button').should('be.visible')
        cy.get('[data-test="footer"]').should('be.visible')
    });

    it('Verifica se o botão twitter funciona', () => {
        //login inicial
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')

        cy.get('[data-test="social-twitter"]').click()
    });

    it('Verifica se o botão facebook funciona', () => {
        //login inicial
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')

        cy.get('[data-test="social-facebook"]').click()
    });

    it('Verifica se o botão linkedin funciona', () => {
        //login inicial
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')

        cy.get('[data-test="social-linkedin"]').click()
    });
});

describe.only('Teste de resoluções - Responsividade', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
      })

    it('', () => {
        
    });
});