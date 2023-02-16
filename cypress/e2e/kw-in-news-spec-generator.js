let specGeneratedName = "Generated-File_keywords-in-websites.cy.js";
let websites = [];
let keywords = [];
let specBegin = "describe('Testing the presence of keywords in the websites', () => {\n";
let specEnd = "\n\n})";
let specSkeleton = "";

// Reading website list
// Deadlinks are assumed checked with corresponding spec file
// Beware of empty lines in the file
const fs = require('fs');

fs.writeFile(specGeneratedName, specBegin, { flag: 'a+' },(err) => 
    {
        if (err) {     
            console.error(err);
        }
    }
);


fs.readFile('../fixtures/Potential-websites-to-search-from.txt', 'utf8', (err, data) => 
    {

        if (err) {     
            console.error(err);
        }
        else
        {    
            console.log("\nRetrieved website data :");
            console.log(data);          
            websites = data.split('\r'); 
        }    
    }
);

// Keywords list
fs.readFile('../fixtures/keywords.txt', 'utf8', (err, data) =>   
    {

        if (err) {     
            console.error(err);
        }
        else
        {
            console.log("\nRetrieved keyword data :");
            console.log(data);
            // split and trim the data                

            keywords = data.split('\r'); 

            // specs generation
            websites.forEach((website)=>
                {
                    // Going through the keywords list
                    keywords.forEach(
                        (keyword)=>
                        {            
                            // Removing the line return                
                            let website_noLineReturn = `${website.replace('\n','')}`;
                            let keyword_noLineReturn = `${keyword.replace('\n','')}`;

                            specSkeleton = ""+ 
                            `\n\nit("Searching '${keyword_noLineReturn}' in '${website_noLineReturn}'", () => {`+   
                            `\n\tcy.visit("${website_noLineReturn}");`+
                            `\n\tcy.contains("${keyword_noLineReturn}").parent().first().screenshot();`+
                            `\n\t})`;

                            console.log(`\nSpec skeleton: \n${specSkeleton}`);
                            
                            fs.writeFile(specGeneratedName, specSkeleton, { flag: 'a+' },(err) => 
                            {
                                if (err) {     
                                    console.error(err);
                                }
                            }
)
                        }
                    )
                }
            )

            fs.writeFile(specGeneratedName, specEnd, { flag: 'a+' },(err) => 
                {
                    if (err) {     
                        console.error(err);
                    }
                    else {console.log("Writing end of spec file.");}                }
            )            
            
        }    
    }
);





