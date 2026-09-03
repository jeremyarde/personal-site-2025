build:
    npm run build

dev:
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
    just build
    npx wrangler pages deploy ./dist --project-name {{project}} --branch {{branch}}

# Builds and uploads the production deployment from main:
# just cf-deploy
cf-deploy project="personal-site-2025": build
    npx wrangler pages deploy ./dist --project-name {{project}} --branch main



# npx tsx tools/screenshot.ts https://gethashdown.com public/screenshots/hashdown.png
screenshots:
    npx tsx tools/screenshot.ts https://gethashdown.com public/screenshots/hashdown.png
    npx tsx tools/screenshot.ts https://uptime.jeremyarde.com/ public/screenshots/uptime.png
    npx tsx tools/screenshot.ts https://hoverpane.com public/screenshots/hoverpane.png


inspo: 
    # prompt:
    #     I want you to build me a couple examples of my personal site.
    # Follow this procedure:
    # 1. Generate a long, random alphanumeric string using a shell script.
    # 2. Define the creative direction (color scheme, layout, typography, etc.) based on the string. Look beyond the surface for subpatterns, special numbers, anything that inspires you.
    # 3. Use your judgment to bring this direction to life and make it look great.
    # 4. Don’t reveal the string in the design. It’s only for your inspiration.
