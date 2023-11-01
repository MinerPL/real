(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57348"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return a
                },
                categoryExpand: function() {
                    return u
                },
                categoryCollapseAll: function() {
                    return r
                },
                categoryExpandAll: function() {
                    return l
                }
            });
            var i = n("913144");

            function a(e) {
                i.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function u(e) {
                i.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function r(e) {
                i.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function l(e) {
                i.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return u
                },
                unsubscribeMembers: function() {
                    return r
                },
                subscribeChannel: function() {
                    return l
                },
                subscribeChannelDimensions: function() {
                    return s
                }
            });
            var i = n("913144"),
                a = n("696605");

            function u(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function s(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: u,
                    rowHeight: r
                } = e;

                function s(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / r)) + t)
                }
                let o = [];

                function d(e) {
                    let t = e + (a.MINIMUM_RANGE - 1);
                    return o.push([e, t]), t + 1
                }
                let c = s(.5 * u),
                    f = s(i, -c),
                    E = s(i + u, c);
                for (f > 0 && (f = Math.max(d(0), f)), f = Math.floor(f / a.MINIMUM_RANGE) * a.MINIMUM_RANGE; f <= E;) f = d(f);
                l(t, n, o)
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return a
                },
                updateCardInfo: function() {
                    return u
                },
                clearCardInfo: function() {
                    return r
                },
                updateAddressInfo: function() {
                    return l
                },
                clearError: function() {
                    return s
                }
            });
            var i = n("913144");

            function a(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function u(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function r() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        519705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("866227"),
                a = n.n(i),
                u = n("819855"),
                r = n("913144"),
                l = n("679428"),
                s = n("282109"),
                o = n("34676"),
                d = n("397336"),
                c = n("782340"),
                f = {
                    open(e) {
                        r.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        r.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n) {
                        let i = (0, o.getCurrentGuildSettings)(e);
                        l.default.saveUserGuildSettings(e, t), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, i, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let i = Object.keys(t.channel_overrides),
                            a = (0, o.getCurrentGuildSettings)(e),
                            u = (0, o.getManyCurrentChannelSettings)(e, i);
                        l.default.saveUserGuildSettings(e, t), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, o.trackGuildNotificationSettingsUpdate)(e, t, a, n), Object.keys(t.channel_overrides).forEach(i => {
                            let a = u.get(i);
                            (0, o.trackChannelNotificationSettingsUpdate)(e, i, t.channel_overrides[i], a, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            i = (0, o.getManyCurrentGuildSettings)(n);
                        l.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, a] = e, u = i.get(n);
                            r.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: a
                            }), (0, o.trackGuildNotificationSettingsUpdate)(n, a, u, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, i) {
                        let a = (0, o.getCurrentChannelSettings)(e, t);
                        l.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), u.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, o.trackChannelNotificationSettingsUpdate)(e, t, n, a, i)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let i = Object.keys(t),
                            a = (0, o.getManyCurrentChannelSettings)(e, i);
                        l.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(i => (0, o.trackChannelNotificationSettingsUpdate)(e, i, t[i], a.get(i), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            a = s.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: a & ~i | n
                        })
                    },
                    handleCheckboxChange: function(e, t, n, i) {
                        r.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleSelectChange: function(e, t, n, i) {
                        r.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: i.id,
                            profile: e,
                            updatedSettings: {
                                [t]: n
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleMuteConfigChange: function(e, t, n) {
                        let i = t > 0 ? a().add(t, "second").toISOString() : null;
                        r.default.dispatch({
                            type: "GUILD_UPDATE_NOTIFICATION_PROFILE",
                            guildId: n.id,
                            profile: "MUTED",
                            updatedSettings: {
                                [e]: {
                                    selected_time_window: t,
                                    end_time: i
                                }
                            },
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    },
                    handleHighlightsChange: function(e, t, n) {
                        r.default.dispatch({
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
                        r.default.dispatch({
                            type: "GUILD_SET_NOTIFICATION_PROFILE",
                            guildId: t.id,
                            profile: e.value,
                            handleUpdate: this.updateGuildNotificationSettings
                        })
                    }
                }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return a
                }
            });
            var i = n("913144");

            function a() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691");

            function a(e) {
                let [t, n] = (0, i.useState)(!1), a = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    a.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = a.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [a]), t
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return l
                }
            }), n("37983");
            var i = n("884691"),
                a = n("917351"),
                u = n.n(a);
            n("233736");
            var r = n("666020");

            function l(e) {
                i.useEffect(() => (u.forEach(e, (e, t) => (0, r.subscribeMembers)(t, e)), () => {
                    u.forEach(e, (e, t) => (0, r.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                a = n("884691"),
                u = n("414456"),
                r = n.n(u),
                l = n("587974"),
                s = n("315102"),
                o = n("524768"),
                d = n("616674"),
                c = n("363577");

            function f(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: u,
                    height: f,
                    className: E,
                    selectable: _ = !1,
                    onFocus: I,
                    onBlur: T,
                    onMouseOver: S,
                    onMouseLeave: p,
                    ...N
                } = e, [C, h] = a.useState(!1), g = a.useCallback(() => {
                    h(!0), null == I || I()
                }, [I]), A = a.useCallback(() => {
                    h(!1), null == T || T()
                }, [T]), m = a.useCallback(() => {
                    h(!0), null == S || S()
                }, [S]), U = a.useCallback(() => {
                    h(!1), null == p || p()
                }, [p]), M = a.useMemo(() => {
                    if (t.type === o.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return s.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: u
                        })
                    }
                    return c
                }, [t, u]);
                return (0, i.jsx)("div", {
                    ...N,
                    className: r(d.wrapper, E, {
                        [d.selectable]: _,
                        [d.selected]: _ && n
                    }),
                    onFocus: g,
                    onBlur: A,
                    onMouseOver: m,
                    onMouseLeave: U,
                    children: (0, i.jsx)(l.default, {
                        className: d.mask,
                        mask: _ && (n || C) ? l.MaskIDs.SQUIRCLE : l.MaskIDs.AVATAR_DEFAULT,
                        width: u,
                        height: f,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: u,
                                height: f
                            },
                            src: M
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                u = n.n(a),
                r = n("83910"),
                l = n("93393"),
                s = n("317041"),
                o = n("749296");
            let d = e => {
                switch (e.id) {
                    case s.BuiltInSectionId.BUILT_IN:
                        return r.default;
                    case s.BuiltInSectionId.FRECENCY:
                        return l.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: a,
                    height: r,
                    padding: l,
                    isSelected: s,
                    selectable: c = !1,
                    ...f
                } = e, E = d(t);
                return (0, i.jsx)("div", {
                    className: u(o.wrapper, n, {
                        [o.selectable]: c,
                        [o.selected]: c && s
                    }),
                    style: {
                        width: a,
                        height: r,
                        padding: null != l ? l : 0
                    },
                    children: null != E ? (0, i.jsx)(E, {
                        className: o.icon,
                        width: a,
                        height: r,
                        ...f
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return l
                },
                pxToRem: function() {
                    return s
                },
                getCommandQuery: function() {
                    return o
                }
            });
            var i = n("524768"),
                a = n("991630"),
                u = n("943161"),
                r = n("317041");
            let l = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? u.default : a.default;

            function s(e) {
                return "".concat(e / 16, "rem")
            }

            function o(e, t) {
                let n = t,
                    i = !1,
                    a = t.indexOf(":");
                if (a >= 0) {
                    let e = t.lastIndexOf(" ", a);
                    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, a)
                } else t = t.substring(0, t.length);
                let u = t.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
                return u.length > r.MAX_SUBCOMMAND_LEVEL && (i = !0, u.pop()), t = u.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
                    text: t,
                    parts: u,
                    hasSpaceTerminator: i
                }
            }
        },
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("850572"),
                r = () => (0, i.jsx)("div", {
                    className: u.loadingWrapper,
                    children: (0, i.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                r = n("267363"),
                l = n("680986"),
                s = n("689275"),
                o = n("755624"),
                d = n("233069"),
                c = n("245997"),
                f = n("660478"),
                E = n("49111"),
                _ = n("782340");

            function I(e) {
                let t = function(e) {
                    let t = (0, l.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, a.useStateFromStores)([f.default, c.default, s.default, o.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== E.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, d.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let i = new Set(t[e.id].map(e => e.channel.id)),
                                    a = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in a)
                                    if (i.has(e)) {
                                        for (let t in a[e])
                                            if (o.default.hasJoined(t) && !o.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, i.jsx)(u.MenuItem, {
                    id: "mark-channel-read",
                    label: _.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, r.ackChannel)(e)
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
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("866227"),
                u = n.n(a),
                r = n("446674"),
                l = n("77078"),
                s = n("820542"),
                o = n("519705"),
                d = n("319165"),
                c = n("282109"),
                f = n("679653"),
                E = n("49111"),
                _ = n("468200"),
                I = n("782340");
            let T = () => [{
                    value: _.MuteUntilSeconds.MINUTES_15,
                    label: I.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: _.MuteUntilSeconds.HOURS_1,
                    label: I.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: _.MuteUntilSeconds.HOURS_3,
                    label: I.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_8,
                    label: I.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_24,
                    label: I.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: _.MuteUntilSeconds.ALWAYS,
                    label: I.default.Messages.MUTE_DURATION_ALWAYS
                }],
                S = e => {
                    let t = e > 0 ? u().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function p(e, t) {
                let [n, a] = (0, r.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), u = (0, d.useMutedUntilText)(a), _ = (0, f.default)(e, !0);

                function p(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, s.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let N = I.default.Messages.MUTE_CHANNEL_GENERIC,
                    C = I.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        N = I.default.Messages.MUTE_CATEGORY, C = I.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        N = I.default.Messages.MUTE_CONVERSATION, C = I.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        N = I.default.Messages.MUTE_CHANNEL.format({
                            name: _
                        }), C = I.default.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        N = I.default.Messages.MUTE_CHANNEL_GENERIC, C = I.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, i.jsx)(l.MenuItem, {
                    id: "unmute-channel",
                    label: C,
                    subtext: u,
                    action: () => p(!1)
                }) : (0, i.jsx)(l.MenuItem, {
                    id: "mute-channel",
                    label: N,
                    action: () => p(!0),
                    children: T().map(n => {
                        let {
                            value: a,
                            label: u
                        } = n;
                        return (0, i.jsx)(l.MenuItem, {
                            id: "".concat(a),
                            label: u,
                            action: () => (function(n) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, s.categoryCollapse)(e.id);
                                let i = S(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, i, t)
                            })(a)
                        }, a)
                    })
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function i() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function a(e) {
                return {
                    textValue: e,
                    richValue: r(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return i
                },
                createState: function() {
                    return a
                },
                toRichValue: function() {
                    return r
                },
                voidToOptionValue: function() {
                    return l
                }
            });
            let u = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function r(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : u
            }

            function l(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = n("171210").default
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return d
                },
                ConfettiCannonContextProvider: function() {
                    return c
                }
            });
            var i = n("37983"),
                a = n("884691"),
                u = n("516555"),
                r = n("65597"),
                l = n("206230"),
                s = n("49111");
            let o = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => s.NOOP,
                    removeClickListener: s.NOOP
                },
                d = a.createContext(o);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: s,
                    baseConfig: c,
                    addClickListener: f,
                    removeClickListener: E
                } = e, _ = (0, u.useConfettiCannon)(n, s), I = (0, r.default)([l.default], () => l.default.useReducedMotion), T = a.useMemo(() => I ? o : {
                    confettiCanvas: n,
                    cannon: _,
                    createConfetti: (e, t) => _.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => _.createConfetti({
                        ...c,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return _.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            a = arguments.length > 4 ? arguments[4] : void 0;
                        return _.createMultipleConfetti({
                            ...c,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, a)
                    },
                    addClickListener: f,
                    removeClickListener: E
                }, [f, c, _, n, I, E]);
                return (0, i.jsx)(d.Provider, {
                    value: T,
                    children: t
                })
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return f
                },
                removeFavoriteChannel: function() {
                    return E
                },
                setFavoriteChannelNickname: function() {
                    return _
                },
                addFavoriteCategory: function() {
                    return I
                },
                removeFavoriteCategory: function() {
                    return T
                },
                updateFavoriteChannels: function() {
                    return S
                },
                toggleFavoriteServerMuted: function() {
                    return p
                }
            });
            var i = n("249654"),
                a = n("151426"),
                u = n("872173"),
                r = n("42203"),
                l = n("957255"),
                s = n("379881"),
                o = n("843455");

            function d() {
                let e = s.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function c(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === a.FavoriteChannelType.CATEGORY) continue;
                    let i = r.default.getChannel(t);
                    if (null == i || !i.isPrivate() && !l.default.can(o.Permissions.VIEW_CHANNEL, i)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function f(e, t) {
                let n = s.default.isFavorite(e);
                !n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = a.FavoriteChannel.create({
                        nickname: "",
                        type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), c(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = s.default.getFavorite(e);
                null != t && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === a.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    c(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e, t) {
                let n = s.default.isFavorite(e);
                n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function I(e) {
                let t = i.default.fromTimestamp(Date.now());
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = a.FavoriteChannel.create({
                        nickname: e,
                        type: a.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function T(e) {
                E(e)
            }

            function S(e) {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let i of e)
                        if (null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id) {
                            var n;
                            t.favoriteChannels[i.id].parentId = null !== (n = i.parent_id) && void 0 !== n ? n : "0"
                        }
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function p() {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        972701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                r = n("923959"),
                l = n("379881"),
                s = n("200008"),
                o = n("498139"),
                d = n("49111"),
                c = n("782340");

            function f(e, t) {
                return e.type === d.ChannelTypes.GROUP_DM ? t ? c.default.Messages.UNFAVORITE_GDM : c.default.Messages.FAVORITE_GDM : e.type === d.ChannelTypes.DM ? t ? c.default.Messages.UNFAVORITE_DM : c.default.Messages.FAVORITE_DM : t ? c.default.Messages.UNFAVORITE_CHANNEL : c.default.Messages.FAVORITE_CHANNEL
            }

            function E(e) {
                var t;
                let n = (0, a.useStateFromStores)([l.default], () => l.default.isFavorite(e.id)),
                    c = function(e) {
                        let t = (0, a.useStateFromStores)([r.default], () => r.default.getChannels(d.FAVORITES))[d.ChannelTypes.GUILD_CATEGORY].filter(e => "null" !== e.channel.id),
                            {
                                favoritesEnabled: n
                            } = o.default.useExperiment({
                                location: "58e21a_1"
                            }, {
                                autoTrackExposure: !1
                            });
                        if (!n) return null;

                        function l(t) {
                            (0, s.addFavoriteChannel)(e.id, t)
                        }
                        return 0 === t.length ? (0, i.jsx)(u.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => l(null)
                        }) : (0, i.jsx)(u.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => l(null),
                            children: t.map(e => (0, i.jsx)(u.MenuItem, {
                                id: "favorite-".concat(e.channel.id),
                                label: e.channel.name,
                                action: () => l(e.channel.id)
                            }, e.channel.id))
                        })
                    }(e);
                let E = (t = e, (0, i.jsx)(u.MenuItem, {
                    id: "favorite-channel",
                    label: f(t, !0),
                    action: function() {
                        (0, s.removeFavoriteChannel)(t.id)
                    }
                }));
                return __OVERLAY__ ? null : n ? E : c
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                r = n("162771"),
                l = n("49111"),
                s = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([r.default], () => r.default.getGuildId());
                return __OVERLAY__ || t !== l.FAVORITES ? null : (0, i.jsx)(u.MenuItem, {
                    id: "set-channel-nickname",
                    label: s.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("353228").then(n.bind(n, "353228"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                channelId: e.id
                            })
                        })
                    }
                })
            }
        },
        976127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMessageRequestItem: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                r = n("16108"),
                l = n("697218"),
                s = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([l.default], () => l.default.getCurrentUser());
                return (null == t ? void 0 : t.isStaff()) !== !0 ? null : (0, i.jsxs)(i.Fragment, {
                    children: [!e.isMessageRequest && (0, i.jsx)(u.MenuItem, {
                        id: "mark-as-message-request",
                        label: s.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
                        action: () => (0, r.markAsMessageRequest)(e.id)
                    }), (0, i.jsx)(u.MenuItem, {
                        id: "clear-message-request",
                        label: s.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
                        action: () => (0, r.clearMessageRequestState)(e.id)
                    })]
                })
            }
        },
        856030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSafetyWarningsItem: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                r = n("277734"),
                l = n("764828"),
                s = n("697218"),
                o = n("782340");

            function d(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
                    n = (0, a.useStateFromStores)([l.default], () => l.default.getChannelSafetyWarnings(e.id));
                return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length ? null : (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(u.MenuItem, {
                        id: "clear-safety-warnings",
                        label: o.default.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
                        action: () => (0, r.clearChannelSafetyWarnings)(e.id)
                    })
                })
            }
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return _
                },
                canGuildUseRoleIcons: function() {
                    return I
                }
            });
            var i = n("867805"),
                a = n("407063"),
                u = n("315102"),
                r = n("773336"),
                l = n("49111");
            let s = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, r.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: E(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)()))),
                E = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let r = u.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        f = "quality=lossless";
                    return (null != t && (c = "size=" + (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(s, "/").concat(n, "/").concat(i, ".").concat(r, "?").concat(c).concat(f) : "".concat(o).concat(l.Endpoints.ROLE_ICON(n, i), "?").concat(c)
                },
                _ = e => e.startsWith(s) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                I = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(l.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return l
                },
                setCurrentGuild: function() {
                    return s
                },
                initGuildIdentitySettings: function() {
                    return o
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingBanner: function() {
                    return E
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingNickname: function() {
                    return T
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingMemberChanges: function() {
                    return p
                },
                resetPendingProfileChanges: function() {
                    return N
                },
                resetAllPending: function() {
                    return C
                },
                clearErrors: function() {
                    return h
                },
                setDisableSubmit: function() {
                    return g
                }
            });
            var i = n("872717"),
                a = n("913144"),
                u = n("54239"),
                r = n("49111");
            async function l(e, t) {
                let {
                    nick: n,
                    avatar: u
                } = t;
                if (null == e) throw Error("Need guildId");
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: r.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: u
                        },
                        oldFormErrors: !0
                    });
                    return a.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), a.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), a.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function s(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function o(e, t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, u.popLayer)()
            }

            function c() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function E(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function _(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function I(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function T(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function S(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function p() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function C() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function h() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, a, u, r, l, s, o, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var f = n("446674"),
                E = n("913144"),
                _ = n("49111");
            let I = _.FormStates.CLOSED,
                T = {},
                S = !1;

            function p() {
                I = _.FormStates.CLOSED, T = {}, o = null, d = void 0, c = []
            }

            function N() {
                C(), h(), T = {}, I = _.FormStates.OPEN
            }

            function C() {
                i = void 0, l = void 0
            }

            function h() {
                a = void 0, u = void 0, r = void 0, s = void 0
            }
            class g extends f.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return T
                }
                showNotice() {
                    return void 0 !== i || void 0 !== a || void 0 !== u || void 0 !== r || void 0 !== l || void 0 !== s
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return a
                }
                getPendingBio() {
                    return u
                }
                getPendingNickname() {
                    return l
                }
                getPendingPronouns() {
                    return r
                }
                getPendingAccentColor() {
                    return l
                }
                getPendingThemeColors() {
                    return s
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: a,
                        pendingBio: u,
                        pendingPronouns: r,
                        pendingNickname: l,
                        pendingThemeColors: s
                    }
                }
                getGuild() {
                    return o
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return S
                }
            }
            g.displayName = "GuildIdentitySettingsStore";
            var A = new g(E.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    o = e.guild, I = _.FormStates.OPEN, T = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: p,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    N(), p()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    o = e.guild, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = _.FormStates.SUBMITTING, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (I !== _.FormStates.SUBMITTING) return !1;
                    I = _.FormStates.OPEN, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    I = _.FormStates.OPEN, T = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: h,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    T = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    S = t
                }
            })
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return E
                }
            });
            var i = n("693566"),
                a = n.n(i),
                u = n("872717"),
                r = n("913144"),
                l = n("851387"),
                s = n("36402"),
                o = n("49111");
            async function d(e) {
                try {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await u.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                s.default.shouldFetch(e) && await d(e)
            }
            let f = new a({
                maxAge: 1e4
            });

            function E(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = "".concat(e, "-").concat(t);
                if (!n || null == f.get(i)) {
                    var a, r;
                    return f.set(i, !0), a = e, r = t, u.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(a, r)
                    }).then(e => (l.default.requestMembersById(a, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                a = n("913144");
            let u = {},
                r = {};
            class l extends i.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? u[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = r[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            l.displayName = "GuildRoleMemberCountStore";
            var s = new l(a.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    u[t] = n, r[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: i
                    } = e, a = u[t];
                    if (null == a) return !1;
                    a[n] = i
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: i
                    } = e, a = u[t];
                    if (null == a || null == a[n]) return !1;
                    let r = Object.keys(i).length;
                    a[n] += r
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = u[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = i[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = u[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = Math.max(i[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == u[t] && (u[t] = {}), u[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete u[t.id], delete r[t.id]
                }
            })
        },
        274800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                queueInteractionComponentState: function() {
                    return r
                },
                addQueued: function() {
                    return l
                },
                setFailed: function() {
                    return s
                },
                fetchMessageInteractionData: function() {
                    return o
                }
            });
            var i = n("872717"),
                a = n("913144"),
                u = n("49111");

            function r(e, t, n, i) {
                a.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: i
                })
            }

            function l(e, t) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: u,
                    onSuccess: r,
                    onFailure: l
                } = t;
                a.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: u,
                    onSuccess: r,
                    onFailure: l
                })
            }

            function s(e, t, n) {
                a.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function o(e, t) {
                let n = await i.default.get({
                    url: u.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let i = n.body;
                    a.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: e,
                        messageId: t,
                        interactionData: i
                    })
                }
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let i, a;
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var u = n("446674"),
                r = n("913144"),
                l = n("798609"),
                s = n("42203"),
                o = n("3765");
            let d = {},
                c = {},
                f = {};

            function E(e) {
                delete d[e];
                let t = f[e];
                null != t && delete c[t], delete f[e]
            }
            class _ extends u.default.Store {
                getInteraction(e) {
                    let t = c[e.id];
                    return null != t ? d[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(d)) {
                        let i = f[t];
                        null != i && (e[i] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = c[e];
                    return (null == n || null == d[n] || d[n].state === o.InteractionState.FAILED) && (null == d[t] || d[t].state === o.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return a
                }
                getIFrameModalKey() {
                    return i
                }
            }
            _.displayName = "InteractionStore";
            var I = new _(r.default, {
                LOGOUT: function() {
                    d = {}, c = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: i,
                        onCreate: a,
                        onCancel: u,
                        onSuccess: r,
                        onFailure: l
                    } = e;
                    null != n && (c[n] = t, f[t] = n), d[t] = {
                        state: o.InteractionState.QUEUED,
                        data: i,
                        onCreate: a,
                        onCancel: u,
                        onSuccess: r,
                        onFailure: l
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: i
                    } = e;
                    if (null == n) return !1;
                    let a = d[n];
                    if (null == a || a.state !== o.InteractionState.QUEUED) return !1;
                    a.state = o.InteractionState.CREATED, null === (t = a.onCreate) || void 0 === t || t.call(a, i)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let i = d[n];
                    if (null == i) return !1;
                    null === (t = i.onSuccess) || void 0 === t || t.call(i), E(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: i,
                        errorMessage: a
                    } = e;
                    if (null == n) return !1;
                    let u = d[n];
                    if (null == u) return !1;
                    null === (t = u.onFailure) || void 0 === t || t.call(u, i, a), u.data.interactionType === l.InteractionTypes.APPLICATION_COMMAND ? E(n) : d[n] = {
                        ...u,
                        state: o.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: a
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = d[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), E(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(d)) t.state === o.InteractionState.FAILED && E(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    a = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, a = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    i = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return i
                }
            }), (a = i || (i = {}))[a.QUEUED = 0] = "QUEUED", a[a.CREATED = 1] = "CREATED", a[a.FAILED = 2] = "FAILED"
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return S
                },
                executeMessageComponentInteraction: function() {
                    return p
                },
                handleInteractionResponse: function() {
                    return C
                },
                InteractionStatusViewState: function() {
                    return a
                },
                getInteractionStatusViewState: function() {
                    return h
                },
                canRetryInteractionData: function() {
                    return g
                }
            });
            var i, a, u = n("249654"),
                r = n("872717"),
                l = n("913144"),
                s = n("819689"),
                o = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                E = n("809810"),
                _ = n("3765"),
                I = n("606981"),
                T = n("49111");

            function S(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : u.default.extractTimestamp(e) + 9e5
            }
            let p = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: a,
                    indices: l,
                    applicationId: s,
                    channelId: _,
                    guildId: I,
                    localState: S
                } = e, p = u.default.fromTimestamp(Date.now());
                if (!E.default.canQueueInteraction(n, p)) return;
                await d.default.unarchiveThreadIfNecessary(_), (0, f.addQueued)(p, {
                    messageId: n,
                    data: {
                        interactionType: o.InteractionTypes.MESSAGE_COMPONENT,
                        customId: a,
                        indices: l
                    },
                    onFailure: (e, t) => N(_, e, t)
                }), null != S && (0, f.queueInteractionComponentState)(n, p, S, l);
                let h = {
                    type: o.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: p,
                    guild_id: I,
                    channel_id: _,
                    message_flags: i,
                    message_id: n,
                    application_id: s,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: a,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === o.ComponentType.STRING_SELECT || e.type === o.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(S)
                    }
                };
                await r.default.post({
                    url: T.Endpoints.INTERACTIONS,
                    body: h,
                    timeout: 3e3
                }, e => {
                    C(p, _, I, e)
                })
            }, N = (e, t, n) => {
                null == n && null != t && s.default.sendClydeError(e, t)
            }, C = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var a;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === T.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let a = (0, I.getFirstSkemaError)(i.body.errors);
                                null != a && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) && l.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == a ? void 0 : a.message);
                                return
                            }(0, f.setFailed)(e, void 0, i.body.message);
                            return
                        }(0, f.setFailed)(e, null === (a = i.body) || void 0 === a ? void 0 : a.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (i = a || (a = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
            let h = (e, t) => {
                var n;
                let i = null == t ? void 0 : t.state,
                    r = e.state === T.MessageStates.SENT && S(e.id) < Date.now();
                let l = e.state === T.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : u.default.extractTimestamp(n) + 3e3) < Date.now(),
                    s = (null == t ? void 0 : t.data.interactionType) === o.InteractionTypes.APPLICATION_COMMAND,
                    d = e.isCommandType();
                if (s && i === _.InteractionState.QUEUED || d && e.state === T.MessageStates.SENDING && null != t) return a.SENDING;
                if (s && i === _.InteractionState.CREATED || e.hasFlag(T.MessageFlags.LOADING) && !r) return a.CREATED;
                if (null != e.interaction && e.hasFlag(T.MessageFlags.LOADING) && r) return a.TIMED_OUT;
                else if (null != e.interaction && !e.hasFlag(T.MessageFlags.LOADING) && l) return a.TIMED_OUT;
                else if (d && e.state === T.MessageStates.SEND_FAILED) return a.FAILED
            };

            function g(e) {
                var t;
                let n = e.options;
                for (;
                    (null === (t = n) || void 0 === t ? void 0 : t.length) === 1 && (n[0].type === o.ApplicationCommandOptionType.SUB_COMMAND_GROUP || n[0].type === o.ApplicationCommandOptionType.SUB_COMMAND);) n = n[0].options;
                for (let e of null != n ? n : [])
                    if (e.type === o.ApplicationCommandOptionType.ATTACHMENT) return !1;
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
            let i = "_errors";

            function a(e) {
                return function e(t, n) {
                    let a = t[i];
                    if (null != a && Array.isArray(a)) return a[0];
                    for (let [a, u] of Object.entries(t))
                        if (a !== i && null != u && "object" == typeof u) return e(u, null != n ? n : a);
                    return null
                }(e, void 0)
            }
        },
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return s
                },
                clearMessageRequestState: function() {
                    return o
                },
                markAsMessageRequest: function() {
                    return d
                },
                rejectMessageRequest: function() {
                    return c
                },
                rejectMessageRequestBatch: function() {
                    return f
                },
                fetchUserCountryCode: function() {
                    return E
                }
            });
            var i = n("872717"),
                a = n("913144"),
                u = n("437822"),
                r = n("773163"),
                l = n("49111");
            async function s(e) {
                await i.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), a.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function o(e) {
                return i.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return i.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function c(e) {
                return i.default.delete({
                    url: l.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function f(e) {
                return i.default.put({
                    url: l.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
                u.default.getLocationMetadata()
            }
        },
        773163: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                MessageRequestConsentStatusTypes: function() {
                    return i
                }
            }), (a = i || (i = {}))[a.UNSPECIFIED = 0] = "UNSPECIFIED", a[a.PENDING = 1] = "PENDING", a[a.ACCEPTED = 2] = "ACCEPTED", a[a.REJECTED = 3] = "REJECTED"
        },
        95045: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                renderAutomodMessageMarkup: function() {
                    return o
                }
            }), n("355025");
            var i = n("367376"),
                a = n("240873"),
                u = n("49111");
            let r = new Set([u.MessageEmbedTypes.IMAGE, u.MessageEmbedTypes.GIFV]),
                l = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? i.default.parseInlineReply : i.default.parse;
                return function(e, t, n) {
                    var i, u;
                    let {
                        toAST: s = !1,
                        hideSimpleEmbedContent: o = !0,
                        formatInline: f = !1,
                        postProcessor: E
                    } = n, _ = !1;
                    let I = e(t.content, !0, (i = t, u = n, {
                        allowLinks: null != i.webhookId || !!u.allowLinks,
                        allowEmojiLinks: null != i.webhookId,
                        channelId: i.channel_id,
                        messageId: i.id,
                        mentionChannels: i.mentionChannels,
                        isInteracting: !!u.isInteracting,
                        formatInline: !!u.formatInline,
                        noStyleAndInteraction: !!u.noStyleAndInteraction,
                        allowHeading: !!u.allowHeading,
                        allowList: !!u.allowList,
                        previewLinkTarget: !!u.previewLinkTarget,
                        disableAnimatedEmoji: !!u.disableAnimatedEmoji,
                        disableAutoBlockNewlines: !0,
                        muted: !1
                    }), (e, n) => (!Array.isArray(e) && (e = [e]), o && (e = function(e, t) {
                        if (1 !== e.length || 1 !== t.length) return e;
                        let n = e[0],
                            i = t[0];
                        return "link" === n.type && r.has(i.type) && (0, a.isEmbedInline)(i) ? [] : e
                    }(e, t.embeds)), !f && (e = function(e, t) {
                        return t ? d(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = d(e[0].content)), e)
                    }(e, n)), _ = function(e, t) {
                        return t ? c(e) : "paragraph" === e[0].type && e[0].content instanceof Array && c(e[0].content)
                    }(e, n), f && (e = function e(t) {
                        return t.forEach(t => {
                            l.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                        }), t
                    }(e)), null != E && (e = E(e, n)), e));
                    return {
                        hasSpoilerEmbeds: _,
                        content: I
                    }
                }(n, e, t)
            }

            function o(e, t, n) {
                var a;
                return a = i.default.parseAutoModerationSystemMessage, a(e, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: t,
                    disableAnimatedEmoji: !1,
                    channelId: n,
                    muted: !1
                }, e => (!Array.isArray(e) && (e = [e]), e))
            }

            function d(e) {
                let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
                if (t) return e;
                let n = 0;
                return (e.forEach(e => {
                    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (n += 1), n > 30) return !1
                }), n > 30) ? e : (e.forEach(e => {
                    e.jumboable = !0
                }), e)
            }

            function c(e) {
                return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type))
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("748820"),
                u = n("77078"),
                r = n("112679"),
                l = n("55689"),
                s = n("855133"),
                o = n("599110"),
                d = n("659500"),
                c = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: _,
                    onComplete: I,
                    onSubscriptionConfirmation: T,
                    analyticsLocations: S,
                    analyticsObject: p,
                    analyticsLocation: N,
                    analyticsSourceLocation: C,
                    isGift: h = !1,
                    giftMessage: g,
                    subscriptionTier: A,
                    trialId: m,
                    postSuccessGuild: U,
                    openInvoiceId: M,
                    applicationId: R,
                    referralTrialOfferId: O,
                    giftRecipient: L,
                    returnRef: D
                } = null != e ? e : {}, y = !1, v = (0, a.v4)();
                (0, u.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: a,
                            ...u
                        } = n;
                        return (0, i.jsx)(e, {
                            ...u,
                            loadId: v,
                            subscriptionTier: A,
                            skuId: A,
                            isGift: h,
                            giftMessage: g,
                            giftRecipient: L,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                a(), null == _ || _(e), e && (null == T || T())
                            },
                            onComplete: () => {
                                y = !0, null == I || I(), !h && ((0, s.setIsPersistentHelperHidden)(!0), (0, s.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: T,
                            analyticsLocations: S,
                            analyticsObject: p,
                            analyticsLocation: N,
                            analyticsSourceLocation: C,
                            trialId: m,
                            postSuccessGuild: U,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: M,
                            applicationId: R,
                            referralTrialOfferId: O,
                            returnRef: D
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && o.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: v,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != N ? N : p,
                            source: C,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: h,
                            eligible_for_trial: null != m,
                            application_id: R,
                            location_stack: S
                        }), (0, r.clearError)(), (0, l.clearPurchaseTokenAuthState)(), null == _ || _(y), y && (!h && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == T || T())
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("65597"),
                u = n("880731");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, a.default)([u.default], () => u.default.isEnabled({
                    confettiLocation: n
                }));
                return r ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691"),
                a = n("65597"),
                u = n("526887"),
                r = n("880731");

            function l() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(u.ConfettiCannonContext), t = (0, a.default)([r.default], () => r.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), l = i.useMemo(() => ({
                    fire: (i, a, u) => {
                        var r, l;
                        let s = (null == u ? void 0 : u.settings) != null ? {
                                ...t,
                                ...u.settings
                            } : t,
                            o = n(s);
                        e(i, a, o, (null !== (r = null == u ? void 0 : u.count) && void 0 !== r ? r : s.confettiCount) * (null !== (l = null == u ? void 0 : u.countMultiplier) && void 0 !== l ? l : 1), {
                            sprite: null == u ? void 0 : u.sprite
                        })
                    }
                }), [e, n, t]);
                return l
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return a
                },
                setHasCompletedStep: function() {
                    return u
                },
                resetPremiumTutorialStore: function() {
                    return r
                },
                setCanPlayWowMoment: function() {
                    return l
                },
                setIsPersistentHelperHidden: function() {
                    return s
                },
                setNavigatedFromHelper: function() {
                    return o
                }
            });
            var i = n("913144");
            let a = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                u = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                r = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                l = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return T
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return S
                }
            });
            var i = n("884691"),
                a = n("65597"),
                u = n("872717"),
                r = n("913144"),
                l = n("775433"),
                s = n("697218"),
                o = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                E = n("49111");
            let _ = "nonSubscriber";
            async function I() {
                try {
                    r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await u.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function T(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), a = s.default.getCurrentUser();
                p(a, i, t, n)
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), u = (0, a.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), r = (0, a.default)([s.default], () => s.default.getCurrentUser());
                i.useEffect(() => {
                    p(r, u, t, n)
                }, [r, u, t, n])
            }

            function p(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && I(), i && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                a = n("913144");
            let u = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                r = u;
            class l extends i.default.Store {
                initialize() {
                    r = u
                }
                getState() {
                    return r
                }
                shouldFetchPremiumLikelihood() {
                    return !r.isFetching && !r.fetched
                }
            }
            l.displayName = "UserPremiumLikelihoodStore";
            var s = new l(a.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    r.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    r.premiumLikelihood = t, r.fetched = !0, r.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    r.isFetching = !1
                },
                LOGOUT: function() {
                    r.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var u = a
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                a = n("79112"),
                u = n("685665"),
                r = n("929423");
            n("424562");
            var l = n("49111"),
                s = n("397336");

            function o(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: f
                } = (0, u.default)(), E = (0, i.useCallback)(() => {
                    null != t && (0, r.initGuildIdentitySettings)(t, null != d ? d : f), a.default.open(l.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, o, d, c, f]);
                return E
            }
        },
        277734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                dismissChannelSafetyWarnings: function() {
                    return r
                },
                setChannelSafetyWarningFeedback: function() {
                    return l
                },
                clearChannelSafetyWarnings: function() {
                    return s
                }
            });
            var i = n("872717"),
                a = n("913144"),
                u = n("49111");

            function r(e, t) {
                return a.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), i.default.post({
                    url: u.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: {
                        warning_ids: t
                    },
                    oldFormErrors: !0
                })
            }

            function l(e, t, n) {
                a.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function s(e) {
                a.default.dispatch({
                    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
                    channelId: e
                })
            }
        },
        764828: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningTypes: function() {
                    return u
                },
                SafetyWarningFeedbackTypes: function() {
                    return r
                },
                default: function() {
                    return _
                }
            });
            var i, a, u, r, l = n("446674"),
                s = n("913144"),
                o = n("42203");
            (i = u || (u = {}))[i.STRANGER_DANGER = 1] = "STRANGER_DANGER", (a = r || (r = {}))[a.UPVOTE = 0] = "UPVOTE", a[a.DOWNVOTE = 1] = "DOWNVOTE";
            let d = {};

            function c(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (d[e.id] = t), null == t && null != d[e.id] && delete d[e.id]
            }

            function f() {
                d = {}, Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
                    c(e)
                })
            }
            class E extends l.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = d[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    return d[e]
                }
                getSafetyWarningForType(e, t) {
                    var n;
                    return null === (n = d[e]) || void 0 === n ? void 0 : n.find(e => e.type === t && null == e.dismiss_timestamp)
                }
            }
            var _ = new E(s.default, {
                CHANNEL_CREATE: function(e) {
                    c(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    null != d[e.channel.id] && delete d[e.channel.id]
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        c(e)
                    })
                },
                CONNECTION_OPEN: f,
                CONNECTION_OPEN_SUPPLEMENTAL: f,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: i
                    } = e, a = d[t];
                    null != a && (d[t] = a.map(e => e.id === n ? {
                        ...e,
                        feedback_type: i
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, n = d[t];
                    null != n && (d[t] = n.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: n
                    } = e, i = d[t];
                    if (null == i) return;
                    let a = Date.now().toString();
                    d[t] = i.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: a
                    } : e)
                }
            })
        },
        319165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMutedUntilText: function() {
                    return r
                },
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("782340");

            function r(e) {
                return null == e || null == e.end_time ? null : u.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(u.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function l(e) {
                let {
                    muteConfig: t,
                    className: n
                } = e, u = r(t);
                return null != u ? (0, i.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: n,
                    children: u
                }) : null
            }
        },
        130074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("272030"),
                r = n("838446"),
                l = n("158534"),
                s = n("798609"),
                o = n("846883"),
                d = n("812204"),
                c = n("243288"),
                f = n("321135"),
                E = n("873254"),
                _ = n("44141"),
                I = n("531674"),
                T = n("861370"),
                S = n("972701"),
                p = n("390008"),
                N = n("976127"),
                C = n("856030"),
                h = n("726750"),
                g = n("170990"),
                A = n("304582"),
                m = n("72057"),
                U = n("563816"),
                M = n("489836"),
                R = n("406703"),
                O = n("126710"),
                L = n("502533"),
                D = n("314838"),
                y = n("151200"),
                v = n("692986"),
                G = n("806179"),
                P = n("816106"),
                b = n("623879"),
                F = n("49111"),
                x = n("782340"),
                w = (0, l.default)((0, r.default)(function(e) {
                    let {
                        user: t,
                        channel: n,
                        channelSelected: r = !1,
                        showMute: l = !0,
                        showMediaItems: d = !1,
                        showChannelCallItems: F = !1,
                        showModalItems: w = !0,
                        targetIsUser: k = !1,
                        context: j,
                        onSelect: H,
                        onHeightUpdate: Y
                    } = e, B = (0, G.default)(t.id, null), V = (0, R.default)(t, j), W = (0, m.default)({
                        user: t,
                        context: j
                    }), K = (0, A.default)(t), Q = (0, b.default)(t.id), q = (0, O.default)(n.id, r), z = (0, D.default)(t), X = (0, o.default)(null, t), J = (0, P.default)(t.id), Z = (0, y.default)(t.id, n.id), $ = (0, g.default)(t), ee = (0, v.default)(t.id), et = (0, L.default)(t.id, n.id), en = (0, M.default)(t), ei = (0, I.default)(n), ea = (0, T.default)({
                        id: t.id,
                        label: x.default.Messages.COPY_ID_USER
                    }), eu = (0, T.default)({
                        id: n.id,
                        label: x.default.Messages.COPY_ID_CHANNEL
                    }), er = (0, _.default)(n), el = (0, f.default)(t.id), es = (0, c.default)(n.id), eo = (0, h.default)(t), ed = (0, E.default)(t.id), ec = (0, U.default)({
                        commandType: s.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: n,
                        guildId: void 0,
                        onShow: Y
                    }), ef = (0, S.default)(n), eE = (0, p.default)(n), e_ = (0, N.useMessageRequestItem)(n), eI = (0, C.useSafetyWarningsItem)(n), eT = n.isManaged(), eS = t.isNonUserBot();
                    return (0, i.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: u.closeContextMenu,
                        "aria-label": x.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: H,
                        children: [(0, i.jsx)(a.MenuGroup, {
                            children: !eS && er
                        }), (0, i.jsx)(a.MenuGroup, {
                            children: e_
                        }), (0, i.jsx)(a.MenuGroup, {
                            children: eI
                        }), (0, i.jsxs)(a.MenuGroup, {
                            children: [ef, eE]
                        }), (0, i.jsx)(a.MenuGroup, {
                            children: !eS && eo
                        }), (0, i.jsxs)(a.MenuGroup, {
                            children: [!eS && (0, i.jsxs)(i.Fragment, {
                                children: [w && B, V, !eT && Z, w && W, w && K, Q]
                            }), q]
                        }), !eS && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(a.MenuGroup, {
                                children: d && J
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: w && X
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [d && ee, d && et, ec, w && z, $, w && en, d && ed]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: l && ei
                            }), F && (0, i.jsxs)(a.MenuGroup, {
                                children: [es, el]
                            })]
                        }), (0, i.jsxs)(a.MenuGroup, {
                            children: [ea, !k && eu]
                        })]
                    })
                }, {
                    object: F.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("37983"),
                a = n("884691"),
                u = n("627445"),
                r = n.n(u),
                l = n("446674"),
                s = n("77078"),
                o = n("240249"),
                d = n("524768"),
                c = n("389153"),
                f = n("916565"),
                E = n("355263"),
                _ = n("633043"),
                I = n("305961"),
                T = n("317041"),
                S = n("782340"),
                p = n("205735"),
                N = e => {
                    let {
                        commandType: t,
                        commandTargetId: n,
                        channel: u,
                        guildId: N,
                        onShow: C
                    } = e, h = a.useRef(!1), g = a.useRef(0), A = (0, l.useStateFromStores)([I.default], () => I.default.getGuild(null != N ? N : u.guild_id)), {
                        hasMoreAfter: m,
                        scrollDown: U,
                        sectionDescriptors: M,
                        commands: R,
                        placeholders: O
                    } = o.useDiscovery(u, {
                        commandType: t
                    }, {
                        placeholderCount: T.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: T.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: L,
                        sections: D
                    } = a.useMemo(() => {
                        let e = R.concat(O),
                            t = {};
                        return M.forEach(e => {
                            t[e.id] = e
                        }), {
                            visibleCommands: e,
                            sections: t
                        }
                    }, [R, M, O]), y = a.useMemo(() => (0, c.canUseContextMenuCommands)(u, L.length, o.getCommandTypeCount(u, t, null == A ? void 0 : A.applicationCommandCounts)), [u, t, L.length, null == A ? void 0 : A.applicationCommandCounts]);
                    a.useEffect(() => {
                        if (y !== h.current) {
                            if (y) null == C || C();
                            h.current = y
                        }
                    }, [y, C]), a.useEffect(() => {
                        v(g.current)
                    }, [L]);
                    let v = a.useCallback(e => {
                            m && e + 500 > 34 * L.length - 40 && U(), g.current = e
                        }, [m, U, L]),
                        G = a.useCallback(e => {
                            if (e.inputType === d.ApplicationCommandInputType.PLACEHOLDER) return (0, i.jsx)(s.MenuItem, {
                                id: "menu-command-".concat(e.id),
                                render: () => (0, i.jsx)(_.default, {})
                            }, "menu-command-".concat(e.id));
                            r(null != u, "menu item should not show if channel is null");
                            let t = D[e.applicationId],
                                a = null != t ? (0, E.getIconComponent)(t) : void 0;
                            return (0, i.jsx)(s.MenuItem, {
                                id: e.id,
                                label: e.displayName,
                                showIconFirst: !0,
                                icon: () => null != a ? (0, i.jsx)(a, {
                                    channel: u,
                                    section: t,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null,
                                action: () => {
                                    (0, f.default)({
                                        command: e,
                                        optionValues: {},
                                        context: {
                                            channel: u,
                                            guild: A
                                        },
                                        commandTargetId: n
                                    })
                                }
                            }, e.id)
                        }, [u, A, n, D]);
                    return y && (0, i.jsx)(s.MenuItem, {
                        id: "apps",
                        label: S.default.Messages.APPS,
                        onChildrenScroll: v,
                        childRowHeight: 34,
                        listClassName: p.list,
                        disabled: 0 === L.length,
                        children: L.map(G)
                    })
                }
        },
        126710: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("450911"),
                r = n("42203"),
                l = n("782340");

            function s(e, t) {
                let n = r.default.getChannel(e);
                return null == n || n.isMultiUserDM() ? null : (0, i.jsx)(a.MenuItem, {
                    id: "close-dm",
                    label: l.default.Messages.CLOSE_DM,
                    action: () => u.default.closePrivateChannel(e, t)
                })
            }
        },
        151200: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                r = n("561288"),
                l = n("191145"),
                s = n("271938"),
                o = n("99795"),
                d = n("782340");

            function c(e, t) {
                let n = (0, a.useStateFromStores)([s.default], () => s.default.getId() === e, [e]),
                    [c, f] = (0, a.useStateFromStoresArray)([l.default], () => [l.default.getParticipants(t), l.default.getParticipant(t, e)], [t, e]);
                return n || 0 === c.length ? null : null == f ? (0, i.jsx)(u.MenuItem, {
                    id: "ring",
                    label: d.default.Messages.RING,
                    action: () => r.default.ring(t, [e])
                }) : f.type === o.ParticipantTypes.USER && f.ringing ? (0, i.jsx)(u.MenuItem, {
                    id: "stop-ringing",
                    label: d.default.Messages.STOP_RINGING,
                    action: () => r.default.stopRinging(t, [e])
                }) : null
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("917351"),
                a = n.n(i),
                u = n("872717"),
                r = n("689988"),
                l = n("605250"),
                s = n("870691"),
                o = n("42203"),
                d = n("49111");
            let c = {},
                f = new l.default("UserGuildSettingsManager"),
                E = 0;

            function _() {
                c = {
                    ...s.default.getCollapsedCategories()
                }
            }

            function I() {
                !__OVERLAY__ && (clearTimeout(E), E = setTimeout(() => T(), 15e3))
            }
            async function T(e, t) {
                await S(null != t ? {
                    [null != e ? e : d.ME]: t
                } : {})
            }
            async function S(e) {
                clearTimeout(E);
                let t = 0 !== Object.keys(e).length,
                    n = s.default.getCollapsedCategories(),
                    i = function() {
                        let e = {},
                            t = s.default.getCollapsedCategories();
                        for (let n in t) t[n] !== c[n] && (e[n] = !0);
                        for (let n in c) t[n] !== c[n] && (e[n] = !0);
                        return e
                    }();
                for (let a in i) {
                    let i = o.default.getChannel(a);
                    null != i && null != i.guild_id && (!(i.guild_id in e) && (e[i.guild_id] = {}), null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}), e[i.guild_id].channel_overrides[i.id] = {
                        ...e[i.guild_id].channel_overrides[i.id],
                        collapsed: i.id in n
                    }, t = !0)
                }
                if (!t) return;
                c = {
                    ...n
                };
                let r = a.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; r.length > 0;) {
                    let e = r.shift();
                    if (e.guildId !== d.FAVORITES) try {
                        await u.default.patch({
                            url: d.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await p(1e3)
                    } catch (t) {
                        f.error(t), e.attempts += 1, e.attempts < 3 && r.push(e), await p(5e3)
                    }
                }
            }

            function p(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function N() {
                c = {
                    ...s.default.getCollapsedCategories()
                }
            }
            class C extends r.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: I,
                        CATEGORY_EXPAND: I,
                        CATEGORY_COLLAPSE_ALL: I,
                        CATEGORY_EXPAND_ALL: I,
                        POST_CONNECTION_OPEN: _,
                        USER_GUILD_SETTINGS_FULL_UPDATE: N
                    }, this.saveUserGuildSettings = T, this.saveUserGuildSettingsBulk = S
                }
            }
            var h = new C
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("446674"),
                a = n("913144"),
                u = n("449008"),
                r = n("42203"),
                l = n("341542"),
                s = n("923959"),
                o = n("49111");
            let d = {},
                c = 0;

            function f() {
                c += 1
            }

            function E(e) {
                if (null == d[e]) return !1;
                delete d[e]
            }
            class _ extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(r.default, l.default), this.removeChangeListener(f), this.addChangeListener(f), d = null != e ? e : {}
                }
                getState() {
                    return d
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!d[e] && d[e]
                }
                getCollapsedCategories() {
                    return d
                }
                get version() {
                    return c
                }
            }
            _.displayName = "CategoryCollapseStore", _.persistKey = "collapsedCategories";
            var I = new _(a.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (d = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? d[e.channel_id] = !0 : delete d[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(u.isNotNullish));
                    for (let e in d) {
                        let t = r.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete d[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (d[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (d[t]) return !1;
                    d[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return E(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    s.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (d[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    s.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete d[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return E(t)
                }
            })
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("817736"),
                a = n("118810");
            let u = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class r {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, a.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = u) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("884691"),
                a = n("748820"),
                u = n("157590");
            let r = (0, a.v4)(),
                l = new Map,
                s = new Map;
            class o extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = s.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? l.has(t) ? this.elementId = l.get(t) || "" : l.set(t, (0, a.v4)()) : this.elementId = r;
                    let o = this.getVisibilityObserverId();
                    !s.has(o) && s.set(o, new u.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            o.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var d = o
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return a.default
                }
            }), n("6268");
            var i = n("157590"),
                a = n("235855")
        }
    }
]);