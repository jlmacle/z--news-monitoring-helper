describe('Testing the absence of dead links', () =>
{
    let websites = [];

    before(
        ()=>
            {
            // ctl + shift + i to acccess the console in the developper tools
            
            
            // websites array to fill with data from file
            cy.readFile('./cypress/fixtures/Potential-websites-to-search-from.txt')
                .then(data=>
                {
                    console.log(data);
                    websites = data.split('\r'); // Copilot
                })
            }
        )

    it('Searching a website list for deadlinks',()=>
        {
          websites.forEach((website)=>{
            cy.request('GET',website)
              .then( (response) => 
                {
                  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
                  // 200 OK
                  // The request succeeded. 
                  // The result meaning of "success" depends on the HTTP method:
                  // GET: The resource has been fetched and transmitted in the message body.
                  console.log(`"Verifying the url : ${website}"`);
                  expect(response.status).to.be.eq(200);
                })            
          });
        })
})