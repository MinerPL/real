            "use strict";
            n.r(t), n.d(t, {
                IS_APP_COMPATIBLE_BROWSER: function() {
                    return l
                },
                BROWSER_SUPPORTS_VOICE: function() {
                    return u
                },
                BROWSER_SUPPORTS_VIDEO: function() {
                    return c
                },
                BROWSER_SUPPORTS_UNIFIED_PLAN: function() {
                    return d
                },
                BROWSER_SUPPORTS_DIAGNOSTICS: function() {
                    return f
                },
                BROWSER_SUPPORTS_CONNECTION_STATE: function() {
                    return E
                }
            });
            var i, r = n("383536"),
                s = n.n(r);
            let a = parseInt(null !== (i = s.version) && void 0 !== i ? i : "0", 10),
                o = void 0 !== s.ua && s.ua.indexOf("OculusBrowser") > -1,
                l = (() => {
                    if (null == window.WebSocket) return !1;
                    switch (s.name) {
                        case "IE":
                        case "Microsoft Edge":
                            return a >= 15;
                        default:
                            return !0
                    }
                })(),
                u = o || "Firefox" === s.name && a >= 80 || "Chrome" === s.name && a >= 37 || "Opera" === s.name && a >= 66 || "Node.js" === s.name && a >= 6 || "Electron" === s.name && a >= 1 || "Safari" === s.name && a >= 13 || "Microsoft Edge" === s.name && a >= 37,
                c = "Chrome" === s.name || "Safari" === s.name || "Firefox" === s.name && a >= 80 || "Opera" === s.name || "Microsoft Edge" === s.name,
                d = o || "Firefox" === s.name && a >= 73 || "Safari" === s.name && a >= 13 || "Chrome" === s.name && a >= 80 || "Microsoft Edge" === s.name && a >= 80,
                f = "Chrome" === s.name && a >= 58 || "Safari" === s.name && a >= 15 || "Firefox" === s.name && a >= 108,
                E = "Chrome" === s.name && a >= 72 || "Safari" === s.name && a >= 11 || "Opera" === s.name && a >= 60 || "Microsoft Edge" === s.name && a >= 79