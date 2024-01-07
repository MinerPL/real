            "use strict";
            r("781738");
            var n = r("435397"),
                i = r("826493"),
                o = r("593008"),
                a = r("446195");

            function u(t, e, r, n) {
                if (t === r) return !0;
                if (!r.startsWith(t)) return !1;
                var o = r.slice(t.length);
                return !!e && (o = n ? n(o) : o, i.contains(o, e))
            }

            function s(t) {
                return "Windows" === n.platformName ? t.replace(/^\s*NT/, "") : t
            }
            t.exports = o({
                isBrowser: function(t) {
                    return u(n.browserName, n.browserFullVersion, t)
                },
                isBrowserArchitecture: function(t) {
                    return u(n.browserArchitecture, null, t)
                },
                isDevice: function(t) {
                    return u(n.deviceName, null, t)
                },
                isEngine: function(t) {
                    return u(n.engineName, n.engineVersion, t)
                },
                isPlatform: function(t) {
                    return u(n.platformName, n.platformFullVersion, t, s)
                },
                isPlatformArchitecture: function(t) {
                    return u(n.platformArchitecture, null, t)
                }
            }, a)