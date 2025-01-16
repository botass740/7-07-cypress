const url = require("../fixtures/client.json");
const selector = require("../fixtures/selector");

describe("Отображение главной страницы", () => {
  beforeEach(() => {
    cy.visit(url.clientUrl);
  });

  it("Показывает количество дней", () => {
    cy.get(selector.week).should("have.length", 7);
  });

  it("Показывает наименование страницы", () => {
    cy.get(selector.title).should("contain", "Идёмвкино");
  });

  it("Показывает раздел фильмов", () => {
    cy.get(selector.movie).should("be.visible");
  });
});