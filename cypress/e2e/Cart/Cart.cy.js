describe('Cart', () => {
    it('Cadastrando um carrinho', () => {
        const clientBody = {
            firstName: "Murilo",
            lastName: "Munari",
            cpf: String(Math.floor(Math.random() * 1e11)),
            phoneNumber: "11993155123",
            emailAddress: `murilo${Date.now()}@hotmail.com`
        };

        cy.log('Criando cliente...');
        cy.createClient(clientBody).then((clientResponse) => {
            const clientId = clientResponse.body.id;
            cy.log(`Cliente criado com ID: ${clientId}`);

            const categoryBody = {
                name: "Peças",
                description: "Peças de veículos"
            };

            cy.log('Criando categoria...');
            cy.createCategory(categoryBody).then((catResponse) => {
                const categoryId = catResponse.body.id;
                cy.log(`Categoria criada com ID: ${categoryId}`);

                const productBody = {
                    name: "Para-choque",
                    description: "para choque polo tsi",
                    price: 1000.00,
                    stockQuantity: 20,
                    categoryId: categoryId
                };

                cy.log('Criando produto...');
                cy.createProduct(productBody).then((productResponse) => {
                    const productId = productResponse.body.id;
                    cy.log(`Produto criado com ID: ${productId}`);

                    const cartBody = {
                        cartDTO: {
                            clientId: clientId
                        },
                        cartItemDTOs: [
                            {
                                productId: productId,
                                quantity: 2
                            }
                        ]
                    };

                    cy.log('Criando carrinho...');
                    cy.request({
                        method: 'POST',
                        url: 'http://localhost:8080/api/cart',
                        failOnStatusCode: false,
                        body: cartBody
                    }).then((response) => {
                        cy.log(`Resposta da criação do carrinho: ${JSON.stringify(response.body)}`);
                        expect(response.status).to.equal(200);
                        const id = response.body.id;
                        expect(id, 'ID do carrinho').to.exist;
                        cy.log(`Carrinho criado com ID: ${id}`);
                    });

                });
            });
        });
    });
});
