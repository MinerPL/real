            "use strict";
            let n, i, s;
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            }), a("222007"), a("424973");
            var l, r, u = a("866227"),
                o = a.n(u),
                d = a("446674"),
                c = a("407846"),
                f = a("913144"),
                p = a("21121"),
                m = a("934306"),
                h = a("288518"),
                I = a("486503"),
                E = a("233069"),
                A = a("42203"),
                C = a("305961"),
                v = a("660478"),
                g = a("282109"),
                T = a("697218"),
                x = a("299039"),
                N = a("724210");
            (r = l || (l = {})).DEFAULT = "DEFAULT", r.FAVORITE = "FAVORITE";
            let R = new c.default(e => {
                let {
                    isRequest: t,
                    isFavorite: a
                } = e;
                return t ? [] : [a ? "FAVORITE" : "DEFAULT"]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, a;
                    let n = null !== (a = null !== (t = v.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== a ? a : e.id,
                        i = e.isMessageRequestTimestamp;
                    if (null != i) {
                        let e = o(i).valueOf(),
                            t = x.default.fromTimestamp(e);
                        return x.default.compare(n, t) > 0 ? n : t
                    }
                    return n
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: g.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
                    isRequest: h.default.isMessageRequest(e.id) || I.default.isSpam(e.id)
                }
            }

            function _() {
                R.clear(), Object.values(A.default.getMutablePrivateChannels()).forEach(e => {
                    R.set(e.id, y(e))
                }), (0, p.isInMainTabsExperiment)() && (0, m.isSplitMessagesTab)() && g.default.getAddedToMessages().forEach(e => {
                    let t = A.default.getChannel(e);
                    null != t && (0, E.isGuildTextChannelType)(t.type) && R.set(t.id, y(t))
                })
            }

            function S() {
                let e = A.default.getMutablePrivateChannels();
                for (let t in e) R.set(t, y(e[t]))
            }
            let L = (n = [], i = [], s = [], () => {
                let e = R.values("FAVORITE"),
                    t = R.values("DEFAULT");
                return (n !== e || i !== t) && (s = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), n = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), i = t), s
            });
            class w extends d.default.Store {
                initialize() {
                    this.waitFor(A.default, C.default, T.default, h.default, g.default), this.syncWith([g.default, h.default], _)
                }
                getPrivateChannelIds() {
                    return L()
                }
                getSortedChannels() {
                    return [R.values("FAVORITE"), R.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return R.values().forEach(t => {
                        let {
                            channelId: a,
                            lastMessageId: n
                        } = t;
                        e[a] = n
                    }), e
                }
            }
            w.displayName = "PrivateChannelSortStore";
            var j = new w(f.default, {
                CONNECTION_OPEN: _,
                CONNECTION_OPEN_SUPPLEMENTAL: _,
                OVERLAY_INITIALIZE: _,
                CACHE_LOADED: S,
                CACHE_LOADED_LAZY: S,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, E.isPrivate)(e.type) || R.has(e.id)) && R.set(e.id, y(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, E.isPrivate)(t.type) || t.id === N.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    R.set(t.id, y(t))
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
                        message: a
                    } = e;
                    if (!R.has(t)) return !1;
                    let n = A.default.getChannel(t);
                    return null != n && R.set(t, y(n, a.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return R.delete(t)
                }
            })