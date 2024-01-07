            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("222007"), s("424973"), s("808653");
            var a = s("37983");
            s("884691");
            var n = s("714617"),
                l = s.n(n),
                i = s("446674"),
                r = s("656038"),
                o = s("923959"),
                d = s("305961"),
                u = s("644583"),
                c = s("49111");

            function E(e) {
                let {
                    guildId: t,
                    selectedChannelIds: s,
                    selectedRoleIds: n,
                    onChange: E,
                    placeholder: _,
                    disableEveryoneRole: T,
                    includeRoleRestrictedPrivateChannels: I = !1
                } = e, {
                    channelRows: S,
                    roleRows: N
                } = (0, i.useStateFromStores)([o.default, d.default], () => {
                    var e, a;
                    let l = o.default.getChannels(t)[c.ChannelTypes.GUILD_CATEGORY],
                        i = [...o.default.getChannels(t)[o.GUILD_SELECTABLE_CHANNELS_KEY], ...o.default.getChannels(t)[o.GUILD_VOCAL_CHANNELS_KEY]],
                        E = [],
                        _ = {};
                    l.forEach(e => {
                        let {
                            channel: t,
                            comparator: s
                        } = e;
                        "null" !== t.id && (_[t.id] = [], E.push({
                            channel: t,
                            comparator: s
                        }))
                    }), i.forEach(e => {
                        let {
                            channel: t,
                            comparator: a
                        } = e;
                        if (!(t.isGuildStageVoice() || t.isThread() || s.has(t.id))) !(!I && (0, r.default)(t)) && (null == t.parent_id ? E.push({
                            channel: t,
                            comparator: a
                        }) : (null == _[t.parent_id] && (_[t.parent_id] = []), _[t.parent_id].push({
                            channel: t,
                            comparator: a
                        })))
                    });
                    let S = E.sort((e, t) => {
                            let {
                                comparator: s,
                                channel: a
                            } = e, {
                                comparator: n,
                                channel: l
                            } = t;
                            return a.isCategory() && !l.isCategory() ? 1 : !a.isCategory() && l.isCategory() ? -1 : n - s
                        }).reduce((e, t) => {
                            let {
                                channel: a
                            } = t;
                            if (a.isGuildStageVoice() || a.isThread() || s.has(a.id)) return e;
                            e.push((0, u.channelToPendingAddition)(a).row);
                            let n = _[a.id];
                            return null != n && n.length > 0 && n.forEach(t => {
                                let {
                                    channel: s
                                } = t;
                                e.push((0, u.channelToPendingAddition)(s).row)
                            }), e
                        }, []),
                        N = Object.values(null !== (a = null === (e = d.default.getGuild(t)) || void 0 === e ? void 0 : e.roles) && void 0 !== a ? a : {}).filter(e => !n.has(e.id)).filter(e => !T || e.id !== t).map(e => (0, u.roleToPendingAddition)(e).row);
                    return {
                        channelRows: S,
                        roleRows: N
                    }
                }, [T, t, I, s, n], l);
                return (0, a.jsx)(u.default, {
                    channelRows: S,
                    roleRows: N,
                    guildId: t,
                    selectedChannelIds: s,
                    selectedRoleIds: n,
                    onChange: E,
                    placeholder: _
                })
            }