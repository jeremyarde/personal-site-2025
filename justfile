build:
    npm run build
    rm -rf ./docs
    rm -rf _astro
    rm -rf blog
    rm -rf projects
    mv ./dist/* ./dist/..

dev:
    npm run dev