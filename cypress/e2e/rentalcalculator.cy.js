describe("Rental calculator", () => {
  it.only("Co-op apartment", () => {
    cy.visit("https://stage02.dev.samtrygg.se/");
    cy.get(
      '[class="language language--en language-selected transparentBackground"]'
    )
      .should("be.visible")
      .click();
    cy.get('[class="button radius rent btn btn-primary"]').click();
    cy.get('[class="private-landing-hero__h1--row"]')
      .eq(0)
      .contains("Welcome to Samtrygg")
      .should("be.visible");
    cy.get('[class="private-landing-hero__h1--row"]')
      .eq(1)
      .contains("and safe subleasing")
      .should("be.visible");
    // cy.get('[id="js-continue-calculation-btn"]').should("be.visible").click();
    // cy.wait(5000);
    cy.get('[class="private-landing-calculator"] h2[class="fl fl-text-center"]')
      .contains("Calculate your rent and create an ad free of charge")
      .should("be.visible");
    cy.get('[id="js-samtrygg-calculator"] h3')
      .contains("Add information about your housing")
      .should("be.visible");
    cy.get('[id="js-samtrygg-properties"]')
      .should("be.visible")
      .select("Co-op apartment");
    cy.get('[id="samtrygg-square"]').should("be.visible").select("30");
    cy.get('[id="samtrygg-count-rooms"]').should("be.visible").select("2");
    cy.get('[id="samtrygg-address"]').should("be.visible").type("stock");
    cy.get(
      '[class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front search-place-results"]'
    ).invoke("css", "display", "block");
    cy.contains("[class='ui-menu-item']", "Stockholm, Sverige").click();
    cy.get('[id="js-samtrygg-num-months"]')
      .should("be.visible")
      .select("2 months");
    cy.get('[id="js-samtrygg-furnished"]').should("be.visible").select("Yes");
    cy.get('[class="js-samtrygg-price"]')
      .contains("16 970 - 22 450 kr")
      .should("be.visible");
  });
  it("Villa/townhouse", () => {
    cy.visit("https://stage02.dev.samtrygg.se/");
    cy.get(
      '[class="language language--en language-selected transparentBackground"]'
    )
      .should("be.visible")
      .click();
    cy.get('[class="button radius rent btn btn-primary"]').click();
    cy.get('[class="private-landing-hero__h1--row"]')
      .eq(0)
      .contains("Welcome to Samtrygg")
      .should("be.visible");
    cy.get('[class="private-landing-hero__h1--row"]')
      .eq(1)
      .contains("and safe subleasing")
      .should("be.visible");
    // cy.get('[id="js-continue-calculation-btn"]').should("be.visible").click();
    // cy.wait(5000);
    cy.get('[class="private-landing-calculator"] h2[class="fl fl-text-center"]')
      .contains("Calculate your rent and create an ad free of charge")
      .should("be.visible");
    cy.get('[id="js-samtrygg-calculator"] h3')
      .contains("Add information about your housing")
      .should("be.visible");
    cy.get('[id="js-samtrygg-properties"]')
      .should("be.visible")
      .select("Villa/townhouse");
    cy.get('[id="samtrygg-square"]').should("be.visible").select("50");
    cy.get('[id="samtrygg-count-rooms"]').should("be.visible").select("5");
    cy.get('[id="samtrygg-address"]').should("be.visible").type("stock");
    cy.get(
      '[class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front search-place-results"]'
    ).invoke("css", "display", "block");
    cy.contains("[class='ui-menu-item']", "Stockholm, Sverige").click();
    cy.get('[id="js-samtrygg-num-months"]')
      .should("be.visible")
      .select("2 months");
    cy.get('[id="js-samtrygg-furnished"]').should("be.visible").select("Yes");
    cy.get('[class="js-samtrygg-price"]')
      .contains("16 970 - 22 450 kr")
      .should("be.visible");
  });
  it("Room", () => {});
  it("Tenancy apartment", () => {});
});
