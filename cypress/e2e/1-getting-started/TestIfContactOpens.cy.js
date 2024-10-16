describe('CheckContacts1', () => {

  beforeEach(() => {
    // Navigate to the website before each test
    cy.visit('https://riinojassoo.wixsite.com/shoes');
  });

  it('SearchTest', () => {
    // Search for the element using XPath
    cy.xpath('/html/body/div/div/div[4]/div/header/div[2]/div[2]/div/div/section/div[2]/div[1]/div[2]/div/div[2]/nav/ul/li[2]/a/div/span')
      .should('contain', 'Contact')
      .click();

    // Assert the URL contains 'contact'
    cy.url().should('include', 'contact');
  });

});

describe('CheckContactsForm', () => {

  beforeEach(() => {
    // Visit the website before each test
    cy.visit('https://riinojassoo.wixsite.com/shoes');
  });

  it('SearchTest', () => {
    // Click the contact button using XPath
    cy.xpath('/html/body/div/div/div[4]/div/header/div[2]/div[2]/div/div/section/div[2]/div[1]/div[2]/div/div[2]/nav/ul/li[2]/a/div/span')
      .click();

    // Fill the form by locating elements with their IDs and entering values
    cy.get('#input_comp-m1p3eb6e').type('First'); // First Name
    cy.get('#input_comp-m1p3eb6r').type('Last');  // Last Name
    cy.get('#input_comp-m1p3eb6z').type('practice@practice.com'); // Email
    cy.get('#textarea_comp-m1p3eb76').type('Testing'); // Message

    // Click the send button using XPath
    cy.xpath('/html/body/div/div/div[4]/div/main/div/div/div/div[2]/div/div/div/section[3]/div[2]/div/div/div[2]/div/div[1]/div/div/form/div/div/div[5]/button/span')
      .click();

    // Find the CAPTCHA window and assert it's visible
    cy.xpath('/html/body/div[1]/div/div[6]/div[2]/div/div/h2')
      .should('be.visible')
      .and('contain', 'Verification'); // Verify the text

  });

});

