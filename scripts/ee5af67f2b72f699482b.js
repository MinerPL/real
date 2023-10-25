(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9297"], {
        7037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallUpIcon: function() {
                    return i
                }
            });
            var s = n("920040");
            n("773670");
            var a = n("912557"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M12.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return i
                }
            });
            var s = n("920040");
            n("773670");
            var a = n("912557"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1Zm3.937 9.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("773670");

            function a(e, t) {
                let n = s.useRef(e);
                return s.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        374705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var s = n("920040");
            n("773670");
            var a = n("161179"),
                l = n.n(a),
                i = n("498225"),
                u = n("77078"),
                r = n("272030"),
                d = n("812204"),
                o = n("685665"),
                c = n("861370"),
                f = n("255812"),
                E = n("529932"),
                M = n("724026"),
                _ = n("271938"),
                S = n("923959"),
                g = n("697218"),
                h = n("578411"),
                p = n("230947"),
                I = n("544955"),
                A = n("747867"),
                N = n("555914"),
                v = n("513472"),
                m = n("527660"),
                L = n("177508"),
                x = n("263673"),
                T = n("58622"),
                O = n("49111"),
                C = n("782340");

            function R(e) {
                let {
                    guild: t,
                    onSelect: a,
                    hideSettings: d
                } = e, o = t.id, R = S.default.getDefaultChannel(o), G = (0, E.useExpressionSourceGuildDataForGuildLeaveModal)(t), b = (0, i.useStateFromStores)([g.default], () => {
                    let e = g.default.getCurrentUser();
                    return l(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), j = (0, T.default)({
                    guild: t,
                    source: O.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: R
                }), H = (0, x.default)(o), y = (0, v.default)(t), D = (0, m.default)(t), U = (0, L.default)(t), w = (0, p.default)({
                    guildId: t.id,
                    userId: _.default.getId(),
                    analyticsLocation: {
                        page: O.AnalyticsPages.GUILD_CHANNEL,
                        section: O.AnalyticsSections.CHAT_USERNAME,
                        object: O.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), P = (0, I.default)(t), F = (0, f.default)(t.id), B = (0, c.default)({
                    id: t.id,
                    label: C.default.Messages.COPY_ID_GUILD
                }), V = (0, N.default)(t, {
                    section: O.AnalyticsSections.GUILD_LIST
                }), k = (0, M.default)(t.id), Z = (0, A.default)(t), Y = t.hasFeature(O.GuildFeatures.HUB);

                function z() {
                    (0, u.openModal)(e => (0, s.jsx)(h.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: G
                    }))
                }
                return Y ? (0, s.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: r.closeContextMenu,
                    "aria-label": C.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [(0, s.jsxs)(u.MenuGroup, {
                        children: [j, (0, s.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: C.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), b ? null : (0, s.jsx)(u.MenuGroup, {
                        children: (0, s.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: C.default.Messages.LEAVE_HUB,
                            action: z,
                            color: "danger"
                        })
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: B
                    })]
                }) : (0, s.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: r.closeContextMenu,
                    "aria-label": C.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [(0, s.jsx)(u.MenuGroup, {
                        children: V
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: j
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [y, __OVERLAY__ ? null : D, H, k]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [d ? null : U, __OVERLAY__ ? null : (0, s.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: C.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [P, F]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [Z, !b && (0, s.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: C.default.Messages.LEAVE_SERVER,
                            action: z,
                            color: "danger"
                        })]
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: B
                    })]
                })
            }

            function G(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, o.default)(d.default.CONTEXT_MENU);
                return (0, s.jsx)(t, {
                    children: (0, s.jsx)(R, {
                        ...e
                    })
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
            var s = n("920040");
            n("773670");
            var a = n("498225"),
                l = n("77078"),
                i = n("957255"),
                u = n("49111"),
                r = n("695838"),
                d = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.can(u.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === r.FAVORITES_RAW_GUILD_ID ? (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(l.MenuItem, {
                        id: "create-category",
                        label: d.default.Messages.CREATE_CATEGORY,
                        action: () => (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, s.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, s.jsx)(l.MenuItem, {
                    id: "create-channel",
                    label: d.default.Messages.CREATE_CHANNEL,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, s.jsx)(t, {
                            ...n,
                            channelType: u.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, s.jsx)(l.MenuItem, {
                    id: "create-category",
                    label: d.default.Messages.CREATE_CATEGORY,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, s.jsx)(t, {
                            ...n,
                            channelType: u.ChannelTypes.GUILD_CATEGORY,
                            guildId: e.id
                        })
                    })
                }, "create-category")] : null
            }
        },
        555914: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("920040");
            n("773670");
            var a = n("498225"),
                l = n("77078"),
                i = n("952451"),
                u = n("542827"),
                r = n("782340");

            function d(e, t) {
                let n = e.id,
                    d = (0, a.useStateFromStores)([i.default], () => i.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, s.jsx)(l.MenuItem, {
                    id: "mark-guild-read",
                    label: r.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, u.default)([n], t.section),
                    disabled: !d
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
            var s = n("920040");
            n("773670");
            var a = n("498225"),
                l = n("912557"),
                i = n("77078"),
                u = n("519705"),
                r = n("503950"),
                d = n("483226"),
                o = n("44574"),
                c = n("282109"),
                f = n("956089"),
                E = n("49111"),
                M = n("782340"),
                _ = n("717578");

            function S() {
                return [{
                    setting: E.UserNotificationSettings.ALL_MESSAGES,
                    label: M.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: E.UserNotificationSettings.ONLY_MENTIONS,
                    label: M.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: E.UserNotificationSettings.NO_MESSAGES,
                    label: M.default.Messages.FORM_LABEL_NOTHING
                }]
            }

            function g(e) {
                var t, g;
                let h = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: g,
                            messageNotifications: h,
                            notifyHighlights: p,
                            isGuildUnreadsEnabled: I
                        } = (0, a.useStateFromStoresObject)([c.default], () => ({
                            suppressEveryone: c.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: c.default.isSuppressRolesEnabled(e.id),
                            mobilePush: c.default.isMobilePushEnabled(e.id),
                            messageNotifications: c.default.getMessageNotifications(e.id),
                            notifyHighlights: c.default.getNotifyHighlights(e.id),
                            isGuildUnreadsEnabled: c.default.isGuildUnreadSettingEnabled(e.id)
                        }), [e.id]), A = p === E.HighlightSettings.DISABLED, N = (0, r.default)(e.id), v = (0, o.useGuildUnreadsExperiment)();

                        function m(t) {
                            u.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(i.MenuGroup, {
                                children: S().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, s.jsx)(i.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => m({
                                            message_notifications: t
                                        }),
                                        checked: t === h
                                    }, t)
                                })
                            }), (0, s.jsxs)(i.MenuGroup, {
                                children: [v && (0, s.jsx)(i.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, s.jsxs)(s.Fragment, {
                                        children: [M.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, s.jsx)(f.TextBadge, {
                                            text: M.default.Messages.BETA,
                                            color: l.default.unsafe_rawColors.BRAND_500.css,
                                            className: _.betaBadge
                                        })]
                                    }),
                                    action: () => {
                                        (0, d.setGuildUnreadSetting)(e.id, !I)
                                    },
                                    checked: I
                                }), (0, s.jsx)(i.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: M.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => m({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, s.jsx)(i.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: M.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => m({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, s.jsx)(i.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: M.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        m({
                                            notify_highlights: A ? E.HighlightSettings.ENABLED : E.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: A
                                }), N]
                            }), (0, s.jsx)(i.MenuGroup, {
                                children: (0, s.jsx)(i.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: M.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => m({
                                        mobile_push: !g
                                    }),
                                    checked: g
                                })
                            })]
                        })
                    }(e),
                    p = (0, a.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e.id), [e.id]),
                    I = null === (g = S()) || void 0 === g ? void 0 : null === (t = g.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === p
                    })) || void 0 === t ? void 0 : t.label;
                return null != h ? (0, s.jsx)(i.MenuItem, {
                    id: "guild-notifications",
                    label: M.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: I,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, s.jsx)(t, {
                            ...n,
                            guildId: e.id
                        })
                    }),
                    children: h
                }) : null
            }
        },
        177508: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var s = n("920040");
            n("773670");
            var a = n("498225"),
                l = n("77078"),
                i = n("412707"),
                u = n("646186"),
                r = n("592407"),
                d = n("148475"),
                o = n("725621"),
                c = n("923959"),
                f = n("49111"),
                E = n("782340");

            function M(e) {
                function t(t) {
                    r.default.open(e.id, t)
                }
                let n = (0, a.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    M = (0, d.default)(e);
                return __OVERLAY__ || !M ? null : (0, s.jsx)(l.MenuItem, {
                    id: "guild-settings",
                    label: E.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, o.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: a,
                            label: r
                        } = n;
                        if (null == r) return null;
                        switch (a) {
                            case f.GuildSettingsSections.DELETE:
                                return null;
                            case f.GuildSettingsSections.COMMUNITY:
                                return (0, s.jsx)(l.MenuItem, {
                                    id: a,
                                    action: () => t(a),
                                    label: E.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, a);
                            case f.GuildSettingsSections.APP_DIRECTORY:
                                return (0, s.jsx)(l.MenuItem, {
                                    id: a,
                                    action: () => {
                                        (0, u.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: i.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: r
                                }, a);
                            default:
                                return (0, s.jsx)(l.MenuItem, {
                                    id: a,
                                    action: () => t(a),
                                    label: r
                                }, a)
                        }
                    })
                })
            }
        },
        263673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("920040");
            n("773670");
            var a = n("498225"),
                l = n("77078"),
                i = n("126501"),
                u = n("282109"),
                r = n("782340");

            function d(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.isGuildCollapsed(e), [e]);
                return (0, s.jsx)(l.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: r.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => i.default.toggleCollapseGuild(e),
                    checked: t
                })
            }
        },
        503950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("920040");
            n("773670");
            var a = n("498225"),
                l = n("77078"),
                i = n("519705"),
                u = n("282109"),
                r = n("782340");

            function d(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, s.jsx)(l.MenuCheckboxItem, {
                    id: "mute-events",
                    label: r.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void i.default.updateGuildNotificationSettings(e, n)
                    },
                    checked: t
                })
            }
        },
        148475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("498225"),
                a = n("957255"),
                l = n("49111");

            function i(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: i,
                    canManageNicknames: u,
                    canCreateEmojisAndStickers: r,
                    canManageEmojisAndStickers: d,
                    canManageWebhooks: o,
                    canViewAuditLog: c
                } = (0, s.useStateFromStoresObject)([a.default], () => ({
                    canManageGuild: a.default.can(l.Permissions.MANAGE_GUILD, e),
                    canManageRoles: a.default.can(l.Permissions.MANAGE_ROLES, e),
                    canBanMembers: a.default.can(l.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: a.default.can(l.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: a.default.can(l.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: a.default.can(l.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: a.default.can(l.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: a.default.can(l.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || i || u || r || d || o || c
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return i
                },
                setHotspotOverride: function() {
                    return u
                },
                clearHotspotOverride: function() {
                    return r
                }
            });
            var s = n("913144"),
                a = n("599110"),
                l = n("49111");

            function i(e) {
                a.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), s.default.wait(() => {
                    s.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function u(e, t) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function r(e) {
                s.default.dispatch({
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
            var s = n("498225"),
                a = n("913144"),
                l = n("197881"),
                i = n("492397");
            let u = new Set,
                r = {};
            class d extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (r = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && r[e];
                    return !(i.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !u.has(e))
                }
                hasHiddenHotspot(e) {
                    return u.has(e)
                }
                getHotspotOverride(e) {
                    return r[e]
                }
                getState() {
                    return {
                        hiddenHotspots: u,
                        hotspotOverrides: r
                    }
                }
            }
            d.displayName = "HotspotStore", d.persistKey = "hotspots", d.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var o = new d(a.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    u = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (u.has(t)) return !1;
                    u.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    r[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == r[t]) return !1;
                    delete r[t]
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
            var s = n("533613");
            n.es(s, t);
            var a = n("597517");
            n.es(a, t);
            var l = n("269596")
        },
        672630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("462567"),
                a = n("990746"),
                l = n("49111"),
                i = {
                    generateNonce: function() {
                        return (0, s.v4)()
                    },
                    createHandoffToken: async function e(e) {
                        let {
                            body: {
                                handoff_token: t
                            }
                        } = await a.default.post({
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
        137215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("920040"),
                a = n("773670"),
                l = n("575482"),
                i = n.n(l),
                u = n("546671"),
                r = n("962041");
            let d = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                o = {
                    [d.UP]: r.up,
                    [d.RIGHT]: r.right,
                    [d.DOWN]: r.down,
                    [d.LEFT]: r.left
                };
            class c extends a.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, s.jsx)(u.default, {
                        className: i(r.arrow, t, {
                            [o[e]]: !0
                        })
                    })
                }
            }
            c.Directions = d;
            var f = c
        },
        546671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("920040");
            n("773670");
            var a = n("469563"),
                l = n("7037"),
                i = n("246053"),
                u = (0, a.replaceIcon)(function(e) {
                    return (0, s.jsx)(i.default, {
                        ...e,
                        direction: i.default.Directions.UP
                    })
                }, l.ArrowSmallUpIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("920040");
            n("773670");
            var a = n("469563"),
                l = n("811513"),
                i = n("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, i.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, s.jsx)("path", {
                            className: l,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: l,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: l,
                            fill: a,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, s.jsx)("path", {
                            className: l,
                            fill: a,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, l.GroupIcon)
        },
        713573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("920040");
            n("773670");
            var a = n("575482"),
                l = n.n(a),
                i = n("77078"),
                u = n("289203"),
                r = n("342687");
            let d = Object.freeze({
                    SIZE_10: r.size10,
                    SIZE_12: r.size12,
                    SIZE_14: r.size14,
                    SIZE_16: r.size16,
                    SIZE_20: r.size20,
                    SIZE_24: r.size24,
                    SIZE_32: r.size32
                }),
                o = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: a = u.wrapper,
                        size: r = d.SIZE_14,
                        selectable: o = !1,
                        children: c,
                        color: f,
                        onClick: E,
                        onContextMenu: M,
                        style: _,
                        title: S,
                        uppercase: g
                    } = e;
                    return (0, s.jsx)(i.H, {
                        role: null != E ? "button" : void 0,
                        onClick: E,
                        onContextMenu: M,
                        id: t,
                        className: l(a, {
                            [u.base]: !0,
                            [r]: !0,
                            [u.selectable]: o,
                            [u.muted]: n,
                            [u.uppercase]: g
                        }),
                        title: S,
                        style: null != f ? {
                            ..._,
                            color: f
                        } : _,
                        children: c
                    })
                };
            o.Sizes = d;
            var c = o
        }
    }
]);