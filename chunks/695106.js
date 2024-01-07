            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return M
                }
            }), i("222007"), i("843762");
            var n = i("37983"),
                l = i("884691"),
                s = i("414456"),
                a = i.n(s),
                r = i("917351"),
                o = i.n(r),
                u = i("907002"),
                c = i("974667"),
                d = i("895547"),
                f = i("769846"),
                E = i("77078"),
                m = i("150021"),
                I = i("206625"),
                p = i("302437"),
                g = i("867805"),
                _ = i("476765"),
                S = i("402671"),
                h = i("159885"),
                C = i("49111"),
                T = i("782340"),
                N = i("576643");
            let A = (0, _.uid)(),
                y = d.default.convert.fromCodePoint("1f44f"),
                v = (0, h.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
                j = (0, h.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
                R = e => {
                    let {
                        fade: t,
                        surrogate: i,
                        onClick: l,
                        delay: s,
                        index: a
                    } = e, r = (0, c.useListItem)("item-".concat(a)), o = S.default.getURL(y + i), f = (0, u.useSpring)({
                        opacity: 1,
                        from: {
                            opacity: t ? 0 : 1
                        },
                        delay: s
                    });
                    return (0, n.jsx)(E.Clickable, {
                        ...r,
                        role: "option",
                        "aria-selected": 0 === a,
                        onClick: () => l(i),
                        className: N.diversityEmojiItem,
                        children: (0, n.jsx)(u.animated.div, {
                            "aria-label": function(e) {
                                let t = d.default.convert.toCodePoint(e);
                                switch (t) {
                                    case "1f3fb":
                                        return T.default.Messages.EMOJI_MODIFIER_LIGHT_SKIN_TONE;
                                    case "1f3fc":
                                        return T.default.Messages.EMOJI_MODIFIER_MEDIUM_LIGHT_SKIN_TONE;
                                    case "1f3fd":
                                        return T.default.Messages.EMOJI_MODIFIER_MEDIUM_SKIN_TONE;
                                    case "1f3fe":
                                        return T.default.Messages.EMOJI_MODIFIER_MEDIUM_DARK_SKIN_TONE;
                                    case "1f3ff":
                                        return T.default.Messages.EMOJI_MODIFIER_DARK_SKIN_TONE;
                                    default:
                                        return T.default.Messages.EMOJI_MODIFIER_NONE
                                }
                            }(i),
                            className: N.diversityEmojiItemImage,
                            style: {
                                backgroundImage: 'url("'.concat(o, '")'),
                                ...f
                            }
                        })
                    })
                },
                O = e => {
                    let {
                        id: t,
                        selectedSurrogate: i,
                        onClick: s,
                        hasTabWrapper: r
                    } = e, d = (0, p.default)("diversity"), f = (0, u.useSpring)({
                        height: (j + 2 * v) * (g.DIVERSITY_SURROGATES.length + 1),
                        from: {
                            height: j
                        },
                        config: {
                            duration: 125
                        }
                    });
                    l.useEffect(() => {
                        d.focusFirstVisibleItem()
                    }, [d]);
                    let E = ["", ...g.DIVERSITY_SURROGATES];
                    return o.remove(E, e => e === i), E.unshift(i), (0, n.jsx)(c.ListNavigatorProvider, {
                        navigator: d,
                        children: (0, n.jsx)(c.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: i,
                                    ...l
                                } = e;
                                return (0, n.jsx)(u.animated.div, {
                                    ...l,
                                    id: t,
                                    ref: i,
                                    className: a(N.diversitySelectorOptions, {
                                        [N.diversitySelectorOptionsHasTabWrapper]: r
                                    }),
                                    style: f,
                                    role: "listbox",
                                    children: E.map((e, t) => (0, n.jsx)(R, {
                                        index: t,
                                        fade: 0 !== t,
                                        delay: 20 * t,
                                        surrogate: e,
                                        onClick: s
                                    }, t))
                                })
                            }
                        })
                    })
                };
            var M = e => {
                let {
                    searchBarRef: t,
                    selectedSurrogate: i,
                    className: s,
                    hasTabWrapper: a
                } = e, r = S.default.getURL(y + i), [o, u] = l.useState(!1), c = (0, I.default)(null, () => u(!1)), d = l.useRef(null);
                return (0, n.jsxs)("div", {
                    ref: c,
                    className: s,
                    children: [(0, n.jsx)(E.Clickable, {
                        innerRef: d,
                        className: N.diversitySelectorButton,
                        onClick: () => {
                            u(!0)
                        },
                        "aria-label": T.default.Messages.EMOJI_MODIFIER_MENU_BUTTON,
                        "aria-haspopup": !0,
                        "aria-expanded": o,
                        "aria-controls": A,
                        tabIndex: o ? -1 : 0,
                        children: (0, n.jsx)("div", {
                            className: N.diversityEmojiItemImage,
                            style: {
                                backgroundImage: 'url("'.concat(r, '")')
                            }
                        })
                    }), o ? (0, n.jsx)("div", {
                        onKeyDown: e => {
                            e.keyCode === C.KeyboardKeys.ESCAPE && (e.stopPropagation(), u(!1), null != d.current && d.current.focus())
                        },
                        children: (0, n.jsx)(O, {
                            id: A,
                            hasTabWrapper: a,
                            selectedSurrogate: i,
                            onClick: e => {
                                var i;
                                (0, m.setDiversityColor)(e), u(!1), null === (i = t.current) || void 0 === i || i.focus()
                            }
                        })
                    }) : null]
                })
            }