import LoginData from "../fixtures/LoginData.json";
import LoginFuntionality from "../support/object/LoginFunctionality";
import Selector from "../fixtures/Selector.json";
import ViewingData from "../fixtures/viewingData.json";

describe("Login function", () => {
  // using Page object model pattern
  it.only("Login with valid email and password", () => {
    cy.fixture("Selector.json").then((data) => {
      cy.viewport(1200, 800);
      cy.visit(data.Stage01BaseURL);
      cy.wait(3000);
      cy.get(data.Flag).click();
      cy.wait(3000);
      cy.get(data.NavigateSignInPage).click();
    });

    cy.fixture("LoginData.json").then((data) => {
      const ln = new LoginFuntionality();
      ln.valid_Email_and_Valid_Password(
        data.TenantValidEmail,
        data.ValidPassword
      );
    });
  });

  it("Login with valid email and invalid password", () => {
    cy.fixture("Selector.json").then((data) => {
      cy.viewport(1200, 800);
      cy.visit(data.Stage01BaseURL);
      cy.wait(3000);
      cy.get(data.Flag).click();
      cy.wait(3000);
      cy.get(data.NavigateSignInPage).click();
    });

    cy.fixture("LoginData.json").then((data) => {
      const ln = new LoginFuntionality();
      ln.valid_Email_and_Invalid_Password(
        data.TenantValidEmail,
        data.InvalidPassword
      );
    });
  });

  it("Login with invalid email and valid password", () => {
    cy.fixture("Selector.json").then((data) => {
      cy.viewport(1200, 800);
      cy.visit(data.Stage01BaseURL);
      cy.wait(3000);
      cy.get(data.Flag).click();
      cy.wait(3000);
      cy.get(data.NavigateSignInPage).click();
    });

    cy.fixture("LoginData.json").then((data) => {
      const ln = new LoginFuntionality();
      ln.invalid_Email_and_valid_Password(
        data.InvalidEmail,
        data.ValidPassword
      );
    });
  });

  it("Login with invalid email and invalid password", () => {
    cy.fixture("Selector.json").then((data) => {
      cy.viewport(1200, 800);
      cy.visit(data.Stage01BaseURL);
      cy.wait(3000);
      cy.get(data.Flag).click();
      cy.wait(3000);
      cy.get(data.NavigateSignInPage).click();
    });

    cy.fixture("LoginData.json").then((data) => {
      const ln = new LoginFuntionality();
      ln.invalid_Email_and_Invalid_Password(
        data.InvalidEmail,
        data.InvalidPassword
      );
    });
  });
});
