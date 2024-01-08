            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return D
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                i = l("627445"),
                r = l.n(i),
                o = l("118810"),
                u = l("446674"),
                d = l("77078"),
                c = l("86621"),
                f = l("376556"),
                m = l("118033"),
                p = l("42203"),
                E = l("697218"),
                T = l("800762"),
                h = l("145131"),
                _ = l("313873"),
                S = l("429928"),
                I = l("36539"),
                g = l("698372"),
                A = l("770370"),
                v = l("667618"),
                C = l("865677"),
                N = l("15874"),
                y = l("774713"),
                O = l("510788"),
                M = l("756731"),
                x = l("762806"),
                R = l("438278"),
                L = l("898481"),
                P = l("49111"),
                b = l("278433"),
                D = (0, c.default)(e => {
                    let t, {
                            activity: l,
                            user: a,
                            applicationStream: i,
                            className: c,
                            guildId: D,
                            channelId: U,
                            source: j,
                            color: F = d.Button.Colors.WHITE,
                            look: w = d.Button.Looks.OUTLINED,
                            type: G,
                            onAction: k,
                            isEmbedded: B = !1
                        } = e,
                        Y = (0, g.default)(),
                        V = (0, u.useStateFromStores)([E.default], () => {
                            let e = E.default.getCurrentUser();
                            return r(null != e, "UserActivityActions: currentUser cannot be undefined"), e
                        }),
                        H = G === _.Types.PROFILE || G === _.Types.PROFILE_V2,
                        W = G === _.Types.STREAM_PREVIEW || null != i,
                        z = (0, S.default)(l),
                        K = (0, m.isStageActivity)(l),
                        Z = H ? h.default.Align.END : h.default.Align.STRETCH,
                        X = z || W ? h.default.Direction.HORIZONTAL : h.default.Direction.VERTICAL,
                        J = (null == l ? void 0 : l.type) === P.ActivityTypes.HANG_STATUS,
                        Q = (0, u.useStateFromStores)([T.default, p.default], () => {
                            var e;
                            return J ? p.default.getChannel(null === (e = T.default.getVoiceStateForUser(a.id)) || void 0 === e ? void 0 : e.channelId) : null
                        });
                    if ((0, I.default)(l)) t = [(0, n.jsx)(A.default, {
                        look: w,
                        color: F,
                        platform: f.default.get(P.PlatformTypes.XBOX)
                    }, "ConnectPlatformActivityButton")];
                    else if ((null == l ? void 0 : l.platform) != null && [P.ActivityGamePlatforms.PS4, P.ActivityGamePlatforms.PS5].includes(l.platform)) t = [(0, n.jsx)(A.default, {
                        look: w,
                        color: F,
                        platform: f.default.get(P.PlatformTypes.PLAYSTATION)
                    }, "ConnectPlatformActivityButton")];
                    else if (z) {
                        let e = (0, n.jsx)(x.default, {
                                activity: l,
                                user: a,
                                color: F,
                                look: w,
                                guildId: D,
                                channelId: U,
                                source: j
                            }, "spotify-activity-sync-button"),
                            s = (0, n.jsx)(M.default, {
                                activity: l,
                                user: a,
                                color: F,
                                look: w,
                                guildId: D,
                                channelId: U,
                                source: j
                            }, "spotify-activity-play-button");
                        t = [s, e]
                    } else if (K) {
                        let e = (0, m.unpackStageChannelParty)(l);
                        null != e && (t = [(0, n.jsx)(y.default, {
                            guildId: e.guildId,
                            channelId: e.channelId,
                            color: F,
                            look: w,
                            isProfile: H
                        }, e.channelId)])
                    } else if (W) {
                        let e = (0, n.jsx)(L.default, {
                            isCurrentUser: V.id === a.id,
                            color: F,
                            look: w,
                            applicationStream: i
                        }, "watch-button");
                        t = [e]
                    } else if (J && null != Q) {
                        let e = (0, n.jsx)(N.default, {
                            color: F,
                            look: w,
                            hangStatusChannel: Q
                        }, "hang-status-button");
                        t = [e]
                    } else {
                        let e = (0, n.jsx)(R.default, {
                                activity: l,
                                color: F,
                                look: w
                            }, "watch-button"),
                            s = (0, n.jsx)(C.default, {
                                activity: l,
                                currentEmbeddedApplication: Y,
                                user: a,
                                isCurrentUser: V.id === a.id,
                                color: F,
                                look: w,
                                channelId: U,
                                isEmbedded: B
                            }, "join-activity-button"),
                            i = (0, n.jsx)(O.default, {
                                activity: l,
                                user: a,
                                color: F,
                                look: w
                            }, "notify-button"),
                            r = (0, n.jsx)(v.default, {
                                user: a,
                                color: F,
                                look: w,
                                activity: l
                            }, "custom-activity-button");
                        if (null == s && null == i && null == e && null == r) return null;
                        t = [s, i, e, r]
                    }
                    let q = X === h.default.Direction.VERTICAL;
                    return (0, n.jsx)(h.default, {
                        grow: 0,
                        align: Z,
                        direction: X,
                        wrap: q ? h.default.Wrap.WRAP : h.default.Wrap.NO_WRAP,
                        className: s(c, b.buttonsWrapper, q ? b.vertical : b.horizontal),
                        onClick: function(e) {
                            (0, o.isElement)(e.target) && "BUTTON" === e.target.nodeName && (null == k || k())
                        },
                        children: t
                    })
                })