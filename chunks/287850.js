            "use strict";
            let s, r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007"), n("424973");
            var l, a, u = n("866227"),
                o = n.n(u),
                c = n("446674"),
                d = n("407846"),
                f = n("913144"),
                h = n("21121"),
                p = n("934306"),
                I = n("288518"),
                v = n("486503"),
                C = n("233069"),
                E = n("42203"),
                T = n("305961"),
                m = n("660478"),
                _ = n("282109"),
                S = n("697218"),
                A = n("299039"),
                R = n("724210");
            (a = l || (l = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
            let g = new d.default(e => {
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
                    let s = null !== (n = null !== (t = m.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        r = e.isMessageRequestTimestamp;
                    if (null != r) {
                        let e = o(r).valueOf(),
                            t = A.default.fromTimestamp(e);
                        return A.default.compare(s, t) > 0 ? s : t
                    }
                    return s
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: _.default.isMessagesFavorite(e.id) && (0, h.isInMainTabsExperiment)(),
                    isRequest: I.default.isMessageRequest(e.id) || v.default.isSpam(e.id)
                }
            }

            function x() {
                g.clear(), Object.values(E.default.getMutablePrivateChannels()).forEach(e => {
                    g.set(e.id, N(e))
                }), (0, h.isInMainTabsExperiment)() && (0, p.isSplitMessagesTab)() && _.default.getAddedToMessages().forEach(e => {
                    let t = E.default.getChannel(e);
                    null != t && (0, C.isGuildTextChannelType)(t.type) && g.set(t.id, N(t))
                })
            }

            function L() {
                let e = E.default.getMutablePrivateChannels();
                for (let t in e) g.set(t, N(e[t]))
            }
            let P = (s = [], r = [], i = [], () => {
                let e = g.values("FAVORITE"),
                    t = g.values("DEFAULT");
                return (s !== e || r !== t) && (i = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return i.push(t)
                }), s = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return i.push(t)
                }), r = t), i
            });
            class w extends c.default.Store {
                initialize() {
                    this.waitFor(E.default, T.default, S.default, I.default, _.default), this.syncWith([_.default, I.default], x)
                }
                getPrivateChannelIds() {
                    return P()
                }
                getSortedChannels() {
                    return [g.values("FAVORITE"), g.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return g.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: s
                        } = t;
                        e[n] = s
                    }), e
                }
            }
            w.displayName = "PrivateChannelSortStore";
            var M = new w(f.default, {
                CONNECTION_OPEN: x,
                CONNECTION_OPEN_SUPPLEMENTAL: x,
                OVERLAY_INITIALIZE: x,
                CACHE_LOADED: L,
                CACHE_LOADED_LAZY: L,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, C.isPrivate)(e.type) || g.has(e.id)) && g.set(e.id, N(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, C.isPrivate)(t.type) || t.id === R.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    g.set(t.id, N(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return g.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!g.has(t)) return !1;
                    let s = E.default.getChannel(t);
                    return null != s && g.set(t, N(s, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return g.delete(t)
                }
            })