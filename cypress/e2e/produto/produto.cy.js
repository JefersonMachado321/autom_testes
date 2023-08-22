/// <reference types = "Cypress" />

describe("Fazendo cadastro de produto", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
  });

  it("Selecionado um produto da lista", () => {
    cy.get(".product-block").eq(4).click();
  });

  let quantidade = 5;
  it("Deve adicionar um produto ao carrinho", () => {
    cy.get(".product-block").eq(0).click();
    cy.get(".variable-item").eq(0).click();
    cy.get('[data-attribute_name="attribute_color"]').eq(1).click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();
    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", quantidade);
  });
});
