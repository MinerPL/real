            "use strict";
            s.r(t), s.d(t, {
                updateRoleSort: function() {
                    return i
                },
                init: function() {
                    return r
                },
                updateRolePermissions: function() {
                    return o
                },
                clearRolePermissions: function() {
                    return d
                },
                updateRoleName: function() {
                    return u
                },
                updateRoleColor: function() {
                    return c
                },
                toggleRoleSettings: function() {
                    return E
                },
                updateRoleIcon: function() {
                    return _
                },
                updateRoleConnectionConfigurations: function() {
                    return T
                },
                saveRoleSettings: function() {
                    return I
                }
            }), s("222007");
            var a = s("913144"),
                n = s("851387"),
                l = s("70919");

            function i(e) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
                    roles: e
                })
            }

            function r() {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_INIT"
                })
            }

            function o(e, t, s) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
                    id: e,
                    flag: t,
                    allow: s
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
                    id: e
                })
            }

            function u(e, t) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
                    id: e,
                    name: t
                })
            }

            function c(e, t) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
                    id: e,
                    color: t
                })
            }

            function E(e, t, s) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
                    id: e,
                    hoist: t,
                    mentionable: s
                })
            }

            function _(e, t, s) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
                    id: e,
                    icon: t,
                    unicodeEmoji: s
                })
            }

            function T(e, t) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
                    roleId: e,
                    roleConnectionConfigurations: t
                })
            }
            async function I(e, t, s, i, r) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
                });
                try {
                    let a = async () => {
                        if (null == t || 0 === t.length) return;
                        let s = t.pop();
                        if (null == s || "" === s.name) return a();
                        await n.default.updateRole(e, s.id, {
                            name: s.name,
                            description: s.description,
                            permissions: s.permissions,
                            color: s.color,
                            hoist: s.hoist,
                            mentionable: s.mentionable,
                            icon: s.icon,
                            unicodeEmoji: s.unicodeEmoji
                        }).then(a, a)
                    };
                    if (null != s && s.length > 0 ? await n.default.batchRoleUpdate(e, s).then(a, a) : await a(), null != r && null != i)
                        for await (let t of i) {
                            let s = r.get(t);
                            await (0, l.putRoleConnectionsConfigurations)(e, t, null != s ? s : [])
                        }
                } catch (e) {
                    var o, d;
                    a.default.dispatch({
                        type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                        message: null !== (d = null === (o = e.body) || void 0 === o ? void 0 : o.message) && void 0 !== d ? d : Object.values(e.body)[0]
                    });
                    return
                }
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
                })
            }