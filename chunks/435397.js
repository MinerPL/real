            "use strict";
            var n, i = r("807064"),
                o = "Unknown",
                a = {
                    "Mac OS": "Mac OS X"
                },
                u = new i().getResult(),
                s = function(t) {
                    if (!t) return {
                        major: "",
                        minor: ""
                    };
                    var e = t.split(".");
                    return {
                        major: e[0],
                        minor: e[1]
                    }
                }(u.browser.version);
            var c = {
                browserArchitecture: u.cpu.architecture || o,
                browserFullVersion: u.browser.version || o,
                browserMinorVersion: s.minor || o,
                browserName: u.browser.name || o,
                browserVersion: u.browser.major || o,
                deviceName: u.device.model || o,
                engineName: u.engine.name || o,
                engineVersion: u.engine.version || o,
                platformArchitecture: u.cpu.architecture || o,
                platformName: a[n = u.os.name] || n || o,
                platformVersion: u.os.version || o,
                platformFullVersion: u.os.version || o
            };
            t.exports = c