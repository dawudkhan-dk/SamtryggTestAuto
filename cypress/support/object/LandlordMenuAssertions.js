import Selector from "../../fixtures/Selector.json";

const { LandlordAssertion } = Selector;

class LandlordMenuAssertion {
  Assertion() {
    cy.get(LandlordAssertion.Menu).click();
    cy.xpath(LandlordAssertion.Overview).click({ force: true });
    cy.get(LandlordAssertion.OverviewHeader1).should(
      "have.text",
      LandlordAssertion.OverviewHeader1Text
    );

    cy.get(LandlordAssertion.Menu).click();
    cy.xpath(LandlordAssertion.ContractnPayments).click({ force: true });
    cy.get(LandlordAssertion.CnPHeader1)
      .eq(0)
      .should("have.text", LandlordAssertion.CnPHeader1Text);
    cy.get(LandlordAssertion.CnPHeader2)
      .eq(1)
      .should("have.text", LandlordAssertion.CnPHeader2Text);

    cy.get(LandlordAssertion.Menu).click();
    // cy.get('[class="dropdown-icon"]').contains("Settings");
    cy.get(LandlordAssertion.Settings).eq(1).click({ force: true });
    cy.get(LandlordAssertion.SettingsHeader1)
      .eq(0)
      .should("have.text", LandlordAssertion.SettingsHeader1Text);
    cy.get(LandlordAssertion.Information).should(
      "have.text",
      LandlordAssertion.InformationText
    );
    cy.get(LandlordAssertion.ContactInformationHeader)
      .eq(0)
      .should("have.text", LandlordAssertion.ContactInformationHeaderText);
    cy.get(LandlordAssertion.PhoneNumber).should("be.visible");
    cy.get(LandlordAssertion.Email).should("be.visible");
    cy.get(LandlordAssertion.Language).should("be.visible");

    cy.get(LandlordAssertion.BankIDHeader)
      .eq(1)
      .should("have.text", LandlordAssertion.BankIDHeaderText);
    cy.get(LandlordAssertion.SSNField).should("be.visible");
    cy.get(LandlordAssertion.BankIDLoginButton).should("be.visible");
    cy.get(LandlordAssertion.LogInWithQRCodeButton)
      .contains(LandlordAssertion.LogInWithQRCodeButtonText)
      .should("be.visible");
    cy.get(LandlordAssertion.ChangePasswordHeader)
      .eq(2)
      .should("have.text", LandlordAssertion.ChangePasswordHeaderText);
    cy.get(LandlordAssertion.OldPassword).should("be.visible");
    cy.get(LandlordAssertion.NewPassword).should("be.visible");
    cy.get(LandlordAssertion.ConfirmPassword).should("be.visible");
    cy.get(LandlordAssertion.SavedChangesButton).should("be.visible");
    cy.get(LandlordAssertion.IWantToBecomeATenantButton).should("be.visible");
    cy.get(LandlordAssertion.SettingsHeader2)
      .eq(1)
      .should("have.text", LandlordAssertion.SettingsHeader2Text);
    cy.get(LandlordAssertion.ExistingEmail).should("be.visible");
    cy.get(LandlordAssertion.NewEmail).should("be.visible");
    cy.get(LandlordAssertion.ConfirmNewEmail).should("be.visible");
    cy.get(LandlordAssertion.UpdateEmailButton).should("be.visible");
    cy.get(LandlordAssertion.Menu).click();
    cy.get(LandlordAssertion.Logout).eq(1).click({ force: true });
    cy.get(LandlordAssertion.HomePageHeader).should(
      "have.text",
      LandlordAssertion.HomePageHeaderText
    );
  }
}
export default LandlordMenuAssertion;
