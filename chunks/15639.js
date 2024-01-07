            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("424973");
            var i = n("446674"),
                s = n("913144");
            let l = {
                    guildNoticeDismissed: []
                },
                a = new Map,
                o = new Set;
            class u extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
                    r = e
                }
                getState() {
                    return r
                }
                shouldShowChannelNotice(e) {
                    var t, n;
                    return !r.guildNoticeDismissed.includes(e) && (null !== (n = null === (t = a.get(e)) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0) > 0
                }
                canShowOverviewTooltip(e, t) {
                    var n;
                    return (null === (n = a.get(e)) || void 0 === n ? void 0 : n.has(t)) === !0
                }
                canShowToggleTooltip(e) {
                    return o.has(e)
                }
            }
            u.displayName = "CommandsMigrationStore", u.persistKey = "CommandsMigrationStore";
            var c = new u(s.default, {
                COMMANDS_MIGRATION_UPDATE_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        integrationIdsWithAppCommands: n
                    } = e;
                    return a.set(t, new Set(n)), !0
                },
                COMMANDS_MIGRATION_NOTICE_DISMISSED: function(e) {
                    let {
                        guildId: t
                    } = e;
                    r.guildNoticeDismissed.push(t)
                },
                COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function(e) {
                    var t;
                    let {
                        guildId: n,
                        integrationId: r
                    } = e;
                    null === (t = a.get(n)) || void 0 === t || t.clear(), o.add(r)
                },
                COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function(e) {
                    let {
                        integrationId: t
                    } = e;
                    o.delete(t)
                }
            })