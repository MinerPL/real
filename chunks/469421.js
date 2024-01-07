            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return x
                }
            }), l("834022"), l("424973"), l("222007"), l("808653");
            var n = l("884691"),
                a = l("917351"),
                s = l.n(a),
                i = l("446674"),
                d = l("913144"),
                r = l("986003"),
                o = l("282109"),
                u = l("568734"),
                c = l("449008"),
                h = l("921031"),
                f = l("863636"),
                m = l("397336");

            function C(e) {
                d.default.dispatch({
                    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
                    guildId: e
                })
            }
            let N = {};

            function x(e) {
                let t = (0, i.useStateFromStores)([f.default], () => {
                    var t;
                    return null !== (t = f.default.getPendingResponseOptions(e)) && void 0 !== t ? t : N
                }, [e]);
                n.useEffect(() => (C(e), () => C(e)), [e]), n.useEffect(() => {
                    null != t && 0 !== Object.keys(t).length && h.default.updateOnboardingResponses(e)
                }, [e, t]);
                let l = n.useCallback((t, l, n) => {
                    let a = f.default.getOnboardingResponses(e),
                        {
                            addedRoleIds: i,
                            removedRoleIds: C
                        } = function(e, t, l, n) {
                            var a, i, d, r, o;
                            let u = [],
                                h = [];
                            if (e.singleSelect && l) {
                                let l = e.options.find(e => n.includes(e.id));
                                u = s.difference(null !== (a = t.roleIds) && void 0 !== a ? a : [], null !== (i = null == l ? void 0 : l.roleIds) && void 0 !== i ? i : []), h = s.difference(null !== (d = null == l ? void 0 : l.roleIds) && void 0 !== d ? d : [], null !== (r = t.roleIds) && void 0 !== r ? r : [])
                            } else if (l) u = null !== (o = t.roleIds) && void 0 !== o ? o : [], h = [];
                            else {
                                let l = e.options.filter(e => n.includes(e.id)),
                                    a = l.filter(e => t.id !== e.id),
                                    i = l.map(e => e.roleIds).flat().filter(c.isNotNullish),
                                    d = a.map(e => e.roleIds).flat().filter(c.isNotNullish);
                                u = [], h = s.difference(i, d)
                            }
                            return {
                                addedRoleIds: u,
                                removedRoleIds: h
                            }
                        }(t, l, n, a),
                        {
                            addedChannelIds: N,
                            removedChannelIds: x
                        } = function(e) {
                            var t, l, n, a, i;
                            let {
                                guildId: d,
                                prompt: o,
                                option: u,
                                selected: h,
                                responses: m
                            } = e, C = [], N = [];
                            if (o.singleSelect && h) {
                                let e = o.options.find(e => m.includes(e.id));
                                C = s.difference(null !== (t = u.channelIds) && void 0 !== t ? t : [], null !== (l = null == e ? void 0 : e.channelIds) && void 0 !== l ? l : []), N = s.difference(null !== (n = null == e ? void 0 : e.channelIds) && void 0 !== n ? n : [], null !== (a = u.channelIds) && void 0 !== a ? a : [])
                            } else if (h) C = null !== (i = u.channelIds) && void 0 !== i ? i : [], N = [];
                            else {
                                let e = o.options.filter(e => m.includes(e.id)),
                                    t = e.filter(e => u.id !== e.id),
                                    l = e.map(e => e.channelIds).flat().filter(c.isNotNullish),
                                    n = t.map(e => e.channelIds).flat().filter(c.isNotNullish);
                                C = [], N = s.difference(l, n)
                            }
                            return (0, r.hasNotSetUpChannelOptIn)(d) && C.push(...f.default.getDefaultChannelIds(d)), {
                                addedChannelIds: C,
                                removedChannelIds: N
                            }
                        }({
                            guildId: e,
                            prompt: t,
                            option: l,
                            selected: n,
                            responses: a
                        }),
                        g = N.reduce((t, l) => {
                            let n = o.default.getChannelIdFlags(e, l);
                            return t[l] = {
                                flags: (0, u.setFlag)(n, m.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)
                            }, t
                        }, {}),
                        p = x.reduce((t, l) => {
                            let n = o.default.getChannelIdFlags(e, l);
                            return t[l] = {
                                flags: (0, u.setFlag)(n, m.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !1)
                            }, t
                        }, {}),
                        S = {
                            ...g,
                            ...p
                        };
                    h.default.selectOption(e, t.id, l.id, n), d.default.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                        guildId: e,
                        overrides: S
                    }), h.default.updateRolesLocal(e, i, C)
                }, [e]);
                return {
                    handleSelectOption: l
                }
            }