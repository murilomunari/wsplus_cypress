describe('Product', () => {

    it('Cadastrando um produto', () => {

        const requestBody = {
            "name": "Para-choque",
            "description": "para choque polo tsi",
            "price": 1000.00,
            "stockQuantity": 20,
            "categoryId": 1
        }
        
        
        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/api/client',
            failOnStatusCode: false,
            body: requestBody
        }).then((response) => {
            expect(response.status).to.equal(201);
        });


        const id = response.body.id;

        expect(id, 'ID esta sendo passado').to.exist;

        cy.log('ID do produto cadastrado: ' + id);
        cy.log('Nome do produto cadastrado: ' + requestBody.name);
        cy.log('Descrição do produto cadastrado: ' + requestBody.description);
        cy.log('Preço do produto cadastrado: ' + requestBody.price);
        cy.log('Quantidade em estoque do produto cadastrado: ' + requestBody.stockQuantity);
        cy.log('ID da categoria do produto cadastrado: ' + requestBody.categoryId);


    })


})