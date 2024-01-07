            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("67164"),
                i = n("819855"),
                l = n("49111");
            let r = e => {
                let {
                    theme: t,
                    ...n
                } = e, r = (0, i.isThemeDark)(t) ? "dark" : "light";
                return (0, a.jsx)(s.default, {
                    sitekey: l.RECAPTCHA_SITE_KEY,
                    ...n,
                    theme: r
                })
            };
            r.Themes = {
                LIGHT: "light",
                DARK: "dark"
            }, r.Sizes = {
                COMPACT: "compact",
                NORMAL: "normal",
                INVISIBLE: "invisible"
            };
            var o = r