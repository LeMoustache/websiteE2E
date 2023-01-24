describe('test footer', () => {

    it('checks project page', () => {

        cy.visit('https://lemustache.net/projects')

        cy.get('.topFrame').children()
        .should('contain','PROJECTS')

         cy.get('.projectHolder').as('projectHolder')

         cy.get('@projectHolder')
         .get(".project").get(".gallery").as("gallery")
         .get('a').should('have.class','projectLink').and('have.attr','href').then(href => {
               expect(href).to.contain('?projectid');
         }).get('img').should('have.class','projectImg').and('have.attr','src').then(src => {
            expect(src).to.contain('.png');
         })

         cy.get('@gallery').get(".desc")
         .get('.projectName').each(($name,index)=>
            cy.get($name).should('not.to.match',':empty')
         )
         .get('.projectDetails').each(($details,index)=>
            cy.get($details).should('not.to.match',':empty')
          )

         .get(".projectDate").each(($date,index)=>
            cy.get($date).should('not.to.match',':empty').and('contain','.')
         )

         .get("ion-icon")
    })
  
  })