            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var i = n("943224"),
                r = n.n(i),
                s = n("917351"),
                a = n.n(s),
                o = n("746379"),
                l = n("49111");
            let u = /(?:^|\.)(?:discordapp|discord)\.com$/i,
                c = r.v4().source,
                d = "(?:".concat("(?:(?:[a-z]+:)?//)", "|www\\.)").concat("(?:\\S+(?::\\S*)?@)?", "(?:localhost|").concat(c, "|").concat("(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+").concat("(?:(?:[a-z\\u00a1-\\uffff]{2,}))", ")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?'),
                f = RegExp(d, "ig"),
                E = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]);

            function h(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                return u.test(e) || n && (t = e, E.has(t.toLowerCase()))
            }

            function p(e) {
                return null != e && "discord:" === e
            }

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return null != e && h(o.parse(e).hostname, t)
            }

            function S(e) {
                return null != e && p(o.parse(e).protocol)
            }
            var m = {
                URL_REGEX: f,
                isDiscordHostname: h,
                isDiscordLocalhost: function(e, t) {
                    return null != e && null != t && (window.location.host === e || !1)
                },
                isDiscordProtocol: p,
                isDiscordUrl: _,
                isDiscordUri: S,
                isDiscordCdnUrl: function(e) {
                    return null != e && o.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST
                },
                isDiscordUrlOrUri: e => _(e) || S(e),
                isAppRoute: e => {
                    let t = e.toLowerCase();
                    return t.startsWith("/channels/") || t.startsWith(l.Routes.APPLICATION_STORE) || t.startsWith(l.Routes.APPLICATION_LIBRARY) || t.startsWith(l.Routes.MESSAGE_REQUESTS) || t.startsWith(l.Routes.ACTIVITIES) || t.startsWith(l.Routes.COLLECTIBLES_SHOP) || t.startsWith(l.Routes.ACTIVITY)
                },
                format: e => o.format(e),
                formatPathWithQuery: (e, t) => o.format({
                    pathname: e,
                    query: a.pickBy(t)
                }),
                formatSearch: e => o.format({
                    query: a.pickBy(e)
                }),
                safeParseWithQuery(e) {
                    try {
                        return o.parse(e, !0)
                    } catch (e) {
                        return null
                    }
                },
                makeUrl: function(e) {
                    let t = __DEV__ ? window.GLOBAL_ENV.INVITE_HOST : location.host;
                    return "".concat(location.protocol, "//").concat(t).concat(e)
                }
            }