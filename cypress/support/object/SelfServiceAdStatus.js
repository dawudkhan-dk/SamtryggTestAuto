import Selector from "../../fixtures/Selector.json";
const { LandlordSelfServiceAdStatus } = Selector;

class SelfServiceAdStatus {
  LandlordAdStatus(
    Address,
    NumberOfStairs,
    MonthlyRent,
    NumberOfRoom,
    SquareMeterArea,
    Description,
    Furnishing
  ) {
    cy.get(LandlordSelfServiceAdStatus.Menu).click();
    cy.xpath(LandlordSelfServiceAdStatus.EditMyAd).click({ force: true });

    cy.get(LandlordSelfServiceAdStatus.Address)
      .should("be.visible")
      .clear()
      .type(Address);
    // cy.get(CreateAdAndEditAd.AddressList).should("be.visible").click();
    cy.get(LandlordSelfServiceAdStatus.NumberofStairs)
      .should("be.visible")
      .select(NumberOfStairs);
    cy.get(LandlordSelfServiceAdStatus.AddressTabNextButton)
      .should("be.visible")
      .click();

    cy.wait(3000);
    cy.get(LandlordSelfServiceAdStatus.MoveInDate).click({ force: true });
    cy.get('[id="ui-datepicker-div"]').invoke("css", "display", "block");
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.toLocaleString("default", { month: "long" });
    const todayYear = today.getFullYear();

    cy.get(LandlordSelfServiceAdStatus.CalendarBody).each(() => {
      cy.get(LandlordSelfServiceAdStatus.WeekDays)
        .contains(todayDate)
        .click({ force: true });
    });

    // cy.xpath(CreateAdAndEditAd.MoveInDatePicker)
    //   .contains(todayDate)
    //   .click({ force: true });

    cy.get('[id="ui-datepicker-div"]').invoke("css", "display", "none");
    cy.get(LandlordSelfServiceAdStatus.UntillFurtherNotice)
      .check()
      .should("be.checked");

    cy.get(LandlordSelfServiceAdStatus.MonthlyRent)
      .should("be.visible")
      .clear()
      .type(MonthlyRent);
    cy.get(LandlordSelfServiceAdStatus.NumberOfRooms)
      .should("be.visible")
      .clear()
      .type(NumberOfRoom);
    cy.get(LandlordSelfServiceAdStatus.SquareMeterArea)
      .should("be.visible")
      .clear()
      .type(SquareMeterArea);
    cy.get(LandlordSelfServiceAdStatus.WhatsRentTabNextTab)
      .should("be.visible")
      .click();

    cy.wait(3000);
    cy.get(LandlordSelfServiceAdStatus.AmenitiesTabHeader).should(
      "have.text",
      LandlordSelfServiceAdStatus.AmenitiesTabHeaderText
    );
    cy.get(LandlordSelfServiceAdStatus.Shower).check();
    cy.get(LandlordSelfServiceAdStatus.Bathtub).check();
    cy.get(LandlordSelfServiceAdStatus.Kitchen).check();
    cy.get(LandlordSelfServiceAdStatus.AmenitiesTabNextButton)
      .should("be.visible")
      .click();

    cy.wait(3000);
    cy.get(LandlordSelfServiceAdStatus.Description).clear().type(Description);
    cy.get(LandlordSelfServiceAdStatus.Furnishing).select(Furnishing);
    cy.get(LandlordSelfServiceAdStatus.Coopartment).check();
    cy.get(LandlordSelfServiceAdStatus.DescribePropertyTabNextButton).click();

    cy.wait(3000);
    cy.get(LandlordSelfServiceAdStatus.UploadPhotoTab).should(
      "have.class",
      "active"
    );
    const filePath = "house.jpg";
    cy.get(LandlordSelfServiceAdStatus.UploadPhoto).attachFile(filePath);
    cy.get('input[id="ImageUpload"]').then(($input) => {
      expect($input[0].files.length).to.be.greaterThan(0);
    });
    cy.get(LandlordSelfServiceAdStatus.UploadPhotoTabNextButton).click();

    cy.wait(3000);
    cy.get(LandlordSelfServiceAdStatus.BothViewing).check();
    cy.get(LandlordSelfServiceAdStatus.TimeSlot).check({ force: true });
    cy.get(LandlordSelfServiceAdStatus.StartingFrom).click();
    cy.get(LandlordSelfServiceAdStatus.CalendarBody).each(() => {
      cy.get(LandlordSelfServiceAdStatus.WeekDays)
        .contains(todayDate)
        .click({ force: true });
    });
    cy.get(LandlordSelfServiceAdStatus.TimeSlotsPageNextButton).click({
      force: true,
    });
    // cy.get(LandlordSelfServiceAdStatus.SaveAdButton).click({ force: true });
  }
}

export default SelfServiceAdStatus;
