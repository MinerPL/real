            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("627445"),
                i = s.n(l),
                d = s("77078"),
                r = s("599110"),
                u = s("773336"),
                o = s("49111"),
                c = s("782340");

            function f(e) {
                let t = n.useCallback(() => {
                    i(null != e, "text cannot be null"), r.default.track(o.AnalyticEvents.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
                }, [e]);
                return u.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, a.jsx)(d.MenuItem, {
                    id: "search-google",
                    label: c.default.Messages.SEARCH_WITH_GOOGLE,
                    action: t
                }, "search-google")] : null
            }