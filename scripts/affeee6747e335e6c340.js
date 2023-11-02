(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["55312"], {
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
        402309: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useIsMassMentionsDefaultDisabledExperiment: function() {
                    return r
                },
                useCanCurrentUserViewDisableUnsafeGuildSettingsNotice: function() {
                    return d
                }
            });
            var a = s("446674"),
                n = s("862205"),
                l = s("957255"),
                i = s("49111");
            let o = (0, n.createExperiment)({
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

            function r(e) {
                return o.useExperiment({
                    guildId: e,
                    location: "dd4beb_1"
                }, {
                    autoTrackExposure: !0
                })
            }

            function d(e) {
                var t;
                let s = (0, a.useStateFromStores)([l.default], () => l.default.can(i.Permissions.MANAGE_GUILD, e)),
                    {
                        enabled: n
                    } = o.useExperiment({
                        guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                        location: "dd4beb_3"
                    }, {
                        autoTrackExposure: !0
                    });
                if (null == e) return !1;
                let r = e.hasFeature(i.GuildFeatures.COMMUNITY);
                return s && r && n
            }
        },
        70919: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                fetchRoleConnectionsConfiguration: function() {
                    return o
                },
                putRoleConnectionsConfigurations: function() {
                    return r
                },
                fetchUserApplicationRoleConnections: function() {
                    return d
                }
            });
            var a = s("872717"),
                n = s("913144"),
                l = s("895026"),
                i = s("49111");

            function o(e, t) {
                a.default.get({
                    url: i.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
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
            async function r(e, t, s) {
                let o = s.map(e => e.map(e => ({
                        connection_type: e.connectionType,
                        connection_metadata_field: e.connectionMetadataField,
                        application_id: e.applicationId,
                        operator: e.operator,
                        value: e.value
                    }))),
                    r = await a.default.put({
                        url: i.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
                        body: 0 === o.length ? [] : o,
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
                    d = await (0, l.requestMembersForRole)(e, t, !1);
                null != d && n.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                    guildId: e,
                    roleId: t,
                    count: d
                }), n.default.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                    roleId: t,
                    roleConnectionConfigurations: r
                })
            }
            async function d() {
                let e = await a.default.get({
                    url: i.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS
                });
                return e.body
            }
        },
        292418: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("347924"),
                n = s("701909"),
                l = s("49111"),
                i = s("782340");

            function o(e) {
                let t = (0, a.useInServerBadgingExperiment)(null != e ? e : ""),
                    s = i.default.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format({
                        communityGuidelines: n.default.getArticleURL(l.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES),
                        typesOfGuilds: n.default.getArticleURL(l.HelpdeskArticles.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                    }),
                    o = i.default.Messages.COMMUNITY_POLICY_HELP.format({
                        helpdeskArticle: n.default.getArticleURL(l.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES)
                    });
                return t && null != e ? s : o
            }
        },
        347924: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useInServerBadgingExperiment: function() {
                    return l
                }
            });
            var a = s("862205");
            let n = (0, a.createExperiment)({
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

            function l(e) {
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
                    return c
                },
                requestMembersForRole: function() {
                    return _
                }
            });
            var a = s("693566"),
                n = s.n(a),
                l = s("872717"),
                i = s("913144"),
                o = s("851387"),
                r = s("36402"),
                d = s("49111");
            async function u(e) {
                try {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await l.default.get({
                            url: d.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        s = t.body;
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: s
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                r.default.shouldFetch(e) && await u(e)
            }
            let E = new n({
                maxAge: 1e4
            });

            function _(e, t) {
                let s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = "".concat(e, "-").concat(t);
                if (!s || null == E.get(a)) {
                    var n, i;
                    return E.set(a, !0), n = e, i = t, l.default.get({
                        url: d.Endpoints.GUILD_ROLE_MEMBER_IDS(n, i)
                    }).then(e => (o.default.requestMembersById(n, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("446674"),
                n = s("913144");
            let l = {},
                i = {};
            class o extends a.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? l[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = i[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            o.displayName = "GuildRoleMemberCountStore";
            var r = new o(n.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: s
                    } = e;
                    l[t] = s, i[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: s,
                        count: a
                    } = e, n = l[t];
                    if (null == n) return !1;
                    n[s] = a
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: s,
                        added: a
                    } = e, n = l[t];
                    if (null == n || null == n[s]) return !1;
                    let i = Object.keys(a).length;
                    n[s] += i
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: s
                    } = e, a = l[t];
                    if (null == a || null == a[s]) return !1;
                    a[s] = a[s] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: s
                    } = e, a = l[t];
                    if (null == a || null == a[s]) return !1;
                    a[s] = Math.max(a[s] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: s
                    } = e;
                    null == l[t] && (l[t] = {}), l[t][s.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete l[t.id], delete i[t.id]
                }
            })
        },
        766419: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                updateRoleSort: function() {
                    return i
                },
                init: function() {
                    return o
                },
                updateRolePermissions: function() {
                    return r
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
                    return N
                },
                saveRoleSettings: function() {
                    return f
                }
            });
            var a = s("913144"),
                n = s("851387"),
                l = s("70919");

            function i(e) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
                    roles: e
                })
            }

            function o() {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_INIT"
                })
            }

            function r(e, t, s) {
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

            function N(e, t) {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
                    roleId: e,
                    roleConnectionConfigurations: t
                })
            }
            async function f(e, t, s, i, o) {
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
                    if (null != s && s.length > 0 ? await n.default.batchRoleUpdate(e, s).then(a, a) : await a(), null != o && null != i)
                        for await (let t of i) {
                            let s = o.get(t);
                            await (0, l.putRoleConnectionsConfigurations)(e, t, null != s ? s : [])
                        }
                } catch (e) {
                    var r, d;
                    a.default.dispatch({
                        type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                        message: null !== (d = null === (r = e.body) || void 0 === r ? void 0 : r.message) && void 0 !== d ? d : Object.values(e.body)[0]
                    });
                    return
                }
                a.default.dispatch({
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
            var a = s("49111");

            function n(e) {
                return e.type === a.MessageTypes.DEFAULT && null != e.messageReference
            }
        },
        610903: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                o = s("77078"),
                r = s("476765"),
                d = s("782340"),
                u = s("40968");
            let c = e => {
                let {
                    index: t,
                    title: s,
                    selected: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: i(u.overviewStep, {
                        [u.selected]: n
                    }),
                    children: [(0, a.jsx)(o.Text, {
                        className: u.stepIndex,
                        variant: "text-sm/normal",
                        children: t + 1
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: u.stepTitle,
                        children: s
                    })]
                })
            };
            var E = e => {
                let {
                    className: t,
                    title: s,
                    stepData: l,
                    transitionState: E,
                    onClose: _,
                    completeButtonText: N,
                    overviewFooter: f,
                    onNextPressed: I,
                    onPrevPressed: T,
                    onComplete: L,
                    sequencerClassName: M,
                    initialStep: m = 0,
                    forceStep: O,
                    submitting: p = !1,
                    autoCloseOnComplete: S = !0
                } = e, [C, x] = n.useState([]), [A, h] = n.useState(m), R = (0, r.useUID)();
                n.useEffect(() => {
                    x([...Array(l.length).keys()])
                }, [l.length]);
                let g = null != O ? O : A,
                    U = l[g],
                    D = 0 === g,
                    v = g === l.length - 1,
                    b = null != N ? N : d.default.Messages.DONE,
                    j = n.useCallback(() => {
                        null == T || T(), h(g - 1)
                    }, [T, g, h]);
                return (0, a.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.MEDIUM,
                    className: i(u.container, t),
                    transitionState: E,
                    "aria-labelledby": R,
                    children: [(0, a.jsxs)("div", {
                        className: u.overviewSidebar,
                        children: [(0, a.jsx)(o.Heading, {
                            id: R,
                            variant: "heading-xl/semibold",
                            className: u.header,
                            children: s
                        }), (0, a.jsx)("div", {
                            className: u.overviewSteps,
                            children: l.map((e, t) => (0, a.jsx)(c, {
                                index: t,
                                title: e.overviewTitle,
                                selected: t === g
                            }, t))
                        }), f]
                    }), (0, a.jsxs)("div", {
                        className: u.modal,
                        children: [(0, a.jsxs)(o.ModalContent, {
                            children: [(0, a.jsx)(o.ModalCloseButton, {
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        right: 4,
                                        left: 4
                                    }
                                },
                                onClick: _,
                                className: u.closeButton
                            }), (0, a.jsx)(o.Sequencer, {
                                step: g,
                                steps: C,
                                sideMargin: 24,
                                verticalMargin: 24,
                                className: i(u.sequencer, M),
                                innerClassName: u.innerSequencer,
                                children: U.modalContent
                            })]
                        }), (0, a.jsxs)(o.ModalFooter, {
                            className: u.footer,
                            children: [(0, a.jsx)(o.Button, {
                                type: "submit",
                                submitting: p,
                                onClick: () => {
                                    if (v) L(), S && _();
                                    else null == I || I(), h(g + 1)
                                },
                                color: o.Button.Colors.GREEN,
                                disabled: U.disableNextStep,
                                children: v ? b : d.default.Messages.NEXT
                            }), D ? null : (0, a.jsx)(o.Button, {
                                look: o.Button.Looks.LINK,
                                color: o.Button.Colors.PRIMARY,
                                size: o.Button.Sizes.MIN,
                                onClick: j,
                                children: d.default.Messages.BACK
                            })]
                        })]
                    })]
                })
            }
        },
        730541: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                isPublicSystemMessage: function() {
                    return d
                },
                getPublicSystemMessageAvatar: function() {
                    return u
                },
                trackEnableCommunityFlow: function() {
                    return c
                }
            });
            var a = s("716241"),
                n = s("25116"),
                l = s("599110"),
                i = s("69741"),
                o = s("49111"),
                r = s("929887");

            function d(e) {
                return (0, n.default)(e) && e.messageReference.guild_id === i.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID || null != e.author && e.author.id === i.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID
            }

            function u() {
                return r
            }
            let c = e => {
                l.default.track(o.AnalyticEvents.USER_FLOW_TRANSITION, {
                    flow_type: i.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
                    from_step: e.fromStep,
                    to_step: e.toStep,
                    ...(0, a.collectGuildAnalyticsMetadata)(e.guildId)
                })
            }
        },
        79536: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Q
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                o = s("316693"),
                r = s("446674"),
                d = s("669491"),
                u = s("819855"),
                c = s("77078"),
                E = s("402309"),
                _ = s("679653"),
                N = s("292418"),
                f = s("592407"),
                I = s("766419"),
                T = s("900938"),
                L = s("610903"),
                M = s("978970"),
                m = s("161778"),
                O = s("923959"),
                p = s("305961"),
                S = s("27618"),
                C = s("697218"),
                x = s("476765"),
                A = s("578706"),
                h = s("68238"),
                R = s("599110"),
                g = s("991170"),
                U = s("730541"),
                D = s("69741"),
                v = s("49111"),
                b = s("782340"),
                j = s("291683"),
                P = s("741161"),
                y = s("687444"),
                F = s("492094"),
                B = s("300933"),
                G = s("499474"),
                Y = s("576285"),
                k = s("175717");
            let w = e => {
                    let {
                        guild: t,
                        onAcceptVerificationLevel: s,
                        onAcceptContentFilter: n,
                        disableContentFilter: l,
                        disableVerificationLevel: i,
                        headerId: o,
                        theme: d
                    } = e, E = (0, r.useStateFromStores)([p.default], () => p.default.getGuild(t.id), [t.id]), _ = null != E && E.verificationLevel > v.VerificationLevels.NONE, N = (null == E ? void 0 : E.explicitContentFilter) === v.GuildExplicitContentFilterTypes.ALL_MEMBERS, f = (0, u.isThemeDark)(d) ? G : Y;
                    return (0, a.jsxs)("div", {
                        className: j.container,
                        children: [(0, a.jsxs)("div", {
                            className: j.content,
                            children: [(0, a.jsx)("img", {
                                alt: "",
                                src: f,
                                width: 80
                            }), (0, a.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                className: j.header,
                                id: o,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_HEADER
                            }), (0, a.jsx)(c.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: j.headerCaption,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_BODY
                            })]
                        }), (0, a.jsxs)("div", {
                            className: j.form,
                            children: [(0, a.jsx)(c.FormTitle, {
                                children: b.default.Messages.FORM_LABEL_VERIFICATION_LEVEL
                            }), (0, a.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                className: j.description,
                                children: _ ? b.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_MET : b.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_HELP
                            }), (0, a.jsx)(c.Checkbox, {
                                type: c.Checkbox.Types.ROW,
                                disabled: i,
                                value: t.verificationLevel > v.VerificationLevels.NONE,
                                onChange: s,
                                children: (0, a.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    children: b.default.Messages.ENABLE_PUBLIC_MODAL_VERIFICATION_LEVEL_DESCRIPTION
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: j.form,
                            children: [(0, a.jsx)(c.FormTitle, {
                                children: b.default.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER
                            }), (0, a.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                className: j.description,
                                children: N ? b.default.Messages.ENABLE_COMMUNITY_MODAL_CONTENT_FILTER_MET : b.default.Messages.ENABLE_PUBLIC_MODAL_CONTENT_FILTER_HELP
                            }), (0, a.jsx)(c.Checkbox, {
                                type: c.Checkbox.Types.ROW,
                                disabled: l,
                                value: t.explicitContentFilter === v.GuildExplicitContentFilterTypes.ALL_MEMBERS,
                                onChange: n,
                                children: (0, a.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    children: b.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH
                                })
                            })]
                        })]
                    })
                },
                H = e => {
                    let {
                        selectableChannels: t,
                        onRuleChannelChange: s,
                        ruleChannel: l,
                        onPublicUpdatesChannelChange: i,
                        publicUpdatesChannel: o,
                        headerId: r,
                        theme: d,
                        guildId: E
                    } = e;
                    n.useEffect(() => {
                        (0, U.trackEnableCommunityFlow)({
                            fromStep: D.EnableCommunityModalSteps.SAFETY_CHECK,
                            toStep: D.EnableCommunityModalSteps.BASICS,
                            guildId: E
                        })
                    }, [E]);
                    let _ = (0, u.isThemeDark)(d) ? P : y;
                    return (0, a.jsxs)("div", {
                        className: j.container,
                        children: [(0, a.jsxs)("div", {
                            className: j.content,
                            children: [(0, a.jsx)("img", {
                                alt: "",
                                src: _,
                                width: 80
                            }), (0, a.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                className: j.header,
                                id: r,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_HEADER
                            }), (0, a.jsx)(c.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: j.headerCaption,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_BODY
                            })]
                        }), (0, a.jsxs)("div", {
                            className: j.form,
                            children: [(0, a.jsx)(c.FormTitle, {
                                children: b.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_TITLE
                            }), (0, a.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                className: j.description,
                                children: b.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_HELP
                            }), (0, a.jsx)(c.SearchableSelect, {
                                options: t,
                                onChange: s,
                                value: l,
                                maxVisibleItems: 4
                            })]
                        }), (0, a.jsxs)("div", {
                            className: j.form,
                            children: [(0, a.jsx)(c.FormTitle, {
                                children: b.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
                            }), (0, a.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                className: j.description,
                                children: b.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
                            }), (0, a.jsx)(c.SearchableSelect, {
                                options: t,
                                onChange: i,
                                value: o,
                                popoutPosition: "top",
                                maxVisibleItems: 4
                            })]
                        })]
                    })
                },
                V = e => {
                    let {
                        guild: t,
                        policyAccepted: s,
                        everyoneRolePermissionsAccepted: l,
                        onAcceptPolicy: o,
                        onAcceptDefaultNotifications: r,
                        onAcceptEveryoneRolePermissions: d,
                        disableDefaultNotifications: E,
                        disableEveryoneRolePermissions: _,
                        headerId: f,
                        theme: I
                    } = e, T = (0, u.isThemeDark)(I) ? F : B;
                    n.useEffect(() => {
                        (0, U.trackEnableCommunityFlow)({
                            fromStep: D.EnableCommunityModalSteps.BASICS,
                            toStep: D.EnableCommunityModalSteps.FINISH,
                            guildId: t.id
                        })
                    }, [t.id]);
                    let L = (0, N.default)(null == t ? void 0 : t.id);
                    return (0, a.jsxs)("div", {
                        className: j.container,
                        children: [(0, a.jsxs)("div", {
                            className: j.content,
                            children: [(0, a.jsx)("img", {
                                alt: "",
                                src: T,
                                width: 80
                            }), (0, a.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                className: j.header,
                                id: f,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
                            }), (0, a.jsx)(c.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: j.headerCaption,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_BODY
                            })]
                        }), (0, a.jsx)("div", {
                            className: j.form,
                            children: (0, a.jsx)(c.Tooltip, {
                                text: E ? b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
                                "aria-label": !!E && b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                                children: e => (0, a.jsx)("div", {
                                    ...e,
                                    children: (0, a.jsx)(c.Checkbox, {
                                        type: c.Checkbox.Types.ROW,
                                        disabled: E,
                                        value: t.defaultMessageNotifications === v.UserNotificationSettings.ONLY_MENTIONS,
                                        onChange: r,
                                        className: i({
                                            [j.disabled]: E
                                        }),
                                        children: (0, a.jsx)(c.Text, {
                                            variant: "text-sm/normal",
                                            children: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                                infoHook: () => (0, a.jsx)(c.Tooltip, {
                                                    text: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                                    "aria-label": b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                                    children: e => (0, a.jsx)(h.default, {
                                                        className: j.icon,
                                                        ...e
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }), (0, a.jsx)(c.Tooltip, {
                            text: _ ? b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
                            "aria-label": !!_ && b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                            children: e => (0, a.jsx)("div", {
                                ...e,
                                className: j.checkboxOption,
                                children: (0, a.jsx)(c.Checkbox, {
                                    type: c.Checkbox.Types.ROW,
                                    disabled: _,
                                    value: l,
                                    onChange: d,
                                    className: i({
                                        [j.disabled]: _
                                    }),
                                    children: (0, a.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        children: b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL.format({
                                            infoHook: () => (0, a.jsx)(c.Tooltip, {
                                                text: b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                                "aria-label": b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                                children: e => (0, a.jsx)(h.default, {
                                                    className: j.icon,
                                                    ...e
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: j.form,
                            children: [(0, a.jsx)(c.FormTitle, {
                                children: b.default.Messages.PUBLIC_GUILD_POLICY_TITLE
                            }), (0, a.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                className: j.description,
                                children: L
                            }), (0, a.jsx)(c.Checkbox, {
                                type: c.Checkbox.Types.ROW,
                                value: s,
                                onChange: o,
                                children: (0, a.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    children: b.default.Messages.PUBLIC_GUILD_POLICY_ACCEPT
                                })
                            })]
                        })]
                    })
                };

            function W(e) {
                let {
                    guild: t
                } = e, s = t.getRole(t.id);
                if (null == s) return null;
                let {
                    name: n,
                    color: l
                } = s;
                return (0, a.jsx)("div", {
                    className: j.role,
                    children: (0, a.jsxs)("span", {
                        className: j.roleRow,
                        children: [(0, a.jsx)(c.RoleDot, {
                            className: j.roleDot,
                            color: l.toString(),
                            background: !1,
                            tooltip: !1
                        }), (0, a.jsx)(c.Text, {
                            className: j.roleName,
                            variant: "text-sm/medium",
                            color: "interactive-active",
                            children: n
                        })]
                    })
                })
            }

            function K(e) {
                let {
                    enabledPermissions: t,
                    onGetPermisisonName: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: j.tableContainer,
                    children: [(0, a.jsx)(c.Text, {
                        className: j.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: b.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
                    }), (0, a.jsx)("div", {
                        className: j.permissionsTable,
                        children: t.map((e, t) => (0, a.jsxs)("div", {
                            className: j.permissionRow,
                            children: [(0, a.jsx)("div", {
                                className: j.bulletWarning
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: s(e)
                            })]
                        }, t))
                    })]
                })
            }

            function q(e) {
                let {
                    disabledPermissions: t,
                    onGetPermisisonName: s
                } = e, n = b.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS;
                return t.length === D.MODERATOR_PERMISSIONS.length && (n = b.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED), (0, a.jsxs)("div", {
                    className: j.tableContainer,
                    children: [(0, a.jsx)(c.Text, {
                        className: j.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: n
                    }), (0, a.jsx)("div", {
                        className: j.permissionsTable,
                        children: t.map((e, t) => (0, a.jsxs)("div", {
                            className: j.permissionRow,
                            children: [(0, a.jsx)("div", {
                                className: j.bullet
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: s(e)
                            })]
                        }, t))
                    })]
                })
            }

            function X(e) {
                let {
                    permissions: t
                } = e, s = e => {
                    switch (e.toString()) {
                        case v.Permissions.MENTION_EVERYONE.toString():
                            return b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
                        case v.Permissions.CREATE_GUILD_EXPRESSIONS.toString():
                            return b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_CREATE_EMOJI;
                        case v.Permissions.MANAGE_GUILD_EXPRESSIONS.toString():
                            return b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MANAGE_EMOJI;
                        default:
                            return (0, M.getPermissionName)(e)
                    }
                }, {
                    enabledPermissions: n,
                    disabledPermissions: l
                } = t;
                return (0, a.jsxs)("div", {
                    className: j.table,
                    children: [0 !== n.length ? (0, a.jsx)(K, {
                        enabledPermissions: n,
                        onGetPermisisonName: s
                    }) : null, (0, a.jsx)(q, {
                        disabledPermissions: l,
                        onGetPermisisonName: s
                    })]
                })
            }
            let z = e => {
                let {
                    guild: t,
                    policyAccepted: s,
                    onAcceptPolicy: l,
                    headerId: i,
                    theme: o
                } = e, r = (0, u.isThemeDark)(o) ? F : B, E = (0, N.default)(null == t ? void 0 : t.id);
                n.useEffect(() => {
                    (0, U.trackEnableCommunityFlow)({
                        fromStep: D.EnableCommunityModalSteps.BASICS,
                        toStep: D.EnableCommunityModalSteps.FINISH,
                        guildId: t.id
                    })
                }, [t.id]);
                let _ = n.useMemo(() => {
                    let e = [],
                        s = [];
                    return D.MODERATOR_PERMISSIONS.map(a => {
                        let n = g.default.canEveryone(a, t);
                        n ? e.push(a) : s.push(a)
                    }), {
                        enabledPermissions: e,
                        disabledPermissions: s
                    }
                }, [t]);
                return (0, a.jsxs)("div", {
                    className: j.container,
                    children: [(0, a.jsxs)("div", {
                        className: j.content,
                        children: [(0, a.jsx)("img", {
                            alt: "",
                            src: r,
                            width: 80
                        }), (0, a.jsx)(c.Heading, {
                            variant: "heading-xl/semibold",
                            className: j.updatedHeader,
                            id: i,
                            children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
                        })]
                    }), (0, a.jsxs)("div", {
                        className: j.updatedForm,
                        children: [(0, a.jsx)(c.FormTitle, {
                            className: j.formTitle,
                            children: b.default.Messages.ENABLE_COMMUNITY_MODAL_UPDATED_SETTINGS_LABEL
                        }), (0, a.jsxs)("div", {
                            className: j.checklistRow,
                            children: [(0, a.jsx)(A.default, {
                                className: j.checklistIcon,
                                color: d.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: d.default.unsafe_rawColors.WHITE_500.css
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                    infoHook: () => (0, a.jsx)(c.Tooltip, {
                                        text: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        "aria-label": b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        children: e => (0, a.jsx)(h.default, {
                                            className: j.icon,
                                            ...e
                                        })
                                    })
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: j.checklistRow,
                            children: [(0, a.jsx)(A.default, {
                                className: j.checklistIcon,
                                color: d.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: d.default.unsafe_rawColors.WHITE_500.css
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
                            }), (0, a.jsx)(W, {
                                guild: t
                            })]
                        }), (0, a.jsx)(X, {
                            permissions: _
                        })]
                    }), (0, a.jsxs)("div", {
                        className: j.updatedForm,
                        children: [(0, a.jsx)(c.FormTitle, {
                            className: j.formTitle,
                            children: b.default.Messages.PUBLIC_GUILD_POLICY_TITLE
                        }), (0, a.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: j.description,
                            children: E
                        }), (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.ROW,
                            value: s,
                            onChange: l,
                            children: (0, a.jsx)(c.Text, {
                                className: j.acceptText,
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: b.default.Messages.PUBLIC_GUILD_POLICY_ACCEPT
                            })
                        })]
                    })]
                })
            };
            var Q = e => {
                var t;
                let {
                    transitionState: s,
                    onClose: l
                } = e;
                n.useEffect(() => {
                    R.default.track(v.AnalyticEvents.OPEN_MODAL, {
                        type: D.ENABLE_COMMUNITY_FLOW_MODAL_KEY
                    })
                }, []);
                let {
                    guild: i
                } = (0, r.useStateFromStoresObject)([T.default], () => T.default.getProps()), d = (0, r.useStateFromStores)([m.default], () => m.default.theme), [u, c] = n.useState(!1), [N, M] = n.useState(!D.MODERATOR_PERMISSIONS.some(e => g.default.canEveryone(e, i))), [p, A] = n.useState(D.CREATE_NEW_CHANNEL_VALUE), [h, U] = n.useState(D.CREATE_NEW_CHANNEL_VALUE), [P] = n.useState(null == i ? void 0 : i.defaultMessageNotifications), [y] = n.useState(null == i ? void 0 : i.verificationLevel), [F] = n.useState(null == i ? void 0 : i.explicitContentFilter), [B] = n.useState(N), G = null == i ? void 0 : i.getRole(null == i ? void 0 : i.id), Y = (0, r.useStateFromStores)([O.default], () => null != i ? O.default.getChannels(i.id) : null, [i]), W = (0, x.useUID)(), {
                    enabled: K
                } = (0, E.useIsMassMentionsDefaultDisabledExperiment)(null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : "");
                if (null == i) return null;
                let q = [{
                    value: D.CREATE_NEW_CHANNEL_VALUE,
                    label: b.default.Messages.ENABLE_PUBLIC_MODAL_CREATE_CHANNEL
                }];
                Y[0, O.GUILD_SELECTABLE_CHANNELS_KEY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    t.type === v.ChannelTypes.GUILD_TEXT && q.push({
                        value: t.id,
                        label: (0, _.computeChannelName)(t, C.default, S.default, !0)
                    })
                });
                let X = y !== v.VerificationLevels.NONE,
                    Q = F === v.GuildExplicitContentFilterTypes.ALL_MEMBERS,
                    J = P === v.UserNotificationSettings.ONLY_MENTIONS,
                    Z = async () => {
                        if (null == G || !u) return;
                        let e = new Set(i.features);
                        e.add(v.GuildFeatures.COMMUNITY);
                        let t = N ? o.default.remove(G.permissions, D.MODERATOR_PERMISSIONS_FLAG) : G.permissions,
                            s = {
                                ...G,
                                permissions: t
                            };
                        t !== G.permissions && await (0, I.saveRoleSettings)(i.id, [s]), f.default.updateGuild({
                            features: e,
                            rulesChannelId: p,
                            publicUpdatesChannelId: h
                        }), await f.default.saveGuild(i.id, {
                            features: e,
                            rulesChannelId: p,
                            verificationLevel: i.verificationLevel,
                            explicitContentFilter: i.explicitContentFilter,
                            publicUpdatesChannelId: h,
                            defaultMessageNotifications: i.defaultMessageNotifications
                        }), setTimeout(() => {
                            l()
                        }, 0)
                    }, $ = (0, a.jsx)(w, {
                        guild: i,
                        disableVerificationLevel: X,
                        disableContentFilter: Q,
                        onAcceptVerificationLevel: (e, t) => {
                            if (!t) {
                                f.default.updateGuild({
                                    verificationLevel: y
                                });
                                return
                            }
                            t && f.default.updateGuild({
                                verificationLevel: v.VerificationLevels.LOW
                            })
                        },
                        onAcceptContentFilter: (e, t) => {
                            if (!t) {
                                f.default.updateGuild({
                                    explicitContentFilter: F
                                });
                                return
                            }
                            f.default.updateGuild({
                                explicitContentFilter: v.GuildExplicitContentFilterTypes.ALL_MEMBERS
                            })
                        },
                        headerId: W,
                        theme: d
                    }), ee = (0, a.jsx)(H, {
                        selectableChannels: q,
                        onRuleChannelChange: e => {
                            A(e)
                        },
                        onPublicUpdatesChannelChange: e => {
                            U(e)
                        },
                        ruleChannel: p,
                        publicUpdatesChannel: h,
                        headerId: W,
                        theme: d,
                        guildId: i.id
                    }), et = K ? (0, a.jsx)(z, {
                        guild: i,
                        policyAccepted: u,
                        onAcceptPolicy: (e, t) => {
                            if (t) {
                                c(!0), !J && f.default.updateGuild({
                                    defaultMessageNotifications: v.UserNotificationSettings.ONLY_MENTIONS
                                }), !N && null != G && M(!0);
                                return
                            }
                            c(!1), J && f.default.updateGuild({
                                defaultMessageNotifications: P
                            }), N && null != G && M(!1)
                        },
                        headerId: W,
                        theme: d
                    }) : (0, a.jsx)(V, {
                        guild: i,
                        disableDefaultNotifications: J,
                        disableEveryoneRolePermissions: B,
                        policyAccepted: u,
                        everyoneRolePermissionsAccepted: N,
                        onAcceptPolicy: (e, t) => {
                            if (t) {
                                c(!0);
                                return
                            }
                            c(!1)
                        },
                        onAcceptDefaultNotifications: (e, t) => {
                            if (!t) {
                                f.default.updateGuild({
                                    defaultMessageNotifications: P
                                });
                                return
                            }
                            f.default.updateGuild({
                                defaultMessageNotifications: v.UserNotificationSettings.ONLY_MENTIONS
                            })
                        },
                        onAcceptEveryoneRolePermissions: (e, t) => {
                            null != G && (t ? M(!0) : M(!1))
                        },
                        headerId: W,
                        theme: d
                    }), es = (0, a.jsx)("img", {
                        alt: "",
                        src: k,
                        className: j.footerImage,
                        width: 240
                    }), ea = [{
                        modalContent: $,
                        disableNextStep: i.explicitContentFilter !== v.GuildExplicitContentFilterTypes.ALL_MEMBERS || i.verificationLevel === v.VerificationLevels.NONE,
                        overviewTitle: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_TITLE
                    }, {
                        modalContent: ee,
                        disableNextStep: null == p || null == h,
                        overviewTitle: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_TITLE
                    }, {
                        modalContent: et,
                        disableNextStep: !u,
                        overviewTitle: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_TITLE
                    }];
                return (0, a.jsx)(L.default, {
                    stepData: ea,
                    title: b.default.Messages.ENABLE_COMMUNITY_MODAL_TITLE,
                    transitionState: s,
                    onClose: () => {
                        l(), R.default.track(v.AnalyticEvents.MODAL_DISMISSED, {
                            type: D.ENABLE_COMMUNITY_FLOW_MODAL_KEY
                        })
                    },
                    completeButtonText: b.default.Messages.ENABLE_COMMUNITY_BUTTON_TEXT,
                    onComplete: Z,
                    overviewFooter: es,
                    sequencerClassName: j.container,
                    autoCloseOnComplete: !1
                })
            }
        }
    }
]);