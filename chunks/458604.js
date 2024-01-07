            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return A
                }
            }), i("222007");
            var n = i("37983"),
                l = i("884691"),
                s = i("414456"),
                a = i.n(s),
                r = i("446674"),
                o = i("77078"),
                u = i("272030"),
                c = i("206230"),
                d = i("385976"),
                f = i("858619"),
                E = i("867805"),
                m = i("246511"),
                I = i("139321"),
                p = i("140708"),
                g = i("305961"),
                _ = i("773336"),
                S = i("215550"),
                h = i("782340"),
                C = i("465439");
            let T = (e, t) => "".concat(e, ":").concat(t),
                N = l.forwardRef(function(e, t) {
                    let i, {
                            emoji: l,
                            isFavorite: s,
                            isLargeSize: u,
                            isMediumSize: c,
                            isInspected: d,
                            isDisabled: E,
                            showPulse: I,
                            columnIndex: p,
                            rowIndex: _,
                            size: T,
                            surrogateCodePoint: N,
                            allowAnimatedEmoji: A,
                            selectedItemClassName: y,
                            ...v
                        } = e,
                        j = (0, r.useStateFromStores)([g.default], () => l.type === f.EmojiTypes.GUILD ? g.default.getGuild(l.guildId) : void 0, [l]);
                    return (0, n.jsx)(o.FocusRing, {
                        children: (0, n.jsx)("button", {
                            ...v,
                            className: a(C.emojiItem, {
                                [C.emojiItemLarge]: u,
                                [C.emojiItemMedium]: c,
                                [C.emojiItemSelected]: d,
                                [null != y ? y : ""]: d,
                                [C.emojiItemDisabled]: E,
                                [C.showPulse]: I
                            }),
                            "data-type": m.PickerContextMenuDataTypes.EMOJI,
                            "data-id": l.id,
                            "data-pack-id": l.type === f.EmojiTypes.PACK ? l.packId : void 0,
                            "data-name": l.name,
                            ref: t,
                            children: (0, n.jsx)(S.default, {
                                "aria-label": (i = l.allNamesString, ((null == j ? void 0 : j.name) != null && (i = h.default.Messages.EMOJI_FROM_GUILD_LABEL.format({
                                    names: i,
                                    guildName: j.name
                                })), s) ? h.default.Messages.EMOJI_NAMES_WITH_FAVORITED.format({
                                    names: i
                                }) : i),
                                columnIndex: p,
                                rowIndex: _,
                                emoji: l,
                                size: T,
                                surrogateCodePoint: N,
                                allowAnimatedEmoji: A
                            })
                        })
                    })
                });

            function A(e) {
                let {
                    descriptor: t,
                    emojiItemKey: s,
                    isInspected: a,
                    rowIndex: f,
                    channelGuildId: m,
                    onInspect: g,
                    onSelect: S,
                    isScrolling: C,
                    isUsingKeyboardNavigation: A,
                    showEmojiFavoriteTooltip: y,
                    surrogateCodePoint: v,
                    selectedItemClassName: j,
                    getEmojiItemProps: R,
                    isMediumSize: O,
                    isLargeSize: M,
                    pulseItemKey: x,
                    allowAnimatedEmoji: P,
                    setPulseItemKey: L,
                    messageId: D,
                    isBurstReaction: b,
                    rowPosition: U
                } = e, [w, G] = l.useState(""), k = (0, r.useStateFromStores)([c.default], () => c.default.useReducedMotion), F = (0, r.useStateFromStores)([d.default], () => d.default.getDisambiguatedEmojiContext(m), [m]), V = l.useRef(null), {
                    emoji: K,
                    size: H,
                    isDisabled: B,
                    columnIndex: J
                } = t, W = e => {
                    if (e.stopPropagation(), C.current || A.current) return;
                    let i = e.altKey;
                    i && !d.default.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(K) && L(s), (0, I.hideHotspot)(I.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), S(t, {
                        isFinalSelection: !e.shiftKey,
                        toggleFavorite: i
                    })
                }, z = () => {
                    !C.current && !A.current && g(t)
                }, Z = e => {
                    (0, u.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await i.el("367343").then(i.bind(i, "367343"));
                        return t => (0, n.jsx)(e, {
                            ...t
                        })
                    })
                }, Y = function() {
                    var e;
                    let {
                        onMouseEnter: t,
                        onMouseLeave: i
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                        ref: r,
                        tabIndex: o,
                        onFocus: u,
                        ...c
                    } = null !== (e = R(J, f)) && void 0 !== e ? e : {};
                    return (0, l.createElement)("li", {
                        ...c,
                        key: s,
                        ref: V
                    }, w !== T(J, f) && (0, n.jsx)(N, {
                        ref: r,
                        emoji: K,
                        isFavorite: F.isFavoriteEmojiWithoutFetchingLatest(K),
                        isLargeSize: M,
                        isMediumSize: O,
                        isInspected: a,
                        isDisabled: B,
                        showPulse: x === s,
                        allowAnimatedEmoji: P,
                        onFocus: null != u ? u : z,
                        onMouseMove: z,
                        onMouseEnter: t,
                        onMouseLeave: i,
                        onClick: e => {
                            if (null != V.current && null != U && null != D && !e.shiftKey && null != K.name && b && !k && P) {
                                let e = null == K.id ? E.default.convertNameToSurrogate(K.name) : K.name,
                                    t = V.current.getBoundingClientRect();
                                t.x = U.x + (J + 1) * H, G(T(J, f)), (0, p.addReactionPickerAnimation)(D, e, K.id, t)
                            }
                            W(e)
                        },
                        onContextMenu: Z,
                        tabIndex: o,
                        columnIndex: J,
                        rowIndex: f,
                        size: H,
                        surrogateCodePoint: v,
                        selectedItemClassName: j
                    }))
                };
                return y ? (0, n.jsx)(o.Tooltip, {
                    text: h.default.Messages.EMOJI_FAVORITE_TOOLTIP.format({
                        key: (0, _.isMac)() ? "Opt" : "Alt"
                    }),
                    position: "top",
                    delay: 200,
                    children: e => Y(e)
                }, s) : Y()
            }