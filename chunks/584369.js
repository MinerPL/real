            "use strict";
            n.r(t), n.d(t, {
                DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
                    return d
                },
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                a = n("95410"),
                l = n("913144"),
                s = n("9503");
            let d = 360,
                u = {
                    devToolsEnabled: !1,
                    sidebarWidth: d,
                    lastOpenTabId: null,
                    displayTools: !1,
                    showDevWidget: !1,
                    devWidgetPosition: {
                        x: 0,
                        y: 0
                    }
                };
            class r extends i.default.DeviceSettingsStore {
                initialize(e) {
                    u = null != e ? e : u, l.default.actionLogger.persist = this.devToolsEnabled
                }
                getUserAgnosticState() {
                    return u
                }
                get devToolsEnabled() {
                    return u.devToolsEnabled
                }
                get sidebarWidth() {
                    return this.displayTools ? u.sidebarWidth : 0
                }
                get lastOpenTabId() {
                    var e;
                    return null !== (e = u.lastOpenTabId) && void 0 !== e ? e : null
                }
                get displayTools() {
                    return this.devToolsEnabled && u.displayTools
                }
                get showDevWidget() {
                    return this.devToolsEnabled && u.showDevWidget
                }
                get devWidgetPosition() {
                    return u.devWidgetPosition
                }
            }
            r.displayName = "DevToolsSettingsStore", r.persistKey = "DevToolsSettingsStore";
            var o = new r(l.default, {
                DEV_TOOLS_SETTINGS_UPDATE: function(e) {
                    (u.devToolsEnabled || e.settings.devToolsEnabled) && (null != e.settings.devToolsEnabled && (l.default.actionLogger.persist = e.settings.devToolsEnabled, a.default.set(s.STORAGE_KEY_LOG_DISPATCHES, e.settings.devToolsEnabled)), u = {
                        ...u,
                        ...e.settings
                    })
                }
            })