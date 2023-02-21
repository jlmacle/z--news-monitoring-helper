// Git is configured to replace all windows line endings '\r\n' with the  Unix-style '\n'
// All '\r' needs to be removed in case of file editing on Windows
// Split should be done with '\n'

let specGeneratedName = "Generated-File_keywords-in-websites.cy.js";
let websites = [];
let keywords = [];
let specBegin = "describe('Testing the presence of keywords in the websites', () => {\n";
let specEnd = "\n\n})";
let specSkeleton = "";
let debug = true;

// Reading website list
// Avoid empty lines in the file
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
            data = data.replaceAll('\r','');              
            websites = data.split('\n');             
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
            // split and trim the data                
            data = data.replaceAll('\r','');
            keywords = data.split('\n'); 
            console.log("\nKeywords to search for :");
            console.log(keywords);

            // specs generation
            keywords.forEach((keyword)=>
                {
                    // Going through the keywords list
                    websites.forEach(
                        (website)=>
                        {            
                            // Removing the line return                
                            let website_noLineReturn = `${website.replace('\n','')}`;
                            let keyword_noLineReturn = `${keyword.replace('\n','')}`;

                            specSkeleton = ""+ 
                            `\n\nit("Searching '${keyword_noLineReturn}' in '${website_noLineReturn}'", () => {`+   
                            `\n\tcy.visit("${website_noLineReturn}");`+
                            `\n\tcy.contains("${keyword_noLineReturn}").parent().first().screenshot();`+
                            `\n\t})`;

                            if (debug) console.log('\n'+specSkeleton)
                            
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




