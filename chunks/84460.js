            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("702976");
            var i = n("446674"),
                a = n("913144"),
                l = n("845579"),
                s = n("568734"),
                r = n("655151"),
                u = n("49111");

            function o() {
                return {
                    isEnabled: !1,
                    lastUsedObject: {},
                    useActivityUrlOverride: !1,
                    activityUrlOverride: null,
                    filter: ""
                }
            }
            let d = o(),
                c = null,
                _ = [];
            class E extends i.default.PersistedStore {
                initialize(e) {
                    d = {
                        ...o(),
                        ...null != e ? e : {}
                    }
                }
                getState() {
                    return d
                }
                getIsEnabled() {
                    return r.ExperimentDevelopersGetDeveloperShelf.getCurrentConfig({
                        location: "DeveloperActivityShelfStore"
                    }).enabled ? l.DeveloperMode.getSetting() : d.isEnabled
                }
                getLastUsedObject() {
                    return d.lastUsedObject
                }
                getUseActivityUrlOverride() {
                    return d.useActivityUrlOverride
                }
                getActivityUrlOverride() {
                    return d.activityUrlOverride
                }
                getFetchState() {
                    return c
                }
                getFilter() {
                    return d.filter
                }
                getDeveloperShelfItems() {
                    return _
                }
                isApplicationInDevShelf(e) {
                    return null != _.find(t => t.id === e)
                }
                inDevModeForApplication(e) {
                    return d.isEnabled && this.isApplicationInDevShelf(e)
                }
            }
            E.displayName = "DeveloperActivityShelfStore", E.persistKey = "DeveloperActivityShelfStore";
            var f = new E(a.default, {
                LOGOUT: function() {
                    d = o(), c = null, _ = []
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED: function() {
                    d.isEnabled = !d.isEnabled
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
                    d.useActivityUrlOverride = !d.useActivityUrlOverride
                },
                DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
                    let {
                        activityUrlOverride: t
                    } = e;
                    d.activityUrlOverride = t
                },
                DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
                    let {
                        applicationId: t,
                        timestamp: n
                    } = e;
                    if (null == _.find(e => e.id === t)) return !1;
                    d.lastUsedObject[t] = n
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
                    c = "loading"
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
                    let {
                        items: t
                    } = e;
                    c = "loaded", _ = t.filter(e => null != e.flags && (0, s.hasFlag)(e.flags, u.ApplicationFlags.EMBEDDED))
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
                    let {
                        type: t
                    } = e;
                    c = "errored"
                },
                DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
                    let {
                        filter: t
                    } = e;
                    d.filter = t
                },
                USER_SETTINGS_PROTO_UPDATE() {}
            })