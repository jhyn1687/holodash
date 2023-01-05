#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'holodash.jhyn.dev' > CNAME

git init
git checkout -B page
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git page

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jhyn1687/holodash.git page:gh-pages

cd -