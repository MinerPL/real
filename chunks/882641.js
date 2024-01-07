            "use strict";
            n.r(t), n.d(t, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return _
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                u = n.n(l),
                o = n("907002"),
                a = n("77078"),
                s = n("913144"),
                c = n("474293"),
                d = n("958706"),
                f = n("782340"),
                E = n("505436");
            let _ = {
                tension: 800,
                friction: 24
            };
            var I = function(e) {
                var t;
                let {
                    tabIndex: n,
                    className: l,
                    renderButtonContents: I,
                    active: T,
                    onClick: p,
                    "aria-controls": S,
                    focusProps: N
                } = e, [C, h] = i.useState(!1), [v, A] = i.useState(50), R = C || T, L = (0, c.getClass)(E, "emojiButton", R ? "Hovered" : "Normal");
                let g = (t = v, {
                        "--custom-emoji-sprite-size": "".concat(24, "px"),
                        "--custom-emoji-sprite-row": Math.floor(t / 20),
                        "--custom-emoji-sprite-col": t % 20
                    }),
                    m = i.useCallback(() => {
                        if (!R) h(!0), A(Math.floor(77 * Math.random())), s.default.dispatch({
                            type: "EMOJI_INTERACTION_INITIATED",
                            interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                        })
                    }, [R, h, A]),
                    P = i.useCallback(() => {
                        h(!1)
                    }, [h]),
                    U = i.useCallback(() => {
                        s.default.dispatch({
                            type: "EMOJI_INTERACTION_INITIATED",
                            interaction: d.EmojiInteractionPoint.EmojiButtonFocused
                        })
                    }, []);
                return (0, r.jsx)(a.Button, {
                    look: a.Button.Looks.BLANK,
                    size: a.Button.Sizes.NONE,
                    tabIndex: n,
                    className: u(L, l),
                    onMouseEnter: m,
                    onMouseOver: m,
                    onMouseLeave: P,
                    onFocus: U,
                    onClick: p,
                    "aria-label": f.default.Messages.SELECT_EMOJI,
                    "aria-controls": S,
                    "aria-expanded": T,
                    "aria-haspopup": "dialog",
                    focusProps: N,
                    children: null != I ? I() : (0, r.jsx)(o.Spring, {
                        config: _,
                        to: {
                            value: R ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, r.jsxs)(o.animated.div, {
                                className: E.spriteContainer,
                                style: {
                                    ...g,
                                    transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
                                },
                                children: [(0, r.jsx)("div", {
                                    className: u(E.sprite, E.spriteColored, R ? E.active : E.inactive)
                                }), (0, r.jsx)("div", {
                                    className: u(E.sprite, E.spriteGreyscale, R ? E.inactive : E.active)
                                })]
                            })
                        }
                    })
                })
            }