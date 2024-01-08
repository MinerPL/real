            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("429928"),
                d = n("697218"),
                c = n("339521"),
                f = n("963422"),
                h = n("713573"),
                C = n("811305"),
                p = n("550368"),
                m = n("315102"),
                E = n("449008"),
                g = n("158998"),
                I = n("809403");
            let S = C.Sizes.SIZE_24;

            function _(e) {
                var t, n;
                let {
                    activity: s,
                    user: i,
                    embeddedApp: r,
                    onOpenSpotifyAlbum: d
                } = e, c = null == s ? void 0 : s.assets, f = null == s ? void 0 : s.application_id;
                if (null == s || null == c || null == c.large_image && null == c.small_image) return null != r ? function(e) {
                    let t = m.default.getApplicationIconURL({
                            id: e.application.id,
                            icon: e.application.icon
                        }),
                        n = e.application.name;
                    return (0, l.jsx)(o.Tooltip, {
                        text: n,
                        position: "top",
                        children: () => (0, l.jsx)("img", {
                            alt: n,
                            src: t,
                            className: I.applicationLargeImage
                        })
                    })
                }(r) : null;
                let h = null !== (t = c.large_image) && void 0 !== t ? t : c.small_image,
                    C = (0, u.default)(s),
                    E = C ? I.spotifyLargeImage : I.applicationLargeImage,
                    g = null != h ? (0, l.jsx)("img", {
                        alt: null !== (n = c.large_text) && void 0 !== n ? n : "",
                        src: (0, p.getAssetImage)(f, h, [128, 128]),
                        className: E
                    }) : null;
                return C && null != d ? (g = (0, l.jsx)(o.Clickable, {
                    className: I.clickable,
                    onClick: () => {
                        d(s, i.id)
                    },
                    children: g
                }), (0, l.jsx)(o.Tooltip, {
                    text: null != c.large_text ? c.large_text : null,
                    position: "top",
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return null != g ? a.cloneElement(g, n) : null
                    }
                })) : g
            }

            function N(e) {
                let {
                    activity: t,
                    embeddedApp: n,
                    onOpenSpotifyTrack: a
                } = e, s = null == t ? void 0 : t.details, i = null == t ? void 0 : t.name, r = i;
                if (null != n) r = n.application.name;
                else {
                    if (!(null != t && (0, u.default)(t)) || null == t.sync_id || null == s || null == a) return null;
                    i = s, r = (0, l.jsx)(o.Clickable, {
                        className: I.headerLink,
                        onClick: () => {
                            a(t)
                        },
                        children: s
                    })
                }
                return (0, l.jsx)(h.default, {
                    title: i,
                    className: I.header,
                    children: r
                })
            }

            function T(e) {
                let {
                    activity: t,
                    user: n,
                    onOpenSpotifyArtist: a
                } = e, s = null == t ? void 0 : t.details, r = null == t ? void 0 : t.state, o = s;
                return (null != t && (0, u.default)(t) && null != r && (o = [(0, l.jsx)(f.default, {
                    artists: r,
                    linkClassName: I.bodyLink,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: e => {
                        null == a || a(t, n.id, e)
                    }
                }, r)]), null == o || "" === o) ? null : (0, l.jsx)("div", {
                    className: i(I.ellipsisRow, I.colorHeaderSecondary, I.bodyTextSize),
                    children: o
                })
            }

            function A(e) {
                let {
                    activity: t
                } = e, n = null == t ? void 0 : t.state;
                return null == n || "" === n || (0, u.default)(t) ? null : (0, l.jsx)("div", {
                    className: i(I.ellipsisRow, I.colorHeaderSecondary, I.bodyTextSize, I.activity),
                    children: n
                })
            }

            function L(e) {
                let {
                    activity: t
                } = e;
                if (null == t || !(0, u.default)(t)) return null;
                let {
                    timestamps: n
                } = t;
                if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
                let {
                    start: a,
                    end: s
                } = n;
                return (0, l.jsx)(c.default, {
                    start: a,
                    end: s,
                    className: I.timeBar,
                    themed: !0,
                    singleLine: !0
                })
            }

            function v(e) {
                let {
                    activity: t,
                    embeddedApp: n,
                    user: s,
                    channel: i,
                    sortedVoiceStates: c,
                    onOpenSpotifyTrack: f,
                    onOpenSpotifyArtist: h,
                    onOpenSpotifyAlbum: p
                } = e, m = [];
                null != n ? m = Array.from(n.embeddedActivity.userIds) : (0, u.default)(t) && null != c && (m = c.map(e => e.user.id));
                let v = (0, r.useStateFromStoresArray)([d.default], () => m.map(e => d.default.getUser(e)).filter(E.isNotNullish)),
                    x = null != n || (0, u.default)(t),
                    R = a.useMemo(() => {
                        let e = new Map;
                        return x && null != c && c.forEach(t => {
                            let n = t.member;
                            null != n && e.set(t.user.id, n)
                        }), e
                    }, [c, x]);
                return x ? (0, l.jsxs)("div", {
                    className: I.flexColumn,
                    children: [(0, l.jsxs)("div", {
                        className: I.flexRow,
                        children: [(0, l.jsx)(_, {
                            activity: t,
                            user: s,
                            embeddedApp: n,
                            onOpenSpotifyAlbum: p
                        }), (0, l.jsxs)("div", {
                            className: I.detailsAndAvatarsContainer,
                            children: [(0, l.jsx)(N, {
                                activity: t,
                                embeddedApp: n,
                                onOpenSpotifyTrack: f
                            }), (0, l.jsx)(T, {
                                activity: t,
                                user: s,
                                onOpenSpotifyArtist: h
                            }), (0, l.jsx)(A, {
                                activity: t
                            }), m.length > 0 && (0, l.jsx)(C.default, {
                                className: I.usersSummary,
                                guildId: i.guild_id,
                                users: v,
                                size: S,
                                max: 7,
                                renderUser: e => {
                                    var t;
                                    if (null == e) return null;
                                    let n = R.get(e.id),
                                        a = null !== (t = null == n ? void 0 : n.nick) && void 0 !== t ? t : g.default.getName(e);
                                    return (0, l.jsx)(o.TooltipContainer, {
                                        text: a,
                                        position: "bottom",
                                        children: (0, l.jsx)("img", {
                                            src: e.getAvatarURL(i.guild_id, S),
                                            alt: a,
                                            className: I.avatar
                                        }, e.id)
                                    }, e.id)
                                }
                            })]
                        })]
                    }), (0, l.jsx)(L, {
                        activity: t
                    })]
                }) : null
            }