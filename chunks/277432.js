            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            }), n("222007"), n("424973");
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                o = n("95410"),
                s = n("77078"),
                a = n("430568"),
                u = n("901582"),
                d = n("679653"),
                c = n("419830"),
                E = n("86678"),
                _ = n("145106"),
                f = n("385976"),
                I = n("42203"),
                S = n("923959"),
                N = n("27618"),
                T = n("697218"),
                h = n("882641"),
                p = n("145131"),
                A = n("476765"),
                C = n("593195"),
                R = n("991170"),
                L = n("59811"),
                v = n("310457"),
                g = n("805828"),
                m = n("49111"),
                O = n("958706"),
                D = n("782340"),
                U = n("306978"),
                P = e => {
                    var t, n;
                    let {
                        guildId: P,
                        welcomeChannel: M,
                        transitionState: y,
                        onSave: G,
                        onClose: b
                    } = e, x = (0, A.useUID)(), [w, F] = r.useState(null != M ? M.channel_id : null), [V, B] = r.useState(null != M ? M.description : ""), [H, j] = r.useState(null != M ? {
                        id: M.emoji_id,
                        name: M.emoji_name
                    } : null), [k, W] = r.useState(!1), Y = (0, l.useStateFromStores)([f.default], () => (null == H ? void 0 : H.id) != null ? f.default.getUsableCustomEmojiById(H.id) : null), K = (0, l.useStateFromStores)([S.default], () => S.default.getChannels(P)[S.GUILD_SELECTABLE_CHANNELS_KEY], [P]), Z = (0, l.useStateFromStores)([L.default], () => L.default.get(P)), z = null !== (n = null == Z ? void 0 : null === (t = Z.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [X, q] = r.useState(!1);
                    r.useEffect(() => {
                        !o.default.get(g.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => q(!0), 300)
                    }, []);
                    let Q = [];
                    K.forEach(e => {
                        let {
                            channel: t
                        } = e;
                        R.default.canEveryoneRole(m.Permissions.VIEW_CHANNEL, t) && ((null == M ? void 0 : M.channel_id) === t.id || !z.includes(t.id)) && Q.push({
                            value: t.id,
                            label: (0, d.computeChannelName)(t, T.default, N.default)
                        })
                    });
                    let J = () => {
                            q(!1), b()
                        },
                        $ = r.useCallback(e => B(e), []),
                        ee = e => {
                            var t, n, i;
                            if (null == e) {
                                j(null);
                                return
                            }
                            j(null != e.id ? {
                                id: null !== (t = e.id) && void 0 !== t ? t : null,
                                name: null !== (n = e.name) && void 0 !== n ? n : null
                            } : {
                                id: null,
                                name: null !== (i = e.optionallyDiverseSequence) && void 0 !== i ? i : null
                            })
                        },
                        et = r.useCallback(() => {
                            o.default.set(g.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), q(!1)
                        }, []);
                    return (0, i.jsx)(u.default, {
                        page: m.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
                        children: (0, i.jsxs)(s.ModalRoot, {
                            transitionState: y,
                            "aria-labelledby": x,
                            children: [(0, i.jsxs)("div", {
                                className: U.modalContents,
                                children: [(0, i.jsx)(s.ModalCloseButton, {
                                    onClick: J,
                                    className: U.closeButton
                                }), (0, i.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: U.headerText,
                                    id: x,
                                    children: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
                                }), (0, i.jsxs)(s.FormSection, {
                                    className: U.formGroup,
                                    children: [(0, i.jsx)(s.SearchableSelect, {
                                        options: Q,
                                        onChange: e => F(e),
                                        value: w,
                                        renderOptionPrefix: e => {
                                            var t;
                                            if (null === e) return null;
                                            let n = e.value,
                                                r = I.default.getChannel(n),
                                                l = null !== (t = (0, c.getChannelIconComponent)(r)) && void 0 !== t ? t : C.default;
                                            return (0, i.jsx)(l, {
                                                className: U.channelTitleIcon,
                                                width: 16,
                                                height: 16
                                            })
                                        }
                                    }), (0, i.jsx)(s.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: U.formDescription,
                                        children: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
                                    })]
                                }), (0, i.jsx)(s.FormDivider, {}), (0, i.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: U.headerText,
                                    children: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
                                }), (0, i.jsx)(s.FormSection, {
                                    className: U.formGroup,
                                    children: (0, i.jsx)(s.TextInput, {
                                        maxLength: 42,
                                        value: V,
                                        inputClassName: U.input,
                                        placeholder: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
                                        onChange: $
                                    })
                                }), (0, i.jsx)(s.FormDivider, {}), (0, i.jsx)(s.FormSection, {
                                    className: U.formGroup,
                                    children: (0, i.jsxs)("div", {
                                        className: U.emojiSectionContainer,
                                        children: [(0, i.jsxs)("div", {
                                            className: U.emojiTitleContainer,
                                            children: [(0, i.jsx)(s.Heading, {
                                                variant: "heading-md/semibold",
                                                children: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                                            }), (0, i.jsx)(s.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                                            })]
                                        }), (0, i.jsx)(_.default, {
                                            hasSetEmoji: null != H,
                                            onClick: ee,
                                            children: (0, i.jsx)(s.Popout, {
                                                renderPopout: e => {
                                                    let {
                                                        closePopout: t
                                                    } = e, n = S.default.getDefaultChannel(P);
                                                    return (0, i.jsx)(E.default, {
                                                        guildId: P,
                                                        closePopout: t,
                                                        onSelectEmoji: (e, n) => {
                                                            ee(e), n && (t(), null == e && J())
                                                        },
                                                        pickerIntention: O.EmojiIntention.COMMUNITY_CONTENT,
                                                        onNavigateAway: J,
                                                        channel: n
                                                    })
                                                },
                                                position: "left",
                                                animation: s.Popout.Animation.NONE,
                                                align: "bottom",
                                                children: (e, t) => {
                                                    let {
                                                        isShown: n
                                                    } = t;
                                                    return (0, i.jsx)(s.TooltipContainer, {
                                                        color: s.TooltipColors.BRAND,
                                                        tooltipClassName: U.tooltip,
                                                        position: "left",
                                                        text: X ? D.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                                                        forceOpen: X,
                                                        children: (0, i.jsx)(h.default, {
                                                            ...e,
                                                            onClick: t => {
                                                                var n;
                                                                et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                                                            },
                                                            active: n,
                                                            className: U.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: null != H && (null != H.id || null != H.name) ? () => (0, i.jsx)(a.default, {
                                                                className: U.emoji,
                                                                emojiId: H.id,
                                                                emojiName: H.name,
                                                                animated: !!(null == Y ? void 0 : Y.animated)
                                                            }) : null
                                                        })
                                                    })
                                                }
                                            })
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)(s.ModalFooter, {
                                className: U.footer,
                                justify: p.default.Justify.BETWEEN,
                                children: [(0, i.jsxs)(p.default, {
                                    grow: 0,
                                    align: p.default.Align.CENTER,
                                    children: [(0, i.jsx)(s.Button, {
                                        onClick: J,
                                        size: s.Button.Sizes.SMALL,
                                        look: s.Button.Looks.LINK,
                                        color: s.Button.Colors.PRIMARY,
                                        children: D.default.Messages.CANCEL
                                    }), (0, i.jsx)(s.Button, {
                                        onClick: () => {
                                            null != w && V.length > 0 && G({
                                                channel_id: w,
                                                description: V,
                                                emoji_id: null == H ? void 0 : H.id,
                                                emoji_name: null == H ? void 0 : H.name
                                            }), J()
                                        },
                                        disabled: null == w || 0 === V.length,
                                        children: D.default.Messages.SAVE
                                    })]
                                }), null != M && (0, i.jsx)(s.Button, {
                                    onClick: () => {
                                        W(!0)
                                    },
                                    size: s.Button.Sizes.MIN,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.RED,
                                    children: D.default.Messages.REMOVE
                                })]
                            }), k && (0, i.jsx)(v.default, {
                                onConfirm: () => {
                                    G(), J()
                                },
                                onCancel: () => W(!1),
                                channelId: w
                            })]
                        })
                    })
                }