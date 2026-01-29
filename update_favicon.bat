@echo off
copy /Y "e:\europe-bound-design\src\assets\logo.png" "e:\europe-bound-design\public\logo.png"
if %errorlevel% equ 0 (
    echo Copy successful
) else (
    echo Copy failed
)
