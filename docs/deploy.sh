#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
# vuepress build --dest ./public
npm run docs:build

# �������ɵ��ļ���
cd docs/.vuepress/dist

# ����Ƿ������Զ�������
# echo 'blog.gusibi.mobi' > CNAME

git add -A
git commit -m 'first commit'

# ������ https://<USERNAME>.github.io
git push -f https://github.com/BeautifulGirl230/MyVueproess.git master

# ��������� https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
