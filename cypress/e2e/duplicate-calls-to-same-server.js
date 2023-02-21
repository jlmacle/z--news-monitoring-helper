// A helper script to find duplicate requests toward the same server

const fs = require('fs');
const os = require('os');

var sorted_websites = [];

fs.readFile('../fixtures/Potential-websites-to-search-from.txt', 'utf8', (err, data) => 
    {

        if (err) {     
            console.error(err);
        }
        else
        {   websites = data.split(os.EOL);  
            websites.forEach( (website)=>
                {
                    //TODO: extract the domain name from the website
                    website = website.replace("https://", "");
                    website = website.replace("http://", "");
                    website = website.replace("www.", "");                    
                    website = website.split("/")[0];
                    // Todo: to flip the order of the domain name and the tld
                    website = website.split(".").reverse().join(".");
                    sorted_websites.push(website);
                }       
            )
            sorted_websites = sorted_websites.sort();
            console.log(sorted_websites);
        }    
    }
);