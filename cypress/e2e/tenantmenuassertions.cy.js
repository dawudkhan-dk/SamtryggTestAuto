import LoginFuntionality from "../support/object/LoginFunctionality";
import MenuAssertion from "../support/object/TenantMenuAssertions";

describe("Menu Assertions", () => {
  it("Tenant Menu Assertions", () => {
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

    const Assert = new MenuAssertion();
    Assert.MenuAssertion();
  });
});
