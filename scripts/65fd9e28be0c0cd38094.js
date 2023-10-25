(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65937"], {
        70919: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchRoleConnectionsConfiguration: function() {
                    return i
                },
                putRoleConnectionsConfigurations: function() {
                    return c
                },
                fetchUserApplicationRoleConnections: function() {
                    return r
                }
            });
            var l = n("990746"),
                a = n("913144"),
                o = n("895026"),
                s = n("49111");

            function i(e, t) {
                l.default.get({
                    url: s.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t)
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
            async function c(e, t, n) {
                let i = n.map(e => e.map(e => ({
                        connection_type: e.connectionType,
                        connection_metadata_field: e.connectionMetadataField,
                        application_id: e.applicationId,
                        operator: e.operator,
                        value: e.value
                    }))),
                    c = await l.default.put({
                        url: s.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
                        body: 0 === i.length ? [] : i,
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
                    r = await (0, o.requestMembersForRole)(e, t, !1);
                null != r && a.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
                    guildId: e,
                    roleId: t,
                    count: r
                }), a.default.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
                    roleId: t,
                    roleConnectionConfigurations: c
                })
            }
            async function r() {
                let e = await l.default.get({
                    url: s.Endpoints.APPLICATION_USER_ROLE_CONNECTIONS
                });
                return e.body
            }
        },
        572579: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return et
                }
            });
            var l, a, o = n("920040"),
                s = n("773670"),
                i = n("575482"),
                c = n.n(i),
                r = n("161179"),
                u = n.n(r),
                d = n("427964"),
                C = n.n(d),
                N = n("498225"),
                E = n("912557"),
                _ = n("819855"),
                T = n("77078"),
                O = n("619340"),
                f = n("851387"),
                h = n("79112"),
                S = n("308289"),
                m = n("841098"),
                A = n("376556"),
                p = n("716241"),
                I = n("98309"),
                M = n("419830"),
                x = n("824140"),
                L = n("915639"),
                R = n("766274"),
                v = n("271938"),
                U = n("42203"),
                g = n("47319"),
                D = n("26989"),
                y = n("957255"),
                j = n("79798"),
                G = n("461380"),
                b = n("36694"),
                P = n("925877"),
                k = n("68238"),
                F = n("599110"),
                w = n("70919"),
                B = n("535013"),
                H = n("526190"),
                V = n("602658"),
                Y = n("926994"),
                K = n("685058"),
                Q = n("214509"),
                z = n("49111"),
                q = n("782340"),
                X = n("503829");

            function Z(e) {
                let {
                    platformType: t,
                    className: n
                } = e, l = (0, m.default)(), a = A.default.get(t);
                return (0, o.jsx)("img", {
                    src: (0, _.isThemeLight)(l) ? a.icon.lightSVG : a.icon.darkSVG,
                    alt: "",
                    className: c(X.platformIcon, n)
                })
            }

            function W(e) {
                let {
                    channel: t,
                    className: n
                } = e, l = (0, M.getChannelIconComponent)(t);
                return (0, o.jsxs)("div", {
                    className: c(X.channelName, n),
                    children: [null != l ? (0, o.jsx)(l, {
                        className: X.channelNameIcon
                    }) : null, (0, o.jsx)(T.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-normal",
                        className: X.channelNameText,
                        children: t.name
                    })]
                })
            }

            function J(e) {
                let t, {
                        connectionType: n,
                        connectionMetadataField: l,
                        operator: a,
                        value: s,
                        result: i,
                        description: c
                    } = e,
                    r = null;
                if (null != c) switch (a) {
                    case Q.OperatorTypes.LESS_THAN:
                        r = q.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: c,
                            count: Math.max(0, Number(s) - 1)
                        });
                        break;
                    case Q.OperatorTypes.GREATER_THAN:
                        r = q.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: c,
                            count: Math.max(0, Number(s) + 1)
                        });
                        break;
                    default:
                        r = c
                } else {
                    let e;
                    switch (a) {
                        case Q.OperatorTypes.EQUAL:
                            e = q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_BE, n === z.PlatformTypes.PAYPAL && l === Q.MetadataFields.PAYPAL_VERIFIED && (e = q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_A);
                            break;
                        case Q.OperatorTypes.NOT_EQUAL:
                            e = q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_NOT_BE;
                            break;
                        case Q.OperatorTypes.LESS_THAN:
                            e = q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_MOST;
                            break;
                        case Q.OperatorTypes.GREATER_THAN:
                            e = q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_LEAST;
                            break;
                        case void 0:
                        case null:
                            return null
                    }
                    if (null == (r = (0, B.getConnectionsCheckText)({
                            connectionType: n,
                            connectionMetadataField: l,
                            operator: a,
                            operatorText: e,
                            value: s
                        }))) return null
                }
                return t = i ? "header-secondary" : "text-danger", (0, o.jsx)(T.Text, {
                    variant: "text-xs/normal",
                    color: t,
                    className: X.connectionsCheck,
                    children: r
                })
            }

            function $(e) {
                let {
                    eligibilityStatesGroups: t,
                    onPlatformConnect: n,
                    onPlatformConnected: l
                } = e, [a, i] = s.useState({}), [r, d] = s.useState(0), [N, _] = s.useState(null), [O, f] = s.useState(null), h = s.useMemo(() => C.flatten(t), [t]), m = s.useMemo(() => C.groupBy(h, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")), [h]);
                s.useEffect(() => d(Date.now()), [h]), s.useEffect(() => {
                    if (null == N) return;
                    let e = m["".concat(N).concat(null != O ? ":".concat(O.id) : "")];
                    if (null == e) return;
                    let t = e.every(e => e.result);
                    t && l(N, O)
                }, [m, N, O, l]);
                let p = (0, T.useToken)(E.default.unsafe_rawColors.GREEN_330).hex();
                return (0, o.jsx)(o.Fragment, {
                    children: Object.keys(m).sort((e, t) => {
                        let n = m[e].every(e => e.result),
                            l = m[t].every(e => e.result);
                        return !0 === n && !1 === l ? 1 : !1 === n && !0 === l ? -1 : 0
                    }).map(e => {
                        var t, l, s, d;
                        let C, N, E;
                        let O = m[e],
                            h = O.find(e => null == e.operator),
                            I = O.filter(e => null != e.operator),
                            M = (null == h || h.result) && I.every(e => e.result),
                            x = O.find(e => null != e.application),
                            L = A.default.get(e),
                            v = null == x ? void 0 : x.application,
                            U = (null == v ? void 0 : v.bot) != null ? new R.default(v.bot) : null,
                            g = B.officialApplicationIds.includes(null !== (t = null == v ? void 0 : v.id) && void 0 !== t ? t : "");
                        g ? C = (0, o.jsx)(H.default, {
                            className: X.botTag,
                            color: p,
                            size: 16
                        }) : null != U && (C = (0, o.jsx)(j.default, {
                            className: X.botTag,
                            verified: U.isVerifiedBot()
                        }));
                        let D = a[null !== (l = null == L ? void 0 : L.type) && void 0 !== l ? l : Q.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE],
                            y = !M && null != D && D <= r;
                        return N = M ? (0, o.jsx)(b.default, {
                            className: X.connectionsChecksGroupCheckmark
                        }) : y ? (0, o.jsx)(T.Button, {
                            size: T.Button.Sizes.TINY,
                            look: T.Button.Looks.LINK,
                            color: T.Button.Colors.LINK,
                            className: X.connectionsChecksGroupRetryButton,
                            children: q.default.Messages.RETRY
                        }) : (0, o.jsx)(G.default, {
                            direction: G.default.Directions.RIGHT,
                            className: X.connectionsChecksGroupCaret
                        }), (null == L ? void 0 : L.type) === z.PlatformTypes.STEAM && (E = q.default.Messages.CONNECTIONS_STEAM_TOOLTIP), (0, o.jsxs)(T.Clickable, {
                            className: c(X.connectionsChecksGroup, M ? X.connectionsChecksGroupPassed : null),
                            onClick: M ? void 0 : () => (function(e, t) {
                                (0, Y.default)(e, "Verified Roles Connect Accounts Modal", null == t ? void 0 : t.role_connections_verification_url), i({
                                    ...a,
                                    [e]: Date.now()
                                }), _(e), f(null != t ? t : null), n()
                            })(null !== (s = null == L ? void 0 : L.type) && void 0 !== s ? s : Q.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE, v),
                            children: [!M && y ? (0, o.jsx)("div", {
                                className: X.connectionsChecksGroupRequirementsNotMet,
                                children: (0, o.jsx)(T.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_REQUIREMENTS_NOT_MET
                                })
                            }) : null, null != L ? (0, o.jsx)(Z, {
                                platformType: L.type
                            }) : null, null != U ? (0, o.jsx)(S.default, {
                                user: U
                            }) : null, (0, o.jsxs)("div", {
                                className: X.connectionsChecksGroupTextContainer,
                                children: [(0, o.jsxs)("div", {
                                    className: X.connectionsChecksGroupTextNameContainer,
                                    children: [(0, o.jsx)(T.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        children: null !== (d = null == L ? void 0 : L.name) && void 0 !== d ? d : null == v ? void 0 : v.name
                                    }), C, null != E ? (0, o.jsx)(T.Tooltip, {
                                        text: E,
                                        children: e => (0, o.jsx)(P.default, {
                                            ...e,
                                            className: X.connectionsChecksGroupTextNameInfoIcon
                                        })
                                    }) : null]
                                }), I.map(e => {
                                    let {
                                        connection_type: t,
                                        connection_metadata_field: n,
                                        operator: l,
                                        value: a,
                                        result: s,
                                        description: i
                                    } = e;
                                    return u(null != n, "connectionMetadataField is null"), u(null != l, "operator is null"), u(null != a, "value is null"), (0, o.jsx)(J, {
                                        connectionType: t,
                                        connectionMetadataField: n,
                                        operator: l,
                                        value: a,
                                        result: s,
                                        description: i
                                    }, n)
                                })]
                            }), N]
                        }, e)
                    })
                })
            }

            function ee(e) {
                let t, n, l, {
                        account: a,
                        setShowPreviewInvisibleIcon: i,
                        setShowPreviewMetadata: c
                    } = e,
                    [r, u] = s.useState(a.friendSync),
                    [d, C] = s.useState(a.showActivity),
                    [N, E] = s.useState(1 === a.metadataVisibility),
                    [_, f] = s.useState(1 === a.visibility);
                s.useEffect(() => {
                    i(!_), c(N)
                }, []);
                let h = A.default.get(a.type);
                return z.FRIEND_SYNC_PLATFORM_TYPES.has(a.type) && (t = (0, o.jsx)(T.FormSwitch, {
                    className: X.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: r,
                    onChange: e => {
                        u(e), O.default.setFriendSync(a.type, a.id, e)
                    },
                    children: (0, o.jsx)(T.Text, {
                        variant: "text-sm/semibold",
                        children: q.default.Messages.SYNC_FRIENDS
                    })
                })), z.ACTIVITY_PLATFORM_TYPES.has(a.type) && (n = (0, o.jsx)(T.FormSwitch, {
                    className: X.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: d,
                    onChange: e => {
                        C(e), O.default.setShowActivity(a.type, a.id, e)
                    },
                    children: (0, o.jsx)(T.Text, {
                        variant: "text-sm/semibold",
                        children: q.default.Messages.DISPLAY_ACTIVITY.format({
                            platform: h.name
                        })
                    })
                })), !0 === h.hasMetadata && (l = (0, o.jsx)(T.FormSwitch, {
                    className: X.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: N,
                    disabled: !_,
                    onChange: e => {
                        c(e), E(e), O.default.setMetadataVisibility(a.type, a.id, e ? 1 : 0)
                    },
                    children: (0, o.jsx)(T.Text, {
                        variant: "text-sm/semibold",
                        children: q.default.Messages.DISPLAY_DETAILS_ON_PROFILE
                    })
                })), (0, o.jsxs)("div", {
                    className: X.accountConnectedPrivacyOptionsContainer,
                    children: [(0, o.jsx)(T.FormSwitch, {
                        className: X.accountConnectedPrivacyOptionsSwitchItem,
                        hideBorder: !0,
                        value: _,
                        onChange: e => {
                            i(!e), f(e), O.default.setVisibility(a.type, a.id, e ? 1 : 0)
                        },
                        children: (0, o.jsx)(T.Text, {
                            variant: "text-sm/semibold",
                            children: q.default.Messages.DISPLAY_ON_PROFILE
                        })
                    }), l, n, t]
                })
            }

            function et(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    guildId: l,
                    role: i
                } = e, [c, r] = s.useState(a.CHECKS_REQUIRED), [d, C] = s.useState(null), [E, _] = s.useState(!1), [O, S] = s.useState(!0), [M, R] = s.useState(!1), [j, G] = s.useState(!0), [b, P] = s.useState(!1), B = (0, N.useStateFromStores)([g.default], () => g.default.getAccounts()), H = (0, N.useStateFromStores)([v.default], () => v.default.getId()), [Y, Q] = s.useState(null), [Z, J] = s.useState(null), [et, en] = s.useState(null), el = (0, m.default)(), ea = (0, N.useStateFromStores)([L.default], () => L.default.locale), eo = (0, N.useStateFromStores)([D.default], () => D.default.getMember(l, H)), es = (0, N.useStateFromStores)([U.default], () => U.default.getMutableGuildChannelsForGuild(l)), ei = Object.values(es).filter(e => y.default.can(z.Permissions.VIEW_CHANNEL, e) && y.default.can(z.Permissions.SEND_MESSAGES, e) && (0, I.default)(e).includes(i));

                function ec() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    null == n || n(), e && (0, T.closeModal)(K.MODAL_KEY, T.DEFAULT_MODAL_CONTEXT)
                }

                function er() {
                    ec(!0), h.default.open(z.UserSettingsSections.AUTHORIZED_APPS)
                }

                function eu() {
                    ec(!0), h.default.open(z.UserSettingsSections.CONNECTIONS)
                }
                async function ed() {
                    R(!0), await f.default.assignGuildRoleConnection(l, i.id)
                }

                function eC() {
                    F.default.track(z.AnalyticEvents.PASSPORT_CHALLENGE_STARTED, {
                        role_id: i.id,
                        ...(0, p.collectGuildAnalyticsMetadata)(l)
                    })
                }

                function eN(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    Q(e), J(t), r(a.ACCOUNT_CONNECTED), null != t && (0, w.fetchUserApplicationRoleConnections)().then(e => {
                        en(e)
                    }).catch(() => {})
                }
                return s.useEffect(() => {
                    f.default.fetchGuildRoleConnectionsEligibility(l, i.id).then(e => {
                        C(e), _(e.some(e => e.every(e => e.result))), S(!1)
                    })
                }, [l, i.id, B]), s.useEffect(() => {
                    F.default.track(z.AnalyticEvents.PASSPORT_CHALLENGE_VIEWED, {
                        role_id: i.id,
                        ...(0, p.collectGuildAnalyticsMetadata)(l)
                    })
                }, [l, i.id]), s.useEffect(() => {
                    if (M && null != eo && eo.roles.includes(i.id)) {
                        if (R(!1), ei.length > 0) r(a.ROLE_GRANTED);
                        else null == n || n();
                        F.default.track(z.AnalyticEvents.PASSPORT_CHALLENGE_FINISHED, {
                            role_id: i.id,
                            ...(0, p.collectGuildAnalyticsMetadata)(l)
                        })
                    }
                }, [M, ei.length, eo, l, i.id, n]), (0, o.jsxs)(T.ModalRoot, {
                    size: T.ModalSize.MEDIUM,
                    transitionState: t,
                    "aria-label": q.default.Messages.CONNECT_ACCOUNT_TITLE,
                    className: X.modalRoot,
                    children: [function() {
                        switch (c) {
                            case a.CHECKS_REQUIRED:
                                return (0, o.jsxs)(T.ModalHeader, {
                                    className: X.header,
                                    separator: !1,
                                    children: [(0, o.jsx)("div", {
                                        className: X.headerText,
                                        children: (0, o.jsx)(T.Heading, {
                                            variant: "heading-xl/extrabold",
                                            children: q.default.Messages.CONNECT_ACCOUNT_TITLE
                                        })
                                    }), (0, o.jsx)(T.ModalCloseButton, {
                                        onClick: () => ec()
                                    })]
                                });
                            case a.ACCOUNT_CONNECTED: {
                                var e, t;
                                u(null != Y, "lastPlatformConnected is null");
                                let n = null !== (t = null == Z ? void 0 : Z.name) && void 0 !== t ? t : null === (e = A.default.get(Y)) || void 0 === e ? void 0 : e.name;
                                return (0, o.jsxs)(T.ModalHeader, {
                                    className: X.header,
                                    separator: !1,
                                    children: [(0, o.jsx)(T.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: X.headerText,
                                        children: q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED.format({
                                            platformName: n
                                        })
                                    }), (0, o.jsx)(T.ModalCloseButton, {
                                        onClick: () => ec()
                                    })]
                                })
                            }
                            case a.ROLE_GRANTED:
                                return (0, o.jsxs)(T.ModalHeader, {
                                    className: X.header,
                                    separator: !1,
                                    children: [(0, o.jsx)(T.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: X.headerText,
                                        children: q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ROLE_GRANTED
                                    }), (0, o.jsx)(T.ModalCloseButton, {
                                        onClick: () => ec(!0)
                                    })]
                                });
                            default:
                                return null
                        }
                    }(), (0, o.jsx)(T.Sequencer, {
                        step: c,
                        steps: [a.CHECKS_REQUIRED, a.ACCOUNT_CONNECTED, a.ROLE_GRANTED],
                        children: function() {
                            switch (c) {
                                case a.CHECKS_REQUIRED: {
                                    let e = null != d && d.length > 1;
                                    return (0, o.jsx)(T.ModalContent, {
                                        children: O || null == d ? (0, o.jsx)(T.Spinner, {
                                            className: X.connectionsChecksGroups
                                        }) : (0, o.jsxs)(o.Fragment, {
                                            children: [(0, o.jsx)(T.Text, {
                                                variant: "text-md/medium",
                                                color: "header-secondary",
                                                children: e ? q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ANY.format() : q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ALL.format()
                                            }), (0, o.jsx)(T.ScrollerThin, {
                                                className: X.connectionsChecksGroups,
                                                children: (0, o.jsx)($, {
                                                    eligibilityStatesGroups: d,
                                                    onPlatformConnect: eC,
                                                    onPlatformConnected: eN
                                                })
                                            }), (0, o.jsx)(T.Text, {
                                                variant: "text-xs/normal",
                                                className: X.footerText,
                                                color: "header-secondary",
                                                children: q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                                                    privacyPolicyUrl: z.MarketingURLs.PRIVACY,
                                                    onAuthorizedApplicationsClick: () => er(),
                                                    onConnectionsClick: () => eu()
                                                })
                                            })]
                                        })
                                    })
                                }
                                case a.ACCOUNT_CONNECTED: {
                                    u(null != Y, "lastPlatformConnected is null");
                                    let e = B.find(e => {
                                            let {
                                                type: t
                                            } = e;
                                            return Y === t
                                        }),
                                        t = null == et ? void 0 : et.find(e => {
                                            let {
                                                application: t
                                            } = e;
                                            return t.id === (null == Z ? void 0 : Z.id)
                                        });
                                    return (0, o.jsxs)(T.ModalContent, {
                                        children: [(0, o.jsx)(T.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            children: q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                                                privacyPolicyUrl: z.MarketingURLs.PRIVACY,
                                                onAuthorizedApplicationsClick: () => er(),
                                                onConnectionsClick: () => eu()
                                            })
                                        }), (0, o.jsx)("div", {
                                            className: X.accountConnectedContainer,
                                            children: null == e && null == t ? (0, o.jsx)(T.Spinner, {
                                                className: X.accountConnectedLoading
                                            }) : (0, o.jsxs)(o.Fragment, {
                                                children: [null != e ? (0, o.jsxs)(o.Fragment, {
                                                    children: [(0, o.jsxs)("div", {
                                                        className: X.accountConnectedContainerChild,
                                                        children: [(0, o.jsx)(T.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                                                        }), (0, o.jsx)(x.ConnectedUserAccount, {
                                                            connectedAccount: e,
                                                            userId: H,
                                                            theme: el,
                                                            locale: ea,
                                                            className: X.accountConnectedPreviewConnectedUserAccount,
                                                            showMetadata: j,
                                                            showInvisibleIcon: b
                                                        })]
                                                    }), (0, o.jsxs)("div", {
                                                        className: X.accountConnectedContainerChild,
                                                        children: [(0, o.jsx)(T.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PRIVACY
                                                        }), (0, o.jsx)(ee, {
                                                            account: e,
                                                            setShowPreviewInvisibleIcon: P,
                                                            setShowPreviewMetadata: G
                                                        })]
                                                    })]
                                                }) : null, null != t ? (0, o.jsxs)("div", {
                                                    className: X.accountConnectedContainerChild,
                                                    children: [(0, o.jsxs)("div", {
                                                        className: X.accountConnectedHeader,
                                                        children: [(0, o.jsx)(T.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                                                        }), (0, o.jsx)(T.Tooltip, {
                                                            text: q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_TOOLTIP,
                                                            children: e => (0, o.jsx)(k.default, {
                                                                ...e
                                                            })
                                                        })]
                                                    }), (0, o.jsx)(x.ConnectedApplicationUserRoleAccount, {
                                                        applicationRoleConnection: t,
                                                        className: X.accountConnectedPreviewConnectedUserAccount,
                                                        locale: ea
                                                    })]
                                                }) : null]
                                            })
                                        })]
                                    })
                                }
                                case a.ROLE_GRANTED:
                                    return (0, o.jsxs)(T.ModalContent, {
                                        children: [(0, o.jsxs)("div", {
                                            className: X.roleGranted,
                                            children: [(0, o.jsx)(V.default, {
                                                guildId: l,
                                                className: X.verifiedIcon,
                                                role: i,
                                                size: 24
                                            }), (0, o.jsx)(T.Text, {
                                                variant: "text-lg/semibold",
                                                color: "header-primary",
                                                className: X.roleGrantedName,
                                                children: i.name
                                            })]
                                        }), (0, o.jsx)(T.ScrollerThin, {
                                            className: X.channelsGranted,
                                            children: ei.map(e => (0, o.jsx)(W, {
                                                channel: e
                                            }, e.id))
                                        })]
                                    });
                                default:
                                    return null
                            }
                        }()
                    }), function() {
                        var e;
                        let t = null !== (e = null == d ? void 0 : d.flat().some(e => null == e.application_id)) && void 0 !== e && e;
                        switch (c) {
                            case a.CHECKS_REQUIRED:
                                return (0, o.jsxs)(T.ModalFooter, {
                                    children: [(0, o.jsx)(T.Button, {
                                        color: T.ButtonColors.BRAND,
                                        onClick: () => ed(),
                                        disabled: O || !E || M,
                                        children: q.default.Messages.FINISH
                                    }), t ? (0, o.jsx)("div", {
                                        className: X.manageConnectionsFooterButton,
                                        children: (0, o.jsx)(T.Button, {
                                            look: T.ButtonLooks.LINK,
                                            color: T.ButtonColors.LINK,
                                            onClick: eu,
                                            children: q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
                                        })
                                    }) : null]
                                });
                            case a.ACCOUNT_CONNECTED:
                                return (0, o.jsx)(T.ModalFooter, {
                                    children: (0, o.jsx)(T.Button, {
                                        color: T.ButtonColors.BRAND,
                                        onClick: () => r(a.CHECKS_REQUIRED),
                                        children: q.default.Messages.DONE
                                    })
                                });
                            default:
                                return (0, o.jsxs)(T.ModalFooter, {
                                    children: [(0, o.jsx)(T.Button, {
                                        color: T.ButtonColors.BRAND,
                                        onClick: () => ec(!0),
                                        children: q.default.Messages.CLOSE
                                    }), t ? (0, o.jsx)("div", {
                                        className: X.manageConnectionsFooterButton,
                                        children: (0, o.jsx)(T.Button, {
                                            look: T.ButtonLooks.LINK,
                                            color: T.ButtonColors.LINK,
                                            onClick: eu,
                                            children: q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
                                        })
                                    }) : null]
                                })
                        }
                    }()]
                })
            }(l = a || (a = {}))[l.CHECKS_REQUIRED = 0] = "CHECKS_REQUIRED", l[l.ACCOUNT_CONNECTED = 1] = "ACCOUNT_CONNECTED", l[l.ROLE_GRANTED = 2] = "ROLE_GRANTED"
        },
        685058: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MODAL_KEY: function() {
                    return c
                },
                openGuildRoleConnectionsModal: function() {
                    return r
                },
                default: function() {
                    return u
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("77078"),
                o = n("83900"),
                s = n("535013"),
                i = n("782340");
            let c = "guild-connection-roles";

            function r(e) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("918771").then(n.bind(n, "918771"));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        guildId: e
                    })
                }, {
                    modalKey: c,
                    contextKey: a.DEFAULT_MODAL_CONTEXT,
                    onCloseRequest: () => {
                        (0, a.closeModal)(c, a.DEFAULT_MODAL_CONTEXT)
                    }
                })
            }

            function u(e) {
                let t = (0, s.isVerifiedRolesChannelVisible)(e);
                return t ? (0, l.jsx)(a.MenuItem, {
                    id: "guild-connection-roles",
                    label: i.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
                    icon: o.default,
                    action: () => r(e.id)
                }) : null
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return d
                },
                requestMembersForRole: function() {
                    return N
                }
            });
            var l = n("703275"),
                a = n.n(l),
                o = n("990746"),
                s = n("913144"),
                i = n("851387"),
                c = n("36402"),
                r = n("49111");
            async function u(e) {
                try {
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await o.default.get({
                            url: r.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function d(e) {
                c.default.shouldFetch(e) && await u(e)
            }
            let C = new a({
                maxAge: 1e4
            });

            function N(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == C.get(l)) {
                    var a, s;
                    return C.set(l, !0), a = e, s = t, o.default.get({
                        url: r.Endpoints.GUILD_ROLE_MEMBER_IDS(a, s)
                    }).then(e => (i.default.requestMembersById(a, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("498225"),
                a = n("913144");
            let o = {},
                s = {};
            class i extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? o[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = s[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            i.displayName = "GuildRoleMemberCountStore";
            var c = new i(a.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    o[t] = n, s[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, a = o[t];
                    if (null == a) return !1;
                    a[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, a = o[t];
                    if (null == a || null == a[n]) return !1;
                    let s = Object.keys(l).length;
                    a[n] += s
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = o[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = o[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == o[t] && (o[t] = {}), o[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete o[t.id], delete s[t.id]
                }
            })
        },
        925877: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                o = n("225389"),
                s = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: o,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("rect", {
                                width: "24",
                                height: "24"
                            }), (0, l.jsx)("path", {
                                fill: a,
                                className: o,
                                d: "M9,7 L11,7 L11,5 L9,5 L9,7 Z M10,18 C5.59,18 2,14.41 2,10 C2,5.59 5.59,2 10,2 C14.41,2 18,5.59 18,10 C18,14.41 14.41,18 10,18 L10,18 Z M10,4.4408921e-16 C4.4771525,-1.77635684e-15 4.4408921e-16,4.4771525 0,10 C-1.33226763e-15,12.6521649 1.0535684,15.195704 2.92893219,17.0710678 C4.80429597,18.9464316 7.3478351,20 10,20 C12.6521649,20 15.195704,18.9464316 17.0710678,17.0710678 C18.9464316,15.195704 20,12.6521649 20,10 C20,7.3478351 18.9464316,4.80429597 17.0710678,2.92893219 C15.195704,1.0535684 12.6521649,2.22044605e-16 10,0 L10,4.4408921e-16 Z M9,15 L11,15 L11,9 L9,9 L9,15 L9,15 Z",
                                transform: "translate(2 2)"
                            })]
                        })
                    })
                }, o.CircleInformationIcon)
        }
    }
]);