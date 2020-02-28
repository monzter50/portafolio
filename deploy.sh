#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<monzter50>.github.io
# git push -f git@github.com:<monzter50>/<monzter50>.github.io.git master

# if you are deploying to https://<monzter50>.github.io/<portafolio>
# git push -f git@github.com:<monzter50>/<portafolio>.git master:gh-pages

cd -