            "use strict";
            n.r(t), n.d(t, {
                SecondaryActionButton: function() {
                    return M
                },
                default: function() {
                    return k
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("974667"),
                a = n("446674"),
                u = n("862337"),
                d = n("669491"),
                c = n("77078"),
                f = n("430568"),
                p = n("206230"),
                m = n("526887"),
                h = n("697218"),
                E = n("118849"),
                S = n("671434"),
                g = n("132755"),
                C = n("151185"),
                T = n("368121"),
                v = n("305122"),
                y = n("235004"),
                x = n("389480"),
                I = n("78581"),
                N = n("23106"),
                _ = n("796864"),
                A = n("172858"),
                R = n("782340"),
                O = n("955761");

            function M(e) {
                let {
                    disabled: t = !1,
                    onClick: n,
                    text: i,
                    children: r
                } = e;
                return (0, l.jsx)(c.Tooltip, {
                    text: i,
                    children: e => (0, l.jsx)(c.Clickable, {
                        ...e,
                        "aria-label": i,
                        className: o(O.secondaryButton, {
                            [O.buttonDisabled]: t
                        }),
                        onClick: n,
                        children: r
                    })
                })
            }
            var k = i.forwardRef(function(e, t) {
                var n, r, k;
                let {
                    sound: b,
                    channel: P,
                    className: L,
                    focused: U,
                    forceSecondaryActions: j = !1,
                    interactive: D = !0,
                    enableSecondaryActions: w = !1,
                    suppressPlaySound: B,
                    onMouseEnter: H,
                    onSelectItem: F,
                    analyticsLocations: G,
                    buttonOverlay: K = x.SoundButtonOverlay.PLAY,
                    ...V
                } = e, {
                    soundId: W,
                    name: Y,
                    emojiId: q,
                    emojiName: z
                } = b, Q = (0, a.useStateFromStores)([h.default], () => h.default.getCurrentUser()), X = (0, _.useSoundButtonContextMenu)(b, null == P ? void 0 : P.guild_id), {
                    playSoundboardSound: Z,
                    previewSound: J,
                    isPlayingSound: $
                } = (0, N.default)(b, null !== (n = null == P ? void 0 : P.id) && void 0 !== n ? n : null), {
                    createMultipleConfettiAt: ee
                } = i.useContext(m.ConfettiCannonContext), et = i.useRef(null);
                let en = (r = b.soundId, k = et.current, i.useMemo(() => {
                        if (null == k || "1" !== r) return {
                            x: 0,
                            y: 0
                        };
                        let e = k.getBoundingClientRect();
                        return {
                            x: e.left + e.width / 2,
                            y: e.top + e.height / 2
                        }
                    }, [k, r])),
                    el = (0, a.useStateFromStores)([p.default], () => p.default.useReducedMotion),
                    ei = i.useRef(.01),
                    er = i.useRef(new u.Interval),
                    eo = "1" === b.soundId,
                    es = (0, a.useStateFromStores)([y.default], () => y.default.isFavoriteSound(W), [W]),
                    ea = "sound-".concat(b.soundId),
                    eu = (0, s.useListItem)(ea),
                    ed = null != q || null != z,
                    ec = !(0, I.canUseSoundboardSound)(Q, b, P);

                function ef(e) {
                    e.stopPropagation(), e.currentTarget.blur(), es ? (0, v.removeFavoriteSound)(W) : (0, v.addFavoriteSound)(W)
                }

                function ep(e) {
                    e.stopPropagation(), e.currentTarget.blur(), J()
                }
                let em = j || w && !ec,
                    eh = () => (0, l.jsxs)("div", {
                        className: O.buttonOverlay,
                        children: [(0, l.jsx)("div", {
                            className: o({
                                [O.buttonOverlayBackground]: !B
                            })
                        }), (0, l.jsxs)("div", {
                            className: O.buttonOverlayActions,
                            children: [eS(), !B && (0, l.jsx)(g.default, {
                                className: O.playIcon
                            }), eE()]
                        })]
                    });

                function eE() {
                    return em ? (0, l.jsx)(M, {
                        disabled: !D && !j,
                        onClick: ef,
                        text: R.default.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
                            emojiName: b.emojiName,
                            soundName: b.name
                        }),
                        children: es ? (0, l.jsx)(S.default, {
                            className: o(O.secondaryIcon, O.favoriteIconFavorite),
                            color: d.default.unsafe_rawColors.GOLD.css
                        }) : (0, l.jsx)(E.default, {
                            className: O.secondaryIcon
                        })
                    }) : null
                }

                function eS() {
                    return em ? (0, l.jsx)(M, {
                        disabled: !D && !j,
                        onClick: ep,
                        text: R.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
                            emojiName: b.emojiName,
                            soundName: b.name
                        }),
                        children: (0, l.jsx)(T.default, {
                            className: O.secondaryIcon
                        })
                    }) : null
                }
                return i.useEffect(() => {
                    let e = er.current;
                    return eo && e.start(1e3, () => {
                        ei.current = Math.max(ei.current - .01, .01)
                    }), () => e.stop()
                }, [eo]), (0, l.jsxs)("li", {
                    ref: t,
                    className: O.soundButtonWrapper,
                    onMouseEnter: H,
                    children: [(0, l.jsxs)(c.ClickableContainer, {
                        ...V,
                        buttonProps: {
                            ...eu,
                            id: ea,
                            role: "button"
                        },
                        "aria-label": R.default.Messages.SOUNDBOARD_PLAY_SOUND.format({
                            emojiName: b.emojiName,
                            soundName: b.name
                        }),
                        className: o(L, O.soundButton, {
                            [O.playing]: $,
                            [O.hoverActiveBackground]: B,
                            [O.soundButtonInteractive]: D,
                            [O.buttonDisabled]: !D && !j,
                            [O.premiumDisabled]: ec && !j,
                            [O.buttonDisabledSecondaryActionsEnabled]: !D && j,
                            [O.focused]: D && U
                        }),
                        onClick: function() {
                            if (eo && !el && (ei.current = Math.min(ei.current + .01, .1), Math.random() < ei.current && ee(en.x, en.y, void 0, void 0, {
                                    sprite: A.DUCK_CONFETTI_SPRITE
                                })), null != F) {
                                F();
                                return
                            }
                            B || Z(G)
                        },
                        onContextMenu: w && !ec ? X : void 0,
                        children: [(0, l.jsxs)("div", {
                            className: O.soundInfo,
                            "aria-hidden": !0,
                            ref: et,
                            children: [ed && (0, l.jsx)(f.default, {
                                emojiId: q,
                                emojiName: z,
                                className: O.emoji
                            }), (0, l.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: D ? "header-primary" : "text-muted",
                                className: o(O.soundName, {
                                    [O.hasEmoji]: ed
                                }),
                                children: Y
                            })]
                        }), function() {
                            switch (K) {
                                case x.SoundButtonOverlay.ADD:
                                    return (0, l.jsxs)("div", {
                                        className: O.addButtonOverlay,
                                        children: [(0, l.jsx)("div", {
                                            className: O.buttonOverlayBackground
                                        }), (0, l.jsxs)("div", {
                                            className: O.buttonOverlayActions,
                                            children: [eS(), (0, l.jsxs)("div", {
                                                className: O.addButton,
                                                children: [(0, l.jsx)(C.default, {
                                                    className: O.plusSign
                                                }), (0, l.jsx)(c.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "header-primary",
                                                    children: R.default.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                                                })]
                                            }), eE()]
                                        })]
                                    });
                                case x.SoundButtonOverlay.PLAY:
                                default:
                                    return eh()
                            }
                        }()]
                    }), !b.available && (0, l.jsx)(c.Tooltip, {
                        text: R.default.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
                        children: e => (0, l.jsx)("div", {
                            className: O.unavailableTooltip,
                            ...e
                        })
                    })]
                })
            })