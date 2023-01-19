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
  
  })