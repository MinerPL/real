            "use strict";
            n.r(t), n.d(t, {
                Avatars: function() {
                    return O
                },
                default: function() {
                    return b
                }
            }), n("222007");
            var a, l, s = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                u = n("446674"),
                o = n("77078"),
                d = n("997289"),
                c = n("191225"),
                f = n("706508"),
                h = n("501260"),
                p = n("577261"),
                m = n("698372"),
                E = n("969380"),
                C = n("401207"),
                S = n("141962"),
                g = n("320817"),
                _ = n("812204"),
                I = n("685665"),
                T = n("442939"),
                v = n("271938"),
                x = n("697218"),
                N = n("811305"),
                A = n("449008"),
                M = n("387111"),
                R = n("782340"),
                j = n("699996");
            (l = a || (a = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", l[l.LARGE = 2] = "LARGE";
            let L = ["embedded_background"];

            function O(e) {
                let {
                    avatarSize: t,
                    guildId: n,
                    channelId: a,
                    users: l
                } = e, i = null != t ? t : o.AvatarSizes.SIZE_32, r = (0, o.getAvatarSize)(i);
                return (0, s.jsx)(N.default, {
                    size: r,
                    guildId: n,
                    users: l,
                    max: 4,
                    renderUser: e => {
                        if (null == e) return null;
                        let t = M.default.getName(n, a, e);
                        return (0, s.jsx)(o.TooltipContainer, {
                            text: t,
                            color: o.TooltipColors.GREY,
                            children: (0, s.jsx)("img", {
                                src: e.getAvatarURL(n, r),
                                alt: t,
                                className: j.avatar
                            }, e.id)
                        }, e.id)
                    }
                })
            }

            function y(e) {
                var t, n, a, l;
                let {
                    participants: i,
                    application: p,
                    currentEmbeddedApplication: m,
                    channel: E,
                    width: C
                } = e;
                let g = (a = C) > 400 ? 2 : a > 300 ? 1 : 0;
                let [_] = (l = C) > 400 ? [o.AvatarSizes.SIZE_56, 56] : l > 300 ? [o.AvatarSizes.SIZE_32, 32] : [o.AvatarSizes.SIZE_24, 24], T = (0, u.useStateFromStoresArray)([x.default, v.default], () => Array.from(i).map(e => v.default.getId() === e ? null : x.default.getUser(e)).filter(A.isNotNullish)), N = (0, u.useStateFromStores)([c.default], () => c.default.getEmbeddedActivitiesForChannel(E.id).find(e => e.application_id === p.id)), {
                    analyticsLocations: L
                } = (0, I.default)(), y = (0, d.useAnalyticsContext)(), b = M.default.getName(E.getGuildId(), E.id, null == T ? void 0 : T[0]), P = (0, h.useEmbeddedActivityJoinability)({
                    userId: null === (t = x.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                    activity: N,
                    channelId: E.id,
                    application: p
                }), D = P === h.EmbeddedActivityJoinability.CAN_JOIN, U = null !== (n = E.getGuildId()) && void 0 !== n ? n : void 0;
                return (0, s.jsxs)("div", {
                    className: j.splash,
                    children: [(0, s.jsx)(O, {
                        avatarSize: _,
                        guildId: U,
                        channelId: E.id,
                        users: T
                    }), (0, s.jsx)(o.Text, {
                        className: r(j.subheader, {
                            [j.small]: 0 === g,
                            [j.medium]: 1 === g
                        }),
                        variant: "text-sm/normal",
                        children: T.length > 1 ? R.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                            username: b,
                            count: T.length - 1
                        }) : R.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
                            username: b
                        })
                    }), (0, s.jsx)(o.Text, {
                        className: r(j.header, {
                            [j.small]: 0 === g,
                            [j.medium]: 1 === g
                        }),
                        variant: "text-sm/normal",
                        children: p.name
                    }), (0, s.jsx)("div", {
                        className: j.buttons,
                        children: D ? (0, s.jsx)(o.Button, {
                            onClick: function(e) {
                                e.stopPropagation(), null != N && (0, f.default)({
                                    activity: N,
                                    currentEmbeddedApplication: m,
                                    activityChannelId: E.id,
                                    locationObject: y.location,
                                    embeddedActivitiesManager: S.default,
                                    analyticsLocations: L
                                })
                            },
                            size: function(e) {
                                switch (e) {
                                    case 2:
                                        return o.Button.Sizes.LARGE;
                                    case 1:
                                        return o.Button.Sizes.MEDIUM;
                                    case 0:
                                        return o.Button.Sizes.SMALL
                                }
                            }(g),
                            className: j.button,
                            color: o.Button.Colors.PRIMARY,
                            children: R.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
                        }) : null
                    })]
                })
            }

            function b(e) {
                let {
                    participant: t,
                    width: n,
                    selected: a,
                    interactible: l,
                    channel: i
                } = e, {
                    AnalyticsLocationProvider: r
                } = (0, I.default)(_.default.ACTIVITY_TILE), {
                    id: u
                } = t, o = (0, p.default)(), d = (null == o ? void 0 : o.channelId) === i.id && o.application_id === u, c = (0, m.default)(), [f] = (0, T.default)([u]), {
                    url: h
                } = (0, E.default)({
                    applicationId: u,
                    names: L,
                    size: 1024
                }), S = !d;
                return (0, s.jsx)(r, {
                    children: (0, s.jsx)("div", {
                        className: j.container,
                        children: (0, s.jsxs)(s.Fragment, {
                            children: [!a && d && (0, s.jsx)(C.default, {
                                className: j.iframe,
                                embedId: (0, g.default)(i.id, u)
                            }), S && null != f && null != h && "" !== h ? (0, s.jsx)("img", {
                                className: j.splashImage,
                                alt: f.name,
                                src: h
                            }) : null, !d && !a && null != f && (0, s.jsx)(y, {
                                width: n,
                                channel: i,
                                participants: t.participants,
                                application: f,
                                currentEmbeddedApplication: c
                            }), l || S ? null : (0, s.jsx)("div", {
                                className: j.clickShield
                            })]
                        })
                    })
                })
            }