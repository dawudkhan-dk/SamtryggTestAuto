import Selector from "../../fixtures/Selector.json";
const { CreateAdAndEditAd } = Selector;

class CreateAd {
  LandlordCreateAd(
    Address,
    NumberOfStairs,
    MonthlyRent,
    NumberOfRoom,
    SquareMeterArea,
    Description,
    Furnishing
  ) {
    cy.get(CreateAdAndEditAd.Menu).click();
    cy.xpath(CreateAdAndEditAd.EditMyAd).click({ force: true });

    cy.get(CreateAdAndEditAd.Address)
      .should("be.visible")
      .clear()
      .type(Address);
    // cy.get(CreateAdAndEditAd.AddressList).should("be.visible").click();
    cy.get(CreateAdAndEditAd.NumberofStairs)
      .should("be.visible")
      .select(NumberOfStairs);
    cy.get(CreateAdAndEditAd.AddressTabNextButton).should("be.visible").click();

    cy.wait(3000);
    cy.get(CreateAdAndEditAd.MoveInDate).click({ force: true });
    // cy.get('[id="ui-datepicker-div"]').invoke("css", "display", "block");
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.toLocaleString("default", { month: "long" });
    const todayYear = today.getFullYear();

    cy.get(CreateAdAndEditAd.CalendarBody).each(() => {
      cy.get(CreateAdAndEditAd.WeekDays)
        .contains(todayDate)
        .click({ force: true });
    });

    // cy.xpath(CreateAdAndEditAd.MoveInDatePicker)
    //   .contains(todayDate)
    //   .click({ force: true });

    // cy.get('[id="ui-datepicker-div"]').invoke("css", "display", "none");
    cy.get(CreateAdAndEditAd.UntillFurtherNotice).check().should("be.checked");

    cy.get(CreateAdAndEditAd.MonthlyRent)
      .should("be.visible")
      .clear()
      .type(MonthlyRent);
    cy.get(CreateAdAndEditAd.NumberOfRooms)
      .should("be.visible")
      .clear()
      .type(NumberOfRoom);
    cy.get(CreateAdAndEditAd.SquareMeterArea)
      .should("be.visible")
      .clear()
      .type(SquareMeterArea);
    cy.get(CreateAdAndEditAd.WhatsRentTabNextTab).should("be.visible").click();

    cy.wait(3000);
    cy.get(CreateAdAndEditAd.AmenitiesTabHeader).should(
      "have.text",
      CreateAdAndEditAd.AmenitiesTabHeaderText
    );
    cy.get(CreateAdAndEditAd.Shower).check();
    cy.get(CreateAdAndEditAd.Bathtub).check();
    cy.get(CreateAdAndEditAd.Kitchen).check();
    cy.get(CreateAdAndEditAd.AmenitiesTabNextButton)
      .should("be.visible")
      .click();

    cy.wait(3000);
    cy.get(CreateAdAndEditAd.Description).clear().type(Description);
    cy.get(CreateAdAndEditAd.Furnishing).select(Furnishing);
    cy.get(CreateAdAndEditAd.Coopartment).check();
    cy.get(CreateAdAndEditAd.DescribePropertyTabNextButton).click();

    cy.wait(3000);
    cy.get(CreateAdAndEditAd.UploadPhotoTab).should("have.class", "active");
    const filePath = "house.jpg";
    cy.get(CreateAdAndEditAd.UploadPhoto).attachFile(filePath);
    // cy.get('input[id="ImageUpload"]').then($input => {
    //     expect($input[0].files.length).to.be.greaterThan(0);
    //   });
    cy.get(CreateAdAndEditAd.UploadPhotoTabNextButton).click();

    cy.wait(3000);
    cy.get(CreateAdAndEditAd.BothViewing).check();
    cy.get(CreateAdAndEditAd.TimeSlot).check({ force: true });
    cy.get(CreateAdAndEditAd.StartingFrom).click();
    cy.get(CreateAdAndEditAd.CalendarBody).each(() => {
      cy.get(CreateAdAndEditAd.WeekDays)
        .contains(todayDate)
        .click({ force: true });
    });
    cy.get(CreateAdAndEditAd.TimeSlotsPageNextButton).click({ force: true });
    cy.get(CreateAdAndEditAd.SaveAdButton).click({ force: true });
  }
}

export default CreateAd;
