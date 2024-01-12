            "use strict";
            n.r(t), n.d(t, {
                openMigrationModal: function() {
                    return c
                },
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("872717"),
                l = n("689988"),
                r = n("282109"),
                o = n("640497"),
                u = n("699668");
            class d extends l.default {
                async handlePostConnectionOpen() {
                    if (!o.NotificationsExperiment.getCurrentConfig({
                            location: "NotificationMigrationManager"
                        }, {
                            autoTrackExposure: !1
                        }).enabled || r.default.useNewNotifications) return;
                    let {
                        logExposure: e,
                        autoOpen: t
                    } = o.UnreadsEntryPointExperiment.getCurrentConfig({
                        location: "NotificationMigrationManager"
                    }, {
                        autoTrackExposure: !1
                    });
                    if (!e) return;
                    let {
                        body: {
                            guild_noise: l,
                            usage: d
                        }
                    } = await s.default.get("/users/@me/notification-migration-data2"), c = (0, u.transformUsageData)(d), {
                        default: f
                    } = await n.el("923660").then(n.bind(n, "923660"));
                    if (!(0, i.hasAnyModalOpen)()) o.UnreadsEntryPointExperiment.trackExposure({
                        location: "NotificationMigrationManager"
                    }), t && ((0, u.hasGoodCandidateServers)(l, c) ? (0, i.openModal)(e => (0, a.jsx)(f, {
                        ...e,
                        dismissable: !1,
                        guildPain: l,
                        myUsage: c
                    }), {
                        onCloseRequest: () => {}
                    }) : (0, u.autoMigrateToNewSystem)())
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: this.handlePostConnectionOpen
                    }
                }
            }
            async function c(e) {
                let {
                    body: {
                        guild_noise: t,
                        usage: l
                    }
                } = await s.default.get("/users/@me/notification-migration-data2"), r = (0, u.transformUsageData)(l);
                (0, i.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await n.el("923660").then(n.bind(n, "923660"));
                    return n => (0, a.jsx)(i, {
                        ...n,
                        dismissable: e,
                        guildPain: t,
                        myUsage: r
                    })
                })
            }
            var f = new d