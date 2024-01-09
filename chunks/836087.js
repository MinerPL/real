            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("70102"), n("222007");
            var a = n("37983"),
                r = n("884691"),
                s = n("414456"),
                i = n.n(s),
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
                I = n("782340"),
                A = n("2081");

            function v(e, t) {
                switch (e) {
                    case g.ParticipantTypes.ACTIVITY:
                        return I.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                            numUsers: t
                        });
                    case g.ParticipantTypes.STREAM:
                        return I.default.Messages.SPECTATORS.format({
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
                    guildId: r,
                    participantType: s,
                    channelId: l,
                    handleUserContextMenu: u
                } = e, o = v(s, t.length);
                return (0, a.jsx)(c.Dialog, {
                    "aria-label": o,
                    className: A.popoutWrapper,
                    children: (0, a.jsxs)(c.Scroller, {
                        className: A.scroller,
                        children: [(0, a.jsx)(c.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: A.memberListHeader,
                            children: o
                        }), (0, a.jsx)("div", {
                            children: t.map(e => (0, a.jsx)(S.default, {
                                guildId: null != r ? r : void 0,
                                className: i(A.memberListItem, {
                                    [A.popoutDisabled]: n
                                }),
                                textClassName: A.memberListItemText,
                                user: e,
                                disablePopout: n,
                                nick: m.default.getNickname(r, l, e),
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
                    channelId: r,
                    maxVisibleUsers: s = 3,
                    className: l,
                    participantType: u
                } = e, o = v(u, t.length), d = t.length < s ? t.map(e => (0, a.jsx)("div", {
                    className: A.viewersTooltipItem,
                    children: m.default.getName(n, r, e)
                }, e.id)) : o;
                return (0, a.jsx)(c.TooltipContainer, {
                    text: d,
                    "aria-label": o,
                    children: (0, a.jsxs)("div", {
                        className: i(A.viewers, l),
                        children: [(0, a.jsx)(_.default, {
                            className: A.viewersIcon
                        }), (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            children: t.length
                        })]
                    })
                })
            }
            let N = [];

            function L(e) {
                let {
                    channelId: t,
                    guildId: s,
                    participant: l,
                    className: S,
                    compact: _ = !1,
                    disableInteraction: m = !1,
                    maxVisibleUsers: I = 3
                } = e, [v, L] = r.useState(!1), y = r.useRef(new d.DelayedCall(150, () => L(!1))), D = (0, o.useStateFromStoresArray)([h.default, p.default], () => {
                    if (l.type === g.ParticipantTypes.STREAM) {
                        let e = h.default.getViewerIds(l.id);
                        return e.length > 0 ? e.map(e => p.default.getUser(e)).filter(C.isNotNullish) : N
                    }
                    return l.type === g.ParticipantTypes.ACTIVITY ? l.participants.size > 0 ? Array.from(l.participants).map(e => p.default.getUser(e)).filter(C.isNotNullish) : N : N
                }, [l]), R = r.useCallback(() => {
                    y.current.cancel(), L(!0)
                }, []), x = r.useCallback(() => {
                    y.current.delay()
                }, []), P = r.useCallback((e, t) => {
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
                if (0 === D.length) return null;
                if (_) return (0, a.jsx)(O, {
                    maxVisibleUsers: I,
                    users: D,
                    guildId: s,
                    channelId: t,
                    className: S,
                    participantType: l.type
                });
                let b = u(D).take(I).map(e => (0, a.jsx)(c.Avatar, {
                    src: e.getAvatarURL(s, 24),
                    "aria-label": e.username,
                    size: c.AvatarSizes.SIZE_24,
                    className: A.viewer
                }, e.id)).value();
                return D.length > I && (b[b.length - 1] = (0, a.jsxs)("div", {
                    className: A.overflow,
                    children: ["+", D.length - I + 1]
                }, "overflow")), (0, a.jsx)(E.default, {
                    section: T.AnalyticsSections.STREAM_VIEWER_POPOUT,
                    children: (0, a.jsx)("div", {
                        onMouseEnter: R,
                        onMouseLeave: x,
                        children: (0, a.jsx)(c.Popout, {
                            renderPopout: () => (0, a.jsx)(M, {
                                participantType: l.type,
                                handleUserContextMenu: P,
                                guildId: s,
                                channelId: t,
                                users: D,
                                disableInteraction: m
                            }),
                            shouldShow: v,
                            position: "top",
                            children: () => (0, a.jsx)("div", {
                                className: i(A.viewers, S),
                                children: b
                            })
                        })
                    })
                })
            }