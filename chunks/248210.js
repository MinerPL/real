            "use strict";
            n.r(t), n.d(t, {
                getActivityVoiceChannelSuggestion: function() {
                    return f
                },
                useSelectVoiceChannelOptions: function() {
                    return I
                }
            }), n("424973"), n("222007");
            var s = n("446674"),
                i = n("42203"),
                a = n("245997"),
                l = n("305961"),
                u = n("957255"),
                r = n("18494"),
                c = n("316133"),
                o = n("449008"),
                g = n("943349"),
                d = n("49111");

            function p(e, t, n, s) {
                let i = (0, g.getEmbeddedActivityLaunchability)({
                    channelId: e.id,
                    ChannelStore: t,
                    GuildStore: n,
                    PermissionStore: s
                });
                return e.type === d.ChannelTypes.GUILD_VOICE && i === g.EmbeddedActivityLaunchability.CAN_LAUNCH || !1
            }

            function f(e) {
                var t, n, s;
                let {
                    guildId: g,
                    allowGdmActivityChannelSuggestion: d = !1
                } = e;
                if (null == g && !d) return null;
                let f = r.default.getVoiceChannelId(),
                    m = i.default.getChannel(f);
                if (null != m && (null != m.guild_id || d)) return m.id;
                let I = [];
                for (let e of Object.values(a.default.getCategories(g)))
                    for (let t of e) p(t.channel, i.default, l.default, u.default) && I.push({
                        channel: t.channel,
                        users: c.default.getVoiceStatesForChannel(t.channel).filter(o.isNotNullish)
                    });
                return null !== (s = null === (n = I.sort((e, t) => e.users.length > t.users.length ? -1 : 1)[0]) || void 0 === n ? void 0 : null === (t = n.channel) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
            }

            function m(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++)
                    if (e[n].value.channel.id !== t[n].value.channel.id) return !1;
                return !0
            }

            function I(e) {
                return (0, s.useStateFromStores)([a.default, c.default, i.default, l.default, u.default], () => {
                    if (null == e) return [];
                    let t = [];
                    return Object.values(a.default.getCategories(e)).forEach(e => {
                        e.forEach(e => {
                            let {
                                channel: n
                            } = e;
                            p(n, i.default, l.default, u.default) && t.push(n)
                        })
                    }), t.map(e => {
                        let t = c.default.getVoiceStatesForChannel(e).filter(o.isNotNullish);
                        return {
                            value: {
                                channel: e,
                                users: t
                            },
                            label: e.name
                        }
                    }).sort((e, t) => e.value.users.length > t.value.users.length ? -1 : 1)
                }, [e], m)
            }