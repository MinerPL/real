(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13553"], {
        352674: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return n
                }
            });
            var l = i("913144"),
                n = {
                    startTyping(t) {
                        l.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: t
                        })
                    },
                    stopTyping(t) {
                        l.default.dispatch({
                            type: "TYPING_STOP_LOCAL",
                            channelId: t
                        })
                    }
                }
        },
        447060: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                BellZIcon: function() {
                    return a
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("669491"),
                r = i("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: i = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = t;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "m16.988 5.486 1.98-2.489H16.5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 .5-.5h5.333a.5.5 0 0 1 .5.5v1.112a1 1 0 0 1-.26.674l-3.39 3.717H21.5a.5.5 0 0 1 .5.5V8.5a.5.5 0 0 1-.5.5h-5.333a.5.5 0 0 1-.5-.5V7.496a1.009 1.009 0 0 1 .217-.623l1.103-1.386ZM19 11.5a.5.5 0 0 0-.5-.5h-2.333a2.5 2.5 0 0 1-2.5-2.5V7.496a3 3 0 0 1 .652-1.868l.479-.601c.183-.231.124-.568-.083-.78a2.492 2.492 0 0 1-.701-1.483.944.944 0 0 0-.066-.24.744.744 0 0 1-.022-.065 2 2 0 0 0-3.852 0 .623.623 0 0 1-.38.43A7.003 7.003 0 0 0 5 9.5v2.086a.5.5 0 0 1-.128.334L3.77 13.144A3 3 0 0 0 3 15.151v.279c0 .668.336 1.29.946 1.564 1.315.593 4 1.506 8.054 1.506 4.055 0 6.74-.913 8.054-1.506.61-.274.946-.896.946-1.564v-.279a3 3 0 0 0-.77-2.007l-1.102-1.224a.5.5 0 0 1-.128-.334V11.5Zm-9.82 8.344A.16.16 0 0 0 9 20a3 3 0 1 0 6 0 .16.16 0 0 0-.18-.156c-.852.097-1.792.156-2.82.156a24.86 24.86 0 0 1-2.82-.156Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        926496: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                ClockTimeoutIcon: function() {
                    return a
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("669491"),
                r = i("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: i = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = t;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23c.08 0 .135-.08.111-.157-.22-.715-.166-1.53.285-2.315l2.21-3.851c.174-.302-.067-.724-.313-.97l-3-3A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.379a.5.5 0 0 0 .146.353l2.561 2.56c.08.08.223.078.28-.02l.368-.64c1.163-2.028 4.127-2.028 5.29 0l.311.54c.218.381.771.311.853-.12.125-.665.191-1.35.191-2.052 0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11Zm6.09-8.373c.394-.688 1.426-.688 1.82 0l3.96 6.897c.38.664-.12 1.476-.911 1.476h-7.918c-.79 0-1.292-.812-.91-1.476l3.958-6.897Zm.464 1.873h.892a.5.5 0 0 1 .497.551l-.208 2.017c-.017.16-.177.262-.334.228A1.928 1.928 0 0 0 19 19.25c-.137 0-.274.019-.4.046-.158.034-.318-.068-.335-.228l-.208-2.017a.5.5 0 0 1 .497-.551ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        666031: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                GifIcon: function() {
                    return a
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("669491"),
                r = i("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: i = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = t;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        439574: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                NewUserInServerIcon: function() {
                    return a
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("669491"),
                r = i("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: i = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = t;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4.667 5.833c0 4.105 5.29 7.61 6.884 8.572.278.168.62.168.898 0 1.595-.963 6.884-4.467 6.884-8.572A3.833 3.833 0 0 0 15.5 2c-1.56 0-2.583.603-3.5 1.508C11.083 2.603 10.06 2 8.5 2a3.833 3.833 0 0 0-3.833 3.833ZM3.112 14.86a1 1 0 0 0-.829 1.243l.23.884a6 6 0 0 0 6.455 4.454L11 21.22V22a1 1 0 1 0 2 0v-.78l2.032.22a6 6 0 0 0 6.455-4.453l.23-.884a1 1 0 0 0-.83-1.243l-2.05-.286a6 6 0 0 0-6.097 3.07L12 19l-.74-1.357a6 6 0 0 0-6.097-3.069l-2.05.287Zm-.181-5.464a.607.607 0 0 1 1.138 0l.096.258a2 2 0 0 0 1.181 1.181l.258.096a.607.607 0 0 1 0 1.138l-.258.096a2 2 0 0 0-1.181 1.181l-.096.258a.607.607 0 0 1-1.138 0l-.096-.258a2 2 0 0 0-1.181-1.181l-.258-.096a.607.607 0 0 1 0-1.138l.258-.096a2 2 0 0 0 1.181-1.181l.096-.258Zm18.524.421a.486.486 0 0 0-.91 0l-.013.034a2 2 0 0 1-1.181 1.181l-.034.013a.486.486 0 0 0 0 .91l.034.013a2 2 0 0 1 1.181 1.181l.013.034a.486.486 0 0 0 .91 0l.013-.034a2 2 0 0 1 1.181-1.181l.034-.013a.486.486 0 0 0 0-.91l-.034-.013a2 2 0 0 1-1.181-1.181l-.013-.034Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        926001: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                SlashBoxIcon: function() {
                    return a
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("669491"),
                r = i("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: i = 24,
                    color: a = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = t;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        563143: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                useIsClydePersonalityModified: function() {
                    return s
                }
            });
            var l = i("884691"),
                n = i("65597"),
                r = i("335189"),
                a = i("473591");

            function s(t) {
                let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = (0, n.default)([a.default], () => a.default.getSettings(t));
                return l.useEffect(() => {
                    null != t && e && (0, r.fetchClydeSettings)(t)
                }, [t, e]), null != t && (null == i ? void 0 : i.personality) != null && (null == i ? void 0 : i.personality) !== ""
            }
        },
        250813: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return o
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("77078"),
                r = i("987772"),
                a = i("782340"),
                s = i("833837");

            function o() {
                return (0, l.jsx)(n.Tooltip, {
                    text: a.default.Messages.CLYDE_PERSONALITY_BADGE_TOOLTIP,
                    tooltipClassName: s.tooltip,
                    children: t => (0, l.jsx)("div", {
                        className: s.personalityBadge,
                        ...t,
                        children: (0, l.jsx)(r.default, {
                            width: 12,
                            height: 12
                        })
                    })
                })
            }
        },
        562368: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var l = i("446674"),
                n = i("913144");
            let r = new Map;
            class a extends l.default.Store {
                getGuildRoleConnectionEligibility(t) {
                    return null != t ? r.get(t) : void 0
                }
            }
            a.displayName = "GuildRoleConnectionEligibilityStore";
            var s = new a(n.default, {
                GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: t => {
                    let {
                        roleId: e,
                        roleConnectionEligibility: i
                    } = t;
                    r.set(e, i)
                }
            })
        },
        793621: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return U
                }
            });
            var l = i("37983"),
                n = i("884691"),
                r = i("627445"),
                a = i.n(r),
                s = i("917351"),
                o = i.n(s),
                u = i("446674"),
                d = i("669491"),
                c = i("819855"),
                h = i("77078"),
                f = i("851387"),
                x = i("308289"),
                m = i("841098"),
                g = i("376556"),
                j = i("716241"),
                p = i("401642"),
                w = i("766274"),
                C = i("26989"),
                v = i("79798"),
                N = i("36694"),
                I = i("599110"),
                T = i("535013"),
                E = i("562368"),
                y = i("216049"),
                O = i("339023"),
                M = i("526190"),
                _ = i("685058"),
                A = i("214509"),
                S = i("49111"),
                R = i("590456"),
                L = i("782340"),
                D = i("406108");

            function P(t) {
                let e, {
                    connectionType: i,
                    connectionMetadataField: n,
                    operator: r,
                    value: a,
                    description: s
                } = t;
                if (null != s) switch (r) {
                    case A.OperatorTypes.LESS_THAN:
                        e = L.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: s,
                            count: Math.max(0, Number(a) - 1)
                        });
                        break;
                    case A.OperatorTypes.GREATER_THAN:
                        e = L.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: s,
                            count: Math.max(0, Number(a) + 1)
                        });
                        break;
                    default:
                        e = s
                } else e = (0, T.getConnectionsCheckText)({
                    connectionType: i,
                    connectionMetadataField: n,
                    operator: r,
                    value: a
                });
                return null == e ? null : (0, l.jsxs)("div", {
                    className: D.popoutCheck,
                    children: [(0, l.jsx)(N.default, {
                        className: D.popoutCheckIcon
                    }), (0, l.jsx)(h.Text, {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: e
                    })]
                })
            }

            function b(t) {
                let {
                    eligibilityStates: e
                } = t, i = (0, m.default)(), n = (0, h.useToken)(d.default.unsafe_rawColors.GREEN_330).hex(), r = o.groupBy(e, t => "".concat(t.connection_type).concat(null != t.application_id ? ":".concat(t.application_id) : ""));
                return (0, l.jsx)(l.Fragment, {
                    children: Object.keys(r).map(t => {
                        var e, s;
                        let o;
                        let u = r[t],
                            d = u.filter(t => null != t.operator),
                            f = u.find(t => null != t.application),
                            m = g.default.get(t),
                            j = null == f ? void 0 : f.application,
                            p = (null == j ? void 0 : j.bot) != null ? new w.default(j.bot) : null,
                            C = T.officialApplicationIds.includes(null !== (e = null == j ? void 0 : j.id) && void 0 !== e ? e : "");
                        return C ? o = (0, l.jsx)(M.default, {
                            className: D.botTag,
                            color: n,
                            size: 16
                        }) : null != p && (o = (0, l.jsx)(v.default, {
                            className: D.botTag,
                            verified: p.isVerifiedBot()
                        })), (0, l.jsxs)("div", {
                            className: D.popoutChecksGroup,
                            children: [(0, l.jsxs)("div", {
                                className: D.popoutCheckGroupName,
                                children: [null != m ? (0, l.jsx)("img", {
                                    src: (0, c.isThemeDark)(i) ? m.icon.darkSVG : m.icon.lightSVG,
                                    alt: "",
                                    className: D.popoutCheckGroupPlatformIcon
                                }) : null, null != p ? (0, l.jsx)(x.default, {
                                    user: p,
                                    size: h.AvatarSizes.SIZE_20,
                                    className: D.popoutCheckGroupPlatformIcon
                                }) : null, (0, l.jsx)(h.Text, {
                                    variant: "text-sm/medium",
                                    color: "interactive-active",
                                    children: null !== (s = null == m ? void 0 : m.name) && void 0 !== s ? s : null == j ? void 0 : j.name
                                }), o]
                            }), d.map(t => {
                                let {
                                    connection_type: e,
                                    connection_metadata_field: i,
                                    operator: n,
                                    value: r,
                                    description: s
                                } = t;
                                return a(null != i, "connectionMetadataField is null"), a(null != n, "operator is null"), a(null != r, "value is null"), (0, l.jsx)(P, {
                                    connectionType: e,
                                    connectionMetadataField: i,
                                    operator: n,
                                    value: r,
                                    description: s
                                }, "".concat(e, ":").concat(i, ":").concat(n, ":").concat(r))
                            })]
                        }, t)
                    })
                })
            }

            function B(t) {
                var e;
                let i, {
                    onGetRolesClicked: r,
                    onOpenProfile: a,
                    eligibilityStates: s,
                    userId: o,
                    roleId: d,
                    channelId: c,
                    guildId: f
                } = t;
                n.useEffect(() => {
                    I.default.track(S.AnalyticEvents.PASSPORT_ROLE_POPOUT_VIEWED, {
                        other_user_id: o,
                        role_id: d,
                        ...(0, j.collectChannelAnalyticsMetadataFromId)(c),
                        ...(0, j.collectGuildAnalyticsMetadata)(f)
                    })
                }, [o, d, c, f]);
                let x = (0, u.useStateFromStores)([C.default], () => {
                    var t;
                    return null !== (e = null === (t = C.default.getSelfMember(f)) || void 0 === t ? void 0 : t.roles.includes(d)) && void 0 !== e && e
                }, [f, d]);
                return i = 1 === s.length && 1 === s[0].length ? L.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === s.length ? L.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : L.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format(), (0, l.jsxs)("div", {
                    className: D.popout,
                    children: [(0, l.jsx)("div", {
                        className: D.popoutHeaderContainer,
                        children: (0, l.jsx)(h.Text, {
                            variant: "text-xs/normal",
                            color: "text-normal",
                            className: D.popoutHeaderText,
                            children: i
                        })
                    }), (0, l.jsx)("div", {
                        className: D.popoutChecks,
                        children: (0, l.jsx)(b, {
                            eligibilityStates: s.flat()
                        })
                    }), (0, l.jsxs)("div", {
                        className: D.buttonContainer,
                        children: [x ? null : (0, l.jsx)(h.Button, {
                            className: D.getRolesButton,
                            onClick: r,
                            children: L.default.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
                        }), (0, l.jsx)(h.Button, {
                            className: D.viewConnectionsButton,
                            color: h.Button.Colors.PRIMARY,
                            onClick: a,
                            children: L.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
                        })]
                    })]
                })
            }

            function U(t) {
                let {
                    userId: e,
                    guild: i,
                    channel: r
                } = t, s = (0, y.default)(i, e, r.id, !0), o = (0, u.useStateFromStores)([E.default], () => E.default.getGuildRoleConnectionEligibility(null == s ? void 0 : s.id)), [d, c] = n.useState(null == o);
                if (null == s) return null;
                async function x() {
                    a(null != s, "visibleConnectionsRole is null"), d && null == o && (await f.default.fetchGuildRoleConnectionsEligibility(i.id, s.id), c(!1))
                }
                return (0, l.jsx)(h.LazyPopout, {
                    onRequestOpen: x,
                    renderPopout: function() {
                        return Promise.resolve(t => {
                            let {
                                closePopout: n
                            } = t;
                            return null == o ? (0, l.jsx)(l.Fragment, {}) : (a(null != s, "visibleConnectionsRole is null"), (0, l.jsx)(B, {
                                eligibilityStates: o,
                                userId: e,
                                roleId: s.id,
                                channelId: r.id,
                                guildId: i.id,
                                onGetRolesClicked: () => {
                                    (0, _.openGuildRoleConnectionsModal)(i.id)
                                },
                                onOpenProfile: () => {
                                    (0, p.openUserProfileModal)({
                                        userId: e,
                                        guildId: i.id,
                                        channelId: r.id,
                                        section: R.UserProfileSections.USER_INFO_CONNECTIONS,
                                        analyticsLocation: {
                                            section: S.AnalyticsSections.CHANNEL
                                        }
                                    }), n()
                                }
                            }))
                        })
                    },
                    align: "top",
                    nudgeAlignIntoViewport: !0,
                    children: t => (0, l.jsx)(h.Tooltip, {
                        text: L.default.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
                        children: e => (0, l.jsxs)("div", {
                            className: D.badge,
                            ...e,
                            ...t,
                            children: [(0, l.jsx)(O.default, {
                                className: D.badgeVerifiedIcon,
                                size: 16,
                                color: s.colorString
                            }), (0, l.jsx)(h.Text, {
                                variant: "text-xs/bold",
                                color: "header-primary",
                                className: D.roleName,
                                children: s.name
                            })]
                        })
                    })
                })
            }
        },
        685058: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                MODAL_KEY: function() {
                    return o
                },
                openGuildRoleConnectionsModal: function() {
                    return u
                },
                default: function() {
                    return d
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("77078"),
                r = i("83900"),
                a = i("535013"),
                s = i("782340");
            let o = "guild-connection-roles";

            function u(t) {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("918771").then(i.bind(i, "918771"));
                    return i => (0, l.jsx)(e, {
                        ...i,
                        guildId: t
                    })
                }, {
                    modalKey: o,
                    contextKey: n.DEFAULT_MODAL_CONTEXT,
                    onCloseRequest: () => {
                        (0, n.closeModal)(o, n.DEFAULT_MODAL_CONTEXT)
                    }
                })
            }

            function d(t) {
                let e = (0, a.isVerifiedRolesChannelVisible)(t);
                return e ? (0, l.jsx)(n.MenuItem, {
                    id: "guild-connection-roles",
                    label: s.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
                    icon: r.default,
                    action: () => u(t.id)
                }) : null
            }
        },
        406043: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                useCurrentUserCommunicationDisabled: function() {
                    return s
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var l = i("446674"),
                n = i("26989"),
                r = i("697218"),
                a = i("509");

            function s(t) {
                let e = (0, l.useStateFromStores)([r.default], () => r.default.getCurrentUser());
                return d(null == e ? void 0 : e.id, t)
            }

            function o(t, e, i) {
                return null != e && null != t ? i.getMember(e, t) : null
            }

            function u(t) {
                var e;
                return [null !== (e = null == t ? void 0 : t.communicationDisabledUntil) && void 0 !== e ? e : null, (0, a.isMemberCommunicationDisabled)(t)]
            }

            function d(t, e) {
                let i = (0, l.useStateFromStores)([n.default], () => o(t, e, n.default), [e, t]);
                return u(i)
            }

            function c(t, e) {
                let i = o(t, e, n.default);
                return u(i)
            }
        },
        967003: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                useNewMemberBadge: function() {
                    return u
                }
            });
            var l = i("446674"),
                n = i("26989"),
                r = i("305961"),
                a = i("697218"),
                s = i("568734"),
                o = i("657944");
            let u = (t, e) => {
                var i, u, d, c;
                let h = (0, l.useStateFromStores)([n.default], () => {
                        var l;
                        return (0, s.hasFlag)(null !== (i = null === (l = n.default.getMember(t, e)) || void 0 === l ? void 0 : l.flags) && void 0 !== i ? i : 0, o.GuildMemberFlags.DID_REJOIN)
                    }),
                    f = (0, l.useStateFromStores)([r.default], () => {
                        var e;
                        return null === (e = r.default.getGuild(t)) || void 0 === e ? void 0 : e.isNew()
                    }),
                    x = (0, l.useStateFromStores)([a.default], () => {
                        var t;
                        return null === (t = a.default.getUser(e)) || void 0 === t ? void 0 : t.bot
                    });
                let m = (u = t, d = {
                    maxDaysOld: 7
                }, c = e, (0, l.useStateFromStores)([], () => (function(t, e, i) {
                    let {
                        maxDaysOld: l,
                        minDaysOld: a = 0
                    } = e, s = r.default.getGuild(t), o = null == s ? void 0 : s.joinedAt;
                    if (null != i) {
                        let e = n.default.getMember(t, i);
                        o = (null == e ? void 0 : e.joinedAt) == null ? null : new Date(e.joinedAt)
                    }
                    if (null == o) return !1;
                    let u = Date.now() - o.getTime();
                    return (null == l || u <= 864e5 * l) && u >= 864e5 * a
                })(u, d, c), [d, u, c]) && !f && !x && !h);
                return m
            }
        },
        28913: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return d
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("77078"),
                r = i("35006"),
                a = i("967003"),
                s = i("989750"),
                o = i("782340"),
                u = i("407817");

            function d(t) {
                let {
                    guild: e,
                    message: i
                } = t, d = (0, a.useNewMemberBadge)(e.id, i.author.id);
                return d ? (0, l.jsx)(n.Popout, {
                    animation: n.Popout.Animation.TRANSLATE,
                    align: "center",
                    autoInvert: !0,
                    nudgeAlignIntoViewport: !0,
                    position: "right",
                    renderPopout: t => {
                        let {
                            closePopout: n
                        } = t;
                        return (0, l.jsx)(s.default, {
                            guild: e,
                            message: i,
                            onClose: n
                        })
                    },
                    children: t => {
                        let {
                            onClick: e
                        } = t;
                        return (0, l.jsx)(n.Clickable, {
                            onClick: e,
                            tag: "span",
                            children: (0, l.jsx)(n.Tooltip, {
                                text: o.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT,
                                children: t => (0, l.jsx)("div", {
                                    className: u.newMemberBadge,
                                    ...t,
                                    children: (0, l.jsx)(r.default, {
                                        width: 20,
                                        height: 20
                                    })
                                })
                            })
                        })
                    }
                }) : null
            }
        },
        989750: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return g
                }
            });
            var l = i("37983"),
                n = i("884691"),
                r = i("77078"),
                a = i("716241"),
                s = i("933629"),
                o = i("383161"),
                u = i("42203"),
                d = i("18494"),
                c = i("35006"),
                h = i("599110"),
                f = i("49111"),
                x = i("782340"),
                m = i("966955"),
                g = function(t) {
                    let {
                        guild: e,
                        message: i,
                        onClose: g
                    } = t, j = u.default.getChannel(d.default.getChannelId(e.id));
                    return (n.useEffect(() => {
                        h.default.track(f.AnalyticEvents.OPEN_POPOUT, {
                            type: "New Member Badge Popout",
                            guild_id: e.id,
                            channel_id: null == j ? void 0 : j.id
                        })
                    }, []), null == j) ? null : (0, l.jsx)(s.MessagePopoutContent, {
                        children: (0, l.jsxs)("div", {
                            className: m.popoutContainer,
                            children: [(0, l.jsxs)("div", {
                                className: m.mainContent,
                                children: [(0, l.jsx)("div", {
                                    className: m.iconContainer,
                                    children: (0, l.jsx)(c.default, {
                                        width: 40,
                                        height: 40
                                    })
                                }), (0, l.jsxs)("div", {
                                    children: [(0, l.jsx)(r.Heading, {
                                        variant: "heading-md/semibold",
                                        className: m.header,
                                        children: x.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
                                    }), (0, l.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: x.default.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT
                                    })]
                                })]
                            }), (0, l.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                color: r.Button.Colors.BRAND,
                                className: m.ctaButton,
                                innerClassName: m.ctaButtonContent,
                                fullWidth: !0,
                                onClick: () => {
                                    a.default.trackWithMetadata(f.AnalyticEvents.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                        target_user_id: i.author.id
                                    }), g(), (0, o.mentionUser)(i.author, j.id)
                                },
                                children: x.default.Messages.MENTION_USER.format({
                                    username: i.author.username
                                })
                            })]
                        })
                    })
                }
        },
        752598: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                getInteractionTimeoutTimestamp: function() {
                    return j
                },
                executeMessageComponentInteraction: function() {
                    return p
                },
                handleInteractionResponse: function() {
                    return C
                },
                InteractionStatusViewState: function() {
                    return n
                },
                getInteractionStatusViewState: function() {
                    return v
                },
                canRetryInteractionData: function() {
                    return N
                }
            });
            var l, n, r = i("249654"),
                a = i("872717"),
                s = i("913144"),
                o = i("819689"),
                u = i("798609"),
                d = i("263024"),
                c = i("271938"),
                h = i("274800"),
                f = i("809810"),
                x = i("3765"),
                m = i("606981"),
                g = i("49111");

            function j(t) {
                return null == t || "" === t || Number.isNaN(t) ? Date.now() : r.default.extractTimestamp(t) + 9e5
            }
            let p = async t => {
                let {
                    componentType: e,
                    messageId: i,
                    messageFlags: l,
                    customId: n,
                    indices: s,
                    applicationId: o,
                    channelId: x,
                    guildId: m,
                    localState: j
                } = t, p = r.default.fromTimestamp(Date.now());
                if (!f.default.canQueueInteraction(i, p)) return;
                await d.default.unarchiveThreadIfNecessary(x), (0, h.addQueued)(p, {
                    messageId: i,
                    data: {
                        interactionType: u.InteractionTypes.MESSAGE_COMPONENT,
                        customId: n,
                        indices: s
                    },
                    onFailure: (t, e) => w(x, t, e)
                }), null != j && (0, h.queueInteractionComponentState)(i, p, j, s);
                let v = {
                    type: u.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: p,
                    guild_id: m,
                    channel_id: x,
                    message_flags: l,
                    message_id: i,
                    application_id: o,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: e,
                        custom_id: n,
                        ... function(t) {
                            if (null == t) return null;
                            if (t.type === u.ComponentType.STRING_SELECT || t.type === u.ComponentType.INPUT_TEXT) return t;
                            let e = t.selectedOptions.map(t => t.value);
                            return {
                                type: t.type,
                                values: e
                            }
                        }(j)
                    }
                };
                await a.default.post({
                    url: g.Endpoints.INTERACTIONS,
                    body: v,
                    timeout: 3e3
                }, t => {
                    C(p, x, m, t)
                })
            }, w = (t, e, i) => {
                null == i && null != e && o.default.sendClydeError(t, e)
            }, C = (t, e, i, l) => {
                if (!l.ok) {
                    if (!l.hasErr) {
                        var n;
                        if (l.status >= 400 && l.status < 500 && l.body) {
                            if (l.body.code === g.AbortCodes.INVALID_FORM_BODY && l.body.errors) {
                                let n = (0, m.getFirstSkemaError)(l.body.errors);
                                null != n && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === n.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === n.code) && s.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: e,
                                    guildId: i
                                }), (0, h.setFailed)(t, void 0, null == n ? void 0 : n.message);
                                return
                            }(0, h.setFailed)(t, void 0, l.body.message);
                            return
                        }(0, h.setFailed)(t, null === (n = l.body) || void 0 === n ? void 0 : n.code);
                        return
                    }(0, h.setFailed)(t)
                }
            };
            (l = n || (n = {}))[l.SENDING = 0] = "SENDING", l[l.CREATED = 1] = "CREATED", l[l.FAILED = 2] = "FAILED", l[l.TIMED_OUT = 3] = "TIMED_OUT";
            let v = (t, e) => {
                var i;
                let l = null == e ? void 0 : e.state,
                    a = t.state === g.MessageStates.SENT && j(t.id) < Date.now();
                let s = t.state === g.MessageStates.SEND_FAILED && (null == (i = t.id) || "" === i || Number.isNaN(i) ? Date.now() : r.default.extractTimestamp(i) + 3e3) < Date.now(),
                    o = (null == e ? void 0 : e.data.interactionType) === u.InteractionTypes.APPLICATION_COMMAND,
                    d = t.isCommandType();
                if (o && l === x.InteractionState.QUEUED || d && t.state === g.MessageStates.SENDING && null != e) return n.SENDING;
                if (o && l === x.InteractionState.CREATED || t.hasFlag(g.MessageFlags.LOADING) && !a) return n.CREATED;
                if (null != t.interaction && t.hasFlag(g.MessageFlags.LOADING) && a) return n.TIMED_OUT;
                else if (null != t.interaction && !t.hasFlag(g.MessageFlags.LOADING) && s) return n.TIMED_OUT;
                else if (d && t.state === g.MessageStates.SEND_FAILED) return n.FAILED
            };

            function N(t) {
                var e;
                let i = t.options;
                for (;
                    (null === (e = i) || void 0 === e ? void 0 : e.length) === 1 && (i[0].type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP || i[0].type === u.ApplicationCommandOptionType.SUB_COMMAND);) i = i[0].options;
                for (let t of null != i ? i : [])
                    if (t.type === u.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                getFirstSkemaError: function() {
                    return n
                }
            });
            let l = "_errors";

            function n(t) {
                return function t(e, i) {
                    let n = e[l];
                    if (null != n && Array.isArray(n)) return n[0];
                    for (let [n, r] of Object.entries(e))
                        if (n !== l && null != r && "object" == typeof r) return t(r, null != i ? i : n);
                    return null
                }(t, void 0)
            }
        },
        253299: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return N
                }
            });
            var l = i("37983"),
                n = i("884691"),
                r = i("77078"),
                a = i("716241"),
                s = i("689226"),
                o = i("95039"),
                u = i("828674"),
                d = i("393414"),
                c = i("42203"),
                h = i("18494"),
                f = i("98292"),
                x = i("118503"),
                m = i("483093"),
                g = i("599110"),
                j = i("933629"),
                p = i("49111"),
                w = i("724210"),
                C = i("782340"),
                v = i("422389"),
                N = t => {
                    let {
                        roleIcon: e,
                        guild: i
                    } = t, {
                        name: N
                    } = e;
                    n.useEffect(() => {
                        g.default.track(p.AnalyticEvents.OPEN_POPOUT, {
                            type: "Role Icon Popout",
                            guild_id: i.id,
                            ...(0, a.collectChannelAnalyticsMetadata)(c.default.getChannel(h.default.getChannelId(i.id)))
                        })
                    }, []);
                    let I = null != e.roleId ? i.roles[e.roleId] : void 0,
                        T = (0, u.isSubscriptionRole)(I),
                        E = T ? C.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
                            name: N
                        }) : C.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
                            name: N
                        }),
                        y = {
                            ...e,
                            src: null == e.src ? e.src : (0, s.replaceRoleIconSourceSize)(e.src, 40),
                            size: 40
                        };
                    return (0, l.jsx)(r.Dialog, {
                        children: (0, l.jsx)(j.MessagePopoutContent, {
                            children: (0, l.jsxs)("div", {
                                className: v.popoutContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: v.mainContent,
                                    children: [(0, l.jsx)("div", {
                                        className: v.roleIconContainer,
                                        children: (0, l.jsx)(m.default, {
                                            ...y,
                                            enableTooltip: !1,
                                            className: v.roleIcon,
                                            enableHeight: !1
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: v.truncatingText,
                                        children: [(0, l.jsx)(r.Heading, {
                                            variant: "heading-md/semibold",
                                            className: v.roleName,
                                            children: (0, l.jsx)(f.default, {
                                                children: N
                                            })
                                        }), (0, l.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: E
                                        })]
                                    })]
                                }), (0, l.jsxs)(r.Button, {
                                    size: r.Button.Sizes.SMALL,
                                    color: r.Button.Colors.PRIMARY,
                                    className: v.ctaButton,
                                    innerClassName: v.ctaButtonContent,
                                    fullWidth: !0,
                                    onClick: T ? () => {
                                        (0, d.transitionTo)(p.Routes.CHANNEL(i.id, w.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
                                    } : () => {
                                        (0, o.openGuildBoostingMarketingModal)({
                                            guildId: i.id,
                                            location: {
                                                section: p.AnalyticsSections.ROLE_ICON_POPOUT
                                            }
                                        })
                                    },
                                    autoFocus: !0,
                                    children: [(0, l.jsx)(x.default, {
                                        width: 14,
                                        height: 14,
                                        className: v.boosterBadge
                                    }), C.default.Messages.ROLE_ICON_POPOUT_CTA]
                                })]
                            })
                        })
                    })
                }
        },
        39331: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var l = i("884691"),
                n = i("95045"),
                r = i("227698"),
                a = i("49111");

            function s(t, e) {
                let {
                    hideSimpleEmbedContent: i,
                    formatInline: s = !1,
                    noStyleAndInteraction: o = !1,
                    isInteracting: u = !1,
                    allowHeading: d = !1,
                    allowList: c = !1,
                    allowLinks: h = !1,
                    previewLinkTarget: f = !1
                } = e;
                return l.useMemo(() => null != t.customRenderedContent ? t.customRenderedContent : t.isCommandType() && 0 === t.content.length || t.hasFlag(a.MessageFlags.LOADING) ? (0, r.default)(t) : (0, n.default)(t, {
                    hideSimpleEmbedContent: i,
                    formatInline: s,
                    noStyleAndInteraction: o,
                    isInteracting: u,
                    allowHeading: d,
                    allowList: c,
                    allowLinks: h,
                    previewLinkTarget: f
                }), [t.content, t.customRenderedContent, t.embeds, t.interaction, t.state, t.type, i, s, o, u, d, c, h, f])
            }
        },
        227698: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return r
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("602428");

            function r(t) {
                return {
                    content: (0, l.jsx)(n.default, {
                        message: t
                    }),
                    hasSpoilerEmbeds: !1
                }
            }
        },
        436595: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return o
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("77078"),
                r = i("188554"),
                a = i("782340"),
                s = i("602340");

            function o() {
                return (0, l.jsx)(n.Tooltip, {
                    text: a.default.Messages.SUPPRESS_NOTIFICATIONS_TOOLTIP,
                    children: t => (0, l.jsx)("div", {
                        className: s.badge,
                        ...t,
                        children: (0, l.jsx)(r.default, {
                            width: "1rem",
                            height: "1rem"
                        })
                    })
                })
            }
        },
        383161: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                mentionUser: function() {
                    return x
                },
                default: function() {
                    return m
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("446674"),
                r = i("77078"),
                a = i("352674"),
                s = i("42203"),
                o = i("957255"),
                u = i("18494"),
                d = i("659500"),
                c = i("158998"),
                h = i("49111"),
                f = i("782340");

            function x(t, e) {
                let {
                    id: i
                } = t, l = "@".concat(c.default.getUserTag(t, {
                    decoration: "never"
                })), n = "<@".concat(i, ">");
                d.ComponentDispatch.dispatchToLastSubscribed(h.ComponentActions.INSERT_TEXT, {
                    plainText: l,
                    rawText: n
                }), null != e && a.default.startTyping(e)
            }

            function m(t, e, i) {
                let [a, d] = (0, n.useStateFromStoresArray)([u.default, s.default, o.default], () => {
                    let t = u.default.getChannelId(e),
                        i = s.default.getChannel(t),
                        l = null != i && (i.isMultiUserDM() || o.default.can(h.Permissions.SEND_MESSAGES, i));
                    return [t, l]
                }, [e]), c = i === h.AppContext.POPOUT;
                return !d || c ? null : (0, l.jsx)(r.MenuItem, {
                    id: "mention",
                    label: f.default.Messages.MENTION,
                    action: function() {
                        x(t, a)
                    }
                })
            }
        },
        83910: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("469563"),
                r = i("926001"),
                a = i("75196"),
                s = (0, n.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: i = 24,
                        color: n = "currentColor",
                        foreground: r,
                        ...s
                    } = t;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: e,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: n,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, r.SlashBoxIcon)
        },
        188554: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("469563"),
                r = i("447060"),
                a = i("75196"),
                s = (0, n.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: i = 24,
                        color: n = "currentColor",
                        foreground: r,
                        ...s
                    } = t;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(s),
                        width: e,
                        height: i,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            className: r,
                            fill: n,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18 10.7101C15.1085 9.84957 13 7.17102 13 4C13 3.69264 13.0198 3.3899 13.0582 3.093C12.7147 3.03189 12.3611 3 12 3C8.686 3 6 5.686 6 9V14C6 15.657 4.656 17 3 17V18H21V17C19.344 17 18 15.657 18 14V10.7101ZM8.55493 19C9.24793 20.19 10.5239 21 11.9999 21C13.4759 21 14.7519 20.19 15.4449 19H8.55493Z"
                        }), (0, l.jsx)("path", {
                            d: "M18.2624 5.50209L21 2.5V1H16.0349V2.49791H18.476L16 5.61088V7H21V5.50209H18.2624Z",
                            fill: n
                        })]
                    })
                }, r.BellZIcon)
        },
        491401: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("469563"),
                r = i("926496"),
                a = i("75196"),
                s = (0, n.replaceIcon)(function(t) {
                    let {
                        color: e = "currentColor",
                        height: i = 24,
                        width: n = 24,
                        ...r
                    } = t;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(r),
                        width: n,
                        height: i,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, l.jsx)("path", {
                            d: "M12.83 14.24L9.29006 10.71C9.19737 10.6165 9.124 10.5057 9.07424 10.3839C9.02447 10.2621 8.99926 10.1316 9.00002 10V4H11V9.58997L14.24 12.83L12.83 14.24Z",
                            fill: e
                        }), (0, l.jsx)("path", {
                            d: "M13.3101 2L18 6.69V13.3101L13.3101 18H6.68994L2 13.3101V6.69L6.68994 2H13.3101V2ZM13.73 0H6.27002C6.00525 0.00368349 5.75169 0.107244 5.56006 0.289978L0.290039 5.56C0.107305 5.75163 0.00368349 6.00525 0 6.27002V13.73C0.00368349 13.9947 0.107305 14.2483 0.290039 14.4399L5.56006 19.71C5.75169 19.8927 6.00525 19.9963 6.27002 20H13.73C13.9947 19.9963 14.2483 19.8927 14.4399 19.71L19.71 14.4399C19.8927 14.2483 19.9963 13.9947 20 13.73V6.27002C19.9963 6.00525 19.8927 5.75163 19.71 5.56L14.4399 0.289978C14.2483 0.107244 13.9947 0.00368349 13.73 0V0Z",
                            fill: e
                        })]
                    })
                }, r.ClockTimeoutIcon)
        },
        95689: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("469563"),
                r = i("578478"),
                a = i("75196"),
                s = (0, n.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: i = 24,
                        color: n = "currentColor",
                        foreground: r,
                        ...s
                    } = t;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: e,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: n
                        })
                    })
                }, r.ImageIcon)
        },
        35006: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("469563"),
                r = i("439574"),
                a = i("75196"),
                s = (0, n.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: i = 24,
                        color: n = "currentColor",
                        ...r
                    } = t;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(r),
                        width: e,
                        height: i,
                        viewBox: "0 0 64 64",
                        fill: "none",
                        children: [(0, l.jsx)("rect", {
                            width: "8",
                            height: "8",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "56",
                            y: "56",
                            width: "8",
                            height: "8",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "28",
                            y: "21.6453",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "30.6667",
                            y: "21.6453",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "28",
                            y: "18.9785",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "25.3335",
                            y: "18.9785",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "30.6667",
                            y: "18.9785",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "28",
                            y: "16.3119",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "25.3335",
                            y: "16.3119",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "22.6667",
                            y: "16.3119",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "30.6667",
                            y: "16.3119",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "28",
                            y: "13.6453",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "25.3335",
                            y: "13.6453",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "22.6667",
                            y: "13.6453",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "30.6667",
                            y: "13.6453",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "28",
                            y: "10.9785",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "25.3335",
                            y: "10.9785",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "22.6667",
                            y: "10.9785",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            opacity: "0.2",
                            x: "30.6667",
                            y: "10.9785",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "28",
                            y: "8.31189",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "25.3335",
                            y: "8.31189",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 36 21.6453)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 36 18.9785)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 38.6667 18.9785)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 36 16.3119)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 38.6667 16.3119)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 41.3335 16.3119)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 36 13.6453)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 38.6667 13.6453)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 41.3335 13.6453)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 36 10.9785)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 38.6667 10.9785)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 41.3335 10.9785)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 36 8.31189)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 38.6667 8.31189)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "30.6667",
                            y: "24.3119",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "30.6394",
                            y: "47.6882",
                            width: "2.66667",
                            height: "2.66666",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "30.6394",
                            y: "45.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "28.0273",
                            y: "45.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "17.5796",
                            y: "34.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "28.0273",
                            y: "42.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "17.5796",
                            y: "31.6882",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "28.0273",
                            y: "39.6882",
                            width: "2.66667",
                            height: "2.66666",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "17.5796",
                            y: "29.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "28.0273",
                            y: "37.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "17.5796",
                            y: "26.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "25.4155",
                            y: "45.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "14.9675",
                            y: "34.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "25.4155",
                            y: "42.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "14.9675",
                            y: "31.6882",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "25.4155",
                            y: "39.6882",
                            width: "2.66667",
                            height: "2.66666",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "14.9675",
                            y: "29.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "25.4155",
                            y: "37.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "14.9675",
                            y: "26.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "22.8035",
                            y: "45.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "12.3555",
                            y: "34.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "22.8035",
                            y: "42.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "12.3555",
                            y: "31.6882",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "22.8035",
                            y: "39.6882",
                            width: "2.66667",
                            height: "2.66666",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "12.3555",
                            y: "29.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "22.8035",
                            y: "37.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "12.3555",
                            y: "26.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "20.1914",
                            y: "45.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "9.74365",
                            y: "34.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "20.1914",
                            y: "42.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "9.74365",
                            y: "31.6882",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "20.1914",
                            y: "39.6882",
                            width: "2.66667",
                            height: "2.66666",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "9.74365",
                            y: "29.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "20.1914",
                            y: "37.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "9.74365",
                            y: "26.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "17.5796",
                            y: "45.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "7.13159",
                            y: "34.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "17.5796",
                            y: "42.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "7.13159",
                            y: "31.6882",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "14.9128",
                            y: "42.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "22.9128",
                            y: "31.6882",
                            width: "2.66667",
                            height: "2.66667",
                            transform: "rotate(-180 22.9128 31.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "17.5796",
                            y: "39.6882",
                            width: "2.66667",
                            height: "2.66666",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "7.13159",
                            y: "29.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "14.9128",
                            y: "39.6882",
                            width: "2.66667",
                            height: "2.66666",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "22.9128",
                            y: "34.3549",
                            width: "2.66667",
                            height: "2.66667",
                            transform: "rotate(-180 22.9128 34.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "12.2461",
                            y: "39.6882",
                            width: "2.66667",
                            height: "2.66666",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "25.5796",
                            y: "34.3549",
                            width: "2.66667",
                            height: "2.66667",
                            transform: "rotate(-180 25.5796 34.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "17.5796",
                            y: "37.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "7.13159",
                            y: "26.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "14.9128",
                            y: "37.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "22.9128",
                            y: "37.0215",
                            width: "2.66667",
                            height: "2.66667",
                            transform: "rotate(-180 22.9128 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "12.2461",
                            y: "37.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "25.5796",
                            y: "37.0215",
                            width: "2.66667",
                            height: "2.66667",
                            transform: "rotate(-180 25.5796 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "9.57959",
                            y: "37.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "28.2461",
                            y: "37.0215",
                            width: "2.66667",
                            height: "2.66667",
                            transform: "rotate(-180 28.2461 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 35.9727 45.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 46.4207 34.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 35.9727 42.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 46.4207 31.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66666",
                            transform: "matrix(-1 0 0 1 35.9727 39.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 46.4207 29.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 35.9727 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 46.4207 26.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 38.5847 45.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 49.0327 34.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 38.5847 42.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 49.0327 31.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66666",
                            transform: "matrix(-1 0 0 1 38.5847 39.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 49.0327 29.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 38.5847 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 49.0327 26.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 41.1968 45.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 51.6445 34.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 41.1968 42.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 51.6445 31.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66666",
                            transform: "matrix(-1 0 0 1 41.1968 39.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 51.6445 29.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 41.1968 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 51.6445 26.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 43.8086 45.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 54.2566 34.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 43.8086 42.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 54.2566 31.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66666",
                            transform: "matrix(-1 0 0 1 43.8086 39.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 54.2566 29.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 43.8086 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 54.2566 26.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 46.4207 45.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 56.8687 34.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 46.4207 42.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 56.8687 31.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 49.0874 42.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(1 0 0 -1 41.0874 31.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66666",
                            transform: "matrix(-1 0 0 1 46.4207 39.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 56.8687 29.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66666",
                            transform: "matrix(-1 0 0 1 49.0874 39.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(1 0 0 -1 41.0874 34.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66666",
                            transform: "matrix(-1 0 0 1 51.7539 39.6882)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(1 0 0 -1 38.4207 34.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 46.4207 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 56.8687 26.3549)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 49.0874 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(1 0 0 -1 41.0874 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 51.7539 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66666",
                            height: "2.66667",
                            transform: "matrix(1 0 0 -1 38.4207 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(-1 0 0 1 54.4207 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            width: "2.66667",
                            height: "2.66667",
                            transform: "matrix(1 0 0 -1 35.7539 37.0215)",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "30.6394",
                            y: "50.3549",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        }), (0, l.jsx)("rect", {
                            x: "30.6394",
                            y: "53.0215",
                            width: "2.66667",
                            height: "2.66667",
                            fill: n
                        })]
                    })
                }, r.NewUserInServerIcon)
        },
        602428: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                getFailedContent: function() {
                    return w
                },
                InteractionStatusMessage: function() {
                    return C
                },
                default: function() {
                    return v
                }
            });
            var l = i("37983"),
                n = i("884691"),
                r = i("414456"),
                a = i.n(r),
                s = i("775560"),
                o = i("446674"),
                u = i("77078"),
                d = i("812684"),
                c = i("809810"),
                h = i("752598"),
                f = i("423487"),
                x = i("258078"),
                m = i("49111"),
                g = i("782340"),
                j = i("932640");

            function p(t) {
                return {
                    text: t,
                    icon: (0, l.jsx)(u.Dots, {
                        className: j.icon,
                        dotRadius: 3.5,
                        themed: !0
                    })
                }
            }

            function w(t) {
                return {
                    text: null != t ? t : g.default.Messages.APPLICATION_COMMAND_FAILED,
                    color: x.default.Colors.ERROR,
                    icon: (0, l.jsx)(f.default, {
                        width: 16,
                        height: 16,
                        className: a(j.icon, j.errorIcon)
                    })
                }
            }

            function C(t) {
                let {
                    className: e,
                    icon: i,
                    text: n,
                    color: r
                } = t;
                return (0, l.jsxs)("div", {
                    className: a(j.wrapper, e),
                    children: [i, (0, l.jsx)(x.default, {
                        size: x.default.Sizes.SIZE_14,
                        color: r,
                        children: n
                    })]
                })
            }
            var v = n.memo(function(t) {
                let {
                    message: e,
                    className: i,
                    component: r
                } = t, a = (0, s.useForceUpdate)(), u = (0, o.useStateFromStores)([c.default], () => c.default.getInteraction(e), [e]);
                n.useEffect(() => {
                    let t = null;
                    if (e.hasFlag(m.MessageFlags.LOADING) && null != u) {
                        let i = (0, h.getInteractionTimeoutTimestamp)(e.id) - Date.now();
                        i > 0 && (t = setTimeout(() => a(), 1e3 + i))
                    }
                    return () => {
                        clearTimeout(t)
                    }
                }, [a, u, e]);
                let f = null;
                if (null == r) f = function(t, e) {
                    let i = (0, h.getInteractionStatusViewState)(e, t);
                    switch (i) {
                        case h.InteractionStatusViewState.SENDING:
                            return p(g.default.Messages.APPLICATION_COMMAND_SENDING);
                        case h.InteractionStatusViewState.CREATED:
                            return p(g.default.Messages.APPLICATION_COMMAND_WAITING.format({
                                applicationName: e.author.username
                            }));
                        case h.InteractionStatusViewState.TIMED_OUT:
                            return w(g.default.Messages.APPLICATION_COMMAND_TIMED_OUT);
                        case h.InteractionStatusViewState.FAILED:
                            return w(e.interactionError)
                    }
                }(u, e);
                else {
                    let t = (0, d.getActionRowErrorText)(u, e, r);
                    null != t && (f = w(t))
                }
                if (null == f) return null;
                let {
                    text: x,
                    icon: j,
                    color: v
                } = f;
                return (0, l.jsx)(C, {
                    icon: j,
                    text: x,
                    className: i,
                    color: v
                })
            })
        },
        780571: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return o
                }
            });
            var l = i("37983");
            i("884691");
            var n = i("414456"),
                r = i.n(n),
                a = i("77078"),
                s = i("741566"),
                o = function(t) {
                    let {
                        className: e,
                        compact: i = !1,
                        contentOnly: n = !1,
                        zalgo: o = !0,
                        disableInteraction: u = !1,
                        childrenHighlight: d,
                        childrenRepliedMessage: c,
                        childrenExecutedCommand: h,
                        childrenHeader: f,
                        childrenSystemMessage: x,
                        childrenButtons: m,
                        childrenMessageContent: g,
                        childrenAccessories: j,
                        messageRef: p,
                        focusProps: w = {
                            offset: {
                                left: 4,
                                right: 4
                            }
                        },
                        hasThread: C,
                        isSystemMessage: v,
                        hasReply: N,
                        ...I
                    } = t, T = (0, l.jsx)(a.FocusRing, {
                        ...w,
                        children: (0, l.jsxs)("div", {
                            className: r(e, {
                                [s.wrapper]: !0,
                                [s.contentOnly]: n,
                                [s.compact]: i,
                                [s.cozy]: !i,
                                [s.zalgo]: o,
                                [s.hasThread]: C,
                                [s.isSystemMessage]: v,
                                [s.hasReply]: N
                            }),
                            ref: p,
                            ...I,
                            role: "article",
                            children: [!i && d, c, h, (0, l.jsxs)("div", {
                                className: s.contents,
                                children: [x, f, null == x && g]
                            }), j, null != m ? (0, l.jsx)("div", {
                                className: s.buttonContainer,
                                children: m
                            }) : null]
                        })
                    });
                    return u ? (0, l.jsx)(a.FocusBlock, {
                        children: T
                    }) : T
                }
        },
        93332: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                useUsername: function() {
                    return b
                },
                useAvatar: function() {
                    return B
                },
                BaseMessageHeader: function() {
                    return U
                },
                default: function() {
                    return V
                }
            });
            var l = i("37983"),
                n = i("884691"),
                r = i("414456"),
                a = i.n(r),
                s = i("394846"),
                o = i("446674"),
                u = i("77078"),
                d = i("563143"),
                c = i("250813"),
                h = i("793621"),
                f = i("406043"),
                x = i("28913"),
                m = i("865343"),
                g = i("253299"),
                j = i("256572"),
                p = i("436595"),
                w = i("506885"),
                C = i("106435"),
                v = i("168973"),
                N = i("305961"),
                I = i("957255"),
                T = i("491401"),
                E = i("483093"),
                y = i("315102"),
                O = i("659500"),
                M = i("568734"),
                _ = i("587904"),
                A = i("473374"),
                S = i("195483"),
                R = i("49111"),
                L = i("782340"),
                D = i("741566");

            function P(t) {
                let {
                    avatarSrc: e,
                    avatarDecorationSrc: i,
                    compact: n,
                    onClick: r,
                    onContextMenu: s,
                    onMouseDown: o,
                    onMouseEnter: u,
                    onMouseLeave: d,
                    onKeyDown: c,
                    showCommunicationDisabledStyles: h = !1,
                    className: f
                } = t;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("img", {
                        onClick: r,
                        onContextMenu: s,
                        onMouseDown: o,
                        onKeyDown: c,
                        onMouseEnter: u,
                        onMouseLeave: d,
                        src: e,
                        "aria-hidden": !0,
                        className: a(f, D.avatar, {
                            [D.compact]: n,
                            [D.clickable]: null != r,
                            [D.communicationDisabledOpacity]: h
                        }),
                        alt: " "
                    }), null == i || n ? null : (0, l.jsx)("img", {
                        className: D.avatarDecoration,
                        src: i,
                        alt: " ",
                        "aria-hidden": !0
                    })]
                })
            }

            function b(t, e, i) {
                let {
                    message: n,
                    channel: r,
                    author: a,
                    compact: s = !1,
                    onContextMenu: o,
                    showUsernamePopout: u,
                    roleIcon: d,
                    onClickUsername: c,
                    onPopoutRequestClose: h
                } = t;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(S.default, {
                        message: n,
                        channel: r,
                        author: a,
                        compact: s,
                        roleIcon: d,
                        showPopout: u,
                        renderPopout: e,
                        onClick: c,
                        onContextMenu: o,
                        onPopoutRequestClose: h,
                        decorations: i,
                        renderRemixTag: !0
                    }), s && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("i", {
                            className: D.separator,
                            children: ":"
                        }), " "]
                    })]
                })
            }

            function B(t) {
                var e;
                let {
                    props: i,
                    guildId: r,
                    handleRenderPopout: a,
                    showCommunicationDisabledStyles: d = !1,
                    className: c
                } = t, {
                    message: h,
                    author: f,
                    compact: x = !1,
                    subscribeToGroupId: m,
                    animate: g = !0,
                    onContextMenu: j,
                    onClickAvatar: p,
                    onPopoutRequestClose: N,
                    showAvatarPopout: I
                } = i, [T, E] = n.useState(!1), M = (0, o.useStateFromStores)([v.default], () => null !== (e = i.displayCompactAvatars) && void 0 !== e ? e : v.default.displayCompactAvatars), _ = null != h.messageReference && null != h.webhookId, A = h.author, {
                    id: S
                } = A, L = A;
                A.isClyde() && null != r && (null == f ? void 0 : f.guildMemberAvatar) != null && (L = A.addGuildAvatarHash(r, f.guildMemberAvatar));
                let {
                    avatarSrc: D,
                    avatarDecorationSrc: b,
                    eventHandlers: B
                } = (0, C.default)({
                    user: L,
                    guildId: r,
                    size: x ? 32 : 80,
                    animateOnHover: null != m ? !T : !g
                });
                if (n.useEffect(() => {
                        if (null != m) return O.ComponentDispatch.subscribeKeyed(R.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(m, ":").concat(S), E), () => void O.ComponentDispatch.unsubscribeKeyed(R.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, "".concat(m, ":").concat(S), E)
                    }, [S, m]), !x || M) {
                    if (null != a && null != I) return (0, l.jsx)(u.Popout, {
                        preload: _ ? void 0 : function() {
                            return (0, w.default)(h.author.id, null != f.guildMemberAvatar && null != r ? (0, y.getGuildMemberAvatarURLSimple)({
                                guildId: r,
                                userId: h.author.id,
                                avatar: f.guildMemberAvatar,
                                size: 80
                            }) : h.author.getAvatarURL(void 0, 80, !1), {
                                guildId: r,
                                channelId: h.channel_id
                            })
                        },
                        renderPopout: a,
                        shouldShow: I,
                        position: s.isMobile ? "window_center" : "right",
                        onRequestClose: N,
                        children: t => P({
                            ...B,
                            avatarSrc: D,
                            avatarDecorationSrc: b,
                            compact: x,
                            onClick: p,
                            onContextMenu: j,
                            onMouseDown: t.onMouseDown,
                            onKeyDown: t.onKeyDown,
                            showCommunicationDisabledStyles: d,
                            className: c
                        })
                    });
                    else return P({
                        ...B,
                        avatarSrc: D,
                        avatarDecorationSrc: b,
                        compact: x,
                        onClick: p,
                        onContextMenu: j,
                        onMouseDown: void 0,
                        onKeyDown: void 0,
                        showCommunicationDisabledStyles: d,
                        className: c
                    })
                }
            }

            function U(t) {
                let {
                    message: e,
                    avatar: i,
                    username: n,
                    usernameSpanId: r,
                    usernameClassName: s,
                    compact: o,
                    showTimestamp: d,
                    showTimestampOnHover: c,
                    ariaLabelledBy: h,
                    ariaDescribedBy: f,
                    className: x,
                    messageClassname: g,
                    badges: j
                } = t;
                return (0, l.jsxs)(l.Fragment, {
                    children: [!o && i, (0, l.jsxs)(u.H, {
                        className: a(D.header, x),
                        "aria-describedby": f,
                        "aria-labelledby": h,
                        children: [d && o && (0, l.jsx)(_.default, {
                            id: (0, m.getMessageTimestampId)(e),
                            compact: !0,
                            timestamp: e.timestamp,
                            isVisibleOnlyOnHover: c,
                            className: g,
                            isInline: !1
                        }), o && i, (0, l.jsx)("span", {
                            id: r,
                            className: s,
                            children: n
                        }), d && !o && (0, l.jsx)(_.default, {
                            id: (0, m.getMessageTimestampId)(e),
                            timestamp: e.timestamp,
                            className: g
                        }), null != j && j.length > 0 ? (0, l.jsx)("div", {
                            className: D.badgesContainer,
                            children: j
                        }) : null]
                    })]
                })
            }

            function V(t) {
                var e, i;
                let r;
                let {
                    message: s,
                    repliedMessage: w,
                    compact: C = !1,
                    renderPopout: y,
                    showTimestampOnHover: O,
                    roleIcon: _,
                    subscribeToGroupId: P,
                    hideTimestamp: V,
                    className: F,
                    channel: G
                } = t, H = n.useMemo(() => null != y ? t => y(t, s) : void 0, [y, s]), [, k] = (0, f.default)(s.author.id, t.guildId), Z = (0, o.useStateFromStores)([N.default], () => N.default.getGuild(t.guildId), [t.guildId]), z = (0, d.useIsClydePersonalityModified)(null !== (e = null == Z ? void 0 : Z.id) && void 0 !== e ? e : "", !1), K = null != s.author && null != Z && I.default.canManageUser(R.Permissions.MODERATE_MEMBERS, s.author, Z), W = k && K, Y = B({
                    props: t,
                    guildId: t.guildId,
                    handleRenderPopout: H,
                    showCommunicationDisabledStyles: W
                }), X = (0, o.useStateFromStores)([v.default], () => null !== (i = t.displayCompactAvatars) && void 0 !== i ? i : v.default.displayCompactAvatars), q = (!C || X) && null != _ && null != Z ? (0, l.jsx)(u.Popout, {
                    animation: u.Popout.Animation.TRANSLATE,
                    align: "center",
                    autoInvert: !0,
                    nudgeAlignIntoViewport: !0,
                    position: "right",
                    renderPopout: () => (0, l.jsx)(g.default, {
                        roleIcon: _,
                        guild: Z
                    }),
                    children: t => {
                        let {
                            onClick: e
                        } = t;
                        return (0, l.jsx)(E.default, {
                            ..._,
                            className: D.roleIcon,
                            onClick: e
                        })
                    }
                }, "role-icon-children") : (!C || X) && null != _ ? (0, l.jsx)(E.default, {
                    ..._,
                    className: D.roleIcon
                }, "role-icon-children") : null;
                r = null != Z && s.author.isClyde() && z ? (0, A.renderSystemTag)({
                    message: s,
                    channel: G,
                    user: null == s ? void 0 : s.author,
                    compact: C,
                    hideIcon: !0,
                    isRepliedMessage: !1,
                    children: (0, l.jsx)(c.default, {}, "clyde-personality")
                }) : (0, A.renderSystemTag)({
                    message: s,
                    channel: G,
                    user: null == s ? void 0 : s.author,
                    compact: C,
                    isRepliedMessage: !1
                });
                let Q = [];
                null != q && Q.push(q), null != Z && Q.push((0, l.jsx)(x.default, {
                    guild: Z,
                    message: s
                }, "new-member")), null != G && null != Z && Q.push((0, l.jsx)(h.default, {
                    guild: Z,
                    channel: G,
                    userId: s.author.id
                }, "connections"));
                let J = [];
                (0, M.hasFlag)(s.flags, R.MessageFlags.SUPPRESS_NOTIFICATIONS) && J.push((0, l.jsx)(p.default, {}, "suppress-notifications"));
                let $ = {};
                $[S.UsernameDecorationTypes.SYSTEM_TAG] = r, $[S.UsernameDecorationTypes.BADGES] = Q;
                let tt = b(t, H, $),
                    te = (0, m.getMessageUsernameId)(s, P),
                    ti = (0, m.getMessageTimestampId)(s),
                    tl = V ? "".concat(te) : "".concat(te, " ").concat(ti),
                    tn = (null == w ? void 0 : w.state) === j.ReferencedMessageState.LOADED ? (0, m.getMessageReplyId)(s) : void 0;
                return (0, l.jsx)(U, {
                    message: s,
                    avatar: Y,
                    username: (0, l.jsxs)(l.Fragment, {
                        children: [W && (0, l.jsx)(u.Tooltip, {
                            text: L.default.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                            children: t => (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(T.default, {
                                    ...t,
                                    width: 12,
                                    height: 12,
                                    className: C ? D.compactCommunicationDisabled : D.communicationDisabled
                                }), (0, l.jsx)(u.HiddenVisually, {
                                    children: L.default.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
                                })]
                            })
                        }), tt]
                    }),
                    usernameSpanId: (0, m.getMessageUsernameId)(s, P),
                    usernameClassName: a(D.headerText, {
                        [D.hasRoleIcon]: null != q,
                        [D.hasBadges]: null != r || J.length > 0
                    }),
                    compact: C,
                    showTimestamp: !0 !== V,
                    showTimestampOnHover: O,
                    ariaLabelledBy: tl,
                    ariaDescribedBy: tn,
                    className: F,
                    badges: J
                })
            }
        }
    }
]);