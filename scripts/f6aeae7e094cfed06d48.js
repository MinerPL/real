(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55312"], {
        962429: function(e, t, s) {
            "use strict";

            function i(e, t) {
                if (e.length !== t.length) return !1;
                for (let s = 0; s < t.length && s < e.length; s++)
                    if (!Object.is(e[s], t[s])) return !1;
                return !0
            }
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            })
        },
        365444: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useForceUpdate: function() {
                    return i.default
                },
                useStableMemo: function() {
                    return n.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var i = s("732427"),
                n = s("866490"),
                a = s("246105")
        },
        732427: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var i = s("773670");

            function n() {
                let [, e] = (0, i.useState)({});
                return (0, i.useCallback)(() => e({}), [])
            }
        },
        246105: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var i = s("773670");
            let n = {};

            function a(e) {
                let t = (0, i.useRef)(n);
                return t.current === n && (t.current = e()), t.current
            }
        },
        866490: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var i = s("773670"),
                n = s("962429");
            let a = [];

            function l(e, t) {
                let s = (0, i.useRef)(),
                    l = (0, i.useRef)(a);
                return l.current === a ? (s.current = e(), l.current = t) : !(0, n.default)(t, l.current) && (s.current = e(), l.current = t), s.current
            }
        },
        175717: function(e, t, s) {
            "use strict";
            e.exports = s.p + "5c6d065bc415e23ab4df.svg"
        },
        929887: function(e, t, s) {
            "use strict";
            e.exports = s.p + "b024d0fd63aa42ba8670.png"
        },
        741161: function(e, t, s) {
            "use strict";
            e.exports = s.p + "58bf98682d30fb823326.svg"
        },
        687444: function(e, t, s) {
            "use strict";
            e.exports = s.p + "090a89c5314322102655.svg"
        },
        492094: function(e, t, s) {
            "use strict";
            e.exports = s.p + "a5049a603d8eebb8d728.svg"
        },
        300933: function(e, t, s) {
            "use strict";
            e.exports = s.p + "15253e2e8b246b57f156.svg"
        },
        499474: function(e, t, s) {
            "use strict";
            e.exports = s.p + "e30b03b1854a7d11fb6d.svg"
        },
        576285: function(e, t, s) {
            "use strict";
            e.exports = s.p + "e8c9df78765487a284b7.svg"
        },
        225389: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CircleInformationIcon: function() {
                    return l
                }
            });
            var i = s("920040");
            s("773670");
            var n = s("912557"),
                a = s("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: l = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    secondaryColor: o = "transparent",
                    secondaryColorClass: E = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: r
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm.478 2.71a1 1 0 0 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: E
                    })]
                })
            }
        },
        402309: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useIsMassMentionsDefaultDisabledExperiment: function() {
                    return o
                },
                useCanCurrentUserViewDisableUnsafeGuildSettingsNotice: function() {
                    return E
                }
            });
            var i = s("498225"),
                n = s("862205"),
                a = s("957255"),
                l = s("49111");
            let r = (0, n.createExperiment)({
                kind: "guild",
                id: "2022-11_default_disable_mass_mention",
                label: "Disable mass mentions for communities by default",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function o(e) {
                return r.useExperiment({
                    guildId: e,
                    location: "dd4beb_1"
                }, {
                    autoTrackExposure: !0
                })
            }

            function E(e) {
                var t;
                let s = (0, i.useStateFromStores)([a.default], () => a.default.can(l.Permissions.MANAGE_GUILD, e)),
                    {
                        enabled: n
                    } = r.useExperiment({
                        guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                        location: "dd4beb_3"
                    }, {
                        autoTrackExposure: !0
                    });
                if (null == e) return !1;
                let o = e.hasFeature(l.GuildFeatures.COMMUNITY);
                return s && o && n
            }
        },
        70919: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                fetchRoleConnectionsConfiguration: function() {
                    return r
                },
                putRoleConnectionsConfigurations: function() {
                    return o
                },
                fetchUserApplicationRoleConnections: function() {
                    return E
                }
            });
            var i = s("990746"),
                n = s("913144"),
                a = s("895026"),
                l = s("49111");

            function r(e, t) {
                i.default.get({
                    url: l.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
                }).then(e => {
                    let s = [];
                    e.body.length > 0 && (s = e.body.map(e => e.map(e => ({
                        connectionType: e.connection_type,
                        connectionMetadataField: e.connection_metadata_field,
                        applicationId: e.application_id,
                        operator: e.operator,
                        value: e.value
                    })))), n.default.dispatch({
                        type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                        roleId: t,
                        roleConnectionConfigurations: s
                    })
                }).catch(() => {})
            }
            async function o(e, t, s) {
                let r = s.map(e => e.map(e => ({
                        connection_type: e.connectionType,
                        connection_metadata_field: e.connectionMetadataField,
                        application_id: e.applicationId,
                        operator: e.operator,
                        value: e.value
                    }))),
                    o = await i.default.put({
                        url: l.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
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
                    E = await (0, a.requestMembersForRole)(e, t, !1);
                null != E && n.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                    guildId: e,
                    roleId: t,
                    count: E
                }), n.default.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                    roleId: t,
                    roleConnectionConfigurations: o
                })
            }
            async function E() {
                let e = await i.default.get({
                    url: l.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS
                });
                return e.body
            }
        },
        292418: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("347924"),
                n = s("701909"),
                a = s("49111"),
                l = s("782340");

            function r(e) {
                let t = (0, i.useInServerBadgingExperiment)(null != e ? e : ""),
                    s = l.default.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format({
                        communityGuidelines: n.default.getArticleURL(a.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES),
                        typesOfGuilds: n.default.getArticleURL(a.HelpdeskArticles.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                    }),
                    r = l.default.Messages.COMMUNITY_POLICY_HELP.format({
                        helpdeskArticle: n.default.getArticleURL(a.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES)
                    });
                return t && null != e ? s : r
            }
        },
        347924: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useInServerBadgingExperiment: function() {
                    return a
                }
            });
            var i = s("862205");
            let n = (0, i.createExperiment)({
                kind: "guild",
                id: "2023-04_server_badging",
                label: "Server Badging",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Server Badging",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function a(e) {
                let {
                    enabled: t
                } = n.useExperiment({
                    guildId: e,
                    location: "482926_1"
                }, {
                    autoTrackExposure: !1
                });
                return t
            }
        },
        895026: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                fetchMemberCounts: function() {
                    return d
                },
                requestMembersForRole: function() {
                    return c
                }
            });
            var i = s("703275"),
                n = s.n(i),
                a = s("990746"),
                l = s("913144"),
                r = s("851387"),
                o = s("36402"),
                E = s("49111");
            async function u(e) {
                try {
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await a.default.get({
                            url: E.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        s = t.body;
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: s
                    })
                } catch (t) {
                    l.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function d(e) {
                o.default.shouldFetch(e) && await u(e)
            }
            let _ = new n({
                maxAge: 1e4
            });

            function c(e, t) {
                let s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = "".concat(e, "-").concat(t);
                if (!s || null == _.get(i)) {
                    var n, l;
                    return _.set(i, !0), n = e, l = t, a.default.get({
                        url: E.Endpoints.GUILD_ROLE_MEMBER_IDS(n, l)
                    }).then(e => (r.default.requestMembersById(n, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var i = s("498225"),
                n = s("913144");
            let a = {},
                l = {};
            class r extends i.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? a[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = l[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            r.displayName = "GuildRoleMemberCountStore";
            var o = new r(n.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: s
                    } = e;
                    a[t] = s, l[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: s,
                        count: i
                    } = e, n = a[t];
                    if (null == n) return !1;
                    n[s] = i
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: s,
                        added: i
                    } = e, n = a[t];
                    if (null == n || null == n[s]) return !1;
                    let l = Object.keys(i).length;
                    n[s] += l
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: s
                    } = e, i = a[t];
                    if (null == i || null == i[s]) return !1;
                    i[s] = i[s] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: s
                    } = e, i = a[t];
                    if (null == i || null == i[s]) return !1;
                    i[s] = Math.max(i[s] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: s
                    } = e;
                    null == a[t] && (a[t] = {}), a[t][s.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete a[t.id], delete l[t.id]
                }
            })
        },
        766419: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                updateRoleSort: function() {
                    return l
                },
                init: function() {
                    return r
                },
                updateRolePermissions: function() {
                    return o
                },
                clearRolePermissions: function() {
                    return E
                },
                updateRoleName: function() {
                    return u
                },
                updateRoleColor: function() {
                    return d
                },
                toggleRoleSettings: function() {
                    return _
                },
                updateRoleIcon: function() {
                    return c
                },
                updateRoleConnectionConfigurations: function() {
                    return S
                },
                saveRoleSettings: function() {
                    return N
                }
            });
            var i = s("913144"),
                n = s("851387"),
                a = s("70919");

            function l(e) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
                    roles: e
                })
            }

            function r() {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_INIT"
                })
            }

            function o(e, t, s) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
                    id: e,
                    flag: t,
                    allow: s
                })
            }

            function E(e) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
                    id: e
                })
            }

            function u(e, t) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
                    id: e,
                    name: t
                })
            }

            function d(e, t) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
                    id: e,
                    color: t
                })
            }

            function _(e, t, s) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
                    id: e,
                    hoist: t,
                    mentionable: s
                })
            }

            function c(e, t, s) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
                    id: e,
                    icon: t,
                    unicodeEmoji: s
                })
            }

            function S(e, t) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
                    roleId: e,
                    roleConnectionConfigurations: t
                })
            }
            async function N(e, t, s, l, r) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
                });
                try {
                    let i = async () => {
                        if (null == t || 0 === t.length) return;
                        let s = t.pop();
                        if (null == s || "" === s.name) return i();
                        await n.default.updateRole(e, s.id, {
                            name: s.name,
                            description: s.description,
                            permissions: s.permissions,
                            color: s.color,
                            hoist: s.hoist,
                            mentionable: s.mentionable,
                            icon: s.icon,
                            unicodeEmoji: s.unicodeEmoji
                        }).then(i, i)
                    };
                    if (null != s && s.length > 0 ? await n.default.batchRoleUpdate(e, s).then(i, i) : await i(), null != r && null != l)
                        for await (let t of l) {
                            let s = r.get(t);
                            await (0, a.putRoleConnectionsConfigurations)(e, t, null != s ? s : [])
                        }
                } catch (e) {
                    var o, E;
                    i.default.dispatch({
                        type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                        message: null !== (E = null === (o = e.body) || void 0 === o ? void 0 : o.message) && void 0 !== E ? E : Object.values(e.body)[0]
                    });
                    return
                }
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
                })
            }
        },
        25116: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            });
            var i = s("49111");

            function n(e) {
                return e.type === i.MessageTypes.DEFAULT && null != e.messageReference
            }
        },
        610903: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var i = s("920040"),
                n = s("773670"),
                a = s("575482"),
                l = s.n(a),
                r = s("77078"),
                o = s("476765"),
                E = s("782340"),
                u = s("325364");
            let d = e => {
                let {
                    index: t,
                    title: s,
                    selected: n
                } = e;
                return (0, i.jsxs)("div", {
                    className: l(u.overviewStep, {
                        [u.selected]: n
                    }),
                    children: [(0, i.jsx)(r.Text, {
                        className: u.stepIndex,
                        variant: "text-sm/normal",
                        children: t + 1
                    }), (0, i.jsx)(r.Text, {
                        variant: "text-md/normal",
                        className: u.stepTitle,
                        children: s
                    })]
                })
            };
            var _ = e => {
                let {
                    className: t,
                    title: s,
                    stepData: a,
                    transitionState: _,
                    onClose: c,
                    completeButtonText: S,
                    overviewFooter: N,
                    onNextPressed: M,
                    onPrevPressed: I,
                    onComplete: T,
                    sequencerClassName: f,
                    initialStep: A = 0,
                    forceStep: m,
                    submitting: O = !1,
                    autoCloseOnComplete: L = !0
                } = e, [C, R] = n.useState([]), [g, p] = n.useState(A), D = (0, o.useUID)();
                n.useEffect(() => {
                    R([...Array(a.length).keys()])
                }, [a.length]);
                let P = null != m ? m : g,
                    h = a[P],
                    x = 0 === P,
                    U = P === a.length - 1,
                    v = null != S ? S : E.default.Messages.DONE,
                    G = n.useCallback(() => {
                        null == I || I(), p(P - 1)
                    }, [I, P, p]);
                return (0, i.jsxs)(r.ModalRoot, {
                    size: r.ModalSize.MEDIUM,
                    className: l(u.container, t),
                    transitionState: _,
                    "aria-labelledby": D,
                    children: [(0, i.jsxs)("div", {
                        className: u.overviewSidebar,
                        children: [(0, i.jsx)(r.Heading, {
                            id: D,
                            variant: "heading-xl/semibold",
                            className: u.header,
                            children: s
                        }), (0, i.jsx)("div", {
                            className: u.overviewSteps,
                            children: a.map((e, t) => (0, i.jsx)(d, {
                                index: t,
                                title: e.overviewTitle,
                                selected: t === P
                            }, t))
                        }), N]
                    }), (0, i.jsxs)("div", {
                        className: u.modal,
                        children: [(0, i.jsxs)(r.ModalContent, {
                            children: [(0, i.jsx)(r.ModalCloseButton, {
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        right: 4,
                                        left: 4
                                    }
                                },
                                onClick: c,
                                className: u.closeButton
                            }), (0, i.jsx)(r.Sequencer, {
                                step: P,
                                steps: C,
                                sideMargin: 24,
                                verticalMargin: 24,
                                className: l(u.sequencer, f),
                                innerClassName: u.innerSequencer,
                                children: h.modalContent
                            })]
                        }), (0, i.jsxs)(r.ModalFooter, {
                            className: u.footer,
                            children: [(0, i.jsx)(r.Button, {
                                type: "submit",
                                submitting: O,
                                onClick: () => {
                                    if (U) T(), L && c();
                                    else null == M || M(), p(P + 1)
                                },
                                color: r.Button.Colors.GREEN,
                                disabled: h.disableNextStep,
                                children: U ? v : E.default.Messages.NEXT
                            }), x ? null : (0, i.jsx)(r.Button, {
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                size: r.Button.Sizes.MIN,
                                onClick: G,
                                children: E.default.Messages.BACK
                            })]
                        })]
                    })]
                })
            }
        },
        978970: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                OrderedPermissions: function() {
                    return l
                },
                containsDisallowedPermission: function() {
                    return r
                },
                getPermissionName: function() {
                    return E
                }
            });
            var i = s("754013"),
                n = s("49111"),
                a = s("782340");
            let l = [n.Permissions.ADMINISTRATOR, n.Permissions.MANAGE_GUILD, n.Permissions.MANAGE_ROLES, n.Permissions.MANAGE_CHANNELS, n.Permissions.KICK_MEMBERS, n.Permissions.BAN_MEMBERS, n.Permissions.CREATE_INSTANT_INVITE, n.Permissions.MANAGE_NICKNAMES, n.Permissions.CHANGE_NICKNAME, n.Permissions.MANAGE_GUILD_EXPRESSIONS, n.Permissions.CREATE_GUILD_EXPRESSIONS, n.Permissions.MANAGE_WEBHOOKS, n.Permissions.VIEW_AUDIT_LOG, n.Permissions.VIEW_CHANNEL, n.Permissions.MANAGE_EVENTS, n.Permissions.CREATE_EVENTS, n.Permissions.MODERATE_MEMBERS, n.Permissions.VIEW_GUILD_ANALYTICS, n.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS, n.Permissions.SEND_MESSAGES, n.Permissions.SEND_MESSAGES_IN_THREADS, n.Permissions.CREATE_PUBLIC_THREADS, n.Permissions.CREATE_PRIVATE_THREADS, n.Permissions.SEND_TTS_MESSAGES, n.Permissions.MANAGE_MESSAGES, n.Permissions.MANAGE_THREADS, n.Permissions.EMBED_LINKS, n.Permissions.ATTACH_FILES, n.Permissions.READ_MESSAGE_HISTORY, n.Permissions.MENTION_EVERYONE, n.Permissions.ADD_REACTIONS, n.Permissions.USE_EXTERNAL_EMOJIS, n.Permissions.USE_EXTERNAL_STICKERS, n.Permissions.USE_APPLICATION_COMMANDS, n.Permissions.SEND_VOICE_MESSAGES, n.Permissions.USE_CLYDE_AI, n.Permissions.CONNECT, n.Permissions.SPEAK, n.Permissions.MUTE_MEMBERS, n.Permissions.DEAFEN_MEMBERS, n.Permissions.MOVE_MEMBERS, n.Permissions.USE_VAD, n.Permissions.PRIORITY_SPEAKER, n.Permissions.REQUEST_TO_SPEAK, n.Permissions.STREAM, n.Permissions.USE_EMBEDDED_ACTIVITIES, n.Permissions.USE_SOUNDBOARD, n.Permissions.USE_EXTERNAL_SOUNDS, n.Permissions.SET_VOICE_CHANNEL_STATUS];

            function r(e) {
                return Object.values(n.Permissions).some(t => i.default.has(e, t) && !l.includes(t))
            }
            let o = {
                [n.Permissions.ADMINISTRATOR.toString()]: () => a.default.Messages.ADMINISTRATOR,
                [n.Permissions.MANAGE_GUILD.toString()]: () => a.default.Messages.MANAGE_SERVER,
                [n.Permissions.MANAGE_ROLES.toString()]: () => a.default.Messages.MANAGE_ROLES,
                [n.Permissions.MANAGE_CHANNELS.toString()]: () => a.default.Messages.MANAGE_CHANNELS,
                [n.Permissions.KICK_MEMBERS.toString()]: () => a.default.Messages.KICK_MEMBERS,
                [n.Permissions.BAN_MEMBERS.toString()]: () => a.default.Messages.BAN_MEMBERS,
                [n.Permissions.CREATE_INSTANT_INVITE.toString()]: () => a.default.Messages.CREATE_INSTANT_INVITE,
                [n.Permissions.MANAGE_NICKNAMES.toString()]: () => a.default.Messages.MANAGE_NICKNAMES,
                [n.Permissions.CHANGE_NICKNAME.toString()]: () => a.default.Messages.CHANGE_NICKNAME,
                [n.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: () => a.default.Messages.MANAGE_EXPRESSIONS,
                [n.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: () => a.default.Messages.CREATE_EXPRESSIONS,
                [n.Permissions.MANAGE_WEBHOOKS.toString()]: () => a.default.Messages.MANAGE_WEBHOOKS,
                [n.Permissions.VIEW_AUDIT_LOG.toString()]: () => a.default.Messages.VIEW_AUDIT_LOG,
                [n.Permissions.VIEW_CHANNEL.toString()]: () => a.default.Messages.READ_MESSAGES,
                [n.Permissions.SEND_MESSAGES.toString()]: () => a.default.Messages.SEND_MESSAGES,
                [n.Permissions.SEND_TTS_MESSAGES.toString()]: () => a.default.Messages.SEND_TTS_MESSAGES,
                [n.Permissions.MANAGE_MESSAGES.toString()]: () => a.default.Messages.MANAGE_MESSAGES,
                [n.Permissions.EMBED_LINKS.toString()]: () => a.default.Messages.EMBED_LINKS,
                [n.Permissions.ATTACH_FILES.toString()]: () => a.default.Messages.ATTACH_FILES,
                [n.Permissions.READ_MESSAGE_HISTORY.toString()]: () => a.default.Messages.READ_MESSAGE_HISTORY,
                [n.Permissions.MENTION_EVERYONE.toString()]: () => a.default.Messages.MENTION_EVERYONE,
                [n.Permissions.ADD_REACTIONS.toString()]: () => a.default.Messages.ADD_REACTIONS,
                [n.Permissions.USE_EXTERNAL_EMOJIS.toString()]: () => a.default.Messages.USE_EXTERNAL_EMOJIS,
                [n.Permissions.USE_EXTERNAL_STICKERS.toString()]: () => a.default.Messages.USE_EXTERNAL_STICKERS,
                [n.Permissions.USE_APPLICATION_COMMANDS.toString()]: () => a.default.Messages.USE_APPLICATION_COMMANDS,
                [n.Permissions.SEND_VOICE_MESSAGES.toString()]: () => a.default.Messages.SEND_VOICE_MESSAGE,
                [n.Permissions.CONNECT.toString()]: () => a.default.Messages.CONNECT,
                [n.Permissions.SPEAK.toString()]: () => a.default.Messages.SPEAK,
                [n.Permissions.MUTE_MEMBERS.toString()]: () => a.default.Messages.MUTE_MEMBERS,
                [n.Permissions.DEAFEN_MEMBERS.toString()]: () => a.default.Messages.DEAFEN_MEMBERS,
                [n.Permissions.MOVE_MEMBERS.toString()]: () => a.default.Messages.MOVE_MEMBERS,
                [n.Permissions.USE_VAD.toString()]: () => a.default.Messages.USE_VAD,
                [n.Permissions.PRIORITY_SPEAKER.toString()]: () => a.default.Messages.PRIORITY_SPEAKER,
                [n.Permissions.CREATE_PUBLIC_THREADS.toString()]: () => a.default.Messages.CREATE_PUBLIC_THREADS,
                [n.Permissions.CREATE_PRIVATE_THREADS.toString()]: () => a.default.Messages.CREATE_PRIVATE_THREADS,
                [n.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: () => a.default.Messages.SEND_MESSAGES_IN_THREADS,
                [n.Permissions.MANAGE_THREADS.toString()]: () => a.default.Messages.MANAGE_THREADS,
                [n.Permissions.MANAGE_EVENTS.toString()]: () => a.default.Messages.MANAGE_EVENTS,
                [n.Permissions.CREATE_EVENTS.toString()]: () => a.default.Messages.CREATE_EVENTS,
                [n.Permissions.MODERATE_MEMBERS.toString()]: () => a.default.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL,
                [n.Permissions.REQUEST_TO_SPEAK.toString()]: () => a.default.Messages.REQUEST_TO_SPEAK,
                [n.Permissions.VIEW_GUILD_ANALYTICS.toString()]: () => a.default.Messages.VIEW_GUILD_ANALYTICS,
                [n.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => a.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
                [n.Permissions.STREAM.toString()]: () => a.default.Messages.VIDEO,
                [n.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: () => a.default.Messages.USE_EMBEDDED_ACTIVITIES,
                [n.Permissions.USE_SOUNDBOARD.toString()]: () => a.default.Messages.USE_SOUNDBOARD,
                [n.Permissions.USE_EXTERNAL_SOUNDS.toString()]: () => a.default.Messages.USE_EXTERNAL_SOUNDS,
                [n.Permissions.USE_CLYDE_AI.toString()]: () => a.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                [n.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: () => a.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
            };

            function E(e) {
                let t = e.toString(),
                    s = o[t];
                if (null == s) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
                return s()
            }
        },
        730541: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                isPublicSystemMessage: function() {
                    return E
                },
                getPublicSystemMessageAvatar: function() {
                    return u
                },
                trackEnableCommunityFlow: function() {
                    return d
                }
            });
            var i = s("716241"),
                n = s("25116"),
                a = s("599110"),
                l = s("69741"),
                r = s("49111"),
                o = s("929887");

            function E(e) {
                return (0, n.default)(e) && e.messageReference.guild_id === l.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID || null != e.author && e.author.id === l.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID
            }

            function u() {
                return o
            }
            let d = e => {
                a.default.track(r.AnalyticEvents.USER_FLOW_TRANSITION, {
                    flow_type: l.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
                    from_step: e.fromStep,
                    to_step: e.toStep,
                    ...(0, i.collectGuildAnalyticsMetadata)(e.guildId)
                })
            }
        },
        79536: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return q
                }
            });
            var i = s("920040"),
                n = s("773670"),
                a = s("575482"),
                l = s.n(a),
                r = s("754013"),
                o = s("498225"),
                E = s("912557"),
                u = s("819855"),
                d = s("77078"),
                _ = s("402309"),
                c = s("679653"),
                S = s("292418"),
                N = s("592407"),
                M = s("766419"),
                I = s("900938"),
                T = s("610903"),
                f = s("978970"),
                A = s("161778"),
                m = s("923959"),
                O = s("305961"),
                L = s("27618"),
                C = s("697218"),
                R = s("476765"),
                g = s("578706"),
                p = s("68238"),
                D = s("599110"),
                P = s("991170"),
                h = s("730541"),
                x = s("69741"),
                U = s("49111"),
                v = s("782340"),
                G = s("831001"),
                B = s("741161"),
                b = s("687444"),
                j = s("492094"),
                y = s("300933"),
                F = s("499474"),
                Y = s("576285"),
                V = s("175717");
            let H = e => {
                    let {
                        guild: t,
                        onAcceptVerificationLevel: s,
                        onAcceptContentFilter: n,
                        disableContentFilter: a,
                        disableVerificationLevel: l,
                        headerId: r,
                        theme: E
                    } = e, _ = (0, o.useStateFromStores)([O.default], () => O.default.getGuild(t.id), [t.id]), c = null != _ && _.verificationLevel > U.VerificationLevels.NONE, S = (null == _ ? void 0 : _.explicitContentFilter) === U.GuildExplicitContentFilterTypes.ALL_MEMBERS, N = (0, u.isThemeDark)(E) ? F : Y;
                    return (0, i.jsxs)("div", {
                        className: G.container,
                        children: [(0, i.jsxs)("div", {
                            className: G.content,
                            children: [(0, i.jsx)("img", {
                                alt: "",
                                src: N,
                                width: 80
                            }), (0, i.jsx)(d.Heading, {
                                variant: "heading-xl/semibold",
                                className: G.header,
                                id: r,
                                children: v.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_HEADER
                            }), (0, i.jsx)(d.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: G.headerCaption,
                                children: v.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_BODY
                            })]
                        }), (0, i.jsxs)("div", {
                            className: G.form,
                            children: [(0, i.jsx)(d.FormTitle, {
                                children: v.default.Messages.FORM_LABEL_VERIFICATION_LEVEL
                            }), (0, i.jsx)(d.FormText, {
                                type: d.FormTextTypes.DESCRIPTION,
                                className: G.description,
                                children: c ? v.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_MET : v.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_HELP
                            }), (0, i.jsx)(d.Checkbox, {
                                type: d.Checkbox.Types.ROW,
                                disabled: l,
                                value: t.verificationLevel > U.VerificationLevels.NONE,
                                onChange: s,
                                children: (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: v.default.Messages.ENABLE_PUBLIC_MODAL_VERIFICATION_LEVEL_DESCRIPTION
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: G.form,
                            children: [(0, i.jsx)(d.FormTitle, {
                                children: v.default.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER
                            }), (0, i.jsx)(d.FormText, {
                                type: d.FormTextTypes.DESCRIPTION,
                                className: G.description,
                                children: S ? v.default.Messages.ENABLE_COMMUNITY_MODAL_CONTENT_FILTER_MET : v.default.Messages.ENABLE_PUBLIC_MODAL_CONTENT_FILTER_HELP
                            }), (0, i.jsx)(d.Checkbox, {
                                type: d.Checkbox.Types.ROW,
                                disabled: a,
                                value: t.explicitContentFilter === U.GuildExplicitContentFilterTypes.ALL_MEMBERS,
                                onChange: n,
                                children: (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: v.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH
                                })
                            })]
                        })]
                    })
                },
                w = e => {
                    let {
                        selectableChannels: t,
                        onRuleChannelChange: s,
                        ruleChannel: a,
                        onPublicUpdatesChannelChange: l,
                        publicUpdatesChannel: r,
                        headerId: o,
                        theme: E,
                        guildId: _
                    } = e;
                    n.useEffect(() => {
                        (0, h.trackEnableCommunityFlow)({
                            fromStep: x.EnableCommunityModalSteps.SAFETY_CHECK,
                            toStep: x.EnableCommunityModalSteps.BASICS,
                            guildId: _
                        })
                    }, [_]);
                    let c = (0, u.isThemeDark)(E) ? B : b;
                    return (0, i.jsxs)("div", {
                        className: G.container,
                        children: [(0, i.jsxs)("div", {
                            className: G.content,
                            children: [(0, i.jsx)("img", {
                                alt: "",
                                src: c,
                                width: 80
                            }), (0, i.jsx)(d.Heading, {
                                variant: "heading-xl/semibold",
                                className: G.header,
                                id: o,
                                children: v.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_HEADER
                            }), (0, i.jsx)(d.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: G.headerCaption,
                                children: v.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_BODY
                            })]
                        }), (0, i.jsxs)("div", {
                            className: G.form,
                            children: [(0, i.jsx)(d.FormTitle, {
                                children: v.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_TITLE
                            }), (0, i.jsx)(d.FormText, {
                                type: d.FormTextTypes.DESCRIPTION,
                                className: G.description,
                                children: v.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_HELP
                            }), (0, i.jsx)(d.SearchableSelect, {
                                options: t,
                                onChange: s,
                                value: a,
                                maxVisibleItems: 4
                            })]
                        }), (0, i.jsxs)("div", {
                            className: G.form,
                            children: [(0, i.jsx)(d.FormTitle, {
                                children: v.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
                            }), (0, i.jsx)(d.FormText, {
                                type: d.FormTextTypes.DESCRIPTION,
                                className: G.description,
                                children: v.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
                            }), (0, i.jsx)(d.SearchableSelect, {
                                options: t,
                                onChange: l,
                                value: r,
                                popoutPosition: "top",
                                maxVisibleItems: 4
                            })]
                        })]
                    })
                },
                k = e => {
                    let {
                        guild: t,
                        policyAccepted: s,
                        everyoneRolePermissionsAccepted: a,
                        onAcceptPolicy: r,
                        onAcceptDefaultNotifications: o,
                        onAcceptEveryoneRolePermissions: E,
                        disableDefaultNotifications: _,
                        disableEveryoneRolePermissions: c,
                        headerId: N,
                        theme: M
                    } = e, I = (0, u.isThemeDark)(M) ? j : y;
                    n.useEffect(() => {
                        (0, h.trackEnableCommunityFlow)({
                            fromStep: x.EnableCommunityModalSteps.BASICS,
                            toStep: x.EnableCommunityModalSteps.FINISH,
                            guildId: t.id
                        })
                    }, [t.id]);
                    let T = (0, S.default)(null == t ? void 0 : t.id);
                    return (0, i.jsxs)("div", {
                        className: G.container,
                        children: [(0, i.jsxs)("div", {
                            className: G.content,
                            children: [(0, i.jsx)("img", {
                                alt: "",
                                src: I,
                                width: 80
                            }), (0, i.jsx)(d.Heading, {
                                variant: "heading-xl/semibold",
                                className: G.header,
                                id: N,
                                children: v.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
                            }), (0, i.jsx)(d.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: G.headerCaption,
                                children: v.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_BODY
                            })]
                        }), (0, i.jsx)("div", {
                            className: G.form,
                            children: (0, i.jsx)(d.Tooltip, {
                                text: _ ? v.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
                                "aria-label": !!_ && v.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                                children: e => (0, i.jsx)("div", {
                                    ...e,
                                    children: (0, i.jsx)(d.Checkbox, {
                                        type: d.Checkbox.Types.ROW,
                                        disabled: _,
                                        value: t.defaultMessageNotifications === U.UserNotificationSettings.ONLY_MENTIONS,
                                        onChange: o,
                                        className: l({
                                            [G.disabled]: _
                                        }),
                                        children: (0, i.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: v.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                                infoHook: () => (0, i.jsx)(d.Tooltip, {
                                                    text: v.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                                    "aria-label": v.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                                    children: e => (0, i.jsx)(p.default, {
                                                        className: G.icon,
                                                        ...e
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }), (0, i.jsx)(d.Tooltip, {
                            text: c ? v.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
                            "aria-label": !!c && v.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                            children: e => (0, i.jsx)("div", {
                                ...e,
                                className: G.checkboxOption,
                                children: (0, i.jsx)(d.Checkbox, {
                                    type: d.Checkbox.Types.ROW,
                                    disabled: c,
                                    value: a,
                                    onChange: E,
                                    className: l({
                                        [G.disabled]: c
                                    }),
                                    children: (0, i.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        children: v.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL.format({
                                            infoHook: () => (0, i.jsx)(d.Tooltip, {
                                                text: v.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                                "aria-label": v.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                                children: e => (0, i.jsx)(p.default, {
                                                    className: G.icon,
                                                    ...e
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: G.form,
                            children: [(0, i.jsx)(d.FormTitle, {
                                children: v.default.Messages.PUBLIC_GUILD_POLICY_TITLE
                            }), (0, i.jsx)(d.FormText, {
                                type: d.FormTextTypes.DESCRIPTION,
                                className: G.description,
                                children: T
                            }), (0, i.jsx)(d.Checkbox, {
                                type: d.Checkbox.Types.ROW,
                                value: s,
                                onChange: r,
                                children: (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: v.default.Messages.PUBLIC_GUILD_POLICY_ACCEPT
                                })
                            })]
                        })]
                    })
                };

            function K(e) {
                let {
                    guild: t
                } = e, s = t.getRole(t.id);
                if (null == s) return null;
                let {
                    name: n,
                    color: a
                } = s;
                return (0, i.jsx)("div", {
                    className: G.role,
                    children: (0, i.jsxs)("span", {
                        className: G.roleRow,
                        children: [(0, i.jsx)(d.RoleDot, {
                            className: G.roleDot,
                            color: a.toString(),
                            background: !1,
                            tooltip: !1
                        }), (0, i.jsx)(d.Text, {
                            className: G.roleName,
                            variant: "text-sm/medium",
                            color: "interactive-active",
                            children: n
                        })]
                    })
                })
            }

            function W(e) {
                let {
                    enabledPermissions: t,
                    onGetPermisisonName: s
                } = e;
                return (0, i.jsxs)("div", {
                    className: G.tableContainer,
                    children: [(0, i.jsx)(d.Text, {
                        className: G.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: v.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
                    }), (0, i.jsx)("div", {
                        className: G.permissionsTable,
                        children: t.map((e, t) => (0, i.jsxs)("div", {
                            className: G.permissionRow,
                            children: [(0, i.jsx)("div", {
                                className: G.bulletWarning
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: s(e)
                            })]
                        }, t))
                    })]
                })
            }

            function X(e) {
                let {
                    disabledPermissions: t,
                    onGetPermisisonName: s
                } = e, n = v.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS;
                return t.length === x.MODERATOR_PERMISSIONS.length && (n = v.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED), (0, i.jsxs)("div", {
                    className: G.tableContainer,
                    children: [(0, i.jsx)(d.Text, {
                        className: G.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: n
                    }), (0, i.jsx)("div", {
                        className: G.permissionsTable,
                        children: t.map((e, t) => (0, i.jsxs)("div", {
                            className: G.permissionRow,
                            children: [(0, i.jsx)("div", {
                                className: G.bullet
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: s(e)
                            })]
                        }, t))
                    })]
                })
            }

            function z(e) {
                let {
                    permissions: t
                } = e, s = e => {
                    switch (e.toString()) {
                        case U.Permissions.MENTION_EVERYONE.toString():
                            return v.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
                        case U.Permissions.CREATE_GUILD_EXPRESSIONS.toString():
                            return v.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_CREATE_EMOJI;
                        case U.Permissions.MANAGE_GUILD_EXPRESSIONS.toString():
                            return v.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MANAGE_EMOJI;
                        default:
                            return (0, f.getPermissionName)(e)
                    }
                }, {
                    enabledPermissions: n,
                    disabledPermissions: a
                } = t;
                return (0, i.jsxs)("div", {
                    className: G.table,
                    children: [0 !== n.length ? (0, i.jsx)(W, {
                        enabledPermissions: n,
                        onGetPermisisonName: s
                    }) : null, (0, i.jsx)(X, {
                        disabledPermissions: a,
                        onGetPermisisonName: s
                    })]
                })
            }
            let Z = e => {
                let {
                    guild: t,
                    policyAccepted: s,
                    onAcceptPolicy: a,
                    headerId: l,
                    theme: r
                } = e, o = (0, u.isThemeDark)(r) ? j : y, _ = (0, S.default)(null == t ? void 0 : t.id);
                n.useEffect(() => {
                    (0, h.trackEnableCommunityFlow)({
                        fromStep: x.EnableCommunityModalSteps.BASICS,
                        toStep: x.EnableCommunityModalSteps.FINISH,
                        guildId: t.id
                    })
                }, [t.id]);
                let c = n.useMemo(() => {
                    let e = [],
                        s = [];
                    return x.MODERATOR_PERMISSIONS.map(i => {
                        let n = P.default.canEveryone(i, t);
                        n ? e.push(i) : s.push(i)
                    }), {
                        enabledPermissions: e,
                        disabledPermissions: s
                    }
                }, [t]);
                return (0, i.jsxs)("div", {
                    className: G.container,
                    children: [(0, i.jsxs)("div", {
                        className: G.content,
                        children: [(0, i.jsx)("img", {
                            alt: "",
                            src: o,
                            width: 80
                        }), (0, i.jsx)(d.Heading, {
                            variant: "heading-xl/semibold",
                            className: G.updatedHeader,
                            id: l,
                            children: v.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
                        })]
                    }), (0, i.jsxs)("div", {
                        className: G.updatedForm,
                        children: [(0, i.jsx)(d.FormTitle, {
                            className: G.formTitle,
                            children: v.default.Messages.ENABLE_COMMUNITY_MODAL_UPDATED_SETTINGS_LABEL
                        }), (0, i.jsxs)("div", {
                            className: G.checklistRow,
                            children: [(0, i.jsx)(g.default, {
                                className: G.checklistIcon,
                                color: E.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: E.default.unsafe_rawColors.WHITE_500.css
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: v.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                    infoHook: () => (0, i.jsx)(d.Tooltip, {
                                        text: v.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        "aria-label": v.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        children: e => (0, i.jsx)(p.default, {
                                            className: G.icon,
                                            ...e
                                        })
                                    })
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: G.checklistRow,
                            children: [(0, i.jsx)(g.default, {
                                className: G.checklistIcon,
                                color: E.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: E.default.unsafe_rawColors.WHITE_500.css
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: v.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
                            }), (0, i.jsx)(K, {
                                guild: t
                            })]
                        }), (0, i.jsx)(z, {
                            permissions: c
                        })]
                    }), (0, i.jsxs)("div", {
                        className: G.updatedForm,
                        children: [(0, i.jsx)(d.FormTitle, {
                            className: G.formTitle,
                            children: v.default.Messages.PUBLIC_GUILD_POLICY_TITLE
                        }), (0, i.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: G.description,
                            children: _
                        }), (0, i.jsx)(d.Checkbox, {
                            type: d.Checkbox.Types.ROW,
                            value: s,
                            onChange: a,
                            children: (0, i.jsx)(d.Text, {
                                className: G.acceptText,
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: v.default.Messages.PUBLIC_GUILD_POLICY_ACCEPT
                            })
                        })]
                    })]
                })
            };
            var q = e => {
                var t;
                let {
                    transitionState: s,
                    onClose: a
                } = e;
                n.useEffect(() => {
                    D.default.track(U.AnalyticEvents.OPEN_MODAL, {
                        type: x.ENABLE_COMMUNITY_FLOW_MODAL_KEY
                    })
                }, []);
                let {
                    guild: l
                } = (0, o.useStateFromStoresObject)([I.default], () => I.default.getProps()), E = (0, o.useStateFromStores)([A.default], () => A.default.theme), [u, d] = n.useState(!1), [S, f] = n.useState(!x.MODERATOR_PERMISSIONS.some(e => P.default.canEveryone(e, l))), [O, g] = n.useState(x.CREATE_NEW_CHANNEL_VALUE), [p, h] = n.useState(x.CREATE_NEW_CHANNEL_VALUE), [B] = n.useState(null == l ? void 0 : l.defaultMessageNotifications), [b] = n.useState(null == l ? void 0 : l.verificationLevel), [j] = n.useState(null == l ? void 0 : l.explicitContentFilter), [y] = n.useState(S), F = null == l ? void 0 : l.getRole(null == l ? void 0 : l.id), Y = (0, o.useStateFromStores)([m.default], () => null != l ? m.default.getChannels(l.id) : null, [l]), K = (0, R.useUID)(), {
                    enabled: W
                } = (0, _.useIsMassMentionsDefaultDisabledExperiment)(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "");
                if (null == l) return null;
                let X = [{
                    value: x.CREATE_NEW_CHANNEL_VALUE,
                    label: v.default.Messages.ENABLE_PUBLIC_MODAL_CREATE_CHANNEL
                }];
                Y[0, m.GUILD_SELECTABLE_CHANNELS_KEY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    t.type === U.ChannelTypes.GUILD_TEXT && X.push({
                        value: t.id,
                        label: (0, c.computeChannelName)(t, C.default, L.default, !0)
                    })
                });
                let z = b !== U.VerificationLevels.NONE,
                    q = j === U.GuildExplicitContentFilterTypes.ALL_MEMBERS,
                    Q = B === U.UserNotificationSettings.ONLY_MENTIONS,
                    J = async () => {
                        if (null == F || !u) return;
                        let e = new Set(l.features);
                        e.add(U.GuildFeatures.COMMUNITY);
                        let t = S ? r.default.remove(F.permissions, x.MODERATOR_PERMISSIONS_FLAG) : F.permissions,
                            s = {
                                ...F,
                                permissions: t
                            };
                        t !== F.permissions && await (0, M.saveRoleSettings)(l.id, [s]), N.default.updateGuild({
                            features: e,
                            rulesChannelId: O,
                            publicUpdatesChannelId: p
                        }), await N.default.saveGuild(l.id, {
                            features: e,
                            rulesChannelId: O,
                            verificationLevel: l.verificationLevel,
                            explicitContentFilter: l.explicitContentFilter,
                            publicUpdatesChannelId: p,
                            defaultMessageNotifications: l.defaultMessageNotifications
                        }), setTimeout(() => {
                            a()
                        }, 0)
                    }, $ = (0, i.jsx)(H, {
                        guild: l,
                        disableVerificationLevel: z,
                        disableContentFilter: q,
                        onAcceptVerificationLevel: (e, t) => {
                            if (!t) {
                                N.default.updateGuild({
                                    verificationLevel: b
                                });
                                return
                            }
                            t && N.default.updateGuild({
                                verificationLevel: U.VerificationLevels.LOW
                            })
                        },
                        onAcceptContentFilter: (e, t) => {
                            if (!t) {
                                N.default.updateGuild({
                                    explicitContentFilter: j
                                });
                                return
                            }
                            N.default.updateGuild({
                                explicitContentFilter: U.GuildExplicitContentFilterTypes.ALL_MEMBERS
                            })
                        },
                        headerId: K,
                        theme: E
                    }), ee = (0, i.jsx)(w, {
                        selectableChannels: X,
                        onRuleChannelChange: e => {
                            g(e)
                        },
                        onPublicUpdatesChannelChange: e => {
                            h(e)
                        },
                        ruleChannel: O,
                        publicUpdatesChannel: p,
                        headerId: K,
                        theme: E,
                        guildId: l.id
                    }), et = W ? (0, i.jsx)(Z, {
                        guild: l,
                        policyAccepted: u,
                        onAcceptPolicy: (e, t) => {
                            if (t) {
                                d(!0), !Q && N.default.updateGuild({
                                    defaultMessageNotifications: U.UserNotificationSettings.ONLY_MENTIONS
                                }), !S && null != F && f(!0);
                                return
                            }
                            d(!1), Q && N.default.updateGuild({
                                defaultMessageNotifications: B
                            }), S && null != F && f(!1)
                        },
                        headerId: K,
                        theme: E
                    }) : (0, i.jsx)(k, {
                        guild: l,
                        disableDefaultNotifications: Q,
                        disableEveryoneRolePermissions: y,
                        policyAccepted: u,
                        everyoneRolePermissionsAccepted: S,
                        onAcceptPolicy: (e, t) => {
                            if (t) {
                                d(!0);
                                return
                            }
                            d(!1)
                        },
                        onAcceptDefaultNotifications: (e, t) => {
                            if (!t) {
                                N.default.updateGuild({
                                    defaultMessageNotifications: B
                                });
                                return
                            }
                            N.default.updateGuild({
                                defaultMessageNotifications: U.UserNotificationSettings.ONLY_MENTIONS
                            })
                        },
                        onAcceptEveryoneRolePermissions: (e, t) => {
                            null != F && (t ? f(!0) : f(!1))
                        },
                        headerId: K,
                        theme: E
                    }), es = (0, i.jsx)("img", {
                        alt: "",
                        src: V,
                        className: G.footerImage,
                        width: 240
                    }), ei = [{
                        modalContent: $,
                        disableNextStep: l.explicitContentFilter !== U.GuildExplicitContentFilterTypes.ALL_MEMBERS || l.verificationLevel === U.VerificationLevels.NONE,
                        overviewTitle: v.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_TITLE
                    }, {
                        modalContent: ee,
                        disableNextStep: null == O || null == p,
                        overviewTitle: v.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_TITLE
                    }, {
                        modalContent: et,
                        disableNextStep: !u,
                        overviewTitle: v.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_TITLE
                    }];
                return (0, i.jsx)(T.default, {
                    stepData: ei,
                    title: v.default.Messages.ENABLE_COMMUNITY_MODAL_TITLE,
                    transitionState: s,
                    onClose: () => {
                        a(), D.default.track(U.AnalyticEvents.MODAL_DISMISSED, {
                            type: x.ENABLE_COMMUNITY_FLOW_MODAL_KEY
                        })
                    },
                    completeButtonText: v.default.Messages.ENABLE_COMMUNITY_BUTTON_TEXT,
                    onComplete: J,
                    overviewFooter: es,
                    sequencerClassName: G.container,
                    autoCloseOnComplete: !1
                })
            }
        },
        476765: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                uid: function() {
                    return l
                },
                useUID: function() {
                    return r
                },
                UID: function() {
                    return o
                }
            });
            var i = s("552473"),
                n = s.n(i),
                a = s("365444");
            let l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return n(e)
                },
                r = () => (0, a.useLazyValue)(() => l()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(r())
                }
        },
        68238: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s("920040");
            s("773670");
            var n = s("469563"),
                a = s("225389"),
                l = s("75196"),
                r = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: s,
                        viewBox: "0 0 12 12",
                        children: (0, i.jsx)("path", {
                            fill: n,
                            className: a,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    })
                }, a.CircleInformationIcon, {}, {
                    size: 16
                })
        }
    }
]);