build:
    npm run build
    rm -rf ./docs
    mv ./dist/* ./dist/..

dev:
    npm run dev