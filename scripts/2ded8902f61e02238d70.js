(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77576"], {
        126501: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("913144"),
                n = a("679428"),
                s = a("282109"),
                u = {
                    update(e) {
                        l.default.dispatch({
                            type: "CHANNEL_COLLAPSE",
                            channelId: e
                        })
                    },
                    toggleCollapseGuild(e) {
                        n.default.saveUserGuildSettings(e, {
                            hide_muted_channels: !s.default.isGuildCollapsed(e)
                        }), l.default.dispatch({
                            type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                            guildId: e
                        })
                    }
                }
        },
        969553: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CalendarPlusIcon: function() {
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("669491"),
                s = a("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: u = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M22 13.667c0 .124-.335.175-.39.063C21.11 12.708 20.204 12 19 12a3 3 0 0 0-3 3v.5a.5.5 0 0 1-.5.5H15a3 3 0 0 0-3 3c0 1.203.708 2.109 1.73 2.61.111.055.06.39-.063.39H5a3 3 0 0 1-3-3v-9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.667ZM5.5 12a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof u ? u : u.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M7 1a1 1 0 0 1 1 1v.75c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25V2a1 1 0 1 1 2 0v.75c0 .138.112.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75A.25.25 0 0 0 6 2.75V2a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: i
                    })]
                })
            }
        },
        578411: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GuildLeaveConfirmModalContents: function() {
                    return S
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                u = a.n(s),
                i = a("65597"),
                d = a("151426"),
                r = a("77078"),
                o = a("10641"),
                c = a("298878"),
                f = a("592407"),
                E = a("13162"),
                C = a("529932"),
                h = a("166465"),
                I = a("267567"),
                N = a("412745"),
                _ = a("393414"),
                m = a("476765"),
                v = a("216422"),
                g = a("599110"),
                M = a("49111"),
                p = a("365058"),
                L = a("782340"),
                A = a("866351");
            let S = e => {
                let {
                    guild: t,
                    discoverableGuildData: s
                } = e, S = t.id, {
                    isPremium: T,
                    collectEnabled: x,
                    hasReachedMaxPacksCollected: V
                } = (0, C.usePackCollectionData)({
                    expressionSourceGuild: s
                }), O = (0, m.useUID)(), D = (0, i.default)([h.default], () => null != h.default.getPackByPackId({
                    packId: t.id,
                    allowDuplicateGuildPack: !0
                })), G = x && !D, [H, P] = n.useState(!1), b = async () => {
                    let e = I.default.isLurking(S);
                    await f.default.leaveGuild(S), H && (g.default.track(M.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                        type: N.EmojiPopoutType.ADD_PACK,
                        inventory_pack_id: S,
                        nonce: O
                    }), await (0, E.collectPack)({
                        packId: S
                    })), e ? (0, _.transitionTo)(M.Routes.GUILD_DISCOVERY) : !(0, o.isDismissibleContentDismissed)(d.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("953750").then(a.bind(a, "953750"));
                        return a => (0, l.jsx)(e, {
                            ...a,
                            guildId: S,
                            guildName: t.name
                        })
                    })
                };
                return (0, l.jsxs)(r.ConfirmModal, {
                    className: u(A.confirmModal, {
                        [A.widthForAddPack]: G
                    }),
                    bodyClassName: u(A.confirmModalBody, {
                        [A.widthForAddPack]: G
                    }),
                    header: L.default.Messages.LEAVE_SERVER_TITLE.format({
                        name: t.name
                    }),
                    confirmText: t.hasFeature(M.GuildFeatures.HUB) ? L.default.Messages.LEAVE_HUB : L.default.Messages.LEAVE_SERVER,
                    cancelText: L.default.Messages.CANCEL,
                    onConfirm: b,
                    ...e,
                    children: [(0, l.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: t.hasFeature(M.GuildFeatures.HUB) ? L.default.Messages.LEAVE_HUB_BODY.format({
                            name: t.name
                        }) : L.default.Messages.LEAVE_SERVER_BODY.format({
                            name: t.name
                        })
                    }), G && (0, l.jsxs)("div", {
                        className: A.addPackSection,
                        children: [(0, l.jsxs)(r.FormSwitch, {
                            className: A.addPackHeader,
                            value: H,
                            disabled: V,
                            onChange: e => {
                                P(e)
                            },
                            hideBorder: !0,
                            children: [L.default.Messages.INVENTORY_ADD_PACK, " ", (0, l.jsx)(c.default, {
                                className: A.betaTag,
                                color: "white"
                            })]
                        }), (0, l.jsxs)(r.Text, {
                            variant: "text-sm/medium",
                            className: A.inventoryLeaveServerDescription,
                            children: [(0, l.jsx)(v.default, {
                                className: A.nitroWheel
                            }), L.default.Messages.INVENTORY_LEAVE_SERVER_DESCRIPTION]
                        }), V && !T && (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            className: A.maxPacksNoticeText,
                            children: L.default.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                maxFreePacks: p.INVENTORY_MAX_FREE_PACKS,
                                maxPacks: p.INVENTORY_MAX_PACKS
                            })
                        })]
                    })]
                })
            }
        },
        230947: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("446674"),
                u = a("77078"),
                i = a("750560"),
                d = a("38766"),
                r = a("506885"),
                o = a("271938"),
                c = a("26989"),
                f = a("305961"),
                E = a("957255"),
                C = a("697218"),
                h = a("49111"),
                I = a("782340"),
                N = a("460856");

            function _(e) {
                let {
                    guildId: t,
                    userId: _,
                    analyticsLocation: m,
                    analyticsLocations: v,
                    context: g,
                    icon: M
                } = e, p = f.default.getGuild(t), L = o.default.getId(), A = (0, s.useStateFromStores)([C.default], () => C.default.getUser(_)), S = (0, s.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, _), [t, _]);
                (0, s.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
                let T = n.useMemo(() => ({
                    [t]: [_]
                }), [t, _]);
                (0, i.useSubscribeGuildMembers)(T);
                let x = g === h.AppContext.POPOUT,
                    V = (0, d.default)({
                        guild: p,
                        analyticsLocation: m
                    });
                if (null == p || x) return null;
                let O = L === _ && (E.default.can(h.Permissions.CHANGE_NICKNAME, p) || E.default.can(h.Permissions.MANAGE_NICKNAMES, p)),
                    D = L === _,
                    G = E.default.canManageUser(h.Permissions.MANAGE_NICKNAMES, _, p);
                if (!(O || G || D) || null == A || S) return null;
                let H = p.hasFeature(h.GuildFeatures.HUB),
                    P = H ? I.default.Messages.HUB_EDIT_PROFILE : I.default.Messages.CHANGE_IDENTITY,
                    b = D ? P : I.default.Messages.CHANGE_NICKNAME;
                return (0, l.jsx)(u.MenuItem, {
                    id: "change-nickname",
                    label: (0, l.jsx)("div", {
                        className: N.labelWrapper,
                        children: (0, l.jsx)("span", {
                            className: N.label,
                            children: b
                        })
                    }),
                    icon: M,
                    action: () => {
                        D ? ((0, r.default)(A.id, A.getAvatarURL(t, 80), {
                            guildId: t
                        }), V()) : (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("59709").then(a.bind(a, "59709"));
                            return a => (0, l.jsx)(e, {
                                ...a,
                                guildId: t,
                                user: A,
                                analyticsSource: m,
                                analyticsLocations: v
                            })
                        })
                    }
                })
            }
        },
        747867: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("77078"),
                u = a("398654"),
                i = a("712125"),
                d = a("311161"),
                r = a("45029"),
                o = a("372624"),
                c = a("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        shouldShowIncidentActions: f,
                        isUnderLockdown: E,
                        incidentData: C
                    } = (0, u.useGuildIncidentsState)(e.id),
                    h = n.useCallback(() => {
                        let t = {
                            source: i.GuildIncidentActionSources.CONTEXT_MENU,
                            alertType: (0, d.getIncidentAlertType)(C)
                        };
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: n
                            } = await a.el("186638").then(a.bind(a, "186638"));
                            return a => (0, l.jsx)(n, {
                                ...a,
                                guildId: e.id,
                                analyticsData: t
                            })
                        })
                    }, [e.id, C]);
                return e.isCommunity() && f ? (0, l.jsx)(s.MenuItem, {
                    id: "server-lockdown",
                    label: E ? c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
                    icon: t ? E ? o.default : r.default : void 0,
                    action: h,
                    color: "danger"
                }) : null
            }
        },
        58622: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("446674"),
                s = a("77078"),
                u = a("242757"),
                i = a("923959"),
                d = a("957255"),
                r = a("76539"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let {
                    source: t,
                    guild: a,
                    channel: l,
                    stageInstance: s
                } = e, r = (0, n.useStateFromStores)([i.default, d.default], () => {
                    var e;
                    let t = i.default.getChannels(a.id);
                    return null === (e = t[0, i.GUILD_SELECTABLE_CHANNELS_KEY].find(e => d.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, n.useStateFromStores)([d.default], () => (0, u.canViewInviteModal)(d.default, a, l, s)), f = E(t, a, c && null != l ? l : r), h = C(t);
                return null == l && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != r ? f : h
            }
            let E = (e, t, n) => (0, l.jsx)(s.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: s
                        } = await a.el("310688").then(a.bind(a, "310688"));
                        return a => (0, l.jsx)(s, {
                            ...a,
                            guild: t,
                            channel: n,
                            source: e
                        })
                    })
                }),
                C = e => (0, l.jsx)(s.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("973132").then(a.bind(a, "973132"));
                        return t => (0, l.jsx)(e, {
                            ...t
                        })
                    })
                })
        },
        255812: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("77078"),
                s = a("70025"),
                u = a("334683"),
                i = a("842672"),
                d = a("782340");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = (0, u.default)(e),
                    o = (0, i.default)();
                return r ? (0, l.jsx)(n.MenuItem, {
                    id: "create-event",
                    label: d.default.Messages.SCHEDULE_EVENT,
                    icon: t ? s.default : void 0,
                    action: () => {
                        (0, n.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("590942").then(a.bind(a, "590942"));
                            return a => (0, l.jsx)(t, {
                                ...a,
                                guildId: e
                            })
                        }, o)
                    }
                }) : null
            }
        },
        986003: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                hasNotSetUpChannelOptIn: function() {
                    return c
                },
                toggleShowAllChannels: function() {
                    return f
                },
                optIntoAllChannelsForExistingMember: function() {
                    return E
                }
            }), a("151426");
            var l = a("921031");
            a("374363");
            var n = a("923959"),
                s = a("26989"),
                u = a("282109"),
                i = a("568734"),
                d = a("629220"),
                r = a("512395"),
                o = a("657944");

            function c(e) {
                var t, a;
                let l = (0, r.isOptInEnabledForGuild)(e),
                    n = null !== (a = null === (t = s.default.getSelfMember(e)) || void 0 === t ? void 0 : t.flags) && void 0 !== a ? a : 0,
                    d = (0, i.hasFlag)(n, o.GuildMemberFlags.COMPLETED_ONBOARDING),
                    c = u.default.getOptedInChannels(e).size > 0;
                return !l && !d && !c
            }

            function f(e) {
                if (c(e)) {
                    E(e);
                    return
                } {
                    let t = (0, r.isOptInEnabledForGuild)(e);
                    (0, d.setGuildOptIn)(e, !t)
                }
            }

            function E(e) {
                let {
                    include: t = new Set,
                    exclude: a = new Set
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = n.default.getChannels(e), u = [...s[0, n.GUILD_SELECTABLE_CHANNELS_KEY], ...s[0, n.GUILD_VOCAL_CHANNELS_KEY]].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return !t.isThread() && !a.has(t.id)
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                });
                t.forEach(e => u.push(e)), l.default.onboardExistingMember(e, new Set(u))
            }
        },
        724026: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("446674"),
                s = a("77078"),
                u = a("305961"),
                i = a("697218"),
                d = a("986003"),
                r = a("512395"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let t = (0, r.useOptInEnabledForGuild)(e),
                    a = (0, n.useStateFromStores)([u.default], () => u.default.getGuild(e)),
                    f = (0, n.useStateFromStores)([i.default], () => i.default.getCurrentUser());
                return null != f && null != a && (a.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff()) ? (0, l.jsx)(s.MenuCheckboxItem, {
                    id: "opt-in",
                    label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
                    checked: !t,
                    action: () => {
                        (0, d.toggleShowAllChannels)(e)
                    }
                }) : null
            }
        },
        70025: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("469563"),
                s = a("969553"),
                u = a("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: n = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            d: "M21 4V1H19V4H16V6H19V9H21V6H24V4H21Z",
                            fill: n
                        }), (0, l.jsx)("path", {
                            d: "M8 4H14V9H5V20H19V11H21V20C21 21.1 20.1 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4Z",
                            fill: n
                        }), (0, l.jsx)("path", {
                            d: "M7 11H12V16H7V11Z",
                            fill: n
                        })]
                    })
                }, s.CalendarPlusIcon)
        },
        372624: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("469563"),
                s = a("263436"),
                u = a("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: n = "currentColor",
                        className: s,
                        foreground: i,
                        ...d
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: a,
                        className: s,
                        viewBox: "0 0 24 24",
                        ...(0, u.default)(d),
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: n,
                            d: "M18.8571 9.54956H8.57143V6.46015C8.57143 4.86218 9.71429 3.47727 11.3143 3.15768C13.4857 2.83808 15.4286 4.32952 15.4286 6.35362C15.4286 6.99281 16 7.41893 16.5714 7.41893C17.1429 7.41893 17.7143 6.99281 17.7143 6.35362C17.7143 3.26421 14.8571 0.707455 11.4286 1.02705C8.45714 1.34664 6.28571 3.79687 6.28571 6.56668V9.54956H5.14286C4.57143 9.54956 4 9.97569 4 10.6149V21.268C4 21.8007 4.57143 22.3333 5.14286 22.3333H18.8571C19.5429 22.3333 20 21.8007 20 21.268V10.6149C20 9.97569 19.5429 9.54956 18.8571 9.54956ZM13.1429 16.6872V18.0721C13.1429 18.7113 12.6857 19.1374 12 19.1374C11.3143 19.1374 10.8571 18.7113 10.8571 18.0721V16.6872C10.1714 16.261 9.71429 15.6219 9.71429 14.8761C9.71429 13.4912 11.0857 12.5324 12.5714 12.852C13.3714 13.0651 14.0571 13.7043 14.2857 14.45C14.5143 15.4088 13.9429 16.261 13.1429 16.6872Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.LockUnlockedIcon)
        }
    }
]);