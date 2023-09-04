import SignUpFunctionality from "../support/object/SignUpFunctionality";
import Selector from "../fixtures/Selector.json";
import SignUpData from "../fixtures/SignUpData.json";

const { TenantSignUpData, LandlordSignUpData } = SignUpData;

describe("Signup Functionality", () => {
  it("Tenant SignUp", () => {
    Cypress.once("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture("Selector.json").then((data) => {
      cy.viewport(1200, 800);
      cy.visit(data.Stage01BaseURL);
      cy.wait(3000);
      cy.get(data.Flag).click();
      cy.wait(3000);
      cy.get(data.NavigateSignUpPage).click();
    });

    const TenantSignUp = new SignUpFunctionality();
    TenantSignUp.signUpForTenant(
      TenantSignUpData.FirstName,
      TenantSignUpData.LastName,
      TenantSignUpData.PhoneNumber,
      TenantSignUpData.Email,
      TenantSignUpData.Password,
      TenantSignUpData.ConfirmPassword
    );
  });

  it("Landlord SignUp", () => {
    Cypress.once("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture("Selector.json").then((data) => {
      cy.viewport(1200, 800);
      cy.visit(data.Stage01BaseURL);
      cy.wait(3000);
      cy.get(data.Flag).click();
      cy.wait(3000);
      cy.get(data.NavigateSignUpPage).click();
    });

    const LandlordSign = new SignUpFunctionality();
    LandlordSign.signUpForLandlord(
      LandlordSignUpData.FirstName,
      LandlordSignUpData.LastName,
      LandlordSignUpData.PhoneNumber,
      LandlordSignUpData.Email,
      LandlordSignUpData.Password,
      LandlordSignUpData.ConfirmPassword
    );
  });
});
