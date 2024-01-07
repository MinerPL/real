            "use strict";
            n.r(t), n.d(t, {
                UserProfileSections: function() {
                    return r
                },
                UserProfileTypes: function() {
                    return s
                },
                getBadgeAsset: function() {
                    return o
                }
            });
            var l, i, r, s, a = n("49111");

            function o(e) {
                let {
                    API_ENDPOINT: t,
                    CDN_HOST: n
                } = window.GLOBAL_ENV;
                return null != n ? "".concat(location.protocol, "//").concat(n, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(a.Endpoints.BADGE_ICON(e))
            }(l = r || (r = {})).USER_INFO = "USER_INFO", l.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", l.ACTIVITY = "ACTIVITY", l.MUTUAL_GUILDS = "MUTUAL_GUILDS", l.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", l.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (i = s || (s = {})).POPOUT = "POPOUT", i.MODAL = "MODAL", i.SETTINGS = "SETTINGS", i.PANEL = "PANEL", i.CARD = "CARD", i.POMELO_POPOUT = "POMELO_POPOUT", i.CANCEL_MODAL = "CANCEL_MODAL"