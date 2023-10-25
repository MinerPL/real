(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["96509"], {
        242149: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                QUICKSWITCHER_SHOW: function() {
                    return r
                }
            });
            var s = o("759515"),
                a = o("778588");
            let r = {
                binds: ["mod+k", "mod+t"],
                comboKeysBindGlobal: !0,
                action: () => (!a.default.hasLayers() && (0, s.show)(), !1)
            }
        },
        347445: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                TOGGLE_HOTKEYS: function() {
                    return l
                }
            });
            var s = o("77078"),
                a = o("244030"),
                r = o("386867");
            let l = {
                binds: ["mod+/", "mod+shift+/"],
                comboKeysBindGlobal: !0,
                action: () => ((0, s.hasModalOpen)(r.KEYBOARD_SHORTCUT_MODAL_KEY) ? a.hide() : a.show(), !1)
            }
        },
        856584: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return S
                }
            });
            var s = o("920040"),
                a = o("773670"),
                r = o("77078"),
                l = o("242149"),
                n = o("347445"),
                i = o("476765"),
                d = o("701909"),
                u = o("180748"),
                c = o("49111"),
                _ = o("782340"),
                f = o("691312");

            function S(e) {
                let {
                    transitionState: t,
                    onClose: o
                } = e, S = (0, i.useUID)();
                return a.useEffect(() => {
                    u.keyboardNavigationExplainerModalSeen()
                }, []), (0, s.jsxs)(r.ModalRoot, {
                    transitionState: t,
                    role: "alertdialog",
                    "aria-labelledby": S,
                    children: [(0, s.jsxs)(r.ModalContent, {
                        className: f.content,
                        children: [(0, s.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            id: S,
                            className: f.header,
                            children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_TITLE.format({
                                tab: (e, t) => (0, s.jsx)(r.KeyCombo, {
                                    shortcut: "tab",
                                    className: f.headerShortcut
                                }, t)
                            })
                        }), (0, s.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_BODY
                        }), (0, s.jsxs)("ul", {
                            className: f.tips,
                            children: [(0, s.jsxs)("li", {
                                children: [(0, s.jsx)(r.KeyCombo, {
                                    shortcut: n.TOGGLE_HOTKEYS.binds[0]
                                }), (0, s.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_LIST_SHORTCUT
                                })]
                            }), (0, s.jsxs)("li", {
                                children: [(0, s.jsx)(r.KeyCombo, {
                                    shortcut: l.QUICKSWITCHER_SHOW.binds[0]
                                }), (0, s.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_QUICKSWITCHER_SHORTCUT
                                })]
                            })]
                        }), (0, s.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_HELP_CENTER_LINK.format({
                                link: d.default.getArticleURL(c.HelpdeskArticles.KEYBOARD_NAVIGATION)
                            })
                        })]
                    }), (0, s.jsx)(r.ModalFooter, {
                        children: (0, s.jsx)(r.Button, {
                            onClick: o,
                            color: r.Button.Colors.BRAND,
                            size: r.Button.Sizes.SMALL,
                            autoFocus: !0,
                            children: _.default.Messages.OKAY
                        })
                    })]
                })
            }
        },
        610174: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                GuildAlertModeExperiment: function() {
                    return d
                },
                useGuildAlertModeEnabled: function() {
                    return c
                },
                getGuildAlertModeEnabled: function() {
                    return _
                }
            });
            var s = o("754013"),
                a = o("498225"),
                r = o("862205"),
                l = o("305961"),
                n = o("957255"),
                i = o("421127");
            let d = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-04_guild_alert_mode",
                    label: "Guild Alert Mode",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !0
                        }
                    }]
                }),
                u = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-08_guild_alert_mode_friend_server",
                    label: "Guild Alert Mode (friend servers only)",
                    defaultConfig: {
                        showAlertMode: !1,
                        alsoShowMemberSafety: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show alert mode experience",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }, {
                        id: 2,
                        label: "Show alert mode experience with member safety",
                        config: {
                            showAlertMode: !0,
                            alsoShowMemberSafety: !1
                        }
                    }]
                });

            function c(e) {
                let t = (0, a.useStateFromStores)([l.default], () => l.default.getGuild(e)),
                    o = (0, a.useStateFromStores)([n.default], () => null != t && s.default.hasAny(n.default.computePermissions(t), i.IncidentAlertModeratorPermissions)),
                    r = d.useExperiment({
                        guildId: e,
                        location: "c3fae3_1"
                    }, {
                        disable: !o,
                        autoTrackExposure: !0
                    }),
                    c = u.useExperiment({
                        guildId: e,
                        location: "c3fae3_2"
                    }, {
                        disable: !o,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: r.showAlertMode || c.showAlertMode,
                    alsoShowMemberSafety: r.alsoShowMemberSafety || c.alsoShowMemberSafety
                }
            }

            function _(e) {
                let t = l.default.getGuild(e),
                    o = null != t && s.default.hasAny(n.default.computePermissions(t), i.IncidentAlertModeratorPermissions),
                    a = d.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_3"
                    }, {
                        disable: !o,
                        autoTrackExposure: !0
                    }),
                    r = u.getCurrentConfig({
                        guildId: e,
                        location: "c3fae3_4"
                    }, {
                        disable: !o,
                        autoTrackExposure: !0
                    });
                return {
                    showAlertMode: a.showAlertMode || r.showAlertMode,
                    alsoShowMemberSafety: a.alsoShowMemberSafety || r.alsoShowMemberSafety
                }
            }
        },
        421127: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                NAGBAR_DISPLAY_MAX_HOURS: function() {
                    return l
                },
                DEFAULT_LOCKDOWN_DURATION: function() {
                    return n
                },
                getTimeframes: function() {
                    return i
                },
                IncidentAlertModeratorPermissions: function() {
                    return d
                }
            });
            var s = o("754013"),
                a = o("809924"),
                r = o("782340");
            let l = 2,
                n = 2,
                i = () => [{
                    value: 1,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_1_HOUR
                }, {
                    value: 2,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_2_HOURS
                }, {
                    value: 4,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_4_HOURS
                }, {
                    value: 6,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_6_HOURS
                }, {
                    value: 12,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_12_HOURS
                }, {
                    value: 24,
                    label: r.default.Messages.GUILD_SERVER_LOCKDOWN_DURATION_24_HOURS
                }],
                d = s.default.combine(a.Permissions.ADMINISTRATOR, a.Permissions.MANAGE_GUILD, a.Permissions.BAN_MEMBERS, a.Permissions.KICK_MEMBERS, a.Permissions.MODERATE_MEMBERS)
        },
        244030: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                show: function() {
                    return a
                },
                hide: function() {
                    return r
                }
            });
            var s = o("913144");

            function a() {
                s.default.dispatch({
                    type: "SHOW_KEYBOARD_SHORTCUTS"
                })
            }

            function r() {
                s.default.dispatch({
                    type: "HIDE_KEYBOARD_SHORTCUTS"
                })
            }
        },
        386867: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                KEYBOARD_SHORTCUT_MODAL_KEY: function() {
                    return s
                }
            });
            let s = "KEYBOARD_SHORTCUT_MODAL_KEY"
        }
    }
]);