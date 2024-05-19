describe('Validar a funcionalidade de cadastrar usuário', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/users/new')
  })

  it('CT 01 - Verificar quando preenchido todos os campos obrigatórios', () => {

    cy.CreateUser('Ana Carolina', 'Stadelhofer', 'ana@teste.com')
    cy.get('.light-green').should('be.visible')

  })

  it('CT 02 -Verificar quando preenchido todos os campos disponíveis', () => {

    cy.CreateFullUser('Ana Carolina', 'Stadelhofer', 'ana@teste.com', 'Comasa - Joinvile', 'Unyleya', 'Quality Assurance', 'Female', '21')
    cy.get('.light-green').should('be.visible')

  })

  it('CT 03 - Verificar quando não foi preenchido nenhum campo', () => {

    cy.get('.actions').click()
    cy.get('#error_explanation').should('be.visible')

  })

  it('CT 04 - Verificar quando preenchido os campos porém o usuário volta', () => {

    cy.CreateFullUser('Ana Carolina', 'Stadelhofer', 'ana@teste.com', 'Comasa - Joinvile', 'Unyleya', 'Quality Assurance', 'Female', '21')
    cy.get('.red').click()
    cy.get('.tamanhodiv2 > .center').should('have.text', 'Lista de Usuários!!')

  })

  it('CT 05 - Verificar quando não foi preenchido um e-mail inválido', () => {

    cy.CreateUser('Ana Carolina', 'Stadelhofer', 'ana.teste.com')
    cy.get('.actions').click()
    cy.get('#error_explanation > ul > li').should('have.text', 'Email is invalid')

  })
})