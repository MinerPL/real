            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return et
                }
            }), n("222007"), n("834022");
            var l, a, o = n("37983"),
                s = n("884691"),
                i = n("414456"),
                c = n.n(i),
                r = n("627445"),
                u = n.n(r),
                d = n("917351"),
                C = n.n(d),
                N = n("446674"),
                _ = n("669491"),
                E = n("819855"),
                T = n("77078"),
                O = n("619340"),
                f = n("851387"),
                h = n("79112"),
                S = n("308289"),
                m = n("841098"),
                p = n("376556"),
                A = n("716241"),
                M = n("98309"),
                x = n("419830"),
                I = n("824140"),
                L = n("915639"),
                v = n("766274"),
                R = n("271938"),
                g = n("42203"),
                y = n("47319"),
                U = n("26989"),
                j = n("957255"),
                D = n("79798"),
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
                z = n("214509"),
                q = n("49111"),
                Q = n("782340"),
                X = n("752095");

            function Z(e) {
                let {
                    platformType: t,
                    className: n
                } = e, l = (0, m.default)(), a = p.default.get(t);
                return (0, o.jsx)("img", {
                    src: (0, E.isThemeLight)(l) ? a.icon.lightSVG : a.icon.darkSVG,
                    alt: "",
                    className: c(X.platformIcon, n)
                })
            }

            function W(e) {
                let {
                    channel: t,
                    className: n
                } = e, l = (0, x.getChannelIconComponent)(t);
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
                    case z.OperatorTypes.LESS_THAN:
                        r = Q.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: c,
                            count: Math.max(0, Number(s) - 1)
                        });
                        break;
                    case z.OperatorTypes.GREATER_THAN:
                        r = Q.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: c,
                            count: Math.max(0, Number(s) + 1)
                        });
                        break;
                    default:
                        r = c
                } else {
                    let e;
                    switch (a) {
                        case z.OperatorTypes.EQUAL:
                            e = Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_BE, n === q.PlatformTypes.PAYPAL && l === z.MetadataFields.PAYPAL_VERIFIED && (e = Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_A);
                            break;
                        case z.OperatorTypes.NOT_EQUAL:
                            e = Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_NOT_BE;
                            break;
                        case z.OperatorTypes.LESS_THAN:
                            e = Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_MOST;
                            break;
                        case z.OperatorTypes.GREATER_THAN:
                            e = Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MUST_HAVE_AT_LEAST;
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
                } = e, [a, i] = s.useState({}), [r, d] = s.useState(0), [N, E] = s.useState(null), [O, f] = s.useState(null), h = s.useMemo(() => C.flatten(t), [t]), m = s.useMemo(() => C.groupBy(h, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")), [h]);
                s.useEffect(() => d(Date.now()), [h]), s.useEffect(() => {
                    if (null == N) return;
                    let e = m["".concat(N).concat(null != O ? ":".concat(O.id) : "")];
                    if (null == e) return;
                    let t = e.every(e => e.result);
                    t && l(N, O)
                }, [m, N, O, l]);
                let A = (0, T.useToken)(_.default.unsafe_rawColors.GREEN_330).hex();
                return (0, o.jsx)(o.Fragment, {
                    children: Object.keys(m).sort((e, t) => {
                        let n = m[e].every(e => e.result),
                            l = m[t].every(e => e.result);
                        return !0 === n && !1 === l ? 1 : !1 === n && !0 === l ? -1 : 0
                    }).map(e => {
                        var t, l, s;
                        let d, C, N;
                        let _ = m[e],
                            O = _.find(e => null == e.operator),
                            h = _.filter(e => null != e.operator),
                            M = (null == O || O.result) && h.every(e => e.result),
                            x = _.find(e => null != e.application),
                            I = p.default.get(e),
                            L = null == x ? void 0 : x.application,
                            R = (null == L ? void 0 : L.bot) != null ? new v.default(L.bot) : null,
                            g = B.officialApplicationIds.includes(null !== (t = null == L ? void 0 : L.id) && void 0 !== t ? t : "");
                        g ? d = (0, o.jsx)(H.default, {
                            className: X.botTag,
                            color: A,
                            size: 16
                        }) : null != R && (d = (0, o.jsx)(D.default, {
                            className: X.botTag,
                            verified: R.isVerifiedBot()
                        }));
                        let y = a[null !== (l = null == I ? void 0 : I.type) && void 0 !== l ? l : z.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE],
                            U = !M && null != y && y <= r;
                        return C = M ? (0, o.jsx)(b.default, {
                            className: X.connectionsChecksGroupCheckmark
                        }) : U ? (0, o.jsx)(T.Button, {
                            size: T.Button.Sizes.TINY,
                            look: T.Button.Looks.LINK,
                            color: T.Button.Colors.LINK,
                            className: X.connectionsChecksGroupRetryButton,
                            children: Q.default.Messages.RETRY
                        }) : (0, o.jsx)(G.default, {
                            direction: G.default.Directions.RIGHT,
                            className: X.connectionsChecksGroupCaret
                        }), (null == I ? void 0 : I.type) === q.PlatformTypes.STEAM && (N = Q.default.Messages.CONNECTIONS_STEAM_TOOLTIP), (0, o.jsxs)(T.Clickable, {
                            className: c(X.connectionsChecksGroup, M ? X.connectionsChecksGroupPassed : null),
                            onClick: M ? void 0 : () => {
                                var e, t, l;
                                return t = null !== (e = null == I ? void 0 : I.type) && void 0 !== e ? e : z.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE, l = L, void((0, Y.default)(t, "Verified Roles Connect Accounts Modal", null == l ? void 0 : l.role_connections_verification_url), i({
                                    ...a,
                                    [t]: Date.now()
                                }), E(t), f(null != l ? l : null), n())
                            },
                            children: [!M && U ? (0, o.jsx)("div", {
                                className: X.connectionsChecksGroupRequirementsNotMet,
                                children: (0, o.jsx)(T.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_REQUIREMENTS_NOT_MET
                                })
                            }) : null, null != I ? (0, o.jsx)(Z, {
                                platformType: I.type
                            }) : null, null != R ? (0, o.jsx)(S.default, {
                                user: R
                            }) : null, (0, o.jsxs)("div", {
                                className: X.connectionsChecksGroupTextContainer,
                                children: [(0, o.jsxs)("div", {
                                    className: X.connectionsChecksGroupTextNameContainer,
                                    children: [(0, o.jsx)(T.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        children: null !== (s = null == I ? void 0 : I.name) && void 0 !== s ? s : null == L ? void 0 : L.name
                                    }), d, null != N ? (0, o.jsx)(T.Tooltip, {
                                        text: N,
                                        children: e => (0, o.jsx)(P.default, {
                                            ...e,
                                            className: X.connectionsChecksGroupTextNameInfoIcon
                                        })
                                    }) : null]
                                }), h.map(e => {
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
                            }), C]
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
                    [N, _] = s.useState(1 === a.metadataVisibility),
                    [E, f] = s.useState(1 === a.visibility);
                s.useEffect(() => {
                    i(!E), c(N)
                }, []);
                let h = p.default.get(a.type);
                return q.FRIEND_SYNC_PLATFORM_TYPES.has(a.type) && (t = (0, o.jsx)(T.FormSwitch, {
                    className: X.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: r,
                    onChange: e => {
                        u(e), O.default.setFriendSync(a.type, a.id, e)
                    },
                    children: (0, o.jsx)(T.Text, {
                        variant: "text-sm/semibold",
                        children: Q.default.Messages.SYNC_FRIENDS
                    })
                })), q.ACTIVITY_PLATFORM_TYPES.has(a.type) && (n = (0, o.jsx)(T.FormSwitch, {
                    className: X.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: d,
                    onChange: e => {
                        C(e), O.default.setShowActivity(a.type, a.id, e)
                    },
                    children: (0, o.jsx)(T.Text, {
                        variant: "text-sm/semibold",
                        children: Q.default.Messages.DISPLAY_ACTIVITY.format({
                            platform: h.name
                        })
                    })
                })), !0 === h.hasMetadata && (l = (0, o.jsx)(T.FormSwitch, {
                    className: X.accountConnectedPrivacyOptionsSwitchItem,
                    hideBorder: !0,
                    value: N,
                    disabled: !E,
                    onChange: e => {
                        c(e), _(e), O.default.setMetadataVisibility(a.type, a.id, e ? 1 : 0)
                    },
                    children: (0, o.jsx)(T.Text, {
                        variant: "text-sm/semibold",
                        children: Q.default.Messages.DISPLAY_DETAILS_ON_PROFILE
                    })
                })), (0, o.jsxs)("div", {
                    className: X.accountConnectedPrivacyOptionsContainer,
                    children: [(0, o.jsx)(T.FormSwitch, {
                        className: X.accountConnectedPrivacyOptionsSwitchItem,
                        hideBorder: !0,
                        value: E,
                        onChange: e => {
                            i(!e), f(e), O.default.setVisibility(a.type, a.id, e ? 1 : 0)
                        },
                        children: (0, o.jsx)(T.Text, {
                            variant: "text-sm/semibold",
                            children: Q.default.Messages.DISPLAY_ON_PROFILE
                        })
                    }), l, n, t]
                })
            }

            function et(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    guildId: l,
                    role: a
                } = e, [i, c] = s.useState(0), [r, d] = s.useState(null), [C, _] = s.useState(!1), [E, O] = s.useState(!0), [S, x] = s.useState(!1), [v, D] = s.useState(!0), [G, b] = s.useState(!1), P = (0, N.useStateFromStores)([y.default], () => y.default.getAccounts()), B = (0, N.useStateFromStores)([R.default], () => R.default.getId()), [H, Y] = s.useState(null), [z, Z] = s.useState(null), [J, et] = s.useState(null), en = (0, m.default)(), el = (0, N.useStateFromStores)([L.default], () => L.default.locale), ea = (0, N.useStateFromStores)([U.default], () => U.default.getMember(l, B)), eo = (0, N.useStateFromStores)([g.default], () => g.default.getMutableGuildChannelsForGuild(l)), es = Object.values(eo).filter(e => j.default.can(q.Permissions.VIEW_CHANNEL, e) && j.default.can(q.Permissions.SEND_MESSAGES, e) && (0, M.default)(e).includes(a));

                function ei() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    null == n || n(), e && (0, T.closeModal)(K.MODAL_KEY, T.DEFAULT_MODAL_CONTEXT)
                }

                function ec() {
                    ei(!0), h.default.open(q.UserSettingsSections.AUTHORIZED_APPS)
                }

                function er() {
                    ei(!0), h.default.open(q.UserSettingsSections.CONNECTIONS)
                }
                async function eu() {
                    x(!0), await f.default.assignGuildRoleConnection(l, a.id)
                }

                function ed() {
                    F.default.track(q.AnalyticEvents.PASSPORT_CHALLENGE_STARTED, {
                        role_id: a.id,
                        ...(0, A.collectGuildAnalyticsMetadata)(l)
                    })
                }

                function eC(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    Y(e), Z(t), c(1), null != t && (0, w.fetchUserApplicationRoleConnections)().then(e => {
                        et(e)
                    }).catch(() => {})
                }
                return s.useEffect(() => {
                    f.default.fetchGuildRoleConnectionsEligibility(l, a.id).then(e => {
                        d(e), _(e.some(e => e.every(e => e.result))), O(!1)
                    })
                }, [l, a.id, P]), s.useEffect(() => {
                    F.default.track(q.AnalyticEvents.PASSPORT_CHALLENGE_VIEWED, {
                        role_id: a.id,
                        ...(0, A.collectGuildAnalyticsMetadata)(l)
                    })
                }, [l, a.id]), s.useEffect(() => {
                    S && null != ea && ea.roles.includes(a.id) && (x(!1), es.length > 0 ? c(2) : null == n || n(), F.default.track(q.AnalyticEvents.PASSPORT_CHALLENGE_FINISHED, {
                        role_id: a.id,
                        ...(0, A.collectGuildAnalyticsMetadata)(l)
                    }))
                }, [S, es.length, ea, l, a.id, n]), (0, o.jsxs)(T.ModalRoot, {
                    size: T.ModalSize.MEDIUM,
                    transitionState: t,
                    "aria-label": Q.default.Messages.CONNECT_ACCOUNT_TITLE,
                    className: X.modalRoot,
                    children: [function() {
                        switch (i) {
                            case 0:
                                return (0, o.jsxs)(T.ModalHeader, {
                                    className: X.header,
                                    separator: !1,
                                    children: [(0, o.jsx)("div", {
                                        className: X.headerText,
                                        children: (0, o.jsx)(T.Heading, {
                                            variant: "heading-xl/extrabold",
                                            children: Q.default.Messages.CONNECT_ACCOUNT_TITLE
                                        })
                                    }), (0, o.jsx)(T.ModalCloseButton, {
                                        onClick: () => ei()
                                    })]
                                });
                            case 1: {
                                var e, t;
                                u(null != H, "lastPlatformConnected is null");
                                let n = null !== (t = null == z ? void 0 : z.name) && void 0 !== t ? t : null === (e = p.default.get(H)) || void 0 === e ? void 0 : e.name;
                                return (0, o.jsxs)(T.ModalHeader, {
                                    className: X.header,
                                    separator: !1,
                                    children: [(0, o.jsx)(T.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: X.headerText,
                                        children: Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED.format({
                                            platformName: n
                                        })
                                    }), (0, o.jsx)(T.ModalCloseButton, {
                                        onClick: () => ei()
                                    })]
                                })
                            }
                            case 2:
                                return (0, o.jsxs)(T.ModalHeader, {
                                    className: X.header,
                                    separator: !1,
                                    children: [(0, o.jsx)(T.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: X.headerText,
                                        children: Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ROLE_GRANTED
                                    }), (0, o.jsx)(T.ModalCloseButton, {
                                        onClick: () => ei(!0)
                                    })]
                                });
                            default:
                                return null
                        }
                    }(), (0, o.jsx)(T.Sequencer, {
                        step: i,
                        steps: [0, 1, 2],
                        children: function() {
                            switch (i) {
                                case 0: {
                                    let e = null != r && r.length > 1;
                                    return (0, o.jsx)(T.ModalContent, {
                                        children: E || null == r ? (0, o.jsx)(T.Spinner, {
                                            className: X.connectionsChecksGroups
                                        }) : (0, o.jsxs)(o.Fragment, {
                                            children: [(0, o.jsx)(T.Text, {
                                                variant: "text-md/medium",
                                                color: "header-secondary",
                                                children: e ? Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ANY.format() : Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_HEADER_TEXT_ALL.format()
                                            }), (0, o.jsx)(T.ScrollerThin, {
                                                className: X.connectionsChecksGroups,
                                                children: (0, o.jsx)($, {
                                                    eligibilityStatesGroups: r,
                                                    onPlatformConnect: ed,
                                                    onPlatformConnected: eC
                                                })
                                            }), (0, o.jsx)(T.Text, {
                                                variant: "text-xs/normal",
                                                className: X.footerText,
                                                color: "header-secondary",
                                                children: Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                                                    privacyPolicyUrl: q.MarketingURLs.PRIVACY,
                                                    onAuthorizedApplicationsClick: () => ec(),
                                                    onConnectionsClick: () => er()
                                                })
                                            })]
                                        })
                                    })
                                }
                                case 1: {
                                    u(null != H, "lastPlatformConnected is null");
                                    let e = P.find(e => {
                                            let {
                                                type: t
                                            } = e;
                                            return H === t
                                        }),
                                        t = null == J ? void 0 : J.find(e => {
                                            let {
                                                application: t
                                            } = e;
                                            return t.id === (null == z ? void 0 : z.id)
                                        });
                                    return (0, o.jsxs)(T.ModalContent, {
                                        children: [(0, o.jsx)(T.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            children: Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_USAGE_SETTINGS.format({
                                                privacyPolicyUrl: q.MarketingURLs.PRIVACY,
                                                onAuthorizedApplicationsClick: () => ec(),
                                                onConnectionsClick: () => er()
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
                                                            children: Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                                                        }), (0, o.jsx)(I.ConnectedUserAccount, {
                                                            connectedAccount: e,
                                                            userId: B,
                                                            theme: en,
                                                            locale: el,
                                                            className: X.accountConnectedPreviewConnectedUserAccount,
                                                            showMetadata: v,
                                                            showInvisibleIcon: G
                                                        })]
                                                    }), (0, o.jsxs)("div", {
                                                        className: X.accountConnectedContainerChild,
                                                        children: [(0, o.jsx)(T.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PRIVACY
                                                        }), (0, o.jsx)(ee, {
                                                            account: e,
                                                            setShowPreviewInvisibleIcon: b,
                                                            setShowPreviewMetadata: D
                                                        })]
                                                    })]
                                                }) : null, null != t ? (0, o.jsxs)("div", {
                                                    className: X.accountConnectedContainerChild,
                                                    children: [(0, o.jsxs)("div", {
                                                        className: X.accountConnectedHeader,
                                                        children: [(0, o.jsx)(T.Text, {
                                                            variant: "eyebrow",
                                                            color: "header-secondary",
                                                            children: Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_PREVIEW
                                                        }), (0, o.jsx)(T.Tooltip, {
                                                            text: Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_ACCOUNT_CONNECTED_TOOLTIP,
                                                            children: e => (0, o.jsx)(k.default, {
                                                                ...e
                                                            })
                                                        })]
                                                    }), (0, o.jsx)(I.ConnectedApplicationUserRoleAccount, {
                                                        applicationRoleConnection: t,
                                                        className: X.accountConnectedPreviewConnectedUserAccount,
                                                        locale: el
                                                    })]
                                                }) : null]
                                            })
                                        })]
                                    })
                                }
                                case 2:
                                    return (0, o.jsxs)(T.ModalContent, {
                                        children: [(0, o.jsxs)("div", {
                                            className: X.roleGranted,
                                            children: [(0, o.jsx)(V.default, {
                                                guildId: l,
                                                className: X.verifiedIcon,
                                                role: a,
                                                size: 24
                                            }), (0, o.jsx)(T.Text, {
                                                variant: "text-lg/semibold",
                                                color: "header-primary",
                                                className: X.roleGrantedName,
                                                children: a.name
                                            })]
                                        }), (0, o.jsx)(T.ScrollerThin, {
                                            className: X.channelsGranted,
                                            children: es.map(e => (0, o.jsx)(W, {
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
                        let t = null !== (e = null == r ? void 0 : r.flat().some(e => null == e.application_id)) && void 0 !== e && e;
                        switch (i) {
                            case 0:
                                return (0, o.jsxs)(T.ModalFooter, {
                                    children: [(0, o.jsx)(T.Button, {
                                        color: T.ButtonColors.BRAND,
                                        onClick: () => eu(),
                                        disabled: E || !C || S,
                                        children: Q.default.Messages.FINISH
                                    }), t ? (0, o.jsx)("div", {
                                        className: X.manageConnectionsFooterButton,
                                        children: (0, o.jsx)(T.Button, {
                                            look: T.ButtonLooks.LINK,
                                            color: T.ButtonColors.LINK,
                                            onClick: er,
                                            children: Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
                                        })
                                    }) : null]
                                });
                            case 1:
                                return (0, o.jsx)(T.ModalFooter, {
                                    children: (0, o.jsx)(T.Button, {
                                        color: T.ButtonColors.BRAND,
                                        onClick: () => c(0),
                                        children: Q.default.Messages.DONE
                                    })
                                });
                            default:
                                return (0, o.jsxs)(T.ModalFooter, {
                                    children: [(0, o.jsx)(T.Button, {
                                        color: T.ButtonColors.BRAND,
                                        onClick: () => ei(!0),
                                        children: Q.default.Messages.CLOSE
                                    }), t ? (0, o.jsx)("div", {
                                        className: X.manageConnectionsFooterButton,
                                        children: (0, o.jsx)(T.Button, {
                                            look: T.ButtonLooks.LINK,
                                            color: T.ButtonColors.LINK,
                                            onClick: er,
                                            children: Q.default.Messages.CONNECTIONS_CONNECT_ACCOUNTS_MODAL_MANAGE_CONNECTIONS
                                        })
                                    }) : null]
                                })
                        }
                    }()]
                })
            }(a = l || (l = {}))[a.CHECKS_REQUIRED = 0] = "CHECKS_REQUIRED", a[a.ACCOUNT_CONNECTED = 1] = "ACCOUNT_CONNECTED", a[a.ROLE_GRANTED = 2] = "ROLE_GRANTED"