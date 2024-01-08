            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
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
                f = n("145106"),
                _ = n("385976"),
                I = n("42203"),
                S = n("923959"),
                h = n("27618"),
                p = n("697218"),
                N = n("882641"),
                T = n("145131"),
                C = n("476765"),
                A = n("593195"),
                v = n("991170"),
                g = n("59811"),
                m = n("310457"),
                R = n("805828"),
                L = n("49111"),
                O = n("958706"),
                D = n("782340"),
                U = n("306978"),
                M = e => {
                    var t, n;
                    let {
                        guildId: M,
                        welcomeChannel: P,
                        transitionState: y,
                        onSave: b,
                        onClose: x
                    } = e, w = (0, C.useUID)(), [G, F] = r.useState(null != P ? P.channel_id : null), [V, B] = r.useState(null != P ? P.description : ""), [H, j] = r.useState(null != P ? {
                        id: P.emoji_id,
                        name: P.emoji_name
                    } : null), [k, Y] = r.useState(!1), W = (0, l.useStateFromStores)([_.default], () => (null == H ? void 0 : H.id) != null ? _.default.getUsableCustomEmojiById(H.id) : null), K = (0, l.useStateFromStores)([S.default], () => S.default.getChannels(M)[S.GUILD_SELECTABLE_CHANNELS_KEY], [M]), Z = (0, l.useStateFromStores)([g.default], () => g.default.get(M)), z = null !== (n = null == Z ? void 0 : null === (t = Z.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [X, Q] = r.useState(!1);
                    r.useEffect(() => {
                        !o.default.get(R.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => Q(!0), 300)
                    }, []);
                    let q = [];
                    K.forEach(e => {
                        let {
                            channel: t
                        } = e;
                        v.default.canEveryoneRole(L.Permissions.VIEW_CHANNEL, t) && ((null == P ? void 0 : P.channel_id) === t.id || !z.includes(t.id)) && q.push({
                            value: t.id,
                            label: (0, d.computeChannelName)(t, p.default, h.default)
                        })
                    });
                    let J = () => {
                            Q(!1), x()
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
                            o.default.set(R.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), Q(!1)
                        }, []);
                    return (0, i.jsx)(u.default, {
                        page: L.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
                        children: (0, i.jsxs)(s.ModalRoot, {
                            transitionState: y,
                            "aria-labelledby": w,
                            children: [(0, i.jsxs)("div", {
                                className: U.modalContents,
                                children: [(0, i.jsx)(s.ModalCloseButton, {
                                    onClick: J,
                                    className: U.closeButton
                                }), (0, i.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: U.headerText,
                                    id: w,
                                    children: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
                                }), (0, i.jsxs)(s.FormSection, {
                                    className: U.formGroup,
                                    children: [(0, i.jsx)(s.SearchableSelect, {
                                        options: q,
                                        onChange: e => F(e),
                                        value: G,
                                        renderOptionPrefix: e => {
                                            var t;
                                            if (null === e) return null;
                                            let n = e.value,
                                                r = I.default.getChannel(n),
                                                l = null !== (t = (0, c.getChannelIconComponent)(r)) && void 0 !== t ? t : A.default;
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
                                        }), (0, i.jsx)(f.default, {
                                            hasSetEmoji: null != H,
                                            onClick: ee,
                                            children: (0, i.jsx)(s.Popout, {
                                                renderPopout: e => {
                                                    let {
                                                        closePopout: t
                                                    } = e, n = S.default.getDefaultChannel(M);
                                                    return (0, i.jsx)(E.default, {
                                                        guildId: M,
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
                                                        children: (0, i.jsx)(N.default, {
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
                                                                animated: !!(null == W ? void 0 : W.animated)
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
                                justify: T.default.Justify.BETWEEN,
                                children: [(0, i.jsxs)(T.default, {
                                    grow: 0,
                                    align: T.default.Align.CENTER,
                                    children: [(0, i.jsx)(s.Button, {
                                        onClick: J,
                                        size: s.Button.Sizes.SMALL,
                                        look: s.Button.Looks.LINK,
                                        color: s.Button.Colors.PRIMARY,
                                        children: D.default.Messages.CANCEL
                                    }), (0, i.jsx)(s.Button, {
                                        onClick: () => {
                                            null != G && V.length > 0 && b({
                                                channel_id: G,
                                                description: V,
                                                emoji_id: null == H ? void 0 : H.id,
                                                emoji_name: null == H ? void 0 : H.name
                                            }), J()
                                        },
                                        disabled: null == G || 0 === V.length,
                                        children: D.default.Messages.SAVE
                                    })]
                                }), null != P && (0, i.jsx)(s.Button, {
                                    onClick: () => {
                                        Y(!0)
                                    },
                                    size: s.Button.Sizes.MIN,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.RED,
                                    children: D.default.Messages.REMOVE
                                })]
                            }), k && (0, i.jsx)(m.default, {
                                onConfirm: () => {
                                    b(), J()
                                },
                                onCancel: () => Y(!1),
                                channelId: G
                            })]
                        })
                    })
                }