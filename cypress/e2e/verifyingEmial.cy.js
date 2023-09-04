import SignUpFunctionality from "../support/object/SignUpFunctionality";
import Selector from "../fixtures/Selector.json";
import SignUpData from "../fixtures/SignUpData.json";

const { TenantSignUpData, LandlordSignUpData } = SignUpData;

describe("Signup Functionality", () => {
  Cypress.once("uncaught:exception", (err, runnable) => {
    return false;
  });

  const serverId = "qqegxhyx";
  const emailAddress = `mohsin+2062tenant@${serverId}.mailosaur.net`;

  it("Tenant SignUp", () => {
    cy.fixture("Selector.json").then((data) => {
      cy.viewport(1200, 800);
      cy.visit(data.BaseURL);
      cy.wait(3000);
      cy.get(data.Flag).click();
      cy.wait(3000);
      cy.get(data.NavigateSignUpPage).click();
    });

    // const TenantSignUp = new SignUpFunctionality();
    // TenantSignUp.signUpForTenant(
    //   TenantSignUpData.FirstName,
    //   TenantSignUpData.LastName,
    //   TenantSignUpData.PhoneNumber,
    //   TenantSignUpData.Email,
    //   TenantSignUpData.Password,
    //   TenantSignUpData.ConfirmPassword
    //   );

    cy.get("[class='contentH1 fl fl-text-center']").should("be.visible");
    cy.get("[class='left MB10']").should("be.visible").click();
    cy.get("[id='FirstName']").should("be.visible").type("Mohsin");
    cy.get("[id='LastName']").should("be.visible").type("2062tenant");
    cy.get("[id='Phone']").should("be.visible").type("03130192439");
    cy.get("[id='Email']").should("be.visible").type(emailAddress);
    cy.get("[id='Password']").should("be.visible").type("Admin@123");
    cy.get("[id='Password2']").should("be.visible").type("Admin@123");
    cy.get("[class='button fl-btn fl-btn-md fl-btn-primary login CAPITAL']")
      .should("be.visible")
      .click();
    cy.wait(30000);

    cy.mailosaurGetMessage(serverId, {
      sentTo: emailAddress,
    }).then((email) => {
      cy.log(email.subject);
      emialVerifyLink = email.html.links[1].href;
      cy.visit(emialVerifyLink);
    });
  });
});
