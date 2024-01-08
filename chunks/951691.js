            "use strict";
            n.r(t), n.d(t, {
                useOtherStreams: function() {
                    return A
                },
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                r = n("77078"),
                i = n("901582"),
                l = n("191145"),
                u = n("976074"),
                o = n("856343"),
                d = n("16916"),
                c = n("373469"),
                f = n("42887"),
                E = n("697218"),
                h = n("394832"),
                p = n("985622"),
                S = n("356553"),
                _ = n("387111"),
                C = n("773336"),
                m = n("49111"),
                g = n("353927"),
                T = n("782340");

            function A(e, t, n) {
                let a = (0, s.useStateFromStores)([l.default], () => l.default.getSelectedParticipantId(e.id)),
                    r = (0, s.useStateFromStores)([c.default], () => null != a ? c.default.getActiveStreamForStreamKey(a) : null, [a]),
                    i = (0, s.useStateFromStoresArray)([E.default], () => {
                        let a = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
                            stream: t,
                            username: _.default.getName(e.getGuildId(), e.id, E.default.getUser(t.ownerId))
                        }));
                        return 1 === a.length && a[0].stream.ownerId === (null == r ? void 0 : r.ownerId) ? [] : a
                    }, [e, r, n, t]);
                return i
            }

            function I(e) {
                var t;
                let {
                    channel: n,
                    currentUser: s,
                    activeStreams: l,
                    hideSelfOptions: c = !1,
                    showReportOption: E = !1,
                    handleGoLive: _,
                    onClose: I,
                    onSelect: v,
                    appContext: M = m.AppContext.APP
                } = e, O = f.default.supports(g.Features.DESKTOP_CAPTURE_APPLICATIONS), N = null !== (t = l.find(e => e.ownerId === (null == s ? void 0 : s.id))) && void 0 !== t ? t : null, D = A(n, s, l), L = (0, o.default)(N, M), y = (0, u.default)(N, M, m.NOOP_NULL), R = null == N ? (0, a.jsx)(r.MenuItem, {
                    id: "share-your-screen",
                    label: T.default.Messages.SHARE_YOUR_SCREEN,
                    icon: h.default,
                    action: _
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [C.isPlatformEmbedded ? (0, a.jsx)(r.MenuItem, {
                        id: "stream-settings",
                        label: T.default.Messages.SCREENSHARE_STREAM_QUALITY,
                        children: L
                    }) : null, E ? y : null, O ? (0, a.jsx)(r.MenuItem, {
                        id: "change-windows",
                        label: T.default.Messages.SCREENSHARE_CHANGE_WINDOWS,
                        icon: h.default,
                        action: _
                    }) : null, (0, a.jsx)(r.MenuItem, {
                        id: "stop-streaming",
                        label: T.default.Messages.STOP_STREAMING,
                        icon: p.default,
                        action: () => (0, d.default)(N)
                    })]
                });
                return (0, a.jsx)(i.default, {
                    section: m.AnalyticsSections.CONTEXT_MENU,
                    children: (0, a.jsxs)(r.Menu, {
                        onSelect: v,
                        navId: "manage-streams",
                        onClose: I,
                        "aria-label": null != N ? T.default.Messages.STOP_STREAMING : T.default.Messages.SHARE_YOUR_SCREEN,
                        children: [(0, a.jsx)(r.MenuGroup, {
                            children: D.map(e => {
                                let {
                                    stream: t,
                                    username: n
                                } = e;
                                return (0, a.jsx)(r.MenuItem, {
                                    id: t.ownerId,
                                    label: T.default.Messages.STOP_WATCHING_USER.format({
                                        username: n
                                    }),
                                    icon: S.default,
                                    action: () => (0, d.default)(t)
                                }, "manage-stream-menu".concat(t.ownerId))
                            })
                        }), c ? null : R]
                    })
                })
            }