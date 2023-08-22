/// <reference types = "Cypress" />
describe("Testes funcionais de login", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  it("Inserindo dados validos login e senha", () => {
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();
  });

  it("Inserindo login invalido", () => {
    cy.get("#username").type("aluno_ebac1@teste.com");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error > li").should(
      "contain",
      "Erro: a senha fornecida para o e-mail aluno_ebac1@teste.com está incorreta. Perdeu a senha?"
    );
  });

  it("Inserindo senha invalida", () => {
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("teste@234teste.com");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error > li").should(
        "contain",
        "Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?"
      );
  });

});
