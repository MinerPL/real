            "use strict";
            let n, a, s;
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            }), l("222007");
            var i = l("446674"),
                r = l("913144"),
                o = l("389153"),
                d = l("892692");
            let u = {},
                c = {},
                f = !1;

            function m() {
                n = void 0, u = {}, c = {}, a = void 0, s = void 0, f = !1
            }
            class I extends i.default.Store {
                getApplicationPermissions() {
                    return u
                }
                getCommands() {
                    return c
                }
                getCommand(e) {
                    return null == c ? void 0 : c[e]
                }
                getEditedApplication() {
                    return a
                }
                getEditedCommand() {
                    return s
                }
                isUnavailable() {
                    return f
                }
                getApplicationId() {
                    return n
                }
            }
            I.displayName = "IntegrationPermissionStore";
            var T = new I(r.default, {
                LOGOUT: m,
                INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    if (t !== n) return !1;
                    f = !0
                },
                INTEGRATION_PERMISSION_SETTINGS_CLEAR: m,
                INTEGRATION_PERMISSION_SETTINGS_INIT: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    m(), n = t
                },
                INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function(e) {
                    let {
                        applicationId: t,
                        commandId: l,
                        permissions: a
                    } = e;
                    if (t !== n) return !1;
                    if (l === n) {
                        u = (0, d.keyPermissions)(a);
                        return
                    }
                    let s = c[l];
                    if (null == s) return !1;
                    c[l] = {
                        ...s,
                        permissions: (0, d.keyPermissions)(a)
                    }
                },
                INTEGRATION_PERMISSION_SETTINGS_EDIT: function(e) {
                    let {
                        applicationId: t,
                        commandId: l,
                        permissions: i
                    } = e;
                    if (t !== n) return !1;
                    l === n ? a = i : s = {
                        commandId: l,
                        permissions: i
                    }
                },
                INTEGRATION_PERMISSION_SETTINGS_RESET: function(e) {
                    let {
                        commandId: t
                    } = e;
                    null == t ? a = void 0 : s = void 0
                },
                INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    if (t !== n) return !1;
                    f = !0
                },
                INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function(e) {
                    let {
                        applicationId: t,
                        commands: l,
                        permissions: a
                    } = e;
                    if (t !== n) return !1;
                    let s = Object.fromEntries(a.map(e => [e.id, e.permissions])),
                        i = {};
                    for (let e of l)
                        if (e.application_id === n) {
                            let t = (0, o.buildCommand)({
                                    rootCommand: e,
                                    command: e,
                                    applicationId: e.application_id
                                }),
                                l = s[e.id];
                            null != l && (t.permissions = (0, d.keyPermissions)(l)), i[e.id] = t
                        } c = i
                }
            })