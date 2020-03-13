
    /// <reference types="cypress" />



    
 describe('Desafio',() => {
        it('Simular o longclick no quadrado', () => {
            cy.visit('https://cdpn.io/choskim/fullpage/RLYebL')
            cy.get('#result').then(iframe => {
                const body = iframe.contents().find('body.center-center')
                cy.wrap(body).trigger("pointerdown", { button: 0 })
                    .find('.square.expand').should('have.css', 'transform', 'matrix(2.5, 0, 0, 2.5, 0, 0)')
                    
         })
     })
})
