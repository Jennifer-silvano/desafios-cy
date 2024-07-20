


describe('Desafio4', () =>{

    beforeEach(() =>{
        cy.visit("https://automationexercise.com/")

    });

    it('pesquisar e verificar', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('#search_product').type("DRESS");
        cy.get('#submit_search').click()
        cy.get('.features_items')
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-content');
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-content');
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-content');
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('#cart_items > :nth-child(1)')
        cy.get(':nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type("be10@gmail.com")
        cy.get('[data-qa="login-password"]').type("12345")
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('#cart_items > :nth-child(1)')


    })

    it('adicionar revisao', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.features_items');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('.category-tab');
        cy.get('#name').type("Rebeca")
        cy.get('#email').type("reb123@gmail.com");
        cy.get('#review').type("Olha eu achei incrivel, ficou perfeito em mim");
        cy.get('#button-review').click();
        cy.get('.alert-success > span').should("have.text","Thank you for your review.");
});

    it('itens recomendados', () => {
        cy.get('.recommended_items');
        cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-content');
        cy.get('u').click()
        cy.get('#cart_items > :nth-child(1)')

    })


    it('verificar detalhes', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="signup-name"]').type("Vera");
        cy.get('[data-qa="signup-email"]').type("ve@gmail.com");
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender2').click();
        cy.get('[data-qa="password"]').type("12345");
        cy.get('[data-qa="days"]').select("30");
        cy.get('[data-qa="months"]').select("March");
        cy.get('[data-qa="years"]').select("1990");
        cy.get('form > :nth-child(7)').click();
        cy.get(':nth-child(8) > label').click();
        cy.get('[data-qa="first_name"]').type("Vera");
        cy.get('[data-qa="last_name"]').type("Silva");
        cy.get('[data-qa="company"]').type("ERV");
        cy.get('[data-qa="address"]').type("Rua Joaquim Nabuco, 402 - Casa");
        cy.get('[data-qa="address2"]').type("Centro");
        cy.get('[data-qa="country"]').select("Canada");
        cy.get('[data-qa="state"]').type("São Paulo");
        cy.get('[data-qa="city"]').type("Adamantina");
        cy.get('[data-qa="zipcode"]').type("17800-000");
        cy.get('[data-qa="mobile_number"]').type("(18)3521-3239");
        cy.get('[data-qa="create-account"]').click();
        cy.get('.col-sm-9');
        cy.get('[data-qa="continue-button"]').click();
        cy.get(':nth-child(10) > a');
        cy.get(':nth-child(9) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-content');
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('#cart_items > :nth-child(1)');
        cy.get('.col-sm-6 > .btn').click();
        cy.get('#address_delivery');
        cy.get('#address_invoice');
        cy.get(':nth-child(5) > a').click();
        cy.get('.col-sm-9');
        cy.get('[data-qa="continue-button"]').click()

    }) 
    
    it('Baixar fatura', () => {
        cy.get(':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-content');
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('#cart_items > :nth-child(1)')
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.modal-content')
        cy.get('.modal-body > :nth-child(2) > a > u').click()
        cy.get('[data-qa="signup-name"]').type("Beatriz");
        cy.get('[data-qa="signup-email"]').type("be97@gmail.com");
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender2').click();
        cy.get('[data-qa="password"]').type("12345");
        cy.get('[data-qa="days"]').select("30");
        cy.get('[data-qa="months"]').select("March");
        cy.get('[data-qa="years"]').select("1990");
        cy.get('form > :nth-child(7)').click();
        cy.get(':nth-child(8) > label').click();
        cy.get('[data-qa="first_name"]').type("Beatriz");
        cy.get('[data-qa="last_name"]').type("Silva");
        cy.get('[data-qa="company"]').type("ERV");
        cy.get('[data-qa="address"]').type("Rua Joaquim Nabuco, 402 - Casa");
        cy.get('[data-qa="address2"]').type("Centro");
        cy.get('[data-qa="country"]').select("Canada");
        cy.get('[data-qa="state"]').type("São Paulo");
        cy.get('[data-qa="city"]').type("Adamantina");
        cy.get('[data-qa="zipcode"]').type("17800-000");
        cy.get('[data-qa="mobile_number"]').type("(18)3521-3239");
        cy.get('[data-qa="create-account"]').click();
        cy.get('.col-sm-9');
        cy.get('[data-qa="continue-button"]').click();
        cy.get(':nth-child(10) > a')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('#address_delivery')
        cy.get('#address_invoice')
        cy.get('#cart_info')
        cy.get('.form-control').type("Espero que venha certinho")
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type("Beatriz Silva da Cruz");
        cy.get('[data-qa="card-number"]').type("5136 2481 2169 1019");
        cy.get('[data-qa="cvc"]').type("812");
        cy.get('[data-qa="expiry-month"]').type("06");
        cy.get('[data-qa="expiry-year"]').type("2026")
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.col-sm-9')
       // cy.url().should('include', '/payment_done/400');
       // cy.get('.col-sm-9 > .btn-default', { timeout: 120000 }).should('be.visible').click()
       // cy.downloadFile('https://automationexercise.com/download_invoice/400', 'cypress/downloads', 'invoice.txt');
      //  cy.readFile('cypress/downloads/invoice.txt').should('contain','Hi Beatriz Silva, Your total purchase amount is 400. Thank you');
       // cy.log("Invoice has been downloaded successfully!")
        cy.get('[data-qa="continue-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('.col-sm-9')
        cy.get('[data-qa="continue-button"]').click()
        //tentei mas nao consegui

    });

    it('usando o botao', () => {
        cy.get('.footer-widget > .container > .row > .col-sm-3')
        cy.get('#scrollUp')
        cy.get('#scrollUp > .fa').click({ force: true })
        cy.get('.active > :nth-child(1) > h2')
    })

    it('sem o botao', () => {
        cy.get('.footer-widget > .container > .row')
        cy.get('.active > :nth-child(1) > h2')
        
    })
});