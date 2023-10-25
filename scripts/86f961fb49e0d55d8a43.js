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
            var l = a("920040");
            a("773670");
            var n = a("912557"),
                s = a("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: u = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, l.jsx)("path", {
                            fill: "string" == typeof u ? u : u.css,
                            fillRule: "evenodd",
                            d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Zm3-.333c0 .124-.335.175-.39.063C21.11 12.708 20.204 12 19 12a3 3 0 0 0-3 3v.5a.5.5 0 0 1-.5.5H15a3 3 0 0 0-3 3c0 1.203.708 2.109 1.73 2.61.111.055.06.39-.063.39H5a3 3 0 0 1-3-3v-9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.667ZM5.5 12a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM7 1a1 1 0 0 1 1 1v.75c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25V2a1 1 0 0 1 2 0v.75c0 .138.112.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75A.25.25 0 0 0 6 2.75V2a1 1 0 0 1 1-1Z",
                            clipRule: "evenodd",
                            className: d
                        })
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsx)("clipPath", {
                            id: "a",
                            children: (0, l.jsx)("path", {
                                fill: "#fff",
                                d: "M24 24H0V0h24z"
                            })
                        })
                    })]
                })
            }
        },
        578411: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GuildLeaveConfirmModalContents: function() {
                    return A
                }
            });
            var l = a("920040"),
                n = a("773670"),
                s = a("575482"),
                u = a.n(s),
                d = a("744196"),
                i = a("975162"),
                r = a("77078"),
                o = a("10641"),
                c = a("298878"),
                f = a("592407"),
                E = a("13162"),
                C = a("529932"),
                h = a("166465"),
                I = a("267567"),
                _ = a("412745"),
                N = a("393414"),
                m = a("476765"),
                v = a("216422"),
                M = a("599110"),
                g = a("49111"),
                p = a("365058"),
                L = a("782340"),
                x = a("855094");
            let A = e => {
                let {
                    guild: t,
                    discoverableGuildData: s
                } = e, A = t.id, {
                    isPremium: T,
                    collectEnabled: V,
                    hasReachedMaxPacksCollected: S
                } = (0, C.usePackCollectionData)({
                    expressionSourceGuild: s
                }), H = (0, m.useUID)(), P = (0, d.default)([h.default], () => null != h.default.getPackByPackId({
                    packId: t.id,
                    allowDuplicateGuildPack: !0
                })), D = V && !P, [O, G] = n.useState(!1), j = async () => {
                    let e = I.default.isLurking(A);
                    await f.default.leaveGuild(A), O && (M.default.track(g.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                        type: _.EmojiPopoutType.ADD_PACK,
                        inventory_pack_id: A,
                        nonce: H
                    }), await (0, E.collectPack)({
                        packId: A
                    })), e ? (0, N.transitionTo)(g.Routes.GUILD_DISCOVERY) : !(0, o.isDismissibleContentDismissed)(i.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("953750").then(a.bind(a, "953750"));
                        return a => (0, l.jsx)(e, {
                            ...a,
                            guildId: A,
                            guildName: t.name
                        })
                    })
                };
                return (0, l.jsxs)(r.ConfirmModal, {
                    className: u(x.confirmModal, {
                        [x.widthForAddPack]: D
                    }),
                    bodyClassName: u(x.confirmModalBody, {
                        [x.widthForAddPack]: D
                    }),
                    header: L.default.Messages.LEAVE_SERVER_TITLE.format({
                        name: t.name
                    }),
                    confirmText: t.hasFeature(g.GuildFeatures.HUB) ? L.default.Messages.LEAVE_HUB : L.default.Messages.LEAVE_SERVER,
                    cancelText: L.default.Messages.CANCEL,
                    onConfirm: j,
                    ...e,
                    children: [(0, l.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: t.hasFeature(g.GuildFeatures.HUB) ? L.default.Messages.LEAVE_HUB_BODY.format({
                            name: t.name
                        }) : L.default.Messages.LEAVE_SERVER_BODY.format({
                            name: t.name
                        })
                    }), D && (0, l.jsxs)("div", {
                        className: x.addPackSection,
                        children: [(0, l.jsxs)(r.FormSwitch, {
                            className: x.addPackHeader,
                            value: O,
                            disabled: S,
                            onChange: e => {
                                G(e)
                            },
                            hideBorder: !0,
                            children: [L.default.Messages.INVENTORY_ADD_PACK, " ", (0, l.jsx)(c.default, {
                                className: x.betaTag,
                                color: "white"
                            })]
                        }), (0, l.jsxs)(r.Text, {
                            variant: "text-sm/medium",
                            className: x.inventoryLeaveServerDescription,
                            children: [(0, l.jsx)(v.default, {
                                className: x.nitroWheel
                            }), L.default.Messages.INVENTORY_LEAVE_SERVER_DESCRIPTION]
                        }), S && !T && (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            className: x.maxPacksNoticeText,
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
                    return N
                }
            });
            var l = a("920040"),
                n = a("773670"),
                s = a("498225"),
                u = a("77078"),
                d = a("750560"),
                i = a("38766"),
                r = a("506885"),
                o = a("271938"),
                c = a("26989"),
                f = a("305961"),
                E = a("957255"),
                C = a("697218"),
                h = a("49111"),
                I = a("782340"),
                _ = a("717578");

            function N(e) {
                let {
                    guildId: t,
                    userId: N,
                    analyticsLocation: m,
                    analyticsLocations: v,
                    context: M,
                    icon: g
                } = e, p = f.default.getGuild(t), L = o.default.getId(), x = (0, s.useStateFromStores)([C.default], () => C.default.getUser(N)), A = (0, s.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, N), [t, N]);
                (0, s.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
                let T = n.useMemo(() => ({
                    [t]: [N]
                }), [t, N]);
                (0, d.useSubscribeGuildMembers)(T);
                let V = M === h.AppContext.POPOUT,
                    S = (0, i.default)({
                        guild: p,
                        analyticsLocation: m
                    });
                if (null == p || V) return null;
                let H = L === N && (E.default.can(h.Permissions.CHANGE_NICKNAME, p) || E.default.can(h.Permissions.MANAGE_NICKNAMES, p)),
                    P = L === N,
                    D = E.default.canManageUser(h.Permissions.MANAGE_NICKNAMES, N, p);
                if (!(H || D || P) || null == x || A) return null;
                let O = p.hasFeature(h.GuildFeatures.HUB),
                    G = O ? I.default.Messages.HUB_EDIT_PROFILE : I.default.Messages.CHANGE_IDENTITY,
                    j = P ? G : I.default.Messages.CHANGE_NICKNAME;
                return (0, l.jsx)(u.MenuItem, {
                    id: "change-nickname",
                    label: (0, l.jsx)("div", {
                        className: _.labelWrapper,
                        children: (0, l.jsx)("span", {
                            className: _.label,
                            children: j
                        })
                    }),
                    icon: g,
                    action: () => {
                        P ? ((0, r.default)(x.id, x.getAvatarURL(t, 80), {
                            guildId: t
                        }), S()) : (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("59709").then(a.bind(a, "59709"));
                            return a => (0, l.jsx)(e, {
                                ...a,
                                guildId: t,
                                user: x,
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
            var l = a("920040"),
                n = a("773670"),
                s = a("77078"),
                u = a("398654"),
                d = a("712125"),
                i = a("311161"),
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
                            source: d.GuildIncidentActionSources.CONTEXT_MENU,
                            alertType: (0, i.getIncidentAlertType)(C)
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
            var l = a("920040");
            a("773670");
            var n = a("498225"),
                s = a("77078"),
                u = a("242757"),
                d = a("923959"),
                i = a("957255"),
                r = a("76539"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let {
                    source: t,
                    guild: a,
                    channel: l,
                    stageInstance: s
                } = e, r = (0, n.useStateFromStores)([d.default, i.default], () => {
                    var e;
                    let t = d.default.getChannels(a.id);
                    return null === (e = t[0, d.GUILD_SELECTABLE_CHANNELS_KEY].find(e => i.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, n.useStateFromStores)([i.default], () => (0, u.canViewInviteModal)(i.default, a, l, s)), f = E(t, a, c && null != l ? l : r), h = C(t);
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
            var l = a("920040");
            a("773670");
            var n = a("77078"),
                s = a("70025"),
                u = a("334683"),
                d = a("842672"),
                i = a("782340");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = (0, u.default)(e),
                    o = (0, d.default)();
                return r ? (0, l.jsx)(n.MenuItem, {
                    id: "create-event",
                    label: i.default.Messages.SCHEDULE_EVENT,
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
        724026: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("920040");
            a("773670");
            var n = a("498225"),
                s = a("77078"),
                u = a("305961"),
                d = a("697218"),
                i = a("986003"),
                r = a("512395"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let t = (0, r.useOptInEnabledForGuild)(e),
                    a = (0, n.useStateFromStores)([u.default], () => u.default.getGuild(e)),
                    f = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser());
                return null != f && null != a && (a.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff()) ? (0, l.jsx)(s.MenuCheckboxItem, {
                    id: "opt-in",
                    label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
                    checked: !t,
                    action: () => {
                        (0, i.toggleShowAllChannels)(e)
                    }
                }) : null
            }
        },
        70025: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("920040");
            a("773670");
            var n = a("469563"),
                s = a("969553"),
                u = a("75196"),
                d = (0, n.replaceIcon)(function(e) {
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
                    return d
                }
            });
            var l = a("920040");
            a("773670");
            var n = a("469563"),
                s = a("972586"),
                u = a("75196"),
                d = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: n = "currentColor",
                        className: s,
                        foreground: d,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: a,
                        className: s,
                        viewBox: "0 0 24 24",
                        ...(0, u.default)(i),
                        children: (0, l.jsx)("path", {
                            className: d,
                            fill: n,
                            d: "M18.8571 9.54956H8.57143V6.46015C8.57143 4.86218 9.71429 3.47727 11.3143 3.15768C13.4857 2.83808 15.4286 4.32952 15.4286 6.35362C15.4286 6.99281 16 7.41893 16.5714 7.41893C17.1429 7.41893 17.7143 6.99281 17.7143 6.35362C17.7143 3.26421 14.8571 0.707455 11.4286 1.02705C8.45714 1.34664 6.28571 3.79687 6.28571 6.56668V9.54956H5.14286C4.57143 9.54956 4 9.97569 4 10.6149V21.268C4 21.8007 4.57143 22.3333 5.14286 22.3333H18.8571C19.5429 22.3333 20 21.8007 20 21.268V10.6149C20 9.97569 19.5429 9.54956 18.8571 9.54956ZM13.1429 16.6872V18.0721C13.1429 18.7113 12.6857 19.1374 12 19.1374C11.3143 19.1374 10.8571 18.7113 10.8571 18.0721V16.6872C10.1714 16.261 9.71429 15.6219 9.71429 14.8761C9.71429 13.4912 11.0857 12.5324 12.5714 12.852C13.3714 13.0651 14.0571 13.7043 14.2857 14.45C14.5143 15.4088 13.9429 16.261 13.1429 16.6872Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.LockUnlockedIcon)
        }
    }
]);