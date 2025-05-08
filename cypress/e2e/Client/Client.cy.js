describe('Client', () => {

    const clientBody = {
        firstName: "Murilo",
        lastName: "Munari",
        cpf: String(Math.floor(Math.random() * 1e11)), // gera CPF aleatório
        phoneNumber: "11993155123",
        emailAddress: `murilo${Date.now()}@hotmail.com` // evita duplicidade
    };

    it('Cadastrando um cliente', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/api/client',
            failOnStatusCode: false,
            body: clientBody
        }).then((response) => {
            expect(response.status).to.equal(201);

            const id = response.body.id;

            expect(id, 'ID retornado').to.exist;


            cy.log('ID do cliente cadastrado: ' + id);
            cy.log('Nome do cliente cadastrado: ' + clientBody.firstName + ' ' + clientBody.lastName);
            cy.log('CPF do cliente cadastrado: ' + clientBody.cpf);
            cy.log('Telefone do cliente cadastrado: ' + clientBody.phoneNumber);
            cy.log('Email do cliente cadastrado: ' + clientBody.emailAddress);
            

        })



    })

    it('Listando todos os clientes', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/api/client',
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body, 'Lista de clientes').to.exist;
            expect(response.body.length).to.be.greaterThan(0);


            cy.log('Lista de clientes: ' + JSON.stringify(response.body, null, 2));
        })
    })

})