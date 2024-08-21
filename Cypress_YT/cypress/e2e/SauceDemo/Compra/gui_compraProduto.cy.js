/// <reference types="Cypress"/>

describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
    it('Fluxo da Compra de Produtos', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('contain', 'Products')
        
        // Ordenação de produtos de menor para maior valor
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        //Valida se foi ordenado
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Adiciona produtos ao carrinho
        cy.contains('Sauce Labs Onesie').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();

        cy.contains('Sauce Labs Bike Light').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();

        cy.contains('Sauce Labs Bolt T-Shirt').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();

        //Checa a quantidade de produtos adicionados no carrinho
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '3');

        cy.get('[data-test="shopping-cart-link"]').click()

        //Checa no carrinho
        cy.get('[data-test="cart-list"] > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
        cy.get('[data-test="cart-list"] > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
        cy.get('[data-test="cart-list"] > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Confirma informações
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Teste Primeiro Nome')
        cy.get('[data-test="lastName"]').type('Teste Ultimo NOme')
        cy.get('[data-test="postalCode"]').type('65565487')
        cy.get('[data-test="continue"]').click()

        //Verifica produtos no checkout
        cy.get('[data-test="cart-list"] > :nth-child(3)').should('contain', 'Sauce Labs Onesie')
        cy.get('[data-test="cart-list"] > :nth-child(4)').should('contain', 'Sauce Labs Bike Light')
        cy.get('[data-test="cart-list"] > :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Checa o valor total
        cy.get('[data-test="total-label"]').should('have.text', 'Total: $36.69')
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    });
});