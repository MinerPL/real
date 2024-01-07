            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            }), l("794252");
            var a, s, r = l("37983");
            l("884691");
            var n = l("414456"),
                o = l.n(n),
                i = l("506838"),
                u = l("956089"),
                c = l("782340"),
                d = l("224609");
            (s = a || (a = {})).BANNER = "banner", s.MODAL = "modal", s.CARD = "card";
            var f = e => {
                let {
                    category: t,
                    display: l,
                    className: a
                } = e;
                if (null == t.unpublishedAt) return null;
                let s = function(e) {
                    let t = new Date,
                        l = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
                        a = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
                    return Math.floor((a - l) / 864e5)
                }(t.unpublishedAt);

                function n(e) {
                    return (0, r.jsx)(u.TextBadge, {
                        disableColor: !0,
                        text: e,
                        className: o(d.badge, a)
                    })
                }
                return (0, i.match)([l, s > 1]).with(["card", !0], () => null).with(["banner", !0], () => {
                    let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
                        days: s
                    });
                    return n(e)
                }).with(["modal", !0], () => {
                    let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
                        days: s
                    });
                    return n(e)
                }).otherwise(() => {
                    let e = c.default.Messages.COLLECTIBLES_LAST_DAY;
                    return n(e)
                })
            }