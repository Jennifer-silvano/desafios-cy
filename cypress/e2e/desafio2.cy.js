//desafio do 7 ao 13



describe('testes-desafio', () =>{
    
    beforeEach(() =>{
        cy.visit("https://automationexercise.com/")
    });
    
    it('verificar caso de testes', () => {
       
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    });

    
    it('verificar produtos', () => {
        
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.features_items');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('.product-information');
    });

    it('Pesquisar produto', () => {
       
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.features_items');
        cy.get('#search_product').type("POLO");
        cy.get('#submit_search').click();

        
    });

    
    it('verificar assinatura', () => {
       
        cy.get('.single-widget');
        cy.get('#susbscribe_email').type("rebeca123@gmail.com");
        cy.get('#subscribe').click()
        cy.get('.alert-success').should("have.text", "You have been successfully subscribed!")
  
    });

    it('Assinatura no carrinho', () => {
        
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.col-sm-3');
        cy.get('#susbscribe_email').type("helena123@gmail.com");
        cy.get('#subscribe').click();
        cy.get('.alert-success');
        cy.get('#cart_info');
     

        
    });
    
    it('produtos no carrinho', () => {
        
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').scrollIntoView().should('be.visible').click();
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('u').scrollIntoView().should('be.visible').click();
        cy.get('#product-1 > .cart_quantity');
        cy.get('#product-2 > .cart_quantity');
        cy.get('#product-1 > .cart_total > .cart_total_price');
        cy.get('#product-2 > .cart_total > .cart_total_price');
    
    });

    
    it('quantidade-de-produtos', () => {
        cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('.product-information');
        cy.get('#quantity').clear().type("4");
        cy.get(':nth-child(5) > .btn').click();
        cy.get('u').scrollIntoView().should('be.visible').click();
        cy.get('.cart_quantity')
    });


});

    
    
           

 

    






