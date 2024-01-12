            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("702976");
            var s = n("446674"),
                i = n("913144"),
                r = n("845579"),
                a = n("568734"),
                o = n("655151"),
                d = n("49111");

            function u() {
                return {
                    isEnabled: !1,
                    lastUsedObject: {},
                    useActivityUrlOverride: !1,
                    activityUrlOverride: null,
                    filter: ""
                }
            }
            let l = u(),
                f = null,
                _ = [];
            class c extends s.default.PersistedStore {
                initialize(e) {
                    l = {
                        ...u(),
                        ...null != e ? e : {}
                    }
                }
                getState() {
                    return l
                }
                getIsEnabled() {
                    return o.ExperimentDevelopersGetDeveloperShelf.getCurrentConfig({
                        location: "DeveloperActivityShelfStore"
                    }).enabled ? r.DeveloperMode.getSetting() : l.isEnabled
                }
                getLastUsedObject() {
                    return l.lastUsedObject
                }
                getUseActivityUrlOverride() {
                    return l.useActivityUrlOverride
                }
                getActivityUrlOverride() {
                    return l.activityUrlOverride
                }
                getFetchState() {
                    return f
                }
                getFilter() {
                    return l.filter
                }
                getDeveloperShelfItems() {
                    return _
                }
                isApplicationInDevShelf(e) {
                    return null != _.find(t => t.id === e)
                }
                inDevModeForApplication(e) {
                    return l.isEnabled && this.isApplicationInDevShelf(e)
                }
            }
            c.displayName = "DeveloperActivityShelfStore", c.persistKey = "DeveloperActivityShelfStore";
            var g = new c(i.default, {
                LOGOUT: function() {
                    l = u(), f = null, _ = []
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED: function() {
                    l.isEnabled = !l.isEnabled
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
                    l.useActivityUrlOverride = !l.useActivityUrlOverride
                },
                DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
                    let {
                        activityUrlOverride: t
                    } = e;
                    l.activityUrlOverride = t
                },
                DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
                    let {
                        applicationId: t,
                        timestamp: n
                    } = e;
                    if (null == _.find(e => e.id === t)) return !1;
                    l.lastUsedObject[t] = n
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
                    f = "loading"
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
                    let {
                        items: t
                    } = e;
                    f = "loaded", _ = t.filter(e => null != e.flags && (0, a.hasFlag)(e.flags, d.ApplicationFlags.EMBEDDED))
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
                    let {
                        type: t
                    } = e;
                    f = "errored"
                },
                DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
                    let {
                        filter: t
                    } = e;
                    l.filter = t
                },
                USER_SETTINGS_PROTO_UPDATE() {}
            })