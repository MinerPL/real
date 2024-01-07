            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return H
                }
            }), s("222007"), s("424973");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                o = s.n(r),
                d = s("446674"),
                u = s("669491"),
                c = s("77078"),
                S = s("913139"),
                E = s("133403"),
                f = s("278108"),
                m = s("347445"),
                T = s("493765"),
                _ = s("485328"),
                g = s("56947"),
                h = s("479788"),
                I = s("42887"),
                N = s("227602"),
                p = s("860957"),
                C = s("941886"),
                A = s("145131"),
                O = s("555158"),
                x = s("701909"),
                M = s("773336"),
                R = s("13798"),
                v = s("161778"),
                L = s("264278"),
                D = s("49111"),
                P = s("894282"),
                j = s("782340"),
                b = s("371742"),
                U = s("405879"),
                y = s("926622");

            function B(e) {
                let {
                    children: t
                } = e, s = [T.KeybindGroup.MESSAGE, T.KeybindGroup.NAVIGATION, T.KeybindGroup.DND, T.KeybindGroup.CHAT, T.KeybindGroup.VOICE_AND_VIDEO, T.KeybindGroup.MISCELLANEOUS];
                return t(s)
            }
            let F = o((0, T.getDefaultLayoutContent)()).filter(e => e.description !== j.default.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG).groupBy(e => e.group).value(),
                G = d.default.connectStores([v.default], () => ({
                    theme: v.default.theme
                }))(C.default);
            class k extends n.PureComponent {
                renderMessage() {
                    let {
                        keybind: e
                    } = this.props, t = R.toString(e.shortcut);
                    return _.default.hasBind(t) ? (0, a.jsx)(c.FormText, {
                        className: b.keybindMessage,
                        type: c.FormTextTypes.DESCRIPTION,
                        style: {
                            color: u.default.unsafe_rawColors.RED_400.css
                        },
                        children: j.default.Messages.KEYBIND_CONFLICT
                    }) : P.NavigationShortcuts.has(t) ? (0, a.jsx)(c.FormText, {
                        className: b.keybindMessage,
                        type: c.FormTextTypes.DESCRIPTION,
                        style: {
                            color: u.default.unsafe_rawColors.RED_400.css
                        },
                        children: j.default.Messages.KEYBIND_NAVIGATION_CONFLICT.format({
                            keyboardNavArticle: x.default.getArticleURL(D.HelpdeskArticles.KEYBOARD_NAVIGATION)
                        })
                    }) : (0, a.jsx)(c.FormText, {
                        className: b.keybindMessage,
                        type: c.FormTextTypes.DESCRIPTION,
                        children: this.props.keybindDescriptions[e.action]
                    })
                }
                render() {
                    let {
                        managed: e,
                        enabled: t
                    } = this.props.keybind;
                    return (0, a.jsxs)(A.default, {
                        direction: A.default.Direction.VERTICAL,
                        className: i(b.keybindGroup, U.card),
                        children: [!e && (0, a.jsx)(E.default, {
                            "aria-label": j.default.Messages.REMOVE_KEYBIND,
                            className: b.removeKeybind,
                            onClick: this.handleDeleteKeybind,
                            look: E.default.Looks.FILLED
                        }), (0, a.jsxs)(A.default, {
                            className: y.marginBottom8,
                            children: [(0, a.jsx)(A.default.Child, {
                                basis: "45%",
                                children: (0, a.jsx)(c.FormItem, {
                                    title: j.default.Messages.USER_SETTINGS_KEYBINDS_ACTION,
                                    className: b.item,
                                    children: (0, a.jsx)(c.SingleSelect, {
                                        value: this.props.keybind.action,
                                        options: this.props.keybindActionTypes,
                                        onChange: this.handleActionChanged,
                                        isDisabled: e
                                    })
                                })
                            }), (0, a.jsx)(A.default.Child, {
                                basis: "45%",
                                children: (0, a.jsx)(c.FormItem, {
                                    title: j.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
                                    className: b.item,
                                    children: (0, a.jsx)(f.default, {
                                        defaultValue: this.props.keybind.shortcut,
                                        onChange: this.handleShortcutChange
                                    })
                                })
                            }), (0, a.jsx)(A.default.Child, {
                                grow: 0,
                                shrink: 0,
                                children: (0, a.jsx)(c.FormItem, {
                                    className: b.switch,
                                    children: (0, a.jsx)(c.Tooltip, {
                                        text: j.default.Messages.USER_SETTINGS_KEYBIND_ENABLE_DISABLE,
                                        children: e => (0, a.jsx)("div", {
                                            ...e,
                                            children: (0, a.jsx)(c.Switch, {
                                                checked: t,
                                                onChange: this.handleEnableDisable
                                            })
                                        })
                                    })
                                })
                            })]
                        }), (0, a.jsx)(A.default.Child, {
                            children: this.renderMessage()
                        }), this.renderExtraSettings()]
                    })
                }
                renderExtraSettings() {
                    let {
                        action: e
                    } = this.props.keybind;
                    if (e === D.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL) return (0, a.jsx)(L.default, {
                        keybind: this.props.keybind
                    })
                }
                constructor(...e) {
                    super(...e), this.handleActionChanged = e => {
                        S.default.setKeybind({
                            ...this.props.keybind,
                            action: e
                        })
                    }, this.handleShortcutChange = e => {
                        S.default.setKeybind({
                            ...this.props.keybind,
                            shortcut: e
                        })
                    }, this.handleDeleteKeybind = () => {
                        S.default.deleteKeybind(this.props.keybind.id)
                    }, this.handleEnableDisable = () => {
                        let {
                            keybind: e
                        } = this.props;
                        S.default.setKeybind({
                            ...this.props.keybind,
                            enabled: !e.enabled
                        })
                    }
                }
            }
            class w extends n.PureComponent {
                componentDidMount() {
                    S.default.enableAll(!1)
                }
                componentWillUnmount() {
                    S.default.enableAll(!0)
                }
                get keybindActionTypes() {
                    let {
                        overlaySupported: e,
                        canGoLive: t,
                        allowSoundboard: s,
                        enableClips: a
                    } = this.props, n = [{
                        value: D.GlobalKeybindActions.UNASSIGNED,
                        label: j.default.Messages.KEYBIND_UNASSIGNED
                    }, {
                        value: D.GlobalKeybindActions.PUSH_TO_TALK,
                        label: j.default.Messages.KEYBIND_PUSH_TO_TALK
                    }, {
                        value: D.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY,
                        label: j.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY
                    }, {
                        value: D.GlobalKeybindActions.PUSH_TO_MUTE,
                        label: j.default.Messages.KEYBIND_PUSH_TO_MUTE
                    }, {
                        value: D.GlobalKeybindActions.TOGGLE_MUTE,
                        label: j.default.Messages.KEYBIND_TOGGLE_MUTE
                    }, {
                        value: D.GlobalKeybindActions.TOGGLE_DEAFEN,
                        label: j.default.Messages.KEYBIND_TOGGLE_DEAFEN
                    }, {
                        value: D.GlobalKeybindActions.TOGGLE_VOICE_MODE,
                        label: j.default.Messages.KEYBIND_TOGGLE_VOICE_MODE
                    }, {
                        value: D.GlobalKeybindActions.TOGGLE_STREAMER_MODE,
                        label: j.default.Messages.KEYBIND_TOGGLE_STREAM_MODE
                    }];
                    return e && (n.push({
                        value: D.GlobalKeybindActions.TOGGLE_OVERLAY,
                        label: j.default.Messages.KEYBIND_TOGGLE_OVERLAY
                    }), n.push({
                        value: D.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK,
                        label: j.default.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK
                    }), n.push({
                        value: D.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                        label: j.default.Messages.KEYBIND_ACTIVATE_OVERLAY_CHAT
                    })), t && (0, M.isWindows)() && n.push({
                        value: D.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING,
                        label: j.default.Messages.KEYBIND_TOGGLE_GO_LIVE_STREAMING
                    }), (0, M.isDesktop)() && (n.push({
                        value: D.GlobalKeybindActions.NAVIGATE_BACK,
                        label: j.default.Messages.KEYBIND_NAVIGATE_BACK
                    }, {
                        value: D.GlobalKeybindActions.NAVIGATE_FORWARD,
                        label: j.default.Messages.KEYBIND_NAVIGATE_FORWARD
                    }, {
                        value: D.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL,
                        label: j.default.Messages.USER_SETTINGS_KEYBINDS_SWITCH_TO_VOICE_CHANNEL_LABEL
                    }, {
                        value: D.GlobalKeybindActions.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: j.default.Messages.USER_SETTINGS_KEYBINDS_VOICE_CHANNEL_DISCONNECT_LABEL
                    }), s && n.push({
                        value: D.GlobalKeybindActions.SOUNDBOARD,
                        label: j.default.Messages.KEYBIND_SOUNDBOARD
                    }, {
                        value: D.GlobalKeybindActions.SOUNDBOARD_HOLD,
                        label: j.default.Messages.KEYBIND_SOUNDBOARD_HOLD
                    }), a && n.push({
                        value: D.GlobalKeybindActions.SAVE_CLIP,
                        label: j.default.Messages.CLIPS_SAVE
                    })), n
                }
                get keybindDescriptions() {
                    let {
                        overlaySupported: e,
                        canGoLive: t,
                        enableClips: s
                    } = this.props, a = {
                        [D.GlobalKeybindActions.UNASSIGNED]: j.default.Messages.KEYBIND_DESCRIPTION_UNASSIGNED,
                        [D.GlobalKeybindActions.PUSH_TO_MUTE]: j.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_MUTE,
                        [D.GlobalKeybindActions.PUSH_TO_TALK]: j.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK,
                        [D.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY]: j.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK_PRIORITY,
                        [D.GlobalKeybindActions.TOGGLE_MUTE]: j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_MUTE,
                        [D.GlobalKeybindActions.TOGGLE_DEAFEN]: j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_DEAFEN,
                        [D.GlobalKeybindActions.TOGGLE_VOICE_MODE]: j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE,
                        [D.GlobalKeybindActions.TOGGLE_STREAMER_MODE]: j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE
                    };
                    return e && (a[D.GlobalKeybindActions.TOGGLE_OVERLAY] = j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY, a[D.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK] = j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK), t && (0, M.isWindows)() && (a[D.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING] = j.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_GO_LIVE_STREAMING), (0, M.isDesktop)() && (a[D.GlobalKeybindActions.NAVIGATE_BACK] = j.default.Messages.KEYBIND_DESCRIPTION_NAVIGATE_BACK, a[D.GlobalKeybindActions.NAVIGATE_FORWARD] = j.default.Messages.KEYBIND_DESCRIPTION_NAVIGATE_FORWARD, a[D.GlobalKeybindActions.SOUNDBOARD] = (0, M.isWindows)() ? j.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_NO_POPOUT_WHEEL_SUPPORT : j.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD, a[D.GlobalKeybindActions.SOUNDBOARD_HOLD] = (0, M.isWindows)() ? j.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD_NO_POPOUT_WHEEL_SUPPORT : j.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD, s && (a[D.GlobalKeybindActions.SAVE_CLIP] = j.default.Messages.CLIPS_KEYBIND_DESCRIPTION)), a
                }
                renderKeybinds(e) {
                    return e.map(e => (0, a.jsx)("div", {
                        className: b.row,
                        children: (0, a.jsx)(k, {
                            keybind: e,
                            keybindDescriptions: this.keybindDescriptions,
                            keybindActionTypes: this.keybindActionTypes
                        }, e.id)
                    }, e.id))
                }
                renderEmpty(e) {
                    if (0 === e.length) return (0, a.jsx)(G, {
                        className: y.marginTop60,
                        children: (0, a.jsx)(C.EmptyStateImage, {
                            darkSrc: s("605149"),
                            lightSrc: s("203017"),
                            width: 320,
                            height: 170
                        })
                    })
                }
                render() {
                    let e = this.props.enableClips,
                        t = o(this.props.keybinds).reject(e => e.managed && ![D.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, D.GlobalKeybindActions.SAVE_CLIP].includes(e.action)).reject(t => !e && t.action === D.GlobalKeybindActions.SAVE_CLIP).reject(e => !this.props.allowSoundboard && (e.action === D.GlobalKeybindActions.SOUNDBOARD || e.action === D.GlobalKeybindActions.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => !0 === e.managed ? -1 : 0).value();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(c.FormSection, {
                            tag: c.FormTitleTags.H1,
                            title: j.default.Messages.KEYBINDS,
                            children: M.isPlatformEmbedded ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsxs)(A.default, {
                                    justify: A.default.Justify.BETWEEN,
                                    className: y.marginBottom20,
                                    children: [(0, a.jsx)(A.default.Child, {
                                        grow: 0,
                                        children: (0, a.jsx)(O.default, {
                                            messageType: O.HelpMessageTypes.WARNING,
                                            children: j.default.Messages.ADD_KEYBIND_WARNING
                                        })
                                    }), (0, a.jsx)(A.default.Child, {
                                        wrap: !0,
                                        grow: 0,
                                        children: (0, a.jsx)(c.Button, {
                                            size: c.ButtonSizes.LARGE,
                                            onClick: this.handleAddKeybind,
                                            children: j.default.Messages.ADD_KEYBIND
                                        })
                                    })]
                                }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsxs)(c.FormSection, {
                                    children: [this.renderKeybinds(t), this.renderEmpty(t)]
                                })]
                            }) : (0, a.jsx)(O.default, {
                                messageType: O.HelpMessageTypes.INFO,
                                textVariant: "text-lg/medium",
                                className: b.browserNotice,
                                children: j.default.Messages.KEYBIND_IN_BROSWER_NOTICE.format({
                                    downloadLink: D.MarketingURLs.DOWNLOAD
                                })
                            })
                        }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsxs)(c.FormSection, {
                            tag: c.FormTitleTags.H1,
                            title: j.default.Messages.USER_SETTINGS_KEYBINDS_DEFAULT_KEYBINDS_TITLE,
                            className: y.marginTop60,
                            children: [(0, a.jsxs)("div", {
                                className: b.defaultKeybind,
                                children: [(0, a.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: j.default.Messages.USER_SETTINGS_KEYBINDS_SHOW_LIST_TITLE
                                }), (0, a.jsx)("div", {
                                    className: b.defaultKeybindShortcutGroup,
                                    children: (0, a.jsx)(c.KeyCombo, {
                                        shortcut: m.TOGGLE_HOTKEYS.binds[0],
                                        className: b.defaultKeybindShortcut
                                    })
                                })]
                            }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsx)(B, {
                                children: e => (0, a.jsx)(a.Fragment, {
                                    children: e.map((e, t) => {
                                        let s = (0, T.getNameForKeybindGroup)(e),
                                            l = (0, T.getDescriptionForKeybindGroup)(e),
                                            r = F[e];
                                        return (0, a.jsxs)("div", {
                                            className: b.defaultKeybindGroup,
                                            children: [(0, a.jsx)(c.Heading, {
                                                variant: "heading-deprecated-12/semibold",
                                                className: i(b.defaultKeybindGroupHeader, {
                                                    [b.defaultKeybindGroupWithDescription]: null != l
                                                }),
                                                children: s
                                            }), null != l && (0, a.jsx)(c.Text, {
                                                color: "header-secondary",
                                                className: b.defaultKeybindGroupDescription,
                                                variant: "text-sm/normal",
                                                children: l
                                            }), (0, a.jsx)(c.FormDivider, {}), r.map(e => (0, a.jsxs)(n.Fragment, {
                                                children: [(0, a.jsxs)("div", {
                                                    className: b.defaultKeybind,
                                                    children: [(0, a.jsx)(c.Text, {
                                                        variant: "text-md/normal",
                                                        children: e.description
                                                    }), (0, a.jsx)("div", {
                                                        className: b.defaultKeybindShortcutGroup,
                                                        children: e.binds.map(e => (0, a.jsx)(c.KeyCombo, {
                                                            shortcut: e
                                                        }, e))
                                                    })]
                                                }), (0, a.jsx)(c.FormDivider, {})]
                                            }, e.description))]
                                        }, t)
                                    })
                                })
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleAddKeybind = () => {
                        S.default.addKeybind()
                    }
                }
            }

            function H() {
                let e = (0, d.useStateFromStores)([N.default], () => N.default.getState()),
                    t = (0, d.useStateFromStores)([I.default], () => (0, h.default)(I.default)),
                    s = (0, d.useStateFromStores)([p.default], () => p.default.isSupported()),
                    n = (0, g.useEnableClips)();
                return (0, a.jsx)(w, {
                    keybinds: e,
                    canGoLive: t,
                    overlaySupported: s,
                    allowSoundboard: (0, M.isWindows)(),
                    enableClips: n
                })
            }