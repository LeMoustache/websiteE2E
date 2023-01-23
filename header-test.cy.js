describe('test header', () => {

  it('checks Navbar', () => {
    cy.visit('https://LeMustache.net')

    cy.get('#aboutLink').children()
      .should('have.attr','href','https://www.lemustache.net/#aboutFrame')
      .and('contain','About')
      .click()

    cy.get('#contactLink').children()
      .should('have.attr','href','https://www.lemustache.net/#contactFrame')
      .and('contain','Contact')
      .click()

    cy.get('#blogLink').children()
      .should('have.attr','href','https://www.lemustache.net/blog')
      .and('contain','Blog')
      .click()
      .url().should('equal','https://lemustache.net/blog')

      cy.visit('https://LeMustache.net')

    cy.get('#projectLink').children()
      .should('have.attr','href','https://www.lemustache.net/projects')
      .and('contain','Projects')
      .click()
      .url().should('equal','https://lemustache.net/projects')
  })

  it('checks Topbar left', () => {
    cy.visit('https://LeMustache.net')

    cy.get('.site-identity')
      .contains('Le').contains('Mustache')

      .get('#websiteLogoURL')
      .should('have.attr','href','https://www.lemustache.net')
      .click({force: true})

      .get('#logo')
      .should('have.attr','alt','Logo')
      .and('have.attr','src','../assets/leMoustache_Mustache3.png')
  })
})
