import LoginFuntionality from "../support/object/LoginFunctionality";
import MenuAssertion from "../support/object/LandlordMenuAssertions";
describe("Menu Assertions", () => {
  it("Landlord Menu Assertions", () => {
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

    const Assert = new MenuAssertion();
    Assert.Assertion();

    // cy.get("[class='nav-item has-dropdown userName not-click']").click();
    // cy.xpath(
    //   "(//div[@class='dropdown-icon']//i[@class='dropdown-icon__i dropdown-icon__i--overview'])[2]"
    // ).click({ force: true });
    // cy.get('div[class="mod-header"] h1').should("have.text", "Booked viewings");
    // cy.get("[class='nav-item has-dropdown userName not-click']").click();
    // cy.xpath(
    //   "(//div[@class='dropdown-icon']//i[@class='dropdown-icon__i dropdown-icon__i--contracts-n-payments'])[2]"
    // ).click({ force: true });

    // cy.get('[class="mod-header"] h1').eq(0).should("have.text", "Contract");
    // cy.get('[class="mod-header"] h1').eq(1).should("have.text", "Payments");
    // cy.get("[class='nav-item has-dropdown userName not-click']").click();
    // // cy.get('[class="dropdown-icon"]').contains("Settings");
    // cy.get('li a[href="/Account/Settings"]').eq(1).click({ force: true });
    // cy.get('[class="mod-header"]')
    //   .eq(0)
    //   .should("have.text", "\n            Contact preferences\n        ");
    // cy.get('[class="row"] h4').should(
    //   "have.text",
    //   "Contact preferences - I want the following information:"
    // );
    // cy.get('[class="settings-content__left col medium-7"] h6')
    //   .eq(0)
    //   .should("have.text", "Contact information");
    // cy.get('[id="LPPPhoneInput"]').should("be.visible");
    // cy.get('[id="email"]').should("be.visible");
    // cy.get('[id="langauge"]').should("be.visible");
    // cy.get('[class="settings-content__left col medium-7"] h6')
    //   .eq(1)
    //   .should("have.text", "Verify your personal number with BankID");
    // cy.get('[id="ssn"]').should("be.visible");
    // cy.get('[id="BankIdLoginBtn"]').should("be.visible");
    // cy.get('[type="button"]')
    //   .contains("Sign in via QR code")
    //   .should("be.visible");
    // cy.get('[class="settings-content__left col medium-7"] h6')
    //   .eq(2)
    //   .should("have.text", "Change password");
    // cy.get('[id="OldPass"]').should("be.visible");
    // cy.get('[id="Pass"]').should("be.visible");
    // cy.get('[id="ConfirmPass"]').should("be.visible");
    // cy.get('[onclick="return ValidatePasswords();"]');
    // cy.get('[type="submit"][value="I want to become a tenant"]').should(
    //   "be.visible"
    // );
    // cy.get('[class="mod-header"] h1')
    //   .eq(1)
    //   .should("have.text", "Update email address");
    // cy.get('[id="existingEmail"]').should("be.visible");
    // cy.get('[id="newEmail"]').should("be.visible");
    // cy.get('[id="confirmEmail"]').should("be.visible");
    // cy.get('[type="submit"][value="Update email address"]').should(
    //   "be.visible"
    // );
    // cy.get("[class='nav-item has-dropdown userName not-click']").click();
    // cy.get('li a[href="/Account/LogOff"]').eq(1).click({ force: true });
    // cy.get('[class="top-section-panel__h1"]').should(
    //   "have.text",
    //   "Explore your future home"
    // );
  });
});
