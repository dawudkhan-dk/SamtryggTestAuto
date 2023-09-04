import Selector from "../../fixtures/Selector.json";
const { TenantCompleteProfile } = Selector;

class CompleteProfile {
  TenantProfileComplete(
    FirstName,
    SurName,
    PhoneNumber,
    Description,
    Household,
    Smoker,
    FormOfEmployment,
    Profession,
    Education,
    Pets,
    NumberOfRooms,
    Area,
    Slidertext,
    SliderTextCSS,
    SliderBarCSS,
    Slider,
    Address
  ) {
    cy.get(TenantCompleteProfile.Menu).click();
    cy.wait(3000);
    // cy.get('[class="dropdown"]').contains('My Profile').click({force: true})
    cy.xpath(TenantCompleteProfile.MyProfile).click({ force: true });

    // about yourself
    cy.wait(3000);
    cy.get(TenantCompleteProfile.FirstName)
      .should("be.visible")
      .clear()
      .type(FirstName);
    cy.get(TenantCompleteProfile.Surname)
      .should("be.visible")
      .clear()
      .type(SurName);
    cy.get(TenantCompleteProfile.PhoneNumber)
      .should("be.visible")
      .clear()
      .type(PhoneNumber);
    cy.get(TenantCompleteProfile.PersonalDescription)
      .should("be.visible")
      .clear()
      .type(Description);
    cy.get(TenantCompleteProfile.AboutYourSelfNextButton).click();

    // search Criteria
    cy.wait(3000);
    cy.get(TenantCompleteProfile.HouseTypeHeader).should("be.visible");
    cy.get(TenantCompleteProfile.HouseType).click();
    cy.get(TenantCompleteProfile.Household)
      .should("be.visible")
      .select(Household);
    cy.get(TenantCompleteProfile.Smoker).should("be.visible").select(Smoker);
    cy.get(TenantCompleteProfile.FormOfEmployment)
      .should("be.visible")
      .select(FormOfEmployment);
    cy.get(TenantCompleteProfile.Profession)
      .should("be.visible")
      .clear()
      .type(Profession);
    cy.get(TenantCompleteProfile.Education)
      .should("be.visible")
      .select(Education);
    cy.get(TenantCompleteProfile.Pets).should("be.visible").select(Pets);
    cy.get(TenantCompleteProfile.SearchCriteriaNextButton)
      .should("be.visible")
      .click();

    // What is the rent?
    cy.wait(3000);
    cy.get(TenantCompleteProfile.MoveInDate).click({ force: true });
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.toLocaleString("default", { month: "long" });
    const todayYear = today.getFullYear();
    // cy.get(TenantCompleteProfile.MoveInDatePicker)
    //   .contains(todayDate)
    //   .click({ force: true });

    cy.get(TenantCompleteProfile.CalendarBody).each(() => {
      cy.get(TenantCompleteProfile.WeekDays)
        .contains(todayDate)
        .click({ force: true });
    });

    cy.wait(3000);
    cy.get(TenantCompleteProfile.NumberOfRooms)
      .should("be.visible")
      .select(NumberOfRooms);
    cy.get(TenantCompleteProfile.AreaSize)
      .should("be.visible")
      .clear()
      .type(Area);
    cy.get(TenantCompleteProfile.Slidertext).invoke("text", Slidertext);
    cy.get(TenantCompleteProfile.Slidertext).invoke(
      "css",
      "left",
      SliderTextCSS
    );
    cy.get(TenantCompleteProfile.SliderBar).invoke(
      "css",
      "width",
      SliderBarCSS
    );
    cy.get(TenantCompleteProfile.Slider).invoke("css", "left", Slider);
    cy.get(TenantCompleteProfile.WhatsRentNextButton)
      .should("be.visible")
      .click();

    // Interested locations to search
    cy.wait(3000);
    cy.get(TenantCompleteProfile.Maps).should("be.visible");
    cy.get(TenantCompleteProfile.CityInterestedHeader).contains(
      TenantCompleteProfile.CityInterestedHeaderText
    );
    cy.get(TenantCompleteProfile.Address).type(Address);
    cy.get(TenantCompleteProfile.AddressList)
      .contains(TenantCompleteProfile.AddressInTheList)
      .click();
    cy.get(TenantCompleteProfile.ProfileSaveButton).click();
  }
}

export default CompleteProfile;
