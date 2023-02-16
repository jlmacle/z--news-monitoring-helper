set generated-file-name=Generated-File_keywords-in-websites.cy.js

cls
echo off

echo ************************************************************************** 
echo Please do not mind the randomly generated order of the tests.
echo Re-run the script if no test is generated.
echo Note: You might have false positives,
echo that is, a screenshot is taken without the keyword being on the picture.
echo That being said, the program does find the keywords in some of the pages.
echo **************************************************************************
timeout /T 120

echo Deleting previous specs screenshots
del /f "../screenshots/%generated-file-name%/*.*" 2>nul
del %generated-file-name% 2>nul
timeout /T 300

echo Generating the tests
node kw-in-news-spec-generator.js
echo a TimeOut value in case of test generation issue.

timeout /T 10

start "Tests run by Cypress" spec-run.bat

