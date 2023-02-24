set generated-file-name=Generated-File_keywords-in-websites.cy.js
set debug=1

echo off

echo.
echo *****************************************************************************************************************************
echo This script creates a loop that re-runs the test generation if the test generation has failed,
echo until the test generation is successful, 
echo or until the 10th time, when the script stops.
echo *****************************************************************************************************************************

echo.
echo.

set NUMBER_OF_LINES_IN_GENERATED_FILE=0
FOR /L %%v IN (1 1 5 ) DO  (
    echo %%v
)
echo before loop
FOR /L %%v IN ( 1 1 10 ) DO  
(
    echo loop
    echo.
    @REM Lines to count in the generated file
    @REM if less than 7 lines are generated, the test generation has failed 
    
    

    @REM if %NUMBER_OF_LINES_IN_GENERATED_FILE% LSS 7 
    @REM (
    @REM     echo Deleting the previously generated tests (Generated-File_keywords-in-websites.cy.js)
    @REM     del %generated-file-name% 
    @REM     if %debug% equ 1 ( dir )
    @REM     if %debug% equ 1 ( pause )
    @REM     echo.
    @REM     echo.
    @REM     echo Starting the tests generation
    @REM     node kw-in-news-spec-generator.js
    @REM     echo Number of lines in the generated file
    @REM     find /c /v "" Generated-File_keywords-in-websites.cy.js
    @REM     for /f "usebackq delims==" %%i in (`find /c /v "" Generated-File_keywords-in-websites.cy.js`) do set command-output=%%i  
    @REM     @REM "---------- GENERATED-FILE_KEYWORDS-IN-WEBSITES.CY.JS: "
    @REM     @REM  has 54 characters
    @REM     SET NUMBER_OF_LINES_IN_GENERATED_FILE=%command-output:~54,-2%
    @REM     echo %command-output:~54,-2%
    @REM     ECHO *%NUMBER_OF_LINES_IN_GENERATED_FILE%* lines in the generated file

    @REM     pause
    @REM ) 
    @REM else 
    @REM (
    @REM     echo.
    @REM     echo.
    @REM     echo The test generation has been successful.
    @REM     echo.
    @REM     echo.
    @REM     echo Starting the tests run
    @REM     call spec-run.bat
    @REM     pause
    @REM     exit
    @REM )
)

@REM echo Number of lines in the generated file
    @REM find /c /v "" Generated-File_keywords-in-websites.cy.js
    @REM for /f "usebackq delims==" %%i in (`find /c /v "" Generated-File_keywords-in-websites.cy.js`) do set command-output=%%i  
    @REM @REM "---------- GENERATED-FILE_KEYWORDS-IN-WEBSITES.CY.JS: "
    @REM @REM  has 54 characters
    @REM SET NUMBER_OF_LINES_IN_GENERATED_FILE=%command-output:~54,-2%

    @REM @REM NUMBER_OF_LINES_IN_GENERATED_FILE=%NUMBER_OF_LINES_IN_GENERATED_FILE:~0,3%
    @REM ECHO *%NUMBER_OF_LINES_IN_GENERATED_FILE%* lines in the generated file

:: Credit to https://www.delftstack.com/howto/batch/batch-for-loop/?utm_content=cmp-true
:: for the FOR /L command

:: Credit to moonpoint for the line count
:: https://superuser.com/questions/1070825/how-to-find-count-of-lines-present-in-a-file-using-batch-script

:: https://ss64.com/nt/syntax-substring.html

:: Credit to GitHub Copilot