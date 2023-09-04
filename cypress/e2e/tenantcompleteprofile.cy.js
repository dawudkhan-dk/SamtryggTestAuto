import LoginFuntionality from "../support/object/LoginFunctionality";
import CompleteProfile from "../support/object/CompleteProfile";
import TCompleteProfileData from "../fixtures/TCompleteProfileData.json";

// const address = Test.toString()
// const {Tenant} = TCompleteProfileDa/ta;

describe("CompleteTenantProfile", () => {
  it("Tenant Complete Profile", () => {
    Cypress.once("uncaught:exception", (err, runnable) => {
      return false;
    });

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

    cy.fixture("TCompleteProfileData.json").then((data) => {
      const ln = new CompleteProfile();
      ln.TenantProfileComplete(
        data.FirstName,
        data.SurName,
        data.PhoneNumber,
        data.Description,
        data.Household,
        data.Smoker,
        data.FormOfEmployment,
        data.Profession,
        data.Education,
        data.Pets,
        data.NumberOfRooms,
        data.Area,
        data.SliderText,
        data.SliderTextCSS,
        data.SliderbarCSS,
        data.Slider,
        data.Address
      );
    });
  });
});
