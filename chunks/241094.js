            "use strict";
            a.r(t), a.d(t, {
                useActiveTextChannels: function() {
                    return h
                },
                useActiveVoiceChannels: function() {
                    return g
                }
            }), a("222007");
            var l = a("446674"),
                n = a("233069"),
                s = a("42203"),
                i = a("305961"),
                d = a("957255"),
                r = a("282109"),
                u = a("316133"),
                o = a("449008"),
                c = a("558130"),
                f = a("49111"),
                m = a("724210");
            let h = e => (0, l.useStateFromStoresArray)([s.default, d.default, c.default, r.default], () => E(e, [s.default, d.default, c.default, r.default])),
                E = function(e) {
                    let [t, a, l, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, d.default, c.default, r.default], u = l.getActiveChannelIds(e), h = null != u ? Array.from(u) : [], E = i.getMutedChannels(e);
                    return h.map(e => t.getChannel(e)).filter(o.isNotNullish).filter(e => {
                        if ((null == e ? void 0 : e.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED)) || !(0, n.isTextChannel)(e.type) || E.has(e.id) || null != e.parent_id && E.has(e.parent_id) || !a.can(f.Permissions.VIEW_CHANNEL, e)) return !1;
                        let l = t.getChannel(e.parent_id);
                        return !(e.isThread() && null != l && (null == l ? void 0 : l.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED))) && !0
                    })
                },
                g = (e, t) => (0, l.useStateFromStoresArray)([d.default, s.default, u.default, i.default], () => I(e, t, [d.default, s.default, u.default, i.default])),
                I = function(e, t) {
                    var a;
                    let [l, n, r, c] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [d.default, s.default, u.default, i.default], h = r.getVoiceStates(e), E = Object.keys(h).filter(e => h[e].length > 0), g = null === (a = c.getGuild(e)) || void 0 === a ? void 0 : a.afkChannelId;
                    return E.filter(e => e !== g && e !== (null == t ? void 0 : t.channel_id)).map(e => n.getChannel(e)).filter(o.isNotNullish).filter(e => !(null == e ? void 0 : e.hasFlag(m.ChannelFlags.ACTIVE_CHANNELS_REMOVED)) && l.can(f.Permissions.VIEW_CHANNEL, e))
                }