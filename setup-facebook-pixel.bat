@echo off
echo ========================================
echo Facebook Pixel Setup Script
echo ========================================
echo.

REM Check if .env.local exists
if not exist .env.local (
    echo Creating .env.local file...
    type nul > .env.local
    echo ✅ .env.local file created
) else (
    echo ✅ .env.local file already exists
)

echo.
echo Adding Facebook Pixel configuration...

REM Add Facebook Pixel configuration
echo # Facebook Pixel Configuration >> .env.local
echo NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_pixel_id_here >> .env.local
echo. >> .env.local
echo # Facebook Conversions API Token (for server-side tracking) >> .env.local
echo FACEBOOK_CONVERSION_TOKEN=your_conversion_token_here >> .env.local
echo. >> .env.local
echo # Optional: Test Event Code (for testing) >> .env.local
echo FACEBOOK_TEST_EVENT_CODE=your_test_event_code_here >> .env.local
echo. >> .env.local

echo ✅ Configuration added to .env.local
echo.
echo ========================================
echo NEXT STEPS:
echo ========================================
echo 1. Replace 'your_pixel_id_here' with your actual Facebook Pixel ID
echo 2. Replace 'your_conversion_token_here' with your Facebook Conversion Token
echo 3. (Optional) Replace 'your_test_event_code_here' with your test event code
echo 4. Restart your development server: npm run dev
echo.
echo ========================================
echo HEALTH CHECK:
echo ========================================
echo After setup, visit: http://localhost:3000/api/facebook-conversion
echo This will show if your configuration is working correctly.
echo.
pause
