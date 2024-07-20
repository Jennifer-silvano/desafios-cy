describe('Transações', () =>{
   
    beforeEach(() =>{
        cy.visit("https://automationexercise.com/")

    });


    it('registro', () => {
        
        cy.contains(" Signup / Login").click()
     
        cy.get('.signup-form')

        cy.get('[data-qa="signup-name"]').type("Ana Julia")
       
        cy.get('[data-qa="signup-email"]').type("anajla5@gmail.com")
    
        cy.get('[data-qa="signup-button"]').click()
    
        cy.get('.login-form > :nth-child(1)')

        cy.get(':nth-child(4) > .top').click
   
        cy.get('#password').type("senha145")

        cy.get('#days').type('2000-07-15'); 

        cy.get('form > :nth-child(7)').click()
    
        cy.get(':nth-child(8) > label').click()
    
        cy.get('[data-qa="first_name"]').type("Ana Julia")

        cy.get('[data-qa="last_name"]').type("Silva")

        cy.get('[data-qa="company"]').type("Empresa WED")
    
        cy.get('[data-qa="address"]').type("Rua São João da esquina")
    
        cy.get('[data-qa="address2"]').type("Casa 345")
    
        cy.get('[data-qa="country"]').select('Canada')
   
        cy.get('[data-qa="state"]').type("São Paulo")
   
        cy.get('[data-qa="city"]').type("Araraquara")
    
        cy.get('[data-qa="zipcode"]').type("05004-030")
    
        cy.get('[data-qa="mobile_number"]').type("(21)999973246")

        cy.contains("Create Account").click()
    
        cy.get('.col-sm-9')

        cy.get('[data-qa="continue-button"]').click()

        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

        cy.get('.col-sm-9')

        cy.get('[data-qa="continue-button"]').click()

    });   


    it(' login', () => {

       cy.contains(" Signup / Login").click()

       cy.get('.login-form')

       cy.clearCookies();
       cy.get('[data-qa="login-email"]').type("rafa123@gmail.com")

       cy.get('[data-qa="login-password"]').type("12345")

       cy.get('[data-qa="login-button"]').click()

      

      

});

   it(' incorreto', () => {

    cy.contains(" Signup / Login").click()

    cy.get('.login-form')

    cy.get('[data-qa="login-email"]').type("ana12@gmail.com")

    cy.get('[data-qa="login-password"]').type("12356")

    cy.get('[data-qa="login-button"]').click()

    cy.get('.login-form > form > p')


    });





  it(' sair', () => {

    cy.contains(" Signup / Login").click()

    cy.clearCookies();
    cy.get('[data-qa="login-email"]').type("manu123@gmail.com")

    cy.get('[data-qa="login-password"]').type("1235")

    cy.get('[data-qa="login-button"]').click()

   
});


  it(' e-mail existente', () => {

    

    cy.contains(" Signup / Login").click()

    cy.get('.signup-form')

    cy.get('[data-qa="signup-name"]').type("fernanda")

    cy.get('[data-qa="signup-email"]').type("fe123@gmail.com")

    cy.get('[data-qa="signup-button"]').click()
});


  it(' fale conosco', () => {
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click()

    cy.get('[data-qa="name"]').type("Rafaela")

    cy.get('[data-qa="email"]').type("rafa123@gmail.com")

    cy.get('[data-qa="subject"]').type("Conta")
  
    cy.get('[data-qa="message"]').type("esta dando senha incorreta")

    cy.get(':nth-child(6) > .form-control').click()

    cy.get('[data-qa="submit-button"]').click()

    cy.get('#form-section > .btn').click()
      
});

});