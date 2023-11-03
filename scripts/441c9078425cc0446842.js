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
        225389: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CircleInformationIcon: function() {
                    return i
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("669491"),
                l = s("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    secondaryColor: i = "transparent",
                    secondaryColorClass: o = "",
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof i ? i : i.css,
                        className: o
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: d
                    })]
                })
            }
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
            var n = s("446674"),
                a = s("862205"),
                l = s("957255"),
                i = s("49111");
            let o = (0, a.createExperiment)({
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
                let s = (0, n.useStateFromStores)([l.default], () => l.default.can(i.Permissions.MANAGE_GUILD, e)),
                    {
                        enabled: a
                    } = o.useExperiment({
                        guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                        location: "dd4beb_3"
                    }, {
                        autoTrackExposure: !0
                    });
                if (null == e) return !1;
                let r = e.hasFeature(i.GuildFeatures.COMMUNITY);
                return s && r && a
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
            var n = s("872717"),
                a = s("913144"),
                l = s("895026"),
                i = s("49111");

            function o(e, t) {
                n.default.get({
                    url: i.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
                }).then(e => {
                    let s = [];
                    e.body.length > 0 && (s = e.body.map(e => e.map(e => ({
                        connectionType: e.connection_type,
                        connectionMetadataField: e.connection_metadata_field,
                        applicationId: e.application_id,
                        operator: e.operator,
                        value: e.value
                    })))), a.default.dispatch({
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
                    r = await n.default.put({
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
                null != d && a.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                    guildId: e,
                    roleId: t,
                    count: d
                }), a.default.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                    roleId: t,
                    roleConnectionConfigurations: r
                })
            }
            async function d() {
                let e = await n.default.get({
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
            var n = s("347924"),
                a = s("701909"),
                l = s("49111"),
                i = s("782340");

            function o(e) {
                let t = (0, n.useInServerBadgingExperiment)(null != e ? e : ""),
                    s = i.default.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format({
                        communityGuidelines: a.default.getArticleURL(l.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES),
                        typesOfGuilds: a.default.getArticleURL(l.HelpdeskArticles.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
                    }),
                    o = i.default.Messages.COMMUNITY_POLICY_HELP.format({
                        helpdeskArticle: a.default.getArticleURL(l.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES)
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
            var n = s("862205");
            let a = (0, n.createExperiment)({
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
                } = a.useExperiment({
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
            var n = s("693566"),
                a = s.n(n),
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
            let E = new a({
                maxAge: 1e4
            });

            function _(e, t) {
                let s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    n = "".concat(e, "-").concat(t);
                if (!s || null == E.get(n)) {
                    var a, i;
                    return E.set(n, !0), a = e, i = t, l.default.get({
                        url: d.Endpoints.GUILD_ROLE_MEMBER_IDS(a, i)
                    }).then(e => (o.default.requestMembersById(a, e.body, !1), e.body.length))
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
            var n = s("446674"),
                a = s("913144");
            let l = {},
                i = {};
            class o extends n.default.Store {
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
            var r = new o(a.default, {
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
                        count: n
                    } = e, a = l[t];
                    if (null == a) return !1;
                    a[s] = n
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: s,
                        added: n
                    } = e, a = l[t];
                    if (null == a || null == a[s]) return !1;
                    let i = Object.keys(n).length;
                    a[s] += i
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: s
                    } = e, n = l[t];
                    if (null == n || null == n[s]) return !1;
                    n[s] = n[s] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: s
                    } = e, n = l[t];
                    if (null == n || null == n[s]) return !1;
                    n[s] = Math.max(n[s] - 1, 0)
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
            var n = s("913144"),
                a = s("851387"),
                l = s("70919");

            function i(e) {
                n.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SORT_UPDATE",
                    roles: e
                })
            }

            function o() {
                n.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_INIT"
                })
            }

            function r(e, t, s) {
                n.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS",
                    id: e,
                    flag: t,
                    allow: s
                })
            }

            function d(e) {
                n.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS",
                    id: e
                })
            }

            function u(e, t) {
                n.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_NAME",
                    id: e,
                    name: t
                })
            }

            function c(e, t) {
                n.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR",
                    id: e,
                    color: t
                })
            }

            function E(e, t, s) {
                n.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS",
                    id: e,
                    hoist: t,
                    mentionable: s
                })
            }

            function _(e, t, s) {
                n.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON",
                    id: e,
                    icon: t,
                    unicodeEmoji: s
                })
            }

            function N(e, t) {
                n.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS",
                    roleId: e,
                    roleConnectionConfigurations: t
                })
            }
            async function f(e, t, s, i, o) {
                n.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SUBMITTING"
                });
                try {
                    let n = async () => {
                        if (null == t || 0 === t.length) return;
                        let s = t.pop();
                        if (null == s || "" === s.name) return n();
                        await a.default.updateRole(e, s.id, {
                            name: s.name,
                            description: s.description,
                            permissions: s.permissions,
                            color: s.color,
                            hoist: s.hoist,
                            mentionable: s.mentionable,
                            icon: s.icon,
                            unicodeEmoji: s.unicodeEmoji
                        }).then(n, n)
                    };
                    if (null != s && s.length > 0 ? await a.default.batchRoleUpdate(e, s).then(n, n) : await n(), null != o && null != i)
                        for await (let t of i) {
                            let s = o.get(t);
                            await (0, l.putRoleConnectionsConfigurations)(e, t, null != s ? s : [])
                        }
                } catch (e) {
                    var r, d;
                    n.default.dispatch({
                        type: "GUILD_SETTINGS_ROLES_SAVE_FAIL",
                        message: null !== (d = null === (r = e.body) || void 0 === r ? void 0 : r.message) && void 0 !== d ? d : Object.values(e.body)[0]
                    });
                    return
                }
                n.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_SAVE_SUCCESS"
                })
            }
        },
        25116: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var n = s("49111");

            function a(e) {
                return e.type === n.MessageTypes.DEFAULT && null != e.messageReference
            }
        },
        610903: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var n = s("37983"),
                a = s("884691"),
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
                    selected: a
                } = e;
                return (0, n.jsxs)("div", {
                    className: i(u.overviewStep, {
                        [u.selected]: a
                    }),
                    children: [(0, n.jsx)(o.Text, {
                        className: u.stepIndex,
                        variant: "text-sm/normal",
                        children: t + 1
                    }), (0, n.jsx)(o.Text, {
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
                    sequencerClassName: m,
                    initialStep: M = 0,
                    forceStep: O,
                    submitting: p = !1,
                    autoCloseOnComplete: S = !0
                } = e, [C, x] = a.useState([]), [h, A] = a.useState(M), g = (0, r.useUID)();
                a.useEffect(() => {
                    x([...Array(l.length).keys()])
                }, [l.length]);
                let R = null != O ? O : h,
                    v = l[R],
                    U = 0 === R,
                    D = R === l.length - 1,
                    b = null != N ? N : d.default.Messages.DONE,
                    j = a.useCallback(() => {
                        null == T || T(), A(R - 1)
                    }, [T, R, A]);
                return (0, n.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.MEDIUM,
                    className: i(u.container, t),
                    transitionState: E,
                    "aria-labelledby": g,
                    children: [(0, n.jsxs)("div", {
                        className: u.overviewSidebar,
                        children: [(0, n.jsx)(o.Heading, {
                            id: g,
                            variant: "heading-xl/semibold",
                            className: u.header,
                            children: s
                        }), (0, n.jsx)("div", {
                            className: u.overviewSteps,
                            children: l.map((e, t) => (0, n.jsx)(c, {
                                index: t,
                                title: e.overviewTitle,
                                selected: t === R
                            }, t))
                        }), f]
                    }), (0, n.jsxs)("div", {
                        className: u.modal,
                        children: [(0, n.jsxs)(o.ModalContent, {
                            children: [(0, n.jsx)(o.ModalCloseButton, {
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        right: 4,
                                        left: 4
                                    }
                                },
                                onClick: _,
                                className: u.closeButton
                            }), (0, n.jsx)(o.Sequencer, {
                                step: R,
                                steps: C,
                                sideMargin: 24,
                                verticalMargin: 24,
                                className: i(u.sequencer, m),
                                innerClassName: u.innerSequencer,
                                children: v.modalContent
                            })]
                        }), (0, n.jsxs)(o.ModalFooter, {
                            className: u.footer,
                            children: [(0, n.jsx)(o.Button, {
                                type: "submit",
                                submitting: p,
                                onClick: () => {
                                    if (D) L(), S && _();
                                    else null == I || I(), A(R + 1)
                                },
                                color: o.Button.Colors.GREEN,
                                disabled: v.disableNextStep,
                                children: D ? b : d.default.Messages.NEXT
                            }), U ? null : (0, n.jsx)(o.Button, {
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
            var n = s("716241"),
                a = s("25116"),
                l = s("599110"),
                i = s("69741"),
                o = s("49111"),
                r = s("929887");

            function d(e) {
                return (0, a.default)(e) && e.messageReference.guild_id === i.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID || null != e.author && e.author.id === i.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID
            }

            function u() {
                return r
            }
            let c = e => {
                l.default.track(o.AnalyticEvents.USER_FLOW_TRANSITION, {
                    flow_type: i.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
                    from_step: e.fromStep,
                    to_step: e.toStep,
                    ...(0, n.collectGuildAnalyticsMetadata)(e.guildId)
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
            var n = s("37983"),
                a = s("884691"),
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
                m = s("978970"),
                M = s("161778"),
                O = s("923959"),
                p = s("305961"),
                S = s("27618"),
                C = s("697218"),
                x = s("476765"),
                h = s("578706"),
                A = s("68238"),
                g = s("599110"),
                R = s("991170"),
                v = s("730541"),
                U = s("69741"),
                D = s("49111"),
                b = s("782340"),
                j = s("291683"),
                y = s("741161"),
                P = s("687444"),
                B = s("492094"),
                F = s("300933"),
                G = s("499474"),
                Y = s("576285"),
                w = s("175717");
            let k = e => {
                    let {
                        guild: t,
                        onAcceptVerificationLevel: s,
                        onAcceptContentFilter: a,
                        disableContentFilter: l,
                        disableVerificationLevel: i,
                        headerId: o,
                        theme: d
                    } = e, E = (0, r.useStateFromStores)([p.default], () => p.default.getGuild(t.id), [t.id]), _ = null != E && E.verificationLevel > D.VerificationLevels.NONE, N = (null == E ? void 0 : E.explicitContentFilter) === D.GuildExplicitContentFilterTypes.ALL_MEMBERS, f = (0, u.isThemeDark)(d) ? G : Y;
                    return (0, n.jsxs)("div", {
                        className: j.container,
                        children: [(0, n.jsxs)("div", {
                            className: j.content,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: f,
                                width: 80
                            }), (0, n.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                className: j.header,
                                id: o,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_HEADER
                            }), (0, n.jsx)(c.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: j.headerCaption,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_BODY
                            })]
                        }), (0, n.jsxs)("div", {
                            className: j.form,
                            children: [(0, n.jsx)(c.FormTitle, {
                                children: b.default.Messages.FORM_LABEL_VERIFICATION_LEVEL
                            }), (0, n.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                className: j.description,
                                children: _ ? b.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_MET : b.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_HELP
                            }), (0, n.jsx)(c.Checkbox, {
                                type: c.Checkbox.Types.ROW,
                                disabled: i,
                                value: t.verificationLevel > D.VerificationLevels.NONE,
                                onChange: s,
                                children: (0, n.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    children: b.default.Messages.ENABLE_PUBLIC_MODAL_VERIFICATION_LEVEL_DESCRIPTION
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: j.form,
                            children: [(0, n.jsx)(c.FormTitle, {
                                children: b.default.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER
                            }), (0, n.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                className: j.description,
                                children: N ? b.default.Messages.ENABLE_COMMUNITY_MODAL_CONTENT_FILTER_MET : b.default.Messages.ENABLE_PUBLIC_MODAL_CONTENT_FILTER_HELP
                            }), (0, n.jsx)(c.Checkbox, {
                                type: c.Checkbox.Types.ROW,
                                disabled: l,
                                value: t.explicitContentFilter === D.GuildExplicitContentFilterTypes.ALL_MEMBERS,
                                onChange: a,
                                children: (0, n.jsx)(c.Text, {
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
                    a.useEffect(() => {
                        (0, v.trackEnableCommunityFlow)({
                            fromStep: U.EnableCommunityModalSteps.SAFETY_CHECK,
                            toStep: U.EnableCommunityModalSteps.BASICS,
                            guildId: E
                        })
                    }, [E]);
                    let _ = (0, u.isThemeDark)(d) ? y : P;
                    return (0, n.jsxs)("div", {
                        className: j.container,
                        children: [(0, n.jsxs)("div", {
                            className: j.content,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: _,
                                width: 80
                            }), (0, n.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                className: j.header,
                                id: r,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_HEADER
                            }), (0, n.jsx)(c.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: j.headerCaption,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_BODY
                            })]
                        }), (0, n.jsxs)("div", {
                            className: j.form,
                            children: [(0, n.jsx)(c.FormTitle, {
                                children: b.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_TITLE
                            }), (0, n.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                className: j.description,
                                children: b.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_HELP
                            }), (0, n.jsx)(c.SearchableSelect, {
                                options: t,
                                onChange: s,
                                value: l,
                                maxVisibleItems: 4
                            })]
                        }), (0, n.jsxs)("div", {
                            className: j.form,
                            children: [(0, n.jsx)(c.FormTitle, {
                                children: b.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE
                            }), (0, n.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                className: j.description,
                                children: b.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP
                            }), (0, n.jsx)(c.SearchableSelect, {
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
                    } = e, T = (0, u.isThemeDark)(I) ? B : F;
                    a.useEffect(() => {
                        (0, v.trackEnableCommunityFlow)({
                            fromStep: U.EnableCommunityModalSteps.BASICS,
                            toStep: U.EnableCommunityModalSteps.FINISH,
                            guildId: t.id
                        })
                    }, [t.id]);
                    let L = (0, N.default)(null == t ? void 0 : t.id);
                    return (0, n.jsxs)("div", {
                        className: j.container,
                        children: [(0, n.jsxs)("div", {
                            className: j.content,
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                src: T,
                                width: 80
                            }), (0, n.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                className: j.header,
                                id: f,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
                            }), (0, n.jsx)(c.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: j.headerCaption,
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_BODY
                            })]
                        }), (0, n.jsx)("div", {
                            className: j.form,
                            children: (0, n.jsx)(c.Tooltip, {
                                text: E ? b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
                                "aria-label": !!E && b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                                children: e => (0, n.jsx)("div", {
                                    ...e,
                                    children: (0, n.jsx)(c.Checkbox, {
                                        type: c.Checkbox.Types.ROW,
                                        disabled: E,
                                        value: t.defaultMessageNotifications === D.UserNotificationSettings.ONLY_MENTIONS,
                                        onChange: r,
                                        className: i({
                                            [j.disabled]: E
                                        }),
                                        children: (0, n.jsx)(c.Text, {
                                            variant: "text-sm/normal",
                                            children: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                                infoHook: () => (0, n.jsx)(c.Tooltip, {
                                                    text: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                                    "aria-label": b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                                    children: e => (0, n.jsx)(A.default, {
                                                        className: j.icon,
                                                        ...e
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }), (0, n.jsx)(c.Tooltip, {
                            text: _ ? b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP : null,
                            "aria-label": !!_ && b.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP,
                            children: e => (0, n.jsx)("div", {
                                ...e,
                                className: j.checkboxOption,
                                children: (0, n.jsx)(c.Checkbox, {
                                    type: c.Checkbox.Types.ROW,
                                    disabled: _,
                                    value: l,
                                    onChange: d,
                                    className: i({
                                        [j.disabled]: _
                                    }),
                                    children: (0, n.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        children: b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL.format({
                                            infoHook: () => (0, n.jsx)(c.Tooltip, {
                                                text: b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                                "aria-label": b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,
                                                children: e => (0, n.jsx)(A.default, {
                                                    className: j.icon,
                                                    ...e
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }), (0, n.jsxs)("div", {
                            className: j.form,
                            children: [(0, n.jsx)(c.FormTitle, {
                                children: b.default.Messages.PUBLIC_GUILD_POLICY_TITLE
                            }), (0, n.jsx)(c.FormText, {
                                type: c.FormTextTypes.DESCRIPTION,
                                className: j.description,
                                children: L
                            }), (0, n.jsx)(c.Checkbox, {
                                type: c.Checkbox.Types.ROW,
                                value: s,
                                onChange: o,
                                children: (0, n.jsx)(c.Text, {
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
                    name: a,
                    color: l
                } = s;
                return (0, n.jsx)("div", {
                    className: j.role,
                    children: (0, n.jsxs)("span", {
                        className: j.roleRow,
                        children: [(0, n.jsx)(c.RoleDot, {
                            className: j.roleDot,
                            color: l.toString(),
                            background: !1,
                            tooltip: !1
                        }), (0, n.jsx)(c.Text, {
                            className: j.roleName,
                            variant: "text-sm/medium",
                            color: "interactive-active",
                            children: a
                        })]
                    })
                })
            }

            function z(e) {
                let {
                    enabledPermissions: t,
                    onGetPermisisonName: s
                } = e;
                return (0, n.jsxs)("div", {
                    className: j.tableContainer,
                    children: [(0, n.jsx)(c.Text, {
                        className: j.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: b.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
                    }), (0, n.jsx)("div", {
                        className: j.permissionsTable,
                        children: t.map((e, t) => (0, n.jsxs)("div", {
                            className: j.permissionRow,
                            children: [(0, n.jsx)("div", {
                                className: j.bulletWarning
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: s(e)
                            })]
                        }, t))
                    })]
                })
            }

            function K(e) {
                let {
                    disabledPermissions: t,
                    onGetPermisisonName: s
                } = e, a = b.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS;
                return t.length === U.MODERATOR_PERMISSIONS.length && (a = b.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED), (0, n.jsxs)("div", {
                    className: j.tableContainer,
                    children: [(0, n.jsx)(c.Text, {
                        className: j.tableHeader,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: a
                    }), (0, n.jsx)("div", {
                        className: j.permissionsTable,
                        children: t.map((e, t) => (0, n.jsxs)("div", {
                            className: j.permissionRow,
                            children: [(0, n.jsx)("div", {
                                className: j.bullet
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: s(e)
                            })]
                        }, t))
                    })]
                })
            }

            function q(e) {
                let {
                    permissions: t
                } = e, s = e => {
                    switch (e.toString()) {
                        case D.Permissions.MENTION_EVERYONE.toString():
                            return b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
                        case D.Permissions.CREATE_GUILD_EXPRESSIONS.toString():
                            return b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_CREATE_EMOJI;
                        case D.Permissions.MANAGE_GUILD_EXPRESSIONS.toString():
                            return b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MANAGE_EMOJI;
                        default:
                            return (0, m.getPermissionName)(e)
                    }
                }, {
                    enabledPermissions: a,
                    disabledPermissions: l
                } = t;
                return (0, n.jsxs)("div", {
                    className: j.table,
                    children: [0 !== a.length ? (0, n.jsx)(z, {
                        enabledPermissions: a,
                        onGetPermisisonName: s
                    }) : null, (0, n.jsx)(K, {
                        disabledPermissions: l,
                        onGetPermisisonName: s
                    })]
                })
            }
            let X = e => {
                let {
                    guild: t,
                    policyAccepted: s,
                    onAcceptPolicy: l,
                    headerId: i,
                    theme: o
                } = e, r = (0, u.isThemeDark)(o) ? B : F, E = (0, N.default)(null == t ? void 0 : t.id);
                a.useEffect(() => {
                    (0, v.trackEnableCommunityFlow)({
                        fromStep: U.EnableCommunityModalSteps.BASICS,
                        toStep: U.EnableCommunityModalSteps.FINISH,
                        guildId: t.id
                    })
                }, [t.id]);
                let _ = a.useMemo(() => {
                    let e = [],
                        s = [];
                    return U.MODERATOR_PERMISSIONS.map(n => {
                        let a = R.default.canEveryone(n, t);
                        a ? e.push(n) : s.push(n)
                    }), {
                        enabledPermissions: e,
                        disabledPermissions: s
                    }
                }, [t]);
                return (0, n.jsxs)("div", {
                    className: j.container,
                    children: [(0, n.jsxs)("div", {
                        className: j.content,
                        children: [(0, n.jsx)("img", {
                            alt: "",
                            src: r,
                            width: 80
                        }), (0, n.jsx)(c.Heading, {
                            variant: "heading-xl/semibold",
                            className: j.updatedHeader,
                            id: i,
                            children: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER
                        })]
                    }), (0, n.jsxs)("div", {
                        className: j.updatedForm,
                        children: [(0, n.jsx)(c.FormTitle, {
                            className: j.formTitle,
                            children: b.default.Messages.ENABLE_COMMUNITY_MODAL_UPDATED_SETTINGS_LABEL
                        }), (0, n.jsxs)("div", {
                            className: j.checklistRow,
                            children: [(0, n.jsx)(h.default, {
                                className: j.checklistIcon,
                                color: d.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: d.default.unsafe_rawColors.WHITE_500.css
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
                                    infoHook: () => (0, n.jsx)(c.Tooltip, {
                                        text: b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        "aria-label": b.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
                                        children: e => (0, n.jsx)(A.default, {
                                            className: j.icon,
                                            ...e
                                        })
                                    })
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: j.checklistRow,
                            children: [(0, n.jsx)(h.default, {
                                className: j.checklistIcon,
                                color: d.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: d.default.unsafe_rawColors.WHITE_500.css
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: b.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
                            }), (0, n.jsx)(W, {
                                guild: t
                            })]
                        }), (0, n.jsx)(q, {
                            permissions: _
                        })]
                    }), (0, n.jsxs)("div", {
                        className: j.updatedForm,
                        children: [(0, n.jsx)(c.FormTitle, {
                            className: j.formTitle,
                            children: b.default.Messages.PUBLIC_GUILD_POLICY_TITLE
                        }), (0, n.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: j.description,
                            children: E
                        }), (0, n.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.ROW,
                            value: s,
                            onChange: l,
                            children: (0, n.jsx)(c.Text, {
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
                a.useEffect(() => {
                    g.default.track(D.AnalyticEvents.OPEN_MODAL, {
                        type: U.ENABLE_COMMUNITY_FLOW_MODAL_KEY
                    })
                }, []);
                let {
                    guild: i
                } = (0, r.useStateFromStoresObject)([T.default], () => T.default.getProps()), d = (0, r.useStateFromStores)([M.default], () => M.default.theme), [u, c] = a.useState(!1), [N, m] = a.useState(!U.MODERATOR_PERMISSIONS.some(e => R.default.canEveryone(e, i))), [p, h] = a.useState(U.CREATE_NEW_CHANNEL_VALUE), [A, v] = a.useState(U.CREATE_NEW_CHANNEL_VALUE), [y] = a.useState(null == i ? void 0 : i.defaultMessageNotifications), [P] = a.useState(null == i ? void 0 : i.verificationLevel), [B] = a.useState(null == i ? void 0 : i.explicitContentFilter), [F] = a.useState(N), G = null == i ? void 0 : i.getRole(null == i ? void 0 : i.id), Y = (0, r.useStateFromStores)([O.default], () => null != i ? O.default.getChannels(i.id) : null, [i]), W = (0, x.useUID)(), {
                    enabled: z
                } = (0, E.useIsMassMentionsDefaultDisabledExperiment)(null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : "");
                if (null == i) return null;
                let K = [{
                    value: U.CREATE_NEW_CHANNEL_VALUE,
                    label: b.default.Messages.ENABLE_PUBLIC_MODAL_CREATE_CHANNEL
                }];
                Y[0, O.GUILD_SELECTABLE_CHANNELS_KEY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    t.type === D.ChannelTypes.GUILD_TEXT && K.push({
                        value: t.id,
                        label: (0, _.computeChannelName)(t, C.default, S.default, !0)
                    })
                });
                let q = P !== D.VerificationLevels.NONE,
                    Q = B === D.GuildExplicitContentFilterTypes.ALL_MEMBERS,
                    Z = y === D.UserNotificationSettings.ONLY_MENTIONS,
                    J = async () => {
                        if (null == G || !u) return;
                        let e = new Set(i.features);
                        e.add(D.GuildFeatures.COMMUNITY);
                        let t = N ? o.default.remove(G.permissions, U.MODERATOR_PERMISSIONS_FLAG) : G.permissions,
                            s = {
                                ...G,
                                permissions: t
                            };
                        t !== G.permissions && await (0, I.saveRoleSettings)(i.id, [s]), f.default.updateGuild({
                            features: e,
                            rulesChannelId: p,
                            publicUpdatesChannelId: A
                        }), await f.default.saveGuild(i.id, {
                            features: e,
                            rulesChannelId: p,
                            verificationLevel: i.verificationLevel,
                            explicitContentFilter: i.explicitContentFilter,
                            publicUpdatesChannelId: A,
                            defaultMessageNotifications: i.defaultMessageNotifications
                        }), setTimeout(() => {
                            l()
                        }, 0)
                    }, $ = (0, n.jsx)(k, {
                        guild: i,
                        disableVerificationLevel: q,
                        disableContentFilter: Q,
                        onAcceptVerificationLevel: (e, t) => {
                            if (!t) {
                                f.default.updateGuild({
                                    verificationLevel: P
                                });
                                return
                            }
                            t && f.default.updateGuild({
                                verificationLevel: D.VerificationLevels.LOW
                            })
                        },
                        onAcceptContentFilter: (e, t) => {
                            if (!t) {
                                f.default.updateGuild({
                                    explicitContentFilter: B
                                });
                                return
                            }
                            f.default.updateGuild({
                                explicitContentFilter: D.GuildExplicitContentFilterTypes.ALL_MEMBERS
                            })
                        },
                        headerId: W,
                        theme: d
                    }), ee = (0, n.jsx)(H, {
                        selectableChannels: K,
                        onRuleChannelChange: e => {
                            h(e)
                        },
                        onPublicUpdatesChannelChange: e => {
                            v(e)
                        },
                        ruleChannel: p,
                        publicUpdatesChannel: A,
                        headerId: W,
                        theme: d,
                        guildId: i.id
                    }), et = z ? (0, n.jsx)(X, {
                        guild: i,
                        policyAccepted: u,
                        onAcceptPolicy: (e, t) => {
                            if (t) {
                                c(!0), !Z && f.default.updateGuild({
                                    defaultMessageNotifications: D.UserNotificationSettings.ONLY_MENTIONS
                                }), !N && null != G && m(!0);
                                return
                            }
                            c(!1), Z && f.default.updateGuild({
                                defaultMessageNotifications: y
                            }), N && null != G && m(!1)
                        },
                        headerId: W,
                        theme: d
                    }) : (0, n.jsx)(V, {
                        guild: i,
                        disableDefaultNotifications: Z,
                        disableEveryoneRolePermissions: F,
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
                                    defaultMessageNotifications: y
                                });
                                return
                            }
                            f.default.updateGuild({
                                defaultMessageNotifications: D.UserNotificationSettings.ONLY_MENTIONS
                            })
                        },
                        onAcceptEveryoneRolePermissions: (e, t) => {
                            null != G && (t ? m(!0) : m(!1))
                        },
                        headerId: W,
                        theme: d
                    }), es = (0, n.jsx)("img", {
                        alt: "",
                        src: w,
                        className: j.footerImage,
                        width: 240
                    }), en = [{
                        modalContent: $,
                        disableNextStep: i.explicitContentFilter !== D.GuildExplicitContentFilterTypes.ALL_MEMBERS || i.verificationLevel === D.VerificationLevels.NONE,
                        overviewTitle: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_TITLE
                    }, {
                        modalContent: ee,
                        disableNextStep: null == p || null == A,
                        overviewTitle: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_TITLE
                    }, {
                        modalContent: et,
                        disableNextStep: !u,
                        overviewTitle: b.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_TITLE
                    }];
                return (0, n.jsx)(L.default, {
                    stepData: en,
                    title: b.default.Messages.ENABLE_COMMUNITY_MODAL_TITLE,
                    transitionState: s,
                    onClose: () => {
                        l(), g.default.track(D.AnalyticEvents.MODAL_DISMISSED, {
                            type: U.ENABLE_COMMUNITY_FLOW_MODAL_KEY
                        })
                    },
                    completeButtonText: b.default.Messages.ENABLE_COMMUNITY_BUTTON_TEXT,
                    onComplete: J,
                    overviewFooter: es,
                    sequencerClassName: j.container,
                    autoCloseOnComplete: !1
                })
            }
        },
        476765: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                uid: function() {
                    return i
                },
                useUID: function() {
                    return o
                },
                UID: function() {
                    return r
                }
            });
            var n = s("995008"),
                a = s.n(n),
                l = s("775560");
            let i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return a(e)
                },
                o = () => (0, l.useLazyValue)(() => i()),
                r = e => {
                    let {
                        children: t
                    } = e;
                    return t(o())
                }
        },
        68238: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("37983");
            s("884691");
            var a = s("469563"),
                l = s("225389"),
                i = s("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: a = "currentColor",
                        foreground: l,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: s,
                        viewBox: "0 0 12 12",
                        children: (0, n.jsx)("path", {
                            fill: a,
                            className: l,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    })
                }, l.CircleInformationIcon, {}, {
                    size: 16
                })
        }
    }
]);