set generated-file-name=Generated-File_keywords-in-websites.cy.js
clear
echo "**************************************************************************"
echo "Please do not mind the randomly generated order of the tests."
echo "Re-run the script if no test is generated."
echo "Note: You might have false positives,"
echo "that is, a screenshot is taken without the keyword being on the picture."
echo "That being said, the program does find the keywords in some of the pages."
echo "**************************************************************************
sleep 120

echo "Deleting previous specs screenshots"
rm -f "../screenshots/$generated-file-name/*.*" 2>nul
rm $generated-file-name 2>nul
sleep 300

echo "Starting the tests generation"
node kw-in-news-spec-generator.js
echo "a TimeOut value in case of test generation issue.""

sleep 10

start "Tests run by Cypress" spec-run.sh
