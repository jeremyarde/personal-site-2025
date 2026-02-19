build:
    npm run build
    rm -rf ./docs
    rm -rf _astro
    rm -rf blog
    rm -rf projects
    mv ./dist/* ./dist/..

run:
    npm run dev



# npx tsx tools/screenshot.ts https://gethashdown.com public/screenshots/hashdown.png
screenshots:
    npx tsx tools/screenshot.ts https://gethashdown.com public/screenshots/hashdown.png
    npx tsx tools/screenshot.ts https://uptime.jeremyarde.com/ public/screenshots/uptime.png
    npx tsx tools/screenshot.ts https://hoverpane.com public/screenshots/hoverpane.png


inspo: 
    npx tsx tools/screenshot.ts https://www.eushi.design/ public/screenshots/inspo.png