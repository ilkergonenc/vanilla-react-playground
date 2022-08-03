import NotFound from '../../src/routes/NotFound';

describe('NotFound.cy.js', () => {
  it('playground', () => {
    cy.mount(<NotFound />);
    cy.get('h1').should('have.text', '404');
  })
})