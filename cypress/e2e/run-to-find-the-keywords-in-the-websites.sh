set generatedFileName="Generated-File_keywords-in-websites.cy.js"
clear
echo "**************************************************************************"
echo "Please do not mind the randomly generated order of the tests."
echo "Re-run the script if no test is generated."
echo "Note: You might have false positives,"
echo "that is, a screenshot is taken without the keyword being on the picture."
echo "That being said, the program does find the keywords in some of the pages."
echo "**************************************************************************

echo "Deleting previous specs screenshots"
rm -f "../screenshots/$generatedFileName/*.*" 2>nul
rm $generatedFileName 2>nul

echo "Starting the tests generation"
node kw-in-news-spec-generator.js

echo "a 10s sleep value in case of test generation issue.""

sleep 10

cd ../..
./node_modules/cypress/bin/cypress run --config screenshotOnRunFailure=false,video=false --spec ./cypress/e2e/$generatedFileName
cd cypress/e2e
