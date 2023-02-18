set generated-file-name=Generated-File_keywords-in-websites.cy.js
set debug=1

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

echo.
echo.
echo Deleting previous specs screenshots
del /f "../screenshots/%generated-file-name%/*.*" 
if %debug% equ 1  ( dir "../screenshots/%generated-file-name%/" )

echo.
echo.
echo Deleting the previously generated tests
del %generated-file-name% 
if %debug% equ 1 ( dir )
if %debug% equ 1 ( timeout /T 15 )

echo.
echo.
echo Starting the tests generation
node kw-in-news-spec-generator.js
echo a TimeOut value in case of test generation issue.

timeout /T 10

start "Tests run by Cypress" spec-run.bat
