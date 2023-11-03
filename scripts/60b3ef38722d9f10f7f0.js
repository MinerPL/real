(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91517"], {
        824859: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21e8fbccab4a4553fc99.svg"
        },
        70919: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchRoleConnectionsConfiguration: function() {
                    return l
                },
                putRoleConnectionsConfigurations: function() {
                    return r
                },
                fetchUserApplicationRoleConnections: function() {
                    return c
                }
            });
            var s = n("872717"),
                a = n("913144"),
                i = n("895026"),
                o = n("49111");

            function l(e, t) {
                s.default.get({
                    url: o.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
                }).then(e => {
                    let n = [];
                    e.body.length > 0 && (n = e.body.map(e => e.map(e => ({
                        connectionType: e.connection_type,
                        connectionMetadataField: e.connection_metadata_field,
                        applicationId: e.application_id,
                        operator: e.operator,
                        value: e.value
                    })))), a.default.dispatch({
                        type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                        roleId: t,
                        roleConnectionConfigurations: n
                    })
                }).catch(() => {})
            }
            async function r(e, t, n) {
                let l = n.map(e => e.map(e => ({
                        connection_type: e.connectionType,
                        connection_metadata_field: e.connectionMetadataField,
                        application_id: e.applicationId,
                        operator: e.operator,
                        value: e.value
                    }))),
                    r = await s.default.put({
                        url: o.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
                        body: 0 === l.length ? [] : l,
                        oldFormErrors: !0
                    }).then(e => {
                        let t = [];
                        return e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
                            connectionType: e.connection_type,
                            connectionMetadataField: e.connection_metadata_field,
                            applicationId: e.application_id,
                            operator: e.operator,
                            value: e.value
                        })))), t
                    }),
                    c = await (0, i.requestMembersForRole)(e, t, !1);
                null != c && a.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                    guildId: e,
                    roleId: t,
                    count: c
                }), a.default.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                    roleId: t,
                    roleConnectionConfigurations: r
                })
            }
            async function c() {
                let e = await s.default.get({
                    url: o.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS
                });
                return e.body
            }
        },
        675454: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var s, a, i = n("37983"),
                o = n("884691"),
                l = n("316693"),
                r = n("151426"),
                c = n("669491"),
                d = n("77078"),
                u = n("592407"),
                E = n("766419"),
                I = n("978970"),
                _ = n("124969"),
                S = n("578706"),
                N = n("68238"),
                T = n("315102"),
                O = n("991170"),
                f = n("580362"),
                p = n("49111"),
                m = n("994428"),
                A = n("69741"),
                M = n("782340"),
                D = n("233602");

            function R(e) {
                let {
                    guild: t,
                    headerText: s,
                    headerSubtext: o,
                    step: l
                } = e, r = T.default.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 120
                });
                return (0, i.jsxs)(d.ModalHeader, {
                    className: D.header,
                    children: [(0, i.jsxs)("div", {
                        className: D.headerIconContainer,
                        children: [null != r ? (0, i.jsx)(d.Avatar, {
                            src: r,
                            "aria-label": t.name,
                            size: d.AvatarSizes.SIZE_120,
                            className: D.guildIcon
                        }) : (0, i.jsx)("div", {
                            className: D.acronym,
                            children: t.acronym
                        }), l === a.SUBMITTED ? (0, i.jsx)(S.default, {
                            className: D.greenPing,
                            color: c.default.unsafe_rawColors.GREEN_360.css,
                            backgroundColor: c.default.unsafe_rawColors.WHITE_100.css
                        }) : (0, i.jsx)(_.Image, {
                            src: n("824859"),
                            className: D.redPing
                        })]
                    }), (0, i.jsxs)("div", {
                        className: D.headerText,
                        children: [(0, i.jsx)(d.Heading, {
                            variant: "heading-lg/extrabold",
                            color: "header-primary",
                            children: s
                        }), (0, i.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "header-primary",
                            children: o
                        })]
                    })]
                })
            }

            function U(e) {
                let {
                    guild: t
                } = e, n = t.getRole(t.id);
                if (null == n) return null;
                let {
                    name: s,
                    color: a
                } = n;
                return (0, i.jsxs)("span", {
                    className: D.roleRow,
                    children: [(0, i.jsx)(d.RoleDot, {
                        className: D.roleDot,
                        color: a.toString(),
                        background: !1,
                        tooltip: !1
                    }), (0, i.jsx)(d.Text, {
                        className: D.roleName,
                        variant: "text-sm/medium",
                        color: "interactive-active",
                        children: s
                    })]
                })
            }(s = a || (a = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.SUBMITTING = 1] = "SUBMITTING", s[s.SUBMITTED = 2] = "SUBMITTED";
            let C = e => {
                if (e.toString() === p.Permissions.MENTION_EVERYONE.toString()) return M.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
                return (0, I.getPermissionName)(e)
            };

            function L(e) {
                let {
                    permissions: t,
                    step: n
                } = e;
                return n === a.SUBMITTED ? null : (0, i.jsxs)("div", {
                    className: D.tableContainer,
                    children: [(0, i.jsx)(d.Text, {
                        className: D.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: n === a.DEFAULT ? M.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS : M.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
                    }), (0, i.jsx)("div", {
                        className: D.permissionsTable,
                        children: t.map((e, t) => (0, i.jsxs)("div", {
                            className: D.permissionRow,
                            children: [(0, i.jsx)("div", {
                                className: n === a.DEFAULT ? D.bulletPositive : D.bulletWarning
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: C(e)
                            })]
                        }, t))
                    })]
                })
            }

            function h(e) {
                let {
                    permissions: t,
                    step: n
                } = e;
                return 0 === t.length && n !== a.SUBMITTED ? null : (n === a.SUBMITTED && (t = A.MODERATOR_PERMISSIONS), (0, i.jsxs)("div", {
                    className: D.tableContainer,
                    children: [(0, i.jsx)(d.Text, {
                        className: D.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: n === a.SUBMITTED ? M.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED : M.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS
                    }), (0, i.jsx)("div", {
                        className: D.permissionsTable,
                        children: t.map((e, t) => (0, i.jsxs)("div", {
                            className: D.permissionRow,
                            children: [(0, i.jsx)("div", {
                                className: D.bullet
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: C(e)
                            })]
                        }, t))
                    })]
                }))
            }

            function x(e) {
                let {
                    permissions: t,
                    step: n
                } = e, {
                    enabledPermissions: s,
                    disabledPermissions: o
                } = t;
                return 0 === s.length && n !== a.SUBMITTED ? null : (0, i.jsxs)("div", {
                    className: D.table,
                    children: [n !== a.SUBMITTED ? (0, i.jsx)(L, {
                        permissions: s,
                        step: n
                    }) : null, (0, i.jsx)(h, {
                        permissions: o,
                        step: n
                    })]
                })
            }

            function g(e) {
                let {
                    guild: t,
                    permissions: n,
                    step: s,
                    canEveryoneModerate: a,
                    isDefaultNotificationsAllMessages: o
                } = e;
                return (0, i.jsx)(d.ModalContent, {
                    children: (0, i.jsxs)("div", {
                        className: D.updatedForm,
                        children: [o ? (0, i.jsxs)("div", {
                            className: D.checklistRow,
                            children: [(0, i.jsx)(S.default, {
                                className: D.checklistIcon,
                                color: c.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: c.default.unsafe_rawColors.WHITE_100.css
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: M.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                    infoHook: () => (0, i.jsx)(d.Tooltip, {
                                        text: M.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        "aria-label": M.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        children: e => (0, i.jsx)(N.default, {
                                            className: D.icon,
                                            ...e
                                        })
                                    })
                                })
                            })]
                        }) : null, a ? (0, i.jsxs)("div", {
                            className: D.checklistRow,
                            children: [(0, i.jsx)(S.default, {
                                className: D.checklistIcon,
                                color: c.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: c.default.unsafe_rawColors.WHITE_100.css
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: M.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
                            }), (0, i.jsx)(U, {
                                guild: t
                            })]
                        }) : null, (0, i.jsx)(x, {
                            permissions: n,
                            step: s
                        })]
                    })
                })
            }

            function v(e) {
                let {
                    onConfirm: t,
                    onDismiss: n,
                    canEveryoneModerate: s,
                    step: o
                } = e;
                return (0, i.jsxs)(d.ModalFooter, {
                    className: D.footer,
                    children: [(0, i.jsx)(d.Button, {
                        onClick: t,
                        submitting: o === a.SUBMITTING,
                        children: o === a.DEFAULT ? s ? M.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION : M.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION : M.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION_DONE
                    }), o === a.DEFAULT ? (0, i.jsx)(d.Button, {
                        look: d.Button.Looks.LINK,
                        onClick: n,
                        color: d.Button.Colors.PRIMARY,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/semibold",
                            color: "header-primary",
                            children: M.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS
                        })
                    }) : null]
                })
            }

            function F(e) {
                let {
                    guild: t,
                    canEveryoneModerate: n,
                    isDefaultNotificationsAllMessages: s,
                    transitionState: c,
                    onClose: I
                } = e, [_, S] = o.useState(a.DEFAULT), N = o.useMemo(() => {
                    let e = [],
                        n = [];
                    return A.MODERATOR_PERMISSIONS.map(s => {
                        let a = O.default.canEveryone(s, t);
                        a ? e.push(s) : n.push(s)
                    }), {
                        enabledPermissions: e,
                        disabledPermissions: n
                    }
                }, [t]);
                if (null == t) return null;
                let T = () => {
                        let e = null == t ? void 0 : t.getRole(t.id);
                        if (null == e) return;
                        let n = l.default.remove(e.permissions, A.MODERATOR_PERMISSIONS_FLAG);
                        (0, E.saveRoleSettings)(t.id, [{
                            ...e,
                            permissions: n
                        }])
                    },
                    U = () => {
                        u.default.updateGuild({
                            defaultMessageNotifications: p.UserNotificationSettings.ONLY_MENTIONS
                        }), u.default.saveGuild(t.id, {
                            defaultMessageNotifications: p.UserNotificationSettings.ONLY_MENTIONS
                        })
                    },
                    C = () => {
                        n && T(), s && U()
                    };
                return (0, i.jsxs)(d.ModalRoot, {
                    transitionState: c,
                    size: d.ModalSize.SMALL,
                    className: D.modal,
                    children: [(0, i.jsx)(R, {
                        guild: t,
                        headerText: n ? M.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_HEADER : M.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_HEADER,
                        headerSubtext: n ? M.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_SUBHEADER : M.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_SUBHEADER,
                        step: _
                    }), (0, i.jsx)(g, {
                        guild: t,
                        permissions: N,
                        step: _,
                        canEveryoneModerate: n,
                        isDefaultNotificationsAllMessages: s
                    }), (0, i.jsx)(v, {
                        onConfirm: () => {
                            var e, s;
                            !n && (C(), I(), (0, f.markContentAsDismissed)(r.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "", !0, m.ContentDismissActionType.PRIMARY)), _ === a.DEFAULT ? (S(a.SUBMITTING), setTimeout(() => S(a.SUBMITTED), 3e3)) : _ === a.SUBMITTED && (C(), I(), (0, f.markContentAsDismissed)(r.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : "", !0, m.ContentDismissActionType.PRIMARY))
                        },
                        onDismiss: () => {
                            I(), (0, f.markContentAsDismissed)(r.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, m.ContentDismissActionType.DISMISS)
                        },
                        step: _,
                        canEveryoneModerate: n
                    })]
                })
            }
        },
        766419: function(e, t, n) {
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
                    return E
                },
                updateRoleIcon: function() {
                    return I
                },
                updateRoleConnectionConfigurations: function() {
                    return _
                },
                saveRoleSettings: function() {
                    return S
                }
            });
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

            function E(e, t, n) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
                    id: e,
                    hoist: t,
                    mentionable: n
                })
            }

            function I(e, t, n) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
                    id: e,
                    icon: t,
                    unicodeEmoji: n
                })
            }

            function _(e, t) {
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
        }
    }
]);