import LoginFuntionality from "../support/object/LoginFunctionality";
import CreateAd from "../support/object/CreateAd";

describe("Landlord Create an Ad", () => {
  it("Create an Ad", () => {
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
        data.LandlordValidEmail,
        data.ValidPassword
      );
    });

    cy.fixture("CreateAd.json").then((data) => {
      const ln = new CreateAd();
      ln.LandlordCreateAd(
        data.Address,
        data.NumberOfStairs,
        data.MonthlyRent,
        data.NumberOfRoom,
        data.SquareMeterArea,
        data.Description,
        data.Furnishing
      );
    });
  });
});
