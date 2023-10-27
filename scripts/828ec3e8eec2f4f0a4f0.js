(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67217"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return l
                },
                categoryExpand: function() {
                    return a
                },
                categoryCollapseAll: function() {
                    return r
                },
                categoryExpandAll: function() {
                    return u
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function a(e) {
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

            function u(e) {
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
                    return a
                },
                unsubscribeMembers: function() {
                    return r
                },
                subscribeChannel: function() {
                    return u
                },
                subscribeChannelDimensions: function() {
                    return o
                }
            });
            var i = n("913144"),
                l = n("696605");

            function a(e, t) {
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

            function u(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function o(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: a,
                    rowHeight: r
                } = e;

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / r)) + t)
                }
                let s = [];

                function d(e) {
                    let t = e + (l.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let c = o(.5 * a),
                    f = o(i, -c),
                    E = o(i + a, c);
                for (f > 0 && (f = Math.max(d(0), f)), f = Math.floor(f / l.MINIMUM_RANGE) * l.MINIMUM_RANGE; f <= E;) f = d(f);
                u(t, n, s)
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return l
                },
                updateCardInfo: function() {
                    return a
                },
                clearCardInfo: function() {
                    return r
                },
                updateAddressInfo: function() {
                    return u
                },
                clearError: function() {
                    return o
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function a(e, t) {
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

            function u(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
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
            var i = n("377849"),
                l = n.n(i),
                a = n("819855"),
                r = n("913144"),
                u = n("679428"),
                o = n("282109"),
                s = n("34676"),
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
                        let i = (0, s.getCurrentGuildSettings)(e);
                        u.default.saveUserGuildSettings(e, t), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, s.trackGuildNotificationSettingsUpdate)(e, t, i, n)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n) {
                        let i = Object.keys(t.channel_overrides),
                            l = (0, s.getCurrentGuildSettings)(e),
                            a = (0, s.getManyCurrentChannelSettings)(e, i);
                        u.default.saveUserGuildSettings(e, t), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, s.trackGuildNotificationSettingsUpdate)(e, t, l, n), Object.keys(t.channel_overrides).forEach(i => {
                            let l = a.get(i);
                            (0, s.trackChannelNotificationSettingsUpdate)(e, i, t.channel_overrides[i], l, n)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t) {
                        let n = Object.keys(e),
                            i = (0, s.getManyCurrentGuildSettings)(n);
                        u.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [n, l] = e, a = i.get(n);
                            r.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: n,
                                settings: l
                            }), (0, s.trackGuildNotificationSettingsUpdate)(n, l, a, t)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, i) {
                        let l = (0, s.getCurrentChannelSettings)(e, t);
                        u.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), a.AccessibilityAnnouncer.announce(c.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, s.trackChannelNotificationSettingsUpdate)(e, t, n, l, i)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n) {
                        let i = Object.keys(t),
                            l = (0, s.getManyCurrentChannelSettings)(e, i);
                        u.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(i => (0, s.trackChannelNotificationSettingsUpdate)(e, i, t[i], l.get(i), n))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = t ? d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : d.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            l = o.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: l & ~i | n
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
                        let i = t > 0 ? l().add(t, "second").toISOString() : null;
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
                    return l
                }
            });
            var i = n("913144");

            function l() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        427027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChannelsVoiceNormalIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.737.324L5.917 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.917l4.286 4.676a1 1 0 0 0 .737.324H11a1 1 0 0 0 1-1V3Zm3.1 17.754c-.58.138-1.1-.33-1.1-.926v-.032c0-.497.369-.912.849-1.043a7.003 7.003 0 0 0 0-13.506C14.369 5.116 14 4.7 14 4.204v-.032c0-.596.52-1.064 1.1-.926a9.004 9.004 0 0 1 0 17.508Zm.057-4.242c-.57.273-1.157-.203-1.157-.835v-.14c0-.424.277-.789.633-1.02A2.997 2.997 0 0 0 16 12a2.997 2.997 0 0 0-1.367-2.517c-.356-.231-.633-.596-.633-1.02v-.14c0-.632.587-1.108 1.157-.835a5 5 0 0 1 0 9.024Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.34 22 2.2 22H12Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20Zm1.867-5.246a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Zm5.02-5.236c-.133.425.359.65.674.335l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63Zm4.674 4.335c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Zm-3.132 3.526a.52.52 0 0 0-.52.125l-.806.808c-.247.246-.172.661.155.783A9.79 9.79 0 0 0 12 21c7.113 0 10.273-7.115 10.887-8.693a.833.833 0 0 0 0-.614 17.43 17.43 0 0 0-2.047-3.74.487.487 0 0 0-.74-.052l-.72.72a.513.513 0 0 0-.052.657 15.709 15.709 0 0 1 1.435 2.524.48.48 0 0 1 0 .396c-.408.905-1.182 2.374-2.377 3.719C16.874 17.617 14.809 19 12 19a7.88 7.88 0 0 1-2.278-.328Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582ZM3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20Zm10.5 2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: u
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M10.558 1.094c-.453.059-.705.532-.636.983.178 1.166-.187 2.202-.983 2.532-.796.33-1.787-.144-2.485-1.094-.27-.369-.783-.524-1.146-.246a11.065 11.065 0 0 0-2.04 2.04c-.277.362-.121.874.247 1.145.95.698 1.424 1.689 1.094 2.485-.33.796-1.365 1.161-2.532.983-.451-.07-.924.183-.983.636a11.102 11.102 0 0 0 0 2.884c.059.453.532.705.983.636 1.167-.178 2.202.188 2.532.983.33.796-.144 1.787-1.094 2.486-.368.27-.524.782-.246 1.145a11.064 11.064 0 0 0 2.04 2.04c.362.277.874.122 1.145-.247.698-.95 1.689-1.424 2.485-1.094.796.33 1.161 1.366.983 2.532-.07.452.183.924.636.983a11.1 11.1 0 0 0 2.884 0c.454-.06.706-.532.636-.983-.178-1.166.188-2.202.984-2.532.795-.33 1.786.144 2.485 1.094.27.368.782.524 1.145.246a11.066 11.066 0 0 0 2.04-2.04c.277-.362.122-.874-.247-1.145-.95-.698-1.424-1.689-1.094-2.485.33-.796 1.366-1.161 2.532-.983.451.07.924-.183.983-.636a11.102 11.102 0 0 0 0-2.884c-.059-.453-.532-.705-.983-.636-1.166.178-2.202-.187-2.532-.983-.33-.796.144-1.787 1.094-2.485.369-.271.524-.783.246-1.146a11.065 11.065 0 0 0-2.039-2.039c-.363-.278-.875-.122-1.145.246-.699.95-1.69 1.424-2.485 1.094-.796-.33-1.162-1.365-.983-2.532.069-.451-.183-.924-.637-.983a11.104 11.104 0 0 0-2.884 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("773670");

            function l(e) {
                let [t, n] = (0, i.useState)(!1), l = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [l]), t
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return u
                }
            }), n("920040");
            var i = n("773670"),
                l = n("427964"),
                a = n.n(l);
            n("708001");
            var r = n("666020");

            function u(e) {
                i.useEffect(() => (a.forEach(e, (e, t) => (0, r.subscribeMembers)(t, e)), () => {
                    a.forEach(e, (e, t) => (0, r.unsubscribeMembers)(t, e))
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
            var i = n("920040"),
                l = n("773670"),
                a = n("575482"),
                r = n.n(a),
                u = n("587974"),
                o = n("315102"),
                s = n("524768"),
                d = n("699278"),
                c = n("363577");

            function f(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: a,
                    height: f,
                    className: E,
                    selectable: I = !1,
                    onFocus: _,
                    onBlur: C,
                    onMouseOver: h,
                    onMouseLeave: T,
                    ...p
                } = e, [N, S] = l.useState(!1), g = l.useCallback(() => {
                    S(!0), null == _ || _()
                }, [_]), v = l.useCallback(() => {
                    S(!1), null == C || C()
                }, [C]), m = l.useCallback(() => {
                    S(!0), null == h || h()
                }, [h]), L = l.useCallback(() => {
                    S(!1), null == T || T()
                }, [T]), A = l.useMemo(() => {
                    if (t.type === s.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return o.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: a
                        })
                    }
                    return c
                }, [t, a]);
                return (0, i.jsx)("div", {
                    ...p,
                    className: r(d.wrapper, E, {
                        [d.selectable]: I,
                        [d.selected]: I && n
                    }),
                    onFocus: g,
                    onBlur: v,
                    onMouseOver: m,
                    onMouseLeave: L,
                    children: (0, i.jsx)(u.default, {
                        className: d.mask,
                        mask: I && (n || N) ? u.MaskIDs.SQUIRCLE : u.MaskIDs.AVATAR_DEFAULT,
                        width: a,
                        height: f,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: a,
                                height: f
                            },
                            src: A
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
            var i = n("920040");
            n("773670");
            var l = n("575482"),
                a = n.n(l),
                r = n("83910"),
                u = n("93393"),
                o = n("317041"),
                s = n("488465");
            let d = e => {
                switch (e.id) {
                    case o.BuiltInSectionId.BUILT_IN:
                        return r.default;
                    case o.BuiltInSectionId.FRECENCY:
                        return u.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: l,
                    height: r,
                    padding: u,
                    isSelected: o,
                    selectable: c = !1,
                    ...f
                } = e, E = d(t);
                return (0, i.jsx)("div", {
                    className: a(s.wrapper, n, {
                        [s.selectable]: c,
                        [s.selected]: c && o
                    }),
                    style: {
                        width: l,
                        height: r,
                        padding: null != u ? u : 0
                    },
                    children: null != E ? (0, i.jsx)(E, {
                        className: s.icon,
                        width: l,
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
                    return u
                },
                pxToRem: function() {
                    return o
                },
                getCommandQuery: function() {
                    return s
                }
            });
            var i = n("524768"),
                l = n("991630"),
                a = n("943161"),
                r = n("317041");
            let u = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? a.default : l.default;

            function o(e) {
                return "".concat(e / 16, "rem")
            }

            function s(e, t) {
                let n = t,
                    i = !1,
                    l = t.indexOf(":");
                if (l >= 0) {
                    let e = t.lastIndexOf(" ", l);
                    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, l)
                } else t = t.substring(0, t.length);
                let a = t.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
                return a.length > r.MAX_SUBCOMMAND_LEVEL && (i = !0, a.pop()), t = a.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
                    text: t,
                    parts: a,
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
            var i = n("920040");
            n("773670");
            var l = n("77078"),
                a = n("956302"),
                r = () => (0, i.jsx)("div", {
                    className: a.loadingWrapper,
                    children: (0, i.jsx)(l.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        333835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("267363"),
                u = n("154695"),
                o = n("689275"),
                s = n("755624"),
                d = n("233069"),
                c = n("245997"),
                f = n("660478"),
                E = n("49111"),
                I = n("782340");

            function _(e) {
                let t = function(e) {
                    let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, l.useStateFromStores)([f.default, c.default, o.default, s.default], () => {
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
                                    l = o.default.getThreadsForGuild(e.guild_id);
                                for (let e in l)
                                    if (i.has(e)) {
                                        for (let t in l[e])
                                            if (s.default.hasJoined(t) && !s.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, i.jsx)(a.MenuItem, {
                    id: "mark-channel-read",
                    label: I.default.Messages.MARK_AS_READ,
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
                    return C
                },
                default: function() {
                    return T
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("377849"),
                a = n.n(l),
                r = n("498225"),
                u = n("77078"),
                o = n("820542"),
                s = n("519705"),
                d = n("319165"),
                c = n("282109"),
                f = n("679653"),
                E = n("49111"),
                I = n("468200"),
                _ = n("782340");
            let C = () => [{
                    value: I.MuteUntilSeconds.MINUTES_15,
                    label: _.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: I.MuteUntilSeconds.HOURS_1,
                    label: _.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: I.MuteUntilSeconds.HOURS_3,
                    label: _.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: I.MuteUntilSeconds.HOURS_8,
                    label: _.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: I.MuteUntilSeconds.HOURS_24,
                    label: _.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: I.MuteUntilSeconds.ALWAYS,
                    label: _.default.Messages.MUTE_DURATION_ALWAYS
                }],
                h = e => {
                    let t = e > 0 ? a().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function T(e, t) {
                let [n, l] = (0, r.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), a = (0, d.useMutedUntilText)(l), I = (0, f.default)(e, !0);

                function T(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id), s.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let p = _.default.Messages.MUTE_CHANNEL_GENERIC,
                    N = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        p = _.default.Messages.MUTE_CATEGORY, N = _.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        p = _.default.Messages.MUTE_CONVERSATION, N = _.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        p = _.default.Messages.MUTE_CHANNEL.format({
                            name: I
                        }), N = _.default.Messages.UNMUTE_CHANNEL.format({
                            name: I
                        });
                        break;
                    default:
                        p = _.default.Messages.MUTE_CHANNEL_GENERIC, N = _.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, i.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: N,
                    subtext: a,
                    action: () => T(!1)
                }) : (0, i.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: p,
                    action: () => T(!0),
                    children: C().map(n => {
                        let {
                            value: l,
                            label: a
                        } = n;
                        return (0, i.jsx)(u.MenuItem, {
                            id: "".concat(l),
                            label: a,
                            action: () => (function(n) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id);
                                let i = h(n);
                                s.default.updateChannelOverrideSettings(e.guild_id, e.id, i, t)
                            })(l)
                        }, l)
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

            function l(e) {
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
                    return l
                },
                toRichValue: function() {
                    return r
                },
                voidToOptionValue: function() {
                    return u
                }
            });
            let a = Object.freeze([Object.freeze({
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
                })) : a
            }

            function u(e) {
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
            var i = n("710984").default
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
            var i = n("920040"),
                l = n("773670"),
                a = n("641900"),
                r = n("744196"),
                u = n("206230"),
                o = n("49111");
            let s = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => o.NOOP,
                    removeClickListener: o.NOOP
                },
                d = l.createContext(s);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: o,
                    baseConfig: c,
                    addClickListener: f,
                    removeClickListener: E
                } = e, I = (0, a.useConfettiCannon)(n, o), _ = (0, r.default)([u.default], () => u.default.useReducedMotion), C = l.useMemo(() => _ ? s : {
                    confettiCanvas: n,
                    cannon: I,
                    createConfetti: (e, t) => I.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => I.createConfetti({
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
                        return I.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            l = arguments.length > 4 ? arguments[4] : void 0;
                        return I.createMultipleConfetti({
                            ...c,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, l)
                    },
                    addClickListener: f,
                    removeClickListener: E
                }, [f, c, I, n, _, E]);
                return (0, i.jsx)(d.Provider, {
                    value: C,
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
                    return I
                },
                addFavoriteCategory: function() {
                    return _
                },
                removeFavoriteCategory: function() {
                    return C
                },
                updateFavoriteChannels: function() {
                    return h
                },
                toggleFavoriteServerMuted: function() {
                    return T
                }
            });
            var i = n("500947"),
                l = n("975162"),
                a = n("872173"),
                r = n("42203"),
                u = n("957255"),
                o = n("379881"),
                s = n("809924");

            function d() {
                let e = o.default.getFavoriteChannels(),
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
                    if (n.type === l.FavoriteChannelType.CATEGORY) continue;
                    let i = r.default.getChannel(t);
                    if (null == i || !i.isPrivate() && !u.default.can(s.Permissions.VIEW_CHANNEL, i)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function f(e, t) {
                let n = o.default.isFavorite(e);
                !n && a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = l.FavoriteChannel.create({
                        nickname: "",
                        type: l.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), c(n.favoriteChannels)
                }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = o.default.getFavorite(e);
                null != t && a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === l.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    c(n.favoriteChannels)
                }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function I(e, t) {
                let n = o.default.isFavorite(e);
                n && a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                let t = i.default.fromTimestamp(Date.now());
                a.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = l.FavoriteChannel.create({
                        nickname: e,
                        type: l.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C(e) {
                E(e)
            }

            function h(e) {
                a.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let i of e)
                        if (null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id) {
                            var n;
                            t.favoriteChannels[i.id].parentId = null !== (n = i.parent_id) && void 0 !== n ? n : "0"
                        }
                }, a.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function T() {
                a.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, a.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        972701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("923959"),
                u = n("379881"),
                o = n("200008"),
                s = n("498139"),
                d = n("49111"),
                c = n("782340");

            function f(e, t) {
                return e.type === d.ChannelTypes.GROUP_DM ? t ? c.default.Messages.UNFAVORITE_GDM : c.default.Messages.FAVORITE_GDM : e.type === d.ChannelTypes.DM ? t ? c.default.Messages.UNFAVORITE_DM : c.default.Messages.FAVORITE_DM : t ? c.default.Messages.UNFAVORITE_CHANNEL : c.default.Messages.FAVORITE_CHANNEL
            }

            function E(e) {
                var t;
                let n = (0, l.useStateFromStores)([u.default], () => u.default.isFavorite(e.id)),
                    c = function(e) {
                        let t = (0, l.useStateFromStores)([r.default], () => r.default.getChannels(d.FAVORITES))[d.ChannelTypes.GUILD_CATEGORY].filter(e => "null" !== e.channel.id),
                            {
                                favoritesEnabled: n
                            } = s.default.useExperiment({
                                location: "58e21a_1"
                            }, {
                                autoTrackExposure: !1
                            });
                        if (!n) return null;

                        function u(t) {
                            (0, o.addFavoriteChannel)(e.id, t)
                        }
                        return 0 === t.length ? (0, i.jsx)(a.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => u(null)
                        }) : (0, i.jsx)(a.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => u(null),
                            children: t.map(e => (0, i.jsx)(a.MenuItem, {
                                id: "favorite-".concat(e.channel.id),
                                label: e.channel.name,
                                action: () => u(e.channel.id)
                            }, e.channel.id))
                        })
                    }(e);
                let E = (t = e, (0, i.jsx)(a.MenuItem, {
                    id: "favorite-channel",
                    label: f(t, !0),
                    action: function() {
                        (0, o.removeFavoriteChannel)(t.id)
                    }
                }));
                return __OVERLAY__ ? null : n ? E : c
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("162771"),
                u = n("49111"),
                o = n("782340");

            function s(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getGuildId());
                return __OVERLAY__ || t !== u.FAVORITES ? null : (0, i.jsx)(a.MenuItem, {
                    id: "set-channel-nickname",
                    label: o.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, a.openModalLazy)(async () => {
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
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("16108"),
                u = n("697218"),
                o = n("782340");

            function s(e) {
                let t = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser());
                return (null == t ? void 0 : t.isStaff()) !== !0 ? null : (0, i.jsxs)(i.Fragment, {
                    children: [!e.isMessageRequest && (0, i.jsx)(a.MenuItem, {
                        id: "mark-as-message-request",
                        label: o.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
                        action: () => (0, r.markAsMessageRequest)(e.id)
                    }), (0, i.jsx)(a.MenuItem, {
                        id: "clear-message-request",
                        label: o.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
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
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("277734"),
                u = n("764828"),
                o = n("697218"),
                s = n("782340");

            function d(e) {
                let t = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    n = (0, l.useStateFromStores)([u.default], () => u.default.getChannelSafetyWarnings(e.id));
                return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length ? null : (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(a.MenuItem, {
                        id: "clear-safety-warnings",
                        label: s.default.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
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
                    return I
                },
                canGuildUseRoleIcons: function() {
                    return _
                }
            });
            var i = n("867805"),
                l = n("407063"),
                a = n("315102"),
                r = n("773336"),
                u = n("49111");
            let o = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, r.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: E(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()))),
                E = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let r = a.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        f = "quality=lossless";
                    return (null != t && (c = "size=" + (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(o, "/").concat(n, "/").concat(i, ".").concat(r, "?").concat(c).concat(f) : "".concat(s).concat(u.Endpoints.ROLE_ICON(n, i), "?").concat(c)
                },
                I = e => e.startsWith(o) || e.startsWith("".concat(s, "/roles")) && e.includes("/icons/"),
                _ = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(u.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return u
                },
                setCurrentGuild: function() {
                    return o
                },
                initGuildIdentitySettings: function() {
                    return s
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
                    return I
                },
                setPendingPronouns: function() {
                    return _
                },
                setPendingNickname: function() {
                    return C
                },
                setPendingThemeColors: function() {
                    return h
                },
                resetPendingMemberChanges: function() {
                    return T
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                resetAllPending: function() {
                    return N
                },
                clearErrors: function() {
                    return S
                },
                setDisableSubmit: function() {
                    return g
                }
            });
            var i = n("990746"),
                l = n("913144"),
                a = n("54239"),
                r = n("49111");
            async function u(e, t) {
                let {
                    nick: n,
                    avatar: a
                } = t;
                if (null == e) throw Error("Need guildId");
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: r.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: a
                        },
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), l.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function o(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, a.popLayer)()
            }

            function c() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function E(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function _(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function C(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function h(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function T() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function p() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function N() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function S() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, l, a, r, u, o, s, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var f = n("498225"),
                E = n("913144"),
                I = n("49111");
            let _ = I.FormStates.CLOSED,
                C = {},
                h = !1;

            function T() {
                _ = I.FormStates.CLOSED, C = {}, s = null, d = void 0, c = []
            }

            function p() {
                N(), S(), C = {}, _ = I.FormStates.OPEN
            }

            function N() {
                i = void 0, u = void 0
            }

            function S() {
                l = void 0, a = void 0, r = void 0, o = void 0
            }
            class g extends f.default.Store {
                getFormState() {
                    return _
                }
                getErrors() {
                    return C
                }
                showNotice() {
                    return void 0 !== i || void 0 !== l || void 0 !== a || void 0 !== r || void 0 !== u || void 0 !== o
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return l
                }
                getPendingBio() {
                    return a
                }
                getPendingNickname() {
                    return u
                }
                getPendingPronouns() {
                    return r
                }
                getPendingAccentColor() {
                    return u
                }
                getPendingThemeColors() {
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: l,
                        pendingBio: a,
                        pendingPronouns: r,
                        pendingNickname: u,
                        pendingThemeColors: o
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return h
                }
            }
            g.displayName = "GuildIdentitySettingsStore";
            var v = new g(E.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, _ = I.FormStates.OPEN, C = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: T,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), T()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, C = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    _ = I.FormStates.SUBMITTING, C = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (_ !== I.FormStates.SUBMITTING) return !1;
                    _ = I.FormStates.OPEN, C = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    _ = I.FormStates.OPEN, C = e.errors
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
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    a = t
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
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: N,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: S,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    C = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    h = t
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
            var i = n("703275"),
                l = n.n(i),
                a = n("990746"),
                r = n("913144"),
                u = n("851387"),
                o = n("36402"),
                s = n("49111");
            async function d(e) {
                try {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await a.default.get({
                            url: s.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
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
                o.default.shouldFetch(e) && await d(e)
            }
            let f = new l({
                maxAge: 1e4
            });

            function E(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = "".concat(e, "-").concat(t);
                if (!n || null == f.get(i)) {
                    var l, r;
                    return f.set(i, !0), l = e, r = t, a.default.get({
                        url: s.Endpoints.GUILD_ROLE_MEMBER_IDS(l, r)
                    }).then(e => (u.default.requestMembersById(l, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("498225"),
                l = n("913144");
            let a = {},
                r = {};
            class u extends i.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? a[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = r[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            u.displayName = "GuildRoleMemberCountStore";
            var o = new u(l.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    a[t] = n, r[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: i
                    } = e, l = a[t];
                    if (null == l) return !1;
                    l[n] = i
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: i
                    } = e, l = a[t];
                    if (null == l || null == l[n]) return !1;
                    let r = Object.keys(i).length;
                    l[n] += r
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = a[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = i[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, i = a[t];
                    if (null == i || null == i[n]) return !1;
                    i[n] = Math.max(i[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == a[t] && (a[t] = {}), a[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete a[t.id], delete r[t.id]
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
                    return u
                },
                setFailed: function() {
                    return o
                },
                fetchMessageInteractionData: function() {
                    return s
                }
            });
            var i = n("990746"),
                l = n("913144"),
                a = n("49111");

            function r(e, t, n, i) {
                l.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: i
                })
            }

            function u(e, t) {
                let {
                    data: n,
                    messageId: i,
                    onCreate: a,
                    onSuccess: r,
                    onFailure: u
                } = t;
                l.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: i,
                    onCreate: a,
                    onSuccess: r,
                    onFailure: u
                })
            }

            function o(e, t, n) {
                l.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }
            async function s(e, t) {
                let n = await i.default.get({
                    url: a.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let i = n.body;
                    l.default.dispatch({
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
            let i, l;
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("498225"),
                r = n("913144"),
                u = n("798609"),
                o = n("42203"),
                s = n("3765");
            let d = {},
                c = {},
                f = {};

            function E(e) {
                delete d[e];
                let t = f[e];
                null != t && delete c[t], delete f[e]
            }
            class I extends a.default.Store {
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
                    return (null == n || null == d[n] || d[n].state === s.InteractionState.FAILED) && (null == d[t] || d[t].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return l
                }
                getIFrameModalKey() {
                    return i
                }
            }
            I.displayName = "InteractionStore";
            var _ = new I(r.default, {
                LOGOUT: function() {
                    d = {}, c = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: i,
                        onCreate: l,
                        onCancel: a,
                        onSuccess: r,
                        onFailure: u
                    } = e;
                    null != n && (c[n] = t, f[t] = n), d[t] = {
                        state: s.InteractionState.QUEUED,
                        data: i,
                        onCreate: l,
                        onCancel: a,
                        onSuccess: r,
                        onFailure: u
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: i
                    } = e;
                    if (null == n) return !1;
                    let l = d[n];
                    if (null == l || l.state !== s.InteractionState.QUEUED) return !1;
                    l.state = s.InteractionState.CREATED, null === (t = l.onCreate) || void 0 === t || t.call(l, i)
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
                        errorMessage: l
                    } = e;
                    if (null == n) return !1;
                    let a = d[n];
                    if (null == a) return !1;
                    null === (t = a.onFailure) || void 0 === t || t.call(a, i, l), a.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? E(n) : d[n] = {
                        ...a,
                        state: s.InteractionState.FAILED,
                        errorCode: i,
                        errorMessage: l
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
                    } = e, n = o.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(d)) t.state === s.InteractionState.FAILED && E(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    l = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    i = void 0, l = void 0
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
            var i, l;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.QUEUED = 0] = "QUEUED", l[l.CREATED = 1] = "CREATED", l[l.FAILED = 2] = "FAILED"
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return h
                },
                executeMessageComponentInteraction: function() {
                    return T
                },
                handleInteractionResponse: function() {
                    return N
                },
                InteractionStatusViewState: function() {
                    return l
                },
                getInteractionStatusViewState: function() {
                    return S
                },
                canRetryInteractionData: function() {
                    return g
                }
            });
            var i, l, a = n("500947"),
                r = n("990746"),
                u = n("913144"),
                o = n("819689"),
                s = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                E = n("809810"),
                I = n("3765"),
                _ = n("606981"),
                C = n("49111");

            function h(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : a.default.extractTimestamp(e) + 9e5
            }
            let T = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: i,
                    customId: l,
                    indices: u,
                    applicationId: o,
                    channelId: I,
                    guildId: _,
                    localState: h
                } = e, T = a.default.fromTimestamp(Date.now());
                if (!E.default.canQueueInteraction(n, T)) return;
                await d.default.unarchiveThreadIfNecessary(I), (0, f.addQueued)(T, {
                    messageId: n,
                    data: {
                        interactionType: s.InteractionTypes.MESSAGE_COMPONENT,
                        customId: l,
                        indices: u
                    },
                    onFailure: (e, t) => p(I, e, t)
                }), null != h && (0, f.queueInteractionComponentState)(n, T, h, u);
                let S = {
                    type: s.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: T,
                    guild_id: _,
                    channel_id: I,
                    message_flags: i,
                    message_id: n,
                    application_id: o,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: l,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === s.ComponentType.STRING_SELECT || e.type === s.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(h)
                    }
                };
                await r.default.post({
                    url: C.Endpoints.INTERACTIONS,
                    body: S,
                    timeout: 3e3
                }, e => {
                    N(T, I, _, e)
                })
            }, p = (e, t, n) => {
                null == n && null != t && o.default.sendClydeError(e, t)
            }, N = (e, t, n, i) => {
                if (!i.ok) {
                    if (!i.hasErr) {
                        var l;
                        if (i.status >= 400 && i.status < 500 && i.body) {
                            if (i.body.code === C.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                                let l = (0, _.getFirstSkemaError)(i.body.errors);
                                null != l && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === l.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === l.code) && u.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == l ? void 0 : l.message);
                                return
                            }(0, f.setFailed)(e, void 0, i.body.message);
                            return
                        }(0, f.setFailed)(e, null === (l = i.body) || void 0 === l ? void 0 : l.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (i = l || (l = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
            let S = (e, t) => {
                var n;
                let i = null == t ? void 0 : t.state,
                    r = e.state === C.MessageStates.SENT && h(e.id) < Date.now();
                let u = e.state === C.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : a.default.extractTimestamp(n) + 3e3) < Date.now(),
                    o = (null == t ? void 0 : t.data.interactionType) === s.InteractionTypes.APPLICATION_COMMAND,
                    d = e.isCommandType();
                if (o && i === I.InteractionState.QUEUED || d && e.state === C.MessageStates.SENDING && null != t) return l.SENDING;
                if (o && i === I.InteractionState.CREATED || e.hasFlag(C.MessageFlags.LOADING) && !r) return l.CREATED;
                if (null != e.interaction && e.hasFlag(C.MessageFlags.LOADING) && r) return l.TIMED_OUT;
                else if (null != e.interaction && !e.hasFlag(C.MessageFlags.LOADING) && u) return l.TIMED_OUT;
                else if (d && e.state === C.MessageStates.SEND_FAILED) return l.FAILED
            };

            function g(e) {
                var t;
                let n = e.options;
                for (;
                    (null === (t = n) || void 0 === t ? void 0 : t.length) === 1 && (n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND);) n = n[0].options;
                for (let e of null != n ? n : [])
                    if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return l
                }
            });
            let i = "_errors";

            function l(e) {
                return function e(t, n) {
                    let l = t[i];
                    if (null != l && Array.isArray(l)) return l[0];
                    for (let [l, a] of Object.entries(t))
                        if (l !== i && null != a && "object" == typeof a) return e(a, null != n ? n : l);
                    return null
                }(e, void 0)
            }
        },
        16108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                acceptMessageRequest: function() {
                    return o
                },
                clearMessageRequestState: function() {
                    return s
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
            var i = n("990746"),
                l = n("913144"),
                a = n("437822"),
                r = n("773163"),
                u = n("49111");
            async function o(e) {
                await i.default.put({
                    url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.ACCEPTED
                    }
                }), l.default.dispatch({
                    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
                    channelId: e
                })
            }

            function s(e) {
                return i.default.put({
                    url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.UNSPECIFIED
                    }
                })
            }

            function d(e) {
                return i.default.put({
                    url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
                    body: {
                        consent_status: r.MessageRequestConsentStatusTypes.PENDING
                    }
                })
            }

            function c(e) {
                return i.default.delete({
                    url: u.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
                })
            }

            function f(e) {
                return i.default.put({
                    url: u.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
                    body: {
                        channel_ids: e
                    }
                })
            }

            function E() {
                a.default.getLocationMetadata()
            }
        },
        773163: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                MessageRequestConsentStatusTypes: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.PENDING = 1] = "PENDING", l[l.ACCEPTED = 2] = "ACCEPTED", l[l.REJECTED = 3] = "REJECTED"
        },
        95045: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                renderAutomodMessageMarkup: function() {
                    return s
                }
            }), n("355025");
            var i = n("367376"),
                l = n("240873"),
                a = n("49111");
            let r = new Set([a.MessageEmbedTypes.IMAGE, a.MessageEmbedTypes.GIFV]),
                u = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? i.default.parseInlineReply : i.default.parse;
                return function(e, t, n) {
                    var i, a;
                    let {
                        toAST: o = !1,
                        hideSimpleEmbedContent: s = !0,
                        formatInline: f = !1,
                        postProcessor: E
                    } = n, I = !1;
                    let _ = e(t.content, !0, (i = t, a = n, {
                        allowLinks: null != i.webhookId || !!a.allowLinks,
                        allowEmojiLinks: null != i.webhookId,
                        channelId: i.channel_id,
                        messageId: i.id,
                        mentionChannels: i.mentionChannels,
                        isInteracting: !!a.isInteracting,
                        formatInline: !!a.formatInline,
                        noStyleAndInteraction: !!a.noStyleAndInteraction,
                        allowHeading: !!a.allowHeading,
                        allowList: !!a.allowList,
                        previewLinkTarget: !!a.previewLinkTarget,
                        disableAnimatedEmoji: !!a.disableAnimatedEmoji,
                        disableAutoBlockNewlines: !0,
                        muted: !1
                    }), (e, n) => (!Array.isArray(e) && (e = [e]), s && (e = function(e, t) {
                        if (1 !== e.length || 1 !== t.length) return e;
                        let n = e[0],
                            i = t[0];
                        return "link" === n.type && r.has(i.type) && (0, l.isEmbedInline)(i) ? [] : e
                    }(e, t.embeds)), !f && (e = function(e, t) {
                        return t ? d(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = d(e[0].content)), e)
                    }(e, n)), I = function(e, t) {
                        return t ? c(e) : "paragraph" === e[0].type && e[0].content instanceof Array && c(e[0].content)
                    }(e, n), f && (e = function e(t) {
                        return t.forEach(t => {
                            u.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                        }), t
                    }(e)), null != E && (e = E(e, n)), e));
                    return {
                        hasSpoilerEmbeds: I,
                        content: _
                    }
                }(n, e, t)
            }

            function s(e, t, n) {
                var l;
                return l = i.default.parseAutoModerationSystemMessage, l(e, !0, {
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
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                },
                PaymentPortalBody: function() {
                    return _
                },
                PaymentPortalFooter: function() {
                    return C
                }
            });
            var i = n("920040"),
                l = n("773670"),
                a = n("575482"),
                r = n.n(a),
                u = n("161179"),
                o = n.n(u),
                s = n("865768"),
                d = n.n(s),
                c = n("77078"),
                f = n("642906"),
                E = n("442750");

            function I(e) {
                var t, n, a, u, s, d;
                let {
                    header: I,
                    isLargeModal: _,
                    stepProps: C
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...i
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: i
                    }
                }(e), {
                    step: h,
                    stepConfigs: T,
                    setBodyNode: p,
                    setFooterNode: N,
                    setModalOverlayNode: S,
                    setReadySlideId: g
                } = (0, f.usePaymentContext)(), v = T.find(e => e.key === h);
                l.useEffect(() => {
                    S(null)
                }, [h, S]), o(null != v, "Unknown step for current payment flow.");
                let m = null !== (s = null == v ? void 0 : null === (t = v.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== s && s,
                    L = null == v ? void 0 : null === (n = v.options) || void 0 === n ? void 0 : n.bodyClassName,
                    A = void 0 !== _ && _ ? E.sliderBodyLarge : null == v ? void 0 : null === (a = v.options) || void 0 === a ? void 0 : a.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (d = null == v ? void 0 : null === (u = v.options) || void 0 === u ? void 0 : u.renderHeader) || void 0 === d || d ? I : null, v.renderStep(C), null == h || m ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.ModalContent, {
                            className: r(E.body, L),
                            children: (0, i.jsx)(c.Slides, {
                                activeSlide: h,
                                centered: !1,
                                onSlideReady: e => g(e),
                                children: T.filter(e => null != e.key).map(e => (0, i.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: r(E.sliderBody, A),
                                        ref: e => p(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => N(e)
                        }), (0, i.jsx)("div", {
                            ref: e => S(e)
                        })]
                    })]
                })
            }

            function _(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function C(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("462567"),
                a = n("77078"),
                r = n("112679"),
                u = n("55689"),
                o = n("855133"),
                s = n("599110"),
                d = n("659500"),
                c = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: I,
                    onComplete: _,
                    onSubscriptionConfirmation: C,
                    analyticsLocations: h,
                    analyticsObject: T,
                    analyticsLocation: p,
                    analyticsSourceLocation: N,
                    isGift: S = !1,
                    giftMessage: g,
                    subscriptionTier: v,
                    trialId: m,
                    postSuccessGuild: L,
                    openInvoiceId: A,
                    applicationId: R,
                    referralTrialOfferId: M,
                    giftRecipient: U,
                    returnRef: y
                } = null != e ? e : {}, O = !1, D = (0, l.v4)();
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: l,
                            ...a
                        } = n;
                        return (0, i.jsx)(e, {
                            ...a,
                            loadId: D,
                            subscriptionTier: v,
                            skuId: v,
                            isGift: S,
                            giftMessage: g,
                            giftRecipient: U,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                l(), null == I || I(e), e && (null == C || C())
                            },
                            onComplete: () => {
                                O = !0, null == _ || _(), !S && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: C,
                            analyticsLocations: h,
                            analyticsObject: T,
                            analyticsLocation: p,
                            analyticsSourceLocation: N,
                            trialId: m,
                            postSuccessGuild: L,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: A,
                            applicationId: R,
                            referralTrialOfferId: M,
                            returnRef: y
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !O && s.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: D,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != p ? p : T,
                            source: N,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: S,
                            eligible_for_trial: null != m,
                            application_id: R,
                            location_stack: h
                        }), (0, r.clearError)(), (0, u.clearPurchaseTokenAuthState)(), null == I || I(O), O && (!S && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == C || C())
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
            var i = n("920040");
            n("773670");
            var l = n("744196"),
                a = n("719375");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, l.default)([a.default], () => a.default.isEnabled({
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
                    return u
                }
            });
            var i = n("773670"),
                l = n("744196"),
                a = n("526887"),
                r = n("719375");

            function u() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(a.ConfettiCannonContext), t = (0, l.default)([r.default], () => r.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), u = i.useMemo(() => ({
                    fire: (i, l, a) => {
                        var r, u;
                        let o = (null == a ? void 0 : a.settings) != null ? {
                                ...t,
                                ...a.settings
                            } : t,
                            s = n(o);
                        e(i, l, s, (null !== (r = null == a ? void 0 : a.count) && void 0 !== r ? r : o.confettiCount) * (null !== (u = null == a ? void 0 : a.countMultiplier) && void 0 !== u ? u : 1), {
                            sprite: null == a ? void 0 : a.sprite
                        })
                    }
                }), [e, n, t]);
                return u
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return l
                },
                setHasCompletedStep: function() {
                    return a
                },
                resetPremiumTutorialStore: function() {
                    return r
                },
                setCanPlayWowMoment: function() {
                    return u
                },
                setIsPersistentHelperHidden: function() {
                    return o
                },
                setNavigatedFromHelper: function() {
                    return s
                }
            });
            var i = n("913144");
            let l = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                a = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                r = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                s = e => {
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
                    return I
                },
                maybeFetchPremiumLikelihood: function() {
                    return C
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return h
                }
            });
            var i = n("773670"),
                l = n("744196"),
                a = n("990746"),
                r = n("913144"),
                u = n("775433"),
                o = n("697218"),
                s = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                E = n("49111");
            let I = "nonSubscriber";
            async function _() {
                try {
                    r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await a.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [I]: e.non_subscriber,
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

            function C(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), l = o.default.getCurrentUser();
                T(l, i, t, n)
            }

            function h(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), a = (0, l.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), r = (0, l.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    T(r, a, t, n)
                }, [r, a, t, n])
            }

            function T(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && _(), i && (!s.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, u.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("498225"),
                l = n("913144");
            let a = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                r = a;
            class u extends i.default.Store {
                initialize() {
                    r = a
                }
                getState() {
                    return r
                }
                shouldFetchPremiumLikelihood() {
                    return !r.isFetching && !r.fetched
                }
            }
            u.displayName = "UserPremiumLikelihoodStore";
            var o = new u(l.default, {
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
                    return a
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
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
            var a = l
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("773670"),
                l = n("79112"),
                a = n("685665"),
                r = n("929423");
            n("424562");
            var u = n("49111"),
                o = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: f
                } = (0, a.default)(), E = (0, i.useCallback)(() => {
                    null != t && (0, r.initGuildIdentitySettings)(t, null != d ? d : f), l.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, s, d, c, f]);
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
                    return u
                },
                clearChannelSafetyWarnings: function() {
                    return o
                }
            });
            var i = n("990746"),
                l = n("913144"),
                a = n("49111");

            function r(e, t) {
                return l.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), i.default.post({
                    url: a.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: {
                        warning_ids: t
                    },
                    oldFormErrors: !0
                })
            }

            function u(e, t, n) {
                l.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function o(e) {
                l.default.dispatch({
                    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
                    channelId: e
                })
            }
        },
        764828: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningTypes: function() {
                    return a
                },
                SafetyWarningFeedbackTypes: function() {
                    return r
                },
                default: function() {
                    return I
                }
            });
            var i, l, a, r, u = n("498225"),
                o = n("913144"),
                s = n("42203");
            (i = a || (a = {}))[i.STRANGER_DANGER = 1] = "STRANGER_DANGER", (l = r || (r = {}))[l.UPVOTE = 0] = "UPVOTE", l[l.DOWNVOTE = 1] = "DOWNVOTE";
            let d = {};

            function c(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (d[e.id] = t), null == t && null != d[e.id] && delete d[e.id]
            }

            function f() {
                d = {}, Object.values(s.default.getMutablePrivateChannels()).forEach(e => {
                    c(e)
                })
            }
            class E extends u.default.Store {
                initialize() {
                    this.waitFor(s.default)
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
            var I = new E(o.default, {
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
                    } = e, l = d[t];
                    null != l && (d[t] = l.map(e => e.id === n ? {
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
                    let l = Date.now().toString();
                    d[t] = i.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: l
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
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("77078"),
                a = n("782340");

            function r(e) {
                return null == e || null == e.end_time ? null : a.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(a.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function u(e) {
                let {
                    muteConfig: t,
                    className: n
                } = e, a = r(t);
                return null != a ? (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: n,
                    children: a
                }) : null
            }
        },
        130074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("77078"),
                a = n("272030"),
                r = n("838446"),
                u = n("158534"),
                o = n("798609"),
                s = n("846883"),
                d = n("812204"),
                c = n("243288"),
                f = n("321135"),
                E = n("873254"),
                I = n("333835"),
                _ = n("531674"),
                C = n("861370"),
                h = n("972701"),
                T = n("390008"),
                p = n("976127"),
                N = n("856030"),
                S = n("726750"),
                g = n("170990"),
                v = n("304582"),
                m = n("72057"),
                L = n("563816"),
                A = n("489836"),
                R = n("406703"),
                M = n("126710"),
                U = n("502533"),
                y = n("314838"),
                O = n("151200"),
                D = n("692986"),
                G = n("806179"),
                P = n("816106"),
                x = n("623879"),
                w = n("49111"),
                F = n("782340"),
                b = (0, u.default)((0, r.default)(function(e) {
                    let {
                        user: t,
                        channel: n,
                        channelSelected: r = !1,
                        showMute: u = !0,
                        showMediaItems: d = !1,
                        showChannelCallItems: w = !1,
                        showModalItems: b = !0,
                        targetIsUser: j = !1,
                        context: H,
                        onSelect: B,
                        onHeightUpdate: V
                    } = e, k = (0, G.default)(t.id, null), Y = (0, R.default)(t, H), Z = (0, m.default)({
                        user: t,
                        context: H
                    }), W = (0, v.default)(t), K = (0, x.default)(t.id), z = (0, M.default)(n.id, r), Q = (0, y.default)(t), q = (0, s.default)(null, t), X = (0, P.default)(t.id), J = (0, O.default)(t.id, n.id), $ = (0, g.default)(t), ee = (0, D.default)(t.id), et = (0, U.default)(t.id, n.id), en = (0, A.default)(t), ei = (0, _.default)(n), el = (0, C.default)({
                        id: t.id,
                        label: F.default.Messages.COPY_ID_USER
                    }), ea = (0, C.default)({
                        id: n.id,
                        label: F.default.Messages.COPY_ID_CHANNEL
                    }), er = (0, I.default)(n), eu = (0, f.default)(t.id), eo = (0, c.default)(n.id), es = (0, S.default)(t), ed = (0, E.default)(t.id), ec = (0, L.default)({
                        commandType: o.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: n,
                        guildId: void 0,
                        onShow: V
                    }), ef = (0, h.default)(n), eE = (0, T.default)(n), eI = (0, p.useMessageRequestItem)(n), e_ = (0, N.useSafetyWarningsItem)(n), eC = n.isManaged(), eh = t.isNonUserBot();
                    return (0, i.jsxs)(l.Menu, {
                        navId: "user-context",
                        onClose: a.closeContextMenu,
                        "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: B,
                        children: [(0, i.jsx)(l.MenuGroup, {
                            children: !eh && er
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: eI
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: e_
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [ef, eE]
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: !eh && es
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [!eh && (0, i.jsxs)(i.Fragment, {
                                children: [b && k, Y, !eC && J, b && Z, b && W, K]
                            }), z]
                        }), !eh && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(l.MenuGroup, {
                                children: d && X
                            }), (0, i.jsx)(l.MenuGroup, {
                                children: b && q
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [d && ee, d && et, ec, b && Q, $, b && en, d && ed]
                            }), (0, i.jsx)(l.MenuGroup, {
                                children: u && ei
                            }), w && (0, i.jsxs)(l.MenuGroup, {
                                children: [eo, eu]
                            })]
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [el, !j && ea]
                        })]
                    })
                }, {
                    object: w.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("920040"),
                l = n("773670"),
                a = n("161179"),
                r = n.n(a),
                u = n("498225"),
                o = n("77078"),
                s = n("240249"),
                d = n("524768"),
                c = n("816140"),
                f = n("916565"),
                E = n("355263"),
                I = n("633043"),
                _ = n("305961"),
                C = n("317041"),
                h = n("782340"),
                T = n("376592"),
                p = e => {
                    let {
                        commandType: t,
                        commandTargetId: n,
                        channel: a,
                        guildId: p,
                        onShow: N
                    } = e, S = l.useRef(!1), g = l.useRef(0), v = (0, u.useStateFromStores)([_.default], () => _.default.getGuild(null != p ? p : a.guild_id)), {
                        hasMoreAfter: m,
                        scrollDown: L,
                        sectionDescriptors: A,
                        commands: R,
                        placeholders: M
                    } = s.useDiscovery(a, {
                        commandType: t
                    }, {
                        placeholderCount: C.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: C.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: U,
                        sections: y
                    } = l.useMemo(() => {
                        let e = R.concat(M),
                            t = {};
                        return A.forEach(e => {
                            t[e.id] = e
                        }), {
                            visibleCommands: e,
                            sections: t
                        }
                    }, [R, A, M]), O = l.useMemo(() => (0, c.canUseContextMenuCommands)(a, U.length, s.getCommandTypeCount(a, t, null == v ? void 0 : v.applicationCommandCounts)), [a, t, U.length, null == v ? void 0 : v.applicationCommandCounts]);
                    l.useEffect(() => {
                        if (O !== S.current) {
                            if (O) null == N || N();
                            S.current = O
                        }
                    }, [O, N]), l.useEffect(() => {
                        D(g.current)
                    }, [U]);
                    let D = l.useCallback(e => {
                            m && e + 500 > 34 * U.length - 40 && L(), g.current = e
                        }, [m, L, U]),
                        G = l.useCallback(e => {
                            if (e.inputType === d.ApplicationCommandInputType.PLACEHOLDER) return (0, i.jsx)(o.MenuItem, {
                                id: "menu-command-".concat(e.id),
                                render: () => (0, i.jsx)(I.default, {})
                            }, "menu-command-".concat(e.id));
                            r(null != a, "menu item should not show if channel is null");
                            let t = y[e.applicationId],
                                l = null != t ? (0, E.getIconComponent)(t) : void 0;
                            return (0, i.jsx)(o.MenuItem, {
                                id: e.id,
                                label: e.displayName,
                                showIconFirst: !0,
                                icon: () => null != l ? (0, i.jsx)(l, {
                                    channel: a,
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
                                            channel: a,
                                            guild: v
                                        },
                                        commandTargetId: n
                                    })
                                }
                            }, e.id)
                        }, [a, v, n, y]);
                    return O && (0, i.jsx)(o.MenuItem, {
                        id: "apps",
                        label: h.default.Messages.APPS,
                        onChildrenScroll: D,
                        childRowHeight: 34,
                        listClassName: T.list,
                        disabled: 0 === U.length,
                        children: U.map(G)
                    })
                }
        },
        126710: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("77078"),
                a = n("450911"),
                r = n("42203"),
                u = n("782340");

            function o(e, t) {
                let n = r.default.getChannel(e);
                return null == n || n.isMultiUserDM() ? null : (0, i.jsx)(l.MenuItem, {
                    id: "close-dm",
                    label: u.default.Messages.CLOSE_DM,
                    action: () => a.default.closePrivateChannel(e, t)
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
            var i = n("920040");
            n("773670");
            var l = n("498225"),
                a = n("77078"),
                r = n("561288"),
                u = n("191145"),
                o = n("271938"),
                s = n("99795"),
                d = n("782340");

            function c(e, t) {
                let n = (0, l.useStateFromStores)([o.default], () => o.default.getId() === e, [e]),
                    [c, f] = (0, l.useStateFromStoresArray)([u.default], () => [u.default.getParticipants(t), u.default.getParticipant(t, e)], [t, e]);
                return n || 0 === c.length ? null : null == f ? (0, i.jsx)(a.MenuItem, {
                    id: "ring",
                    label: d.default.Messages.RING,
                    action: () => r.default.ring(t, [e])
                }) : f.type === s.ParticipantTypes.USER && f.ringing ? (0, i.jsx)(a.MenuItem, {
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
                    return S
                }
            });
            var i = n("427964"),
                l = n.n(i),
                a = n("990746"),
                r = n("689988"),
                u = n("605250"),
                o = n("870691"),
                s = n("42203"),
                d = n("49111");
            let c = {},
                f = new u.default("UserGuildSettingsManager"),
                E = 0;

            function I() {
                c = {
                    ...o.default.getCollapsedCategories()
                }
            }

            function _() {
                !__OVERLAY__ && (clearTimeout(E), E = setTimeout(() => C(), 15e3))
            }
            async function C(e, t) {
                await h(null != t ? {
                    [null != e ? e : d.ME]: t
                } : {})
            }
            async function h(e) {
                clearTimeout(E);
                let t = 0 !== Object.keys(e).length,
                    n = o.default.getCollapsedCategories(),
                    i = function() {
                        let e = {},
                            t = o.default.getCollapsedCategories();
                        for (let n in t) t[n] !== c[n] && (e[n] = !0);
                        for (let n in c) t[n] !== c[n] && (e[n] = !0);
                        return e
                    }();
                for (let l in i) {
                    let i = s.default.getChannel(l);
                    null != i && null != i.guild_id && (!(i.guild_id in e) && (e[i.guild_id] = {}), null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}), e[i.guild_id].channel_overrides[i.id] = {
                        ...e[i.guild_id].channel_overrides[i.id],
                        collapsed: i.id in n
                    }, t = !0)
                }
                if (!t) return;
                c = {
                    ...n
                };
                let r = l.map(e, (e, t) => ({
                    guildId: t,
                    updates: e,
                    attempts: 0
                }));
                for (; r.length > 0;) {
                    let e = r.shift();
                    if (e.guildId !== d.FAVORITES) try {
                        await a.default.patch({
                            url: d.Endpoints.USER_GUILD_SETTINGS(e.guildId),
                            body: e.updates
                        }), await T(1e3)
                    } catch (t) {
                        f.error(t), e.attempts += 1, e.attempts < 3 && r.push(e), await T(5e3)
                    }
                }
            }

            function T(e) {
                return new Promise(t => setTimeout(t, e + Math.ceil(e * Math.random())))
            }

            function p() {
                c = {
                    ...o.default.getCollapsedCategories()
                }
            }
            class N extends r.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: _,
                        CATEGORY_EXPAND: _,
                        CATEGORY_COLLAPSE_ALL: _,
                        CATEGORY_EXPAND_ALL: _,
                        POST_CONNECTION_OPEN: I,
                        USER_GUILD_SETTINGS_FULL_UPDATE: p
                    }, this.saveUserGuildSettings = C, this.saveUserGuildSettingsBulk = h
                }
            }
            var S = new N
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("498225"),
                l = n("913144"),
                a = n("449008"),
                r = n("42203"),
                u = n("341542"),
                o = n("923959"),
                s = n("49111");
            let d = {},
                c = 0;

            function f() {
                c += 1
            }

            function E(e) {
                if (null == d[e]) return !1;
                delete d[e]
            }
            class I extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(r.default, u.default), this.removeChangeListener(f), this.addChangeListener(f), d = null != e ? e : {}
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
            I.displayName = "CategoryCollapseStore", I.persistKey = "collapsedCategories";
            var _ = new I(l.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (d = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? d[e.channel_id] = !0 : delete d[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(a.isNotNullish));
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
                    o.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
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
                    o.default.getChannels(t)[s.ChannelTypes.GUILD_CATEGORY].forEach(e => {
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
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("920040"),
                l = n("773670"),
                a = n("575482"),
                r = n.n(a),
                u = n("77078"),
                o = n("760607"),
                s = n("13681");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: a,
                    flowerStarClassName: d,
                    ...c
                } = e, f = l.Children.only(t), E = (0, u.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: r(s.flowerStarContainer, a),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(o.default, {
                        ...c,
                        className: r(d, s.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: r(s.childContainer, {
                            [s.redesignIconChildContainer]: E
                        }),
                        children: f
                    })]
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("920040"),
                l = n("773670"),
                a = n("77078"),
                r = n("393414"),
                u = n("49111"),
                o = l.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: o,
                        onClick: s,
                        onKeyPress: d,
                        focusProps: c,
                        ...f
                    } = e, E = l.useCallback(e => {
                        !e.repeat && ((e.charCode === u.KeyboardKeys.SPACE || e.charCode === u.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, r.transitionTo)(n), null == s || s()), null == d || d(e))
                    }, [n, d, s]), I = l.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, r.transitionTo)(n), null == s || s())
                    }, [n, s]), _ = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: I,
                        onKeyPress: E,
                        ...f,
                        children: o
                    });
                    return (0, i.jsx)(a.FocusRing, {
                        ...c,
                        children: _
                    })
                })
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return C
                },
                default: function() {
                    return T
                }
            });
            var i, l, a = n("920040"),
                r = n("773670"),
                u = n("575482"),
                o = n.n(u),
                s = n("28926"),
                d = n("77078"),
                c = n("252744"),
                f = n("145131"),
                E = n("212407");
            (i = l || (l = {})).DEFAULT = "default", i.SMALL = "small";
            let I = {
                    [l.DEFAULT]: E.shineDefault,
                    [l.SMALL]: E.shineSmall
                },
                _ = {
                    [l.DEFAULT]: E.shineInnerDefault,
                    [l.SMALL]: E.shineInnerSmall
                };
            class C extends r.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, a.jsx)(s.default.div, {
                        ...i,
                        className: o(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, a.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: I[t],
                            children: (0, a.jsx)("div", {
                                className: _[t]
                            })
                        })
                    })
                }
            }
            C.defaultProps = {
                shineSize: l.DEFAULT
            };
            let h = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: u,
                    pauseAnimation: s,
                    shineSize: f = l.DEFAULT,
                    shinePaused: I,
                    buttonShineClassName: _,
                    onlyShineOnHover: h,
                    ...T
                } = e, p = r.createRef(), N = (0, c.default)(p), S = !i && !u && !0 !== s && (!h || N);
                return (0, a.jsxs)(d.Button, {
                    buttonRef: p,
                    ...T,
                    className: o(E.shinyButton, n),
                    disabled: i,
                    submitting: u,
                    children: [t, S ? (0, a.jsx)(C, {
                        shinePaused: I,
                        className: o(E.buttonShine, h ? E.onlyShineOnHover : void 0, _),
                        shineSize: f
                    }) : null]
                })
            };
            h.ShineSizes = l;
            var T = h
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("920040");

            function l(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, l = n ? t : 1, a = n ? 1 : t;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: l,
                        minWidth: l,
                        height: a,
                        minHeight: a
                    }
                })
            }
            n("773670")
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return r
                },
                useUID: function() {
                    return u
                },
                UID: function() {
                    return o
                }
            });
            var i = n("552473"),
                l = n.n(i),
                a = n("365444");
            let r = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return l(e)
                },
                u = () => (0, a.useLazyValue)(() => r()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(u())
                }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("926001"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, a.SlashBoxIcon)
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("575482"),
                a = n.n(l),
                r = n("384737"),
                u = n("448052"),
                o = n("748802"),
                s = n("260792"),
                d = n("77078"),
                c = n("75196"),
                f = n("246604");
            let E = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                I = e => {
                    let {
                        direction: t = E.DOWN,
                        width: n = 24,
                        height: l = 24,
                        color: I = "currentColor",
                        transition: _ = f.transition,
                        className: C,
                        foreground: h,
                        expanded: T,
                        ...p
                    } = e, {
                        enabled: N
                    } = (0, d.useRedesignIconContext)(), S = t;
                    if (!0 === T ? S = E.DOWN : !1 === T && (S = E.RIGHT), N) {
                        let e = {
                            [E.UP]: s.ChevronSmallUpIcon,
                            [E.DOWN]: r.ChevronSmallDownIcon,
                            [E.LEFT]: u.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [S];
                        return (0, i.jsx)(e, {
                            ...p,
                            className: C,
                            width: n,
                            height: l,
                            color: I,
                            colorClass: h
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: a(C, _, S),
                        width: n,
                        height: l,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(p),
                        children: (0, i.jsx)("path", {
                            className: h,
                            fill: "none",
                            stroke: I,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            I.Directions = E;
            var _ = I
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("733154"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, a.ChatIcon)
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("503420"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, i.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, i.jsx)("path", {
                                className: a,
                                fill: l,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, a.ClockIcon)
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("505088"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        backgroundColor: u,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != u ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: u
                        }) : null, (0, i.jsx)("path", {
                            fill: l,
                            className: a,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, a.CircleXIcon)
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                a = n("469563"),
                r = n("163725"),
                u = n("75196"),
                o = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foregroundColor: r = l.default.unsafe_rawColors.RED_400.css,
                        foreground: o,
                        background: s,
                        ...d
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, u.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("rect", {
                            fill: r,
                            className: o,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, i.jsx)("path", {
                            fill: a,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, r.EyeSlashIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("75196"),
                a = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("197801"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, a.SettingsIcon)
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("998460"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, r.default)(u),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, a.GiftIcon)
        },
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("753809"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, i.jsx)("path", {
                                className: a,
                                fill: l,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, i.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, a.LinkIcon)
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("434657"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        className: a,
                        foreground: u,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        className: a,
                        viewBox: "0 0 24 24",
                        ...(0, r.default)(o),
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: l,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, a.LockIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("202909"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        viewBox: a = "0 0 24 24",
                        foreground: u,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: a,
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: l,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, a.NitroWheelIcon)
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("504318"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: a,
                            fill: l
                        })
                    })
                }, a.PencilIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("876726"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: a,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: l
                        })
                    })
                }, a.PlayIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("424823"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: a,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, a.PlusSmallIcon)
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("31745"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        className: a,
                        foreground: r
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, a.CirclePlusIcon)
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("427027"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, a.ChannelsVoiceNormalIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                a = n("287083"),
                r = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: l = "currentColor",
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: l
                        })
                    })
                }, a.StageIcon)
        },
        956089: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BadgeShapes: function() {
                    return o
                },
                getBadgeWidthForValue: function() {
                    return s
                },
                getBadgeCountString: function() {
                    return d
                },
                NumberBadge: function() {
                    return c
                },
                TextBadge: function() {
                    return f
                },
                PremiumBadge: function() {
                    return E
                },
                IconBadge: function() {
                    return I
                },
                CircleBadge: function() {
                    return _
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("575482"),
                a = n.n(l);
            n("77078");
            var r = n("20606");
            n("782340");
            var u = n("460671");
            let o = {
                ROUND: u.baseShapeRound,
                ROUND_LEFT: u.baseShapeRoundLeft,
                ROUND_RIGHT: u.baseShapeRoundRight,
                SQUARE: ""
            };

            function s(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function d(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            let c = e => {
                    let {
                        count: t,
                        color: n = r.default.STATUS_DANGER,
                        disableColor: l = !1,
                        shape: c = o.ROUND,
                        className: f,
                        style: E,
                        ...I
                    } = e;
                    return (0, i.jsx)("div", {
                        className: a(f, u.numberBadge, c),
                        style: {
                            backgroundColor: l ? void 0 : n,
                            width: s(t),
                            paddingRight: function(e) {
                                switch (e) {
                                    case 1:
                                    case 4:
                                    case 6:
                                        return 1;
                                    default:
                                        return
                                }
                            }(t),
                            ...E
                        },
                        ...I,
                        children: d(t)
                    })
                },
                f = e => {
                    let {
                        text: t,
                        className: n,
                        color: l = r.default.STATUS_DANGER,
                        shape: s = o.ROUND,
                        disableColor: d = !1,
                        style: c,
                        ...f
                    } = e;
                    return (0, i.jsx)("div", {
                        className: a(n, u.textBadge, s),
                        style: {
                            backgroundColor: d ? void 0 : l,
                            ...c
                        },
                        ...f,
                        children: t
                    })
                },
                E = e => {
                    let {
                        text: t,
                        className: n,
                        ...l
                    } = e;
                    return (0, i.jsx)(f, {
                        className: a(u.premiumBadge, n),
                        text: t,
                        ...l
                    })
                },
                I = e => {
                    let {
                        icon: t,
                        className: n,
                        color: l = r.default.STATUS_DANGER,
                        shape: s = o.ROUND,
                        disableColor: d = !1,
                        style: c
                    } = e;
                    return (0, i.jsx)("div", {
                        className: a(n, u.iconBadge, s),
                        style: {
                            backgroundColor: d ? void 0 : l,
                            ...c
                        },
                        children: (0, i.jsx)(t, {
                            className: u.icon
                        })
                    })
                },
                _ = e => {
                    let {
                        className: t,
                        color: n = r.default.INTERACTIVE_ACTIVE,
                        shape: l = o.ROUND,
                        disableColor: s = !1,
                        style: d,
                        ...c
                    } = e;
                    return (0, i.jsx)("div", {
                        className: a(t, u.circleBadge, l),
                        style: {
                            backgroundColor: s ? void 0 : n,
                            ...d
                        },
                        ...c
                    })
                }
        }
    }
]);