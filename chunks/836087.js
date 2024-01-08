            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            }), n("70102"), n("222007");
            var a = n("37983"),
                s = n("884691"),
                r = n("414456"),
                i = n.n(r),
                l = n("917351"),
                u = n.n(l),
                o = n("446674"),
                d = n("862337"),
                c = n("77078"),
                f = n("272030"),
                E = n("901582"),
                h = n("373469"),
                p = n("697218"),
                S = n("427302"),
                _ = n("462579"),
                C = n("449008"),
                m = n("387111"),
                g = n("99795"),
                T = n("49111"),
                A = n("782340"),
                I = n("2081");

            function v(e, t) {
                switch (e) {
                    case g.ParticipantTypes.ACTIVITY:
                        return A.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                            numUsers: t
                        });
                    case g.ParticipantTypes.STREAM:
                        return A.default.Messages.SPECTATORS.format({
                            numViewers: t
                        });
                    default:
                        throw Error("Unknown participant type.")
                }
            }

            function M(e) {
                let {
                    users: t,
                    disableInteraction: n,
                    guildId: s,
                    participantType: r,
                    channelId: l,
                    handleUserContextMenu: u
                } = e, o = v(r, t.length);
                return (0, a.jsx)(c.Dialog, {
                    "aria-label": o,
                    className: I.popoutWrapper,
                    children: (0, a.jsxs)(c.Scroller, {
                        className: I.scroller,
                        children: [(0, a.jsx)(c.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: I.memberListHeader,
                            children: o
                        }), (0, a.jsx)("div", {
                            children: t.map(e => (0, a.jsx)(S.default, {
                                guildId: null != s ? s : void 0,
                                className: i(I.memberListItem, {
                                    [I.popoutDisabled]: n
                                }),
                                textClassName: I.memberListItemText,
                                user: e,
                                disablePopout: n,
                                nick: m.default.getNickname(s, l, e),
                                onContextMenu: t => n ? null : u(t, e)
                            }, e.id))
                        })]
                    })
                })
            }

            function O(e) {
                let {
                    users: t,
                    guildId: n,
                    channelId: s,
                    maxVisibleUsers: r = 3,
                    className: l,
                    participantType: u
                } = e, o = v(u, t.length), d = t.length < r ? t.map(e => (0, a.jsx)("div", {
                    className: I.viewersTooltipItem,
                    children: m.default.getName(n, s, e)
                }, e.id)) : o;
                return (0, a.jsx)(c.TooltipContainer, {
                    text: d,
                    "aria-label": o,
                    children: (0, a.jsxs)("div", {
                        className: i(I.viewers, l),
                        children: [(0, a.jsx)(_.default, {
                            className: I.viewersIcon
                        }), (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            children: t.length
                        })]
                    })
                })
            }
            let N = [];

            function D(e) {
                let {
                    channelId: t,
                    guildId: r,
                    participant: l,
                    className: S,
                    compact: _ = !1,
                    disableInteraction: m = !1,
                    maxVisibleUsers: A = 3
                } = e, [v, D] = s.useState(!1), L = s.useRef(new d.DelayedCall(150, () => D(!1))), y = (0, o.useStateFromStoresArray)([h.default, p.default], () => {
                    if (l.type === g.ParticipantTypes.STREAM) {
                        let e = h.default.getViewerIds(l.id);
                        return e.length > 0 ? e.map(e => p.default.getUser(e)).filter(C.isNotNullish) : N
                    }
                    return l.type === g.ParticipantTypes.ACTIVITY ? l.participants.size > 0 ? Array.from(l.participants).map(e => p.default.getUser(e)).filter(C.isNotNullish) : N : N
                }, [l]), R = s.useCallback(() => {
                    L.current.cancel(), D(!0)
                }, []), x = s.useCallback(() => {
                    L.current.delay()
                }, []), P = s.useCallback((e, t) => {
                    R(), (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("406784").then(n.bind(n, "406784"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            user: t
                        })
                    }, {
                        onClose: x
                    })
                }, [x, R]);
                if (0 === y.length) return null;
                if (_) return (0, a.jsx)(O, {
                    maxVisibleUsers: A,
                    users: y,
                    guildId: r,
                    channelId: t,
                    className: S,
                    participantType: l.type
                });
                let b = u(y).take(A).map(e => (0, a.jsx)(c.Avatar, {
                    src: e.getAvatarURL(r, 24),
                    "aria-label": e.username,
                    size: c.AvatarSizes.SIZE_24,
                    className: I.viewer
                }, e.id)).value();
                return y.length > A && (b[b.length - 1] = (0, a.jsxs)("div", {
                    className: I.overflow,
                    children: ["+", y.length - A + 1]
                }, "overflow")), (0, a.jsx)(E.default, {
                    section: T.AnalyticsSections.STREAM_VIEWER_POPOUT,
                    children: (0, a.jsx)("div", {
                        onMouseEnter: R,
                        onMouseLeave: x,
                        children: (0, a.jsx)(c.Popout, {
                            renderPopout: () => (0, a.jsx)(M, {
                                participantType: l.type,
                                handleUserContextMenu: P,
                                guildId: r,
                                channelId: t,
                                users: y,
                                disableInteraction: m
                            }),
                            shouldShow: v,
                            position: "top",
                            children: () => (0, a.jsx)("div", {
                                className: i(I.viewers, S),
                                children: b
                            })
                        })
                    })
                })
            }