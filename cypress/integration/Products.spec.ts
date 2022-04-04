describe('Test products page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should check products page', () => {
    cy.get('[data-test=products]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=products-title]')
      .should('exist')
      .and('be.visible')
      .and('contain', 'Products')
      .and('have.class', 'title')

    cy.get('[data-test=filters]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=filters-search-input]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=filters-page-size-selector]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=filters-sort-selector]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-test=product-item]')
      .should('exist')
      .and('be.visible')
      .and('have.length', 10)
    cy.get('[data-test=product-item-image]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=product-item-price]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=product-item-brand]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=product-item-description]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=product-item-btn-buy]')
      .should('exist')
      .and('be.visible')

    cy.get('[data-test=paginator]').should('exist')
    cy.get('[data-test=paginator-next-page]').should('exist')
    cy.get('[data-test=paginator-prev-page]').should('exist')
    cy.get('[data-test=paginator-page-number]').should('exist')
  })

  it('should check search products with palindrome', () => {
    cy.get('[data-test=filters-search-input]')
      .should('exist')
      .and('be.visible')
      .type('adda')

    cy.get('[data-test=product-item]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=product-item-discount]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=product-item-discount-price]')
      .should('exist')
      .and('be.visible')
  })

  it('should check search products with palindrome', () => {
    cy.get('[data-test=filters-search-input]').type('adda')

    cy.get('[data-test=product-item]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=product-item-discount]')
      .should('exist')
      .and('be.visible')
    cy.get('[data-test=product-item-discount-price]')
      .should('exist')
      .and('be.visible')
  })

  it('should check change page size', () => {
    cy.get('[data-test=product-item]').should('have.length', 10)
    cy.get('[data-test=filters-page-size-selector]').select('20')
    cy.get('[data-test=product-item]').should('have.length', 20)
    cy.get('[data-test=filters-page-size-selector]').select('50')
    cy.get('[data-test=product-item]').should('have.length', 50)
  })

  it('should check paginator', () => {
    cy.get('[data-test=paginator]').should('exist')

    cy.get('[data-test=paginator-page-number]')
      .should('exist')
      .and('be.visible')
      .eq(0)
      .should('contain', '1')
      .and('have.css', 'background-color', 'rgb(0, 113, 220)')

    cy.get('[data-test=paginator-next-page]')
      .should('exist')
      .and('be.visible')
      .click()

    cy.get('[data-test=paginator-page-number]')
      .eq(1)
      .should('contain', '2')
      .and('have.css', 'background-color', 'rgb(0, 113, 220)')

    cy.get('[data-test=paginator-prev-page]')
      .should('exist')
      .and('be.visible')
      .click()

    cy.get('[data-test=paginator-page-number]')
      .eq(0)
      .and('have.css', 'background-color', 'rgb(0, 113, 220)')
    
  })
})

export {}
