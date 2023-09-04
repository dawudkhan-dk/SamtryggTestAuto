// import "cypress-shadow-dom";

Cypress.on("uncaught:exception", (_err, _runnable) => {
  return false;
});

describe("filter ROs", () => {
  it("Filtering Rental Object", () => {
    cy.viewport(1200, 800);
    cy.visit("https://samtrygg.se");
    cy.get(
      '[class="language language--en language-selected transparentBackground"]'
    ).click();
    cy.wait(5000);
    cy.get('[class="property-city__btn"]').eq(1).click();
    cy.get('[id="slide"]').click();
    cy.get('[class="hideFilter"]').invoke("css", "display", "block");
    cy.get('[class="filterContent"]').invoke("css", "display", "block");
    // cy.wait(500);

    // cy.get(".irs-slider.from")
    //   .eq(1)
    //   .invoke("css", "left", "18.8791%")
    //   .trigger("mouseup");

    // cy.get(".irs-slider.to")
    //   .eq(1)
    //   .invoke("css", "left", "18.8791%")
    //   .trigger("mouseup");

    // cy.get('[class="irs-bar"]')
    //   .eq(1)
    //   .invoke("css", "width", "0%")
    //   .trigger("mouseup", { force: true });

    // cy.get("#Minrooms").invoke("attr", "data-updateval", "3;3");
    // cy.get("#Minrooms").should("have.attr", "data-updateval", "3;3");

    // Use the cy.shadow() command to interact with the Shadow DOM

    cy.get('[id="until-notice"]').check();

    cy.wait(3000);

    cy.get('button[id="filter"]').click();
    cy.get('[class="hideFilter"]').invoke("css", "display", "none");
    cy.get('[class="filterContent"]').invoke("css", "display", "none");

    cy.wait(3000);

    cy.get('[class="portfolio-detail-item"] div[class="col-xs-12"]').should(
      ($elements) => {
        $elements.each((index, element) => {
          expect(element).to.contain("Long term");
        });
      }
    );
  });
});
// '[class="portfolio-detail-item"] div[class="col-xs-12"]'
