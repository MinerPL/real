            "use strict";
            s.r(t), s.d(t, {
                makeDesktopDownloadURL: function() {
                    return d
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return E
                },
                getMobileDownloadLink: function() {
                    return T
                }
            });
            var a = s("597755"),
                n = s.n(a),
                l = s("815157"),
                i = s("271938"),
                r = s("49111");
            let u = "linux";

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != s ? "&format=".concat(s) : "")
            }

            function o() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = n.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? u : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [u]: "Linux"
                })[o(e)]
            }

            function E() {
                let e = o();
                return d(e, !1, e === u ? "tar.gz" : null)
            }

            function T(e, t, s) {
                let a = null != s ? s.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != a ? a : "https://www.discord.com"
                }
            }