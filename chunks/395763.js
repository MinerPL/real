            "use strict";
            n.r(t), n.d(t, {
                Avatars: function() {
                    return O
                },
                default: function() {
                    return P
                }
            }), n("222007");
            var a, l, s = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("446674"),
                u = n("77078"),
                d = n("997289"),
                c = n("191225"),
                f = n("706508"),
                h = n("501260"),
                p = n("577261"),
                m = n("698372"),
                E = n("969380"),
                C = n("401207"),
                g = n("141962"),
                S = n("320817"),
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
                } = e, i = null != t ? t : u.AvatarSizes.SIZE_32, r = (0, u.getAvatarSize)(i);
                return (0, s.jsx)(N.default, {
                    size: r,
                    guildId: n,
                    users: l,
                    max: 4,
                    renderUser: e => {
                        if (null == e) return null;
                        let t = M.default.getName(n, a, e);
                        return (0, s.jsx)(u.TooltipContainer, {
                            text: t,
                            color: u.TooltipColors.GREY,
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
                let S = (a = C) > 400 ? 2 : a > 300 ? 1 : 0;
                let [_] = (l = C) > 400 ? [u.AvatarSizes.SIZE_56, 56] : l > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24], T = (0, o.useStateFromStoresArray)([x.default, v.default], () => Array.from(i).map(e => v.default.getId() === e ? null : x.default.getUser(e)).filter(A.isNotNullish)), N = (0, o.useStateFromStores)([c.default], () => c.default.getEmbeddedActivitiesForChannel(E.id).find(e => e.applicationId === p.id)), {
                    analyticsLocations: L
                } = (0, I.default)(), y = (0, d.useAnalyticsContext)(), P = M.default.getName(E.getGuildId(), E.id, null == T ? void 0 : T[0]), b = (0, h.useEmbeddedActivityJoinability)({
                    userId: null === (t = x.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
                    channelId: E.id,
                    application: p
                }), D = b === h.EmbeddedActivityJoinability.CAN_JOIN, U = null !== (n = E.getGuildId()) && void 0 !== n ? n : void 0;
                return (0, s.jsxs)("div", {
                    className: j.splash,
                    children: [(0, s.jsx)(O, {
                        avatarSize: _,
                        guildId: U,
                        channelId: E.id,
                        users: T
                    }), (0, s.jsx)(u.Text, {
                        className: r(j.subheader, {
                            [j.small]: 0 === S,
                            [j.medium]: 1 === S
                        }),
                        variant: "text-sm/normal",
                        children: T.length > 1 ? R.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
                            username: P,
                            count: T.length - 1
                        }) : R.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
                            username: P
                        })
                    }), (0, s.jsx)(u.Text, {
                        className: r(j.header, {
                            [j.small]: 0 === S,
                            [j.medium]: 1 === S
                        }),
                        variant: "text-sm/normal",
                        children: p.name
                    }), (0, s.jsx)("div", {
                        className: j.buttons,
                        children: D ? (0, s.jsx)(u.Button, {
                            onClick: function(e) {
                                e.stopPropagation(), null != N && (0, f.default)({
                                    applicationId: N.applicationId,
                                    currentEmbeddedApplication: m,
                                    activityChannelId: E.id,
                                    locationObject: y.location,
                                    embeddedActivitiesManager: g.default,
                                    analyticsLocations: L
                                })
                            },
                            size: function(e) {
                                switch (e) {
                                    case 2:
                                        return u.Button.Sizes.LARGE;
                                    case 1:
                                        return u.Button.Sizes.MEDIUM;
                                    case 0:
                                        return u.Button.Sizes.SMALL
                                }
                            }(S),
                            className: j.button,
                            color: u.Button.Colors.PRIMARY,
                            children: R.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
                        }) : null
                    })]
                })
            }

            function P(e) {
                let {
                    participant: t,
                    width: n,
                    selected: a,
                    interactible: l,
                    channel: i
                } = e, {
                    AnalyticsLocationProvider: r
                } = (0, I.default)(_.default.ACTIVITY_TILE), {
                    id: o
                } = t, u = (0, p.default)(), d = (null == u ? void 0 : u.channelId) === i.id && u.applicationId === o, c = (0, m.default)(), [f] = (0, T.default)([o]), {
                    url: h
                } = (0, E.default)({
                    applicationId: o,
                    names: L,
                    size: 1024
                }), g = !d;
                return (0, s.jsx)(r, {
                    children: (0, s.jsx)("div", {
                        className: j.container,
                        children: (0, s.jsxs)(s.Fragment, {
                            children: [!a && d && (0, s.jsx)(C.default, {
                                className: j.iframe,
                                embedId: (0, S.default)(i.id, o)
                            }), g && null != f && null != h && "" !== h ? (0, s.jsx)("img", {
                                className: j.splashImage,
                                alt: f.name,
                                src: h
                            }) : null, !d && !a && null != f && (0, s.jsx)(y, {
                                width: n,
                                channel: i,
                                participants: t.participants,
                                application: f,
                                currentEmbeddedApplication: c
                            }), l || g ? null : (0, s.jsx)("div", {
                                className: j.clickShield
                            })]
                        })
                    })
                })
            }