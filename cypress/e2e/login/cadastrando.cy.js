/// <reference types = "cypress"/>
import { faker } from "@faker-js/faker";

describe("Fazendo cadastro de novos usuario", () => {
  let email = faker.internet.email();
  let senha = faker.internet.password();

  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  it("Cadastrando novo usuario", () => {
    cy.get("#reg_email").type(email);
    cy.get("#reg_password").type(senha);
    cy.get(":nth-child(4) > .button").click();
    cy.get(".page-title").should("contain", "Minha conta");
  });

  it("Inserindo login e senha ja cadastrado", () => {
    cy.get("#reg_email").type("Veronica88@gmail.com");
    cy.get("#reg_password").type(senha);
    cy.get(":nth-child(4) > .button").click();
    cy.get(".woocommerce-error > li").should(
      "contain",
      "Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login."
    );
  });
});
