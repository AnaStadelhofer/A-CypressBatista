describe('Validar a funcionalidade de listar usuários', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/users')
    })
  
    it('CT 06 - Verificar os usuários criados na listagem', () => {

        cy.get('.waves-light').click()
        
        cy.get('#user_name').type('Ana Carolina')
        cy.get('#user_lastname').type('Stadelhofer')
        cy.get('#user_email').type('ana@teste.com')
    
        cy.get('.actions').click()
        cy.get('.red').click()

        cy.get(':nth-child(4) > .col').should('contain', 'Ana Carolina')

    })
  
    it.only('CT 07 - Verificar a visualização do registro de um usuário', () => {

        cy.get(':nth-child(1) > :nth-child(9) > .material-icons').click()
        cy.get('.col > .blue').should('be.visible')
        cy.get('.red').should('be.visible')

    })
  
    it('CT 08 - Verificar a exclusão de um usuário', () => {

        cy.get('.waves-light').click()
        
        cy.get('#user_name').type('Ana Carolina')
        cy.get('#user_lastname').type('Stadelhofer')
        cy.get('#user_email').type('ana@teste.com')
    
        cy.get('.actions').click()
        cy.get('.red').click()
        cy.get(':nth-child(1) > :nth-child(11) > .material-icons').click()

        cy.get('#notice').should('have.text', 'Seu Usuário foi removido com sucesso!')
    })
  
    it('CT 09 - Verificar a edição do usuário durante a visualização de registro do usuário', () => {
        cy.get('.waves-light').click()
        
        cy.get('#user_name').type('Ana Carolina')
        cy.get('#user_lastname').type('Stadelhofer')
        cy.get('#user_email').type('ana@teste.com')
    
        cy.get('.actions').click()
        cy.get('.red').click()
        cy.get(':nth-child(1) > :nth-child(9) > .material-icons').click()
        cy.get('.col > .blue').click()

        cy.get('.tamanhodiv2 > .center').should('have.text', 'Editar Usuário!!')

    })
  
    it('CT 10 - Verificar a edição do usuário pela listagem', () => {

        cy.get(':nth-child(1) > :nth-child(10) > .material-icons').click()
        cy.get('.tamanhodiv2 > .center').should('have.text', 'Editar Usuário!!')

    })
  
})