/// <reference types="cypress"/>

describe('Criando cenário de teste para o site Cocrihar na aba Orçamento', () => {

/*     //#1
    it('Caso de teste: Realizando um orçamento com todas as informações válidas', () => {
        cy.visit('https://www.cocrihar.com.br/');
        cy.get('a > .attachment-full').should('be.visible');
        cy.get('.elementor-cta__button').click();

        cy.get('#form-field-name').type('Jorginho1');
        cy.get('#form-field-email').type('jorginho1@gmail.com');
        cy.get('#form-field-telefone').type('2222222222');
        cy.get('#form-field-empresa').type('empresa de teste do jorginho');
        cy.get('#form-field-cargo').select('Analista');
        cy.get('#form-field-n_funcionarios').select('1 - 5');
        cy.get('#form-field-segmento').select('Automotivo');
        cy.get('#form-field-verba_mkt').select('De R$2.500,00 a R$5.000,00');
        cy.get('.elementor-field-type-submit > .elementor-button').click();
    })
 */
    //#2
    /* it('Inserção de informações apenas nos campos não-obrigatórios', () => {
        cy.visit('https://www.cocrihar.com.br/');
        cy.get('a > .attachment-full').should('be.visible');
        cy.get('.elementor-cta__button').click();

        cy.get('#rd-phone_field-ky4yju94').type('2222222222');
        cy.get('#rd-text_field-ky4yju96').type('www.jorginhosites.com.br');
        cy.get('#rd-select_field-ky4yju99').select('O quanto antes');
        cy.get('#rd-text_area_field-ky4yju9a').type('No ajudas. Apenas testes.');
        cy.get('#rd-button-kxtrzzkf').click();
        cy.get(':nth-child(1) > label.error').should('contain.text', 'Campo obrigatório');
        cy.get(':nth-child(2) > label.error').should('contain.text', 'Campo obrigatório');
        cy.get(':nth-child(4) > label.error').should('contain.text', 'Este campo deve ter no mínimo 16 caracteres.');
        cy.get(':nth-child(6) > label.error').should('contain.text', 'Campo obrigatório');
        cy.get(':nth-child(7) > label.error').should('contain.text', 'Campo obrigatório');
    })

    it('Apenas não selecionou uma opção da combobox', () => {
        cy.visit('https://www.cocrihar.com.br/');
        cy.get('.elementor-element-52a60c1d > .elementor-widget-wrap').should('be.visible');
        cy.get('.elementor-element-9a71f69 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click();
        cy.get('.elementor-element-52a60c1d > .elementor-widget-wrap').should('be.visible');

        cy.get('#rd-text_field-ky4yju92').type('Jorginho1');
        cy.get('#rd-email_field-ky4yju93').type('jorginho1@gmail.com');
        cy.get('#rd-phone_field-ky4yju94').type('2222222222');
        cy.get('#rd-phone_field-ky4yju95').type('3333333333');
        cy.get('#rd-text_field-ky4yju96').type('www.jorginhosites.com.br');
        cy.get('#rd-text_field-ky4yju97').type('empresa de teste do jorginho');
        cy.get('#rd-text_field-ky4yju98').type('CEO de testes');
        // cy.get('#rd-select_field-ky4yju99').select('O quanto antes');
        cy.get('#rd-text_area_field-ky4yju9a').type('No ajudas. Apenas testes.');
        cy.get('#rd-button-kxtrzzkf').click();
    })

    it('Preenchendo todos os campos com vinte 9', () => {
        cy.visit('https://www.cocrihar.com.br/');
        cy.get('.elementor-element-9a71f69 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click();
        cy.get('#rd-text_field-ky4yju92').type('99999999999999999999');
        cy.get('#rd-email_field-ky4yju93').type('99999999999999999999');
        cy.get('#rd-phone_field-ky4yju94').type('99999999999999999999');
        cy.get('#rd-phone_field-ky4yju95').type('99999999999999999999');
        cy.get('#rd-text_field-ky4yju96').type('99999999999999999999');
        cy.get('#rd-text_field-ky4yju97').type('99999999999999999999');
        cy.get('#rd-text_field-ky4yju98').type('99999999999999999999');
        cy.get('#rd-select_field-ky4yju99').select('O quanto antes');
        cy.get('#rd-text_area_field-ky4yju9a').type('99999999999999999999');
        cy.get('#rd-button-kxtrzzkf').click();
        cy.get(':nth-child(2) > label.error').should('contain.text', 'Endereço de e-mail inválido');
    })

    it('Realizando um orçamento, preencher todos os campos com informações válidas, limpar Nome, clique botão Enviar', () => {
        cy.visit('https://www.cocrihar.com.br/');
        cy.get('.elementor-element-52a60c1d > .elementor-widget-wrap').should('be.visible');
        cy.get('.elementor-element-9a71f69 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click();
        cy.get('.elementor-element-52a60c1d > .elementor-widget-wrap').should('be.visible');

        cy.get('#rd-text_field-ky4yju92').type('Jorginho1');
        cy.get('#rd-email_field-ky4yju93').type('jorginho1@gmail.com');
        cy.get('#rd-phone_field-ky4yju94').type('2222222222');
        cy.get('#rd-phone_field-ky4yju95').type('3333333333');
        cy.get('#rd-text_field-ky4yju96').type('www.jorginhosites.com.br');
        cy.get('#rd-text_field-ky4yju97').type('empresa de teste do jorginho');
        cy.get('#rd-text_field-ky4yju98').type('CEO de testes');
        cy.get('#rd-select_field-ky4yju99').select('O quanto antes');
        cy.get('#rd-text_area_field-ky4yju9a').type('No ajudas. Apenas testes.');
        cy.get('#rd-text_field-ky4yju92').clear();
        cy.get('#rd-button-kxtrzzkf').click();
        cy.get(':nth-child(1) > label.error').should('contain.text', 'Campo obrigatório');
    })

})


describe('Criando cenário de teste para o site Cocrihar na aba Área do Cliente', () => {

    it('Tentativa de logar com uma conta inexistente', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get(':nth-child(1) > .dg-input__standard > input').type('email123@email.com.br');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
    })


    it('Tentativa de logar com uma conta inexistente, durante a escrita do email, apaga, e tenta logar', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get(':nth-child(1) > .dg-input__standard > input').type('email123@email.com.br');
        cy.get(':nth-child(1) > .dg-input__standard > input').clear();
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
    })


    it('Tentativa de logar com uma conta inexistente, durante a escrita da senha, apaga, e tenta logar', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get(':nth-child(1) > .dg-input__standard > input').type('email123@email.com.br');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get(':nth-child(1) > .dg-input__standard > input').clear();
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
    })


    it('Tentativa de logar com uma conta inexistente, clique no botão Lembrar e tenta logar', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get(':nth-child(1) > .dg-input__standard > input').type('email123@email.com.br');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.dg-checkbox__checkmark').click();
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
    })


    it('Tentativa de logar com uma conta inexistente, entra com o email, clique no botão Lembrar e tenta logar', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get(':nth-child(1) > .dg-input__standard > input').type('email123@email.com.br');
        cy.get('.dg-checkbox__checkmark').click();
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
    })


    it('Tentativa de logar com uma conta inexistente, entra com a senha, clique no botão Lembrar e tenta logar', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.dg-checkbox__checkmark').click();
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
    })


    it('Tentativa de logar com uma conta inexistente, clique no botão Lembrar, desmarque o Lembrar e tenta logar', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get(':nth-child(1) > .dg-input__standard > input').type('email123@email.com.br');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.dg-checkbox__checkmark').click();
        cy.get('.dg-checkbox__checkmark').click();
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
    })


    it('Tentativa de logar com uma conta inexistente, entra com o email e senha, clique no botão Lembrar, limpa o campo senha e tenta logar', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get(':nth-child(1) > .dg-input__standard > input').type('email123@email.com.br');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.dg-checkbox__checkmark').click();
        cy.get(':nth-child(2) > .dg-input__standard > input').clear();
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
    })


    it('Tentativa de logar com uma conta inexistente, entra com o email e senha, clique no botão Lembrar, clica em Esqueceu a senha? e tenta logar', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get(':nth-child(1) > .dg-input__standard > input').type('email123@email.com.br');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.dg-checkbox__checkmark').click();
        cy.get('.dg-link').click();
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
    })


    it('Clicar no botão Esqueceu a senha? e no botão Login', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get('.dg-link').click();
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
    })


    it('Tentativa de logar, preencha o campo email, clique no Login, escreva a senha', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get(':nth-child(1) > .dg-input__standard > input').type('email@email.com');
        cy.get('.dg-button').click();
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');

    })


    it('Tentativa de logar, clique no Login, clique Tente Novamente, clique Esqueceu a senha?, clique Login e botão Login', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
        cy.get('.swal2-confirm').click();
        cy.get('.dg-link').click();
        cy.get('h2').should('have.text', "Esqueceu a senha?");
        cy.get('.router-link-active').click();
        cy.get(':nth-child(2) > .dg-input__standard').should('contain.text', 'Senha');
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
        cy.get('.swal2-confirm').click();
    })


    it('Tentativa de logar, clique no Login, clique Tente Novamente, clique Esqueceu a senha?, clique Login, marca Lembrar e botão Login', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
        cy.get('.swal2-confirm').click();
        cy.get('.dg-link').click();
        cy.get('h2').should('have.text', "Esqueceu a senha?");
        cy.get('.router-link-active').click();
        cy.get(':nth-child(2) > .dg-input__standard').should('contain.text', 'Senha');
        cy.get('.dg-checkbox__checkmark').click();
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
        cy.get('.swal2-confirm').click();
    })


    it('Tentativa de logar, clique no Login, clique Tente Novamente, clique Esqueceu a senha?, clique Login, marca Lembrar, escrever email e senha, apagar ambos e botão Login', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
        cy.get('.swal2-confirm').click();
        cy.get('.dg-link').click();
        cy.get('h2').should('have.text', "Esqueceu a senha?");
        cy.get('.router-link-active').click();
        cy.get(':nth-child(2) > .dg-input__standard').should('contain.text', 'Senha');
        cy.get('.dg-checkbox__checkmark').click();
        cy.get(':nth-child(1) > .dg-input__standard > input').type('email123@email.com.br');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get(':nth-child(1) > .dg-input__standard > input').clear();
        cy.get(':nth-child(2) > .dg-input__standard > input').clear();
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
        cy.get('.swal2-confirm').click();
    })


    it('Tentativa de logar com 5 emails no formato incorreto', () => {
        cy.visit('https://dashboard.agency/cocrihar');
        cy.get('img').should('be.visible');

        cy.get(':nth-child(1) > .dg-input__standard > input').type('email123@email@.com.br');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
        cy.get('.swal2-confirm').click();
        cy.get(':nth-child(1) > .dg-input__standard > input').clear();
        cy.get(':nth-child(2) > .dg-input__standard > input').clear();

        cy.get(':nth-child(1) > .dg-input__standard > input').type('123.@com');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
        cy.get('.swal2-confirm').click();
        cy.get(':nth-child(1) > .dg-input__standard > input').clear();
        cy.get(':nth-child(2) > .dg-input__standard > input').clear();

        cy.get(':nth-child(1) > .dg-input__standard > input').type('@blabla.com2');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
        cy.get('.swal2-confirm').click();
        cy.get(':nth-child(1) > .dg-input__standard > input').clear();
        cy.get(':nth-child(2) > .dg-input__standard > input').clear();

        cy.get(':nth-child(1) > .dg-input__standard > input').type('!!!@com.com');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
        cy.get('.swal2-confirm').click();
        cy.get(':nth-child(1) > .dg-input__standard > input').clear();
        cy.get(':nth-child(2) > .dg-input__standard > input').clear();

        cy.get(':nth-child(1) > .dg-input__standard > input').type('br.com@!!!');
        cy.get(':nth-child(2) > .dg-input__standard > input').type('12345678');
        cy.get('.dg-button').click();
        cy.get('.swal2-popup').should('contain.text', 'Email ou senha está incorreto!');
        cy.get('.swal2-confirm').click();
        cy.get(':nth-child(1) > .dg-input__standard > input').clear();
        cy.get(':nth-child(2) > .dg-input__standard > input').clear();

    }) */

})