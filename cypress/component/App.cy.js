import App from '../../src/App';

describe('App.cy.js', () => {
  it('playground', () => {
    cy.mount(<App />);
    cy.get('a').should('have.text', 'Learn React');
  })
})