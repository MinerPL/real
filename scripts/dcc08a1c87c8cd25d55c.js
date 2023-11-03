(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["222"], {
        553021: function(e, t, l) {
            "use strict";
            e.exports = l.p + "c7c4065874955761be3b.svg"
        },
        752499: function(e, t, l) {
            "use strict";
            e.exports = l.p + "a1b0a14d2f22c155a2b3.svg"
        },
        449638: function(e, t, l) {
            "use strict";
            e.exports = l.p + "a4bee30fe0b5a0f5b3c7.svg"
        },
        117809: function(e, t, l) {
            "use strict";
            e.exports = l.p + "35b075323bfac98abdee.svg"
        },
        277482: function(e, t, l) {
            "use strict";
            e.exports = l.p + "1bb2be01aece015602f7.svg"
        },
        57213: function(e, t, l) {
            "use strict";
            e.exports = l.p + "39e3f389716400ced39a.svg"
        },
        101017: function(e, t, l) {
            "use strict";
            e.exports = l.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, l) {
            "use strict";
            e.exports = l.p + "829f8ef7dcf355fbe141.svg"
        },
        390494: function(e, t, l) {
            "use strict";
            e.exports = l.p + "3c565e38a11e3153dba0.svg"
        },
        713841: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("913144"),
                a = l("592407"),
                i = l("482391"),
                s = l("611183"),
                r = {
                    init() {
                        n.default.dispatch({
                            type: "INTEGRATION_SETTINGS_INIT"
                        })
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        n.default.dispatch({
                            type: "INTEGRATION_SETTINGS_SET_SECTION",
                            section: e,
                            sectionId: t
                        })
                    },
                    startEditingCommandPermissions(e) {
                        n.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
                            commandId: e
                        })
                    },
                    stopEditingCommandPermissions(e) {
                        n.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
                            commandId: e
                        })
                    },
                    startEditingIntegration(e) {
                        n.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
                            integrationId: e
                        })
                    },
                    stopEditingIntegration() {
                        n.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
                        })
                    },
                    updateIntegration(e) {
                        n.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
                            settings: e
                        })
                    },
                    startEditingWebhook(e) {
                        n.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
                            webhookId: e
                        })
                    },
                    stopEditingWebhook() {
                        n.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
                        })
                    },
                    updateWebhook(e) {
                        n.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
                            settings: e
                        })
                    },
                    async saveApplicationPermissions(e, t, l) {
                        try {
                            n.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await i.updateApplicationCommandPermissions({
                                applicationId: e,
                                commandId: e,
                                defaultEveryoneValue: !0,
                                defaultEverywhereValue: !0,
                                guildId: t,
                                permissions: l
                            }), n.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            n.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    },
                    async saveIntegration(e, t) {
                        try {
                            n.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await a.default.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), n.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            n.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    },
                    async saveWebhook(e, t) {
                        try {
                            n.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await s.default.update(e, t.id, t), n.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            n.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    }
                }
        },
        900676: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("316693"),
                o = l("200900"),
                d = l("77078"),
                u = l("822997"),
                c = l("350625"),
                f = l("468759"),
                I = l("752736"),
                T = l("926622");
            class m extends a.PureComponent {
                getOverwriteValue(e) {
                    let {
                        allow: t,
                        deny: l
                    } = this.props;
                    if (null == t || null == l) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
                    return r.default.has(t, e) ? u.PermissionOverrideType.ALLOW : r.default.has(l, e) ? u.PermissionOverrideType.DENY : u.PermissionOverrideType.PASSTHROUGH
                }
                getPermissionValue(e, t) {
                    return r.default.has(t, e)
                }
                handleChange(e, t) {
                    let {
                        onChange: l
                    } = this.props;
                    l(e, t)
                }
                renderDisabledIndicator(e) {
                    return (0, n.jsx)(d.Tooltip, {
                        text: e,
                        position: "top",
                        color: d.Tooltip.Colors.RED,
                        children: e => (0, n.jsx)("span", {
                            ...e,
                            children: (0, n.jsx)(f.default, {
                                className: I.icon,
                                width: 18,
                                height: 18
                            })
                        })
                    })
                }
                renderComponent(e) {
                    let {
                        title: t,
                        description: l,
                        helpdeskArticleId: a,
                        flag: i
                    } = e, {
                        permissions: r,
                        locked: u,
                        permissionRender: f
                    } = this.props, T = null == f ? void 0 : f(i), m = !!(u || T), N = "string" == typeof T ? this.renderDisabledIndicator(T) : null, E = s({
                        [I.title]: null != N
                    });
                    return null == r ? (0, n.jsxs)(c.default, {
                        disabled: m,
                        value: this.getOverwriteValue(i),
                        onChange: e => this.handleChange(i, e),
                        note: (0, o.renderDescription)(l),
                        helpdeskArticleId: a,
                        children: [N, (0, n.jsx)("span", {
                            className: E,
                            children: t
                        })]
                    }, String(i)) : (0, n.jsxs)(d.FormSwitch, {
                        disabled: m,
                        value: this.getPermissionValue(i, r),
                        onChange: e => this.handleChange(i, e),
                        note: (0, o.renderDescription)(l),
                        children: [N, (0, n.jsx)("span", {
                            className: E,
                            children: t
                        })]
                    }, String(i))
                }
                render() {
                    let {
                        spec: e,
                        className: t
                    } = this.props;
                    return (0, n.jsx)(d.FormSection, {
                        className: t,
                        children: (0, n.jsxs)(d.HeadingLevel, {
                            component: (0, n.jsx)(d.FormTitle, {
                                tag: d.FormTitleTags.H5,
                                className: null != e.description ? T.marginBottom8 : T.marginBottom20,
                                children: e.title
                            }),
                            children: [null != e.description && (0, n.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                className: T.marginBottom20,
                                children: e.description
                            }), e.permissions.map(this.renderComponent, this)]
                        })
                    })
                }
            }
            var N = m
        },
        202084: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ChannelsFollowedIcon: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                i = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M14 10a1 1 0 1 1 0-2h3.586l-4.293-4.293a1 1 0 0 1 1.414-1.414L19 6.586V3a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6ZM4 2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM15 14a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5ZM11 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.586l4.293 4.293a1 1 0 0 0 1.414-1.414L6.414 16H10a1 1 0 0 0 1-1Z",
                        className: r
                    })
                })
            }
        },
        605141: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                PaperIcon: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                i = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H6Zm-1 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        99637: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                WebhookIcon: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                i = l("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "m7.705 16.954 3.674-6.768a1 1 0 0 0-.504-1.404A3.001 3.001 0 0 1 12 3a3 3 0 0 1 3 3 1 1 0 1 0 2 0 5 5 0 1 0-7.853 4.106l-3.2 5.895A2 2 0 1 0 7.732 19h8.536A2 2 0 0 0 20 18a2 2 0 0 0-3.732-1H7.732a1.95 1.95 0 0 0-.027-.046Z",
                        className: r
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13.806 6.861a2 2 0 1 0-1.648 1.133l4.518 6.572A1 1 0 0 0 17.5 15h.5a3 3 0 1 1-1.984 5.25.996.996 0 0 0-.657-.25h-.01a1 1 0 0 0-.657 1.75A5 5 0 1 0 18.026 13l-4.22-6.139ZM5.968 13.877a1 1 0 0 1-.719 1.217A3.002 3.002 0 0 0 6 21c.761 0 1.455-.282 1.984-.75a1 1 0 1 1 1.323 1.5 5 5 0 1 1-4.557-8.592 1 1 0 0 1 1.218.719Z",
                        className: r
                    })]
                })
            }
        },
        671625: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("913678"),
                i = l("49111");

            function s(e) {
                let {
                    guildId: t,
                    applicationId: l,
                    applicationPrimarySkuId: s
                } = e;
                return (0, n.jsx)(a.default, {
                    guildId: t,
                    applicationId: l,
                    applicationPrimarySkuId: s,
                    analyticsLocation: i.AnalyticsLocations.GUILD_INTEGRATION_SETTINGS
                })
            }
        },
        70919: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                fetchRoleConnectionsConfiguration: function() {
                    return r
                },
                putRoleConnectionsConfigurations: function() {
                    return o
                },
                fetchUserApplicationRoleConnections: function() {
                    return d
                }
            });
            var n = l("872717"),
                a = l("913144"),
                i = l("895026"),
                s = l("49111");

            function r(e, t) {
                n.default.get({
                    url: s.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
                }).then(e => {
                    let l = [];
                    e.body.length > 0 && (l = e.body.map(e => e.map(e => ({
                        connectionType: e.connection_type,
                        connectionMetadataField: e.connection_metadata_field,
                        applicationId: e.application_id,
                        operator: e.operator,
                        value: e.value
                    })))), a.default.dispatch({
                        type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                        roleId: t,
                        roleConnectionConfigurations: l
                    })
                }).catch(() => {})
            }
            async function o(e, t, l) {
                let r = l.map(e => e.map(e => ({
                        connection_type: e.connectionType,
                        connection_metadata_field: e.connectionMetadataField,
                        application_id: e.applicationId,
                        operator: e.operator,
                        value: e.value
                    }))),
                    o = await n.default.put({
                        url: s.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
                        body: 0 === r.length ? [] : r,
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
                    d = await (0, i.requestMembersForRole)(e, t, !1);
                null != d && a.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                    guildId: e,
                    roleId: t,
                    count: d
                }), a.default.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                    roleId: t,
                    roleConnectionConfigurations: o
                })
            }
            async function d() {
                let e = await n.default.get({
                    url: s.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS
                });
                return e.body
            }
        },
        69678: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("884691"),
                a = l("476042");

            function i(e) {
                let {
                    type: t,
                    index: l,
                    optionId: i,
                    onDragStart: s,
                    onDragComplete: r,
                    onDragReset: o
                } = e, [d, u] = n.useState(!1), [, c] = (0, a.useDrag)({
                    type: t,
                    item: () => (s(i), {
                        id: i,
                        position: l
                    }),
                    canDrag: () => d,
                    collect: e => ({
                        isDragging: e.isDragging()
                    }),
                    end: (e, t) => {
                        let l = t.getDropResult();
                        if (null == l) {
                            o();
                            return
                        }
                        r(l.optionId)
                    }
                }), [{
                    dragSourcePosition: f
                }, I] = (0, a.useDrop)({
                    accept: t,
                    canDrop: () => !0,
                    collect: e => {
                        let t = e.getItem();
                        return null != t && e.isOver() && e.canDrop() ? {
                            dragSourcePosition: t.position
                        } : {
                            dragSourcePosition: null
                        }
                    },
                    drop: () => ({
                        optionId: i
                    })
                });
                return {
                    drag: c,
                    dragSourcePosition: f,
                    drop: I,
                    setIsDraggable: u
                }
            }
        },
        372283: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("884691");

            function a(e, t) {
                let [l, a] = n.useState(null), i = n.useCallback(e => {
                    a(e)
                }, []), s = n.useCallback(() => {
                    a(null)
                }, []), r = n.useCallback(n => {
                    s();
                    let a = e.find(e => {
                            let {
                                id: t
                            } = e;
                            return l === t
                        }),
                        i = e.find(e => {
                            let {
                                id: t
                            } = e;
                            return n === t
                        });
                    if (null == a || null == i || a === i) return;
                    let r = [...e],
                        o = r.indexOf(a),
                        d = r.indexOf(i),
                        u = d - o > 0 ? 1 : 0;
                    r.splice(o, 1), d = r.indexOf(i), r.splice(d + u, 0, a), t(r)
                }, [e, l, s, t]);
                return {
                    draggingId: l,
                    handleDragStart: i,
                    handleDragReset: s,
                    handleDragComplete: r
                }
            }
        },
        726527: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useHasGuildRoleItems: function() {
                    return o
                },
                default: function() {
                    return d
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                i = l("272030"),
                s = l("694402"),
                r = l("782340");

            function o(e, t) {
                let l = (0, s.default)(e, t);
                return l.length > 0
            }

            function d(e) {
                let {
                    role: t,
                    guild: l,
                    onSelect: o
                } = e, d = (0, s.default)(l, t);
                return 0 === d.length ? null : (0, n.jsx)(a.Menu, {
                    navId: "guild-settings-role-context",
                    "aria-label": r.default.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
                    onClose: i.closeContextMenu,
                    onSelect: o,
                    children: d
                })
            }
        },
        694402: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                i = l("77078"),
                s = l("851387"),
                r = l("477566"),
                o = l("70919"),
                d = l("861370"),
                u = l("957255"),
                c = l("228220"),
                f = l("893455"),
                I = l("782340");

            function T(e, t) {
                var l;
                let T = (0, a.useStateFromStores)([u.default], () => {
                        let l = u.default.getHighestRole(e);
                        return !u.default.isRoleHigher(e, l, t)
                    }),
                    m = [],
                    N = (0, f.default)(e, t);
                null != N && m.push(N);
                let E = (0, d.default)({
                    id: t.id,
                    label: I.default.Messages.COPY_ID_ROLE
                });
                null != E && m.push(E);
                let S = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) === null,
                    p = t.managed && !S,
                    h = null != t && t.id === e.id;
                return !T && !p && !h && m.push((0, n.jsx)(i.MenuGroup, {
                    children: (0, n.jsx)(i.MenuItem, {
                        id: "delete-role",
                        label: I.default.Messages.DELETE,
                        color: "danger",
                        icon: c.default,
                        action: () => {
                            r.default.show({
                                title: I.default.Messages.SETTINGS_ROLES_DELETE_TITLE,
                                body: I.default.Messages.SETTINGS_ROLES_DELETE_BODY.format({
                                    name: t.name
                                }),
                                cancelText: I.default.Messages.CANCEL,
                                onConfirm: async () => {
                                    S && await (0, o.putRoleConnectionsConfigurations)(e.id, t.id, []), s.default.deleteRole(e.id, t.id)
                                }
                            })
                        }
                    })
                }, "delete-role")), m
            }
        },
        893455: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("446674"),
                i = l("77078"),
                s = l("592407"),
                r = l("479756"),
                o = l("507950"),
                d = l("957255"),
                u = l("538137"),
                c = l("49111"),
                f = l("782340");

            function I(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.GuildSettingsSections.ROLES,
                    I = (0, a.useStateFromStores)([d.default], () => d.default.canImpersonateRole(e, t));
                return I ? (0, n.jsx)(i.MenuItem, {
                    id: "view-as-role",
                    label: f.default.Messages.VIEW_AS_ROLE,
                    icon: u.default,
                    action: () => {
                        s.default.close(), (0, r.startImpersonating)(e.id, {
                            type: o.ImpersonateType.ROLES,
                            roles: {
                                [t.id]: t
                            },
                            returnToSection: l
                        })
                    }
                }, "view-as-role") : null
            }
        },
        952943: function(e, t, l) {
            "use strict";
            let n, a;
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            });
            var i = l("917351"),
                s = l.n(i),
                r = l("446674"),
                o = l("913144"),
                d = l("611183"),
                u = l("957255"),
                c = l("45894"),
                f = l("900938"),
                I = l("49111");
            let T = [],
                m = [],
                N = null,
                E = null,
                S = null,
                p = !1,
                h = !1,
                _ = I.FormStates.CLOSED,
                g = {},
                O = !1,
                A = null,
                C = new Set;

            function R(e) {
                let {
                    section: t
                } = e;
                if (t !== I.GuildSettingsSections.INTEGRATIONS) return !1;
                if (a = I.IntegrationSettingsSections.OVERVIEW, null == n) {
                    let e = f.default.getGuildId();
                    null != e && d.default.fetchForGuild(e), x(!1)
                }
            }

            function x(e) {
                if (null != (n = f.default.getProps().guild) && u.default.can(I.Permissions.MANAGE_GUILD, n)) {
                    let e = f.default.getProps().integrations;
                    null == e && (h = !0), T = null != e ? e : []
                } else T = [];
                if (m = null != n && u.default.can(I.Permissions.MANAGE_WEBHOOKS, n) ? c.default.getWebhooksForGuild(n.id) : [], !e && null != E) {
                    let e = v(E.id);
                    null != e && (E = e)
                }
                if (null != S) {
                    let e = L(S.id);
                    null != e && (S = e)
                }
                N = null, _ = I.FormStates.OPEN, g = {}, O = !1
            }
            let M = s.debounce(() => {
                O && (null != E ? s.isEqual(E, v(E.id)) && (O = !1) : null != S && s.isEqual(S, L(S.id)) && (O = !1), !O && P.emitChange())
            }, 500);

            function v(e) {
                return T.find(t => {
                    let {
                        id: l
                    } = t;
                    return l === e
                })
            }

            function L(e) {
                return m.find(t => {
                    let {
                        id: l
                    } = t;
                    return l === e
                })
            }
            class j extends r.default.Store {
                initialize() {
                    this.waitFor(f.default, c.default, u.default)
                }
                hasChanges() {
                    return O
                }
                get guild() {
                    return n
                }
                get integrations() {
                    return T
                }
                get integrationIdsWithCommands() {
                    return C
                }
                get webhooks() {
                    return m
                }
                get editedCommandId() {
                    return N
                }
                get editedIntegration() {
                    return E
                }
                get editedWebhook() {
                    return S
                }
                get formState() {
                    return _
                }
                getErrors() {
                    return g
                }
                getSection() {
                    return a
                }
                getSectionId() {
                    return A
                }
                getIntegration(e) {
                    return v(e)
                }
                getWebhook(e) {
                    return L(e)
                }
                isFetching() {
                    return h || p
                }
                showNotice() {
                    return this.hasChanges()
                }
                getApplication(e) {
                    var t;
                    return null === (t = T.find(t => {
                        var l;
                        return (null === (l = t.application) || void 0 === l ? void 0 : l.id) === e
                    })) || void 0 === t ? void 0 : t.application
                }
            }
            j.displayName = "GuildSettingsIntegrationsStore";
            let P = new j(o.default, __OVERLAY__ ? {} : {
                INTEGRATION_SETTINGS_INIT: function() {
                    return x(!1)
                },
                INTEGRATION_SETTINGS_SAVE_SUCCESS: function() {
                    return x(!0)
                },
                GUILD_SETTINGS_INIT: R,
                GUILD_SETTINGS_SET_SECTION: R,
                INTEGRATION_SETTINGS_SET_SECTION: function(e) {
                    let {
                        section: t,
                        sectionId: l
                    } = e;
                    a = t, A = l
                },
                INTEGRATION_SETTINGS_START_EDITING_COMMAND: function(e) {
                    let {
                        commandId: t
                    } = e;
                    N = t, E = null, S = null, g = {}, O = !0
                },
                INTEGRATION_SETTINGS_STOP_EDITING_COMMAND: function(e) {
                    let {
                        commandId: t
                    } = e;
                    if (null == N || N !== t) return !1;
                    N = null, g = {}, O = !1
                },
                INTEGRATION_SETTINGS_START_EDITING_INTEGRATION: function(e) {
                    let {
                        integrationId: t
                    } = e, l = v(t);
                    if (null == l) return !1;
                    E = l, N = null, S = null, g = {}, O = !1
                },
                INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION: function() {
                    E = null, g = {}, O = !1
                },
                INTEGRATION_SETTINGS_UPDATE_INTEGRATION: function(e) {
                    let {
                        settings: t
                    } = e;
                    if (null == E) return !1;
                    E = {
                        ...E
                    }, null != t.enableEmoticons && E.enable_emoticons !== t.enableEmoticons && (E.enable_emoticons = t.enableEmoticons, O = !0), null != t.expireBehavior && E.expire_behavior !== t.expireBehavior && (E.expire_behavior = t.expireBehavior, O = !0), null != t.expireGracePeriod && E.expire_grace_period !== t.expireGracePeriod && (E.expire_grace_period = t.expireGracePeriod, O = !0), O && M()
                },
                INTEGRATION_SETTINGS_UPDATE_WEBHOOK: function(e) {
                    let {
                        settings: t
                    } = e;
                    if (null == S) return !1;
                    S = {
                        ...S
                    }, null != t.name && S.name !== t.name && (S.name = t.name, O = !0), void 0 !== t.avatar && S.avatar !== t.avatar && (S.avatar = t.avatar, O = !0), null != t.channelId && S.channel_id !== t.channelId && (S.channel_id = t.channelId, O = !0), O && M()
                },
                INTEGRATION_SETTINGS_START_EDITING_WEBHOOK: function(e) {
                    let {
                        webhookId: t
                    } = e, l = L(t);
                    if (null == l) return !1;
                    S = l, N = null, E = null, g = {}, O = !1
                },
                INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK: function() {
                    S = null, g = {}, O = !1
                },
                GUILD_SETTINGS_CLOSE: function() {
                    n = null, T = [], m = [], N = null, E = null, S = null, _ = I.FormStates.CLOSED, O = !1
                },
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
                    var t, l, a, i, s;
                    let {
                        guildId: r,
                        integrations: o
                    } = e;
                    if (null == n || r !== n.id || _ === I.FormStates.SUBMITTING) return !1;
                    for (let e of (h = !1, o)) {
                        let n = T.find(t => {
                            let {
                                id: l
                            } = t;
                            if (l === e.id) return !0
                        });
                        null == n && (T.push(e), e.type === (null === (t = E) || void 0 === t ? void 0 : t.type) && (null === (l = e.account) || void 0 === l ? void 0 : l.id) === (null === (a = E.account) || void 0 === a ? void 0 : a.id) && (E = e))
                    }
                    for (let e = T.length - 1; e >= 0; e--) {
                        let t = T[e],
                            l = o.find(e => {
                                let {
                                    id: l
                                } = e;
                                if (l === t.id) return !0
                            });
                        if (null != l) {
                            let n = {
                                ...t,
                                ...l
                            };
                            (null === (i = E) || void 0 === i ? void 0 : i.id) === n.id && (!1 === n.enabled ? E = null : !O && (E = n)), T[e] = n
                        } else(null === (s = E) || void 0 === s ? void 0 : s.id) === t.id && (E = null), T.splice(e, 1)
                    }
                    T = [...T], M()
                },
                GUILD_SETTINGS_LOADED_INTEGRATIONS_WITH_COMMANDS: function(e) {
                    let {
                        guildId: t,
                        integrationIds: l
                    } = e;
                    if (null == n || t !== n.id || _ === I.FormStates.SUBMITTING) return !1;
                    C = new Set(l)
                },
                WEBHOOKS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: l,
                        webhooks: a
                    } = e;
                    if (null == n || t !== n.id || null == a || _ === I.FormStates.SUBMITTING) return !1;
                    p = !1;
                    for (let e = m.length - 1; e >= 0; e--) {
                        var i, s;
                        let t = m[e];
                        if (null != l && (null == t ? void 0 : t.channel_id) !== l) continue;
                        let n = a.find(e => {
                            let {
                                id: l
                            } = e;
                            if (l === t.id) return !0
                        });
                        if (null != n) {
                            let l = {
                                ...t,
                                ...n
                            };
                            m[e] = l, !O && (null === (i = S) || void 0 === i ? void 0 : i.id) === l.id && (S = l)
                        } else(null === (s = S) || void 0 === s ? void 0 : s.id) === t.id && (S = null), m.splice(e, 1)
                    }
                    for (let e of a) {
                        let t = m.find(t => {
                            let {
                                id: l
                            } = t;
                            if (l === e.id) return !0
                        });
                        null == t && m.push(e)
                    }
                    m = [...m], M()
                },
                INTEGRATION_SETTINGS_SUBMITTING: function() {
                    _ = I.FormStates.SUBMITTING, g = {}
                },
                INTEGRATION_SETTINGS_SAVE_FAILURE: function(e) {
                    var t;
                    if (_ !== I.FormStates.SUBMITTING) return !1;
                    _ = I.FormStates.OPEN, g = null !== (t = e.errors) && void 0 !== t ? t : {}
                }
            });
            var b = P
        },
        482391: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                clearIntegrationPermissions: function() {
                    return o
                },
                editPermissions: function() {
                    return d
                },
                getApplicationCommands: function() {
                    return u
                },
                getApplicationCommandPermissions: function() {
                    return c
                },
                initIntegrationPermissions: function() {
                    return f
                },
                resetPermissions: function() {
                    return I
                },
                updateApplicationCommandPermissions: function() {
                    return T
                }
            });
            var n = l("872717"),
                a = l("913144"),
                i = l("507217"),
                s = l("389153"),
                r = l("49111");

            function o() {
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function d(e, t, l) {
                a.default.dispatch({
                    applicationId: e,
                    commandId: t,
                    permissions: l,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function u(e, t) {
                n.default.get(r.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(l => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: t,
                        commands: l.body.application_commands,
                        guildId: e,
                        permissions: l.body.permissions
                    })
                }, () => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: t
                    })
                })
            }
            async function c(e, t, l) {
                let i = [];
                try {
                    let a = await n.default.get(r.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, l));
                    a.ok && (i = a.body.permissions)
                } catch (n) {
                    if (404 !== n.status) {
                        a.default.dispatch({
                            type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                            applicationId: e,
                            commandId: l,
                            guildId: t
                        });
                        return
                    }
                }
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: e,
                    commandId: l,
                    guildId: t,
                    permissions: i
                })
            }

            function f(e) {
                a.default.dispatch({
                    applicationId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function I(e) {
                a.default.dispatch({
                    commandId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }
            async function T(e) {
                let {
                    applicationId: t,
                    commandId: l,
                    defaultEveryoneValue: n,
                    defaultEverywhereValue: r,
                    guildId: o,
                    permissions: d
                } = e, u = l === t ? function(e, t, l, n) {
                    if (!l || !n) return t;
                    let a = {
                        [e]: l,
                        [(0, s.allChannelsSentinel)(e)]: n
                    };
                    return t.filter(e => {
                        let t = a[e.id];
                        return null == t || e.permission !== t
                    })
                }(o, d, n, r) : d, c = await i.updateApplicationGuildCommandPermissions(t, o, l, u);
                c.ok && a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: t,
                    commandId: l,
                    guildId: o,
                    permissions: c.body.permissions
                })
            }
        },
        978900: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                filterPermissionSearchItems: function() {
                    return i
                }
            });
            var n = l("448105"),
                a = l.n(n);

            function i(e, t, l) {
                if ("" === l) return e;
                let n = l.toLowerCase(),
                    i = [];
                for (let s of e) {
                    let {
                        id: e,
                        names: r
                    } = t(s);
                    if (e === l) return [s];
                    r.some(e => a(n, e.toLowerCase())) && i.push(s)
                }
                return i
            }
        },
        683830: function(e, t, l) {
            "use strict";
            let n, a, i;
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var s = l("446674"),
                r = l("913144"),
                o = l("389153"),
                d = l("892692");
            let u = {},
                c = {},
                f = !1;

            function I() {
                n = void 0, u = {}, c = {}, a = void 0, i = void 0, f = !1
            }
            class T extends s.default.Store {
                getApplicationPermissions() {
                    return u
                }
                getCommands() {
                    return c
                }
                getCommand(e) {
                    var t;
                    return null === (t = c) || void 0 === t ? void 0 : t[e]
                }
                getEditedApplication() {
                    return a
                }
                getEditedCommand() {
                    return i
                }
                isUnavailable() {
                    return f
                }
                getApplicationId() {
                    return n
                }
            }
            T.displayName = "IntegrationPermissionStore";
            var m = new T(r.default, {
                LOGOUT: I,
                INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    if (t !== n) return !1;
                    f = !0
                },
                INTEGRATION_PERMISSION_SETTINGS_CLEAR: I,
                INTEGRATION_PERMISSION_SETTINGS_INIT: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    I(), n = t
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
                    let i = c[l];
                    if (null == i) return !1;
                    c[l] = {
                        ...i,
                        permissions: (0, d.keyPermissions)(a)
                    }
                },
                INTEGRATION_PERMISSION_SETTINGS_EDIT: function(e) {
                    let {
                        applicationId: t,
                        commandId: l,
                        permissions: s
                    } = e;
                    if (t !== n) return !1;
                    l === n ? a = s : i = {
                        commandId: l,
                        permissions: s
                    }
                },
                INTEGRATION_PERMISSION_SETTINGS_RESET: function(e) {
                    let {
                        commandId: t
                    } = e;
                    null == t ? a = void 0 : i = void 0
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
                    let i = Object.fromEntries(a.map(e => [e.id, e.permissions])),
                        s = {};
                    for (let e of l)
                        if (e.application_id === n) {
                            let t = (0, o.buildCommand)({
                                    rootCommand: e,
                                    command: e,
                                    applicationId: e.application_id
                                }),
                                l = i[e.id];
                            null != l && (t.permissions = (0, d.keyPermissions)(l)), s[e.id] = t
                        } c = s
                }
            })
        },
        464782: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useIntegrationPermissionChannelSearch: function() {
                    return u
                }
            });
            var n = l("884691"),
                a = l("389153"),
                i = l("923959"),
                s = l("957255"),
                r = l("978900"),
                o = l("49111"),
                d = l("782340");

            function u(e) {
                let t = n.useMemo(() => {
                        let t = i.default.getChannels(e),
                            l = [...t[i.GUILD_SELECTABLE_CHANNELS_KEY]];
                        l.push(...t[0, i.GUILD_VOCAL_CHANNELS_KEY].filter(e => e.channel.isGuildVocal()));
                        let n = l.map(e => ({
                            id: e.channel.id,
                            name: e.channel.name,
                            canManage: s.default.can(o.Permissions.MANAGE_ROLES, e.channel)
                        }));
                        return n.unshift({
                            id: (0, a.allChannelsSentinel)(e),
                            name: d.default.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                            canManage: !0
                        }), n
                    }, [e]),
                    [l, u] = n.useState(""),
                    f = n.useMemo(() => {
                        let e = function(e) {
                            return e.startsWith("#") ? e.substr(1) : e
                        }(l);
                        return (0, r.filterPermissionSearchItems)(t, c, e)
                    }, [t, l]);
                return {
                    query: l,
                    results: f,
                    setQuery: u,
                    unfilteredCount: t.length
                }
            }

            function c(e) {
                return {
                    id: e.id,
                    names: [e.name]
                }
            }
        },
        106490: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useIntegrationPermissionCommandSearch: function() {
                    return o
                }
            });
            var n = l("884691"),
                a = l("446674"),
                i = l("798609"),
                s = l("978900"),
                r = l("683830");

            function o() {
                var e;
                let t = (0, a.useStateFromStoresObject)([r.default], () => Object.values(null !== (e = r.default.getCommands()) && void 0 !== e ? e : {})),
                    [l, o] = n.useState(""),
                    u = n.useMemo(() => [...t].sort((e, t) => {
                        let l = i.ApplicationCommandType.CHAT + 1,
                            n = t.type > l ? l : t.type,
                            a = e.type > l ? l : e.type,
                            s = n - a;
                        return 0 !== s ? s : e.name.localeCompare(t.name)
                    }), [t]),
                    c = n.useMemo(() => l.startsWith("/") ? u.filter(e => e.type === i.ApplicationCommandType.CHAT) : u, [l, u]),
                    f = n.useMemo(() => l.startsWith("/") ? l.substring(1) : l, [l]),
                    I = n.useMemo(() => (0, s.filterPermissionSearchItems)(c, d, f), [c, f]);
                return {
                    query: l,
                    results: I,
                    setQuery: o,
                    unfilteredCount: t.length
                }
            }

            function d(e) {
                return {
                    id: e.id,
                    names: [e.displayName]
                }
            }
        },
        636024: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useIntegrationPermissionMemberSearch: function() {
                    return m
                }
            });
            var n = l("884691"),
                a = l("627445"),
                i = l.n(a),
                s = l("316693"),
                r = l("446674"),
                o = l("26989"),
                d = l("305961"),
                u = l("957255"),
                c = l("697218"),
                f = l("991170"),
                I = l("978900"),
                T = l("49111");

            function m(e) {
                var t;
                let l = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(e));
                i(null != l, "guild must be present to be editing its integration settings");
                let a = (0, r.useStateFromStores)([u.default], () => u.default.getHighestRole(l)),
                    m = (0, r.useStateFromStoresArray)([o.default], () => o.default.getMembers(e), [e]),
                    S = (0, r.useStateFromStoresObject)([c.default], () => c.default.getUsers()),
                    p = (0, r.useStateFromStoresArray)([d.default], () => {
                        var l;
                        return Object.values(null !== (t = null === (l = d.default.getGuild(e)) || void 0 === l ? void 0 : l.roles) && void 0 !== t ? t : {})
                    }, [e]),
                    h = n.useMemo(() => {
                        let e = [];
                        for (let t of m) {
                            let n = S[t.userId];
                            if (null == n || n.bot) continue;
                            let a = n.id !== l.ownerId && !f.default.can({
                                permission: T.Permissions.ADMINISTRATOR,
                                user: n,
                                context: l
                            }) && u.default.canManageUser(T.Permissions.USE_APPLICATION_COMMANDS, n, l);
                            e.push({
                                id: n.id,
                                canManage: a,
                                nick: t.nick,
                                username: n.username
                            })
                        }
                        return e
                    }, [l, m, S]),
                    _ = e => {
                        var t;
                        return e.managed && (null === (t = e.tags) || void 0 === t ? void 0 : t.bot_id) != null
                    },
                    g = n.useMemo(() => {
                        let t = [];
                        for (let n of p) {
                            if (_(n)) continue;
                            let i = !s.default.has(n.permissions, T.Permissions.ADMINISTRATOR) && u.default.isRoleHigher(l, a, n),
                                r = {
                                    id: n.id,
                                    name: n.name,
                                    canManage: i
                                };
                            n.id === e ? t.unshift(r) : t.push(r)
                        }
                        return t
                    }, [p, e, l, a]),
                    [O, A] = n.useState(""),
                    C = n.useMemo(() => {
                        let t = function(e) {
                                return e.startsWith("@") ? e.substr(1) : e
                            }(O),
                            l = O.startsWith("@") ? g.filter(t => t.id === e) : g,
                            n = (0, I.filterPermissionSearchItems)(h, N, t),
                            a = (0, I.filterPermissionSearchItems)(l, E, t);
                        return {
                            members: n,
                            roles: a
                        }
                    }, [e, h, O, g]);
                return {
                    query: O,
                    results: C,
                    setQuery: A,
                    unfilteredCount: C.members.length + C.roles.length
                }
            }

            function N(e) {
                let t = [e.username];
                return (null == e ? void 0 : e.nick) != null && t.push(e.nick), {
                    id: e.id,
                    names: t
                }
            }

            function E(e) {
                return {
                    id: e.id,
                    names: [e.name]
                }
            }
        },
        859728: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var n = l("884691"),
                a = l("627445"),
                i = l.n(a),
                s = l("917351"),
                r = l.n(s),
                o = l("446674"),
                d = l("713841"),
                u = l("524768"),
                c = l("389153"),
                f = l("42203"),
                I = l("305961"),
                T = l("957255"),
                m = l("697218"),
                N = l("449008"),
                E = l("683830"),
                S = l("892692"),
                p = l("49111");

            function h(e, t, l) {
                let a = (0, o.useStateFromStores)([E.default], () => E.default.getApplicationPermissions()),
                    s = n.useMemo(() => (function(e, t) {
                        let l = {
                                ...t
                            },
                            n = (0, c.allChannelsSentinel)(e),
                            a = (0, S.toPermissionKey)(n, u.ApplicationCommandPermissionType.CHANNEL),
                            i = (0, S.toPermissionKey)(e, u.ApplicationCommandPermissionType.ROLE);
                        return !(i in l) && (l[i] = {
                            id: e,
                            permission: !0,
                            type: u.ApplicationCommandPermissionType.ROLE
                        }), !(a in l) && (l[a] = {
                            id: n,
                            permission: !0,
                            type: u.ApplicationCommandPermissionType.CHANNEL
                        }), l
                    })(e, null != a ? a : {}), [a, e]),
                    h = (0, o.useStateFromStores)([E.default], () => {
                        var e;
                        if (null == l) return;
                        let t = E.default.getCommand(l);
                        return null !== (e = null == t ? void 0 : t.permissions) && void 0 !== e ? e : {}
                    }, [l]),
                    _ = (0, o.useStateFromStores)([E.default], () => {
                        var e;
                        return null == l ? E.default.getEditedApplication() : null === (e = E.default.getEditedCommand()) || void 0 === e ? void 0 : e.permissions
                    }, [l]),
                    g = null != l ? l : t,
                    O = null != l ? h : s,
                    A = n.useMemo(() => null != _ ? _ : {
                        ...null != O ? O : {}
                    }, [_, O]),
                    C = n.useMemo(() => Object.keys(A).length, [A]),
                    R = n.useMemo(() => null == O || null == A ? null : !r.isEqual(O, A), [O, A]);
                return n.useEffect(() => {
                    g === t && (R ? d.default.startEditingCommandPermissions(g) : d.default.stopEditingCommandPermissions(g))
                }, [t, R, g]), {
                    originalApplicationPermissions: s,
                    originalCommandPermissions: h,
                    editedTargetPermissions: function(e, t) {
                        let l = (0, o.useStateFromStores)([I.default], () => I.default.getGuild(e), [e]);
                        i(null != l, "guild must be present to be editing its integration settings");
                        let a = (0, o.useStateFromStores)([T.default], () => T.default.getHighestRole(l), [l]),
                            s = (0, o.useStateFromStores)([m.default], () => {
                                var e;
                                return null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.id
                            });
                        i(null != s, "useComputePermissions: currentUserId must not be null");
                        let r = s === l.ownerId,
                            {
                                channelIds: d,
                                roleIds: E,
                                userIds: S
                            } = n.useMemo(() => {
                                let e = [],
                                    l = [],
                                    n = [];
                                for (let a of Object.values(t)) a.type === u.ApplicationCommandPermissionType.CHANNEL ? e.push(a.id) : a.type === u.ApplicationCommandPermissionType.ROLE ? l.push(a.id) : a.type === u.ApplicationCommandPermissionType.USER && n.push(a.id);
                                return {
                                    channelIds: e,
                                    roleIds: l,
                                    userIds: n
                                }
                            }, [t]),
                            h = (0, o.useStateFromStoresObject)([f.default], () => Object.fromEntries(d.map(f.default.getChannel).filter(N.isNotNullish).map(e => [e.id, e])), [d]),
                            _ = n.useMemo(() => Object.fromEntries(E.map(e => l.getRole(e)).filter(N.isNotNullish).map(e => [e.id, e])), [l, E]),
                            g = (0, o.useStateFromStoresObject)([m.default], () => Object.fromEntries(S.map(m.default.getUser).filter(N.isNotNullish).map(e => [e.id, e])), [S]);
                        return n.useMemo(() => {
                            let e = l.id,
                                n = (0, c.allChannelsSentinel)(l.id),
                                i = {};
                            for (let [s, o] of Object.entries(t)) {
                                let t = !1,
                                    d = !1;
                                if (o.type === u.ApplicationCommandPermissionType.CHANNEL) {
                                    let e = o.id === n,
                                        l = h[o.id];
                                    t = e || T.default.can(p.Permissions.VIEW_CHANNEL, l), d = !0
                                } else if (o.type === u.ApplicationCommandPermissionType.ROLE) {
                                    let n = o.id === e,
                                        i = _[o.id];
                                    t = n || null != i, d = r || n || T.default.isRoleHigher(l, a, i)
                                } else if (o.type === u.ApplicationCommandPermissionType.USER) {
                                    let e = g[o.id];
                                    t = null != e, d = null != e && (r || T.default.canManageUser(p.Permissions.USE_APPLICATION_COMMANDS, e, l))
                                }
                                i[s] = {
                                    ...o,
                                    canRead: t,
                                    canWrite: d
                                }
                            }
                            return i
                        }, [h, l, a, r, t, _, g])
                    }(e, A),
                    hasChanges: R,
                    selectedPermissionCount: C
                }
            }
        },
        809843: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("77078"),
                s = l("272030"),
                r = l("798609"),
                o = l("83910"),
                d = l("17837"),
                u = l("266926"),
                c = l("892692"),
                f = l("782340"),
                I = l("242556");

            function T(e) {
                var t;
                let {
                    applicationIcon: T,
                    applicationName: m,
                    canNavigate: N,
                    command: E,
                    guildId: S
                } = e, p = a.useMemo(() => 0 !== Object.keys(null !== (t = E.permissions) && void 0 !== t ? t : {}).length, [E.permissions]), h = a.useCallback(() => {
                    null != E && N() && (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("555022").then(l.bind(l, "555022"));
                        return t => (0, n.jsx)(e, {
                            applicationIcon: T,
                            applicationId: E.applicationId,
                            applicationName: m,
                            command: E,
                            guildId: S,
                            ...t
                        })
                    })
                }, [T, m, N, E, S]), _ = a.useCallback(e => {
                    (0, s.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("443070").then(l.bind(l, "443070"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            id: E.id,
                            label: f.default.Messages.COPY_ID_COMMAND
                        })
                    })
                }, [E]), g = E.type === r.ApplicationCommandType.CHAT ? o.default : d.default, O = (0, c.commandName)(E.type, E.displayName);
                return (0, n.jsxs)(i.Clickable, {
                    onClick: h,
                    className: I.item,
                    onContextMenu: _,
                    children: [(0, n.jsxs)("div", {
                        className: I.identifier,
                        children: [(0, n.jsx)(g, {
                            className: I.icon,
                            width: 24,
                            height: 24
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: O
                        })]
                    }), (0, n.jsx)("div", {
                        className: I.statusContainer,
                        children: p ? (0, n.jsxs)("div", {
                            className: I.statusLine,
                            children: [(0, n.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: f.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_STATUS_HAS_OVERRIDES
                            }), (0, n.jsx)(u.default, {
                                height: 18,
                                width: 18,
                                className: I.statusIcon
                            })]
                        }) : null
                    })]
                })
            }
        },
        167356: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("77078"),
                s = l("810567"),
                r = l("106490"),
                o = l("809843"),
                d = l("157453"),
                u = l("782340"),
                c = l("884888");

            function f(e) {
                let {
                    applicationIcon: t,
                    applicationName: l,
                    canNavigate: f,
                    guildId: I
                } = e, {
                    results: T,
                    query: m,
                    setQuery: N,
                    unfilteredCount: E
                } = (0, r.useIntegrationPermissionCommandSearch)();
                return (0, n.jsx)(a.Fragment, {
                    children: null != T && E > 0 ? (0, n.jsx)(d.default, {
                        bar: (0, n.jsx)(s.default, {
                            query: m,
                            onChange: N,
                            onClear: () => N("")
                        }),
                        inModal: !1,
                        title: u.default.Messages.COMMANDS,
                        children: T.map((e, s) => (0, n.jsxs)(a.Fragment, {
                            children: [(0, n.jsx)(o.default, {
                                applicationIcon: t,
                                applicationName: l,
                                canNavigate: f,
                                command: e,
                                guildId: I
                            }), s < T.length - 1 ? (0, n.jsx)(i.FormDivider, {}) : null]
                        }, e.id))
                    }) : (0, n.jsx)(i.Card, {
                        className: c.emptyCard,
                        editable: !0,
                        children: (0, n.jsx)(i.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: u.default.Messages.INTEGRATIONS_APPLICATION_NO_COMMANDS
                        })
                    })
                })
            }
        },
        581511: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("627445"),
                o = l.n(r),
                d = l("509043"),
                u = l("446674"),
                c = l("77078"),
                f = l("272030"),
                I = l("524768"),
                T = l("389153"),
                m = l("419830"),
                N = l("405645"),
                E = l("42203"),
                S = l("26989"),
                p = l("102985"),
                h = l("697218"),
                _ = l("593195"),
                g = l("45029"),
                O = l("682344"),
                A = l("483093"),
                C = l("158998"),
                R = l("49111"),
                x = l("782340"),
                M = l("278737");

            function v(e) {
                let {
                    guild: t,
                    id: i,
                    type: s,
                    isLocked: r,
                    lockTooltipText: d
                } = e;
                o(!r || null != d, "No lockTooltipText provided while isLocked=true");
                let u = a.useCallback(e => {
                    (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("443070").then(l.bind(l, "443070"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            id: i,
                            label: x.default.Messages.COPY_ID_COMMAND
                        })
                    })
                }, [i]);
                switch (s) {
                    case I.ApplicationCommandPermissionType.CHANNEL:
                        return (0, n.jsx)(L, {
                            guild: t,
                            id: i,
                            isLocked: r,
                            lockTooltipText: d,
                            openEntryContextMenu: u
                        });
                    case I.ApplicationCommandPermissionType.ROLE:
                        return (0, n.jsx)(j, {
                            guild: t,
                            id: i,
                            isLocked: r,
                            lockTooltipText: d,
                            openEntryContextMenu: u
                        });
                    case I.ApplicationCommandPermissionType.USER:
                        return (0, n.jsx)(P, {
                            guild: t,
                            id: i,
                            isLocked: r,
                            lockTooltipText: d,
                            openEntryContextMenu: u
                        })
                }
            }

            function L(e) {
                let {
                    guild: t,
                    id: l,
                    isLocked: i,
                    lockTooltipText: r,
                    openEntryContextMenu: o
                } = e, d = (0, T.allChannelsSentinel)(t.id), {
                    icon: f,
                    name: I,
                    categoryName: N
                } = (0, u.useStateFromStoresObject)([E.default], () => {
                    if (d === l) return {
                        name: x.default.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
                        icon: _.default
                    };
                    let e = E.default.getChannel(l),
                        n = (null == e ? void 0 : e.parent_id) != null ? E.default.getChannel(e.parent_id) : null,
                        a = null != e ? (0, m.getChannelIconComponent)(e, t) : null;
                    return {
                        icon: a,
                        name: null == e ? void 0 : e.name,
                        categoryName: null == n ? void 0 : n.name
                    }
                }, [d, t, l]), S = a.useCallback(e => {
                    l !== d && o(e)
                }, [d, l, o]);
                return null == f || null == I ? null : (0, n.jsxs)("div", {
                    onContextMenu: S,
                    className: M.identifier,
                    children: [(0, n.jsx)(f, {
                        width: 20,
                        height: 20,
                        className: s(M.channelIcon, M.image)
                    }), (0, n.jsx)(c.Text, {
                        className: M.roleName,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: I
                    }), null != N ? (0, n.jsxs)(c.Text, {
                        className: M.tag,
                        variant: "text-sm/normal",
                        children: ["(", N, ")"]
                    }) : null, i ? (0, n.jsx)(b, {
                        tooltipText: r
                    }) : null]
                })
            }

            function j(e) {
                var t;
                let {
                    guild: i,
                    id: r,
                    isLocked: o,
                    lockTooltipText: u
                } = e, I = null == i ? void 0 : i.getRole(r), T = (0, N.useRoleIcon)({
                    guildId: i.id,
                    roleId: r,
                    size: 24
                }), m = a.useCallback(e => {
                    null != i && null != I && (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("178521").then(l.bind(l, "178521"));
                        return t => (0, n.jsx)(e, {
                            ...t,
                            guild: i,
                            role: I
                        })
                    })
                }, [i, I]);
                return (null == I ? void 0 : I.name) == null ? null : (0, n.jsxs)("div", {
                    onContextMenu: m,
                    className: M.identifier,
                    children: [null != T ? (0, n.jsx)(A.default, {
                        className: s(M.icon, M.image),
                        ...T
                    }) : (0, n.jsx)(O.default, {
                        className: s(M.shield, M.image),
                        color: null !== (t = I.colorString) && void 0 !== t ? t : (0, d.int2hex)(R.DEFAULT_ROLE_COLOR)
                    }), (0, n.jsx)(c.Text, {
                        className: M.roleName,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: I.name
                    }), o ? (0, n.jsx)(b, {
                        tooltipText: u
                    }) : null]
                })
            }

            function P(e) {
                let {
                    guild: t,
                    id: l,
                    isLocked: a,
                    lockTooltipText: i,
                    openEntryContextMenu: s
                } = e, r = (0, u.useStateFromStores)([h.default], () => h.default.getUser(l)), o = (0, u.useStateFromStores)([S.default], () => {
                    var e;
                    return null === (e = S.default.getMember(t.id, l)) || void 0 === e ? void 0 : e.nick
                }, [t.id, l]), d = (0, u.useStateFromStores)([p.default], () => p.default.hidePersonalInformation);
                return null == r ? null : (0, n.jsxs)("div", {
                    onContextMenu: s,
                    className: M.identifier,
                    children: [(0, n.jsx)(c.Avatar, {
                        className: M.image,
                        src: r.getAvatarURL(t.id, 24),
                        "aria-label": r.username,
                        size: c.AvatarSizes.SIZE_24
                    }), (0, n.jsx)(c.Text, {
                        className: M.roleName,
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: null != o ? o : r.username
                    }), d ? null : (0, n.jsx)(c.Text, {
                        className: M.tag,
                        variant: "text-sm/normal",
                        children: C.default.getUserTag(r)
                    }), a ? (0, n.jsx)(b, {
                        tooltipText: i
                    }) : null]
                })
            }

            function b(e) {
                let {
                    tooltipText: t
                } = e;
                return (0, n.jsx)(c.Tooltip, {
                    text: t,
                    children: e => (0, n.jsx)("div", {
                        className: M.lockIcon,
                        ...e,
                        children: (0, n.jsx)(g.default, {
                            width: 16,
                            height: 16
                        })
                    })
                })
            }
        },
        829319: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("627445"),
                s = l.n(i),
                r = l("917351"),
                o = l.n(r),
                d = l("446674"),
                u = l("77078"),
                c = l("851387"),
                f = l("716241"),
                I = l("524768"),
                T = l("389153"),
                m = l("702411"),
                N = l("15639"),
                E = l("5667"),
                S = l("271938"),
                p = l("305961"),
                h = l("697218"),
                _ = l("228220"),
                g = l("599110"),
                O = l("387111"),
                A = l("299039"),
                C = l("952943"),
                R = l("683830"),
                x = l("892692"),
                M = l("581511"),
                v = l("429310"),
                L = l("49111"),
                j = l("782340"),
                P = l("566818");

            function b(e) {
                let {
                    commandId: t,
                    editPermissions: l,
                    guildId: i,
                    noneSelectedText: r,
                    overwrites: f,
                    hasAccessToMutatePermissions: m
                } = e, E = (0, d.useStateFromStores)([p.default], () => p.default.getGuild(i), [i]);
                s(null != E, "");
                let [S, _] = a.useState(new Set), g = a.useMemo(() => {
                    let e = (0, T.allChannelsSentinel)(i),
                        t = o(E.roles).sortBy(e => e.position).reduce((e, t, l) => (e[t.id] = l, e), {});
                    return Object.values(f).filter(e => e.canRead).sort((l, n) => {
                        let a = l.type - n.type;
                        if (0 !== a) return a;
                        switch (l.type) {
                            case I.ApplicationCommandPermissionType.USER:
                                return function(e, t, l) {
                                    let n = Number(e.canWrite) - Number(t.canWrite);
                                    if (0 !== n) return n;
                                    let a = h.default.getUser(e.id),
                                        i = h.default.getUser(t.id);
                                    if (null != a && null != i) {
                                        let e = O.default.getName(l, void 0, a),
                                            t = O.default.getName(l, void 0, i);
                                        return null == e ? void 0 : e.localeCompare(t)
                                    }
                                    return A.default.compare(e.id, t.id)
                                }(l, n, i);
                            case I.ApplicationCommandPermissionType.ROLE:
                                return function(e, t, l, n) {
                                    if (e.id === l) return -1;
                                    if (t.id === l) return 1;
                                    let a = n[e.id],
                                        i = n[t.id];
                                    return a > i ? -1 : 1
                                }(l, n, i, t);
                            case I.ApplicationCommandPermissionType.CHANNEL:
                                return function(e, t, l) {
                                    if (e.id === l) return -1;
                                    if (t.id === l) return 1;
                                    let n = Number(e.canWrite) - Number(t.canWrite);
                                    return 0 !== n ? n : A.default.compare(e.id, t.id)
                                }(l, n, e)
                        }
                    })
                }, [i, f, E]), M = a.useCallback((e, t) => {
                    let n = (0, x.toPermissionKey)(e, t);
                    l({}, [n])
                }, [l]), v = a.useCallback((e, t, n) => {
                    let a = (0, x.toPermissionKey)(e, t),
                        i = f[a];
                    null != i && l({
                        [a]: {
                            id: e,
                            permission: n,
                            type: t
                        }
                    }, [])
                }, [l, f]);
                a.useEffect(() => {
                    let e = Object.values(f).filter(e => e.type === I.ApplicationCommandPermissionType.USER && !e.canRead && !S.has(e.id)).map(e => e.id);
                    0 !== e.length && (c.default.requestMembersById(i, e, !1), _(t => new Set([...t, ...e])))
                }, [i, f, S, _]);
                let L = (0, d.useStateFromStores)([R.default], () => R.default.getApplicationId()),
                    j = (0, d.useStateFromStores)([C.default], () => null == L ? void 0 : C.default.integrations.find(e => {
                        var t;
                        return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === L
                    })),
                    b = (0, d.useStateFromStores)([N.default], () => void 0 !== j && N.default.canShowToggleTooltip(j.id));
                return (0, n.jsx)(a.Fragment, {
                    children: g.length > 0 ? g.map(e => (0, n.jsx)(G, {
                        guild: E,
                        commandId: t,
                        onChange: t => v(e.id, e.type, t),
                        onRemove: () => M(e.id, e.type),
                        overwrite: e,
                        integration: j,
                        canShowMigrationTooltip: b,
                        hasAccessToMutatePermissions: m
                    }, e.id)) : (0, n.jsx)("div", {
                        className: P.noItemsSelected,
                        children: (0, n.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-sm/normal",
                            children: r
                        })
                    })
                })
            }

            function G(e) {
                var t, l, i;
                let s, {
                        guild: r,
                        commandId: o,
                        onChange: d,
                        onRemove: c,
                        overwrite: N,
                        integration: p,
                        canShowMigrationTooltip: h,
                        hasAccessToMutatePermissions: _
                    } = e,
                    O = N.id === r.id || N.id === (0, T.allChannelsSentinel)(r.id),
                    A = null == p ? void 0 : null === (l = p.application) || void 0 === l ? void 0 : null === (t = l.bot) || void 0 === t ? void 0 : t.username,
                    C = !N.canWrite || !_,
                    R = S.default.getId();
                _ ? !N.canWrite && (N.type === I.ApplicationCommandPermissionType.USER ? s = N.id === R ? j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_SELF : j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_OTHER : N.type === I.ApplicationCommandPermissionType.ROLE && (s = j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_ROLE)) : s = null != o ? j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION;
                let x = h && null != p && N.id === r.id && void 0 !== A && !N.permission;
                a.useEffect(() => {
                    if (x) {
                        var e;
                        g.default.track(L.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                            ...(0, f.collectGuildAnalyticsMetadata)(r.id),
                            application_id: null == p ? void 0 : null === (e = p.application) || void 0 === e ? void 0 : e.id,
                            location: "toggle"
                        })
                    }
                }, [r.id, null == p ? void 0 : null === (i = p.application) || void 0 === i ? void 0 : i.id, x]);
                let b = (0, n.jsx)(u.Tooltip, {
                        tooltipClassName: P.tooltip,
                        text: s,
                        shouldShow: C,
                        position: "left",
                        hideOnClick: !1,
                        children: e => (0, n.jsx)("div", {
                            ...e,
                            children: (0, n.jsx)(v.default, {
                                isDisabled: C,
                                currentValue: N.permission,
                                onChange: x ? e => {
                                    m.default.dismissToggleTooltip(null == p ? void 0 : p.id), d(e)
                                } : d
                            })
                        })
                    }),
                    G = (0, n.jsx)(u.Popout, {
                        renderPopout: () => (0, n.jsx)(u.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), m.default.dismissToggleTooltip(r.id, p)
                            },
                            children: (0, n.jsx)(E.default, {
                                className: P.tooltip,
                                content: j.default.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format({
                                    botName: A,
                                    link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
                                }),
                                onClick: () => {}
                            })
                        }),
                        position: "bottom",
                        align: "center",
                        animation: u.Popout.Animation.TRANSLATE,
                        onRequestClose: () => m.default.dismissToggleTooltip(r.id, p),
                        shouldShow: x,
                        closeOnScroll: !0,
                        children: () => b
                    });
                return (0, n.jsxs)("div", {
                    className: P.entryItem,
                    children: [(0, n.jsx)("div", {
                        className: P.entryName,
                        children: (0, n.jsx)(M.default, {
                            guild: r,
                            id: N.id,
                            type: N.type,
                            isLocked: C,
                            lockTooltipText: s
                        })
                    }), (0, n.jsxs)("div", {
                        className: P.entryActions,
                        children: [(0, n.jsx)(y, {
                            commandId: o,
                            isSentinel: O,
                            isDisabled: !_,
                            onRemove: c
                        }), G]
                    })]
                }, N.id)
            }

            function y(e) {
                let {
                    commandId: t,
                    isSentinel: l,
                    isDisabled: a,
                    onRemove: i
                } = e;
                return a ? null : null != t || !l ? (0, n.jsx)("div", {
                    className: P.removeActions,
                    children: (0, n.jsx)(u.Clickable, {
                        className: P.removeContainer,
                        "aria-label": j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
                        onClick: i,
                        children: (0, n.jsx)(_.default, {
                            width: 24,
                            height: 24,
                            className: P.removeIcon
                        })
                    })
                }) : null
            }
        },
        29106: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("917351"),
                s = l.n(i),
                r = l("316693"),
                o = l("446674"),
                d = l("77078"),
                u = l("524768"),
                c = l("389153"),
                f = l("26989"),
                I = l("305961"),
                T = l("957255"),
                m = l("555158"),
                N = l("68238"),
                E = l("482391"),
                S = l("683830"),
                p = l("464782"),
                h = l("636024"),
                _ = l("829319"),
                g = l("409645"),
                O = l("157453"),
                A = l("49111"),
                C = l("317041"),
                R = l("782340"),
                x = l("24113");

            function M(e) {
                let {
                    applicationId: t,
                    commandId: i,
                    guildId: p,
                    inModal: h,
                    editedTargetPermissions: M,
                    originalApplicationPermissions: j,
                    originalCommandPermissions: P,
                    selectedPermissionCount: b
                } = e, G = (0, o.useStateFromStores)([S.default], () => null == i ? null : S.default.getCommand(i), [i]), y = (null == G ? void 0 : G.defaultMemberPermissions) != null, D = (0, o.useStateFromStores)([I.default, f.default, T.default], () => {
                    let e = I.default.getGuild(p),
                        t = f.default.getSelfMember(p);
                    return null != e && null != t && (0, c.hasAccess)({
                        PermissionStore: T.default,
                        guild: e,
                        selfMember: t,
                        applicationLevelPermissions: j,
                        commandLevelPermissions: P,
                        defaultMemberPermissions: null == G ? void 0 : G.defaultMemberPermissions
                    })
                }, [p, G, j, P]), B = null != i ? i : t, [H, k] = a.useMemo(() => {
                    let e = {},
                        t = {};
                    for (let [l, n] of Object.entries(M)) n.type === u.ApplicationCommandPermissionType.CHANNEL ? e[l] = n : t[l] = n;
                    return [e, t]
                }, [M]), U = a.useCallback(e => {
                    let t = I.default.getGuild(p),
                        l = f.default.getSelfMember(p);
                    if (null == t || null == l) return !1;
                    if (null == i) return (0, c.hasAccess)({
                        PermissionStore: T.default,
                        guild: t,
                        selfMember: l,
                        applicationLevelPermissions: e
                    });
                    return (0, c.hasAccess)({
                        PermissionStore: T.default,
                        guild: t,
                        selfMember: l,
                        applicationLevelPermissions: j,
                        commandLevelPermissions: e,
                        defaultMemberPermissions: null == G ? void 0 : G.defaultMemberPermissions
                    })
                }, [p, G, i, j]), F = a.useCallback((e, t) => {
                    var l, n;
                    let a;
                    let i = null;
                    if (0 !== t.length) {
                        let e = t[0],
                            n = M[e];
                        if (n.type === u.ApplicationCommandPermissionType.USER) a = g.InvalidAction.REMOVE_SELF;
                        else {
                            let e = n.id;
                            if (a = g.InvalidAction.REMOVE_ROLE, e === p) i = "@everyone";
                            else {
                                let t = null === (l = I.default.getGuild(p)) || void 0 === l ? void 0 : l.getRole(e);
                                i = null != t ? t.name : "role"
                            }
                        }
                    } else {
                        let t = Object.values(e)[0],
                            l = t.id;
                        if (a = g.InvalidAction.DENY_ROLE, l === p) i = "@everyone";
                        else {
                            let e = null === (n = I.default.getGuild(p)) || void 0 === n ? void 0 : n.getRole(l);
                            i = null != e ? e.name : "role"
                        }
                    }(0, g.showApplicationCommandPermissionLockoutModal)(a, i)
                }, [p, M]), w = a.useCallback((e, l) => {
                    let n = {};
                    for (let [e, t] of Object.entries(M)) n[e] = {
                        id: t.id,
                        permission: t.permission,
                        type: t.type
                    };
                    n = Object.assign(n, e), l.length > 0 && (n = s.omit(n, l));
                    let a = U(n);
                    if (!a) {
                        F(e, l);
                        return
                    }
                    E.editPermissions(t, B, n)
                }, [t, M, B, U, F]), W = a.useCallback(() => {
                    let e = Object.keys(H);
                    return (0, d.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await l.el("609789").then(l.bind(l, "609789"));
                        return l => (0, n.jsx)(t, {
                            editPermissions: w,
                            guildId: p,
                            headerText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
                            hasMemberSearch: !1,
                            overwrittenKeys: e,
                            search: v,
                            searchPlaceholderText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_SEARCH_PLACEHOLDER,
                            selectedPermissionCount: b,
                            ...l
                        })
                    })
                }, [w, H, p, b]), V = a.useCallback(() => {
                    let e = Object.keys(k);
                    return (0, d.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await l.el("609789").then(l.bind(l, "609789"));
                        return l => (0, n.jsx)(t, {
                            editPermissions: w,
                            guildId: p,
                            hasMemberSearch: !0,
                            headerText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
                            overwrittenKeys: e,
                            search: L,
                            searchPlaceholderText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_SEARCH_PLACEHOLDER,
                            selectedPermissionCount: b,
                            ...l
                        })
                    })
                }, [w, p, k, b]), Y = a.useCallback(() => (0, d.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("317671").then(l.bind(l, "317671")), t = G.defaultMemberPermissions;
                    return r.default.equals(t, c.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && (t = A.Permissions.ADMINISTRATOR), l => (0, n.jsx)(e, {
                        ...l,
                        defaultMemberPermissions: t
                    })
                }), [G]), K = b - C.APPLICATION_COMMAND_PERMISSIONS_LIMIT, z = K >= 0, Z = [{
                    buttonClick: V,
                    buttonText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
                    noneSelectedText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_NO_ENTRIES,
                    overwrites: k,
                    title: null == i ? R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD : R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_HEADER
                }, {
                    buttonClick: W,
                    buttonText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
                    noneSelectedText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_NO_ENTRIES,
                    overwrites: H,
                    title: null == i ? R.default.Messages.CHANNELS : R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_HEADER
                }];
                return (0, n.jsxs)(a.Fragment, {
                    children: [K > 0 ? (0, n.jsx)(m.default, {
                        messageType: m.HelpMessageTypes.WARNING,
                        children: R.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_NOTICE_TEXT.format({
                            removeCount: K
                        })
                    }) : null, y ? (0, n.jsxs)("div", {
                        className: x.requiredPermissionsBanner,
                        children: [(0, n.jsx)(N.default, {
                            className: x.icon,
                            height: 18,
                            width: 18
                        }), (0, n.jsx)("span", {
                            className: x.message,
                            children: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_SECTION_DESCRIPTION.format()
                        }), (0, n.jsx)(d.Button, {
                            color: d.Button.Colors.PRIMARY,
                            onClick: Y,
                            size: d.Button.Sizes.SMALL,
                            className: x.addButton,
                            children: R.default.Messages.VIEW
                        })]
                    }) : null, Z.map((e, t) => {
                        let l = t => (0, n.jsx)(d.Button, {
                                ...t,
                                color: d.Button.Colors.PRIMARY,
                                disabled: z || !D,
                                onClick: e.buttonClick,
                                size: d.Button.Sizes.TINY,
                                className: x.addButton,
                                children: e.buttonText
                            }),
                            a = null;
                        return D ? z && (a = R.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX) : a = null != i ? R.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : R.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION, (0, n.jsx)(O.default, {
                            bar: (0, n.jsx)(d.Tooltip, {
                                tooltipClassName: x.tooltip,
                                text: a,
                                shouldShow: null != a,
                                children: e => l(e)
                            }),
                            inModal: h,
                            title: e.title,
                            children: (0, n.jsx)("div", {
                                className: h ? void 0 : x.listContainer,
                                children: (0, n.jsx)(_.default, {
                                    guildId: p,
                                    commandId: i,
                                    noneSelectedText: e.noneSelectedText,
                                    overwrites: e.overwrites,
                                    editPermissions: w,
                                    hasAccessToMutatePermissions: D
                                })
                            })
                        }, t)
                    })]
                })
            }

            function v(e) {
                let t = (0, p.useIntegrationPermissionChannelSearch)(e);
                return {
                    ...t,
                    results: t.results.map(e => ({
                        ...e,
                        type: u.ApplicationCommandPermissionType.CHANNEL
                    }))
                }
            }

            function L(e) {
                let t = (0, h.useIntegrationPermissionMemberSearch)(e);
                return {
                    ...t,
                    results: t.results.roles.map(e => ({
                        ...e,
                        type: u.ApplicationCommandPermissionType.ROLE
                    })).concat(t.results.members.map(e => ({
                        ...e,
                        type: u.ApplicationCommandPermissionType.USER
                    })))
                }
            }
        },
        429310: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("77078"),
                o = l("36694"),
                d = l("945330"),
                u = l("782340"),
                c = l("797962");
            let f = [!1, !0];

            function I(e) {
                let {
                    isDisabled: t,
                    currentValue: l,
                    onChange: i
                } = e, o = (0, r.useRadioGroup)({
                    orientation: "horizontal",
                    isDisabled: t
                }), d = a.useCallback(e => {
                    !t && e !== l && i(e)
                }, [t, l, i]);
                return (0, n.jsx)("div", {
                    className: s(c.group, {
                        [c.disabled]: t
                    }),
                    ...o,
                    children: f.map(e => (0, n.jsx)(T, {
                        isSelected: l === e,
                        itemValue: e,
                        onClick: () => d(e)
                    }, e.toString()))
                })
            }

            function T(e) {
                let {
                    isSelected: t,
                    itemValue: l,
                    onClick: a
                } = e, i = l ? c.allow : c.deny, f = l ? o.default : d.default, I = l ? u.default.Messages.PERMISSION_OVERRIDE_ALLOW : u.default.Messages.PERMISSION_OVERRIDE_DENY, T = (0, r.useRadioItem)({
                    isSelected: t,
                    label: I
                });
                return (0, n.jsx)(r.Clickable, {
                    className: s(c.item, i, {
                        [c.selected]: t
                    }),
                    onClick: a,
                    ...T,
                    children: (0, n.jsx)(f, {
                        width: 16,
                        height: 16
                    })
                })
            }
        },
        409645: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                InvalidAction: function() {
                    return a
                },
                showApplicationCommandPermissionLockoutModal: function() {
                    return d
                }
            });
            var n, a, i = l("404118"),
                s = l("701909"),
                r = l("49111"),
                o = l("782340");

            function d(e, t) {
                let l;
                e === a.REMOVE_SELF ? l = o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_SELF.format() : e === a.REMOVE_ROLE ? l = o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_REMOVE_ROLE.format({
                    name: t
                }) : e === a.DENY_ROLE && (l = o.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_SELF_DENY_MODAL_MESSAGE_DENY_ROLE.format({
                    name: t
                })), i.default.show({
                    title: o.default.Messages.SELF_DENY_PERMISSION_TITLE,
                    body: l,
                    cancelText: o.default.Messages.HELP_DESK,
                    onCancel() {
                        window.open(s.default.getArticleURL(r.HelpdeskArticles.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT))
                    }
                })
            }(n = a || (a = {}))[n.REMOVE_SELF = 0] = "REMOVE_SELF", n[n.REMOVE_ROLE = 1] = "REMOVE_ROLE", n[n.DENY_ROLE = 2] = "DENY_ROLE"
        },
        157453: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                i = l.n(a),
                s = l("77078"),
                r = l("272829");

            function o(e) {
                let {
                    bar: t,
                    children: l,
                    className: a,
                    inModal: o,
                    title: d
                } = e;
                return (0, n.jsxs)(s.Card, {
                    editable: !0,
                    className: i(r.card, a, {
                        [r.inModal]: o
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: i(r.cardHeader, {
                            [r.inModal]: o
                        }),
                        children: [(0, n.jsx)(s.Text, {
                            variant: "text-xs/semibold",
                            className: r.title,
                            children: d
                        }), (0, n.jsx)("div", {
                            children: t
                        })]
                    }), o ? (0, n.jsx)(s.FormDivider, {}) : null, l]
                })
            }
        },
        990241: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return N
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("446674"),
                s = l("77078"),
                r = l("333231"),
                o = l("83910"),
                d = l("482391"),
                u = l("683830"),
                c = l("859728"),
                f = l("167356"),
                I = l("29106"),
                T = l("782340"),
                m = l("640624");

            function N(e) {
                let {
                    application: t,
                    canNavigate: l,
                    guildId: c
                } = e, I = (0, i.useStateFromStores)([u.default], () => u.default.isUnavailable());
                return (a.useEffect(() => (d.initIntegrationPermissions(t.id), d.clearIntegrationPermissions), [t.id]), a.useEffect(() => {
                    d.getApplicationCommandPermissions(t.id, c, t.id), d.getApplicationCommands(c, t.id)
                }, [t.id, c]), I) ? null : (0, n.jsxs)(a.Fragment, {
                    children: [(0, n.jsx)(r.default, {
                        icon: (0, n.jsx)(o.default, {}),
                        title: T.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS
                    }), (0, n.jsx)(s.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: T.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_DESCRIPTION
                    }), (0, n.jsx)(E, {
                        guildId: c,
                        applicationId: t.id
                    }), (0, n.jsx)(f.default, {
                        applicationIcon: t.icon,
                        applicationName: t.name,
                        canNavigate: l,
                        guildId: c
                    })]
                })
            }

            function E(e) {
                let {
                    applicationId: t,
                    guildId: l
                } = e, {
                    originalApplicationPermissions: a,
                    editedTargetPermissions: i,
                    selectedPermissionCount: s
                } = (0, c.default)(l, t);
                return (0, n.jsx)("div", {
                    className: m.applicationPermissions,
                    children: (0, n.jsx)(I.default, {
                        applicationId: t,
                        guildId: l,
                        inModal: !1,
                        editedTargetPermissions: i,
                        originalApplicationPermissions: a,
                        selectedPermissionCount: s
                    })
                })
            }
        },
        758085: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return H
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("627445"),
                o = l.n(r),
                d = l("917351"),
                u = l.n(d),
                c = l("65597"),
                f = l("669491"),
                I = l("77078"),
                T = l("970728"),
                m = l("133403"),
                N = l("145079"),
                E = l("534291"),
                S = l("87657"),
                p = l("841098"),
                h = l("679653"),
                _ = l("610174"),
                g = l("712125"),
                O = l("54346"),
                A = l("27618"),
                C = l("697218"),
                R = l("91551"),
                x = l("941886"),
                M = l("145131"),
                v = l("423487"),
                L = l("100835"),
                j = l("49111"),
                P = l("782340"),
                b = l("322677"),
                G = l("405879"),
                y = l("926622");
            let D = {
                INVITER: 3,
                INVITE_CODE: 3,
                USES: 1,
                EXPIRES: 2
            };

            function B(e) {
                var t, l;
                let {
                    invite: a,
                    showChannel: i = !1,
                    inviteDisabled: r = !1,
                    hide: o = !1
                } = e, d = a.uses;
                return a.maxUses > 0 && (d = "".concat(a.uses, "/").concat(a.maxUses)), (0, n.jsxs)(M.default, {
                    className: s(b.inviteSettingsInviteRow, G.card, {
                        [b.inviteDisabledRow]: r
                    }),
                    children: [(0, n.jsx)(M.default, {
                        grow: D.INVITER,
                        basis: 0,
                        align: M.default.Align.CENTER,
                        className: s(b.text),
                        children: (0, n.jsxs)(M.default.Child, {
                            children: [null == (t = a.inviter) ? null : (0, n.jsxs)("div", {
                                className: b.user,
                                children: [(0, n.jsx)(S.default, {
                                    user: t,
                                    size: I.AvatarSizes.SIZE_20,
                                    className: b.avatar
                                }), (0, n.jsx)(N.default, {
                                    className: b.username,
                                    discriminatorClass: b.discriminator,
                                    user: t
                                })]
                            }), (l = a.channel, i ? (0, n.jsx)(I.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: (0, h.computeChannelName)(l, C.default, A.default, !0)
                            }) : null)]
                        })
                    }), (0, n.jsx)(M.default, {
                        grow: D.INVITE_CODE,
                        shrink: 1,
                        basis: 0,
                        align: M.default.Align.CENTER,
                        className: b.text,
                        children: (0, n.jsx)(I.Text, {
                            className: b.inviteCode,
                            variant: "text-sm/normal",
                            children: o ? "..." : a.code
                        })
                    }), (0, n.jsx)(M.default, {
                        grow: D.USES,
                        basis: 0,
                        justify: M.default.Justify.END,
                        align: M.default.Align.CENTER,
                        className: s(b.text),
                        children: (0, n.jsx)(I.Text, {
                            className: b.uses,
                            variant: "text-sm/normal",
                            children: d
                        })
                    }), (0, n.jsx)(M.default, {
                        grow: D.EXPIRES,
                        basis: 0,
                        align: M.default.Align.CENTER,
                        justify: M.default.Justify.END,
                        className: s(b.text, b.countdownColumn),
                        children: (0, n.jsx)(I.Text, {
                            className: b.countdown,
                            variant: "text-sm/normal",
                            children: (0, n.jsx)(R.default, {
                                deadline: a.getExpiresAt()
                            })
                        })
                    }), (0, n.jsx)(m.default, {
                        className: b.revokeInvite,
                        onClick: () => {
                            T.default.revokeInvite(a)
                        }
                    })]
                })
            }

            function H(e) {
                let {
                    invites: t,
                    guild: i,
                    hide: s,
                    channel: r = null,
                    showChannel: d = !1,
                    loading: T = !1,
                    canCreateInvites: m = !1
                } = e;
                o(null != i, "guild is required");
                let N = (0, L.useInvitesDisabledPermission)(i),
                    {
                        enableInvitesDisabled: S
                    } = (0, L.useInvitesDisabledExperiment)(i),
                    {
                        showAlertMode: h
                    } = (0, _.useGuildAlertModeEnabled)(i.id),
                    A = (0, c.default)([O.default], () => O.default.getGuildIncident(i.id)),
                    C = i.hasFeature(j.GuildFeatures.INVITES_DISABLED) || h && (null == A ? void 0 : A.invitesDisabledUntil) != null && new Date(A.invitesDisabledUntil) > new Date,
                    [R, G] = a.useState(!1);
                a.useEffect(() => {
                    N && L.InvitesDisabledExperiment.trackExposure({
                        guildId: i.id,
                        location: "5c23b0_1"
                    })
                }, [N, S, i.id]);
                let H = (0, p.default)(),
                    k = a.useMemo(() => {
                        var e;
                        return null == t || T ? [] : u(t).sortBy(t => {
                            var l;
                            return (null !== (e = null === (l = t.inviter) || void 0 === l ? void 0 : l.username) && void 0 !== e ? e : "").toLowerCase()
                        }).value()
                    }, [t, T]),
                    U = () => {
                        (0, I.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("310688").then(l.bind(l, "310688"));
                            return t => (0, n.jsx)(e, {
                                ...t,
                                channel: r,
                                guild: i,
                                source: j.InstantInviteSources.SETTINGS_INVITE
                            })
                        })
                    },
                    F = async e => {
                        if (!R) {
                            G(!0);
                            try {
                                await (0, L.setInvitesDisabled)(i, e)
                            } catch (e) {} finally {
                                G(!1)
                            }
                        }
                    }, w = () => {
                        if (h) {
                            let e = {
                                source: g.GuildIncidentActionSources.GUILD_SETTINGS
                            };
                            (0, I.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await l.el("186638").then(l.bind(l, "186638"));
                                return l => (0, n.jsx)(t, {
                                    ...l,
                                    guildId: i.id,
                                    analyticsData: e
                                })
                            })
                        } else C ? F(!1) : (0, I.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("581517").then(l.bind(l, "581517"));
                            return function(t) {
                                return (0, n.jsx)(e, {
                                    ...t,
                                    onConfirm: () => F(!0)
                                })
                            }
                        })
                    };
                return (0, n.jsx)(E.ListContentScroller, {
                    sections: [Math.max(1, k.length)],
                    renderSection: () => {
                        let e;
                        return e = 0 !== k.length || T ? (0, n.jsxs)(M.default, {
                            children: [(0, n.jsx)(M.default.Child, {
                                grow: D.INVITER,
                                basis: 0,
                                className: y.marginReset,
                                children: (0, n.jsx)(I.FormTitle, {
                                    children: P.default.Messages.INSTANT_INVITE_INVITER
                                })
                            }), (0, n.jsx)(M.default.Child, {
                                basis: 0,
                                grow: D.INVITE_CODE,
                                className: y.marginReset,
                                children: (0, n.jsx)(I.FormTitle, {
                                    children: P.default.Messages.INSTANT_INVITE_INVITE_CODE
                                })
                            }), (0, n.jsx)(M.default.Child, {
                                grow: D.USES,
                                basis: 0,
                                className: b.textAlignRight,
                                children: (0, n.jsx)(I.FormTitle, {
                                    children: P.default.Messages.INSTANT_INVITE_USES
                                })
                            }), (0, n.jsx)(M.default.Child, {
                                grow: D.EXPIRES,
                                basis: 0,
                                className: b.textAlignRight,
                                children: (0, n.jsx)(I.FormTitle, {
                                    children: P.default.Messages.INSTANT_INVITE_EXPIRES
                                })
                            })]
                        }) : (0, n.jsxs)(x.default, {
                            theme: H,
                            children: [(0, n.jsx)(x.EmptyStateImage, {
                                darkSrc: l("553021"),
                                lightSrc: l("752499"),
                                width: 256,
                                height: 130
                            }), (0, n.jsx)(x.EmptyStateText, {
                                note: P.default.Messages.NO_INVITES_BODY,
                                children: P.default.Messages.NO_INVITES_LABEL
                            })]
                        }), (0, n.jsx)(I.FormSection, {
                            className: b.headerSection,
                            children: (0, n.jsxs)(I.HeadingLevel, {
                                component: (0, n.jsx)(I.FormTitle, {
                                    tag: I.FormTitleTags.H1,
                                    children: P.default.Messages.INVITES
                                }),
                                children: [(0, n.jsx)(I.FormText, {
                                    className: y.marginBottom20,
                                    type: I.FormTextTypes.DESCRIPTION,
                                    children: m ? P.default.Messages.SETTINGS_INVITE_TIP.format({
                                        onCreateInvite: U
                                    }) : P.default.Messages.SETTINGS_INVITE_TIP_WITHOUT_CREATE
                                }), (S || h || C) && (0, n.jsxs)("div", {
                                    className: b.inviteDisabledContainer,
                                    children: [(0, n.jsx)(I.Button, {
                                        size: I.Button.Sizes.SMALL,
                                        color: C ? I.Button.Colors.BRAND : I.Button.Colors.RED,
                                        disabled: !N,
                                        submitting: R,
                                        onClick: w,
                                        children: C ? P.default.Messages.ENABLE_INVITES : P.default.Messages.DISABLE_INVITES
                                    }), C && (0, n.jsxs)("div", {
                                        className: b.inviteDisabledTip,
                                        children: [(0, n.jsx)(v.default, {
                                            color: f.default.unsafe_rawColors.YELLOW_300.css
                                        }), (0, n.jsx)(I.Text, {
                                            variant: "text-sm/normal",
                                            children: P.default.Messages.INVITES_DISABLED_TIP
                                        })]
                                    })]
                                }), (0, n.jsx)(I.FormDivider, {
                                    className: b.headerDivider
                                }), e]
                            })
                        }, "header")
                    },
                    renderRow: e => {
                        let {
                            section: t,
                            row: l
                        } = e;
                        if (0 === k.length && 0 === l && T) return (0, n.jsx)(I.Spinner, {
                            className: y.marginTop20,
                            type: I.Spinner.Type.SPINNING_CIRCLE
                        }, "spinner");
                        if (t > 0) return null;
                        let a = k[l];
                        return null == a ? null : (0, n.jsx)(B, {
                            hide: s,
                            invite: a,
                            showChannel: d,
                            inviteDisabled: C
                        }, a.code)
                    },
                    rowHeight: (e, t) => e > 0 ? 0 : 0 === k.length && 0 === t && T ? 62 : null != k[t] ? 62 : 0,
                    sectionHeight: () => 0 !== k.length || T ? 120 : 344
                })
            }
        },
        608684: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ImageUploaderIcon: function() {
                    return m
                },
                default: function() {
                    return E
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("627445"),
                o = l.n(r),
                d = l("77078"),
                u = l("159885"),
                c = l("694187"),
                f = l("49111"),
                I = l("782340"),
                T = l("911686");

            function m(e) {
                let {
                    className: t,
                    icon: l = null
                } = e;
                return (0, n.jsx)("div", {
                    className: s(T.imageUploaderIcon, t),
                    children: l
                })
            }
            class N extends a.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, l, a, i;
                    let {
                        image: r,
                        hint: o,
                        name: N,
                        makeURL: E,
                        disabled: S,
                        onChange: p,
                        showIcon: h,
                        showIconDisabled: _,
                        className: g,
                        imageClassName: O,
                        iconClassName: A,
                        iconWrapperClassName: C,
                        icon: R,
                        hideSize: x,
                        imageStyle: M,
                        showRemoveButton: v,
                        maxFileSizeBytes: L,
                        onFileSizeError: j,
                        onOpenImageSelectModal: P,
                        "aria-label": b
                    } = this.props;
                    if (null != (t = null != r && /^data:/.test(r) ? r : E(r)) ? l = 'url("'.concat(t, '")') : null != N && (a = (0, n.jsx)("div", {
                            className: T.imageUploaderAcronym,
                            children: (0, u.getAcronym)(N)
                        })), S) return (0, n.jsx)("div", {
                        className: s(T.imageUploader, T.disabled, g),
                        children: (0, n.jsxs)("div", {
                            className: s(T.imageUploaderInner, O),
                            style: {
                                ...M,
                                backgroundImage: l
                            },
                            children: [a, _ && (0, n.jsx)("div", {
                                className: s(T.imageUploaderIcon, T.imageUploaderIconDisabled, A),
                                children: R
                            })]
                        })
                    });
                    null != r ? i = (0, n.jsx)(d.Anchor, {
                        className: T.removeButton,
                        onClick: this.handleRemove,
                        children: I.default.Messages.REMOVE
                    }) : !x && (i = (0, n.jsx)("small", {
                        className: T.sizeInfo,
                        children: I.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let G = null !== (e = null != b ? b : o) && void 0 !== e ? e : I.default.Messages.CHANGE_AVATAR;
                    return (0, n.jsxs)("div", {
                        className: s(T.imageUploader, g),
                        children: [(0, n.jsx)(d.FocusRing, {
                            within: !0,
                            children: (0, n.jsxs)("div", {
                                className: h ? s(T.imageUploaderIconWrapper, C) : void 0,
                                children: [(0, n.jsxs)("div", {
                                    className: s(T.imageUploaderInner, O),
                                    style: {
                                        ...M,
                                        backgroundImage: l
                                    },
                                    children: [(0, n.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: a
                                    }), null != P ? (0, n.jsx)(d.Clickable, {
                                        className: T.imageUploaderFileInput,
                                        "aria-label": G,
                                        onClick: P
                                    }) : (0, n.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: p,
                                        className: T.imageUploaderFileInput,
                                        "aria-label": G,
                                        tabIndex: 0,
                                        maxFileSizeBytes: L,
                                        onFileSizeError: j
                                    })]
                                }), null != o && (0, n.jsx)("div", {
                                    className: T.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), h && (0, n.jsx)(m, {
                                    className: A,
                                    icon: R
                                })]
                            })
                        }), v ? i : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = a.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            N.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var E = N
        },
        674916: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                i = l.n(a),
                s = l("77078"),
                r = l("145131"),
                o = l("8161"),
                d = l("713573"),
                u = l("782340"),
                c = l("140960");

            function f(e) {
                let {
                    name: t,
                    description: l,
                    icon: a,
                    imageSrc: f,
                    iconBackgroundColor: I,
                    iconClassName: T,
                    details: m,
                    detailsClassName: N,
                    isHeader: E,
                    isPremium: S
                } = e;
                return (0, n.jsxs)(r.default, {
                    justify: r.default.Justify.CENTER,
                    className: c.wrapper,
                    children: [null != a || null != f ? (0, n.jsx)(r.default.Child, {
                        shrink: 0,
                        grow: 0,
                        children: function(e, t, l, a) {
                            if (null != t) return (0, n.jsx)("img", {
                                alt: "",
                                src: t,
                                className: i(c.iconWrapper, a)
                            });
                            let s = null;
                            return null != e && (s = "string" == typeof e ? (0, n.jsx)("img", {
                                alt: "",
                                src: e,
                                className: i(c.icon, a)
                            }) : (0, n.jsx)(e, {
                                className: i(c.icon, a)
                            })), (0, n.jsx)(r.default, {
                                align: r.default.Align.CENTER,
                                justify: r.default.Justify.CENTER,
                                style: {
                                    backgroundColor: l
                                },
                                className: c.iconWrapper,
                                children: s
                            })
                        }(a, f, I, T)
                    }) : null, function(e) {
                        let {
                            name: t,
                            description: l,
                            details: a,
                            detailsClassName: f,
                            isHeader: I,
                            isPremium: T
                        } = e, m = null == a ? void 0 : a.map((e, t) => {
                            let {
                                icon: l,
                                text: a
                            } = e;
                            return (0, n.jsxs)("div", {
                                className: i(c.detailsWrapper, I ? c.headerDetailsWrapper : null),
                                children: [null != l ? (0, n.jsx)(l, {
                                    width: 16,
                                    height: 16,
                                    className: c.detailsIcon
                                }) : null, (0, n.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: f,
                                    children: a
                                })]
                            }, t)
                        });
                        return (0, n.jsxs)(r.default, {
                            direction: r.default.Direction.VERTICAL,
                            children: [(0, n.jsxs)(d.default, {
                                size: I ? d.default.Sizes.SIZE_24 : d.default.Sizes.SIZE_16,
                                className: I ? c.header : c.secondaryHeader,
                                children: [t, T && (0, n.jsx)(s.Tooltip, {
                                    text: u.default.Messages.APPLICATION_SUBSCRIPTION_PREMIUM,
                                    children: e => (0, n.jsx)(o.default, {
                                        ...e,
                                        width: 16,
                                        height: 16,
                                        className: c.premiumIcon
                                    })
                                })]
                            }), null != l ? (0, n.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: l
                            }) : null, (0, n.jsx)(r.default, {
                                direction: r.default.Direction.HORIZONTAL,
                                align: r.default.Align.CENTER,
                                wrap: r.default.Wrap.WRAP,
                                children: m
                            })]
                        })
                    }({
                        name: t,
                        description: l,
                        details: m,
                        detailsClassName: N,
                        isHeader: E,
                        isPremium: S
                    })]
                })
            }
        },
        333231: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("77078"),
                o = l("707828");

            function d(e) {
                let {
                    children: t,
                    icon: l,
                    title: i
                } = e;
                return (0, n.jsxs)("header", {
                    className: o.header,
                    children: [(0, n.jsxs)("div", {
                        className: o.name,
                        children: [a.cloneElement(l, {
                            className: s(l.props.className, o.icon),
                            height: 24,
                            width: 24
                        }), (0, n.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            className: o.title,
                            children: i
                        })]
                    }), t]
                })
            }
        },
        792181: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return j
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("446674"),
                s = l("77078"),
                r = l("404118"),
                o = l("650509"),
                d = l("671625"),
                u = l("592407"),
                c = l("990241"),
                f = l("485422"),
                I = l("957255"),
                T = l("145131"),
                m = l("841811"),
                N = l("781896"),
                E = l("71216"),
                S = l("8161"),
                p = l("741919"),
                h = l("315102"),
                _ = l("299039"),
                g = l("158998"),
                O = l("674916"),
                A = l("333231"),
                C = l("551527"),
                R = l("421475"),
                x = l("49111"),
                M = l("782340"),
                v = l("47902");

            function L(e) {
                let {
                    application: t,
                    guild: l,
                    integration: a,
                    ...i
                } = e;
                return (0, n.jsx)(s.ConfirmModal, {
                    ...i,
                    header: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({
                        applicationName: t.name
                    }),
                    confirmText: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE,
                    cancelText: M.default.Messages.CANCEL,
                    onConfirm: () => {
                        u.default.disableIntegration(l.id, a.id).catch(() => {
                            r.default.show({
                                title: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
                                body: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR
                            })
                        })
                    },
                    children: (0, n.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({
                            applicationName: t.name
                        })
                    })
                })
            }

            function j(e) {
                var t;
                let {
                    guild: l,
                    applicationIntegration: r,
                    selectableWebhookChannels: u,
                    editedWebhook: j,
                    errors: P,
                    canNavigate: b
                } = e, {
                    application: G,
                    integration: y,
                    webhooks: D
                } = r, [B, H] = (0, i.useStateFromStoresArray)([I.default], () => [I.default.can(x.Permissions.MANAGE_ROLES, l), null == G.bot || I.default.canManageUser(x.Permissions.MANAGE_GUILD, G.bot.id, l)], [G.bot, l]), k = (0, i.useStateFromStores)([I.default], () => I.default.can(x.Permissions.MANAGE_WEBHOOKS, l), [l]), U = a.useCallback(() => {
                    b() && (0, s.openModal)(e => (0, n.jsx)(L, {
                        guild: l,
                        application: G,
                        integration: y,
                        ...e
                    }))
                }, [G, b, l, y]), F = a.useMemo(() => {
                    let e = [{
                        icon: m.default,
                        text: M.default.Messages.INTEGRATION_ADDED_DATE.format({
                            timestamp: _.default.extractTimestamp(y.id)
                        })
                    }];
                    return null != y.user && e.push({
                        icon: N.default,
                        text: M.default.Messages.INTEGRATION_ADDED_USER.format({
                            user: g.default.getUserTag(y.user)
                        })
                    }), e
                }, [y.id, y.user]), w = a.useMemo(() => null != G.bot ? (0, n.jsx)(C.default, {
                    guild: l,
                    applicationIntegration: r
                }) : (0, n.jsx)(s.Card, {
                    className: v.emptyCard,
                    editable: !0,
                    children: (0, n.jsx)(s.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: M.default.Messages.INTEGRATIONS_APPLICATION_NO_BOT
                    })
                }), [G.bot, r, l]), {
                    applicationSubscriptionListingsShown: W
                } = (0, o.default)({
                    applicationId: G.id,
                    groupListingId: G.primarySkuId,
                    guildId: l.id
                });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(O.default, {
                        name: G.name,
                        imageSrc: null !== (t = G.getIconURL(32)) && void 0 !== t ? t : h.DEFAULT_AVATARS[0],
                        details: F,
                        isHeader: !0
                    }), (null == G ? void 0 : G.description) != null ? (0, n.jsx)(f.default, {
                        userBio: G.description,
                        className: v.headerDescription
                    }) : null, B ? (0, n.jsx)(c.default, {
                        application: G,
                        canNavigate: b,
                        guildId: l.id
                    }) : null, (0, n.jsx)(s.FormDivider, {
                        className: v.headerDivider
                    }), null != G.bot ? (0, n.jsxs)("div", {
                        className: v.section,
                        children: [(0, n.jsx)(A.default, {
                            icon: (0, n.jsx)(E.default, {}),
                            title: M.default.Messages.INTEGRATIONS_APPLICATION_BOT
                        }), w]
                    }) : null, W && null != G.primarySkuId && (0, n.jsxs)("div", {
                        className: v.section,
                        children: [(0, n.jsx)(A.default, {
                            icon: (0, n.jsx)(S.default, {}),
                            title: M.default.Messages.INTEGRATIONS_APPLICATION_SUBSCRIPTION_TIERS
                        }), (0, n.jsx)(d.default, {
                            applicationId: G.id,
                            applicationPrimarySkuId: G.primarySkuId,
                            guildId: l.id
                        })]
                    }), (0, n.jsxs)("div", {
                        className: v.section,
                        children: [(0, n.jsx)(A.default, {
                            icon: (0, n.jsx)(p.default, {}),
                            title: M.default.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS
                        }), D.length > 0 ? (0, n.jsx)(R.default, {
                            webhooks: D,
                            editedWebhook: j,
                            selectableWebhookChannels: u,
                            errors: P,
                            canNavigate: b
                        }) : (0, n.jsx)(s.Card, {
                            className: v.emptyCard,
                            editable: !0,
                            children: (0, n.jsx)(s.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: k ? M.default.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS : M.default.Messages.INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS
                            })
                        })]
                    }), (0, n.jsx)(s.FormDivider, {
                        className: v.headerDivider
                    }), (0, n.jsxs)(T.default, {
                        className: v.section,
                        justify: T.default.Justify.BETWEEN,
                        align: T.default.Align.CENTER,
                        children: [(0, n.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: H ? M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY : M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS
                        }), (0, n.jsx)(T.default.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(s.Button, {
                                size: s.Button.Sizes.SMALL,
                                color: s.Button.Colors.RED,
                                look: s.Button.Looks.FILLED,
                                disabled: !H,
                                onClick: U,
                                children: M.default.Messages.INTEGRATIONS_APPLICATION_REMOVE
                            })
                        })]
                    })]
                })
            }
        },
        827691: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("77078"),
                s = l("713841"),
                r = l("376556"),
                o = l("592407"),
                d = l("674916"),
                u = l("226397"),
                c = l("787932");

            function f(e) {
                let {
                    integrations: t,
                    editedIntegration: l,
                    guild: f,
                    platformType: I,
                    labelText: T,
                    descriptionText: m,
                    helpText: N,
                    canNavigate: E
                } = e, S = r.default.get(I), p = a.useCallback(async e => {
                    E() && (await o.default.enableIntegration(f.id, e.type, e.id), s.default.startEditingIntegration(e.id))
                }, [E, f.id]), h = a.useCallback(e => {
                    if (E()) e.id === (null == l ? void 0 : l.id) && s.default.stopEditingIntegration(), o.default.disableIntegration(f.id, e.id)
                }, [E, l, f.id]), _ = a.useCallback(e => {
                    if (E()) e === (null == l ? void 0 : l.id) ? s.default.stopEditingIntegration() : s.default.startEditingIntegration(e)
                }, [E, l]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(d.default, {
                        name: T,
                        icon: null == S ? void 0 : S.icon.whiteSVG,
                        iconBackgroundColor: null == S ? void 0 : S.color,
                        iconClassName: c.platformIcon,
                        description: m,
                        isHeader: !0
                    }), (0, n.jsx)(i.FormDivider, {
                        className: c.headerDivider
                    }), t.map(e => (0, n.jsx)(u.default, {
                        integration: e,
                        editedIntegration: l,
                        guild: f,
                        isExpanded: (null == l ? void 0 : l.id) === e.id,
                        onEnable: p,
                        onDisable: h,
                        onToggleExpand: () => _(e.id)
                    }, e.id)), (0, n.jsx)(i.Text, {
                        className: c.helpText,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: N
                    })]
                })
            }
        },
        943374: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("819855"),
                i = l("77078"),
                s = l("841098"),
                r = l("145131"),
                o = l("701909"),
                d = l("421475"),
                u = l("49111"),
                c = l("782340"),
                f = l("866516"),
                I = l("277482"),
                T = l("57213");

            function m(e) {
                let {
                    followedChannelWebhooks: t,
                    editedWebhook: l,
                    selectableWebhookChannels: m,
                    errors: N,
                    canNavigate: E
                } = e, S = (0, s.default)();
                return (0, n.jsxs)(i.FormSection, {
                    children: [(0, n.jsx)(i.FormText, {
                        type: i.FormTextTypes.DESCRIPTION,
                        children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_DESCRIPTION.format({
                            helpdeskArticle: o.default.getArticleURL(u.HelpdeskArticles.CHANNEL_FOLLOWING)
                        })
                    }), (0, n.jsx)(i.FormDivider, {
                        className: f.headerDivider
                    }), t.length > 0 ? (0, n.jsx)(d.default, {
                        webhooks: t,
                        editedWebhook: l,
                        selectableWebhookChannels: m,
                        errors: N,
                        canNavigate: E
                    }) : function(e, t) {
                        let l = (0, a.isThemeDark)(e) ? I : T;
                        return (0, n.jsxs)(r.default, {
                            direction: r.default.Direction.VERTICAL,
                            align: r.default.Align.CENTER,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: l,
                                className: f.emptyStateImage
                            }), (0, n.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY
                            }), (0, n.jsx)(i.Button, {
                                className: f.emptyStateButton,
                                onClick: t,
                                children: c.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON
                            })]
                        })
                    }(S, () => open(o.default.getArticleURL(u.HelpdeskArticles.CHANNEL_FOLLOWING)))]
                })
            }
        },
        310005: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return H
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("446674"),
                o = l("819855"),
                d = l("77078"),
                u = l("54239"),
                c = l("841098"),
                f = l("376556"),
                I = l("412707"),
                T = l("838093"),
                m = l("926994"),
                N = l("47319"),
                E = l("957255"),
                S = l("145131"),
                p = l("810567"),
                h = l("841811"),
                _ = l("295810"),
                g = l("741919"),
                O = l("599110"),
                A = l("315102"),
                C = l("701909"),
                R = l("299039"),
                x = l("158998"),
                M = l("700104"),
                v = l("15639"),
                L = l("49111"),
                j = l("782340"),
                P = l("816189"),
                b = l("390494"),
                G = l("449638"),
                y = l("117809");

            function D(e, t) {
                return t.toLowerCase().includes(e)
            }

            function B(e) {
                let {
                    query: t,
                    setQuery: l
                } = e, i = a.useCallback(e => {
                    l(e)
                }, [l]);
                return (0, n.jsx)("div", {
                    className: P.searchContainer,
                    children: (0, n.jsx)(p.default, {
                        size: p.default.Sizes.MEDIUM,
                        query: t,
                        onChange: i,
                        onClear: () => l(""),
                        placeholder: j.default.Messages.INTEGRATIONS_SEARCH,
                        "aria-label": j.default.Messages.INTEGRATIONS_SEARCH
                    })
                })
            }

            function H(e) {
                let {
                    guild: t,
                    channel: l,
                    applicationIntegrations: i,
                    builtInIntegrations: p,
                    customWebhooks: H,
                    followedChannelWebhooks: k,
                    isLoading: U,
                    canCreateWebhook: F,
                    onManageBuiltIn: w,
                    onManageCustomWebhooks: W,
                    onManageFollowedChannels: V,
                    onManageApplication: Y
                } = e, K = (0, c.default)(), [z, Z] = a.useState(""), {
                    isFetchingConnections: q,
                    accounts: J
                } = (0, r.useStateFromStoresObject)([N.default], () => ({
                    isFetchingConnections: N.default.isFetching(),
                    accounts: N.default.getAccounts()
                }), []), {
                    canManageWebhooks: X,
                    canManageGuild: Q
                } = (0, r.useStateFromStoresObject)([E.default], () => ({
                    canManageWebhooks: null != t && E.default.can(L.Permissions.MANAGE_WEBHOOKS, t) || null != l && E.default.can(L.Permissions.MANAGE_WEBHOOKS, l),
                    canManageGuild: null != t && null == l && E.default.can(L.Permissions.MANAGE_GUILD, t)
                }), [t, l]), {
                    availableTwitchIntegrations: $,
                    availableYoutubeIntegrations: ee,
                    guildTwitchIntegrations: et,
                    guildYoutubeIntegrations: el
                } = a.useMemo(() => {
                    var e, t, l, n, a, i, s, r;
                    return {
                        availableTwitchIntegrations: null !== (a = null === (e = p.twitch) || void 0 === e ? void 0 : e.length) && void 0 !== a ? a : 0,
                        availableYoutubeIntegrations: null !== (i = null === (t = p.youtube) || void 0 === t ? void 0 : t.length) && void 0 !== i ? i : 0,
                        guildTwitchIntegrations: null !== (s = null === (l = p.twitch) || void 0 === l ? void 0 : l.filter(e => e.enabled).length) && void 0 !== s ? s : 0,
                        guildYoutubeIntegrations: null !== (r = null === (n = p.youtube) || void 0 === n ? void 0 : n.filter(e => e.enabled).length) && void 0 !== r ? r : 0
                    }
                }, [p.twitch, p.youtube]), {
                    showTwitchCard: en,
                    showYoutubeCard: ea
                } = a.useMemo(() => {
                    if (q || !Q) return {
                        showTwitchCard: !1,
                        showYoutubeCard: !1
                    };
                    let e = null == t ? void 0 : t.hasFeature(L.GuildFeatures.COMMUNITY),
                        l = J.filter(e => e.type === L.PlatformTypes.TWITCH).length > 0,
                        n = J.filter(e => e.type === L.PlatformTypes.YOUTUBE).length > 0;
                    return {
                        showTwitchCard: $ > 0 || !l && e,
                        showYoutubeCard: ee > 0 || !n && e
                    }
                }, [q, Q, t, J, $, ee]), ei = a.useMemo(() => Object.values(i).filter(e => {
                    var t, l;
                    let {
                        application: n
                    } = e;
                    return t = n, !!("" === (l = (l = z).trim().toLowerCase()) || t.id === l || D(l, t.name) || null != t.bot && D(l, t.bot.username)) || !1
                }), [i, z]), es = Object.values(i).length, er = (0, r.useStateFromStores)([v.default], () => {
                    if (null != t) return ei.find(e => v.default.canShowOverviewTooltip(t.id, e.integration.id))
                }, [ei, t]), eo = a.useMemo(() => void 0 !== er ? [er, ...ei.filter(e => e.integration.id !== er.integration.id)] : ei, [ei, er]), ed = (0, d.useModalsStore)(d.hasAnyModalOpenSelector), [eu, ec] = a.useState(!1), ef = a.useRef(0), eI = () => {
                    ec(!0), clearTimeout(ef.current), ef.current = setTimeout(() => {
                        ec(!1)
                    }, 200)
                };
                a.useEffect(() => (window.addEventListener("scroll", eI, !0), () => window.removeEventListener("scroll", eI)));
                let eT = eo.map(e => {
                        let l = !ed && e.integration.id === (null == er ? void 0 : er.integration.id);
                        return function(e, t, l, a, i) {
                            var s;
                            let {
                                application: r,
                                integration: o
                            } = t, d = [];
                            return null != o.user ? d.push({
                                icon: h.default,
                                text: j.default.Messages.INTEGRATION_ADDED_USER_DATE.format({
                                    timestamp: R.default.extractTimestamp(o.id),
                                    user: x.default.getUserTag(o.user)
                                })
                            }) : d.push({
                                icon: h.default,
                                text: j.default.Messages.INTEGRATION_ADDED_DATE.format({
                                    timestamp: R.default.extractTimestamp(o.id)
                                })
                            }), (0, n.jsx)(M.default, {
                                name: r.name,
                                imageSrc: null !== (s = r.getIconURL(48)) && void 0 !== s ? s : A.DEFAULT_AVATARS[0],
                                integration: t,
                                buttonText: j.default.Messages.INTEGRATIONS_APPLICATION_BUTTON,
                                hasNextSection: !0,
                                onButtonClick: () => {
                                    l(r.id), O.default.track(L.AnalyticEvents.APP_MANAGE_CTA_CLICKED, {
                                        application_id: r.id,
                                        guild_id: null == e ? void 0 : e.id,
                                        is_admin: null != e ? E.default.can(L.Permissions.ADMINISTRATOR, e) : void 0
                                    })
                                },
                                details: d,
                                guildId: null == e ? void 0 : e.id,
                                isScrolling: a,
                                canShowMigrationTooltip: i
                            }, "integration-".concat(o.id))
                        }(t, e, Y, eu, l)
                    }),
                    em = (0, n.jsx)("div", {
                        className: P.footerImage
                    });
                0 === eT.length && Q && (eT = function(e, t, l) {
                    let a = (0, o.isThemeDark)(e) ? G : y,
                        i = (0, n.jsxs)(S.default, {
                            direction: S.default.Direction.VERTICAL,
                            align: S.default.Align.CENTER,
                            className: P.emptyStateWrapper,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: a,
                                className: P.emptyStateSearchImage
                            }), (0, n.jsx)(d.Card, {
                                editable: !0,
                                className: P.emptyStateCard,
                                children: (0, n.jsx)(d.Text, {
                                    color: "text-muted",
                                    variant: "text-sm/normal",
                                    children: j.default.Messages.INTEGRATIONS_SEARCH_NO_MATCH
                                })
                            })]
                        }),
                        s = (0, n.jsx)(d.Card, {
                            editable: !0,
                            className: P.emptyStateCard,
                            children: (0, n.jsxs)("div", {
                                className: P.emptyStateText,
                                children: [(0, n.jsx)("img", {
                                    alt: "",
                                    src: b,
                                    className: P.emptyStateImage
                                }), (0, n.jsx)(d.Heading, {
                                    color: "header-secondary",
                                    variant: "heading-xl/bold",
                                    children: j.default.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS
                                }), (0, n.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: j.default.Messages.INTEGRATIONS_OVERVIEW_NO_APPLICATIONS_APP_DIRECTORY_CTA.format({
                                        handleGoToAppDirectory: () => {
                                            (0, T.goToAppDirectory)({
                                                guildId: l,
                                                entrypoint: {
                                                    name: I.ApplicationDirectoryEntrypointNames.GUILD_INTEGRATION_SETTINGS
                                                }
                                            }), (0, u.popLayer)()
                                        }
                                    })
                                })]
                            })
                        });
                    return t > 0 ? i : s
                }(K, es, null == t ? void 0 : t.id), em = null);
                let eN = C.default.getArticleURL(L.HelpdeskArticles.INTEGRATIONS),
                    eE = null != l ? j.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_CHANNEL : j.default.Messages.INTEGRATIONS_OVERVIEW_DESCRIPTION_GUILD,
                    eS = [];
                if (X) {
                    var ep, eh, e_, eg, eO;
                    let e;
                    if (eS.push((ep = H.length, eh = F, e_ = W, e = ep > 0 ? j.default.Messages.INTEGRATIONS_WEBHOOKS_BUTTON : j.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON, (0, n.jsx)(M.default, {
                            name: j.default.Messages.INTEGRATIONS_WEBHOOKS,
                            icon: g.default,
                            buttonText: e,
                            buttonDisabled: !eh,
                            onButtonClick: e_,
                            hasNextSection: ep > 0,
                            details: [{
                                text: j.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                                    count: ep
                                })
                            }]
                        }, "webhooks"))), (null == l ? void 0 : l.type) !== L.ChannelTypes.GUILD_VOICE && ((null == l ? void 0 : l.type) == null || !L.ChannelTypesSets.GUILD_THREADS_ONLY.has(l.type))) {
                        ;
                        let e, t;
                        eS.push((eg = k.length, eO = V, eg > 0 ? (e = j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_BUTTON, t = eO) : (e = j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_EMPTY_BUTTON, t = () => open(C.default.getArticleURL(L.HelpdeskArticles.CHANNEL_FOLLOWING))), (0, n.jsx)(M.default, {
                            name: j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING,
                            icon: _.default,
                            buttonText: e,
                            onButtonClick: t,
                            hasNextSection: eg > 0,
                            details: [{
                                text: j.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SUMMARY.format({
                                    count: eg
                                })
                            }]
                        }, "channels-followed")))
                    }
                }
                return en && eS.push(function(e, t, l) {
                    let a, i, s;
                    let r = f.default.get(L.PlatformTypes.TWITCH);
                    return e > 0 ? (a = j.default.Messages.INTEGRATIONS_TWITCH_BUTTON, i = j.default.Messages.INTEGRATIONS_TWITCH_SUMMARY.format({
                        count: t
                    }), s = () => l(L.PlatformTypes.TWITCH)) : (a = j.default.Messages.INTEGRATIONS_TWITCH_EMPTY_BUTTON, i = j.default.Messages.INTEGRATIONS_TWITCH_EMPTY_SUMMARY, s = () => (0, m.default)(L.PlatformTypes.TWITCH, "Integration Settings")), (0, n.jsx)(M.default, {
                        name: j.default.Messages.INTEGRATIONS_TWITCH,
                        icon: r.icon.whiteSVG,
                        iconBackgroundColor: r.color,
                        iconClassName: P.platformIcon,
                        buttonText: a,
                        onButtonClick: s,
                        hasNextSection: e > 0,
                        details: [{
                            text: i
                        }]
                    }, "integrations-twitch")
                }($, et, w)), ea && eS.push(function(e, t, l) {
                    let a, i, s;
                    let r = f.default.get(L.PlatformTypes.YOUTUBE);
                    return e > 0 ? (a = j.default.Messages.INTEGRATIONS_YOUTUBE_BUTTON, i = j.default.Messages.INTEGRATIONS_YOUTUBE_SUMMARY.format({
                        count: t
                    }), s = () => l(L.PlatformTypes.YOUTUBE)) : (a = j.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_BUTTON, i = j.default.Messages.INTEGRATIONS_YOUTUBE_EMPTY_SUMMARY, s = () => (0, m.default)(L.PlatformTypes.YOUTUBE, "Integration Settings")), (0, n.jsx)(M.default, {
                        name: j.default.Messages.INTEGRATIONS_YOUTUBE,
                        icon: r.icon.whiteSVG,
                        iconBackgroundColor: r.color,
                        iconClassName: P.platformIcon,
                        buttonText: a,
                        onButtonClick: s,
                        hasNextSection: e > 0,
                        details: [{
                            text: i
                        }]
                    }, "integrations-youtube")
                }(ee, el, w)), (0, n.jsxs)(d.FormSection, {
                    className: s(null != em ? P.footerPlaceholder : null),
                    children: [(0, n.jsx)(d.FormText, {
                        type: d.FormTextTypes.DESCRIPTION,
                        children: eE.format({
                            helpdeskArticle: eN
                        })
                    }), (0, n.jsx)(d.FormDivider, {
                        className: P.divider
                    }), U || q || null == t ? (0, n.jsx)(d.Spinner, {
                        className: P.spinner,
                        type: d.Spinner.Type.SPINNING_CIRCLE
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [eS, Q ? (0, n.jsxs)(n.Fragment, {
                            children: [eS.length > 0 ? (0, n.jsx)(d.FormDivider, {
                                className: P.divider
                            }) : null, (0, n.jsx)(d.Heading, {
                                variant: "heading-md/semibold",
                                className: P.sectionHeader,
                                children: j.default.Messages.INTEGRATIONS_APPLICATION_SECTION
                            }), es > 4 ? (0, n.jsx)(B, {
                                query: z,
                                setQuery: Z
                            }) : null, eT]
                        }) : null, em]
                    })]
                })
            }
        },
        810201: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return S
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("819855"),
                s = l("77078"),
                r = l("404118"),
                o = l("611183"),
                d = l("841098"),
                u = l("145131"),
                c = l("701909"),
                f = l("421475"),
                I = l("49111"),
                T = l("782340"),
                m = l("788933"),
                N = l("277482"),
                E = l("57213");

            function S(e) {
                let t, {
                        guild: l,
                        channel: S,
                        customWebhooks: p,
                        editedWebhook: h,
                        selectableWebhookChannels: _,
                        refToScroller: g,
                        errors: O,
                        canNavigate: A
                    } = e,
                    C = (0, d.default)(),
                    [R, x] = a.useState(null),
                    [M, v] = a.useState(null);
                if (null != S) t = S;
                else {
                    let e = Object.values(_);
                    t = e.length > 0 ? e[0] : null
                }
                let L = a.useCallback(async () => {
                    if (A() && null !== t) {
                        let e = await o.default.create(l.id, t.id).catch(e => {
                            let {
                                body: t,
                                status: l
                            } = e;
                            return t && t.code === I.AbortCodes.TOO_MANY_WEBHOOKS ? r.default.show({
                                title: T.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                                body: T.default.Messages.WEBHOOK_ERROR_MAX_WEBHOOKS_REACHED
                            }) : 429 === l ? r.default.show({
                                title: T.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                                body: T.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK_RATE_LIMIT
                            }) : r.default.show({
                                title: T.default.Messages.WEBHOOK_ERROR_CREATING_WEBHOOK,
                                body: T.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                            }), null
                        });
                        null != e && (v(e.id), x(e))
                    }
                }, [A, t, l]);
                a.useEffect(() => {
                    0 === p.length && L()
                }, []);
                let j = null !== t;
                return (0, n.jsxs)(s.FormSection, {
                    children: [(0, n.jsx)(s.FormText, {
                        type: s.FormTextTypes.DESCRIPTION,
                        children: T.default.Messages.INTEGRATIONS_WEBHOOKS_DESCRIPTION.format({
                            helpdeskArticle: c.default.getArticleURL(I.HelpdeskArticles.WEBHOOKS),
                            developersArticle: I.MarketingURLs.API_DOCS_WEBHOOKS
                        })
                    }), (0, n.jsx)(s.FormDivider, {
                        className: m.headerDivider
                    }), p.length > 0 ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(s.Button, {
                            className: m.createButton,
                            size: s.Button.Sizes.SMALL,
                            disabled: !j,
                            onClick: L,
                            children: T.default.Messages.INTEGRATIONS_WEBHOOKS_CREATE
                        }), (0, n.jsx)(f.default, {
                            webhooks: p,
                            editedWebhook: h,
                            selectableWebhookChannels: _,
                            lastCreatedWebhookId: null == R ? void 0 : R.id,
                            errors: O,
                            canNavigate: A
                        })]
                    }) : function(e, t, l) {
                        let a = (0, i.isThemeDark)(e) ? N : E;
                        return (0, n.jsxs)(u.default, {
                            direction: u.default.Direction.VERTICAL,
                            align: u.default.Align.CENTER,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: a,
                                className: m.emptyStateImage
                            }), (0, n.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: T.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY
                            }), (0, n.jsx)(s.Button, {
                                className: m.emptyStateButton,
                                disabled: !t,
                                onClick: l,
                                children: T.default.Messages.INTEGRATIONS_WEBHOOKS_EMPTY_BUTTON
                            })]
                        })
                    }(C, j, L)]
                })
            }
        },
        467733: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("917351"),
                s = l.n(i),
                r = l("446674"),
                o = l("77078"),
                d = l("713841"),
                u = l("800751"),
                c = l("524503"),
                f = l("186211"),
                I = l("926994"),
                T = l("923959"),
                m = l("957255"),
                N = l("454589"),
                E = l("145131"),
                S = l("659500"),
                p = l("701909"),
                h = l("792181"),
                _ = l("827691"),
                g = l("943374"),
                O = l("310005"),
                A = l("810201"),
                C = l("49111"),
                R = l("782340"),
                x = l("32414");

            function M(e, t) {
                switch (e) {
                    case C.IntegrationSettingsSections.APPLICATION:
                        var l;
                        return null !== (l = null == t ? void 0 : t.application.name) && void 0 !== l ? l : "";
                    case C.IntegrationSettingsSections.OVERVIEW:
                        return R.default.Messages.INTEGRATIONS_OVERVIEW;
                    case C.IntegrationSettingsSections.CHANNEL_FOLLOWING:
                        return R.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING;
                    case C.IntegrationSettingsSections.TWITCH:
                        return R.default.Messages.INTEGRATIONS_TWITCH;
                    case C.IntegrationSettingsSections.WEBHOOKS:
                        return R.default.Messages.INTEGRATIONS_WEBHOOKS;
                    case C.IntegrationSettingsSections.YOUTUBE:
                        return R.default.Messages.INTEGRATIONS_YOUTUBE;
                    default:
                        return ""
                }
            }
            var v = a.memo(function(e) {
                var t;
                let {
                    section: l,
                    sectionId: i,
                    guild: v,
                    channel: L,
                    integrations: j,
                    editedIntegration: P,
                    webhooks: b,
                    editedWebhook: G,
                    isFetching: y,
                    refToScroller: D,
                    errors: B,
                    hasChanges: H
                } = e, k = (0, r.useStateFromStores)([T.default], () => null != v ? T.default.getDefaultChannel(v.id) : null), U = (0, r.useStateFromStoresObject)([T.default], () => T.default.getChannels(null == v ? void 0 : v.id)), F = (0, r.useStateFromStoresObject)([m.default], () => s.keyBy(U.SELECTABLE.map(e => e.channel).filter(e => m.default.can(C.Permissions.MANAGE_WEBHOOKS, e)), "id")), w = (0, r.useStateFromStoresObject)([m.default], () => s.keyBy(U.VOCAL.map(e => e.channel).filter(e => e.isGuildVocal() && m.default.can(C.Permissions.MANAGE_WEBHOOKS, e)), "id")), W = l === C.IntegrationSettingsSections.APPLICATION ? i : null, [V, Y] = a.useState(u.SHAKE_INTENSITY_DEFAULT), K = a.useCallback(() => H() ? (S.ComponentDispatch.dispatch(C.ComponentActions.SHAKE_APP, {
                    duration: 300,
                    intensity: V
                }), Y(Math.min(V + u.SHAKE_INTENSITY_INCREMENT, u.SHAKE_INTENSITY_MAX)), S.ComponentDispatch.dispatch(C.ComponentActions.EMPHASIZE_NOTICE), !1) : (Y(u.SHAKE_INTENSITY_DEFAULT), !0), [H, V]), z = a.useCallback(e => !!K() && (d.default.setSection(e), !0), [K]), {
                    applicationIntegrations: Z,
                    applicationBotIds: q,
                    builtInIntegrations: J,
                    customWebhooks: X,
                    followedChannelWebhooks: Q
                } = a.useMemo(() => {
                    let e = {},
                        t = {},
                        l = {},
                        n = [],
                        a = [];
                    if (null != j)
                        for (let n of j)
                            if ("discord" === n.type) {
                                if (null != n.application) {
                                    var i;
                                    let l = n.application.id;
                                    e[l] = {
                                        application: n.application,
                                        integration: n,
                                        webhooks: []
                                    }, (null === (i = n.application.bot) || void 0 === i ? void 0 : i.id) !== void 0 && (t[n.application.bot.id] = n.application.id)
                                }
                            } else !(n.type in l) && (l[n.type] = []), l[n.type].push(n);
                    for (let t of b)(t.channel_id in F || t.channel_id in w) && (null != t.application_id && t.application_id in e ? e[t.application_id].webhooks.push(t) : t.type === C.WebhookTypes.CHANNEL_FOLLOWER ? a.push(t) : n.push(t));
                    return {
                        applicationIntegrations: e,
                        applicationBotIds: t,
                        builtInIntegrations: l,
                        customWebhooks: n,
                        followedChannelWebhooks: a
                    }
                }, [j, F, w, b]);
                a.useEffect(() => {
                    if (!y) switch (l) {
                        case C.IntegrationSettingsSections.TWITCH:
                            null == J[C.PlatformTypes.TWITCH] && d.default.setSection(C.IntegrationSettingsSections.OVERVIEW);
                            break;
                        case C.IntegrationSettingsSections.YOUTUBE:
                            null == J[C.PlatformTypes.YOUTUBE] && d.default.setSection(C.IntegrationSettingsSections.OVERVIEW);
                            break;
                        case C.IntegrationSettingsSections.APPLICATION:
                            (null == W || !(W in q || W in Z)) && d.default.setSection(C.IntegrationSettingsSections.OVERVIEW)
                    }
                }, [Z, q, J, W, l, y]), a.useEffect(() => {
                    if ((null == v ? void 0 : v.id) == null) return;
                    let e = f.default.getEntitlementsForGuildFetchState(v.id);
                    e === f.FetchState.NOT_FETCHED && c.fetchEntitlementsForGuild(v.id)
                }, [null == v ? void 0 : v.id]);
                let $ = null;
                switch (l) {
                    case C.IntegrationSettingsSections.TWITCH:
                        let ee = J[C.PlatformTypes.TWITCH];
                        null != ee && ($ = (0, n.jsx)(_.default, {
                            guild: v,
                            integrations: J[C.PlatformTypes.TWITCH],
                            editedIntegration: P,
                            labelText: R.default.Messages.INTEGRATIONS_TWITCH,
                            platformType: C.PlatformTypes.TWITCH,
                            descriptionText: R.default.Messages.INTEGRATIONS_TWITCH_DESCRIPTION,
                            helpText: R.default.Messages.INTEGRATIONS_TWITCH_HELP.format({
                                connectAction: () => (0, I.default)(C.PlatformTypes.TWITCH, "Integration Settings"),
                                helpdeskArticle: p.default.getArticleURL(C.HelpdeskArticles.TWITCH_INTEGRATION)
                            }),
                            canNavigate: K
                        }));
                        break;
                    case C.IntegrationSettingsSections.YOUTUBE:
                        let et = J[C.PlatformTypes.YOUTUBE];
                        null != et && ($ = (0, n.jsx)(_.default, {
                            guild: v,
                            integrations: J[C.PlatformTypes.YOUTUBE],
                            editedIntegration: P,
                            labelText: R.default.Messages.INTEGRATIONS_YOUTUBE,
                            platformType: C.PlatformTypes.YOUTUBE,
                            descriptionText: R.default.Messages.INTEGRATIONS_YOUTUBE_DESCRIPTION,
                            helpText: R.default.Messages.INTEGRATIONS_YOUTUBE_HELP.format({
                                connectAction: () => (0, I.default)(C.PlatformTypes.YOUTUBE),
                                helpdeskArticle: p.default.getArticleURL(C.HelpdeskArticles.YOUTUBE_INTEGRATION)
                            }),
                            canNavigate: K
                        }));
                        break;
                    case C.IntegrationSettingsSections.APPLICATION:
                        let el = null != W ? null !== (t = Z[q[W]]) && void 0 !== t ? t : Z[W] : null;
                        null != el && ($ = (0, n.jsx)(h.default, {
                            guild: v,
                            applicationIntegration: el,
                            editedWebhook: G,
                            selectableWebhookChannels: F,
                            errors: B,
                            canNavigate: K
                        }));
                        break;
                    case C.IntegrationSettingsSections.CHANNEL_FOLLOWING:
                        $ = (0, n.jsx)(g.default, {
                            followedChannelWebhooks: Q,
                            editedWebhook: G,
                            selectableWebhookChannels: F,
                            canNavigate: K,
                            errors: B
                        });
                        break;
                    case C.IntegrationSettingsSections.WEBHOOKS:
                        $ = (0, n.jsx)(A.default, {
                            guild: v,
                            channel: L,
                            customWebhooks: X,
                            editedWebhook: G,
                            selectableWebhookChannels: {
                                ...F,
                                ...w
                            },
                            canNavigate: K,
                            refToScroller: D,
                            errors: B
                        });
                        break;
                    default:
                        $ = (0, n.jsx)(O.default, {
                            guild: v,
                            channel: L,
                            applicationIntegrations: Z,
                            builtInIntegrations: J,
                            customWebhooks: X,
                            followedChannelWebhooks: Q,
                            isLoading: y || null == v,
                            canCreateWebhook: null != (null != L ? L : k),
                            onManageCustomWebhooks: () => {
                                d.default.setSection(C.IntegrationSettingsSections.WEBHOOKS)
                            },
                            onManageFollowedChannels: () => {
                                d.default.setSection(C.IntegrationSettingsSections.CHANNEL_FOLLOWING)
                            },
                            onManageApplication: e => {
                                d.default.setSection(C.IntegrationSettingsSections.APPLICATION, e)
                            },
                            onManageBuiltIn: e => {
                                switch (e) {
                                    case C.PlatformTypes.TWITCH:
                                        d.default.setSection(C.IntegrationSettingsSections.TWITCH);
                                        break;
                                    case C.PlatformTypes.YOUTUBE:
                                        d.default.setSection(C.IntegrationSettingsSections.YOUTUBE)
                                }
                            }
                        })
                }
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(E.default, {
                        align: E.default.Align.CENTER,
                        className: x.breadcrumbs,
                        children: l === C.IntegrationSettingsSections.OVERVIEW ? (0, n.jsx)(o.FormTitle, {
                            tag: "h1",
                            children: M(C.IntegrationSettingsSections.OVERVIEW)
                        }) : (0, n.jsx)(N.default, {
                            activeId: l.toString(),
                            breadcrumbs: [C.IntegrationSettingsSections.OVERVIEW, l].map(e => ({
                                id: e.toString(),
                                label: M(e, Z[W])
                            })),
                            onBreadcrumbClick: e => {
                                l !== parseInt(e.id) && z(parseInt(e.id))
                            },
                            renderCustomBreadcrumb: (e, t) => (0, n.jsx)(o.FormTitle, {
                                tag: "h1",
                                className: t ? x.breadcrumbActive : x.breadcrumbInactive,
                                children: e.label
                            })
                        })
                    }), $]
                })
            })
        },
        551527: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("316693"),
                s = l("446674"),
                r = l("77078"),
                o = l("851387"),
                d = l("581583"),
                u = l("549825"),
                c = l("978970"),
                f = l("766274"),
                I = l("26989"),
                T = l("79798"),
                m = l("145131"),
                N = l("449008"),
                E = l("991170"),
                S = l("782340"),
                p = l("992693");

            function h(e) {
                var t;
                let {
                    guild: l,
                    applicationIntegration: h
                } = e, {
                    application: _
                } = h, g = null != _.bot ? new f.default(_.bot) : null, O = (0, s.useStateFromStores)([I.default], () => null != g ? I.default.getMember(l.id, g.id) : null, [g, l]), A = null == g ? void 0 : g.id;
                a.useEffect(() => {
                    null != A && o.default.requestMembersById(l.id, A)
                }, [l.id, A]);
                let C = a.useMemo(() => {
                    var e, t, n;
                    let a = l.getRole(l.id),
                        s = null !== (t = null == O ? void 0 : null === (e = O.roles) || void 0 === e ? void 0 : e.map(e => l.getRole(e)).filter(N.isNotNullish)) && void 0 !== t ? t : [],
                        r = null !== (n = null == a ? void 0 : a.permissions) && void 0 !== n ? n : E.default.NONE;
                    for (let e of s) r = i.default.add(r, e.permissions);
                    return r
                }, [l, O]);
                return null == g ? null : (0, n.jsx)(r.Card, {
                    editable: !0,
                    className: p.card,
                    children: (0, n.jsxs)(m.default, {
                        direction: m.default.Direction.VERTICAL,
                        children: [(0, n.jsxs)(m.default, {
                            align: m.default.Align.CENTER,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: g.getAvatarURL(l.id, 32),
                                className: p.iconWrapper
                            }), (0, n.jsx)(r.Text, {
                                color: "header-primary",
                                variant: "text-sm/normal",
                                children: S.default.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format({
                                    user: g
                                })
                            }), (0, n.jsx)(T.default, {
                                className: p.tag,
                                verified: g.isVerifiedBot()
                            })]
                        }), function(e, t, l, a) {
                            let s = [],
                                o = [];
                            for (let e of c.OrderedPermissions) i.default.has(a, e) ? s.push(e) : o.push(e);
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(r.FormDivider, {
                                    className: p.divider
                                }), l.length > 0 ? (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(r.FormTitle, {
                                        className: p.permissionHeader,
                                        children: S.default.Messages.ROLES_LIST.format({
                                            numRoles: l.length
                                        })
                                    }), (0, n.jsx)(d.default, {
                                        className: p.rolePills,
                                        user: e,
                                        guild: t,
                                        userRoles: l,
                                        wrap: !1,
                                        readOnly: !0
                                    })]
                                }) : null, s.length > 0 || o.length > 0 ? (0, n.jsx)(u.default, {
                                    className: p.permissionList,
                                    grantedPermissions: s,
                                    grantedPermissionsHeader: S.default.Messages.INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
                                    disabledPermissions: o,
                                    disabledPermissionsHeader: S.default.Messages.INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS
                                }) : null]
                            })
                        }(g, l, null !== (t = null == O ? void 0 : O.roles) && void 0 !== t ? t : [], C)]
                    })
                })
            }
        },
        226397: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("866227"),
                o = l.n(r),
                d = l("446674"),
                u = l("77078"),
                c = l("713841"),
                f = l("376556"),
                I = l("385976"),
                T = l("592407"),
                m = l("766274"),
                N = l("102985"),
                E = l("145131"),
                S = l("461380"),
                p = l("841811"),
                h = l("429893"),
                _ = l("315102"),
                g = l("299039"),
                O = l("674916"),
                A = l("49111"),
                C = l("782340"),
                R = l("311941"),
                x = l("926622");

            function M(e) {
                let t, {
                        guild: l,
                        integration: i,
                        editedIntegration: r,
                        isExpanded: M,
                        onToggleExpand: v,
                        onDisable: L,
                        onEnable: j
                    } = e,
                    [P, b] = a.useState(!1),
                    G = (0, d.useStateFromStores)([N.default], () => N.default.hidePersonalInformation),
                    y = a.useCallback(() => {
                        b(!0), j(i)
                    }, [i, j]),
                    D = a.useCallback(() => {
                        !i.syncing && (0, u.openModal)(e => {
                            let t = 0 === i.expire_behavior ? C.default.Messages.REMOVE_SYNCED_ROLE : C.default.Messages.KICK_FROM_SERVER;
                            return (0, n.jsx)(u.ConfirmModal, {
                                ...e,
                                header: C.default.Messages.DISABLE_INTEGRATION_TITLE,
                                confirmText: t,
                                cancelText: C.default.Messages.CANCEL,
                                onConfirm: () => L(i),
                                children: (0, n.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children: i.type === A.PlatformTypes.YOUTUBE ? C.default.Messages.DISABLE_INTEGRATION_YOUTUBE_BODY : C.default.Messages.DISABLE_INTEGRATION_TWITCH_BODY
                                })
                            })
                        })
                    }, [i, L]),
                    B = a.useCallback(() => {
                        T.default.syncIntegration(l.id, i.id)
                    }, [l.id, i.id]),
                    H = a.useCallback(() => {
                        null != i.role_id && (T.default.setSection(A.GuildSettingsSections.ROLES), T.default.selectRole(i.role_id))
                    }, [i.role_id]),
                    {
                        serviceName: k,
                        channelURL: U,
                        expireBehaviorLabel: F,
                        syncLabel: w,
                        subscribersText: W
                    } = a.useMemo(() => {
                        var e, t, l, n, a;
                        let s = null !== (l = null === (t = f.default.get(i.type)) || void 0 === t ? void 0 : null === (e = t.getPlatformUserUrl) || void 0 === e ? void 0 : e.call(t, i.account)) && void 0 !== l ? l : "";
                        switch (i.type) {
                            case A.PlatformTypes.YOUTUBE:
                                return {
                                    serviceName: C.default.Messages.INTEGRATIONS_YOUTUBE, expireBehaviorLabel: C.default.Messages.FORM_LABEL_MEMBERSHIP_EXPIRE_BEHAVIOR, syncLabel: C.default.Messages.FORM_LABEL_SYNCED_MEMBERS, subscribersText: C.default.Messages.NUM_MEMBERS.format({
                                        subscribers: null !== (n = i.subscriber_count) && void 0 !== n ? n : 0
                                    }), channelURL: s
                                };
                            case A.PlatformTypes.TWITCH:
                            default:
                                return {
                                    serviceName: C.default.Messages.INTEGRATIONS_TWITCH, expireBehaviorLabel: C.default.Messages.FORM_LABEL_SUB_EXPIRE_BEHAVIOR, syncLabel: C.default.Messages.FORM_LABEL_SYNCED_SUBS, subscribersText: C.default.Messages.NUM_SUBSCRIBERS.format({
                                        subscribers: null !== (a = i.subscriber_count) && void 0 !== a ? a : 0
                                    }), channelURL: s
                                }
                        }
                    }, [i.account, i.subscriber_count, i.type]),
                    {
                        roleLink: V,
                        syncDescriptionText: Y
                    } = a.useMemo(() => {
                        let e, t;
                        let a = null != i.role_id ? l.getRole(i.role_id) : null;
                        e = null != a ? (0, n.jsx)(u.Anchor, {
                            onClick: H,
                            children: a.name
                        }) : C.default.Messages.NONE;
                        let s = f.default.get(i.type);
                        return {
                            roleLink: e,
                            syncDescriptionText: t = i.revoked && null != s ? C.default.Messages.SYNC_REVOKED.format({
                                user: i.user,
                                platformName: s.name
                            }) : C.default.Messages.INTEGRATIONS_LAST_SYNC.format({
                                datetime: o(i.synced_at).calendar()
                            })
                        }
                    }, [l, H, i.revoked, i.role_id, i.synced_at, i.type, i.user]),
                    K = a.useMemo(() => {
                        let e = I.default.getGuildEmoji(l.id),
                            t = Object.values(l.roles).filter(e => null != e.tags && e.tags.integration_id === i.id).map(e => e.id);
                        return i.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter(e => null != i.role_id && (null == e ? void 0 : e.roles.some(e => t.includes(e)))) : []
                    }, [l.id, l.roles, i.enable_emoticons, i.id, i.role_id]);
                if (a.useEffect(() => {
                        (null == r ? void 0 : r.id) === i.id && (null == r ? void 0 : r.enabled) === !0 && b(!1)
                    }, [r, i.id]), i.enabled && null != i.user) t = [{
                    icon: p.default,
                    text: G ? C.default.Messages.INTEGRATION_ADDED_DATE.format({
                        timestamp: g.default.extractTimestamp(i.id)
                    }) : C.default.Messages.INTEGRATION_ADDED_USER_DATE.format({
                        user: null != i.user ? new m.default(i.user).tag : null,
                        timestamp: g.default.extractTimestamp(i.id)
                    })
                }];
                else {
                    let e = new URL(U);
                    t = [{
                        text: C.default.Messages.INTEGRATIONS_ACCOUNT_DESCRIPTION.format({
                            serviceName: k,
                            accountUrl: U,
                            accountUrlText: e.hostname + e.pathname
                        })
                    }]
                }
                let z = (0, n.jsxs)(E.default, {
                        className: R.header,
                        align: E.default.Align.CENTER,
                        children: [(0, n.jsx)(O.default, {
                            name: "".concat(i.name),
                            detailsClassName: R.description,
                            details: t
                        }), i.enabled ? (0, n.jsx)(E.default.Child, {
                            shrink: 0,
                            grow: 0,
                            children: (0, n.jsx)(S.default, {
                                className: R.expandIcon,
                                expanded: M && !P,
                                "aria-hidden": !0
                            })
                        }) : (0, n.jsx)(E.default.Child, {
                            shrink: 0,
                            grow: 0,
                            children: (0, n.jsx)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.PRIMARY,
                                onClick: y,
                                disabled: P,
                                children: P ? (0, n.jsx)(h.default, {
                                    width: 24,
                                    height: 24
                                }) : (0, n.jsx)(n.Fragment, {
                                    children: C.default.Messages.INTEGRATIONS_ENABLE
                                })
                            })
                        })]
                    }),
                    Z = null;
                return M && !P && null != r && (Z = (0, n.jsxs)(E.default, {
                    className: R.body,
                    direction: E.default.Direction.VERTICAL,
                    children: [(0, n.jsx)(u.FormDivider, {
                        className: R.topDivider
                    }), function(e) {
                        let {
                            integration: t,
                            labelText: l,
                            subscribersText: a,
                            descriptionText: i,
                            roleLink: s,
                            onSync: r
                        } = e;
                        return (0, n.jsxs)(E.default, {
                            children: [(0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: x.marginBottom8,
                                    children: C.default.Messages.FORM_LABEL_SYNCED_ROLE
                                }), (0, n.jsx)(u.Text, {
                                    className: R.syncedRole,
                                    color: "header-primary",
                                    variant: "text-sm/normal",
                                    children: s
                                })]
                            }), (0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: x.marginBottom8,
                                    children: l
                                }), (0, n.jsxs)(E.default, {
                                    justify: E.default.Justify.BETWEEN,
                                    children: [(0, n.jsxs)(E.default, {
                                        direction: E.default.Direction.VERTICAL,
                                        children: [(0, n.jsx)(u.Text, {
                                            color: "header-primary",
                                            variant: "text-sm/normal",
                                            children: a
                                        }), (0, n.jsx)(u.Text, {
                                            color: "header-secondary",
                                            variant: "text-xs/normal",
                                            children: i
                                        })]
                                    }), (0, n.jsx)(u.Button, {
                                        size: u.Button.Sizes.SMALL,
                                        look: u.Button.Looks.FILLED,
                                        color: u.Button.Colors.PRIMARY,
                                        disabled: t.syncing || t.revoked,
                                        onClick: r,
                                        children: t.syncing ? (0, n.jsx)(h.default, {
                                            width: 24,
                                            height: 24
                                        }) : (0, n.jsx)(n.Fragment, {
                                            children: C.default.Messages.SYNC
                                        })
                                    })]
                                })]
                            })]
                        })
                    }({
                        integration: r,
                        labelText: w,
                        subscribersText: W,
                        descriptionText: Y,
                        roleLink: V,
                        onSync: B
                    }), (0, n.jsx)(u.FormDivider, {
                        className: R.midDivider
                    }), function(e) {
                        let {
                            integration: t,
                            labelText: l,
                            onBehaviorChange: a,
                            onGracePeriodChange: i
                        } = e;
                        return (0, n.jsxs)(E.default, {
                            children: [(0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: x.marginBottom8,
                                    children: l
                                }), (0, n.jsx)(u.SingleSelect, {
                                    placeholder: l,
                                    value: "".concat(t.expire_behavior),
                                    options: [{
                                        value: "0",
                                        label: C.default.Messages.REMOVE_SYNCED_ROLE
                                    }, {
                                        value: "1",
                                        label: C.default.Messages.KICK_FROM_SERVER
                                    }],
                                    isDisabled: t.syncing,
                                    onChange: e => a(parseInt(e))
                                })]
                            }), (0, n.jsxs)(E.default.Child, {
                                basis: "50%",
                                children: [(0, n.jsx)(u.FormTitle, {
                                    className: x.marginBottom8,
                                    children: C.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD
                                }), (0, n.jsx)(u.SingleSelect, {
                                    placeholder: C.default.Messages.FORM_LABEL_EXPIRE_GRACE_PERIOD,
                                    maxVisibleItems: 5,
                                    value: "".concat(t.expire_grace_period),
                                    options: [1, 3, 7, 14, 30].map(e => ({
                                        value: "".concat(e),
                                        label: C.default.Messages.N_DAYS.format({
                                            days: e
                                        })
                                    })),
                                    onChange: e => i(parseInt(e)),
                                    isDisabled: t.syncing
                                })]
                            })]
                        })
                    }({
                        integration: r,
                        labelText: F,
                        onBehaviorChange: function(e) {
                            c.default.updateIntegration({
                                expireBehavior: e
                            })
                        },
                        onGracePeriodChange: function(e) {
                            c.default.updateIntegration({
                                expireGracePeriod: e
                            })
                        }
                    }), i.type === A.PlatformTypes.TWITCH ? function(e) {
                        let {
                            integration: t,
                            emojis: l,
                            onToggle: a
                        } = e;
                        return (0, n.jsxs)(E.default, {
                            direction: E.default.Direction.VERTICAL,
                            children: [(0, n.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                className: s(x.marginTop20, x.marginBottom8),
                                value: t.enable_emoticons,
                                disabled: t.syncing,
                                onChange: e => {
                                    let {
                                        currentTarget: t
                                    } = e;
                                    return a(t.checked)
                                },
                                children: (0, n.jsx)(u.FormText, {
                                    children: C.default.Messages.ENABLE_TWITCH_EMOJI_SYNC
                                })
                            }), (0, n.jsx)(E.default, {
                                wrap: E.default.Wrap.WRAP,
                                className: R.twitchEmojis,
                                children: l.map((e, t) => (0, n.jsx)(u.Tooltip, {
                                    text: e.name,
                                    children: t => (0, n.jsx)("img", {
                                        alt: C.default.Messages.IMG_ALT_EMOJI.format({
                                            name: e.name
                                        }),
                                        draggable: !1,
                                        className: s(R.emoji, "emoji", "jumboable"),
                                        src: _.default.getEmojiURL({
                                            id: e.id,
                                            animated: e.animated,
                                            size: 28
                                        }),
                                        ...t
                                    }, e.name)
                                }, t))
                            })]
                        })
                    }({
                        integration: r,
                        emojis: K,
                        onToggle: function(e) {
                            c.default.updateIntegration({
                                enableEmoticons: e
                            })
                        }
                    }) : null, (0, n.jsx)(u.FormDivider, {
                        className: R.bottomDivider
                    }), (0, n.jsx)(E.default, {
                        children: (0, n.jsx)(u.Button, {
                            className: R.disableButton,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.RED,
                            look: u.Button.Looks.LINK,
                            onClick: D,
                            children: C.default.Messages.INTEGRATIONS_DISABLE
                        })
                    })]
                })), (0, n.jsx)(u.Card, {
                    editable: !0,
                    className: R.card,
                    children: (0, n.jsxs)(E.default, {
                        direction: E.default.Direction.VERTICAL,
                        children: [i.enabled ? (0, n.jsx)(u.Clickable, {
                            className: R.expandableHeader,
                            "aria-expanded": M && !P,
                            onClick: v,
                            children: z
                        }) : z, Z]
                    })
                })
            }
        },
        280978: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("77078"),
                s = l("404118"),
                r = l("713841"),
                o = l("611183"),
                d = l("145131"),
                u = l("461380"),
                c = l("733160"),
                f = l("315102"),
                I = l("674916"),
                T = l("49111"),
                m = l("782340"),
                N = l("385197");

            function E(e) {
                let {
                    webhook: t,
                    editedWebhook: l,
                    channelOptions: E,
                    isExpanded: S,
                    errors: p,
                    onToggleExpand: h
                } = e, _ = a.useMemo(() => {
                    var e, l;
                    return e = t, null != (l = t.avatar) && /^data:/.test(l) ? l : (0, f.getUserAvatarURL)({
                        id: e.id,
                        avatar: l,
                        discriminator: T.NON_USER_BOT_DISCRIMINATOR
                    })
                }, [t]), g = a.useCallback(() => {
                    (0, i.openModal)(e => (0, n.jsx)(i.ConfirmModal, {
                        ...e,
                        header: m.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_TITLE.format({
                            name: t.name
                        }),
                        confirmText: m.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE,
                        cancelText: m.default.Messages.CANCEL,
                        onConfirm: () => {
                            o.default.delete(t.guild_id, t.id).catch(() => {
                                s.default.show({
                                    title: m.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_ERROR_DELETING,
                                    body: m.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                                })
                            })
                        },
                        children: (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: m.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE_BODY
                        })
                    }))
                }, [t.guild_id, t.id, t.name]), O = [];
                null != t.source_channel && null != t.source_guild && (O.push({
                    icon: c.default,
                    text: t.source_channel.name
                }), O.push({
                    text: (0, n.jsx)("span", {
                        className: N.guildSource,
                        children: m.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_GUILD_SOURCE.format({
                            guildHook: () => (0, n.jsx)("span", {
                                className: N.sourceName,
                                children: t.source_guild.name
                            }, t.id)
                        })
                    }, "guild-source")
                }));
                let A = null;
                return S && null != l && (A = (0, n.jsxs)("div", {
                    className: N.body,
                    children: [(0, n.jsx)(i.FormDivider, {
                        className: N.topDivider
                    }), (0, n.jsx)(d.default, {
                        children: (0, n.jsxs)(d.default, {
                            direction: d.default.Direction.VERTICAL,
                            children: [(0, n.jsxs)(d.default, {
                                children: [(0, n.jsx)(d.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(i.FormItem, {
                                        title: m.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_NAME,
                                        children: (0, n.jsx)(i.TextInput, {
                                            value: l.name,
                                            onChange: e => {
                                                r.default.updateWebhook({
                                                    name: e
                                                })
                                            },
                                            maxLength: 80,
                                            error: p.name
                                        })
                                    })
                                }), (0, n.jsx)(d.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(i.FormItem, {
                                        title: m.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DEST_CHANNEL,
                                        children: (0, n.jsx)(i.SingleSelect, {
                                            value: l.channel_id,
                                            options: E,
                                            onChange: e => {
                                                r.default.updateWebhook({
                                                    channelId: e
                                                })
                                            }
                                        })
                                    })
                                })]
                            }), (0, n.jsx)(i.FormDivider, {
                                className: N.bottomDivider
                            }), (0, n.jsx)(d.default, {
                                children: (0, n.jsx)(i.Button, {
                                    onClick: g,
                                    size: i.Button.Sizes.SMALL,
                                    color: i.Button.Colors.RED,
                                    look: i.Button.Looks.LINK,
                                    className: N.removeButton,
                                    children: m.default.Messages.INTEGRATIONS_FOLLOWED_CHANNEL_DELETE
                                })
                            })]
                        })
                    })]
                })), (0, n.jsx)(i.Card, {
                    editable: !0,
                    className: N.card,
                    children: (0, n.jsxs)(d.default, {
                        direction: d.default.Direction.VERTICAL,
                        children: [(0, n.jsx)(i.Clickable, {
                            className: N.header,
                            "aria-expanded": S,
                            onClick: h,
                            children: (0, n.jsxs)(d.default, {
                                align: d.default.Align.CENTER,
                                children: [(0, n.jsx)(I.default, {
                                    name: t.name,
                                    imageSrc: _,
                                    detailsClassName: N.description,
                                    details: O
                                }), (0, n.jsx)(u.default, {
                                    className: N.expandIcon,
                                    expanded: S,
                                    "aria-hidden": !0
                                })]
                            })
                        }), A]
                    })
                })
            }
        },
        700104: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return R
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("446674"),
                o = l("77078"),
                d = l("716241"),
                u = l("186211"),
                c = l("952943"),
                f = l("5667"),
                I = l("766274"),
                T = l("145131"),
                m = l("83910"),
                N = l("772280"),
                E = l("71216"),
                S = l("741919"),
                p = l("599110"),
                h = l("674916"),
                _ = l("702411"),
                g = l("49111"),
                O = l("843455"),
                A = l("782340"),
                C = l("946197");

            function R(e) {
                var t, l, i, R, x;
                let {
                    name: M,
                    icon: v,
                    imageSrc: L,
                    iconBackgroundColor: j,
                    iconClassName: P,
                    details: b,
                    integration: G,
                    buttonText: y,
                    buttonDisabled: D,
                    hasNextSection: B,
                    onButtonClick: H,
                    guildId: k,
                    isScrolling: U,
                    canShowMigrationTooltip: F
                } = e, [w, W] = a.useState(!1), [V, Y] = a.useState(!1), K = null == G ? void 0 : G.integration.id;
                let z = (l = y, i = D, R = B, x = H, null == l || null == x ? null : R ? (0, n.jsxs)(T.default, {
                        align: T.default.Align.CENTER,
                        children: [(0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: l
                        }), R ? (0, n.jsx)(N.default, {
                            width: 10,
                            height: 10,
                            className: C.caret
                        }) : null]
                    }) : (0, n.jsx)(o.Button, {
                        size: o.Button.Sizes.SMALL,
                        look: R ? o.Button.Looks.LINK : o.Button.Looks.FILLED,
                        color: R ? o.Button.Colors.PRIMARY : o.Button.Colors.BRAND,
                        disabled: i,
                        onClick: x,
                        children: l
                    })),
                    Z = F && !U && !V && void 0 !== k && null != G;
                a.useEffect(() => {
                    if (Z) p.default.track(g.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                        ...(0, d.collectGuildAnalyticsMetadata)(k),
                        application_id: null == G ? void 0 : G.application.id,
                        location: "overview"
                    })
                }, [k, null == G ? void 0 : G.application.id, Z]);
                let q = Z ? (0, n.jsx)(o.Popout, {
                        renderPopout: () => (0, n.jsx)(o.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), Y(!0), _.default.dismissOverviewTooltip(k, G.integration)
                            },
                            children: (0, n.jsx)(f.default, {
                                content: A.default.Messages.COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
                                onClick: () => {}
                            })
                        }),
                        position: "bottom",
                        align: "center",
                        animation: o.Popout.Animation.TRANSLATE,
                        shouldShow: !0,
                        children: () => z
                    }) : z,
                    J = (0, r.useStateFromStoresArray)([u.default], () => null != G && null != k && null !== (t = u.default.getApplicationEntitlementsForGuild(G.application.id, k)) && void 0 !== t ? t : []),
                    X = (0, r.useStateFromStores)([c.default], () => c.default.integrationIdsWithCommands),
                    Q = null != K && X.has(K),
                    $ = (0, n.jsxs)(T.default, {
                        children: [(0, n.jsx)(h.default, {
                            name: M,
                            icon: v,
                            imageSrc: L,
                            iconBackgroundColor: j,
                            iconClassName: P,
                            details: b,
                            isPremium: J.length > 0
                        }), (0, n.jsx)(T.default.Child, {
                            shrink: 0,
                            grow: 0,
                            children: (0, n.jsxs)(T.default, {
                                align: T.default.Align.CENTER,
                                justify: T.default.Justify.END,
                                children: [function(e, t, l) {
                                    var a;
                                    if (null == e) return null;
                                    let i = [],
                                        {
                                            application: s,
                                            integration: r,
                                            webhooks: d
                                        } = e;
                                    return null != s.bot && i.push((0, n.jsx)(o.TooltipContainer, {
                                        forceOpen: t,
                                        text: new(0, I.default)(s.bot).isVerifiedBot() ? A.default.Messages.INTEGRATIONS_APPLICATION_VERIFIED_BOT : A.default.Messages.INTEGRATIONS_APPLICATION_BOT,
                                        className: C.feature,
                                        children: (0, n.jsx)(E.default, {
                                            width: 24,
                                            height: 24,
                                            className: C.featureIcon
                                        })
                                    }, "bot")), d.length > 0 && i.push((0, n.jsx)(o.TooltipContainer, {
                                        forceOpen: t,
                                        text: A.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                                            count: d.length
                                        }),
                                        className: C.feature,
                                        children: (0, n.jsx)(S.default, {
                                            width: 24,
                                            height: 24,
                                            className: C.featureIcon
                                        })
                                    }, "webhooks")), (null == r ? void 0 : null === (a = r.scopes) || void 0 === a ? void 0 : a.includes(O.OAuth2Scopes.APPLICATIONS_COMMANDS)) === !0 && l && i.push((0, n.jsx)("div", {
                                        className: C.feature,
                                        children: (0, n.jsx)(m.default, {
                                            width: 24,
                                            height: 24,
                                            className: C.featureIcon
                                        })
                                    }, "commands")), i
                                }(G, w, Q), q]
                            })
                        })]
                    });
                return B ? (0, n.jsx)(o.Clickable, {
                    onClick: () => {
                        F && null != k && null != G && _.default.dismissOverviewTooltip(k, G.integration), null == H || H()
                    },
                    onFocus: () => W(!0),
                    onBlur: () => W(!1),
                    children: (0, n.jsx)(o.Card, {
                        editable: !0,
                        className: s(C.card, C.clickable),
                        children: $
                    })
                }) : (0, n.jsx)(o.Card, {
                    editable: !0,
                    className: C.card,
                    children: $
                })
            }
        },
        87390: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("872717"),
                o = l("862337"),
                d = l("77078"),
                u = l("404118"),
                c = l("713841"),
                f = l("611183"),
                I = l("608684"),
                T = l("766274"),
                m = l("145131"),
                N = l("461380"),
                E = l("841811"),
                S = l("315102"),
                p = l("306160"),
                h = l("299039"),
                _ = l("158998"),
                g = l("674916"),
                O = l("49111"),
                A = l("782340"),
                C = l("40489");
            let R = e => {
                if (null == e) return null;
                let t = new T.default(e);
                return _.default.getUserTag(t)
            };

            function x(e, t) {
                return null != t && /^data:/.test(t) ? t : (0, S.getUserAvatarURL)({
                    id: e.id,
                    avatar: t,
                    discriminator: O.NON_USER_BOT_DISCRIMINATOR
                })
            }

            function M(e) {
                let {
                    id: t,
                    webhook: l,
                    editedWebhook: i,
                    channelOptions: T,
                    isExpanded: S,
                    isNew: _,
                    errors: M,
                    onToggleExpand: v
                } = e, [L, j] = a.useState(!1), [P] = a.useState(new o.Timeout);
                a.useEffect(() => () => P.stop(), [P]);
                let b = a.useMemo(() => x(l, l.avatar), [l]),
                    G = a.useCallback(() => {
                        let e = "".concat(r.default.getAPIBaseURL(!1)).concat(O.Endpoints.WEBHOOK_INTEGRATION(l.id, l.token));
                        (0, p.copy)(e)
                    }, [l]),
                    y = a.useCallback(() => {
                        (0, d.openModal)(e => (0, n.jsx)(d.ConfirmModal, {
                            ...e,
                            header: A.default.Messages.WEBHOOK_DELETE_TITLE.format({
                                name: l.name
                            }),
                            confirmText: A.default.Messages.WEBHOOK_DELETE,
                            cancelText: A.default.Messages.WEBHOOK_CANCEL,
                            onConfirm: () => {
                                f.default.delete(l.guild_id, l.id).catch(e => {
                                    let {
                                        status: t
                                    } = e;
                                    429 === t ? u.default.show({
                                        title: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                                        body: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK_RATE_LIMIT
                                    }) : u.default.show({
                                        title: A.default.Messages.WEBHOOK_ERROR_DELETING_WEBHOOK,
                                        body: A.default.Messages.WEBHOOK_ERROR_INTERNAL_SERVER_ERROR
                                    })
                                })
                            },
                            children: (0, n.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: A.default.Messages.WEBHOOK_DELETE_BODY.format({
                                    name: l.name
                                })
                            })
                        }))
                    }, [l.guild_id, l.id, l.name]),
                    D = [];
                null != l.user ? D.push({
                    icon: E.default,
                    text: A.default.Messages.INTEGRATION_CREATED_USER_DATE.format({
                        user: R(l.user),
                        timestamp: h.default.extractTimestamp(l.id)
                    })
                }) : D.push({
                    icon: E.default,
                    text: A.default.Messages.INTEGRATION_CREATED_DATE.format({
                        timestamp: h.default.extractTimestamp(l.id)
                    })
                });
                let B = null;
                return S && null != i && (B = (0, n.jsxs)("div", {
                    className: C.body,
                    children: [(0, n.jsx)(d.FormDivider, {
                        className: C.topDivider
                    }), (0, n.jsxs)(m.default, {
                        children: [(0, n.jsx)(m.default.Child, {
                            shrink: 1,
                            grow: 0,
                            children: (0, n.jsxs)(m.default, {
                                className: C.avatarWrapper,
                                direction: m.default.Direction.VERTICAL,
                                children: [(0, n.jsx)(I.default, {
                                    image: i.avatar,
                                    onChange: e => {
                                        c.default.updateWebhook({
                                            avatar: e
                                        })
                                    },
                                    makeURL: e => x(l, e),
                                    imageClassName: C.avatarUploaderInner,
                                    showIcon: !0
                                }), null != M.avatar && "" !== M.avatar ? (0, n.jsx)(n.Fragment, {
                                    children: M.avatar
                                }) : null]
                            })
                        }), (0, n.jsxs)(m.default, {
                            direction: m.default.Direction.VERTICAL,
                            children: [(0, n.jsxs)(m.default, {
                                children: [(0, n.jsx)(m.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(d.FormItem, {
                                        title: A.default.Messages.WEBHOOK_FORM_NAME,
                                        children: (0, n.jsx)(d.TextInput, {
                                            value: i.name,
                                            onChange: e => {
                                                c.default.updateWebhook({
                                                    name: e
                                                })
                                            },
                                            maxLength: 80,
                                            error: M.name
                                        })
                                    })
                                }), (0, n.jsx)(m.default.Child, {
                                    basis: "50%",
                                    children: (0, n.jsx)(d.FormItem, {
                                        title: A.default.Messages.CHANNEL,
                                        children: (0, n.jsx)(d.SearchableSelect, {
                                            value: i.channel_id,
                                            options: T,
                                            onChange: e => {
                                                c.default.updateWebhook({
                                                    channelId: e
                                                })
                                            },
                                            placeholder: A.default.Messages.CHANNEL_SELECT
                                        })
                                    })
                                })]
                            }), (0, n.jsx)(d.FormDivider, {
                                className: C.bottomDivider
                            }), (0, n.jsxs)(m.default, {
                                children: [(0, n.jsx)(d.Tooltip, {
                                    text: A.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL,
                                    forceOpen: L,
                                    color: d.TooltipColors.GREEN,
                                    disableTooltipPointerEvents: !0,
                                    children: e => {
                                        let {
                                            onClick: t,
                                            onMouseEnter: a,
                                            onMouseLeave: i,
                                            ...s
                                        } = e;
                                        return (0, n.jsx)(d.Button, {
                                            ...s,
                                            onClick: () => {
                                                null == t || t(), j(!0), P.start(1e3, () => j(!1)), G()
                                            },
                                            size: d.Button.Sizes.SMALL,
                                            color: d.Button.Colors.PRIMARY,
                                            look: d.Button.Looks.FILLED,
                                            className: C.copyButton,
                                            disabled: null == l.token || "" === l.token,
                                            children: A.default.Messages.INTEGRATIONS_WEBHOOK_COPY_URL
                                        })
                                    }
                                }), (0, n.jsx)(d.Button, {
                                    onClick: y,
                                    size: d.Button.Sizes.SMALL,
                                    color: d.Button.Colors.RED,
                                    look: d.Button.Looks.LINK,
                                    children: A.default.Messages.INTEGRATIONS_WEBHOOK_DELETE
                                })]
                            })]
                        })]
                    })]
                })), (0, n.jsx)(d.Card, {
                    editable: !0,
                    id: t,
                    className: s(C.card, _ ? C.pulse : null),
                    children: (0, n.jsxs)(m.default, {
                        direction: m.default.Direction.VERTICAL,
                        children: [(0, n.jsx)(d.Clickable, {
                            className: C.header,
                            "aria-expanded": S,
                            onClick: v,
                            children: (0, n.jsxs)(m.default, {
                                align: m.default.Align.CENTER,
                                children: [(0, n.jsx)(g.default, {
                                    name: l.name,
                                    imageSrc: b,
                                    details: D
                                }), (0, n.jsx)(N.default, {
                                    className: C.expandIcon,
                                    expanded: S,
                                    "aria-hidden": !0
                                })]
                            })
                        }), B]
                    })
                })
            }
        },
        421475: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("77078"),
                s = l("713841"),
                r = l("679653"),
                o = l("27618"),
                d = l("697218"),
                u = l("280978"),
                c = l("87390"),
                f = l("49111"),
                I = l("782340"),
                T = l("808201");

            function m(e) {
                let {
                    webhooks: t,
                    selectableWebhookChannels: l,
                    lastCreatedWebhookId: m,
                    editedWebhook: N,
                    errors: E,
                    canNavigate: S
                } = e, p = a.useMemo(() => Object.values(l).map(e => ({
                    value: e.id,
                    label: (0, r.computeChannelName)(e, d.default, o.default, !0)
                })), [l]), h = a.useMemo(() => {
                    let e = {};
                    for (let n of t)
                        if (n.channel_id in e) e[n.channel_id].webhooks.push(n);
                        else {
                            let t = l[n.channel_id];
                            null != t && (e[n.channel_id] = {
                                channel: t,
                                webhooks: [n]
                            })
                        } return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name))
                }, [l, t]), _ = a.useCallback(e => {
                    if (S()) e === (null == N ? void 0 : N.id) ? s.default.stopEditingWebhook() : s.default.startEditingWebhook(e)
                }, [S, N]);
                return (0, n.jsx)("div", {
                    className: T.list,
                    children: h.map(e => {
                        let {
                            channel: t,
                            webhooks: l
                        } = e;
                        return function(e) {
                            let {
                                channel: t,
                                webhooks: l,
                                channelOptions: a,
                                lastCreatedWebhookId: s,
                                editedWebhook: m,
                                errors: N,
                                toggleWebhookExpand: E
                            } = e;
                            return (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(i.FormTitle, {
                                    className: T.groupHeader,
                                    children: I.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SECTION.format({
                                        channelHook: () => (0, n.jsx)("span", {
                                            className: T.channelName,
                                            children: (0, r.computeChannelName)(t, d.default, o.default, !0)
                                        }, t.id)
                                    })
                                }), l.map(e => {
                                    var t;
                                    if (e.type === f.WebhookTypes.CHANNEL_FOLLOWER) return (0, n.jsx)(u.default, {
                                        webhook: e,
                                        editedWebhook: m,
                                        channelOptions: a,
                                        isExpanded: (null == m ? void 0 : m.id) === e.id,
                                        onToggleExpand: () => E(e.id),
                                        errors: N
                                    }, e.id);
                                    return (0, n.jsx)(c.default, {
                                        id: (t = e.id, "settings-integrations-webhook-".concat(t)),
                                        webhook: e,
                                        editedWebhook: m,
                                        channelOptions: a,
                                        isExpanded: (null == m ? void 0 : m.id) === e.id,
                                        isNew: s === e.id,
                                        onToggleExpand: () => E(e.id),
                                        errors: N
                                    }, e.id)
                                })]
                            }, t.id)
                        }({
                            channel: t,
                            webhooks: l,
                            channelOptions: p,
                            lastCreatedWebhookId: m,
                            editedWebhook: N,
                            errors: E,
                            toggleWebhookExpand: _
                        })
                    })
                })
            }
        },
        730988: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var n = l("37983"),
                a = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("77078"),
                o = l("145131"),
                d = l("68927");
            class u extends a.PureComponent {
                render() {
                    let {
                        scrollable: e,
                        ...t
                    } = this.props;
                    return e ? (0, n.jsx)("aside", {
                        className: d.sidebarScrollable,
                        children: (0, n.jsx)(r.Scroller, {
                            fade: !0,
                            className: d.scroller,
                            children: (0, n.jsx)(o.default.Child, {
                                ...t,
                                wrap: !0
                            })
                        })
                    }) : (0, n.jsx)(o.default.Child, {
                        ...t,
                        wrap: !0
                    })
                }
            }
            u.defaultProps = {
                basis: 232,
                grow: 0,
                shrink: 0,
                className: d.sidebar
            };
            class c extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        ...t
                    } = this.props;
                    return (0, n.jsx)(o.default.Child, {
                        className: s(d.content, e),
                        wrap: !0,
                        ...t
                    })
                }
            }
            class f extends a.PureComponent {
                render() {
                    return (0, n.jsx)(o.default, {
                        ...this.props
                    })
                }
            }
            f.defaultProps = {
                className: d.layout,
                direction: o.default.Direction.HORIZONTAL,
                justify: o.default.Justify.START,
                align: o.default.Align.START,
                wrap: o.default.Wrap.NO_WRAP,
                shrink: 1,
                grow: 1,
                basis: "auto"
            }, f.Direction = o.default.Direction, f.Justify = o.default.Justify, f.Align = o.default.Align, f.Wrap = o.default.Wrap, f.Sidebar = u, f.Content = c;
            var I = f
        },
        822997: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                PermissionOverrideType: function() {
                    return a
                },
                default: function() {
                    return E
                }
            });
            var n, a, i = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                o = l("77078"),
                d = l("36694"),
                u = l("945330"),
                c = l("548775"),
                f = l("782340"),
                I = l("39185");
            (n = a || (a = {})).DENY = "DENY", n.PASSTHROUGH = "PASSTHROUGH", n.ALLOW = "ALLOW";
            let T = Object.keys(a);

            function m(e) {
                let {
                    value: t = a.PASSTHROUGH,
                    onChange: l,
                    labelledBy: n,
                    disabled: s = !1
                } = e, d = (0, o.useRadioGroup)({
                    orientation: "horizontal",
                    isDisabled: s,
                    labelledBy: n
                });
                return (0, i.jsx)("div", {
                    className: r(I.group, {
                        [I.disabled]: s
                    }),
                    ...d,
                    children: T.map(e => (0, i.jsx)(N, {
                        type: e,
                        isSelected: t === e,
                        onSelect: e => {
                            t !== e && !s && l(e)
                        }
                    }, e))
                })
            }

            function N(e) {
                let t, l, n, {
                    type: s,
                    onSelect: T,
                    isSelected: m
                } = e;
                switch (s) {
                    case a.DENY:
                        n = f.default.Messages.PERMISSION_OVERRIDE_DENY, t = u.default, l = I.deny;
                        break;
                    case a.ALLOW:
                        n = f.default.Messages.PERMISSION_OVERRIDE_ALLOW, t = d.default, l = I.allow;
                        break;
                    case a.PASSTHROUGH:
                    default:
                        n = f.default.Messages.PERMISSION_OVERRIDE_PASSTHROUGH, t = c.default, l = I.passthrough
                }
                let N = (0, o.useRadioItem)({
                    isSelected: m,
                    label: n
                });
                return (0, i.jsx)(o.Clickable, {
                    className: r(I.item, l, {
                        [I.selected]: m
                    }),
                    onClick: () => T(s),
                    ...N,
                    children: (0, i.jsx)(t, {
                        width: 16,
                        height: 16
                    })
                })
            }
            m.Types = a;
            var E = m
        },
        350625: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                i = l("701909"),
                s = l("145131"),
                r = l("822997"),
                o = l("476765"),
                d = l("782340"),
                u = l("926622");

            function c(e) {
                let {
                    value: t,
                    onChange: l,
                    children: c,
                    note: f,
                    helpdeskArticleId: I,
                    style: T,
                    disabled: m = !1,
                    hideBorder: N = !1,
                    className: E = u.marginBottom20
                } = e, S = (0, o.useUID)();
                return (0, n.jsxs)(s.default, {
                    style: T,
                    className: E,
                    direction: s.default.Direction.VERTICAL,
                    children: [(0, n.jsxs)(s.default, {
                        children: [(0, n.jsx)(s.default.Child, {
                            children: (0, n.jsx)(a.FormTitle, {
                                id: S,
                                className: u.marginReset,
                                tag: a.FormTitleTags.H3,
                                disabled: m,
                                children: c
                            })
                        }), (0, n.jsx)(s.default.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, n.jsx)(r.default, {
                                value: t,
                                onChange: l,
                                disabled: m,
                                labelledBy: S
                            })
                        })]
                    }), null != f && (0, n.jsx)(s.default.Child, {
                        className: u.marginTop4,
                        children: (0, n.jsx)(a.FormText, {
                            type: a.FormTextTypes.DESCRIPTION,
                            children: f
                        })
                    }), null != I && (0, n.jsx)(s.default.Child, {
                        className: u.marginTop4,
                        children: (0, n.jsx)(a.FormText, {
                            disabled: m,
                            type: a.FormTextTypes.DESCRIPTION,
                            children: (0, n.jsx)(a.Anchor, {
                                href: i.default.getArticleURL(I),
                                children: d.default.Messages.LEARN_MORE
                            })
                        })
                    }), !N && (0, n.jsx)(s.default.Child, {
                        className: u.marginTop20,
                        children: (0, n.jsx)(a.FormDivider, {})
                    })]
                })
            }
            r.default.Types, c.Types = r.default.Types
        },
        17837: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                i = l("605141"),
                s = l("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 16 17",
                        children: (0, n.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: i,
                            d: "M5.33333 12.9713H3.33333C2.598 12.9713 2 12.3726 2 11.6379V2.97127C2 2.23661 2.598 1.63794 3.33333 1.63794H10.6667C11.402 1.63794 12 2.23661 12 2.97127V4.97127H6.66667C5.93133 4.97127 5.33333 5.56994 5.33333 6.30461V12.9713ZM8 6.30461H12.6667C13.402 6.30461 14 6.90327 14 7.63794V13.6379C14 14.3733 13.402 14.9713 12.6667 14.9713H8C7.26467 14.9713 6.66667 14.3733 6.66667 13.6379V7.63794C6.66667 6.90327 7.26467 6.30461 8 6.30461ZM10.6667 8.30461H8V8.97127H10.6667V8.30461ZM8 12.9713H12.6667V12.3046H8V12.9713ZM8 10.9713H12.6667V10.3046H8V10.9713Z"
                        })
                    })
                }, i.PaperIcon)
        },
        295810: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                i = l("202084"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        className: i,
                        foreground: s
                    } = e;
                    return (0, n.jsx)("svg", {
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        className: i,
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            fill: a,
                            className: s,
                            d: "M20 1.707V4.293L16.707 1L15.293 2.414L18.586 5.707H16V7.707H22V1.707H20ZM5 14.707H8V8.70697C8 7.60497 8.897 6.70697 10 6.70697H14V3.70697C14 2.60497 13.103 1.70697 12 1.70697H5C3.897 1.70697 3 2.60497 3 3.70697V12.707C3 13.809 3.897 14.707 5 14.707ZM12 8.70697H19C20.103 8.70697 21 9.60497 21 10.707V19.707C21 20.81 20.103 21.707 19 21.707H12C10.897 21.707 10 20.81 10 19.707V10.707C10 9.60497 10.897 8.70697 12 8.70697ZM16 12.707V11.707H12V12.707H16ZM12 18.707H19V17.707H12V18.707ZM12 15.707H19V14.707H12V15.707Z"
                        })
                    })
                }, i.ChannelsFollowedIcon)
        },
        429893: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                i = l.n(a),
                s = l("75196"),
                r = l("592353");

            function o(e) {
                let {
                    width: t = 16,
                    height: l = 16,
                    color: a = "currentColor",
                    foreground: o,
                    className: d,
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    className: i(r.updateAvailable, d),
                    ...(0, s.default)(u),
                    width: t,
                    height: l,
                    viewBox: "0 0 24 24",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            fill: a,
                            className: o,
                            fillRule: "nonzero",
                            d: "M5,8 L9,12 L6,12 C6,15.31 8.69,18 12,18 C13.01,18 13.97,17.75 14.8,17.3 L16.26,18.76 C15.03,19.54 13.57,20 12,20 C7.58,20 4,16.42 4,12 L1,12 L5,8 Z M18,12 C18,8.69 15.31,6 12,6 C10.99,6 10.03,6.25 9.2,6.7 L7.74,5.24 C8.97,4.46 10.43,4 12,4 C16.42,4 20,7.58 20,12 L23,12 L19,16 L15,12 L18,12 Z"
                        }), (0, n.jsx)("polygon", {
                            points: "24 0 0 0 0 24 24 24"
                        })]
                    })
                })
            }
        },
        741919: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                i = l("99637"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        className: i,
                        foreground: s
                    } = e;
                    return (0, n.jsxs)("svg", {
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        className: i,
                        children: [(0, n.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M11 10.9C11 10.9 11 10.9 11 10.9V8.82929C9.83481 8.41746 9 7.30622 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6H17C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6C7 7.79499 7.94587 9.36906 9.36637 10.251L6.29491 16.0216C6.19867 16.0074 6.1002 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20C6.82012 20 7.52495 19.5064 7.83358 18.8H16.1664C16.475 19.5064 17.1799 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C17.1799 16 16.475 16.4936 16.1664 17.2H7.83359C7.82844 17.1882 7.82318 17.1765 7.81781 17.1648L11 10.9Z"
                        }), (0, n.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.43529 13.8609 6.8381 13.6248 7.16643L18 13C20.7614 13 23 15.2386 23 18C23 20.7614 20.7614 23 18 23C15.9497 23 14.1876 21.7659 13.416 20H15.7639C16.3132 20.6138 17.1115 21 18 21C19.6568 21 21 19.6569 21 18C21 16.3431 19.6568 15 18 15H17L12 8Z"
                        }), (0, n.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M10.584 20C9.8124 21.7659 8.05032 23 6 23C3.23858 23 1 20.7614 1 18C1 15.2386 3.23858 13 6 13V15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C6.8885 21 7.68679 20.6138 8.23611 20H10.584Z"
                        })]
                    })
                }, i.WebhookIcon)
        }
    }
]);