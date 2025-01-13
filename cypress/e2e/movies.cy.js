const seats = require("../fixtures/seats");
const selector = require("../fixtures/selectors");

describe('Бронирование мест на выбранный фильм', () => {
    it("Should be possible to book", () => {
        cy.visit('/');
        cy.get('a.page-nav__day:nth-of-type(4)').click();
        cy.get(selector.movie).first().contains('13:00').click();
 
    seats.forEach(seat => {
        cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
    });
        cy.get(selector.button).click();

        cy.contains('Вы выбрали билеты:').should('be.visible');
        cy.contains('Сталкер(1979)').should('be.visible');
        cy.contains('16-01-2025').should('be.visible');
        cy.contains('Получить код бронирования')
        .should('be.visible')
        .should('not.be.disabled');
    })
}); 


