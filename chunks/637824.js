            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("736964"),
                l = n("401642"),
                r = n("152224"),
                o = n("599110"),
                u = n("371449"),
                d = n("224978"),
                c = n("885795"),
                E = n("49111"),
                f = n("782340"),
                _ = n("728221");

            function h(e) {
                let {
                    user: t,
                    key: n,
                    isFocused: h
                } = e, C = s.useContext(o.AnalyticsContext), I = e => {
                    e.stopPropagation(), i.default.unblockUser(t.id, {
                        location: "Friends"
                    })
                };
                return (0, a.jsx)(d.default, {
                    isFocused: h,
                    onClick: () => (0, l.openUserProfileModal)({
                        userId: t.id,
                        analyticsLocation: C.location
                    }),
                    user: t,
                    children: e => (0, a.jsxs)("div", {
                        className: _.listItemContents,
                        children: [(0, a.jsx)(c.default, {
                            user: t,
                            hovered: e,
                            status: E.StatusTypes.UNKNOWN,
                            subText: f.default.Messages.BLOCKED
                        }), (0, a.jsx)(u.default, {
                            icon: r.default,
                            actionType: u.default.ActionTypes.DENY,
                            tooltip: f.default.Messages.UNBLOCK,
                            onClick: I,
                            shouldHighlight: e
                        })]
                    })
                }, n)
            }