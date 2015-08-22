cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rjfun.cordova.iad/www/iAd.js",
        "id": "com.rjfun.cordova.iad.iAd",
        "clobbers": [
            "window.iAd"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "clobbers": [
            "cordova.logger"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.rjfun.cordova.iad": "2.0.4",
    "org.apache.cordova.console": "0.2.13",
    "com.rjfun.cordova.extension": "1.1.4"
}
// BOTTOM OF METADATA
});