Fixed: empty lines being treated as keywords.<br><br>

In case of issue, [let me know](https://github.com/jlmacle/news-monitoring-helper/issues).
***

<b>The program runs one keyword at a time,<br>
to avoid potentially triggering a denial of service issue, <br>
that could occur while making close requests to the same web server.</b> <br><br>

I'm planning to work on a close to fail-free version, <br>
without the need to re-run the script in case of failure to generate the test file.<br>
<br><br>


# News monitoring helper
News monitoring program based on Cypress, potentially useful to find keywords in news pages.<br>

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
The text files containing keyword and website URLs are located in <b>cypress/fixtures</b>.<br>
On Windows, I suggest Notepad to edit these files.

<br>
Run the scripts <b>Windows-1-run-version.bat/Linux-1-run-version.sh</b> located in <b>cypress/e2e</b>. <br>
On Windows, you might have to allow the main script to run.<br>
You might also have to wait for your antivirus to analyze the file.<br>
Mine started by denying access to the file, before allowing the script to be run.<br>
On Linux, the script needs to be made executable,<br>
with <code>chmod u+x Linux-1-run-version.sh</code> for example.
<br><br>
At times, the script generates no test.<br>
When this happens, re-run the script.<br>
<br>
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
