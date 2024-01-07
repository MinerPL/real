            "use strict";
            s.r(t), s.d(t, {
                useGuildMigrationSteps: function() {
                    return M
                },
                useSaveSettings: function() {
                    return R
                },
                revertToOldSystem: function() {
                    return D
                }
            }), s("222007"), s("808653"), s("70102");
            var a = s("884691"),
                n = s("627445"),
                l = s.n(n),
                i = s("917351"),
                r = s.n(i),
                o = s("446674"),
                d = s("872717"),
                u = s("913144"),
                c = s("404118"),
                S = s("519705"),
                E = s("542827"),
                f = s("679428"),
                m = s("42507"),
                T = s("350522"),
                _ = s("305961"),
                g = s("677099"),
                h = s("282109"),
                I = s("449008"),
                N = s("649649"),
                p = s("845868"),
                C = s("287223"),
                A = s("76618"),
                O = s("380353"),
                x = s("49111");

            function M() {
                let [e, t] = a.useState(O.defaultThresholds), [s, n] = a.useState([]), [l, i] = a.useState([]), [u, c] = a.useState({}), [S, E] = a.useState(!1);
                (0, m.useFrecencySettings)(), a.useEffect(() => {
                    d.default.get("/users/@me/notification-migration-data2").then(e => {
                        let {
                            body: {
                                guild_noise: t,
                                usage: s
                            }
                        } = e;
                        n(t), i(function(e) {
                            var t, s, a;
                            let n = r.keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
                                l = r.keyBy(null !== (s = e.message_sends) && void 0 !== s ? s : [], "channel_id");
                            return (null !== (a = e.channel_opens) && void 0 !== a ? a : []).map(e => {
                                var t, s, a, i, r, o, d, u, c, S, E;
                                let f = null !== (t = n[e.channel_id]) && void 0 !== t ? t : {},
                                    m = null !== (s = l[e.channel_id]) && void 0 !== s ? s : {};
                                return {
                                    channel_id: e.channel_id,
                                    num_year_opens: Number(null !== (a = e.year_opens) && void 0 !== a ? a : 0),
                                    num_month_opens: Number(null !== (i = e.one_month_opens) && void 0 !== i ? i : 0),
                                    num_three_month_opens: Number(null !== (r = e.three_month_opens) && void 0 !== r ? r : 0),
                                    num_six_month_opens: Number(null !== (o = e.six_month_opens) && void 0 !== o ? o : 0),
                                    num_messages: Number(null !== (d = null == m ? void 0 : m.num_messages) && void 0 !== d ? d : 0),
                                    num_year_voice_joins: Number(null !== (u = null == f ? void 0 : f.year_opens) && void 0 !== u ? u : 0),
                                    num_month_voice_joins: Number(null !== (c = null == f ? void 0 : f.one_month_opens) && void 0 !== c ? c : 0),
                                    num_three_month_voice_joins: Number(null !== (S = null == f ? void 0 : f.three_month_opens) && void 0 !== S ? S : 0),
                                    num_six_month_voice_joins: Number(null !== (E = null == f ? void 0 : f.six_month_opens) && void 0 !== E ? E : 0)
                                }
                            }).filter(I.isNotNullish)
                        }(s))
                    }).catch(e => {
                        403 === e.status && E(!0)
                    })
                }, []);
                let f = (0, o.useStateFromStoresArray)([_.default], () => Object.values(_.default.getGuilds())),
                    h = a.useCallback(() => {
                        let t = {};
                        for (let a of f) t[a.id] = function(e, t, s, a, n) {
                            let [l, i, r] = T.default.hasConsented(x.Consents.PERSONALIZATION) ? (0, C.guessGuildModeWithRemoteData)(e, t, s, a) : (0, C.guessGuildModeWithLocalData)(e), o = (0, p.default)(e, null != n ? n : l, s, a, t).filter(I.isNotNullish);
                            return {
                                guildId: e.id,
                                mode: l,
                                confidence: i,
                                debugReason: r,
                                actions: o,
                                overrideMode: n
                            }
                        }(a, e, s, l, u[a.id]);
                        return t
                    }, [f, e, s, l, u]),
                    [N, A] = a.useState(() => h());
                a.useEffect(() => A(h()), [h]);
                let M = a.useCallback((e, t) => {
                    c(s => ({
                        ...s,
                        [e]: t
                    }))
                }, []);
                return {
                    guildPlans: N,
                    overrideGuild: M,
                    setThresholds: t,
                    getDebug: () => (function(e, t) {
                        let s = t.reduce((e, t) => {
                                var s;
                                return e + Number(null !== (s = t.num_year_opens) && void 0 !== s ? s : 0)
                            }, 0),
                            a = t.reduce((e, t) => {
                                var s;
                                return e + Number(null !== (s = t.num_month_opens) && void 0 !== s ? s : 0)
                            }, 0),
                            n = g.default.getFlattenedGuildIds(),
                            l = r.sortBy(Object.values(e), e => {
                                let t = n.indexOf(e.guildId);
                                return -1 === t ? n.length : t
                            }),
                            i = [
                                ["Everything", new Set([O.Mode.CareALot])],
                                ["Essentials", new Set([O.Mode.CareALittle])],
                                ["Nothing", new Set([O.Mode.DontCare])]
                            ].map(e => {
                                let [t, s] = e, a = l.filter(e => {
                                    var t;
                                    return s.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
                                }), n = a.map(e => {
                                    let t = _.default.getGuild(e.guildId),
                                        s = e.actions.map(e => {
                                            var t;
                                            return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
                                        }).join("\n");
                                    return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(s)
                                });
                                return "# ".concat(t, "\n\n").concat(n.join("\n\n"))
                            });
                        return "\n# Basic Stats\n- Total channel visits (yr): ".concat(s, "\n- Total channel visits (month): ").concat(a, "\n\n").concat(i.join("\n\n"))
                    })(Object.values(N), l),
                    showWarning: S
                }
            }

            function R() {
                let [e, t] = a.useState(!1), [s, n] = a.useState(!1), l = a.useCallback(async e => {
                    if (s) throw Error("Already submitted notifications migration");
                    t(!0);
                    try {
                        await v(e), n(!0)
                    } finally {
                        t(!1)
                    }
                }, [s]);
                return {
                    submitting: e,
                    submitted: s,
                    saveSettings: l
                }
            }
            async function v(e) {
                let t = {};
                for (let n of Object.values(e)) {
                    var s, a;
                    let e = null !== (s = h.default.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== s ? s : {},
                        l = {};
                    for (let t of n.actions) null === (a = t.apply) || void 0 === a || a.call(t, l, e);
                    t[n.guildId] = l
                }
                await L(), l((await (0, N.listSnapshots)()).length > 0, "No snapshot exists before migration."), await S.default.setAccountFlag(A.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !0);
                let n = await f.default.saveUserGuildSettingsBulk(t);
                u.default.dispatch({
                    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
                    userGuildSettings: n
                }), u.default.dispatch({
                    type: "RECOMPUTE_READ_STATES"
                });
                let i = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
                i.length > 0 && (0, E.default)(i, void 0, () => {
                    u.default.dispatch({
                        type: "RECOMPUTE_READ_STATES"
                    })
                })
            }
            async function L() {
                let e = await (0, N.listSnapshots)();
                if (e.length > 0) {
                    let t = await

                    function() {
                        return new Promise(e => {
                            c.default.show({
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
            async function D() {
                let e = await (0, N.listSnapshots)(),
                    t = r.sortBy(e, e => new Date(e.recorded_at).getTime());
                if (t.length > 0) {
                    let e = t[t.length - 1];
                    await new Promise(t => c.default.show({
                        title: "Please Confirm",
                        body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
                        onConfirm: t,
                        cancelText: "Cancel",
                        onCancel: () => {}
                    })), await (0, N.restoreSnapshot)(e.id), await S.default.setAccountFlag(A.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
                } else await S.default.setAccountFlag(A.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
            }