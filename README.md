# News monitoring helper
News monitoring program based on Cypress, potentially useful to find keywords in news pages.

## Requirements :
You need to have installed [Node.js](https://nodejs.org/en/).

## Code download :
Download the [zip file ](https://github.com/jlmacle/News-monitoring-helper/archive/refs/heads/main.zip) and extract its content.

## Cypress installation :
Once the code extracted, go to the root directory,
and run the command <br>
<code>npm install cypress --save-dev</code>

## Use :
[ Make sure to change no file names ] <br>
The text files containing keywords and website URLs are located in <b>cypress/fixtures</b>.<br>
On Windows, I suggest Notepad to edit these files.

<br>
Run the script <b>run-to-find-the-keywords-in-the-websites.bat</b> located in <b>cypress/e2e</b> <br>
The screenshots taken when a keyword has been considered as detected (sometimes wrongly) <br>
are in the folder <b>cypress/screenshots</b>. <br>
They help distinguish between when the keyword was found in a news text, <br>
and when an issue happened and the keyword cannot be found in the picture. <br> <br>
The terminal is another place where you can see when a keyword has been considered as detected. <br>
By Ctrl-clicking on a link in the terminal, you can open the URL in a browser. <br> <br>
Note that not all breakthroughs will be recent. <br>
That being said, the program is a potentially useful companion for news monioring. <br> <br>
Happy searching.


