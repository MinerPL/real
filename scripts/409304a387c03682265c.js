(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21675"], {
        126501: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("913144"),
                s = n("679428"),
                l = n("282109"),
                u = {
                    update(e) {
                        a.default.dispatch({
                            type: "CHANNEL_COLLAPSE",
                            channelId: e
                        })
                    },
                    toggleCollapseGuild(e) {
                        s.default.saveUserGuildSettings(e, {
                            hide_muted_channels: !l.default.isGuildCollapsed(e)
                        }), a.default.dispatch({
                            type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                            guildId: e
                        })
                    }
                }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("884691");

            function s(e, t) {
                let n = a.useRef(e);
                return a.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        578411: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildLeaveConfirmModalContents: function() {
                    return O
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                u = n.n(l),
                i = n("65597"),
                d = n("151426"),
                r = n("77078"),
                o = n("10641"),
                c = n("298878"),
                f = n("592407"),
                E = n("13162"),
                _ = n("529932"),
                M = n("166465"),
                S = n("267567"),
                g = n("412745"),
                I = n("393414"),
                h = n("476765"),
                N = n("216422"),
                A = n("599110"),
                m = n("49111"),
                p = n("365058"),
                L = n("782340"),
                T = n("866351");
            let O = e => {
                let {
                    guild: t,
                    discoverableGuildData: l
                } = e, O = t.id, {
                    isPremium: C,
                    collectEnabled: G,
                    hasReachedMaxPacksCollected: v
                } = (0, _.usePackCollectionData)({
                    expressionSourceGuild: l
                }), x = (0, h.useUID)(), b = (0, i.default)([M.default], () => null != M.default.getPackByPackId({
                    packId: t.id,
                    allowDuplicateGuildPack: !0
                })), R = G && !b, [D, y] = s.useState(!1), U = async () => {
                    let e = S.default.isLurking(O);
                    await f.default.leaveGuild(O), D && (A.default.track(m.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                        type: g.EmojiPopoutType.ADD_PACK,
                        inventory_pack_id: O,
                        nonce: x
                    }), await (0, E.collectPack)({
                        packId: O
                    })), e ? (0, I.transitionTo)(m.Routes.GUILD_DISCOVERY) : !(0, o.isDismissibleContentDismissed)(d.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("953750").then(n.bind(n, "953750"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            guildId: O,
                            guildName: t.name
                        })
                    })
                };
                return (0, a.jsxs)(r.ConfirmModal, {
                    className: u(T.confirmModal, {
                        [T.widthForAddPack]: R
                    }),
                    bodyClassName: u(T.confirmModalBody, {
                        [T.widthForAddPack]: R
                    }),
                    header: L.default.Messages.LEAVE_SERVER_TITLE.format({
                        name: t.name
                    }),
                    confirmText: t.hasFeature(m.GuildFeatures.HUB) ? L.default.Messages.LEAVE_HUB : L.default.Messages.LEAVE_SERVER,
                    cancelText: L.default.Messages.CANCEL,
                    onConfirm: U,
                    ...e,
                    children: [(0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: t.hasFeature(m.GuildFeatures.HUB) ? L.default.Messages.LEAVE_HUB_BODY.format({
                            name: t.name
                        }) : L.default.Messages.LEAVE_SERVER_BODY.format({
                            name: t.name
                        })
                    }), R && (0, a.jsxs)("div", {
                        className: T.addPackSection,
                        children: [(0, a.jsxs)(r.FormSwitch, {
                            className: T.addPackHeader,
                            value: D,
                            disabled: v,
                            onChange: e => {
                                y(e)
                            },
                            hideBorder: !0,
                            children: [L.default.Messages.INVENTORY_ADD_PACK, " ", (0, a.jsx)(c.default, {
                                className: T.betaTag,
                                color: "white"
                            })]
                        }), (0, a.jsxs)(r.Text, {
                            variant: "text-sm/medium",
                            className: T.inventoryLeaveServerDescription,
                            children: [(0, a.jsx)(N.default, {
                                className: T.nitroWheel
                            }), L.default.Messages.INVENTORY_LEAVE_SERVER_DESCRIPTION]
                        }), v && !C && (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            className: T.maxPacksNoticeText,
                            children: L.default.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                maxFreePacks: p.INVENTORY_MAX_FREE_PACKS,
                                maxPacks: p.INVENTORY_MAX_PACKS
                            })
                        })]
                    })]
                })
            }
        },
        374705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("627445"),
                l = n.n(s),
                u = n("446674"),
                i = n("77078"),
                d = n("272030"),
                r = n("812204"),
                o = n("685665"),
                c = n("861370"),
                f = n("255812"),
                E = n("529932"),
                _ = n("724026"),
                M = n("271938"),
                S = n("923959"),
                g = n("697218"),
                I = n("578411"),
                h = n("230947"),
                N = n("544955"),
                A = n("747867"),
                m = n("555914"),
                p = n("513472"),
                L = n("527660"),
                T = n("177508"),
                O = n("263673"),
                C = n("58622"),
                G = n("49111"),
                v = n("782340");

            function x(e) {
                let {
                    guild: t,
                    onSelect: s,
                    hideSettings: r
                } = e, o = t.id, x = S.default.getDefaultChannel(o), b = (0, E.useExpressionSourceGuildDataForGuildLeaveModal)(t), R = (0, u.useStateFromStores)([g.default], () => {
                    let e = g.default.getCurrentUser();
                    return l(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), D = (0, C.default)({
                    guild: t,
                    source: G.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: x
                }), y = (0, O.default)(o), U = (0, p.default)(t), j = (0, L.default)(t), P = (0, T.default)(t), H = (0, h.default)({
                    guildId: t.id,
                    userId: M.default.getId(),
                    analyticsLocation: {
                        page: G.AnalyticsPages.GUILD_CHANNEL,
                        section: G.AnalyticsSections.CHAT_USERNAME,
                        object: G.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), F = (0, N.default)(t), k = (0, f.default)(t.id), V = (0, c.default)({
                    id: t.id,
                    label: v.default.Messages.COPY_ID_GUILD
                }), B = (0, m.default)(t, {
                    section: G.AnalyticsSections.GUILD_LIST
                }), w = (0, _.default)(t.id), Y = (0, A.default)(t), K = t.hasFeature(G.GuildFeatures.HUB);

                function z() {
                    (0, i.openModal)(e => (0, a.jsx)(I.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: b
                    }))
                }
                return K ? (0, a.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: d.closeContextMenu,
                    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, a.jsxs)(i.MenuGroup, {
                        children: [D, (0, a.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: v.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), H]
                    }), R ? null : (0, a.jsx)(i.MenuGroup, {
                        children: (0, a.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: v.default.Messages.LEAVE_HUB,
                            action: z,
                            color: "danger"
                        })
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: V
                    })]
                }) : (0, a.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: d.closeContextMenu,
                    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: B
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: D
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [U, __OVERLAY__ ? null : j, y, w]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [r ? null : P, __OVERLAY__ ? null : (0, a.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: v.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), H]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [F, k]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [Y, !R && (0, a.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: v.default.Messages.LEAVE_SERVER,
                            action: z,
                            color: "danger"
                        })]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: V
                    })]
                })
            }

            function b(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, o.default)(r.default.CONTEXT_MENU);
                return (0, a.jsx)(t, {
                    children: (0, a.jsx)(x, {
                        ...e
                    })
                })
            }
        },
        230947: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                u = n("77078"),
                i = n("750560"),
                d = n("38766"),
                r = n("506885"),
                o = n("271938"),
                c = n("26989"),
                f = n("305961"),
                E = n("957255"),
                _ = n("697218"),
                M = n("49111"),
                S = n("782340"),
                g = n("460856");

            function I(e) {
                let {
                    guildId: t,
                    userId: I,
                    analyticsLocation: h,
                    analyticsLocations: N,
                    context: A,
                    icon: m
                } = e, p = f.default.getGuild(t), L = o.default.getId(), T = (0, l.useStateFromStores)([_.default], () => _.default.getUser(I)), O = (0, l.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, I), [t, I]);
                (0, l.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
                let C = s.useMemo(() => ({
                    [t]: [I]
                }), [t, I]);
                (0, i.useSubscribeGuildMembers)(C);
                let G = A === M.AppContext.POPOUT,
                    v = (0, d.default)({
                        guild: p,
                        analyticsLocation: h
                    });
                if (null == p || G) return null;
                let x = L === I && (E.default.can(M.Permissions.CHANGE_NICKNAME, p) || E.default.can(M.Permissions.MANAGE_NICKNAMES, p)),
                    b = L === I,
                    R = E.default.canManageUser(M.Permissions.MANAGE_NICKNAMES, I, p);
                if (!(x || R || b) || null == T || O) return null;
                let D = p.hasFeature(M.GuildFeatures.HUB),
                    y = D ? S.default.Messages.HUB_EDIT_PROFILE : S.default.Messages.CHANGE_IDENTITY,
                    U = b ? y : S.default.Messages.CHANGE_NICKNAME;
                return (0, a.jsx)(u.MenuItem, {
                    id: "change-nickname",
                    label: (0, a.jsx)("div", {
                        className: g.labelWrapper,
                        children: (0, a.jsx)("span", {
                            className: g.label,
                            children: U
                        })
                    }),
                    icon: m,
                    action: () => {
                        b ? ((0, r.default)(T.id, T.getAvatarURL(t, 80), {
                            guildId: t
                        }), v()) : (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("59709").then(n.bind(n, "59709"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                guildId: t,
                                user: T,
                                analyticsSource: h,
                                analyticsLocations: N
                            })
                        })
                    }
                })
            }
        },
        544955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                u = n("957255"),
                i = n("49111"),
                d = n("695838"),
                r = n("782340");

            function o(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.can(i.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === d.FAVORITES_RAW_GUILD_ID ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(l.MenuItem, {
                        id: "create-category",
                        label: r.default.Messages.CREATE_CATEGORY,
                        action: () => (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, a.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, a.jsx)(l.MenuItem, {
                    id: "create-channel",
                    label: r.default.Messages.CREATE_CHANNEL,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: i.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, a.jsx)(l.MenuItem, {
                    id: "create-category",
                    label: r.default.Messages.CREATE_CATEGORY,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: i.ChannelTypes.GUILD_CATEGORY,
                            guildId: e.id
                        })
                    })
                }, "create-category")] : null
            }
        },
        747867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("77078"),
                u = n("398654"),
                i = n("712125"),
                d = n("311161"),
                r = n("45029"),
                o = n("372624"),
                c = n("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        shouldShowIncidentActions: f,
                        isUnderLockdown: E,
                        incidentData: _
                    } = (0, u.useGuildIncidentsState)(e.id),
                    M = s.useCallback(() => {
                        let t = {
                            source: i.GuildIncidentActionSources.CONTEXT_MENU,
                            alertType: (0, d.getIncidentAlertType)(_)
                        };
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: s
                            } = await n.el("186638").then(n.bind(n, "186638"));
                            return n => (0, a.jsx)(s, {
                                ...n,
                                guildId: e.id,
                                analyticsData: t
                            })
                        })
                    }, [e.id, _]);
                return e.isCommunity() && f ? (0, a.jsx)(l.MenuItem, {
                    id: "server-lockdown",
                    label: E ? c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
                    icon: t ? E ? o.default : r.default : void 0,
                    action: M,
                    color: "danger"
                }) : null
            }
        },
        555914: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                u = n("952451"),
                i = n("542827"),
                d = n("782340");

            function r(e, t) {
                let n = e.id,
                    r = (0, s.useStateFromStores)([u.default], () => u.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-guild-read",
                    label: d.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, i.default)([n], t.section),
                    disabled: !r
                })
            }
        },
        527660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("669491"),
                u = n("77078"),
                i = n("519705"),
                d = n("503950"),
                r = n("483226"),
                o = n("44574"),
                c = n("282109"),
                f = n("956089"),
                E = n("49111"),
                _ = n("782340"),
                M = n("460856");

            function S() {
                return [{
                    setting: E.UserNotificationSettings.ALL_MESSAGES,
                    label: _.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: E.UserNotificationSettings.ONLY_MENTIONS,
                    label: _.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: E.UserNotificationSettings.NO_MESSAGES,
                    label: _.default.Messages.FORM_LABEL_NOTHING
                }]
            }

            function g(e) {
                var t, g;
                let I = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: g,
                            messageNotifications: I,
                            notifyHighlights: h,
                            isGuildUnreadsEnabled: N
                        } = (0, s.useStateFromStoresObject)([c.default], () => ({
                            suppressEveryone: c.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: c.default.isSuppressRolesEnabled(e.id),
                            mobilePush: c.default.isMobilePushEnabled(e.id),
                            messageNotifications: c.default.getMessageNotifications(e.id),
                            notifyHighlights: c.default.getNotifyHighlights(e.id),
                            isGuildUnreadsEnabled: c.default.isGuildUnreadSettingEnabled(e.id)
                        }), [e.id]), A = h === E.HighlightSettings.DISABLED, m = (0, d.default)(e.id), p = (0, o.useGuildUnreadsExperiment)();

                        function L(t) {
                            i.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.MenuGroup, {
                                children: S().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, a.jsx)(u.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => L({
                                            message_notifications: t
                                        }),
                                        checked: t === I
                                    }, t)
                                })
                            }), (0, a.jsxs)(u.MenuGroup, {
                                children: [p && (0, a.jsx)(u.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, a.jsxs)(a.Fragment, {
                                        children: [_.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, a.jsx)(f.TextBadge, {
                                            text: _.default.Messages.BETA,
                                            color: l.default.unsafe_rawColors.BRAND_500.css,
                                            className: M.betaBadge
                                        })]
                                    }),
                                    action: () => {
                                        (0, r.setGuildUnreadSetting)(e.id, !N)
                                    },
                                    checked: N
                                }), (0, a.jsx)(u.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: _.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => L({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, a.jsx)(u.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: _.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => L({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, a.jsx)(u.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: _.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        L({
                                            notify_highlights: A ? E.HighlightSettings.ENABLED : E.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: A
                                }), m]
                            }), (0, a.jsx)(u.MenuGroup, {
                                children: (0, a.jsx)(u.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: _.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => L({
                                        mobile_push: !g
                                    }),
                                    checked: g
                                })
                            })]
                        })
                    }(e),
                    h = (0, s.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e.id), [e.id]),
                    N = null === (g = S()) || void 0 === g ? void 0 : null === (t = g.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === h
                    })) || void 0 === t ? void 0 : t.label;
                return null != I ? (0, a.jsx)(u.MenuItem, {
                    id: "guild-notifications",
                    label: _.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: N,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            guildId: e.id
                        })
                    }),
                    children: I
                }) : null
            }
        },
        177508: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                u = n("412707"),
                i = n("838093"),
                d = n("592407"),
                r = n("148475"),
                o = n("725621"),
                c = n("923959"),
                f = n("49111"),
                E = n("782340");

            function _(e) {
                function t(t) {
                    d.default.open(e.id, t)
                }
                let n = (0, s.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    _ = (0, r.default)(e);
                return __OVERLAY__ || !_ ? null : (0, a.jsx)(l.MenuItem, {
                    id: "guild-settings",
                    label: E.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, o.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: s,
                            label: d
                        } = n;
                        if (null == d) return null;
                        switch (s) {
                            case f.GuildSettingsSections.DELETE:
                                return null;
                            case f.GuildSettingsSections.COMMUNITY:
                                return (0, a.jsx)(l.MenuItem, {
                                    id: s,
                                    action: () => t(s),
                                    label: E.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, s);
                            case f.GuildSettingsSections.APP_DIRECTORY:
                                return (0, a.jsx)(l.MenuItem, {
                                    id: s,
                                    action: () => {
                                        (0, i.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: u.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: d
                                }, s);
                            default:
                                return (0, a.jsx)(l.MenuItem, {
                                    id: s,
                                    action: () => t(s),
                                    label: d
                                }, s)
                        }
                    })
                })
            }
        },
        263673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                u = n("126501"),
                i = n("282109"),
                d = n("782340");

            function r(e) {
                let t = (0, s.useStateFromStores)([i.default], () => i.default.isGuildCollapsed(e), [e]);
                return (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: d.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => u.default.toggleCollapseGuild(e),
                    checked: t
                })
            }
        },
        58622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                u = n("242757"),
                i = n("923959"),
                d = n("957255"),
                r = n("76539"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    source: t,
                    guild: n,
                    channel: a,
                    stageInstance: l
                } = e, r = (0, s.useStateFromStores)([i.default, d.default], () => {
                    var e;
                    let t = i.default.getChannels(n.id);
                    return null === (e = t[0, i.GUILD_SELECTABLE_CHANNELS_KEY].find(e => d.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, s.useStateFromStores)([d.default], () => (0, u.canViewInviteModal)(d.default, n, a, l)), f = E(t, n, c && null != a ? a : r), M = _(t);
                return null == a && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != r ? f : M
            }
            let E = (e, t, s) => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await n.el("310688").then(n.bind(n, "310688"));
                        return n => (0, a.jsx)(l, {
                            ...n,
                            guild: t,
                            channel: s,
                            source: e
                        })
                    })
                }),
                _ = e => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("973132").then(n.bind(n, "973132"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                })
        },
        255812: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("70025"),
                u = n("334683"),
                i = n("842672"),
                d = n("782340");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = (0, u.default)(e),
                    o = (0, i.default)();
                return r ? (0, a.jsx)(s.MenuItem, {
                    id: "create-event",
                    label: d.default.Messages.SCHEDULE_EVENT,
                    icon: t ? l.default : void 0,
                    action: () => {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("590942").then(n.bind(n, "590942"));
                            return n => (0, a.jsx)(t, {
                                ...n,
                                guildId: e
                            })
                        }, o)
                    }
                }) : null
            }
        },
        503950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                u = n("519705"),
                i = n("282109"),
                d = n("782340");

            function r(e) {
                let t = (0, s.useStateFromStores)([i.default], () => i.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "mute-events",
                    label: d.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void u.default.updateGuildNotificationSettings(e, n)
                    },
                    checked: t
                })
            }
        },
        148475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                s = n("957255"),
                l = n("49111");

            function u(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: u,
                    canManageNicknames: i,
                    canCreateEmojisAndStickers: d,
                    canManageEmojisAndStickers: r,
                    canManageWebhooks: o,
                    canViewAuditLog: c
                } = (0, a.useStateFromStoresObject)([s.default], () => ({
                    canManageGuild: s.default.can(l.Permissions.MANAGE_GUILD, e),
                    canManageRoles: s.default.can(l.Permissions.MANAGE_ROLES, e),
                    canBanMembers: s.default.can(l.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: s.default.can(l.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: s.default.can(l.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: s.default.can(l.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: s.default.can(l.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: s.default.can(l.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || u || i || d || r || o || c
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return u
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return d
                }
            });
            var a = n("913144"),
                s = n("599110"),
                l = n("49111");

            function u(e) {
                s.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), a.default.wait(() => {
                    a.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                a.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                s = n("913144"),
                l = n("197881"),
                u = n("492397");
            let i = new Set,
                d = {};
            class r extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (d = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && d[e];
                    return !(u.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !i.has(e))
                }
                hasHiddenHotspot(e) {
                    return i.has(e)
                }
                getHotspotOverride(e) {
                    return d[e]
                }
                getState() {
                    return {
                        hiddenHotspots: i,
                        hotspotOverrides: d
                    }
                }
            }
            r.displayName = "HotspotStore", r.persistKey = "hotspots", r.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var o = new r(s.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    i = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (i.has(t)) return !1;
                    i.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    d[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == d[t]) return !1;
                    delete d[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return l.default
                }
            });
            var a = n("533613");
            n.es(a, t);
            var s = n("597517");
            n.es(s, t);
            var l = n("269596")
        },
        672630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("748820"),
                s = n("872717"),
                l = n("49111"),
                u = {
                    generateNonce: function() {
                        return (0, a.v4)()
                    },
                    createHandoffToken: async function e(e) {
                        let {
                            body: {
                                handoff_token: t
                            }
                        } = await s.default.post({
                            url: l.Endpoints.HANDOFF,
                            body: {
                                key: e
                            },
                            oldFormErrors: !0,
                            retries: 1
                        });
                        if (null != t) return t;
                        throw Error("Missing handoff token!")
                    }
                }
        },
        986003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasNotSetUpChannelOptIn: function() {
                    return c
                },
                toggleShowAllChannels: function() {
                    return f
                },
                optIntoAllChannelsForExistingMember: function() {
                    return E
                }
            }), n("151426");
            var a = n("921031");
            n("374363");
            var s = n("923959"),
                l = n("26989"),
                u = n("282109"),
                i = n("568734"),
                d = n("629220"),
                r = n("512395"),
                o = n("657944");

            function c(e) {
                var t, n;
                let a = (0, r.isOptInEnabledForGuild)(e),
                    s = null !== (n = null === (t = l.default.getSelfMember(e)) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0,
                    d = (0, i.hasFlag)(s, o.GuildMemberFlags.COMPLETED_ONBOARDING),
                    c = u.default.getOptedInChannels(e).size > 0;
                return !a && !d && !c
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
                    exclude: n = new Set
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = s.default.getChannels(e), u = [...l[0, s.GUILD_SELECTABLE_CHANNELS_KEY], ...l[0, s.GUILD_VOCAL_CHANNELS_KEY]].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return !t.isThread() && !n.has(t.id)
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                });
                t.forEach(e => u.push(e)), a.default.onboardExistingMember(e, new Set(u))
            }
        },
        724026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                u = n("305961"),
                i = n("697218"),
                d = n("986003"),
                r = n("512395"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let t = (0, r.useOptInEnabledForGuild)(e),
                    n = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(e)),
                    f = (0, s.useStateFromStores)([i.default], () => i.default.getCurrentUser());
                return null != f && null != n && (n.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff()) ? (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "opt-in",
                    label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
                    checked: !t,
                    action: () => {
                        (0, d.toggleShowAllChannels)(e)
                    }
                }) : null
            }
        }
    }
]);