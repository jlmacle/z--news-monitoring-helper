clear
GENERATED_FILE_NAME="Generated-File_keywords-in-websites.cy.js"

echo "**************************************************************************"
echo "Please do not mind the randomly generated order of the tests."
echo "Re-run the script if no test is generated."
echo "Note: You might have false positives,"
echo "that is, a screenshot is taken without the keyword being on the picture."
echo "That being said, the program does find the keywords in some of the pages."
echo "**************************************************************************"


echo 
echo "Deleting previous specs screenshots"
rm -rf "../screenshots/$GENERATED_FILE_NAME" 
ls -la ../screenshots

echo
echo "Deleting the previously generated tests"
rm -f $GENERATED_FILE_NAME 
ls

echo
echo "Starting the tests generation"
node kw-in-news-spec-generator.js

sleep 5

cd ../..
./node_modules/cypress/bin/cypress run --config screenshotOnRunFailure=false,video=false --spec ./cypress/e2e/$generatedFileName
cd cypress/e2e


# Credits to karakfa for the read command
# https://stackoverflow.com/questions/36538150/linuxs-equivalent-of-windows-timeout-command

# Credit to wyanez for echoing an empty line
# https://stackoverflow.com/questions/37052899/what-is-the-preferred-method-to-echo-a-blank-line-in-a-shell-script
