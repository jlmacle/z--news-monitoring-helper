SETLOCAL ENABLEDELAYEDEXPANSION
set generated-file-name=Generated-File_keywords-in-websites.cy.js
set debug=1

cls
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

FOR /L %%v IN ( 1 1 10 ) DO  (   
    echo.
    echo.
    echo %%v 
    echo.
    @REM Lines to count in the generated file
    @REM if less than 7 lines are generated, the test generation has failed 

    if !NUMBER_OF_LINES_IN_GENERATED_FILE! LSS 7 (
        echo !NUMBER_OF_LINES_IN_GENERATED_FILE! is less than 7
        echo Deleting the previously generated tests (Generated-File_keywords-in-websites.cy.js)
        del !generated-file-name! 
        if !debug! equ 1 ( dir )
        if !debug! equ 1 ( pause )
        echo.
        echo.
        echo Starting the tests generation
        node kw-in-news-spec-generator.js
        echo Number of lines in the generated file
        find /c /v "" Generated-File_keywords-in-websites.cy.js
        for /f "usebackq delims==" %%i in (`find /c /v "" Generated-File_keywords-in-websites.cy.js`) do set command-output=%%i  
        @REM "---------- GENERATED-FILE_KEYWORDS-IN-WEBSITES.CY.JS: "
        @REM  has 54 characters
        set NUMBER_OF_LINES_IN_GENERATED_FILE=!command-output:~54,-2!
        echo *!NUMBER_OF_LINES_IN_GENERATED_FILE!* lines in the generated file

    ) 
    else (
        echo.
        echo.
        echo The test generation has been successful.
        echo.
        echo.
        echo Starting the tests run
        call spec-run.bat
        pause
        exit
    )
)

:: Credit to https://www.delftstack.com/howto/batch/batch-for-loop/?utm_content=cmp-true
:: for the FOR /L command

:: Credit to moonpoint for the line count
:: https://superuser.com/questions/1070825/how-to-find-count-of-lines-present-in-a-file-using-batch-script

:: https://ss64.com/nt/syntax-substring.html

:: Credit to GitHub Copilot