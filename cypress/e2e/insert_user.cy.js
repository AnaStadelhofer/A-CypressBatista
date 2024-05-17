describe('Validar a funcionalidade de cadastrar usuário', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/users/new')
  })

  it('CT 01 - Verificar quando preenchido todos os campos obrigatórios', () => {
    cy.get('#user_name').type('Ana Carolina')
    cy.get('#user_lastname').type('Stadelhofer')
    cy.get('#user_email').type('ana@teste.com')

    cy.get('.actions').click()

    cy.get('.light-green').should('be.visible')

  })

  it('CT 02 -Verificar quando preenchido todos os campos disponíveis', () => {

    cy.get('#user_name').type('Ana Carolina')
    cy.get('#user_lastname').type('Stadelhofer')
    cy.get('#user_email').type('ana@teste.com')

    cy.get('#user_address').type('Comasa - Joinvile')

    cy.get('#user_university').type('Unyleya')
    cy.get('#user_profile').type('Quality Assurance')
    cy.get('#user_gender').type('Woman')
    cy.get('#user_age').type('21')

    cy.get('.actions').click()
    cy.get('.light-green').should('be.visible')


  })

  it('CT 03 - Verificar quando não foi preenchido nenhum campo', () => {

    cy.get('.actions').click()

    cy.get('#error_explanation').should('be.visible')


  })

  it('CT 04 - Verificar quando preenchido os campos porém o usuário volta', () => {

    cy.get('#user_name').type('Ana Carolina')
    cy.get('#user_lastname').type('Stadelhofer')
    cy.get('#user_email').type('ana@teste.com')

    cy.get('#user_address').type('Comasa - Joinvile')

    cy.get('#user_university').type('Unyleya')
    cy.get('#user_profile').type('Quality Assurance')
    cy.get('#user_gender').type('Woman')
    cy.get('#user_age').type('21')

    cy.get('.waves-light').click()

    cy.get('.orange-text').should('have.text', 'Bem vindo ao Site de Automação do Batista.')

  })

  it('CT 05 - Verificar quando não foi preenchido um e-mail inválido', () => {

    cy.get('#user_name').type('Ana Carolina')
    cy.get('#user_lastname').type('Stadelhofer')
    cy.get('#user_email').type('ana.teste.com')

    cy.get('.actions').click()

    cy.get('#error_explanation > ul > li').should('have.text', 'Email is invalid')

  })

})