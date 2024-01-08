            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("446674"),
                r = n("397485"),
                u = n("170152"),
                o = n("782340"),
                d = n("850324");

            function c(e) {
                let t, {
                        channelId: n,
                        userId: l
                    } = e,
                    [c, f] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.getWaitingHighFive(n, l), u.default.getCompletedHighFive(n, l)]);
                if (null != f) t = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("img", {
                        alt: o.default.Messages.CALL_HIGH_FIVE_EXCLAMATION,
                        src: (0, r.getEffectUrl)({
                            name: f[0],
                            id: null,
                            animated: !1
                        }),
                        className: s(d.completeLeft, d.highFive)
                    }), (0, a.jsx)("img", {
                        alt: o.default.Messages.CALL_HIGH_FIVE_EXCLAMATION,
                        src: (0, r.getEffectUrl)({
                            name: f[1],
                            id: null,
                            animated: !1
                        }),
                        className: s(d.completeRight, d.highFive)
                    })]
                });
                else {
                    if (null == c) return null;
                    t = (0, a.jsx)("img", {
                        alt: o.default.Messages.CALL_HIGH_FIVE_EXCLAMATION,
                        src: (0, r.getEffectUrl)({
                            name: c,
                            id: null,
                            animated: !1
                        }),
                        className: s(d.waiting, d.highFive)
                    })
                }
                return (0, a.jsx)("div", {
                    className: d.root,
                    children: t
                })
            }