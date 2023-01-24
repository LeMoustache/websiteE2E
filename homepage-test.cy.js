

describe('test homepage', () => {

    it('checks about me', () => {
      cy.visit('https://www.lemustache.net')
  
      cy.get('.aboutContainer')
      .find("h3").contains("About Me")

      cy.get('.aboutContainer')
      .find(".abMainFrame").children().each(($children)=>
            cy.get($children).should("not.to.match",":empty")
      )
    })

    it('checks top', () => {
        cy.visit('https://www.lemustache.net')

        cy.get(".mContent").as("content")
        .find(".Title").children().contains("LeMustache")

        const text = ["Amateur Programmer.","Amateur Engineer.","Amateur Human Being."]
        cy.get("@content").find(".tText").children().each(($elem,index)=>
            cy.get($elem).should("not.to.match",":empty").and("to.contain",text[index])
        )

        const links = ["https://github.com/LeMoustache","https://twitter.com/LeMustache_1","https://www.patreon.com/LeMustache"]
        cy.get("@content").find(".Links").children().each(($elem,index)=>
            cy.get($elem).should("have.attr","href",links[index]).find("ion-icon")
        )

        const imgLinks = ["https://icons8.com/illustrations/author/8EFXLhT3w7gp","https://icons8.com/illustrations/author/zD2oqC8lLBBA","https://icons8.com/illustrations"]
        const imgLinkText = [" Maria Shukshina"," & Icons 8","Ouch!"]
        cy.get("@content").contains("Illustration by").and("contain","from")

        cy.get("@content").find(".Logo").find("img").should("have.attr","src","assets/flame-792.png")
        cy.get("@content").find(".Logo").find("a").each(($elem,index)=>
            cy.get($elem).should("have.attr","href",imgLinks[index]).and("contain",imgLinkText[index])
        )

        cy.viewport(499,200)
        cy.visit('https://www.lemustache.net')

        cy.get(".pc").should("not.exist")

    })

        it('checks experience', () => {
          cy.visit('https://www.lemustache.net')

          cy.get('.experienceFrame')
            .find("h3").contains("Experience")
          cy.get('.experienceFrame')
            .find(".experienceHolder").each(($elem)=>
                cy.get($elem).find("p").should("not.to.match",":empty").parent().find("ion-icon")
            )
        })

  
  })