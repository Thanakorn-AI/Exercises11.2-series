// Exercises11.2-series/cypress/e2e/pokedex.cy.js
describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('can navigate to ivysaur page', () => {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})