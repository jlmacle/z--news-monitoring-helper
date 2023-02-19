<i>The shell script hasn't been tested on macOS. Might work.</i>

# News monitoring helper
News monitoring program based on Cypress, potentially useful to find keywords in news pages.<br>
Used to find breakthroughs in university news.

## Requirements :
You need to have [Node.js](https://nodejs.org/en/) installed.<br>
On Linux, install npm as well.<br>

## Code download :
Download the [zip file ](https://github.com/jlmacle/News-monitoring-helper/archive/refs/heads/main.zip) and extract its content.

## Cypress installation :
Once the code extracted, go to the root directory,
and run the command <br>
<code>npm install</code>

## Use :
[ Make sure to change no file names ] <br>
The text files containing keywords and website URLs are located in <b>cypress/fixtures</b>.<br>
On Windows, I suggest Notepad to edit these files.

<br>
Run the script <b>run-to-find-the-keywords-in-the-websites.bat/.sh</b> located in <b>cypress/e2e</b>. <br>
On Windows, you might have to allow the main script to run.<br>
You might also have to wait for your antivirus to analyze the file.<br>
Mine started by denying access to the file, before allowing the script to be run.<br>
<br><br>
At times, the script generates no test.<br>
When this happens, re-run the script.<br>
As a consequence, cron/time-scheduled tasks might fail at times. <br>
You can find versions adapted to this type of use in the <b>cypress/e2e</b> folder. <br>
Trying to fix the issue shouldn't be my priority.<br><br>
I plan a fail-free version that being said.<br>
Files/folder not found messages at the first run are normal.<br><br>
The screenshots taken when a keyword has been considered as detected (sometimes wrongly) <br>
are in the folder <b>cypress/screenshots</b>. <br>
They help distinguish between when the keyword was found in a news text, <br>
and when an issue happened and the keyword cannot be found in the picture. <br> <br>
The terminal is another place where you can see when a keyword has been considered as detected. <br>
By Ctrl-clicking on a link in the terminal, you can open the URL in a browser. <br> <br>
Note that not all breakthroughs will be recent. <br>
That being said, the program is a potentially useful companion for news monitoring. <br> <br>
Happy searching.
