(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46039"], {
        809764: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6d5235992c9995ab87e8.svg"
        },
        352674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("913144"),
                a = {
                    startTyping(e) {
                        l.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: e
                        })
                    },
                    stopTyping(e) {
                        l.default.dispatch({
                            type: "TYPING_STOP_LOCAL",
                            channelId: e
                        })
                    }
                }
        },
        563143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsClydePersonalityModified: function() {
                    return r
                }
            });
            var l = n("884691"),
                a = n("65597"),
                i = n("335189"),
                o = n("473591");

            function r(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = (0, a.default)([o.default], () => o.default.getSettings(e));
                return l.useEffect(() => {
                    null != e && t && (0, i.fetchClydeSettings)(e)
                }, [e, t]), null != e && (null == n ? void 0 : n.personality) != null && (null == n ? void 0 : n.personality) !== ""
            }
        },
        250813: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("987772"),
                o = n("782340"),
                r = n("833837");

            function s() {
                return (0, l.jsx)(a.Tooltip, {
                    text: o.default.Messages.CLYDE_PERSONALITY_BADGE_TOOLTIP,
                    tooltipClassName: r.tooltip,
                    children: e => (0, l.jsx)("div", {
                        className: r.personalityBadge,
                        ...e,
                        children: (0, l.jsx)(i.default, {
                            width: 12,
                            height: 12
                        })
                    })
                })
            }
        },
        562368: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("913144");
            let i = new Map;
            class o extends l.default.Store {
                getGuildRoleConnectionEligibility(e) {
                    return null != e ? i.get(e) : void 0
                }
            }
            o.displayName = "GuildRoleConnectionEligibilityStore";
            var r = new o(a.default, {
                GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: e => {
                    let {
                        roleId: t,
                        roleConnectionEligibility: n
                    } = e;
                    i.set(t, n)
                }
            })
        },
        793621: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("627445"),
                o = n.n(i),
                r = n("917351"),
                s = n.n(r),
                u = n("446674"),
                d = n("669491"),
                c = n("819855"),
                f = n("77078"),
                N = n("851387"),
                m = n("308289"),
                p = n("841098"),
                g = n("376556"),
                E = n("716241"),
                C = n("401642"),
                T = n("766274"),
                _ = n("26989"),
                O = n("79798"),
                h = n("36694"),
                I = n("599110"),
                v = n("535013"),
                S = n("562368"),
                M = n("216049"),
                A = n("339023"),
                x = n("526190"),
                R = n("685058"),
                P = n("214509"),
                y = n("49111"),
                b = n("590456"),
                D = n("782340"),
                L = n("406108");

            function j(e) {
                let t, {
                    connectionType: n,
                    connectionMetadataField: a,
                    operator: i,
                    value: o,
                    description: r
                } = e;
                if (null != r) switch (i) {
                    case P.OperatorTypes.LESS_THAN:
                        t = D.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: r,
                            count: Math.max(0, Number(o) - 1)
                        });
                        break;
                    case P.OperatorTypes.GREATER_THAN:
                        t = D.default.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: r,
                            count: Math.max(0, Number(o) + 1)
                        });
                        break;
                    default:
                        t = r
                } else t = (0, v.getConnectionsCheckText)({
                    connectionType: n,
                    connectionMetadataField: a,
                    operator: i,
                    value: o
                });
                return null == t ? null : (0, l.jsxs)("div", {
                    className: L.popoutCheck,
                    children: [(0, l.jsx)(h.default, {
                        className: L.popoutCheckIcon
                    }), (0, l.jsx)(f.Text, {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: t
                    })]
                })
            }

            function B(e) {
                let {
                    eligibilityStates: t
                } = e, n = (0, p.default)(), a = (0, f.useToken)(d.default.unsafe_rawColors.GREEN_330).hex(), i = s.groupBy(t, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""));
                return (0, l.jsx)(l.Fragment, {
                    children: Object.keys(i).map(e => {
                        var t, r;
                        let s;
                        let u = i[e],
                            d = u.filter(e => null != e.operator),
                            N = u.find(e => null != e.application),
                            p = g.default.get(e),
                            E = null == N ? void 0 : N.application,
                            C = (null == E ? void 0 : E.bot) != null ? new T.default(E.bot) : null,
                            _ = v.officialApplicationIds.includes(null !== (t = null == E ? void 0 : E.id) && void 0 !== t ? t : "");
                        return _ ? s = (0, l.jsx)(x.default, {
                            className: L.botTag,
                            color: a,
                            size: 16
                        }) : null != C && (s = (0, l.jsx)(O.default, {
                            className: L.botTag,
                            verified: C.isVerifiedBot()
                        })), (0, l.jsxs)("div", {
                            className: L.popoutChecksGroup,
                            children: [(0, l.jsxs)("div", {
                                className: L.popoutCheckGroupName,
                                children: [null != p ? (0, l.jsx)("img", {
                                    src: (0, c.isThemeDark)(n) ? p.icon.darkSVG : p.icon.lightSVG,
                                    alt: "",
                                    className: L.popoutCheckGroupPlatformIcon
                                }) : null, null != C ? (0, l.jsx)(m.default, {
                                    user: C,
                                    size: f.AvatarSizes.SIZE_20,
                                    className: L.popoutCheckGroupPlatformIcon
                                }) : null, (0, l.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    color: "interactive-active",
                                    children: null !== (r = null == p ? void 0 : p.name) && void 0 !== r ? r : null == E ? void 0 : E.name
                                }), s]
                            }), d.map(e => {
                                let {
                                    connection_type: t,
                                    connection_metadata_field: n,
                                    operator: a,
                                    value: i,
                                    description: r
                                } = e;
                                return o(null != n, "connectionMetadataField is null"), o(null != a, "operator is null"), o(null != i, "value is null"), (0, l.jsx)(j, {
                                    connectionType: t,
                                    connectionMetadataField: n,
                                    operator: a,
                                    value: i,
                                    description: r
                                }, "".concat(t, ":").concat(n, ":").concat(a, ":").concat(i))
                            })]
                        }, e)
                    })
                })
            }

            function U(e) {
                var t;
                let n, {
                    onGetRolesClicked: i,
                    onOpenProfile: o,
                    eligibilityStates: r,
                    userId: s,
                    roleId: d,
                    channelId: c,
                    guildId: N
                } = e;
                a.useEffect(() => {
                    I.default.track(y.AnalyticEvents.PASSPORT_ROLE_POPOUT_VIEWED, {
                        other_user_id: s,
                        role_id: d,
                        ...(0, E.collectChannelAnalyticsMetadataFromId)(c),
                        ...(0, E.collectGuildAnalyticsMetadata)(N)
                    })
                }, [s, d, c, N]);
                let m = (0, u.useStateFromStores)([_.default], () => {
                    var e;
                    return null !== (t = null === (e = _.default.getSelfMember(N)) || void 0 === e ? void 0 : e.roles.includes(d)) && void 0 !== t && t
                }, [N, d]);
                return n = 1 === r.length && 1 === r[0].length ? D.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === r.length ? D.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : D.default.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format(), (0, l.jsxs)("div", {
                    className: L.popout,
                    children: [(0, l.jsx)("div", {
                        className: L.popoutHeaderContainer,
                        children: (0, l.jsx)(f.Text, {
                            variant: "text-xs/normal",
                            color: "text-normal",
                            className: L.popoutHeaderText,
                            children: n
                        })
                    }), (0, l.jsx)("div", {
                        className: L.popoutChecks,
                        children: (0, l.jsx)(B, {
                            eligibilityStates: r.flat()
                        })
                    }), (0, l.jsxs)("div", {
                        className: L.buttonContainer,
                        children: [m ? null : (0, l.jsx)(f.Button, {
                            className: L.getRolesButton,
                            onClick: i,
                            children: D.default.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
                        }), (0, l.jsx)(f.Button, {
                            className: L.viewConnectionsButton,
                            color: f.Button.Colors.PRIMARY,
                            onClick: o,
                            children: D.default.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
                        })]
                    })]
                })
            }

            function G(e) {
                let {
                    userId: t,
                    guild: n,
                    channel: i
                } = e, r = (0, M.default)(n, t, i.id, !0), s = (0, u.useStateFromStores)([S.default], () => S.default.getGuildRoleConnectionEligibility(null == r ? void 0 : r.id)), [d, c] = a.useState(null == s);
                if (null == r) return null;
                async function m() {
                    o(null != r, "visibleConnectionsRole is null"), d && null == s && (await N.default.fetchGuildRoleConnectionsEligibility(n.id, r.id), c(!1))
                }
                return (0, l.jsx)(f.LazyPopout, {
                    onRequestOpen: m,
                    renderPopout: function() {
                        return Promise.resolve(e => {
                            let {
                                closePopout: a
                            } = e;
                            return null == s ? (0, l.jsx)(l.Fragment, {}) : (o(null != r, "visibleConnectionsRole is null"), (0, l.jsx)(U, {
                                eligibilityStates: s,
                                userId: t,
                                roleId: r.id,
                                channelId: i.id,
                                guildId: n.id,
                                onGetRolesClicked: () => {
                                    (0, R.openGuildRoleConnectionsModal)(n.id)
                                },
                                onOpenProfile: () => {
                                    (0, C.openUserProfileModal)({
                                        userId: t,
                                        guildId: n.id,
                                        channelId: i.id,
                                        section: b.UserProfileSections.USER_INFO_CONNECTIONS,
                                        analyticsLocation: {
                                            section: y.AnalyticsSections.CHANNEL
                                        }
                                    }), a()
                                }
                            }))
                        })
                    },
                    align: "top",
                    nudgeAlignIntoViewport: !0,
                    children: e => (0, l.jsx)(f.Tooltip, {
                        text: D.default.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
                        children: t => (0, l.jsxs)("div", {
                            className: L.badge,
                            ...t,
                            ...e,
                            children: [(0, l.jsx)(A.default, {
                                className: L.badgeVerifiedIcon,
                                size: 16,
                                color: r.colorString
                            }), (0, l.jsx)(f.Text, {
                                variant: "text-xs/bold",
                                color: "header-primary",
                                className: L.roleName,
                                children: r.name
                            })]
                        })
                    })
                })
            }
        },
        685058: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MODAL_KEY: function() {
                    return s
                },
                openGuildRoleConnectionsModal: function() {
                    return u
                },
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("83900"),
                o = n("535013"),
                r = n("782340");
            let s = "guild-connection-roles";

            function u(e) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("918771").then(n.bind(n, "918771"));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        guildId: e
                    })
                }, {
                    modalKey: s,
                    contextKey: a.DEFAULT_MODAL_CONTEXT,
                    onCloseRequest: () => {
                        (0, a.closeModal)(s, a.DEFAULT_MODAL_CONTEXT)
                    }
                })
            }

            function d(e) {
                let t = (0, o.isVerifiedRolesChannelVisible)(e);
                return t ? (0, l.jsx)(a.MenuItem, {
                    id: "guild-connection-roles",
                    label: r.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
                    icon: i.default,
                    action: () => u(e.id)
                }) : null
            }
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return r
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var l = n("446674"),
                a = n("26989"),
                i = n("697218"),
                o = n("509");

            function r(e) {
                let t = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function s(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function u(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, o.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, l.useStateFromStores)([a.default], () => s(e, t, a.default), [t, e]);
                return u(n)
            }

            function c(e, t) {
                let n = s(e, t, a.default);
                return u(n)
            }
        },
        967003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useNewMemberBadge: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("26989"),
                i = n("305961"),
                o = n("697218"),
                r = n("568734"),
                s = n("657944");
            let u = (e, t) => {
                var n, u, d, c;
                let f = (0, l.useStateFromStores)([a.default], () => {
                        var l;
                        return (0, r.hasFlag)(null !== (n = null === (l = a.default.getMember(e, t)) || void 0 === l ? void 0 : l.flags) && void 0 !== n ? n : 0, s.GuildMemberFlags.DID_REJOIN)
                    }),
                    N = (0, l.useStateFromStores)([i.default], () => {
                        var t;
                        return null === (t = i.default.getGuild(e)) || void 0 === t ? void 0 : t.isNew()
                    }),
                    m = (0, l.useStateFromStores)([o.default], () => {
                        var e;
                        return null === (e = o.default.getUser(t)) || void 0 === e ? void 0 : e.bot
                    });
                let p = (u = e, d = {
                    maxDaysOld: 7
                }, c = t, (0, l.useStateFromStores)([], () => (function(e, t, n) {
                    let {
                        maxDaysOld: l,
                        minDaysOld: o = 0
                    } = t, r = i.default.getGuild(e), s = null == r ? void 0 : r.joinedAt;
                    if (null != n) {
                        let t = a.default.getMember(e, n);
                        s = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt)
                    }
                    if (null == s) return !1;
                    let u = Date.now() - s.getTime();
                    return (null == l || u <= 864e5 * l) && u >= 864e5 * o
                })(u, d, c), [d, u, c]) && !N && !m && !f);
                return p
            }
        },
        28913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("35006"),
                o = n("967003"),
                r = n("989750"),
                s = n("782340"),
                u = n("407817");

            function d(e) {
                let {
                    guild: t,
                    message: n
                } = e, d = (0, o.useNewMemberBadge)(t.id, n.author.id);
                return d ? (0, l.jsx)(a.Popout, {
                    animation: a.Popout.Animation.TRANSLATE,
                    align: "center",
                    autoInvert: !0,
                    nudgeAlignIntoViewport: !0,
                    position: "right",
                    renderPopout: e => {
                        let {
                            closePopout: a
                        } = e;
                        return (0, l.jsx)(r.default, {
                            guild: t,
                            message: n,
                            onClose: a
                        })
                    },
                    children: e => {
                        let {
                            onClick: t
                        } = e;
                        return (0, l.jsx)(a.Clickable, {
                            onClick: t,
                            tag: "span",
                            children: (0, l.jsx)(a.Tooltip, {
                                text: s.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT,
                                children: e => (0, l.jsx)("div", {
                                    className: u.newMemberBadge,
                                    ...e,
                                    children: (0, l.jsx)(i.default, {
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
        989750: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("77078"),
                o = n("716241"),
                r = n("933629"),
                s = n("383161"),
                u = n("42203"),
                d = n("18494"),
                c = n("35006"),
                f = n("599110"),
                N = n("49111"),
                m = n("782340"),
                p = n("966955"),
                g = function(e) {
                    let {
                        guild: t,
                        message: n,
                        onClose: g
                    } = e, E = u.default.getChannel(d.default.getChannelId(t.id));
                    return (a.useEffect(() => {
                        f.default.track(N.AnalyticEvents.OPEN_POPOUT, {
                            type: "New Member Badge Popout",
                            guild_id: t.id,
                            channel_id: null == E ? void 0 : E.id
                        })
                    }, []), null == E) ? null : (0, l.jsx)(r.MessagePopoutContent, {
                        children: (0, l.jsxs)("div", {
                            className: p.popoutContainer,
                            children: [(0, l.jsxs)("div", {
                                className: p.mainContent,
                                children: [(0, l.jsx)("div", {
                                    className: p.iconContainer,
                                    children: (0, l.jsx)(c.default, {
                                        width: 40,
                                        height: 40
                                    })
                                }), (0, l.jsxs)("div", {
                                    children: [(0, l.jsx)(i.Heading, {
                                        variant: "heading-md/semibold",
                                        className: p.header,
                                        children: m.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
                                    }), (0, l.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        children: m.default.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT
                                    })]
                                })]
                            }), (0, l.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                color: i.Button.Colors.BRAND,
                                className: p.ctaButton,
                                innerClassName: p.ctaButtonContent,
                                fullWidth: !0,
                                onClick: () => {
                                    o.default.trackWithMetadata(N.AnalyticEvents.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                        target_user_id: n.author.id
                                    }), g(), (0, s.mentionUser)(n.author, E.id)
                                },
                                children: m.default.Messages.MENTION_USER.format({
                                    username: n.author.username
                                })
                            })]
                        })
                    })
                }
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return E
                },
                executeMessageComponentInteraction: function() {
                    return C
                },
                handleInteractionResponse: function() {
                    return _
                },
                InteractionStatusViewState: function() {
                    return a
                },
                getInteractionStatusViewState: function() {
                    return O
                },
                canRetryInteractionData: function() {
                    return h
                }
            });
            var l, a, i = n("249654"),
                o = n("872717"),
                r = n("913144"),
                s = n("819689"),
                u = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                N = n("809810"),
                m = n("3765"),
                p = n("606981"),
                g = n("49111");

            function E(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : i.default.extractTimestamp(e) + 9e5
            }
            let C = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: l,
                    customId: a,
                    indices: r,
                    applicationId: s,
                    channelId: m,
                    guildId: p,
                    localState: E
                } = e, C = i.default.fromTimestamp(Date.now());
                if (!N.default.canQueueInteraction(n, C)) return;
                await d.default.unarchiveThreadIfNecessary(m), (0, f.addQueued)(C, {
                    messageId: n,
                    data: {
                        interactionType: u.InteractionTypes.MESSAGE_COMPONENT,
                        customId: a,
                        indices: r
                    },
                    onFailure: (e, t) => T(m, e, t)
                }), null != E && (0, f.queueInteractionComponentState)(n, C, E, r);
                let O = {
                    type: u.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: C,
                    guild_id: p,
                    channel_id: m,
                    message_flags: l,
                    message_id: n,
                    application_id: s,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: a,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === u.ComponentType.STRING_SELECT || e.type === u.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(E)
                    }
                };
                await o.default.post({
                    url: g.Endpoints.INTERACTIONS,
                    body: O,
                    timeout: 3e3
                }, e => {
                    _(C, m, p, e)
                })
            }, T = (e, t, n) => {
                null == n && null != t && s.default.sendClydeError(e, t)
            }, _ = (e, t, n, l) => {
                if (!l.ok) {
                    if (!l.hasErr) {
                        var a;
                        if (l.status >= 400 && l.status < 500 && l.body) {
                            if (l.body.code === g.AbortCodes.INVALID_FORM_BODY && l.body.errors) {
                                let a = (0, p.getFirstSkemaError)(l.body.errors);
                                null != a && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) && r.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == a ? void 0 : a.message);
                                return
                            }(0, f.setFailed)(e, void 0, l.body.message);
                            return
                        }(0, f.setFailed)(e, null === (a = l.body) || void 0 === a ? void 0 : a.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (l = a || (a = {}))[l.SENDING = 0] = "SENDING", l[l.CREATED = 1] = "CREATED", l[l.FAILED = 2] = "FAILED", l[l.TIMED_OUT = 3] = "TIMED_OUT";
            let O = (e, t) => {
                var n;
                let l = null == t ? void 0 : t.state,
                    o = e.state === g.MessageStates.SENT && E(e.id) < Date.now();
                let r = e.state === g.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : i.default.extractTimestamp(n) + 3e3) < Date.now(),
                    s = (null == t ? void 0 : t.data.interactionType) === u.InteractionTypes.APPLICATION_COMMAND,
                    d = e.isCommandType();
                if (s && l === m.InteractionState.QUEUED || d && e.state === g.MessageStates.SENDING && null != t) return a.SENDING;
                if (s && l === m.InteractionState.CREATED || e.hasFlag(g.MessageFlags.LOADING) && !o) return a.CREATED;
                if (null != e.interaction && e.hasFlag(g.MessageFlags.LOADING) && o) return a.TIMED_OUT;
                else if (null != e.interaction && !e.hasFlag(g.MessageFlags.LOADING) && r) return a.TIMED_OUT;
                else if (d && e.state === g.MessageStates.SEND_FAILED) return a.FAILED
            };

            function h(e) {
                var t;
                let n = e.options;
                for (;
                    (null === (t = n) || void 0 === t ? void 0 : t.length) === 1 && (n[0].type === u.ApplicationCommandOptionType.SUB_COMMAND_GROUP || n[0].type === u.ApplicationCommandOptionType.SUB_COMMAND);) n = n[0].options;
                for (let e of null != n ? n : [])
                    if (e.type === u.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return a
                }
            });
            let l = "_errors";

            function a(e) {
                return function e(t, n) {
                    let a = t[l];
                    if (null != a && Array.isArray(a)) return a[0];
                    for (let [a, i] of Object.entries(t))
                        if (a !== l && null != i && "object" == typeof i) return e(i, null != n ? n : a);
                    return null
                }(e, void 0)
            }
        },
        321905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldShowNitroBadge: function() {
                    return i
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-10_social_proofing_message_nitro_badge",
                label: "Social Proofing Message Nitro Badge",
                defaultConfig: {
                    enabled: !1,
                    hideNitroBadgeWhenRoleBadgePresent: !1
                },
                treatments: [{
                    id: 1,
                    label: "Prefer BOTH nitro badge AND role icon(s)",
                    config: {
                        enabled: !0,
                        hideNitroBadgeWhenRoleBadgePresent: !1
                    }
                }, {
                    id: 2,
                    label: "Prefer role icon(s) over nitro badge if both are present",
                    config: {
                        enabled: !0,
                        hideNitroBadgeWhenRoleBadgePresent: !0
                    }
                }]
            });

            function i(e, t) {
                let n = a.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: !1
                });
                return n.enabled && (!n.hideNitroBadgeWhenRoleBadgePresent || n.hideNitroBadgeWhenRoleBadgePresent && !e)
            }
        },
        253299: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983"),
                a = n("884691"),
                i = n("77078"),
                o = n("716241"),
                r = n("689226"),
                s = n("95039"),
                u = n("828674"),
                d = n("393414"),
                c = n("42203"),
                f = n("18494"),
                N = n("98292"),
                m = n("118503"),
                p = n("483093"),
                g = n("599110"),
                E = n("933629"),
                C = n("49111"),
                T = n("724210"),
                _ = n("782340"),
                O = n("422389"),
                h = e => {
                    let {
                        roleIcon: t,
                        guild: n
                    } = e, {
                        name: h
                    } = t;
                    a.useEffect(() => {
                        g.default.track(C.AnalyticEvents.OPEN_POPOUT, {
                            type: "Role Icon Popout",
                            guild_id: n.id,
                            ...(0, o.collectChannelAnalyticsMetadata)(c.default.getChannel(f.default.getChannelId(n.id)))
                        })
                    }, []);
                    let I = null != t.roleId ? n.roles[t.roleId] : void 0,
                        v = (0, u.isSubscriptionRole)(I),
                        S = v ? _.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
                            name: h
                        }) : _.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
                            name: h
                        }),
                        M = {
                            ...t,
                            src: null == t.src ? t.src : (0, r.replaceRoleIconSourceSize)(t.src, 40),
                            size: 40
                        };
                    return (0, l.jsx)(i.Dialog, {
                        children: (0, l.jsx)(E.MessagePopoutContent, {
                            children: (0, l.jsxs)("div", {
                                className: O.popoutContainer,
                                children: [(0, l.jsxs)("div", {
                                    className: O.mainContent,
                                    children: [(0, l.jsx)("div", {
                                        className: O.roleIconContainer,
                                        children: (0, l.jsx)(p.default, {
                                            ...M,
                                            enableTooltip: !1,
                                            className: O.roleIcon,
                                            enableHeight: !1
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: O.truncatingText,
                                        children: [(0, l.jsx)(i.Heading, {
                                            variant: "heading-md/semibold",
                                            className: O.roleName,
                                            children: (0, l.jsx)(N.default, {
                                                children: h
                                            })
                                        }), (0, l.jsx)(i.Text, {
                                            variant: "text-sm/normal",
                                            children: S
                                        })]
                                    })]
                                }), (0, l.jsxs)(i.Button, {
                                    size: i.Button.Sizes.SMALL,
                                    color: i.Button.Colors.PRIMARY,
                                    className: O.ctaButton,
                                    innerClassName: O.ctaButtonContent,
                                    fullWidth: !0,
                                    onClick: v ? () => {
                                        (0, d.transitionTo)(C.Routes.CHANNEL(n.id, T.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
                                    } : () => {
                                        (0, s.openGuildBoostingMarketingModal)({
                                            guildId: n.id,
                                            location: {
                                                section: C.AnalyticsSections.ROLE_ICON_POPOUT
                                            }
                                        })
                                    },
                                    autoFocus: !0,
                                    children: [(0, l.jsx)(m.default, {
                                        width: 14,
                                        height: 14,
                                        className: O.boosterBadge
                                    }), _.default.Messages.ROLE_ICON_POPOUT_CTA]
                                })]
                            })
                        })
                    })
                }
        },
        39331: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                a = n("95045"),
                i = n("227698"),
                o = n("49111");

            function r(e, t) {
                let {
                    hideSimpleEmbedContent: n,
                    formatInline: r = !1,
                    noStyleAndInteraction: s = !1,
                    isInteracting: u = !1,
                    allowHeading: d = !1,
                    allowList: c = !1,
                    allowLinks: f = !1,
                    previewLinkTarget: N = !1
                } = t;
                return l.useMemo(() => null != e.customRenderedContent ? e.customRenderedContent : e.isCommandType() && 0 === e.content.length || e.hasFlag(o.MessageFlags.LOADING) ? (0, i.default)(e) : (0, a.default)(e, {
                    hideSimpleEmbedContent: n,
                    formatInline: r,
                    noStyleAndInteraction: s,
                    isInteracting: u,
                    allowHeading: d,
                    allowList: c,
                    allowLinks: f,
                    previewLinkTarget: N
                }), [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, n, r, s, u, d, c, f, N])
            }
        },
        227698: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("602428");

            function i(e) {
                return {
                    content: (0, l.jsx)(a.default, {
                        message: e
                    }),
                    hasSpoilerEmbeds: !1
                }
            }
        },
        436595: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("188554"),
                o = n("782340"),
                r = n("602340");

            function s() {
                return (0, l.jsx)(a.Tooltip, {
                    text: o.default.Messages.SUPPRESS_NOTIFICATIONS_TOOLTIP,
                    children: e => (0, l.jsx)("div", {
                        className: r.badge,
                        ...e,
                        children: (0, l.jsx)(i.default, {
                            width: "1rem",
                            height: "1rem"
                        })
                    })
                })
            }
        },
        383161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                mentionUser: function() {
                    return m
                },
                default: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                i = n("77078"),
                o = n("352674"),
                r = n("42203"),
                s = n("957255"),
                u = n("18494"),
                d = n("659500"),
                c = n("158998"),
                f = n("49111"),
                N = n("782340");

            function m(e, t) {
                let {
                    id: n
                } = e, l = "@".concat(c.default.getUserTag(e, {
                    decoration: "never"
                })), a = "<@".concat(n, ">");
                d.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.INSERT_TEXT, {
                    plainText: l,
                    rawText: a
                }), null != t && o.default.startTyping(t)
            }

            function p(e, t, n) {
                let [o, d] = (0, a.useStateFromStoresArray)([u.default, r.default, s.default], () => {
                    let e = u.default.getChannelId(t),
                        n = r.default.getChannel(e),
                        l = null != n && (n.isMultiUserDM() || s.default.can(f.Permissions.SEND_MESSAGES, n));
                    return [e, l]
                }, [t]), c = n === f.AppContext.POPOUT;
                return !d || c ? null : (0, l.jsx)(i.MenuItem, {
                    id: "mention",
                    label: N.default.Messages.MENTION,
                    action: function() {
                        m(e, o)
                    }
                })
            }
        }
    }
]);