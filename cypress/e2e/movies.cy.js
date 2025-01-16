const seats = require("../fixtures/seats");
const selector = require("../fixtures/selector");
const url = require("../fixtures/client.json");

describe('Бронирование мест на выбранный фильм', () => {
    it("Should be possible to book", () => {
        cy.visit(url.clientUrl);
        cy.get(selector.weeks).click();
        cy.get(selector.movie).first().contains('13:00').click();
 
    seats.forEach(seat => {
        
        //cy.get(selector.scheme > selector.seatRow > selector.seatSeat).click();
        //cy.get(selector.scheme > :nth-child(${row}) > ${seatSeat}`).click();

        cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
        
    });
        cy.get(selector.button).click();

        cy.contains('Вы выбрали билеты:').should('be.visible');
        cy.contains('Сталкер(1979)').should('be.visible');
        cy.contains('Получить код бронирования')
        .should('be.visible')
        .should('not.be.disabled');
    })
}); 


