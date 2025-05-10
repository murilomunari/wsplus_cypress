describe('Address', () => {

    it('Cadastrando um endereço', () => {

        const requestBody = {
            "street": "Rua Anny",
            "city": "São Paulo",
            "state": "SP",
            "postalCode": "09541520",
            "country": "Brasil"
        };

        cy.request({
            method : 'POST',
            url: 'http://localhost:8080/api/address',
            failOnStatusCode: false,
            body: requestBody
        }).then((response) => {
            expect(response.status).to.equal(201);


            const id = response.body.id;
            

            expect(id, 'ID está sendo passado').to.exist;
        })

    });

    it('Listando todos os endererços', () => {

        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/api/address',
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(200);



        })
    });

})