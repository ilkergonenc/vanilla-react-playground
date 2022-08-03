import Home from '../../src/routes/Home';

describe('Home.cy.js', () => {
  it('playground', () => {
    cy.mount(<Home />);
    cy.get('a').should('have.text', 'Learn React');
  })
})