            "use strict";
            n.r(t), n.d(t, {
                updateRoleSort: function() {
                    return o
                },
                init: function() {
                    return l
                },
                updateRolePermissions: function() {
                    return r
                },
                clearRolePermissions: function() {
                    return c
                },
                updateRoleName: function() {
                    return d
                },
                updateRoleColor: function() {
                    return u
                },
                toggleRoleSettings: function() {
                    return _
                },
                updateRoleIcon: function() {
                    return E
                },
                updateRoleConnectionConfigurations: function() {
                    return I
                },
                saveRoleSettings: function() {
                    return S
                }
            }), n("222007");
            var s = n("913144"),
                a = n("851387"),
                i = n("70919");

            function o(e) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
                    roles: e
                })
            }

            function l() {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_INIT"
                })
            }

            function r(e, t, n) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
                    id: e,
                    flag: t,
                    allow: n
                })
            }

            function c(e) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
                    id: e
                })
            }

            function d(e, t) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
                    id: e,
                    name: t
                })
            }

            function u(e, t) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
                    id: e,
                    color: t
                })
            }

            function _(e, t, n) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
                    id: e,
                    hoist: t,
                    mentionable: n
                })
            }

            function E(e, t, n) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
                    id: e,
                    icon: t,
                    unicodeEmoji: n
                })
            }

            function I(e, t) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
                    roleId: e,
                    roleConnectionConfigurations: t
                })
            }
            async function S(e, t, n, o, l) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
                });
                try {
                    let s = async () => {
                        if (null == t || 0 === t.length) return;
                        let n = t.pop();
                        if (null == n || "" === n.name) return s();
                        await a.default.updateRole(e, n.id, {
                            name: n.name,
                            description: n.description,
                            permissions: n.permissions,
                            color: n.color,
                            hoist: n.hoist,
                            mentionable: n.mentionable,
                            icon: n.icon,
                            unicodeEmoji: n.unicodeEmoji
                        }).then(s, s)
                    };
                    if (null != n && n.length > 0 ? await a.default.batchRoleUpdate(e, n).then(s, s) : await s(), null != l && null != o)
                        for await (let t of o) {
                            let n = l.get(t);
                            await (0, i.putRoleConnectionsConfigurations)(e, t, null != n ? n : [])
                        }
                } catch (e) {
                    var r, c;
                    s.default.dispatch({
                        type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                        message: null !== (c = null === (r = e.body) || void 0 === r ? void 0 : r.message) && void 0 !== c ? c : Object.values(e.body)[0]
                    });
                    return
                }
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
                })
            }