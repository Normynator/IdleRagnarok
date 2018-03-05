from fabric.api import local

# currently not working
# use:
# node_modules/.bin/webpack --config webpack.stage.config.js
# node_modules/.bin/webpack --config webpack.prod.config.js


def webpack():
    local('rm -rf req_files/static/bundles/stage/*')
    local('rm -rf req_files/static/bundles/prod/*')
    local('webpack --config webpack.stage.config.js --progress --colors')
    local('webpack --config webpack.prod.config.js --progress --colors')
