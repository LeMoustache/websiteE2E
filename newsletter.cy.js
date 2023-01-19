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