build:
    npm run build

cf-build:
    npm run build
    if rg -q "personal-site-2025/" ./dist; then echo "Build contains the retired GitHub Pages subpath."; exit 1; fi

run:
    npm run dev

# Cloudflare Pages (one-time setup)
cf-login:
    npx wrangler login

# Creates the Pages project once. The default project name can be overridden:
# just cf-init my-pages-project
cf-init project="personal-site-2025":
    npx wrangler pages project create {{project}} --production-branch main

# Builds and uploads a preview deployment. Override the project or branch when needed:
# just cf-preview my-pages-project feature-name
cf-preview project="personal-site-2025" branch="preview":
    just cf-build
    npx wrangler pages deploy ./dist --project-name {{project}} --branch {{branch}}

# Builds and uploads the production deployment from main:
# just cf-deploy
cf-deploy project="personal-site-2025":
    just cf-build
    npx wrangler pages deploy ./dist --project-name {{project}} --branch main



# npx tsx tools/screenshot.ts https://gethashdown.com public/screenshots/hashdown.png
screenshots:
    npx tsx tools/screenshot.ts https://gethashdown.com public/screenshots/hashdown.png
    npx tsx tools/screenshot.ts https://uptime.jeremyarde.com/ public/screenshots/uptime.png
    npx tsx tools/screenshot.ts https://hoverpane.com public/screenshots/hoverpane.png


inspo: 
    npx tsx tools/screenshot.ts https://www.eushi.design/ public/screenshots/inspo.png
