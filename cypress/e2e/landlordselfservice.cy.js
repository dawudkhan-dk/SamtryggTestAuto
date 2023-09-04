import LoginFuntionality from "../support/object/LoginFunctionality";
import SelfServiceAdStatus from "../support/object/SelfServiceAdStatus";

describe("Landlord SelfService ad status", () => {
  it("change the Ad status landlord byself", () => {
    Cypress.once("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.fixture("Selector.json").then((data) => {
      cy.viewport(1200, 800);
      cy.visit(data.Stage03BaseURL);
      cy.wait(3000);
      cy.get(data.Flag).click();
      cy.wait(3000);
      cy.get(data.NavigateSignInPage).click();
    });

    cy.fixture("LoginData.json").then((data) => {
      const ln = new LoginFuntionality();
      ln.valid_Email_and_Valid_Password(
        data.LandlordEmailSelfservice,
        data.ValidPassword
      );
    });

    cy.fixture("CreateAd.json").then((data) => {
      const ln = new SelfServiceAdStatus();
      ln.LandlordAdStatus(
        data.AddressForLandlordSelfService,
        data.NumberOfStairs,
        data.MonthlyRent,
        data.NumberOfRoom,
        data.SquareMeterArea,
        data.Description,
        data.Furnishing
      );
    });

    cy.wait(5000);
    cy.get(".dot").then((element) => {
      const classAttributeValue = element.attr("class");
      if (classAttributeValue.includes("unpublished")) {
        cy.log("Ad has unpublished");

        cy.contains("div", " Avannonserad ")
          .should("have.length", 1) // Ensure there is one div element with the text "Pausad"
          .within(() => {
            // Within the found div element, check for the existence of the span element with the given classes
            cy.get("span.dot.unpublished").should("exist");
          });

        cy.get(".top")
          .invoke("css", "display", "block")
          .should("be.visible")
          .invoke("css", "display", "block");
        cy.contains(
          "Bostadssökande kan hitta din annons i sökresultat och boka en visning."
        ).should("be.visible");
        cy.get(".top").invoke("css", "display", "none");

        // cy.get('[type="checkbox"]').check({ force: true });
      } else if (classAttributeValue.includes("published")) {
        cy.log("Ad has published");

        cy.contains("div", "Annonserad")
          .should("have.length", 1) // Ensure there is one div element with the text "Pausad"
          .within(() => {
            // Within the found div element, check for the existence of the span element with the given classes
            cy.get("span.dot.published").should("exist");
          });

        cy.get(".ss-tooltip")
          .eq(0)
          .trigger("mouseover")
          .within(() => {
            cy.get(".top")
              .invoke("css", "display", "block")
              .should("be.visible")
              .invoke("css", "display", "block");
            cy.contains(
              "Bostadssökande kommer kunna se din annons i sökresultat men de kan inte boka in sig på visningar."
            ).should("be.visible");

            cy.get(".top").invoke("css", "display", "none");
          });

        cy.get(".ss-tooltip")
          .eq(1)
          .trigger("mouseover")
          .within(() => {
            cy.get(".top")
              .invoke("css", "display", "block")
              .should("be.visible")
              .invoke("css", "display", "block");
            cy.contains(
              "Bostadssökande kan varken boka visningar eller hitta annonsen i sökresultat."
            ).should("be.visible");

            cy.get(".top").invoke("css", "display", "none");
          });
      } else if (classAttributeValue.includes("paused")) {
        cy.log("Ad has paused");

        cy.contains("div", "Pausad")
          .should("have.length", 1) // Ensure there is one div element with the text "Pausad"
          .within(() => {
            // Within the found div element, check for the existence of the span element with the given classes
            cy.get("span.dot.paused").should("exist");
          });

        cy.get(".ss-tooltip")
          .eq(0)
          .trigger("mouseover")
          .within(() => {
            cy.get(".top")
              .invoke("css", "display", "block")
              .should("be.visible")
              .invoke("css", "display", "block");
            cy.contains(
              "Bostadssökande kan hitta din annons i sökresultat och boka en visning."
            ).should("be.visible");

            cy.get(".top").invoke("css", "display", "none");
          });

        cy.get(".ss-tooltip")
          .eq(1)
          .trigger("mouseover")
          .within(() => {
            cy.get(".top")
              .invoke("css", "display", "block")
              .should("be.visible")
              .invoke("css", "display", "block");
            cy.contains(
              "Bostadssökande kan varken boka visningar eller hitta annonsen i sökresultat."
            ).should("be.visible");

            cy.get(".top").invoke("css", "display", "none");
          });

        // cy.get('[data-selfservice-type="3"]').check();
        // cy.get('[type="submit"]').click();
      }
    });
  });
});
