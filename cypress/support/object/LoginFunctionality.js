import Selector from "../../fixtures/Selector.json";

const { SignInPage } = Selector;

class LoginFuntionality {
  valid_Email_and_Valid_Password(email, password) {
    cy.get(SignInPage.Header).should("be.visible");
    cy.get(SignInPage.EmailPlaceholder).should("be.visible").type(email);
    cy.get(SignInPage.PasswordPlaceholder).should("be.visible").type(password);
    cy.get(SignInPage.SignInButton).should("be.visible").click();
    cy.get(SignInPage.VerifyCodeCloseIcon).should("be.visible").click();
    // cy.get(SignInPage.LoginedPageHeader).should("be.visible");
  }

  valid_Email_and_Invalid_Password(email, password) {
    cy.get(SignInPage.Header).should("be.visible");
    cy.get(SignInPage.EmailPlaceholder).should("be.visible").type(email);
    cy.get(SignInPage.PasswordPlaceholder).should("be.visible").type(password);
    cy.get(SignInPage.SignInButton).should("be.visible").click();
    cy.get(SignInPage.NotLoginedValidationMessage).should("be.visible");
  }

  invalid_Email_and_valid_Password(email, password) {
    cy.get(SignInPage.Header).should("be.visible");
    cy.get(SignInPage.EmailPlaceholder).should("be.visible").type(email);
    cy.get(SignInPage.PasswordPlaceholder).should("be.visible").type(password);
    cy.get(SignInPage.SignInButton).should("be.visible").click();
    cy.get(SignInPage.NotLoginedValidationMessage).should("be.visible");
  }

  invalid_Email_and_Invalid_Password(email, password) {
    cy.get(SignInPage.Header).should("be.visible");
    cy.get(SignInPage.EmailPlaceholder).should("be.visible").type(email);
    cy.get(SignInPage.PasswordPlaceholder).should("be.visible").type(password);
    cy.get(SignInPage.SignInButton).should("be.visible").click();
    cy.get(SignInPage.NotLoginedValidationMessage).should("be.visible");
  }
}

export default LoginFuntionality;
