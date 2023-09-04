import Selector from "../../fixtures/Selector.json";
const { BookAViewing } = Selector;

class BookViewing {
  TenantBookViewing() {
    cy.get(BookAViewing.Menu).click();
    cy.xpath(BookAViewing.SavedHome).click({ force: true });
    cy.wait(5000);
    cy.get(BookAViewing.AddressContainer)
      .contains(BookAViewing.AddressContainerText)
      .should("be.visible");
    // cy.xpath(BookAViewing.SeeMoreButton)
    //   .should("be.visible")
    //   .click({ force: true });

    cy.contains('a[class="button"]', "See more").click();

    // You can add assertions or further actions after clicking the link
    // For example, you can assert that the URL has changed

    cy.get(BookAViewing.RODetailPageAddressContainer)
      .contains(BookAViewing.RODetailPageAddressContainerText)
      .should("be.visible");
    cy.get(BookAViewing.BookAViewingButton).eq(0).should("be.visible").click();
    cy.get(BookAViewing.TimeSlotButton).eq(1).click();
    cy.get(BookAViewing.VideoViewingButton).eq(1).click();
    cy.get(BookAViewing.BookedViewingHeader)
      .eq(0)
      .should("have.text", BookAViewing.BookedViewingHeaderText);
    cy.wait(3000);
    cy.get(BookAViewing.BookedViewingAddress).should(
      "have.text",
      BookAViewing.BookedViewingAddressText
    );
  }

  RescheduleViewing() {
    cy.get(BookAViewing.Menu).click();
    cy.xpath(BookAViewing.Viewings).click({ force: true });
    cy.get(BookAViewing.ManageViewingButton).click();
    cy.get(BookAViewing.RescheduleButton)
      .contains(BookAViewing.RescheduleButtonText)
      .click();
    cy.get(BookAViewing.SecondTimeSlotButton).eq(3).click();
    cy.get(BookAViewing.VideoViewingButton).eq(1).click();
    cy.get(BookAViewing.BookedViewingHeader)
      .eq(0)
      .should("have.text", BookAViewing.BookedViewingHeaderText);
    cy.wait(3000);
    cy.get(BookAViewing.BookedViewingAddress).should(
      "have.text",
      BookAViewing.BookedViewingAddressText
    );
  }

  CancelViewing() {
    cy.get(BookAViewing.Menu).click();
    cy.xpath(BookAViewing.Viewings).click({ force: true });
    cy.get(BookAViewing.ManageViewingButton).click();
    cy.get(BookAViewing.ViewingPageCancelButton)
      .contains(BookAViewing.ViewingPageCancelButtonText)
      .click();

    cy.get(BookAViewing.FinalCancelButton)
      .should("be.visible")
      .click({ force: true });
    cy.get(BookAViewing.YesButton).eq(1).click();
  }

  ReviewViewing() {
    cy.get(BookAViewing.Menu).click();
    cy.xpath(BookAViewing.Viewings).click({ force: true });
    cy.get(BookAViewing.ManageViewingButton).click();
    cy.get('[class="sam-btn manage-btn__item m-0 sam-btn--white"]')
      .contains("Review")
      .click();
    cy.get('input[id="reason1"]').click();
    cy.get(
      '[class="sam-btn w-100 yes-no-modal__btn yes-no-modal__btn--ok  mb-2"]'
    ).click();
    cy.get('[class="w-100 mb-2"]').contains("Link").click();
    cy.get('button[id="Deposit-landing-btn"]').click();
    cy.get('button[id="deposit-btn"]').click();
    cy.get('[id="deposit-thanks-btn"]').click();
    cy.get(BookAViewing.ManageViewingButton).click();
    cy.get('[class="sam-btn manage-btn__item m-0 sam-btn--white"]')
      .contains("Review")
      .click();
    cy.get('input[id="reason1"]').click();
    cy.get(
      '[class="sam-btn w-100 yes-no-modal__btn yes-no-modal__btn--ok  mb-2"]'
    ).click();
  }
}

export default BookViewing;
