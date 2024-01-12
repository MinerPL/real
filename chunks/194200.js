            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("627445"),
                l = s.n(n),
                i = s("917351"),
                r = s.n(i),
                o = s("446674"),
                d = s("77078"),
                u = s("913139"),
                c = s("539405"),
                S = s("278108"),
                E = s("6193"),
                f = s("999819"),
                T = s("227602"),
                m = s("860957"),
                _ = s("901165"),
                g = s("314892"),
                h = s("599110");
            s("701909");
            var I = s("13798"),
                N = s("49111"),
                p = s("782340"),
                C = s("388165");
            let A = O(null);

            function O(e) {
                var t;
                let s = _.default.getNotificationPositionMode(),
                    a = s !== N.OverlayNotificationPositions.DISABLED,
                    n = T.default.getOverlayKeybind(),
                    l = T.default.getOverlayChatKeybind();
                return {
                    enabled: m.default.enabled,
                    notifications_enabled: a,
                    notifications_position: a ? s : null,
                    text_notifications_mode: _.default.getTextChatNotificationMode(),
                    hotkey: null != n ? (0, I.toString)(n.shortcut) : null,
                    text_activation_hotkey: null != l ? (0, I.toString)(l.shortcut) : null,
                    text_opacity_slider: _.default.getTextWidgetOpacity(),
                    old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : m.default.enabled
                }
            }

            function x(e) {
                let {
                    children: t,
                    title: s
                } = e;
                return (0, a.jsx)(d.FormItem, {
                    title: s,
                    className: C.userSettingsOverlayField,
                    children: t
                })
            }

            function R() {
                let e = (0, o.useStateFromStores)([m.default], () => m.default.enabled),
                    {
                        avatarSizeMode: t,
                        displayNameMode: s,
                        displayUserMode: n,
                        notificationPositionMode: i,
                        textChatNotificationMode: I,
                        shouldShowKeybindIndicators: R
                    } = (0, o.useStateFromStoresObject)([_.default], () => ({
                        avatarSizeMode: _.default.getAvatarSizeMode(),
                        displayNameMode: _.default.getDisplayNameMode(),
                        displayUserMode: _.default.getDisplayUserMode(),
                        notificationPositionMode: _.default.getNotificationPositionMode(),
                        textChatNotificationMode: _.default.getTextChatNotificationMode(),
                        shouldShowKeybindIndicators: _.default.showKeybindIndicators
                    })),
                    M = (0, o.useStateFromStores)([T.default], () => T.default.getOverlayKeybind()),
                    {
                        showKeybindIndicators: v
                    } = f.default.useExperiment({
                        location: "overlay_user_settings"
                    }),
                    D = (0, E.isHookModuleTooOld)();
                return ! function() {
                    let e = O(A);
                    !r.isEqual(e, A) && (h.default.track(N.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, e), A = e)
                }(), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(d.FormSection, {
                        tag: d.FormTitleTags.H1,
                        title: p.default.Messages.OVERLAY,
                        children: [!1, (0, a.jsxs)("div", {
                            className: C.enableOverlaySection,
                            children: [(0, a.jsx)(d.FormItem, {
                                title: p.default.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
                                className: C.enableOverlayItem,
                                children: (0, a.jsx)(d.FormSwitch, {
                                    className: C.enableSwitch,
                                    value: e,
                                    disabled: D,
                                    note: D ? p.default.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
                                    hideBorder: !0,
                                    onChange: function(e) {
                                        c.default.setEnabled(e), h.default.track(N.AnalyticEvents.OVERLAY_TOGGLED, {
                                            enabled: e,
                                            setting_type: "overlay toggled - global"
                                        })
                                    },
                                    children: p.default.Messages.ENABLE_INGAME_OVERLAY
                                })
                            }), (0, a.jsx)(d.FormItem, {
                                title: p.default.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK,
                                className: C.enableOverlayItem,
                                children: (0, a.jsx)(S.default, {
                                    disabled: !e,
                                    defaultValue: null != M ? M.shortcut : [],
                                    onChange: function(e) {
                                        l(null != M, "Keybind should never be undefined"), u.default.setKeybind({
                                            ...M,
                                            shortcut: e
                                        })
                                    }
                                })
                            })]
                        }), (0, a.jsx)(x, {
                            title: p.default.Messages.FORM_LABEL_AVATAR_SIZE,
                            children: (0, a.jsx)(d.RadioGroup, {
                                options: [{
                                    name: p.default.Messages.AVATAR_SIZE_OPTION_LARGE,
                                    value: N.OverlayAvatarSizes.LARGE
                                }, {
                                    name: p.default.Messages.AVATAR_SIZE_OPTION_SMALL,
                                    value: N.OverlayAvatarSizes.SMALL
                                }],
                                onChange: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return c.default.setAvatarSizeMode(t)
                                },
                                value: t
                            })
                        }), (0, a.jsx)(x, {
                            title: p.default.Messages.FORM_LABEL_DISPLAY_NAMES,
                            children: (0, a.jsx)(d.RadioGroup, {
                                options: [{
                                    name: p.default.Messages.DISPLAY_OPTION_ALWAYS,
                                    value: N.OverlayDisplayNames.ALWAYS
                                }, {
                                    name: p.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
                                    value: N.OverlayDisplayNames.ONLY_WHILE_SPEAKING
                                }, {
                                    name: p.default.Messages.DISPLAY_OPTION_NEVER,
                                    value: N.OverlayDisplayNames.NEVER
                                }],
                                onChange: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return c.default.setDisplayNameMode(t)
                                },
                                value: s
                            })
                        }), (0, a.jsx)(x, {
                            title: p.default.Messages.FORM_LABEL_DISPLAY_USERS,
                            children: (0, a.jsx)(d.RadioGroup, {
                                options: [{
                                    name: p.default.Messages.DISPLAY_OPTION_ALWAYS,
                                    value: N.OverlayDisplayUsers.ALWAYS
                                }, {
                                    name: p.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
                                    value: N.OverlayDisplayUsers.ONLY_WHILE_SPEAKING
                                }],
                                onChange: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return c.default.setDisplayUserMode(t)
                                },
                                value: n
                            })
                        }), v && (0, a.jsx)(x, {
                            children: (0, a.jsx)(d.FormSwitch, {
                                value: R,
                                onChange: e => c.default.setShowKeybindIndicators(e),
                                hideBorder: !0,
                                children: p.default.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
                            })
                        })]
                    }), (0, a.jsxs)(d.FormSection, {
                        tag: d.FormTitleTags.H1,
                        title: p.default.Messages.OVERLAY_NOTIFICATIONS_SETTINGS,
                        className: C.notificationSection,
                        children: [(0, a.jsx)(x, {
                            title: p.default.Messages.FORM_LABEL_NOTIFICATION_POSITION,
                            children: (0, a.jsx)("div", {
                                className: C.notificationSettings,
                                children: (0, a.jsx)(g.default, {
                                    position: i,
                                    onChange: (e, t) => c.default.setNotificationPositionMode(t)
                                })
                            })
                        }), (0, a.jsx)(x, {
                            children: (0, a.jsx)(d.FormSwitch, {
                                value: i !== N.OverlayNotificationPositions.DISABLED && I === N.OverlayNotificationTextChatTypes.ENABLED,
                                disabled: i === N.OverlayNotificationPositions.DISABLED,
                                onChange: function() {
                                    let {
                                        ENABLED: e,
                                        DISABLED: t
                                    } = N.OverlayNotificationTextChatTypes;
                                    c.default.setTextChatNotificationMode(I === e ? t : e)
                                },
                                hideBorder: !0,
                                children: p.default.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
                            })
                        })]
                    })]
                })
            }