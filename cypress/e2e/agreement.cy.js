import LoginFuntionality from "../support/object/LoginFunctionality";
import CreateAd from "../support/object/CreateAd";
import Viewing from "../support/object/Viewing";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Book a Viewing", () => {
  it("landlord Edit an Ad", () => {
    // Landlord Login
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
        data.LandlordEmailForAgreement,
        data.ValidPassword
      );
    });
    cy.fixture("Selector.json").then((data) => {
      cy.get(data.Flag).click();
    });

    cy.fixture("CreateAd.json").then((data) => {
      const ln = new CreateAd();
      ln.LandlordCreateAd(
        data.AddressForViewing,
        data.NumberOfStairs,
        data.MonthlyRent,
        data.NumberOfRoom,
        data.SquareMeterArea,
        data.Description,
        data.Furnishing
      );
    });
  });

  it.only("Tenant Book a Viewing", () => {
    // Tenant login
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
        data.TenantEmailForAgreement,
        data.ValidPassword
      );
    });

    // Tenant Book a Viewing
    const ln = new Viewing();
    ln.TenantBookViewing();
    ln.CancelViewing();
    // ln.ReviewViewing();
  });
});
