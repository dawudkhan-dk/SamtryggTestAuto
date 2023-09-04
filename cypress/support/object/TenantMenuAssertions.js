import Selector from "../../fixtures/Selector.json";

const { TenantAssertion } = Selector;

class TenantMenuAssertion {
  MenuAssertion() {
    cy.get(TenantAssertion.Menu).click();
    cy.xpath(TenantAssertion.Overview).click({ force: true });
    cy.get(TenantAssertion.MyMatchedObjects)
      .eq(0)
      .should("have.text", TenantAssertion.MyMatchedObjectsText);

    cy.get(TenantAssertion.MyBookedViewings)
      .eq(1)
      .should("have.text", TenantAssertion.MyBookedViewingsText);

    cy.get(TenantAssertion.Menu).click();
    cy.xpath(TenantAssertion.MatchednSavedObjects).click({ force: true });
    cy.get(TenantAssertion.MyMatchedObjects)
      .eq(0)
      .should("have.text", TenantAssertion.MyMatchedObjectsText);
    cy.get(TenantAssertion.MySavedOgjects)
      .eq(1)
      .should("have.text", TenantAssertion.MySavedOgjectsText);

    cy.get(TenantAssertion.Menu).click();
    cy.xpath(TenantAssertion.RentalApplications).click({ force: true });
    cy.get(TenantAssertion.RentalApplicationsHeader)
      .contains(TenantAssertion.RentalApplicationsHeaderText)
      .should("be.visible");

    cy.get(TenantAssertion.Menu).click();
    cy.xpath(TenantAssertion.ContractnPayments).click({ force: true });
    cy.get(TenantAssertion.CnPHeader1)
      .eq(0)
      .should("have.text", TenantAssertion.CnPHeader1Text);
    cy.get(TenantAssertion.CnPHeader2)
      .eq(1)
      .should("have.text", TenantAssertion.CnPHeader2Text);

    cy.get(TenantAssertion.Menu).click();
    cy.get(TenantAssertion.Settings).eq(1).click({ force: true });
    cy.get(TenantAssertion.SettingsHeader1)
      .eq(0)
      .should("have.text", TenantAssertion.SettingsHeader1Text);
    cy.get(TenantAssertion.Information).should(
      "have.text",
      TenantAssertion.InformationText
    );
    cy.get(TenantAssertion.Immediately)
      .eq(1)
      .contains(TenantAssertion.ImmediatelyText)
      .should("be.visible");
    cy.get(TenantAssertion.Daily)
      .eq(2)
      .contains(TenantAssertion.DailyText)
      .should("be.visible");
    cy.get(TenantAssertion.EveryWeek)
      .eq(3)
      .contains(TenantAssertion.EveryWeekText)
      .should("be.visible");
    cy.get(TenantAssertion.IncomingRentPayment)
      .eq(5)
      .contains(TenantAssertion.IncomingRentPaymentText)
      .should("be.visible");
    cy.get(TenantAssertion.ViewingTimesShownInterest)
      .eq(6)
      .contains(TenantAssertion.ViewingTimesShownInterestText)
      .should("be.visible");
    cy.get(TenantAssertion.ContactInformationHeader)
      .eq(0)
      .contains(TenantAssertion.ContactInformationHeaderText)
      .should("be.visible");
    cy.get(TenantAssertion.PhoneNumber).should("be.visible");
    cy.get(TenantAssertion.Email).should("be.visible");
    cy.get(TenantAssertion.Language).should("be.visible");
    cy.get(TenantAssertion.BankIDHeader)
      .eq(1)
      .contains(TenantAssertion.BankIDHeaderText);
    cy.get(TenantAssertion.SSNField).should("be.visible");
    cy.get(TenantAssertion.LoginWithBankIdButton).should("be.visible");
    cy.get(TenantAssertion.LoginViaQRcodeButton).should("be.visible");

    cy.get(TenantAssertion.ChangePasswordHeader)
      .contains(TenantAssertion.ChangePasswordHeaderText)
      .should("be.visible");

    cy.get(TenantAssertion.OldPassword).should("be.visible");
    cy.get(TenantAssertion.NewPassword).should("be.visible");
    cy.get(TenantAssertion.ConfirmPassword).should("be.visible");
    cy.get(TenantAssertion.SavedChangesButton).should("be.visible");
    cy.get(TenantAssertion.IWantToBecomeALandlordButton).should("be.visible");
    cy.get(TenantAssertion.SettingsHeader2)
      .contains(TenantAssertion.SettingsHeader2Text)
      .should("be.visible");
    cy.get(TenantAssertion.ExistingEmail).should("be.visible");
    cy.get(TenantAssertion.NewEmail).should("be.visible");
    cy.get(TenantAssertion.ConfirmNewEmail).should("be.visible");
    cy.get(TenantAssertion.UpdateEmailButton).should("be.visible");

    cy.get(TenantAssertion.Menu).click({ force: true });
    cy.get(TenantAssertion.Logout).eq(1).click({ force: true });
    cy.get(TenantAssertion.HomePageHeader)
      .contains(TenantAssertion.HomePageHeaderText)
      .should("be.visible");
  }
}
export default TenantMenuAssertion;
