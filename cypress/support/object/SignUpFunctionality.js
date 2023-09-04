import Selector from "../../fixtures/Selector.json";

const { SignUpPage } = Selector;
class SignUpFunctionality {
  signUpForTenant(FirstName, LastName, PhoneNo, Email, Password, CPassword) {
    cy.get(SignUpPage.Header).should("be.visible");
    cy.get(SignUpPage.ChooseTenant).should("be.visible").click();
    cy.get(SignUpPage.FirstNamePlaceholder)
      .should("be.visible")
      .type(FirstName);
    cy.get(SignUpPage.LastNamePlaceholder).should("be.visible").type(LastName);
    cy.get(SignUpPage.PhoneNumberPlaceholder)
      .should("be.visible")
      .type(PhoneNo);
    cy.get(SignUpPage.EmailPlaceholder).should("be.visible").type(Email);
    cy.get(SignUpPage.Password).should("be.visible").type(Password);
    cy.get(SignUpPage.ConfirmPasswordPlaceholder)
      .should("be.visible")
      .type(CPassword);
    cy.get(SignUpPage.CreateYourFreeAccountButton).should("be.visible").click();
    cy.get(SignUpPage.VerifyEmail).should("be.visible");
  }

  signUpForLandlord(FirstName, LastName, PhoneNo, Email, Password, CPassword) {
    cy.get(SignUpPage.Header).should("be.visible");
    cy.get(SignUpPage.ChooseLandlord).should("be.visible").click();
    cy.get(SignUpPage.FirstNamePlaceholder)
      .should("be.visible")
      .type(FirstName);
    cy.get(SignUpPage.LastNamePlaceholder).should("be.visible").type(LastName);
    cy.get(SignUpPage.PhoneNumberPlaceholder)
      .should("be.visible")
      .type(PhoneNo);
    cy.get(SignUpPage.EmailPlaceholder).should("be.visible").type(Email);
    cy.get(SignUpPage.Password).should("be.visible").type(Password);
    cy.get(SignUpPage.ConfirmPasswordPlaceholder)
      .should("be.visible")
      .type(CPassword);
    cy.get(SignUpPage.CreateYourFreeAccountButton).click();
    cy.get(SignUpPage.VerifyEmail).should("be.visible");
  }
}

export default SignUpFunctionality;
