            "use strict";
            let s, i, a;
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007"), n("424973");
            var l, r, u = n("866227"),
                o = n.n(u),
                c = n("446674"),
                d = n("407846"),
                f = n("913144"),
                p = n("21121"),
                h = n("934306"),
                I = n("288518"),
                E = n("486503"),
                v = n("233069"),
                _ = n("42203"),
                C = n("305961"),
                T = n("660478"),
                S = n("282109"),
                A = n("697218"),
                m = n("299039"),
                g = n("724210");
            (r = l || (l = {})).DEFAULT = "DEFAULT", r.FAVORITE = "FAVORITE";
            let R = new d.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let s = null !== (n = null !== (t = T.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        i = e.isMessageRequestTimestamp;
                    if (null != i) {
                        let e = o(i).valueOf(),
                            t = m.default.fromTimestamp(e);
                        return m.default.compare(s, t) > 0 ? s : t
                    }
                    return s
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: S.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
                    isRequest: I.default.isMessageRequest(e.id) || E.default.isSpam(e.id)
                }
            }

            function L() {
                R.clear(), Object.values(_.default.getMutablePrivateChannels()).forEach(e => {
                    R.set(e.id, N(e))
                }), (0, p.isInMainTabsExperiment)() && (0, h.isSplitMessagesTab)() && S.default.getAddedToMessages().forEach(e => {
                    let t = _.default.getChannel(e);
                    null != t && (0, v.isGuildTextChannelType)(t.type) && R.set(t.id, N(t))
                })
            }

            function x() {
                let e = _.default.getMutablePrivateChannels();
                for (let t in e) R.set(t, N(e[t]))
            }
            let P = (s = [], i = [], a = [], () => {
                let e = R.values("FAVORITE"),
                    t = R.values("DEFAULT");
                return (s !== e || i !== t) && (a = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return a.push(t)
                }), s = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return a.push(t)
                }), i = t), a
            });
            class y extends c.default.Store {
                initialize() {
                    this.waitFor(_.default, C.default, A.default, I.default, S.default), this.syncWith([S.default, I.default], L)
                }
                getPrivateChannelIds() {
                    return P()
                }
                getSortedChannels() {
                    return [R.values("FAVORITE"), R.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return R.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: s
                        } = t;
                        e[n] = s
                    }), e
                }
            }
            y.displayName = "PrivateChannelSortStore";
            var M = new y(f.default, {
                CONNECTION_OPEN: L,
                CONNECTION_OPEN_SUPPLEMENTAL: L,
                OVERLAY_INITIALIZE: L,
                CACHE_LOADED: x,
                CACHE_LOADED_LAZY: x,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, v.isPrivate)(e.type) || R.has(e.id)) && R.set(e.id, N(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, v.isPrivate)(t.type) || t.id === g.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    R.set(t.id, N(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return R.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!R.has(t)) return !1;
                    let s = _.default.getChannel(t);
                    return null != s && R.set(t, N(s, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return R.delete(t)
                }
            })