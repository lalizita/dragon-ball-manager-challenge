/// <reference types="cypress" />

context('Testing shenlong invocation', () => {
  before(() => {
    cy.visit('http://localhost:3000/dragon-ball-manager')
  })
  it('Should not invocate if user doesnt have 7 dragon balls', () => {
    cy.get('[data-testid="card-shenlong"]').should('exist')
    cy.get('[data-testid="invoke-button"]').click()
    cy.get('[data-testid="modaltext"]').should('contain.text', 'Você não tem todas as esferas para invocar o shenlong')
    cy.get('[data-testid="back"]').click()
  })
})