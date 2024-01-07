            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("424973"), s("222007"), s("702976"), s("808653");
            var a = s("917351"),
                n = s.n(a),
                l = s("233069"),
                i = s("870691"),
                r = s("42203"),
                o = s("350522"),
                d = s("319781"),
                u = s("957255"),
                c = s("282109"),
                S = s("718517"),
                E = s("568734"),
                f = s("380353"),
                m = s("49111"),
                T = s("397336");

            function _(e, t, s, a, E) {
                var T;
                let _ = [],
                    N = null !== (T = s.filter(t => t.guild_id === e.id)[0]) && void 0 !== T ? T : {},
                    p = Object.values(r.default.getMutableGuildChannelsForGuild(e.id)).filter(e => u.default.can(m.Permissions.VIEW_CHANNEL, e));
                return _.push(... function(e, t, s) {
                    let a = c.default.isMuted(t.id) && !c.default.isTemporarilyMuted(t.id);
                    if (a) {
                        if (e !== f.Mode.DontCare) {
                            let e = [{
                                    label: "Unmuting the guild and marking it as read",
                                    apply: e => {
                                        e.muted = !1, e.mute_config = null
                                    },
                                    needsMarkedAsRead: !0
                                }],
                                a = s.filter(e => c.default.getChannelMessageNotifications(t.id, e.id) === m.UserNotificationSettings.ALL_MESSAGES);
                            return a.length > 0 && e.push({
                                label: "Setting ".concat(a.length, " to mentions-only since they were all-messages and we are unmuting the guild"),
                                debug: a.map(e => "\n    - #".concat(e.name)).join(""),
                                apply: (e, t) => {
                                    for (let s of a) h(e, t, s.id, e => {
                                        e.message_notifications = m.UserNotificationSettings.ONLY_MENTIONS
                                    })
                                }
                            }), e
                        }
                    } else if (e === f.Mode.DontCare) return [{
                        label: "Muting the guild since you do not care about it.",
                        apply: () => {}
                    }];
                    return []
                }(t, e, p)), _.push(function(e, t) {
                    let s = c.default.getMessageNotifications(t.id);
                    if (e === f.Mode.CareALittle && s === m.UserNotificationSettings.ALL_MESSAGES) return {
                        label: "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
                        apply: e => {
                            e.message_notifications = m.UserNotificationSettings.ONLY_MENTIONS
                        }
                    }
                }(t, e)), _.push(function(e) {
                    return e === f.Mode.CareALot ? {
                        label: "Setting the guild to a white dot unread",
                        apply: (e, t) => {
                            g(e, t, !0)
                        }
                    } : {
                        label: "Setting the guild to a grey dot unread",
                        apply: (e, t) => {
                            g(e, t, !1)
                        }
                    }
                }(t)), _.push(... function(e, t) {
                    let s = [];
                    if (e === f.Mode.DontCare || e === f.Mode.CareALittle) {
                        let [e, a] = n(t).filter(e => e.type === m.ChannelTypes.GUILD_ANNOUNCEMENT).partition(e => c.default.isChannelMuted(e.guild_id, e.id) || null != e.parent_id && c.default.isChannelMuted(e.guild_id, e.parent_id)).value();
                        e.length > 0 && s.push({
                            label: "Not touching ".concat(e.length, " announcement channels since they are muted"),
                            debug: e.map(e => "\n    - #".concat(e.name)).join("")
                        }), a.length > 0 && s.push({
                            label: "Setting ".concat(a.length, " announcement channels to white-dot"),
                            debug: a.map(e => "\n    - #".concat(e.name)).join(""),
                            apply: (e, t) => {
                                for (let s of a) I(e, t, s.id, !0)
                            }
                        })
                    }
                    return s
                }(t, p)), _.push(... function(e) {
                    let t = [],
                        s = [],
                        a = [],
                        n = [];
                    for (let t of e)
                        if (c.default.isChannelMuted(t.guild_id, t.id)) {
                            if (t.isCategory()) {
                                let e = i.default.isCollapsed(t.id);
                                e ? s.push(t) : a.push(t)
                            } else n.push(t)
                        } return s.length > 0 && t.push({
                        label: "Keeping ".concat(s.length, " categories muted since they are also collapsed"),
                        debug: s.map(e => "\n    - #".concat(e.name)).join("")
                    }), a.length > 0 && t.push({
                        label: "Unmuting ".concat(a.length, " categories and setting to grey-dot"),
                        debug: a.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let s of a) I(e, t, s.id, !1)
                        }
                    }), n.length > 0 && t.push({
                        label: "Not unmuting ".concat(n.length, " individual channels becuse idk why")
                    }), t
                }(p)), _.push(... function(e) {
                    let t = [],
                        s = [],
                        a = [];
                    return e.forEach(e => {
                        if (c.default.isChannelMuted(e.guild_id, e.id)) return;
                        let t = c.default.getChannelMessageNotifications(e.guild_id, e.id);
                        t === m.UserNotificationSettings.ALL_MESSAGES ? s.push(e) : t === m.UserNotificationSettings.ONLY_MENTIONS && a.push(e)
                    }), s.length > 0 && t.push({
                        label: "Setting ".concat(s.length, " channels to white-dot since they were explicitly All Messages"),
                        debug: s.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let a of s) I(e, t, a.id, !0)
                        }
                    }), a.length > 0 && t.push({
                        label: "Setting ".concat(a.length, " channels to grey-dot since they were explicitly Mentions Only"),
                        debug: a.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let s of a) I(e, t, s.id, !1)
                        }
                    }), t
                }(p)), o.default.hasConsented(m.Consents.PERSONALIZATION) ? _.push(... function(e, t, s, a, l) {
                    if (e === f.Mode.CareALot) return [];
                    let i = new Set(t.map(e => e.id)),
                        r = a.filter(e => i.has(e.channel_id)),
                        o = n.keyBy(r, "channel_id"),
                        d = Math.max(s.messages === f.PainLevel.High ? l.frecency.yearMinOpensLargeServer : l.frecency.yearMinOpensSmallServer, r.reduce((e, t) => {
                            var s;
                            return e + Number(null !== (s = t.num_year_opens) && void 0 !== s ? s : 0)
                        }, 0) * l.frecency.totalOpensPercent),
                        u = Math.max(l.frecency.monthMinOpens, r.reduce((e, t) => {
                            var s;
                            return e + Number(null !== (s = t.num_three_month_opens) && void 0 !== s ? s : 0)
                        }, 0) * l.frecency.totalOpensPercent),
                        c = [],
                        S = [];
                    t.forEach(e => {
                        var t, s, a, n;
                        let l = null !== (t = o[e.id]) && void 0 !== t ? t : {};
                        Number(null !== (s = l.num_year_opens) && void 0 !== s ? s : 0) > d || Number(null !== (a = l.num_month_opens) && void 0 !== a ? a : 0) > u ? c.push(e) : Number(null !== (n = l.num_three_month_opens) && void 0 !== n ? n : 0) > 2 && S.push(e)
                    });
                    let E = [];
                    return c.length > 0 && E.push({
                        label: "Setting ".concat(c.length, " channels to white-dot since they are recent and frequently viewed"),
                        debug: c.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(o[e.id]), ")")).join(""),
                        apply: (e, t) => {
                            for (let s of c) I(e, t, s.id, !0)
                        }
                    }), S.length > 0 && E.push({
                        label: "NOT setting ".concat(S.length, " channels to white-dot because they were only viewed a little."),
                        debug: S.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(o[e.id]), ")")).join("")
                    }), E
                }(t, p, N, a, E)) : _.push(... function(e, t) {
                    if (e === f.Mode.CareALot) return [];
                    let s = [],
                        a = new Set(t.map(e => e.id)),
                        n = Date.now() - S.default.Millis.DAYS_30,
                        i = d.default.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof l.ChannelRecordBase && a.has(e.id)),
                        r = i.filter(e => {
                            var t, s;
                            let a = null !== (s = null === (t = d.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== s ? s : [];
                            return 0 !== a.length && a[a.length - 1] >= n
                        });
                    return r.length > 0 && s.push({
                        label: "Setting ".concat(r.length, " channels to white-dot since they are recent and frequently viewed"),
                        debug: r.map(e => "\n    - #".concat(e.name)).join(""),
                        apply: (e, t) => {
                            for (let s of r) I(e, t, s.id, !0)
                        }
                    }), s
                }(t, p)), _
            }

            function g(e, t, s) {
                var a, n;
                e.flags = (0, E.setFlag)(null !== (n = null !== (a = e.flags) && void 0 !== a ? a : t.flags) && void 0 !== n ? n : 0, T.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, s), e.flags = (0, E.setFlag)(e.flags, T.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !s)
            }

            function h(e, t, s, a) {
                var l, i, r, o;
                let d = null !== (r = null === (l = e.channel_overrides) || void 0 === l ? void 0 : l[s]) && void 0 !== r ? r : {},
                    u = null !== (o = null === (i = t.channel_overrides) || void 0 === i ? void 0 : i[s]) && void 0 !== o ? o : {};
                a(d, u), !n.isEmpty(d) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[s] = d)
            }

            function I(e, t, s, a) {
                h(e, t, s, (e, t) => {
                    var s, n;
                    e.flags = (0, E.setFlag)(null !== (n = null !== (s = e.flags) && void 0 !== s ? s : t.flags) && void 0 !== n ? n : 0, T.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a), e.flags = (0, E.setFlag)(e.flags, T.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !a)
                })
            }