            "use strict";
            n.r(t), n.d(t, {
                useGuildMigrationSteps: function() {
                    return b
                },
                hasGoodCandidateServers: function() {
                    return w
                },
                autoMigrateToNewSystem: function() {
                    return P
                },
                useSaveSettings: function() {
                    return U
                },
                revertToOldSystem: function() {
                    return k
                },
                transformUsageData: function() {
                    return j
                }
            }), n("222007"), n("702976"), n("808653"), n("70102");
            var a = n("884691"),
                i = n("627445"),
                s = n.n(i),
                l = n("917351"),
                r = n.n(l),
                o = n("446674"),
                u = n("913144"),
                d = n("404118"),
                c = n("519705"),
                f = n("542827"),
                m = n("679428"),
                h = n("42507"),
                g = n("350522"),
                _ = n("305961"),
                S = n("677099"),
                p = n("282109"),
                E = n("568734"),
                T = n("449008"),
                v = n("286235"),
                N = n("649649"),
                y = n("845868"),
                I = n("287223"),
                C = n("76618"),
                A = n("380353"),
                O = n("49111"),
                R = n("397336"),
                M = n("782340");

            function b(e, t) {
                let [n, i] = a.useState(A.defaultThresholds), [s, l] = a.useState({});
                (0, h.useFrecencySettings)();
                let u = (0, o.useStateFromStoresArray)([_.default], () => Object.values(_.default.getGuilds())),
                    d = a.useCallback(() => {
                        let a = {};
                        for (let i of u) a[i.id] = function(e, t, n, a, i) {
                            var s;
                            let [l, r, o] = g.default.hasConsented(O.Consents.PERSONALIZATION) ? (0, I.guessGuildModeWithRemoteData)(e, t, n, a) : (0, I.guessGuildModeWithLocalData)(e, n), u = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {}, d = (0, y.default)(e, null != i ? i : l, u, a, t);
                            return {
                                guildId: e.id,
                                mode: l,
                                debugReason: o,
                                actions: d,
                                overrideMode: i,
                                messagePain: u.messages === A.PainLevel.High,
                                visitsALot: r,
                                muted: p.default.isMuted(e.id) && !p.default.isTemporarilyMuted(e.id)
                            }
                        }(i, n, e, t, s[i.id]);
                        return a
                    }, [u, n, e, t, s]),
                    [c, f] = a.useState(() => d());
                a.useEffect(() => f(d()), [d]);
                let m = a.useCallback((e, t) => {
                    l(n => ({
                        ...n,
                        [e]: t
                    }))
                }, []);
                return {
                    guildPlans: c,
                    overrideGuild: m,
                    setThresholds: i,
                    getDebug: () => (function(e, t) {
                        let n = t.reduce((e, t) => {
                                var n;
                                return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                            }, 0),
                            a = t.reduce((e, t) => {
                                var n;
                                return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0)
                            }, 0),
                            i = S.default.getFlattenedGuildIds(),
                            s = r.sortBy(Object.values(e), e => {
                                let t = i.indexOf(e.guildId);
                                return -1 === t ? i.length : t
                            }),
                            l = [
                                ["Use Grey Dot", new Set([A.Mode.UseGreyDot])],
                                ["Keep As Is", new Set([A.Mode.KeepAsIs])]
                            ].map(e => {
                                let [t, n] = e, a = s.filter(e => {
                                    var t;
                                    return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
                                }), i = a.map(e => {
                                    let t = _.default.getGuild(e.guildId),
                                        n = e.actions.map(e => {
                                            var t;
                                            return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
                                        }).join("\n");
                                    return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
                                });
                                return "# ".concat(t, "\n\n").concat(i.join("\n\n"))
                            });
                        return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(a, "\n\n").concat(l.join("\n\n"))
                    })(Object.values(c), t)
                }
            }

            function w(e, t) {
                return Object.values(_.default.getGuilds()).some(n => {
                    let [a] = g.default.hasConsented(O.Consents.PERSONALIZATION) ? (0, I.guessGuildModeWithRemoteData)(n, A.defaultThresholds, e, t) : (0, I.guessGuildModeWithLocalData)(n, e);
                    return a === A.Mode.UseGreyDot
                })
            }

            function P() {
                let e = Object.values(_.default.getGuilds()),
                    t = {};
                for (let i of e) {
                    var n, a;
                    let e = null !== (n = p.default.getAllSettings().userGuildSettings[i.id]) && void 0 !== n ? n : {},
                        s = null !== (a = e.flags) && void 0 !== a ? a : 0;
                    s = (0, E.setFlag)(s, R.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !0), s = (0, E.setFlag)(s, R.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !1), t[i.id] = {
                        flags: s
                    }
                }
                D(t)
            }

            function U(e) {
                let [t, n] = a.useState(!1), [i, s] = a.useState(!1), l = a.useCallback(async t => {
                    if (i) throw Error("Already submitted notifications migration");
                    n(!0);
                    try {
                        await x(t, e), s(!0)
                    } finally {
                        n(!1)
                    }
                }, [i, e]);
                return {
                    submitting: t,
                    submitted: i,
                    saveSettings: l
                }
            }
            async function x(e, t) {
                if (p.default.useNewNotifications) {
                    d.default.show({
                        title: "Info",
                        body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!"
                    });
                    return
                }
                try {
                    let t = {};
                    for (let i of Object.values(e)) {
                        var n, a;
                        let e = null !== (n = p.default.getAllSettings().userGuildSettings[i.guildId]) && void 0 !== n ? n : {},
                            s = {};
                        for (let t of i.actions) null === (a = t.apply) || void 0 === a || a.call(t, s, e);
                        t[i.guildId] = s
                    }
                    await D(t);
                    let i = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
                    i.length > 0 && (0, f.default)(i, void 0, () => {
                        u.default.dispatch({
                            type: "RECOMPUTE_READ_STATES"
                        })
                    })
                } catch (e) {
                    v.default.captureException(e), d.default.show({
                        title: M.default.Messages.ERROR,
                        body: M.default.Messages.NOTIF_MIGRATION_ERROR,
                        onConfirm: t
                    })
                }
            }
            async function D(e) {
                await L(() => G()), s((await (0, N.listSnapshots)()).length > 0, "No snapshot exists before migration."), await L(() => c.default.setAccountFlag(C.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !0));
                let t = await L(() => m.default.saveUserGuildSettingsBulk(e));
                u.default.dispatch({
                    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
                    userGuildSettings: t
                }), u.default.dispatch({
                    type: "RECOMPUTE_READ_STATES"
                })
            }
            async function L(e) {
                for (let e = 0; e < 3; e++) try {
                    break
                } catch (t) {
                    await new Promise(t => setTimeout(t, 1e3 * (e + 1)))
                }
                return await e()
            }
            async function G() {
                let e = await (0, N.listSnapshots)();
                if (e.length > 0) {
                    let t = await

                    function() {
                        return new Promise(e => {
                            d.default.show({
                                title: "Create new Backup?",
                                body: "It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?",
                                confirmText: "Take New Backup",
                                cancelText: "Skip Backup",
                                onConfirm: () => e(!0),
                                onCancel: () => e(!1)
                            })
                        })
                    }();
                    t && (0, N.backupSettings)(e)
                } else(0, N.takeSnapshot)("Backup from ".concat(new Date().toLocaleDateString()))
            }
            async function k() {
                let e = await (0, N.listSnapshots)(),
                    t = r.sortBy(e, e => new Date(e.recorded_at).getTime());
                if (t.length > 0) {
                    let e = t[t.length - 1];
                    await new Promise(t => d.default.show({
                        title: "Please Confirm",
                        body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
                        onConfirm: t,
                        cancelText: "Cancel",
                        onCancel: () => {}
                    })), await (0, N.restoreSnapshot)(e.id), await c.default.setAccountFlag(C.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
                } else await c.default.setAccountFlag(C.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
            }

            function j(e) {
                var t, n, a;
                let i = r.keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
                    s = r.keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], "channel_id");
                return (null !== (a = e.channel_opens) && void 0 !== a ? a : []).map(e => {
                    var t, n, a, l, r, o, u, d, c, f, m;
                    let h = null !== (t = i[e.channel_id]) && void 0 !== t ? t : {},
                        g = null !== (n = s[e.channel_id]) && void 0 !== n ? n : {};
                    return {
                        channel_id: e.channel_id,
                        num_year_opens: Number(null !== (a = e.year_opens) && void 0 !== a ? a : 0),
                        num_month_opens: Number(null !== (l = e.one_month_opens) && void 0 !== l ? l : 0),
                        num_three_month_opens: Number(null !== (r = e.three_month_opens) && void 0 !== r ? r : 0),
                        num_six_month_opens: Number(null !== (o = e.six_month_opens) && void 0 !== o ? o : 0),
                        num_messages: Number(null !== (u = null == g ? void 0 : g.num_messages) && void 0 !== u ? u : 0),
                        num_year_voice_joins: Number(null !== (d = null == h ? void 0 : h.year_opens) && void 0 !== d ? d : 0),
                        num_month_voice_joins: Number(null !== (c = null == h ? void 0 : h.one_month_opens) && void 0 !== c ? c : 0),
                        num_three_month_voice_joins: Number(null !== (f = null == h ? void 0 : h.three_month_opens) && void 0 !== f ? f : 0),
                        num_six_month_voice_joins: Number(null !== (m = null == h ? void 0 : h.six_month_opens) && void 0 !== m ? m : 0)
                    }
                }).filter(T.isNotNullish)
            }