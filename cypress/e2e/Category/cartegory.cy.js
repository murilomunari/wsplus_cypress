describe('Category', () => {

     it('Cadastrando uma Categoria', () => {

        const categoryBody = {
            "name": "Carros",
            "description": "para choque polo tsi 2019"
        };

        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/api/category',
            failOnStatusCode: false,
            body: categoryBody
        }).then((response) => {
            expect(response.status).to.equal(201);

            const id = response.body.id;

            expect(id, 'ID retornado').to.exist;


            cy.log('ID da categoria cadastrada: ' + id);
            cy.log('Nome da categoria cadastrada: ' + categoryBody.name);
            cy.log('Descrição da categoria cadastrada: ' + categoryBody.description);
        })
     })

     it('Listando todas as categorias', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/api/category',
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body, 'Lista de categorias').to.exist;
            expect(response.body.length).to.be.greaterThan(0);


            cy.log('Lista de categorias: ' + JSON.stringify(response.body, null, 2));
        })
     })
})