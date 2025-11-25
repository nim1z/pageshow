#!/bin/bash
uglifyjs ./pointrally.js -o pointrally.min.js --compress --mangle
mv pointrally.js pointrally.js.bak
mv pointrally.min.js pointrally.js
7z a -r $1.zip .htaccess LICENSE.txt dummy.html favicon.ico index.html media menu.html pointrally.js tag test
mv pointrally.js pointrally.min.js
mv pointrally.js.bak pointrally.js
