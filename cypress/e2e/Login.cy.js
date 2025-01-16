const log = require("../fixtures/login");
const selector = require("../fixtures/selector");
const url = require("../fixtures/client.json");
const adminAuthButtonSelector = selector.adminAuthButtonSelector;

describe("Тест аутентификации", () => {
  beforeEach(() => {
    cy.visit(url.adminUrl);
  });

  it("Логин зарегистрированного администратора", () => {
    cy.get(selector.emailField).type(log.validEmail);
    cy.get(selector.passField).type(log.validPass);
    cy.get(selector.loginButton).click();
    cy.contains("Управление залами").should("be.visible");
  });

  it("Логин незарегистрированного администратора", () => {
    cy.get(selector.emailField).type(log.invalidEmail);
    cy.get(selector.passField).type(log.invalidPass);
    cy.get(selector.loginButton).click();
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});