<<<<<<< HEAD
#!/bin/bash


basePath=$(cd `dirname $0`; pwd)
cd ${basePath}/../
rm -r dist

npm run prepublish

./node_modules/.bin/webpack
./node_modules/.bin/webpack -p
./node_modules/.bin/webpack --config extension/webpack.config.js
./node_modules/.bin/webpack --config extension/webpack.config.js -p


=======
#!/bin/bash


basePath=$(cd `dirname $0`; pwd)
cd ${basePath}/../
rm -r dist

npm run prepublish

./node_modules/.bin/webpack
./node_modules/.bin/webpack -p
./node_modules/.bin/webpack --config extension/webpack.config.js
./node_modules/.bin/webpack --config extension/webpack.config.js -p


>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
