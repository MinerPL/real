            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("736964"),
                l = n("390790"),
                r = n("401642"),
                o = n("36694"),
                u = n("945330"),
                d = n("599110"),
                c = n("371449"),
                E = n("224978"),
                f = n("559541"),
                _ = n("49111"),
                h = n("782340"),
                C = n("858401");

            function T(e) {
                let {
                    user: t,
                    nickname: n,
                    status: T,
                    isFocused: I
                } = e, S = s.useContext(d.AnalyticsContext), N = e => {
                    null == e || e.stopPropagation(), i.default.addRelationship({
                        userId: t.id,
                        context: {
                            location: "Friends"
                        },
                        type: void 0,
                        friendToken: void 0,
                        fromFriendSuggestion: !0
                    })
                }, A = e => {
                    null == e || e.stopPropagation(), l.default.ignore(t.id)
                }, p = T === _.StatusTypes.OFFLINE ? _.StatusTypes.UNKNOWN : T;
                return (0, a.jsx)(E.default, {
                    isFocused: I,
                    user: t,
                    onClick: () => (0, r.openUserProfileModal)({
                        userId: t.id,
                        analyticsLocation: S.location
                    }),
                    children: e => {
                        let s = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(c.default, {
                                icon: o.default,
                                actionType: c.default.ActionTypes.ACCEPT,
                                tooltip: h.default.Messages.FRIEND_REQUEST_ACCEPT,
                                onClick: N,
                                shouldHighlight: e
                            }), (0, a.jsx)(c.default, {
                                icon: u.default,
                                actionType: c.default.ActionTypes.DENY,
                                tooltip: h.default.Messages.FRIEND_REQUEST_IGNORE,
                                onClick: A,
                                shouldHighlight: e
                            })]
                        });
                        return (0, a.jsxs)("div", {
                            className: C.listItemContents,
                            children: [(0, a.jsx)(f.default, {
                                user: t,
                                hovered: e,
                                status: p,
                                subText: n,
                                className: C.userInfo
                            }), (0, a.jsx)("div", {
                                className: C.actions,
                                children: s
                            })]
                        })
                    }
                })
            }