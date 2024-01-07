            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("917351"),
                s = n.n(a),
                i = n("913144"),
                l = n("647627"),
                r = n("243315"),
                o = n("275877"),
                u = n("872173"),
                d = n("374363"),
                c = n("397336"),
                E = {
                    init() {
                        o.default[c.UserSettingsTypes.PRELOADED_USER_SETTINGS] = r.default, o.default[c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS] = l.default, i.default.subscribe("CONNECTION_OPEN", f), i.default.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", _), i.default.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", h), i.default.subscribe("APP_STATE_UPDATE", C)
                    }
                };

            function f() {
                let e = d.default.getFullState(),
                    t = e[c.UserSettingsTypes.PRELOADED_USER_SETTINGS];
                t.editInfo.triggeredMigrations && u.PreloadedUserSettingsActionCreators.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs), s.forEach(u.UserSettingsActionCreatorsByType, (t, n) => {
                    let a = e[Number(n)];
                    null != a.editInfo.offlineEditDataVersion && t.scheduleSaveFromOfflineEdit()
                })
            }

            function _(e) {
                let {
                    settings: {
                        proto: t,
                        type: n
                    },
                    delaySeconds: a,
                    jitter: s
                } = e;
                (0, u.UserSettingsActionCreatorsByType)[n].markDirty(t, {
                    delaySeconds: a,
                    jitter: s
                })
            }

            function h(e) {
                let {
                    settingsType: t
                } = e;
                (0, u.UserSettingsActionCreatorsByType)[t].loadIfNecessary()
            }

            function C(e) {
                let {
                    state: t
                } = e;
                ("inactive" === t || "background" === t) && s.forEach(u.UserSettingsActionCreatorsByType, (e, t) => {
                    let n = d.default.getFullState()[Number(t)];
                    null != n.editInfo.timeout && (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges())
                })
            }