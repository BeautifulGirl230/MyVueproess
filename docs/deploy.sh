#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# vuepress build --dest ./public
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'blog.gusibi.mobi' > CNAME

git init
git add -A
git commit -m 'first commit'

# 发布到 https://<USERNAME>.github.io
git push -f git@github.com:BeautifulGirl230/MyVueproess.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
