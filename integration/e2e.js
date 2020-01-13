describe('Cypress bug', () => {
  const LONG_TIMEOUT_OPTION = {
    timeout: 10000,
  }

  beforeEach(() => {
    cy.viewport('macbook-15')
  })

  it('should visit Google', () => {
    cy.visit('/')
    cy.contains('About').click()
    cy.contains(
      'Our mission is to organise the world’s information and make it universally accessible and useful.', LONG_TIMEOUT_OPTION)
    cy.contains('See what we build').scrollIntoView().click({ force: true })
    cy.contains(
      'Learn more', LONG_TIMEOUT_OPTION)
  })

  it('should visit Google', () => {
    cy.visit('/')
    cy.contains('About').click()
    cy.contains('Something that the page does not contain', LONG_TIMEOUT_OPTION)
  })
})
