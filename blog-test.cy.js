describe('test footer', () => {

    it('checks Footer Links', () => {

        cy.visit('https://lemustache.net/blog')

         cy.get('.blogHolder').as('blogHolder')

         cy.get('@blogHolder')
         .children()
         .get('h3').should('not.to.match',':empty').and('have.class','blogTitle')
         .get('p').should('not.to.match',':empty').and('have.class','blogSummary')

         .get('.tagsAndDate')
         .get('.blogTag').should('not.to.match',':empty').each(($tag,index)=>
            cy.get($tag).should('contain','#')
         )

         .get('.blogDate').should('not.to.match',':empty').each(($date,index)=>
            cy.get($date).should('contain','.')
         )
    })
  
  })