(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["38334"], {
        890450: function(e, l, t) {
            "use strict";
            e.exports = t.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, l, t) {
            "use strict";
            e.exports = t.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, l, t) {
            "use strict";
            e.exports = t.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, l, t) {
            "use strict";
            e.exports = t.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, l, t) {
            "use strict";
            e.exports = t.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, l, t) {
            "use strict";
            e.exports = t.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, l, t) {
            "use strict";
            e.exports = t.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, l, t) {
            "use strict";
            e.exports = t.p + "44d5e1639bc492dc8d62.svg"
        },
        172858: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                DUCK_CONFETTI_SPRITE: function() {
                    return s
                },
                COMMON_CONFETTI_COLORS: function() {
                    return u
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return r
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return i
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return o
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return d
                }
            });
            var a = t("516555"),
                n = t("839491");
            let s = n,
                u = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                r = [t("890450"), s, t("164654"), t("540346"), t("526094"), t("367469"), t("23933"), {
                    src: t("283397"),
                    colorize: !1
                }],
                i = 28,
                o = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: i
                    }
                },
                d = new a.Environment
        },
        583789: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return c
                }
            });
            var a = t("37983"),
                n = t("884691"),
                s = t("414456"),
                u = t.n(s),
                r = t("77078"),
                i = t("476765"),
                o = t("782340"),
                d = t("876197");

            function c(e) {
                let {
                    errorText: l,
                    title: t,
                    description: s,
                    transitionState: c,
                    onCancel: E,
                    onConfirm: R,
                    children: _
                } = e, f = (0, i.useUID)(), [M, C] = n.useState(!1), m = n.useCallback(async () => {
                    C(!0);
                    try {
                        await R()
                    } catch (e) {
                        throw e
                    } finally {
                        C(!1)
                    }
                }, [R]);
                return (0, a.jsxs)(r.ModalRoot, {
                    className: d.modal,
                    transitionState: c,
                    "aria-labelledby": f,
                    size: r.ModalSize.SMALL,
                    children: [(0, a.jsxs)(r.ModalContent, {
                        className: d.modalContent,
                        children: [(0, a.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            id: f,
                            children: t
                        }), null != s && "" !== s ? (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: d.description,
                            children: s
                        }) : null, (0, a.jsx)("div", {
                            className: d.body,
                            children: _
                        }), null != l && "" !== l ? (0, a.jsx)(r.Text, {
                            className: d.errorText,
                            variant: "text-xs/normal",
                            color: "text-danger",
                            children: l
                        }) : null]
                    }), (0, a.jsxs)(r.ModalFooter, {
                        children: [(0, a.jsx)(r.Button, {
                            submitting: M,
                            className: d.button,
                            size: r.Button.Sizes.SMALL,
                            color: r.Button.Colors.BRAND,
                            onClick: m,
                            children: o.default.Messages.SAVE
                        }), (0, a.jsx)(r.Button, {
                            className: u(d.cancelButton, d.button),
                            size: r.Button.Sizes.SMALL,
                            color: r.Button.Colors.PRIMARY,
                            onClick: E,
                            children: o.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        262099: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return b
                }
            });
            var a = t("37983"),
                n = t("884691"),
                s = t("414456"),
                u = t.n(s),
                r = t("995008"),
                i = t.n(r),
                o = t("476042"),
                d = t("446674"),
                c = t("819855"),
                E = t("77078"),
                R = t("901582"),
                _ = t("448993"),
                f = t("841098"),
                M = t("850391"),
                C = t("149022"),
                m = t("681060"),
                x = t("449918"),
                h = t("900938"),
                I = t("42203"),
                N = t("923959"),
                g = t("381546"),
                p = t("673220"),
                v = t("351825"),
                L = t("567054"),
                F = t("583789"),
                T = t("394294"),
                A = t("49111"),
                S = t("782340"),
                O = t("876197");
            let U = "RULE";

            function j(e) {
                let {
                    rule: l,
                    rulesChannel: t,
                    index: s,
                    onChange: r,
                    onKeyDown: i,
                    onClear: d,
                    onRuleReorder: c,
                    isDropHovered: R,
                    focused: _,
                    onFocus: f,
                    previewEnabled: x
                } = e, h = n.useRef(null), I = n.useRef(null), [{
                    textValue: N,
                    richValue: v
                }, L] = n.useState((0, C.createState)(l.value)), [, F, A] = (0, o.useDrag)({
                    type: U,
                    item: {
                        rule: l,
                        index: s
                    },
                    end: (e, l) => {
                        null != e && !l.didDrop() && c(e.rule, null, !0)
                    }
                }), [, j] = (0, o.useDrop)({
                    accept: U,
                    hover: (e, l) => {
                        var t;
                        let {
                            index: a
                        } = e, n = null === (t = h.current) || void 0 === t ? void 0 : t.getBoundingClientRect(), u = l.getClientOffset();
                        if (null == n || null == u) return;
                        let r = (n.bottom - n.top) / 2,
                            i = u.y - n.top;
                        (!(a < s) || !(i < r)) && (!(a > s) || !(i > r)) && c(e.rule, s, !1)
                    },
                    drop: e => {
                        c(e.rule, s, !0)
                    }
                });
                n.useLayoutEffect(() => (F(I), A(j(h)), () => {
                    F(null), j(null)
                }), [F, j, A]);
                if (n.useEffect(() => {
                        "" !== l.value && "" === N && L((0, C.createState)(l.value))
                    }, [l.value, N]), null == t) return null;
                let B = "" !== l.value ? l.value : l.id;
                return (0, a.jsxs)("div", {
                    ref: h,
                    className: u(O.draggableInputContainer, {
                        [O.dragging]: R
                    }),
                    "data-dnd-name": B,
                    children: [(0, a.jsxs)("div", {
                        className: O.inputWrapper,
                        children: [(0, a.jsx)(E.Clickable, {
                            onMouseDown: () => f(s),
                            children: (0, a.jsx)(m.default, {
                                innerClassName: O.rulesTextAreaInput,
                                type: M.ChatInputTypes.RULES_INPUT,
                                textValue: N,
                                richValue: v,
                                channel: t,
                                placeholder: S.default.Messages.MEMBER_VERIFICATION_RULE_PLACEHOLDER,
                                focused: _,
                                onChange: (e, l, t) => {
                                    let a = l;
                                    a.length > T.MAX_RULE_LENGTH && (a = a.slice(0, T.MAX_RULE_LENGTH)), l !== a && (l = a, t = (0, C.toRichValue)(a)), r(l), L({
                                        textValue: l,
                                        richValue: t
                                    })
                                },
                                onKeyDown: i,
                                canMentionChannels: x,
                                canMentionRoles: x,
                                maxCharacterCount: T.MAX_RULE_LENGTH,
                                characterCountClassName: O.characterCount,
                                onSubmit: () => Promise.resolve({
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                })
                            })
                        }), (0, a.jsx)(E.Button, {
                            className: O.clearButton,
                            onClick: d,
                            look: E.Button.Looks.BLANK,
                            size: E.Button.Sizes.NONE,
                            children: (0, a.jsx)(g.default, {
                                className: O.clearIcon
                            })
                        }), (0, a.jsx)(E.Text, {
                            className: O.rulesInputNumber,
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "".concat(s + 1, ".")
                        })]
                    }), (0, a.jsx)("div", {
                        ref: I,
                        className: O.dragContainer,
                        "data-dnd-name": B,
                        children: (0, a.jsx)(p.default, {
                            className: O.dragIcon
                        })
                    })]
                })
            }

            function B(e) {
                let {
                    shortRule: l,
                    fullRule: t,
                    disabled: n,
                    onClick: s
                } = e;
                return n ? (0, a.jsx)(E.Tooltip, {
                    text: S.default.Messages.MEMBER_VERIFICATION_RULE_LIMIT.format({
                        number: T.MAX_NUM_RULES
                    }),
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: u(O.exampleRule, {
                            [O.disabled]: n
                        }),
                        children: (0, a.jsx)(E.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: l
                        })
                    })
                }) : (0, a.jsx)(E.Clickable, {
                    className: u(O.exampleRule, {
                        [O.disabled]: n
                    }),
                    onClick: () => s(t),
                    children: (0, a.jsx)(E.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: l
                    })
                })
            }
            var b = function(e) {
                let {
                    field: l,
                    onSave: t,
                    onClose: s
                } = e, u = (0, f.default)(), r = (0, d.useStateFromStores)([h.default], () => h.default.getProps().guild), o = null == r ? void 0 : r.rulesChannelId, M = null == r ? void 0 : r.hasFeature(A.GuildFeatures.PREVIEW_ENABLED), C = (0, d.useStateFromStores)([I.default], () => null != o ? I.default.getChannel(o) : null), m = (0, d.useStateFromStores)([N.default], () => (null == r ? void 0 : r.id) != null ? N.default.getDefaultChannel(r.id) : null), [g, p] = n.useState((null == l ? void 0 : l.values) != null ? null == l ? void 0 : l.values.map(e => ({
                    id: i(),
                    value: e
                })) : [{
                    id: i(),
                    value: ""
                }]), [U, b] = n.useState(null), [V, y] = n.useState(null), [D, k] = n.useState(0), P = e => {
                    if (g.length !== T.MAX_NUM_RULES) {
                        if (null != e && "" === g[g.length - 1].value) {
                            let l = [...g];
                            l[g.length - 1].value = e, p(l), k(l.length - 1)
                        } else p([...g, {
                            id: i(),
                            value: null != e ? e : ""
                        }]), k(g.length)
                    }
                }, w = (e, l) => {
                    let t = [...g];
                    t[l].value = e, p(t)
                }, z = e => {
                    let l = [...g.slice(0, e), ...g.slice(e + 1)];
                    p(0 === l.length ? [{
                        id: i(),
                        value: ""
                    }] : l)
                }, X = n.useCallback((e, l, t) => {
                    if (null == g) return;
                    let a = g.indexOf(e);
                    if (null != l && l !== a) {
                        let t = [...g];
                        t.splice(a, 1), t.splice(l, 0, e), p(t)
                    }
                    t ? null !== V && y(null) : l !== V && y(l)
                }, [V, g]), G = async () => {
                    null != U && b(null);
                    let e = g.map(e => e.value.trim()).filter(e => "" !== e);
                    if (0 === e.length) {
                        b(S.default.Messages.MEMBER_VERIFICATION_RULES_REQUIRED_ERROR);
                        return
                    }
                    let l = {
                        field_type: L.VerificationFormFieldTypes.TERMS,
                        label: S.default.Messages.MEMBER_VERIFICATION_FORM_RULES_LABEL,
                        values: e,
                        required: !0
                    };
                    try {
                        await t(l), s()
                    } catch (l) {
                        let e = new _.APIError(l);
                        b(e.getAnyErrorMessage())
                    }
                };
                if (null == r) return null;
                let H = g.length === T.MAX_NUM_RULES;
                return (0, a.jsx)(R.default, {
                    page: A.AnalyticsPages.GUILD_RULES_CREATE_MODAL,
                    children: (0, a.jsxs)(F.default, {
                        ...e,
                        errorText: U,
                        title: S.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_RULES,
                        onCancel: s,
                        onConfirm: G,
                        children: [g.map((e, l) => (0, a.jsx)(j, {
                            rulesChannel: null != C ? C : m,
                            rule: e,
                            index: l,
                            onChange: e => w(e, l),
                            onClear: () => z(l),
                            onRuleReorder: X,
                            isDropHovered: l === V,
                            focused: l === D,
                            onFocus: k,
                            previewEnabled: null == M || M
                        }, e.id)), !H && (0, a.jsxs)("div", {
                            className: O.addItemContainer,
                            children: [(0, a.jsx)(v.default, {
                                height: 17,
                                width: 17,
                                color: (0, x.getColor)((0, c.isThemeDark)(u) ? A.Color.BLUE_345 : A.Color.BLUE_430)
                            }), (0, a.jsx)(E.Clickable, {
                                className: O.addItemButton,
                                onClick: () => P(),
                                children: (0, a.jsx)(E.Text, {
                                    color: "text-link",
                                    variant: "text-md/normal",
                                    children: S.default.Messages.MEMBER_VERIFICATION_ADD_RULE
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: O.divider
                        }), (0, a.jsx)(E.FormTitle, {
                            children: S.default.Messages.MEMBER_VERIFICATION_EXAMPLE_RULES_SUBTITLE
                        }), (0, a.jsxs)("div", {
                            className: O.termsExampleRulesContainer,
                            children: [(0, a.jsxs)("div", {
                                className: O.termsExampleRulePairContainer,
                                children: [(0, a.jsx)(B, {
                                    shortRule: S.default.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL,
                                    fullRule: S.default.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL_FULL,
                                    disabled: H,
                                    onClick: P
                                }), (0, a.jsx)(B, {
                                    shortRule: S.default.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM,
                                    fullRule: S.default.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM_FULL,
                                    disabled: H,
                                    onClick: P
                                })]
                            }), (0, a.jsxs)("div", {
                                className: O.termsExampleRulePairContainer,
                                children: [(0, a.jsx)(B, {
                                    shortRule: S.default.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW,
                                    fullRule: S.default.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW_FULL,
                                    disabled: H,
                                    onClick: P
                                }), (0, a.jsx)(B, {
                                    shortRule: S.default.Messages.MEMBER_VERIFICATION_RULE_SAFE,
                                    fullRule: S.default.Messages.MEMBER_VERIFICATION_RULE_SAFE_FULL,
                                    disabled: H,
                                    onClick: P
                                })]
                            })]
                        })]
                    })
                })
            }
        }
    }
]);