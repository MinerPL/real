            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return el
                }
            }), n("222007"), n("424973"), n("808653");
            var l = n("917351"),
                a = n.n(l),
                s = n("446674"),
                i = n("913144"),
                r = n("126939"),
                o = n("501260"),
                u = n("152311"),
                d = n("429928"),
                c = n("36539"),
                f = n("502651"),
                h = n("651057"),
                C = n("299285"),
                p = n("619443"),
                m = n("177589"),
                E = n("67139"),
                g = n("671071"),
                I = n("322631"),
                S = n("947297"),
                _ = n("373469"),
                N = n("42203"),
                T = n("350522"),
                A = n("925758"),
                L = n("305961"),
                v = n("957255"),
                x = n("824563"),
                R = n("27618"),
                M = n("843823"),
                O = n("697218"),
                y = n("800762"),
                D = n("449008"),
                b = n("286235"),
                j = n("49111");
            let G = !1,
                U = !1,
                P = [],
                w = [],
                F = {},
                B = {},
                V = new Set,
                H = new Set;

            function k() {
                let e = R.default.getFriendIDs();
                return T.default.hasConsented(j.Consents.PERSONALIZATION) ? new Set([...M.default.getUserAffinitiesUserIds(), ...e]) : new Set(e)
            }

            function Y(e) {
                return x.default.findActivity(e, e => e.type !== j.ActivityTypes.CUSTOM_STATUS)
            }

            function K(e) {
                let t = F[e];
                return null == t && (F = {
                    ...F,
                    [e]: new S.default({
                        name: e
                    })
                }), F[e]
            }

            function W(e) {
                let t = B[e];
                return null == t && (B = {
                    ...B,
                    [e]: new I.default({
                        url: e
                    })
                }), B[e]
            }

            function Z(e) {
                !H.has(e) && V.add(e)
            }

            function z(e) {
                if ((0, d.default)(e)) return g.SpotifyApplication;
                let t = null != e.application_id ? C.default.getApplication(e.application_id) : null;
                return null != t ? t : (0, c.default)(e) ? K(e.name) : (0, f.default)(e) && null != e.url ? W(e.url) : (null != e.application_id && Z(e.application_id), t)
            }

            function X(e) {
                let t = y.default.getVoiceStateForUser(e);
                return (null == t ? void 0 : t.channelId) != null && v.default.canWithPartialContext(j.Permissions.VIEW_CHANNEL, {
                    channelId: t.channelId
                }) ? t.channelId : null
            }

            function Q(e) {
                return R.default.isFriend(e.id)
            }

            function q(e, t, n) {
                var l, s, i, d, c;
                let f;
                let h = O.default.getCurrentUser(),
                    p = t.map(e => e.id),
                    T = t.filter(t => e.has(t.id)),
                    R = !1,
                    M = [],
                    j = new Set,
                    G = !1,
                    U = [];
                for (let e of t) {
                    ;
                    let n = _.default.getAnyStreamForUser(e.id),
                        d = Y(e.id);
                    if (null != n && U.push({
                            stream: n,
                            streamUser: e,
                            activity: d
                        }), null == d) continue;
                    let c = (0, m.default)(d);
                    if (null == c) continue;
                    G = c === g.SPOTIFY_APPLICATION_ID;
                    let f = function(e) {
                            let t = C.default.getApplication(e);
                            return null != t ? t : "string" != typeof e ? (b.default.captureMessage("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
                                tags: {
                                    source: "ACTIVITIES"
                                }
                            }), null) : e === g.SPOTIFY_APPLICATION_ID ? g.SpotifyApplication : e.startsWith(S.XBOX_APPLICATION_ID_PREFIX) ? K(e.slice(S.XBOX_APPLICATION_ID_PREFIX.length)) : e.startsWith(I.TWITCH_APPLICATION_ID_PREFIX) ? W(e.slice(I.TWITCH_APPLICATION_ID_PREFIX.length)) : (Z(e), null)
                        }(c),
                        p = null === (l = d.timestamps) || void 0 === l ? void 0 : l.start;
                    if ((0, u.default)(d)) {
                        let t = (0, r.getIsActivitiesEnabledForCurrentPlatform)(),
                            n = (0, o.default)({
                                activity: d,
                                userId: e.id,
                                application: f,
                                channelId: null === (s = y.default.getVoiceStateForUser(e.id)) || void 0 === s ? void 0 : s.channelId,
                                currentUser: h,
                                isActivitiesEnabledForCurrentPlatform: t,
                                ChannelStore: N.default,
                                VoiceStateStore: y.default,
                                PermissionStore: v.default,
                                GuildStore: L.default
                            }) !== o.EmbeddedActivityJoinability.CAN_JOIN;
                        if (n) continue
                    } else if (null == p) continue;
                    if (!E.shouldShowActivity(d) || null == f || j.has(f.id)) continue;
                    let T = null != d ? z(d) : null;
                    (null == T || T.id !== f.id) && (d = null);
                    let x = [];
                    if (null != d && null != d.party && null != d.party.id) {
                        let e = null !== (i = A.default.getParty(d.party.id)) && void 0 !== i ? i : [];
                        x = Array.from(e).reduce((e, t) => {
                            let n = O.default.getUser(t);
                            return null != n && e.push(n), e
                        }, [])
                    } else x = t.filter(e => {
                        let t = Y(e.id),
                            n = null != t ? z(t) : null;
                        return null != n && n.id === f.id
                    });
                    (x = a.orderBy(x, [Q], ["desc"])).length !== t.length && (R = !0), j.add(f.id), M.push({
                        game: f,
                        activity: d,
                        activityUser: e,
                        startedPlayingTime: p,
                        playingMembers: x
                    })
                }
                let P = 1 === T.length,
                    w = [],
                    F = new Set,
                    B = new Set;
                for (let e of t) {
                    let n = X(e.id),
                        l = N.default.getChannel(n),
                        s = null != l ? l.getGuildId() : null,
                        i = L.default.getGuild(s);
                    if (B.has(s) && F.has(n) || null == l || null == i || l.id === i.afkChannelId) null == l && (f = null, P = !0);
                    else {
                        let e = a(y.default.getVoiceStatesForChannel(l.id)).map(e => {
                            let {
                                userId: t
                            } = e;
                            return O.default.getUser(t)
                        }).filter(D.isNotNullish).orderBy([Q], ["desc"]).value();
                        e.filter(e => !p.includes(e.id)).forEach(e => t.push(e)), P ? !B.has(s) && (f = null) : (f = i, P = !0), B.add(s), F.add(n), w.push({
                            channel: l,
                            guild: i,
                            members: e
                        })
                    }
                }
                return {
                    id: n,
                    voiceChannels: w,
                    isSpotifyActivity: G,
                    priorityMembers: T.map(e => ({
                        user: e,
                        status: x.default.getStatus(e.id)
                    })),
                    partiedMembers: t,
                    showPlayingMembers: R,
                    guildContext: f,
                    currentActivities: (d = M, c = e => {
                        var t;
                        return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0
                    }, a(d).orderBy([c, e => e.game.name], ["desc", "asc"])).value(),
                    applicationStreams: U
                }
            }

            function J() {
                return G && p.default.isConnected()
            }
            let $ = a.throttle(() => {
                ! function() {
                    if (!J()) return;
                    V.clear();
                    let e = Array.from(k()).reduce((e, t) => {
                            let n = O.default.getUser(t);
                            return null != n && !n.bot && e.push(n), e
                        }, []),
                        t = a(e).groupBy(e => {
                            var t;
                            let n = X(e.id),
                                l = Y(e.id);
                            return null != n ? "".concat("channel-", "-").concat(n) : (null == l ? void 0 : null === (t = l.party) || void 0 === t ? void 0 : t.id) != null ? "".concat("party-", "-").concat(l.party.id) : "".concat("user-", "-").concat(e.id)
                        }),
                        n = function(e) {
                            let t = k(),
                                n = q.bind(null, t);
                            return a(e).mapValues(n)
                        }(t),
                        l = n.values().orderBy([e => e.partiedMembers.length > 1, e => e.applicationStreams.length > 0, e => e.voiceChannels.length > 0, e => e.currentActivities.length > 0, e => e.isSpotifyActivity, e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" ")], ["desc", "desc", "desc", "desc", "asc", "asc"]).value();
                    w = (P = l.filter(e => e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0)).map(e => ({
                        type: j.ActivityCardTypes.USER,
                        party: e
                    })), ! function() {
                        if (V.size > 0) {
                            let e = Array.from(V);
                            h.default.fetchApplications(e), e.forEach(e => H.add(e)), V.clear()
                        }
                    }(), U = !0
                }(), en.emitChange()
            }, 1e3);

            function ee() {
                return !!J() && ($(), !1)
            }
            class et extends s.default.Store {
                initialize() {
                    this.syncWith([O.default, C.default, x.default, A.default, y.default, _.default, R.default, T.default, M.default], ee), this.waitFor(p.default, L.default, C.default, O.default, M.default)
                }
                get currentActivityParties() {
                    return P
                }
                get nowPlayingCards() {
                    return w
                }
                get isMounted() {
                    return G
                }
                get loaded() {
                    return U
                }
            }
            et.displayName = "NowPlayingViewStore";
            let en = new et(i.default, {
                LOGOUT: function() {
                    G = !1, P = [], w = [], V.clear()
                },
                NOW_PLAYING_MOUNTED: function() {
                    G = !0, $()
                },
                NOW_PLAYING_UNMOUNTED: function() {
                    G = !1
                }
            });
            var el = en