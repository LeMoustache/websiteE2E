describe('test footer', () => {

    it('checks Footer Logo', () => {
      cy.visit('https://www.lemustache.net')
  
      cy.get('.footerLogo').children()
        .should('have.attr','src','assets/leMoustache_Mustache3.png')
    })

    it('checks Footer Links', () => {

        Cypress.Commands.add('mainWebsite',() => {
            cy.visit('https://www.lemustache.net')
        })

        cy.mainWebsite()
    
        cy.get('.footerTitleContent').children()
            .should('contain','LINKS')
            .and('contain','SOCIALS')
            .and('contain','LEMUSTACHE')

        cy.get('.footerTextContent ')
        .get('.footerTextTitleFrame').children().as('links')

        cy.get('@links').contains('About').click().url().should('equal','https://lemustache.net/#aboutFrame')
        cy.get('@links').contains('Contact').click().url().should('equal','https://lemustache.net/#contactFrame')
        cy.get('@links').contains('Projects').click().url().should('equal','https://lemustache.net/projects')
        cy.mainWebsite()

        cy.get('@links').contains('Twitter').should('have.attr','href','https://twitter.com/LeMustache_1')
        cy.get('@links').contains('Github').should('have.attr','href','https://github.com/LeMoustache')
        cy.get('@links').contains('Discord').click().url('https://lemustache.net/#contactFrame')
        cy.mainWebsite()

        cy.get('@links').contains('Recent Project').click().url('https://www.lemustache.net/projects').mainWebsite()
        cy.get('@links').contains('Most Liked Project').click().url('https://www.lemustache.net/projects').mainWebsite()
        cy.get('@links').contains('Other Projects').click().url('https://www.lemustache.net/projects').mainWebsite()
    })

    it('checks email newsletter', () => {

        Cypress.Commands.add('mainWebsite',() => {
            cy.visit('https://www.lemustache.net')
        })
    
        cy.mainWebsite()
    
        const alertShown = cy.stub().as("alertShown")
        cy.on('window:alert', alertShown)
    
        cy.get('.EmailNewslatter').contains('button','Join').as('newsletterButton')
        cy.get('.EmailNewslatter').get('#emailNewsletterInput').as('newsletterInput')
    
        Cypress.Commands.add('clickJoin',() => {
            cy.get('@newsletterButton').click()
        })
    
        Cypress.Commands.add('showAlert',(message)=>{
            cy.get("@alertShown").should("have.been", message)
            cy.on('window:confirm', () => true)
        })
    
        Cypress.Commands.add('enterEmailInput',(email)=>{
            cy.get("@newsletterInput").type(email)
        })
    
        cy.clickJoin()
        cy.showAlert('Please Enter A Valid Email')
    
        cy.enterEmailInput('e@gmail.com')
        cy.clickJoin()
        cy.showAlert('Thank You! A Confirmation Email Has Been Sent')
    })

    it('checks bFooter', () => {
        cy.visit('https://LeMustache.net')
    
        cy.get('.bFooter').children()
          .contains('©2020 LeMustache')
          
          .then('check terms links',()=>{
  
            cy.get('.bFooter').children().children()
            .contains('Terms')
            .should('have.attr','href','https://www.lemustache.net/terms')
            .click()
            .url().should('equal','https://lemustache.net/terms')
  
          })
          
          .then('check privacy links',()=>{
  
            cy.visit('https://LeMustache.net')
            cy.get('.bFooter').children().children()
            .contains('Privacy')
            .should('have.attr','href','https://www.lemustache.net/privacy')
            .click()
            .url().should('equal','https://lemustache.net/privacy')
  
          })
  
      })
  
  })