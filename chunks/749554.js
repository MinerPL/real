            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("627445"),
                i = n.n(s),
                l = n("152311"),
                r = n("429928"),
                o = n("36539"),
                u = n("280174"),
                d = n("158998"),
                c = n("67139"),
                E = n("62659"),
                f = n("636174"),
                _ = n("49111"),
                h = n("782340");

            function C(e) {
                let {
                    party: t,
                    onUserContextMenu: s
                } = e, {
                    priorityMembers: C,
                    guildContext: T
                } = t, I = C[0], S = function(e) {
                    let {
                        priorityMembers: t,
                        partiedMembers: n
                    } = e, a = new Set(t.map(e => {
                        let {
                            user: t
                        } = e;
                        return t.id
                    })), s = n.filter(e => !a.has(e.id)), i = d.default.getName(t[0].user), l = null != t[1] ? d.default.getName(t[1].user) : null != s[0] ? d.default.getName(s[0]) : null;
                    switch (n.length) {
                        case 1:
                            return i;
                        case 2:
                            return h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_HEADER_TWO_KNOWN_ONLY.format({
                                user1: i,
                                user2: l
                            });
                        default:
                            return h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_HEADER_TWO_KNOWN.format({
                                user1: i,
                                user2: l,
                                extras: n.length - 2
                            })
                    }
                }(t), {
                    subtitle: N,
                    icon: A
                } = function(e) {
                    var t;
                    let {
                        priorityMembers: s,
                        partiedMembers: d,
                        voiceChannels: C,
                        currentActivities: T
                    } = e, I = s.length, S = d.length - I, N = T[0], A = null == N ? void 0 : N.activity, m = null == N ? void 0 : N.startedPlayingTime, p = {
                        name: null !== (t = null == A ? void 0 : A.name) && void 0 !== t ? t : ""
                    };
                    if ((0, l.default)(A) && null != A) return {
                        subtitle: (0, a.jsx)(u.default, {
                            start: m,
                            location: u.default.Locations.ACTIVITY_FEED_NEW,
                            messageProps: p
                        }),
                        icon: null
                    };
                    if (I + S === 1 && null != N) {
                        let {
                            game: e
                        } = N;
                        if (null == A) return {
                            subtitle: null,
                            icon: null
                        };
                        let t = c.createHeader(A);
                        if (null != t) return t;
                        switch (A.type) {
                            case _.ActivityTypes.PLAYING:
                                if ((0, o.default)(A)) return {
                                    subtitle: h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_XBOX,
                                    icon: (0, a.jsx)(E.default.Header.Icon, {
                                        src: E.default.Header.Icon.Src.XBOX
                                    })
                                };
                                return {
                                    subtitle: (0, a.jsx)(u.default, {
                                        start: m,
                                        location: u.default.Locations.ACTIVITY_FEED_NEW,
                                        messageProps: p
                                    }), icon: null != e ? (0, a.jsx)(E.default.Header.Icon, {
                                        src: null != e.getIconURL(f.ICON_SIZE) ? e.getIconURL(f.ICON_SIZE) : n("992739")
                                    }) : null
                                };
                            case _.ActivityTypes.STREAMING:
                                return {
                                    subtitle: h.default.Messages.ACTIVITY_FEED_NOW_STREAMING_TWITCH, icon: null != e && null != e.getIconURL(f.ICON_SIZE) ? (0, a.jsx)(E.default.Header.Icon, {
                                        src: e.getIconURL(f.ICON_SIZE)
                                    }) : null
                                };
                            case _.ActivityTypes.LISTENING:
                                let s;
                                return s = (0, r.default)(A) ? (0, a.jsx)(E.default.Header.Icon, {
                                    src: E.default.Header.Icon.Src.SPOTIFY
                                }) : null != e.getIconURL(f.ICON_SIZE) ? (0, a.jsx)(E.default.Header.Icon, {
                                    src: e.getIconURL(f.ICON_SIZE)
                                }) : (0, a.jsx)(E.default.Header.Icon, {
                                    src: n("992739")
                                }), {
                                    subtitle: h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_LISTENING.format({
                                        name: A.name
                                    }),
                                    icon: s
                                };
                            case _.ActivityTypes.WATCHING:
                                return {
                                    subtitle: h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_WATCHING, icon: null != e && null != e.getIconURL(f.ICON_SIZE) ? (0, a.jsx)(E.default.Header.Icon, {
                                        src: e.getIconURL(f.ICON_SIZE)
                                    }) : null
                                };
                            default:
                                return {
                                    subtitle: h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_IN_A_VOICE_CHANNEL, icon: null
                                }
                        }
                    }
                    if (0 === T.length) {
                        if (C.length > 0) return {
                            subtitle: h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_IN_A_VOICE_CHANNEL,
                            icon: null
                        };
                        let e = T[0];
                        if (null != e) {
                            let {
                                activity: t
                            } = e;
                            if (null != t) {
                                let e = c.createHeader(t);
                                if (null != e) return e
                            }
                            if (null != t && t.type === _.ActivityTypes.LISTENING) return {
                                subtitle: h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_SPOTIFY,
                                icon: (0, a.jsx)(E.default.Header.Icon, {
                                    src: E.default.Header.Icon.Src.SPOTIFY
                                })
                            }
                        }
                    } else if (1 === T.length) {
                        let e = T.find(e => null != e.activity);
                        if (null == e) return {
                            subtitle: null,
                            icon: null
                        };
                        let {
                            activity: t,
                            game: n,
                            startedPlayingTime: s
                        } = e;
                        return i(null != t, "Activity was null somehow"), {
                            subtitle: (0, a.jsx)(u.default, {
                                start: s,
                                location: u.default.Locations.ACTIVITY_FEED_NEW,
                                messageProps: p
                            }),
                            icon: null != n && null != n.getIconURL(f.ICON_SIZE) ? (0, a.jsx)(E.default.Header.Icon, {
                                src: n.getIconURL(f.ICON_SIZE)
                            }) : null
                        }
                    }
                    return {
                        subtitle: h.default.Messages.ACTIVITY_FEED_NOW_PLAYING_MULTIPLE_GAMES,
                        icon: (0, a.jsx)(E.default.Header.Icon, {
                            src: E.default.Header.Icon.Src.MULTIPLE
                        })
                    }
                }(t);
                return (0, a.jsx)(E.default.Header, {
                    priorityUser: I,
                    guildId: null == T ? void 0 : T.id,
                    title: S,
                    subtitle: N,
                    icon: A,
                    onContextMenu: e => s(e, I.user)
                })
            }