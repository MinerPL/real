(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["68700"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return i
                },
                categoryExpand: function() {
                    return l
                },
                categoryCollapseAll: function() {
                    return u
                },
                categoryExpandAll: function() {
                    return d
                }
            });
            var a = n("913144");

            function i(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function l(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function u(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        18054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                init: function() {
                    return o
                },
                close: function() {
                    return f
                },
                setSection: function() {
                    return c
                },
                updateChannel: function() {
                    return _
                },
                saveChannel: function() {
                    return h
                },
                deleteChannel: function() {
                    return E
                },
                default: function() {
                    return T
                }
            });
            var a = n("990746"),
                i = n("913144"),
                l = n("81732"),
                u = n("263024"),
                d = n("42203"),
                s = n("54239"),
                r = n("49111");

            function o(e, t, n) {
                i.default.dispatch({
                    type: "CHANNEL_SETTINGS_INIT",
                    channelId: e,
                    location: t,
                    subsection: n
                })
            }

            function f() {
                i.default.dispatch({
                    type: "CHANNEL_SETTINGS_CLOSE"
                })
            }

            function c(e) {
                i.default.dispatch({
                    type: "CHANNEL_SETTINGS_SET_SECTION",
                    section: e
                })
            }

            function _(e) {
                let {
                    name: t,
                    type: n,
                    topic: a,
                    bitrate: l,
                    userLimit: u,
                    nsfw: d,
                    flags: s,
                    rateLimitPerUser: r,
                    defaultThreadRateLimitPerUser: o,
                    defaultAutoArchiveDuration: f,
                    template: c,
                    defaultReactionEmoji: _,
                    rtcRegion: h,
                    videoQualityMode: E,
                    autoArchiveDuration: T,
                    locked: g,
                    invitable: S,
                    availableTags: C,
                    defaultSortOrder: M,
                    defaultForumLayout: N,
                    iconEmoji: p,
                    themeColor: I
                } = e;
                i.default.dispatch({
                    type: "CHANNEL_SETTINGS_UPDATE",
                    name: t,
                    channelType: n,
                    topic: a,
                    bitrate: l,
                    userLimit: u,
                    nsfw: d,
                    flags: s,
                    rateLimitPerUser: r,
                    defaultThreadRateLimitPerUser: o,
                    defaultAutoArchiveDuration: f,
                    template: c,
                    defaultReactionEmoji: _,
                    rtcRegion: h,
                    videoQualityMode: E,
                    autoArchiveDuration: T,
                    locked: g,
                    invitable: S,
                    availableTags: C,
                    defaultSortOrder: M,
                    defaultForumLayout: N,
                    iconEmoji: p,
                    themeColor: I
                })
            }
            async function h(e, t) {
                let {
                    name: n,
                    type: s,
                    position: o,
                    topic: f,
                    bitrate: c,
                    userLimit: _,
                    nsfw: h,
                    flags: E,
                    permissionOverwrites: T,
                    rateLimitPerUser: g,
                    defaultThreadRateLimitPerUser: S,
                    defaultAutoArchiveDuration: C,
                    template: M,
                    defaultReactionEmoji: N,
                    rtcRegion: p,
                    videoQualityMode: I,
                    autoArchiveDuration: A,
                    locked: m,
                    invitable: O,
                    availableTags: U,
                    defaultSortOrder: v,
                    defaultForumLayout: F,
                    iconEmoji: R,
                    themeColor: L
                } = t, G = d.default.getChannel(e);
                return i.default.dispatch({
                    type: "CHANNEL_SETTINGS_SUBMIT"
                }), await u.default.unarchiveThreadIfNecessary(e), a.default.patch({
                    url: r.Endpoints.CHANNEL(e),
                    body: {
                        name: n,
                        type: s,
                        position: o,
                        topic: f,
                        bitrate: c,
                        user_limit: _,
                        nsfw: h,
                        flags: E,
                        permission_overwrites: T,
                        rate_limit_per_user: g,
                        default_thread_rate_limit_per_user: S,
                        default_auto_archive_duration: C,
                        template: M,
                        rtc_region: p,
                        video_quality_mode: I,
                        auto_archive_duration: A,
                        locked: m,
                        invitable: O,
                        default_reaction_emoji: null != N ? {
                            emoji_id: null == N ? void 0 : N.emojiId,
                            emoji_name: null == N ? void 0 : N.emojiName
                        } : null === N ? null : void 0,
                        available_tags: null == U ? void 0 : U.map(e => ({
                            id: e.id,
                            name: e.name,
                            emoji_id: e.emojiId,
                            emoji_name: e.emojiName,
                            moderated: e.moderated
                        })),
                        default_sort_order: v,
                        default_forum_layout: F,
                        icon_emoji: null != R ? {
                            id: R.id,
                            name: R.name
                        } : null === R ? null : void 0,
                        theme_color: L
                    },
                    oldFormErrors: !0
                }).then(t => {
                    i.default.dispatch({
                        type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                        channelId: e
                    });
                    let n = null == G ? void 0 : G.getGuildId();
                    return null != n && !(null == G ? void 0 : G.isThread()) && l.default.checkGuildTemplateDirty(n), t
                }, e => (i.default.dispatch({
                    type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function E(e) {
                let t = d.default.getChannel(e);
                a.default.delete({
                    url: r.Endpoints.CHANNEL(e),
                    oldFormErrors: !0
                }).then(() => {
                    let e = null == t ? void 0 : t.getGuildId();
                    null != e && !(null == t ? void 0 : t.isThread()) && l.default.checkGuildTemplateDirty(e), f()
                })
            }
            var T = {
                init: o,
                open: function(e, t, n) {
                    o(e, t, n), (0, s.pushLayer)(r.Layers.CHANNEL_SETTINGS)
                },
                close: f,
                setSection: c,
                selectPermissionOverwrite: function(e) {
                    i.default.dispatch({
                        type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
                        overwriteId: e
                    })
                },
                updateChannel: _,
                saveChannel: h,
                deleteChannel: E,
                updateVoiceChannelStatus: function(e, t) {
                    return a.default.put({
                        url: r.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(e),
                        body: {
                            status: t
                        }
                    })
                }
            }
        },
        519705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("377849"),
                i = n.n(a),
                l = n("819855"),
                u = n("913144"),
                d = n("679428"),
                s = n("282109"),
                r = n("34676"),
                o = n("397336"),
                f = n("782340"),
                c = {
                    open(e) {
                        u.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        u.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let a = (0, r.getCurrentGuildSettings)(e);
                        d.default.saveUserGuildSettings(e, t), u.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, r.trackGuildNotificationSettingsUpdate)(e, t, a, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let a = Object.keys(t.channel_overrides),
                            i = (0, r.getCurrentGuildSettings)(e),
                            l = (0, r.getManyCurrentChannelSettings)(e, a);
                        d.default.saveUserGuildSettings(e, t), u.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, r.trackGuildNotificationSettingsUpdate)(e, t, i, n), Object.keys(t.channel_overrides).forEach(a => {
                            let i = l.get(a);
                            (0, r.trackChannelNotificationSettingsUpdate)(e, a, t.channel_overrides[a], i, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            a = (0, r.getManyCurrentGuildSettings)(n);
                        d.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, i] = e, l = a.get(n);
                            u.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: i
                            }), (0, r.trackGuildNotificationSettingsUpdate)(n, i, l, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, a) {
                        let i = (0, r.getCurrentChannelSettings)(e, t);
                        d.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), u.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), l.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, r.trackChannelNotificationSettingsUpdate)(e, t, n, i, a)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let a = Object.keys(t),
                            i = (0, r.getManyCurrentChannelSettings)(e, a);
                        d.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), u.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(a => (0, r.trackChannelNotificationSettingsUpdate)(e, a, t[a], i.get(a), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            a = t ? o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : o.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            i = s.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: i & ~a | n
                        })
                    },
                    handleCheckboxChange: function(e, t, n, a) {
                        u.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: a.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleSelectChange: function(e, t, n, a) {
                        u.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: a.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleMuteConfigChange: function(e, t, n) {
                        let a = t > 0 ? i().add(t, "second").toISOString() : null;
                        u.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: "MUTED",
                            updatedSettings: {
                                [e]: {
                                    selected_time_window: t,
                                    end_time: a
                                }
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleHighlightsChange: function(e, t, n) {
                        u.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: e,
                            updatedSettings: {
                                notifyHighlights: t
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleProfileChange: function(e, t) {
                        u.default.dispatch({
                            type: "GUILD_SET_NOTIFICATION_PROFILE",
                            guildId: t.id,
                            profile: e.value,
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    }
                }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("685665");

            function l(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, i.default)(t);
                    return (0, a.jsx)(l, {
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return u
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("912557"),
                l = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: d
                    })
                })
            }
        },
        549990: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanGuildFeedFeatureChannel: function() {
                    return f
                }
            });
            var a = n("754013"),
                i = n("498225"),
                l = n("886484"),
                u = n("677315"),
                d = n("305961"),
                s = n("957255"),
                r = n("49111");
            let o = a.default.combine(r.Permissions.VIEW_CHANNEL, r.Permissions.MANAGE_MESSAGES, r.Permissions.READ_MESSAGE_HISTORY);

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.getGuildId(),
                    a = (0, i.useStateFromStores)([s.default], () => s.default.can(o, e), [e]),
                    f = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(n), [n]),
                    c = (0, u.useGuildHomeExperiment)(f, !1);
                return !!(a && null !== n && c && (null != e.parentChannelThreadType && r.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.parentChannelThreadType) || t) && (0, l.isChannelAvailableInGuildFeed)(e)) || !1
            }
        },
        994827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("77078"),
                l = n("272030"),
                u = n("158534"),
                d = n("812204"),
                s = n("861370"),
                r = n("972701"),
                o = n("30874"),
                f = n("458574"),
                c = n("308798"),
                _ = n("333835"),
                h = n("530101"),
                E = n("64016"),
                T = n("13777"),
                g = n("37774"),
                S = n("117399"),
                C = n("230265"),
                M = n("542640"),
                N = n("255228"),
                p = n("772371"),
                I = n("604656"),
                A = n("782340"),
                m = (0, u.default)(function(e) {
                    let {
                        channel: t,
                        onSelect: n
                    } = e, u = (0, f.default)(t), d = (0, _.default)(t), m = (0, N.default)(t), O = (0, o.default)(t), U = (0, g.default)(t), v = (0, c.default)(t), F = (0, s.default)({
                        id: t.id,
                        label: A.default.Messages.COPY_ID_THREAD
                    }), R = (0, E.default)(t, "Context Menu"), L = (0, S.default)(t), G = (0, p.default)(t), y = (0, C.default)(t), D = (0, M.default)(t.id), P = (0, T.default)(t), b = (0, I.default)(t), x = (0, h.default)(t, {
                        hoist: !0
                    }), H = (0, r.default)(t);
                    return (0, a.jsxs)(i.Menu, {
                        navId: "thread-context",
                        onClose: l.closeContextMenu,
                        "aria-label": A.default.Messages.THREAD_ACTIONS_MENU_LABEL,
                        onSelect: n,
                        children: [(0, a.jsx)(i.MenuGroup, {
                            children: d
                        }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                            children: [R, P, O, U, y, D, u, H]
                        }, "thread-actions"), (0, a.jsxs)(i.MenuGroup, {
                            children: [m, G]
                        }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                            children: [b, x, L, v]
                        }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                            children: F
                        }, "developer-actions")]
                    })
                }, [d.default.CONTEXT_MENU, d.default.CHANNEL_LIST_THREAD_MENU])
        },
        30874: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("77078"),
                l = n("263024"),
                u = n("300322"),
                d = n("782340");

            function s(e) {
                var t;
                let n = (0, u.useCanManageThread)(e),
                    s = (0, u.useCanUnarchiveThread)(e),
                    r = e.isArchivedThread();
                if (r ? s : n) return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? (0, a.jsx)(i.MenuItem, {
                    id: "unarchive-thread",
                    label: e.isForumPost() ? d.default.Messages.UNARCHIVE_FORUM_POST : d.default.Messages.UNARCHIVE_THREAD,
                    action: () => l.default.unarchiveThread(e, !1)
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "archive-thread",
                    label: e.isForumPost() ? d.default.Messages.ARCHIVE_FORUM_POST : d.default.Messages.ARCHIVE_THREAD,
                    action: () => l.default.archiveThread(e, !1)
                })
            }
        },
        458574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("895393"),
                l = n("744196"),
                u = n("77078"),
                d = n("867965"),
                s = n("42203"),
                r = n("404008"),
                o = n("49111"),
                f = n("782340");

            function c(e, t, n) {
                let c = (0, l.default)([s.default], () => s.default.getChannel(e.parent_id));
                return (0, a.jsx)(u.MenuItem, {
                    id: "channel-copy-link",
                    label: f.default.Messages.COPY_LINK,
                    action: () => {
                        e.isForumPost() && (0, d.trackForumPostLinkCopied)({
                            postId: e.id,
                            location: {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            }
                        }), (0, i.copy)((0, r.getChannelLinkToCopy)(e, c, t, n))
                    }
                })
            }
        },
        308798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("498225"),
                l = n("77078"),
                u = n("18054"),
                d = n("819689"),
                s = n("430475"),
                r = n("610730"),
                o = n("271938"),
                f = n("957255"),
                c = n("49111"),
                _ = n("782340");

            function h(e) {
                var t;
                let h = e.isForumPost(),
                    E = (0, i.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: T,
                        canAccessChannel: g
                    } = (0, i.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    S = (0, i.useStateFromStores)([r.default], () => null !== (t = r.default.getCount(e.id)) && void 0 !== t ? t : 0, [e.id]),
                    {
                        firstMessage: C
                    } = (0, i.useStateFromStores)([s.default], () => s.default.getMessage(e.id), [e.id]),
                    M = h && (T || E && S < 1),
                    N = h && E && !T && S > 0 && null != C;
                return g && (T || M || N) ? (0, a.jsx)(l.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return _.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return M ? _.default.Messages.DELETE_FORUM_POST : _.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return _.default.Messages.DELETE_THREAD;
                        return _.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), N ? d.default.deleteMessage(e.id, e.id) : u.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }
        },
        333835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("498225"),
                l = n("77078"),
                u = n("267363"),
                d = n("154695"),
                s = n("689275"),
                r = n("755624"),
                o = n("233069"),
                f = n("245997"),
                c = n("660478"),
                _ = n("49111"),
                h = n("782340");

            function E(e) {
                let t = function(e) {
                    let t = (0, d.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([c.default, f.default, s.default, r.default], () => {
                            if (e.isForumPost()) return c.default.isForumPostUnread(e.id);
                            if (e.type !== _.ChannelTypes.GUILD_CATEGORY) return c.default.hasUnread(e.id);
                            {
                                let t = f.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, o.isReadableType)(t.type) && c.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    i = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (r.default.hasJoined(t) && !r.default.isMuted(t) && c.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: h.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, u.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return T
                },
                default: function() {
                    return S
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("377849"),
                l = n.n(i),
                u = n("498225"),
                d = n("77078"),
                s = n("820542"),
                r = n("519705"),
                o = n("319165"),
                f = n("282109"),
                c = n("679653"),
                _ = n("49111"),
                h = n("468200"),
                E = n("782340");
            let T = () => [{
                    value: h.MuteUntilSeconds.MINUTES_15,
                    label: E.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: h.MuteUntilSeconds.HOURS_1,
                    label: E.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: h.MuteUntilSeconds.HOURS_3,
                    label: E.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: h.MuteUntilSeconds.HOURS_8,
                    label: E.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: h.MuteUntilSeconds.HOURS_24,
                    label: E.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: h.MuteUntilSeconds.ALWAYS,
                    label: E.default.Messages.MUTE_DURATION_ALWAYS
                }],
                g = e => {
                    let t = e > 0 ? l().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function S(e, t) {
                let [n, i] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, o.useMutedUntilText)(i), h = (0, c.default)(e, !0);

                function S(t) {
                    t && e.type === _.ChannelTypes.GUILD_CATEGORY && (0, s.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let C = E.default.Messages.MUTE_CHANNEL_GENERIC,
                    M = E.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case _.ChannelTypes.GUILD_CATEGORY:
                        C = E.default.Messages.MUTE_CATEGORY, M = E.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case _.ChannelTypes.GROUP_DM:
                        C = E.default.Messages.MUTE_CONVERSATION, M = E.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case _.ChannelTypes.DM:
                        C = E.default.Messages.MUTE_CHANNEL.format({
                            name: h
                        }), M = E.default.Messages.UNMUTE_CHANNEL.format({
                            name: h
                        });
                        break;
                    default:
                        C = E.default.Messages.MUTE_CHANNEL_GENERIC, M = E.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(d.MenuItem, {
                    id: "unmute-channel",
                    label: M,
                    subtext: l,
                    action: () => S(!1)
                }) : (0, a.jsx)(d.MenuItem, {
                    id: "mute-channel",
                    label: C,
                    action: () => S(!0),
                    children: T().map(n => {
                        let {
                            value: i,
                            label: l
                        } = n;
                        return (0, a.jsx)(d.MenuItem, {
                            id: "".concat(i),
                            label: l,
                            action: () => (function(n) {
                                e.type === _.ChannelTypes.GUILD_CATEGORY && (0, s.categoryCollapse)(e.id);
                                let a = g(n);
                                r.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
                            })(i)
                        }, i)
                    })
                })
            }
        },
        530101: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("402924"),
                u = n("498225"),
                d = n("77078"),
                s = n("185014"),
                r = n("886484"),
                o = n("300322"),
                f = n("549990"),
                c = n("782340");

            function _(e, t) {
                let _ = e.guild_id,
                    h = i.useMemo(() => ({
                        guildId: _,
                        entity: e,
                        entityType: l.GuildFeedItemTypes.FORUM_POST
                    }), [_, e]),
                    E = (0, u.useStateFromStores)([s.default], () => s.default.getIsItemFeatured(h), [h]),
                    T = (0, o.useIsThreadModerator)(e),
                    g = (0, f.useCanGuildFeedFeatureChannel)(e);
                return T && g ? E ? (0, a.jsx)(d.MenuItem, {
                    id: "guild-feed-unfeature",
                    label: c.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST,
                    action: () => (0, d.openModalLazy)(async () => {
                        let {
                            UnfeatureItemConfirmationModal: e
                        } = await n.el("969715").then(n.bind(n, "969715"));
                        return t => (0, a.jsx)(e, {
                            featureableItem: h,
                            header: c.default.Messages.GUILD_FEED_UNFEATURE_FORUM_POST_MODAL_HEADER,
                            body: c.default.Messages.GUILD_FEED_UNFEATURED_FORUM_POST_MODAL_BODY,
                            ...t
                        })
                    })
                }) : (0, a.jsx)(d.MenuItem, {
                    id: "guild-feed-feature",
                    label: c.default.Messages.GUILD_FEED_FEATURE_FORUM_POST,
                    children: (0, r.getFeatureItemsTimes)().map(i => {
                        let {
                            value: l,
                            timePeriod: u
                        } = i;
                        return (0, a.jsx)(d.MenuItem, {
                            id: "".concat(l),
                            label: (0, r.createFeatureItemsTimeLabel)(u),
                            action: () => (0, d.openModalLazy)(async () => {
                                let {
                                    FeatureForumPostConfirmationModal: i
                                } = await n.el("969715").then(n.bind(n, "969715"));
                                return n => (0, a.jsx)(i, {
                                    thread: e,
                                    guildId: _,
                                    expiresSeconds: l,
                                    timePeriod: u,
                                    options: t,
                                    ...n
                                })
                            })
                        }, l)
                    })
                }) : null
            }
        },
        64016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("498225"),
                l = n("77078"),
                u = n("755624"),
                d = n("263024"),
                s = n("782340");

            function r(e, t) {
                let n = (0, i.useStateFromStores)([u.default], () => u.default.hasJoined(e.id));
                return n ? (0, a.jsx)(l.MenuItem, {
                    id: "leave-thread",
                    label: e.isForumPost() ? s.default.Messages.LEAVE_FORUM_POST : s.default.Messages.LEAVE_THREAD,
                    action: () => d.default.leaveThread(e, t)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "join-thread",
                    label: e.isForumPost() ? s.default.Messages.JOIN_FORUM_POST : s.default.Messages.JOIN_THREAD,
                    action: () => d.default.joinThread(e, t)
                })
            }
        },
        13777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("427964"),
                u = n.n(l),
                d = n("498225"),
                s = n("77078"),
                r = n("848848"),
                o = n("300322"),
                f = n("800762"),
                c = n("242740"),
                _ = n("782340");

            function h(e) {
                let t = (0, o.useCanJoinThreadVoice)(e),
                    n = (0, d.useStateFromStores)([f.default], () => f.default.isInChannel(e.id)),
                    l = (0, d.useStateFromStores)([f.default], () => !u.isEmpty(f.default.getVoiceStatesForChannel(e.id))),
                    {
                        needSubscriptionToAccess: h
                    } = (0, r.default)(e.id),
                    E = i.useCallback(() => {
                        c.default.handleVoiceConnect({
                            channel: e,
                            connected: n,
                            needSubscriptionToAccess: h,
                            locked: !1
                        })
                    }, [e, n, h]);
                return n || !t ? null : (0, a.jsx)(s.MenuItem, {
                    id: "join-thread-voice",
                    label: l ? _.default.Messages.JOIN_CALL : _.default.Messages.START_CALL,
                    action: E
                })
            }
        },
        37774: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("77078"),
                l = n("263024"),
                u = n("300322"),
                d = n("782340");

            function s(e) {
                let t = (0, u.useIsThreadModerator)(e),
                    n = e.isLockedThread();
                if (t) return n ? (0, a.jsx)(i.MenuItem, {
                    id: "unlock-thread",
                    label: e.isForumPost() ? d.default.Messages.UNLOCK_FORUM_POST : d.default.Messages.UNLOCK_THREAD,
                    action: () => l.default.unlockThread(e)
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "lock-thread",
                    label: e.isForumPost() ? d.default.Messages.LOCK_FORUM_POST : d.default.Messages.LOCK_THREAD,
                    action: () => l.default.lockThread(e)
                })
            }
        },
        117399: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("498225"),
                l = n("77078"),
                u = n("477566"),
                d = n("154695"),
                s = n("263024"),
                r = n("300322"),
                o = n("42203"),
                f = n("724210"),
                c = n("782340");

            function _(e) {
                let t = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(e.parent_id)),
                    n = (0, r.useIsThreadModerator)(e),
                    _ = (0, d.useExistingPin)(e);
                return (null == t ? void 0 : t.isForumLikeChannel()) && n ? e.hasFlag(f.ChannelFlags.PINNED) ? (0, a.jsx)(l.MenuItem, {
                    id: "unpin-thread",
                    label: c.default.Messages.UNPIN_POST,
                    action: () => s.default.unpin(e)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "pin-thread",
                    label: c.default.Messages.PIN_POST,
                    action: function() {
                        null != _ ? u.default.show({
                            title: c.default.Messages.FORUM_PIN_CONFIRM_TITLE,
                            body: c.default.Messages.FORUM_PIN_CONFIRM_BODY,
                            onConfirm: async () => {
                                await s.default.unpin(_), s.default.pin(e)
                            }
                        }) : s.default.pin(e)
                    }
                }) : null
            }
        },
        230265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("77078"),
                l = n("18054"),
                u = n("300322"),
                d = n("782340");

            function s(e) {
                let t = (0, u.useCanManageThread)(e),
                    n = (0, u.useIsActiveChannelOrUnarchivableThread)(e),
                    s = (0, u.useIsNonModInLockedThread)(e);
                return !t || !n || s || __OVERLAY__ ? null : (0, a.jsx)(i.MenuItem, {
                    id: "edit-thread",
                    label: e.isForumPost() ? d.default.Messages.EDIT_FORUM_POST : d.default.Messages.EDIT_THREAD,
                    action: () => {
                        (0, i.closeAllModals)(), l.default.open(e.id)
                    }
                })
            }
        },
        542640: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("498225"),
                l = n("77078"),
                u = n("272030"),
                d = n("430568"),
                s = n("385976"),
                r = n("404607"),
                o = n("154695"),
                f = n("300322"),
                c = n("42203"),
                _ = n("953371"),
                h = n("782340"),
                E = n("633902");

            function T(e) {
                let {
                    tag: t
                } = e, {
                    name: n,
                    emojiId: l,
                    emojiName: u
                } = t, r = (0, i.useStateFromStores)([s.default], () => null != l ? s.default.getUsableCustomEmojiById(l) : null);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.default, {
                        className: E.emoji,
                        emojiId: l,
                        emojiName: u,
                        animated: !!(null == r ? void 0 : r.animated)
                    }), n]
                })
            }

            function g(e) {
                let t = (0, i.useStateFromStores)([c.default], () => c.default.getChannel(e), [e]),
                    n = (0, f.useCanManageThread)(t),
                    d = (0, i.useStateFromStores)([c.default], () => c.default.getChannel(null == t ? void 0 : t.parent_id), [t]),
                    s = (0, o.useVisibleForumTags)(d),
                    E = (0, o.useAppliedTags)(t),
                    g = E.length >= _.MAX_FORUM_POST_TAGS,
                    S = (0, f.useIsActiveChannelOrUnarchivableThread)(t);
                if (null == t) return (0, u.closeContextMenu)(), null;
                if (!n || __OVERLAY__ || !t.isForumPost() || (null == s ? void 0 : s.length) === 0 || !S) return null;
                let C = e => {
                        let n = new Set(E);
                        if (n.has(e)) n.delete(e);
                        else {
                            if (g) return;
                            n.add(e)
                        }
                        let a = Array.from(n).map(e => e.id);
                        r.default.updateForumPostTags(t.id, a)
                    },
                    M = null == s ? void 0 : s.map(e => {
                        let t = E.includes(e);
                        return (0, a.jsx)(l.MenuCheckboxItem, {
                            id: e.id,
                            label: (0, a.jsx)(T, {
                                tag: e
                            }),
                            disabled: g && !t,
                            action: () => C(e),
                            checked: t
                        }, e.id)
                    });
                return (0, a.jsx)(l.MenuItem, {
                    id: "edit-tags",
                    label: h.default.Messages.FORUM_TAG_POST_EDIT,
                    children: M
                })
            }
        },
        255228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("377849"),
                l = n.n(i),
                u = n("498225"),
                d = n("77078"),
                s = n("319165"),
                r = n("755624"),
                o = n("263024"),
                f = n("531674"),
                c = n("782340");

            function _(e) {
                let [t, n, i] = (0, u.useStateFromStoresArray)([r.default], () => [r.default.isMuted(e.id), r.default.getMuteConfig(e.id), r.default.hasJoined(e.id)]), _ = (0, s.useMutedUntilText)(n);

                function h(t) {
                    o.default.setNotificationSettings(e, {
                        muted: t
                    })
                }
                return i ? t ? (0, a.jsx)(d.MenuItem, {
                    id: "unmute-channel",
                    label: e.isForumPost() ? c.default.Messages.UNMUTE_FORUM_POST : c.default.Messages.UNMUTE_THREAD,
                    subtext: _,
                    action: () => h(!1)
                }) : (0, a.jsx)(d.MenuItem, {
                    id: "mute-channel",
                    label: e.isForumPost() ? c.default.Messages.MUTE_FORUM_POST : c.default.Messages.MUTE_THREAD,
                    action: () => h(!0),
                    children: (0, f.getMuteTimes)().map(t => {
                        let {
                            value: n,
                            label: i
                        } = t;
                        return (0, a.jsx)(d.MenuItem, {
                            id: "".concat(n),
                            label: i,
                            action: () => (function(t) {
                                let n = t > 0 ? l().add(t, "second").toISOString() : null;
                                o.default.setNotificationSettings(e, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: t,
                                        end_time: n
                                    }
                                })
                            })(n)
                        }, n)
                    })
                }) : (0, a.jsx)(d.MenuItem, {
                    id: "mute-disabled",
                    label: e.isForumPost() ? c.default.Messages.MUTE_FORUM_POST : c.default.Messages.MUTE_THREAD,
                    disabled: !0
                })
            }
        },
        772371: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("498225"),
                l = n("77078"),
                u = n("755624"),
                d = n("263024"),
                s = n("414833"),
                r = n("648564"),
                o = n("782340");

            function f(e) {
                let t = (0, s.useThreadNotificationSetting)(e),
                    n = (0, i.useStateFromStores)([u.default], () => u.default.hasJoined(e.id));
                return n ? (0, a.jsx)(l.MenuItem, {
                    id: "thread-notifications",
                    label: o.default.Messages.NOTIFICATION_SETTINGS,
                    children: (0, r.getThreadNotificationOptions)().map(n => {
                        let {
                            setting: i,
                            label: u
                        } = n;
                        return (0, a.jsx)(l.MenuRadioItem, {
                            group: "thread-notifications",
                            id: "".concat(i),
                            label: u,
                            action: () => d.default.setNotificationSettings(e, {
                                flags: i
                            }),
                            checked: i === t
                        }, i)
                    })
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "notifications-disabled",
                    label: o.default.Messages.NOTIFICATION_SETTINGS,
                    disabled: !0
                })
            }
        },
        604656: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("77078"),
                l = n("263024"),
                u = n("300322"),
                d = n("49111"),
                s = n("782340");

            function r(e) {
                var t, n;
                let r = (0, u.useIsThreadModerator)(e);
                if (!r || e.type !== d.ChannelTypes.PRIVATE_THREAD) return null;
                let o = null === (n = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.invitable) || void 0 === n || n;
                return (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "toggle-thread-invitable",
                    label: s.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
                    checked: o,
                    action: () => l.default.setInvitable(e, !o)
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("77078"),
                l = n("845579"),
                u = n("662255"),
                d = n("306160");

            function s(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: s,
                    shiftId: r,
                    showIconFirst: o
                } = e, f = l.DeveloperMode.useSetting();
                if (__OVERLAY__ || !f || !d.SUPPORTS_COPY) return null;
                let c = "devmode-copy-id-".concat(t);
                return (0, a.jsx)(i.MenuItem, {
                    id: c,
                    label: n,
                    action: function(e) {
                        let n = null != r && e.shiftKey ? r : t;
                        (0, d.copy)(n), null == s || s()
                    },
                    icon: u.default,
                    showIconFirst: o
                }, c)
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return c
                },
                removeFavoriteChannel: function() {
                    return _
                },
                setFavoriteChannelNickname: function() {
                    return h
                },
                addFavoriteCategory: function() {
                    return E
                },
                removeFavoriteCategory: function() {
                    return T
                },
                updateFavoriteChannels: function() {
                    return g
                },
                toggleFavoriteServerMuted: function() {
                    return S
                }
            });
            var a = n("500947"),
                i = n("975162"),
                l = n("872173"),
                u = n("42203"),
                d = n("957255"),
                s = n("379881"),
                r = n("809924");

            function o() {
                let e = s.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function f(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === i.FavoriteChannelType.CATEGORY) continue;
                    let a = u.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !d.default.can(r.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = s.default.isFavorite(e);
                !n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                let t = s.default.getFavorite(e);
                null != t && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function h(e, t) {
                let n = s.default.isFavorite(e);
                n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = a.default.fromTimestamp(Date.now());
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: o(),
                        parentId: "0"
                    })
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function T(e) {
                _(e)
            }

            function g(e) {
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S() {
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, l.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        972701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("498225"),
                l = n("77078"),
                u = n("923959"),
                d = n("379881"),
                s = n("200008"),
                r = n("498139"),
                o = n("49111"),
                f = n("782340");

            function c(e, t) {
                return e.type === o.ChannelTypes.GROUP_DM ? t ? f.default.Messages.UNFAVORITE_GDM : f.default.Messages.FAVORITE_GDM : e.type === o.ChannelTypes.DM ? t ? f.default.Messages.UNFAVORITE_DM : f.default.Messages.FAVORITE_DM : t ? f.default.Messages.UNFAVORITE_CHANNEL : f.default.Messages.FAVORITE_CHANNEL
            }

            function _(e) {
                var t;
                let n = (0, i.useStateFromStores)([d.default], () => d.default.isFavorite(e.id)),
                    f = function(e) {
                        let t = (0, i.useStateFromStores)([u.default], () => u.default.getChannels(o.FAVORITES))[o.ChannelTypes.GUILD_CATEGORY].filter(e => "null" !== e.channel.id),
                            {
                                favoritesEnabled: n
                            } = r.default.useExperiment({
                                location: "58e21a_1"
                            }, {
                                autoTrackExposure: !1
                            });
                        if (!n) return null;

                        function d(t) {
                            (0, s.addFavoriteChannel)(e.id, t)
                        }
                        return 0 === t.length ? (0, a.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: c(e, !1),
                            action: () => d(null)
                        }) : (0, a.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: c(e, !1),
                            action: () => d(null),
                            children: t.map(e => (0, a.jsx)(l.MenuItem, {
                                id: "favorite-".concat(e.channel.id),
                                label: e.channel.name,
                                action: () => d(e.channel.id)
                            }, e.channel.id))
                        })
                    }(e);
                let _ = (t = e, (0, a.jsx)(l.MenuItem, {
                    id: "favorite-channel",
                    label: c(t, !0),
                    action: function() {
                        (0, s.removeFavoriteChannel)(t.id)
                    }
                }));
                return __OVERLAY__ ? null : n ? _ : f
            }
        },
        319165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMutedUntilText: function() {
                    return u
                },
                default: function() {
                    return d
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("77078"),
                l = n("782340");

            function u(e) {
                return null == e || null == e.end_time ? null : l.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(l.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function d(e) {
                let {
                    muteConfig: t,
                    className: n
                } = e, l = u(t);
                return null != l ? (0, a.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: n,
                    children: l
                }) : null
            }
        },
        414833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                computeThreadNotificationSetting: function() {
                    return f
                },
                useThreadNotificationSetting: function() {
                    return c
                }
            });
            var a = n("498225"),
                i = n("208127"),
                l = n("42203"),
                u = n("282109"),
                d = n("568734"),
                s = n("755624"),
                r = n("648564"),
                o = n("49111");

            function f(e) {
                let t = s.default.flags(e.id);
                if (null == t || (0, i.isReadStateStaffExperimentEnabled)() && s.default.isMuted(e.id)) return r.ThreadMemberFlags.NO_MESSAGES;
                if ((0, d.hasFlag)(t, r.ThreadMemberFlags.ALL_MESSAGES)) return r.ThreadMemberFlags.ALL_MESSAGES;
                if ((0, d.hasFlag)(t, r.ThreadMemberFlags.ONLY_MENTIONS)) return r.ThreadMemberFlags.ONLY_MENTIONS;
                if ((0, d.hasFlag)(t, r.ThreadMemberFlags.NO_MESSAGES)) return r.ThreadMemberFlags.NO_MESSAGES;
                let n = l.default.getChannel(e.parent_id);
                if (null == n || u.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return r.ThreadMemberFlags.NO_MESSAGES;
                let a = u.default.resolvedMessageNotifications(n);
                return a === o.UserNotificationSettings.NO_MESSAGES ? r.ThreadMemberFlags.NO_MESSAGES : a === o.UserNotificationSettings.ONLY_MENTIONS ? r.ThreadMemberFlags.ONLY_MENTIONS : r.ThreadMemberFlags.ALL_MESSAGES
            }

            function c(e) {
                return (0, a.useStateFromStores)([s.default, u.default, l.default], () => f(e), [e])
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("427964"),
                i = n.n(a),
                l = n("990746"),
                u = n("689988"),
                d = n("605250"),
                s = n("870691"),
                r = n("42203"),
                o = n("49111");
            let f = {},
                c = new d.default("UserGuildSettingsManager"),
                _ = 0;

            function h() {
                f = {
                    ...s.default.getCollapsedCategories()
                }
            }

            function E() {
                !__OVERLAY__ && (clearTimeout(_), _ = setTimeout(() => T(), 15e3))
            }
            async function T(e, t) {
                await g(null != t ? {
                    [null != e ? e : o.ME]: t
                } : {})
            }
            async function g(e) {
                clearTimeout(_);
                let t = 0 !== Object.keys(e).length,
                    n = s.default.getCollapsedCategories(),
                    a = function() {
                        let e = {},
                            t = s.default.getCollapsedCategories();
                        for (let n in t) t[n] !== f[n] && (e[n] = !0);
                        for (let n in f) t[n] !== f[n] && (e[n] = !0);
                        return e
                    }();
                for (let i in a) {
                    let a = r.default.getChannel(i);
                    null != a && null != a.guild_id && (!(a.guild_id in e) && (e[a.guild_id] = {}), null == e[a.guild_id].channel_overrides && (e[a.guild_id].channel_overrides = {}), e[a.guild_id].channel_overrides[a.id] = {
                        ...e[a.guild_id].channel_overrides[a.id],
                        collapsed: a.id in n
                    }, t = !0)
                }
                if (!t) return;
                f = {
                    ...n
                };
                let u = i.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; u.length > 0;) {
                    let e = u.shift();
                    if (e.guildId !== o.FAVORITES) try {
                        await l.default.patch({
                            url: o.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await S(1e3)
                    } catch (t) {
                        c.error(t), e.attempts += 1, e.attempts < 3 && u.push(e), await S(5e3)
                    }
                }
            }

            function S(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function C() {
                f = {
                    ...s.default.getCollapsedCategories()
                }
            }
            class M extends u.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: E,
                        CATEGORY_EXPAND: E,
                        CATEGORY_COLLAPSE_ALL: E,
                        CATEGORY_EXPAND_ALL: E,
                        POST_CONNECTION_OPEN: h,
                        USER_GUILD_SETTINGS_FULL_UPDATE: C
                    }, this.saveUserGuildSettings = T, this.saveUserGuildSettingsBulk = g
                }
            }
            var N = new M
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("498225"),
                i = n("913144"),
                l = n("449008"),
                u = n("42203"),
                d = n("341542"),
                s = n("923959"),
                r = n("49111");
            let o = {},
                f = 0;

            function c() {
                f += 1
            }

            function _(e) {
                if (null == o[e]) return !1;
                delete o[e]
            }
            class h extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default, d.default), this.removeChangeListener(c), this.addChangeListener(c), o = null != e ? e : {}
                }
                getState() {
                    return o
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!o[e] && o[e]
                }
                getCollapsedCategories() {
                    return o
                }
                get version() {
                    return f
                }
            }
            h.displayName = "CategoryCollapseStore", h.persistKey = "collapsedCategories";
            var E = new h(i.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (o = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? o[e.channel_id] = !0 : delete o[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(l.isNotNullish));
                    for (let e in o) {
                        let t = u.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete o[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (o[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (o[t]) return !1;
                    o[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return _(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    s.default.getChannels(t)[r.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (o[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    s.default.getChannels(t)[r.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete o[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return _(t)
                }
            })
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("469563"),
                l = n("35647"),
                u = n("75196"),
                d = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...d
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, u.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: l,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, l.IdIcon)
        }
    }
]);