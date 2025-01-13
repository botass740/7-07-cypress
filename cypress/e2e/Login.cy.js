const log = require("../fixtures/login");
const selector = require("../fixtures/selectors");

describe("Тест аутентификации", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("Логин зарегистрированного администратора", () => {
    cy.get(selector.emailField).type(log.validEmail);
    cy.get(selector.passField).type(log.validPass);
    cy.get('.login__button').click();
    cy.contains("Управление залами").should("be.visible");
  });

  it("Логин незарегистрированного администратора", () => {
    cy.get(selector.emailField).type(log.invalidEmail);
    cy.get(selector.passField).type(log.invalidPass);
    cy.get('.login__button').click();
    cy.contains("Ошибка авторизации!").should("be.visible");
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});