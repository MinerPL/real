            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return B
                }
            }), s("222007"), s("424973");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("714617"),
                o = s.n(r),
                d = s("476042"),
                u = s("446674"),
                c = s("77078"),
                E = s("272030"),
                _ = s("430568"),
                T = s("206230"),
                I = s("679653"),
                S = s("419830"),
                N = s("385976"),
                g = s("233706"),
                f = s("223170"),
                A = s("478964"),
                L = s("310457"),
                m = s("42203"),
                C = s("580357"),
                O = s("476263"),
                h = s("37785"),
                R = s("593195"),
                D = s("315585"),
                M = s("599110"),
                G = s("991170"),
                x = s("592407"),
                p = s("369158"),
                U = s("49111"),
                v = s("843455"),
                j = s("782340"),
                P = s("244317");
            let y = "WELCOME_CHANNEL",
                b = e => {
                    var t;
                    let l, {
                            guildId: r,
                            welcomeChannel: o,
                            onEdit: T,
                            onChannelReorder: f,
                            isDropHovered: A,
                            index: C
                        } = e,
                        [O, h] = n.useState(!1),
                        M = n.useRef(null),
                        x = (0, u.useStateFromStores)([m.default], () => m.default.getChannel(o.channel_id)),
                        p = (0, u.useStateFromStores)([N.default], () => null != o.emoji_id ? N.default.getUsableCustomEmojiById(o.emoji_id) : null),
                        b = null != x && G.default.canEveryoneRole(U.Permissions.VIEW_CHANNEL, x),
                        B = null !== (t = (0, S.getChannelIconComponent)(x)) && void 0 !== t ? t : R.default,
                        F = (0, I.default)(x, !1),
                        {
                            homeSettingsEnabled: H
                        } = (0, g.useOnboardingHomeAdminExperiment)(r),
                        [, V] = (0, d.useDrag)({
                            type: y,
                            item: {
                                channel: o,
                                index: C
                            },
                            end: (e, t) => {
                                null != e && !t.didDrop() && f(e.channel, null, !0)
                            }
                        }),
                        [, w] = (0, d.useDrop)({
                            accept: y,
                            hover: e => {
                                f(e.channel, C, !1)
                            },
                            drop: e => {
                                f(e.channel, C, !0)
                            }
                        });
                    return n.useLayoutEffect(() => (V(w(M)), () => {
                        V(null), w(null)
                    }), [V, w]), l = b ? null != p || null != o.emoji_name ? (0, a.jsx)(_.default, {
                        emojiId: null == p ? void 0 : p.id,
                        emojiName: null != p ? p.name : o.emoji_name,
                        animated: !!(null == p ? void 0 : p.animated)
                    }) : (0, a.jsx)(B, {
                        width: 24,
                        height: 24,
                        className: P.channelIcon
                    }) : (0, a.jsx)(D.default, {
                        width: 24,
                        height: 24,
                        className: P.warningIcon
                    }), (0, a.jsxs)("div", {
                        className: i(P.welcomeChannel, {
                            [P.dragging]: A
                        }),
                        ref: M,
                        "data-dnd-name": o.description,
                        onContextMenu: e => {
                            (0, E.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await s.el("824527").then(s.bind(s, "824527"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    guildId: r,
                                    welcomeChannel: o,
                                    onChannelReorder: f,
                                    setShowConfirmModal: h,
                                    onEdit: T,
                                    index: C
                                })
                            })
                        },
                        children: [l, (0, a.jsxs)("div", {
                            className: P.channelDescriptionWrapper,
                            children: [(0, a.jsx)(c.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: o.description
                            }), (0, a.jsxs)(c.Text, {
                                className: b ? void 0 : P.channelWarning,
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: [(0, a.jsx)(B, {
                                    className: P.channelTitleIcon,
                                    width: 12,
                                    height: 12
                                }), (0, a.jsx)("span", {
                                    children: b ? F : j.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INVALID_CHANNEL
                                })]
                            })]
                        }), (0, a.jsx)(c.Button, {
                            color: c.Button.Colors.PRIMARY,
                            size: c.Button.Sizes.SMALL,
                            disabled: H,
                            onClick: () => (0, c.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await s.el("277432").then(s.bind(s, "277432"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    welcomeChannel: o,
                                    guildId: r,
                                    onSave: T
                                })
                            }, {
                                onCloseRequest: () => v.NOOP_NULL
                            }),
                            children: j.default.Messages.EDIT
                        }), O && (0, a.jsx)(L.default, {
                            onConfirm: () => T(),
                            onCancel: () => h(!1),
                            channelId: o.channel_id
                        })]
                    })
                };
            var B = e => {
                var t;
                let {
                    guild: l,
                    showCreateModal: i
                } = e, {
                    welcomeSettings: r,
                    originalWelcomeSettings: d
                } = (0, u.useStateFromStores)([A.default], () => A.default.getSettingsProps()), E = (0, u.useStateFromStores)([T.default], () => T.default.useReducedMotion), [_, I] = n.useState(null), [S, N] = n.useState(!1), [L, m] = n.useState(!1), {
                    description: R,
                    channels: G,
                    enabled: y
                } = r, {
                    homeSettingsEnabled: B
                } = (0, g.useOnboardingHomeAdminExperiment)(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : ""), F = () => {
                    if (null != l) R !== d.description && ((0, f.saveWelcomeScreen)(l.id, {
                        description: null == R ? void 0 : R.trim()
                    }), N(!0))
                }, H = e => {
                    if (null != l) !o(e, d.channels) && ((0, f.saveWelcomeScreen)(l.id, {
                        channels: e
                    }), N(!0))
                }, V = e => {
                    if (null != l) e !== d.enabled && ((0, f.saveWelcomeScreen)(l.id, {
                        enabled: e
                    }), m(!E), N(!0))
                }, w = e => {
                    if (null == e) return;
                    let t = [...null != G ? G : [], e];
                    (0, f.updateSettings)({
                        channels: t
                    }), H(t)
                }, k = e => t => {
                    let s = [...null != G ? G : []];
                    null == t ? s.splice(e, 1) : s[e] = t, (0, f.updateSettings)({
                        channels: s
                    }), H(s), 0 === s.length && y && ((0, f.updateSettings)({
                        enabled: !1
                    }), V(!1))
                }, Y = (e, t, s) => {
                    if (null == G) return;
                    let a = G.indexOf(e),
                        n = [...G];
                    null != t && t !== a && (n.splice(a, 1), n.splice(t, 0, e), (0, f.updateSettings)({
                        channels: n
                    })), s ? (H(n), I(null)) : I(t)
                }, K = n.useRef(!1);
                n.useEffect(() => (null != l && i && (0, c.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await s.el("277432").then(s.bind(s, "277432"));
                    return t => (0, a.jsx)(e, {
                        ...t,
                        guildId: l.id,
                        onSave: w
                    })
                }, {
                    onCloseRequest: () => v.NOOP_NULL
                }), () => {
                    K.current = !0
                }), []), n.useEffect(() => () => {
                    if (K.current && S) {
                        let e = [],
                            t = [],
                            s = !1;
                        null == G || G.forEach(a => {
                            e.push(a.description), t.push(a.channel_id), null != a.emoji_id && (s = !0)
                        }), M.default.track(U.AnalyticEvents.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                            guild_id: null == l ? void 0 : l.id,
                            options: e,
                            options_channel_ids: t,
                            guild_description: R,
                            has_custom_emojis: s,
                            is_enabled: y
                        })
                    }
                }, [S, G, R, y, l, K]), n.useEffect(() => () => (0, f.clearWelcomeScreenSettings)(), []);
                let W = n.useCallback(() => {
                    null != l && x.default.open(l.id, U.GuildSettingsSections.ONBOARDING)
                }, [l]);
                return null == l ? null : (0, a.jsxs)(c.FormSection, {
                    title: j.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
                    tag: c.FormTitleTags.H1,
                    children: [B && (0, a.jsx)("div", {
                        className: P.notice,
                        children: (0, a.jsxs)(c.Text, {
                            variant: "text-md/normal",
                            children: [(0, a.jsx)(D.default, {
                                className: P.noticeIcon
                            }), j.default.Messages.WELCOME_SCREEN_DEPRECATED.format({
                                onboardingLink: e => (0, a.jsx)(h.default, {
                                    onClick: W,
                                    children: e
                                })
                            })]
                        })
                    }), (0, a.jsx)(c.Text, {
                        className: P.description,
                        variant: "text-sm/normal",
                        children: j.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SETTINGS_TEXT
                    }), (0, a.jsx)(p.default, {
                        enabled: y,
                        onPreview: (null == G ? void 0 : G.length) === 0 ? void 0 : () => {
                            null != l && (0, c.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await s.el("900257").then(s.bind(s, "900257"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    guildId: l.id,
                                    isPreview: !0
                                })
                            })
                        },
                        onToggle: y || (null == G ? void 0 : G.length) !== 0 ? () => {
                            V(!y)
                        } : void 0,
                        animateStatus: L,
                        firstLine: y ? j.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLED : j.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PROGRESS_WILL_SAVE,
                        secondLine: y ? j.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLED_SECOND_LINE : j.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLE_REMINDER
                    }), (0, a.jsxs)("div", {
                        className: P.previewContainer,
                        children: [(0, a.jsxs)("div", {
                            className: P.welcomeHeader,
                            children: [(0, a.jsx)(O.default, {
                                size: O.default.Sizes.LARGER,
                                className: P.icon,
                                guild: l,
                                animate: !0,
                                tabIndex: -1
                            }), (0, a.jsx)(c.Heading, {
                                className: P.welcomeTitle,
                                variant: "heading-xl/semibold",
                                children: j.default.Messages.WELCOME_SCREEN_TITLE.format({
                                    guildName: l.name,
                                    guildNameHook: (e, t) => (0, a.jsxs)("span", {
                                        children: [(0, a.jsx)(C.default, {
                                            guild: l,
                                            className: P.headerGuildBadge,
                                            flowerStarClassName: P.flowerStar
                                        }), (0, a.jsx)("strong", {
                                            children: e
                                        })]
                                    }, t)
                                })
                            }), (0, a.jsx)("div", {
                                className: P.descriptionWrapper,
                                children: (0, a.jsx)(c.TextArea, {
                                    className: P.descriptionInput,
                                    placeholder: j.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_DESCRIPTION_PLACEHOLDER,
                                    onChange: e => {
                                        (0, f.updateSettings)({
                                            description: e
                                        })
                                    },
                                    onBlur: () => {
                                        F()
                                    },
                                    onKeyDown: e => {
                                        e.keyCode === U.KeyboardKeys.ENTER && e.preventDefault()
                                    },
                                    value: R,
                                    maxLength: 140,
                                    disabled: B
                                })
                            })]
                        }), (0, a.jsx)(c.FormDivider, {
                            className: P.divider
                        }), (0, a.jsxs)("div", {
                            className: P.welcomeChannels,
                            children: [(0, a.jsx)(c.FormTitle, {
                                children: j.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_RECOMMENDED_CHANNELS_TITLE
                            }), (0, a.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                className: P.addChannelSubtext,
                                children: j.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_RECOMMENDED_CHANNELS_DESCRIPTION
                            }), null == G ? void 0 : G.map((e, t) => (0, a.jsx)(b, {
                                guildId: l.id,
                                welcomeChannel: e,
                                onEdit: k(t),
                                onChannelReorder: Y,
                                isDropHovered: t === _,
                                index: t
                            }, t)), (null == G || G.length < 5) && (0, a.jsx)(c.Button, {
                                onClick: () => (0, c.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await s.el("277432").then(s.bind(s, "277432"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        guildId: l.id,
                                        onSave: w
                                    })
                                }, {
                                    onCloseRequest: () => v.NOOP_NULL
                                }),
                                className: P.addChannelButton,
                                disabled: B,
                                color: c.Button.Colors.PRIMARY,
                                children: j.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ADD_RECOMMENDED_CHANNEL
                            })]
                        })]
                    })]
                })
            }