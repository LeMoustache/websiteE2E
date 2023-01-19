describe('test footer', () => {

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