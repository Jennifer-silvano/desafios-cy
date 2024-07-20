//desafio do 14 ao 19//

describe('Desafio3', () =>{
   
    beforeEach(() =>{
        cy.visit("https://automationexercise.com/")

    });

    it('registrar durante', () => {
        cy.get('.features_items');
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').should('be.visible').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.col-sm-6 > .btn').click();
        cy.get('.modal-body > :nth-child(2) > a > u').click();
        cy.get('[data-qa="signup-name"]').type("Helena");
        cy.get('[data-qa="signup-email"]').type("hele78@gmail.com");
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender2').click();
        cy.get('[data-qa="password"]').type("12345");
        cy.get('[data-qa="days"]').select("23");
        cy.get('[data-qa="months"]').select("June");
        cy.get('[data-qa="years"]').select("2000");
        cy.get('form > :nth-child(7)').click();
        cy.get(':nth-child(8) > label').click();
        cy.get('[data-qa="first_name"]').type("Helena");
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
        cy.get('[data-qa="account-created"]');
        cy.get('[data-qa="continue-button"]').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.col-sm-6 > .btn').click();
        cy.get('#cart_items > .container');
        cy.get('.form-control').type("Estou animada com a compra");
        cy.get(':nth-child(7) > .btn').click();
        cy.get('[data-qa="name-on-card"]').type("Helena Silva da Cruz");
        cy.get('[data-qa="card-number"]').type("5136 2481 2169 1019");
        cy.get('[data-qa="cvc"]').type("812");
        cy.get('[data-qa="expiry-month"]').type("06");
        cy.get('[data-qa="expiry-year"]').type("2026")
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.nav > :nth-child(5)').click()
        cy.get('[data-qa="continue-button"]').click()
        
});

    it('registrar antes', () => {

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type("Brenda");
    cy.get('[data-qa="signup-email"]').type("be86@gmail.com");
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender2').click();
    cy.get('[data-qa="password"]').type("12345");
    cy.get('[data-qa="days"]').select("5");
    cy.get('[data-qa="months"]').select("July");
    cy.get('[data-qa="years"]').select("2001");
    cy.get('form > :nth-child(7)').click();
    cy.get(':nth-child(8) > label').click();
    cy.get('[data-qa="first_name"]').type("Brenda");
    cy.get('[data-qa="last_name"]').type("Silva");
    cy.get('[data-qa="company"]').type("WSV");
    cy.get('[data-qa="address"]').type("RUA DAS HORTÊNCIAS, 659");
    cy.get('[data-qa="address2"]').type("JARDIM PRIMAVERA");
    cy.get('[data-qa="country"]').select("Canada");
    cy.get('[data-qa="state"]').type("São Paulo");
    cy.get('[data-qa="city"]').type("Adolfo");
    cy.get('[data-qa="zipcode"]').type("15230-000");
    cy.get('[data-qa="mobile_number"]').type("(17)3814-1361");
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]');
    cy.get('[data-qa="continue-button"]').click();
    cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('#cart_items > .container');
    cy.get('.form-control').type("meu tamanho é g");
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').type("Brenda Silva da Cruz");
    cy.get('[data-qa="card-number"]').type("5189 4299 4472 2019");
    cy.get('[data-qa="cvc"]').type("735");
    cy.get('[data-qa="expiry-month"]').type("06");
    cy.get('[data-qa="expiry-year"]').type("2026")
    cy.get('[data-qa="pay-button"]').click()
    cy.get('.nav > :nth-child(5)').click()
    cy.get('[data-qa="continue-button"]').click()

});
   

   it('efetue login', () => {
    cy.get('.shop-menu > .nav > :nth-child(4)').click();
    cy.get('[data-qa="login-email"]').type("hele12@gmail.com");
    cy.get('[data-qa="login-password"]').type("12345");
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.get('.col-sm-6 > .btn').click()
    cy.get('#cart_items > .container');
    cy.get('.form-control').type("Estou animada com a compra");
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').type("Helena Silva da Cruz");
    cy.get('[data-qa="card-number"]').type("5136 2481 2169 1019");
    cy.get('[data-qa="cvc"]').type("812");
    cy.get('[data-qa="expiry-month"]').type("06");
    cy.get('[data-qa="expiry-year"]').type("2026")
    cy.get('[data-qa="pay-button"]').click()
    cy.get('.nav > :nth-child(5)').click()
    cy.get('[data-qa="continue-button"]').click()

});


    it('remover produtos', () => {
        cy.get(':nth-child(10) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('#product-6 > .cart_delete > .cart_quantity_delete').click();
        
    });


    it('Exibir categoria', () => {
        cy.get('.left-sidebar');
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click()
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.features_items')
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa').click()
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()
        cy.get('.features_items')

   
    });


    it('produtos da marca', () => {
       cy.get('.shop-menu > .nav > :nth-child(2) > a')
       cy.get('.brands_products')
       cy.get('.brands-name > .nav > :nth-child(1) > a').click()
       cy.get('.features_items')
       cy.get('.brands-name > .nav > :nth-child(2) > a').click()

    });

});