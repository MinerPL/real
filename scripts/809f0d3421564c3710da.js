(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87146"], {
        606863: function(e, t, n) {
            "use strict";
            e.exports = n.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "44d5e1639bc492dc8d62.svg"
        },
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("974889"),
                i = n("954016"),
                s = n("49111");

            function u(e) {
                let {
                    channel: t,
                    guildId: u,
                    locationObject: o,
                    openInPopout: d,
                    initialSelectedApplicationId: c,
                    initialSlide: f = i.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: E = !1,
                    analyticsLocations: h
                } = e;
                d && (0, r.default)(s.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let _ = d ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, a.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: u,
                        locationObject: o,
                        initialSlide: f,
                        initialSelectedApplicationId: c,
                        enableSelectedTextChannelInvite: E,
                        analyticsLocations: h
                    })
                }, {
                    modalKey: i.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: _
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function a() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function l(e) {
                return {
                    textValue: e,
                    richValue: i(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return a
                },
                createState: function() {
                    return l
                },
                toRichValue: function() {
                    return i
                },
                voidToOptionValue: function() {
                    return s
                }
            });
            let r = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function i(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : r
            }

            function s(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        15059: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return r
                },
                COMMON_CONFETTI_COLORS: function() {
                    return i
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return s
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return u
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return o
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return d
                }
            });
            var a = n("641900"),
                l = n("839491");
            let r = l,
                i = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                s = [n("606863"), r, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                u = 28,
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
                        maxValue: u
                    }
                },
                d = new a.Environment
        },
        583789: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("575482"),
                i = n.n(r),
                s = n("77078"),
                u = n("476765"),
                o = n("782340"),
                d = n("838903");

            function c(e) {
                let {
                    errorText: t,
                    title: n,
                    description: r,
                    transitionState: c,
                    onCancel: f,
                    onConfirm: E,
                    children: h
                } = e, _ = (0, u.useUID)(), [C, m] = l.useState(!1), p = l.useCallback(async () => {
                    m(!0);
                    try {
                        await E()
                    } catch (e) {
                        throw e
                    } finally {
                        m(!1)
                    }
                }, [E]);
                return (0, a.jsxs)(s.ModalRoot, {
                    className: d.modal,
                    transitionState: c,
                    "aria-labelledby": _,
                    size: s.ModalSize.SMALL,
                    children: [(0, a.jsxs)(s.ModalContent, {
                        className: d.modalContent,
                        children: [(0, a.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            id: _,
                            children: n
                        }), null != r && "" !== r ? (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: d.description,
                            children: r
                        }) : null, (0, a.jsx)("div", {
                            className: d.body,
                            children: h
                        }), null != t && "" !== t ? (0, a.jsx)(s.Text, {
                            className: d.errorText,
                            variant: "text-xs/normal",
                            color: "text-danger",
                            children: t
                        }) : null]
                    }), (0, a.jsxs)(s.ModalFooter, {
                        children: [(0, a.jsx)(s.Button, {
                            submitting: C,
                            className: d.button,
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.BRAND,
                            onClick: p,
                            children: o.default.Messages.SAVE
                        }), (0, a.jsx)(s.Button, {
                            className: i(d.cancelButton, d.button),
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.PRIMARY,
                            onClick: f,
                            children: o.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        262099: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("575482"),
                i = n.n(r),
                s = n("552473"),
                u = n.n(s),
                o = n("190509"),
                d = n("498225"),
                c = n("819855"),
                f = n("77078"),
                E = n("901582"),
                h = n("448993"),
                _ = n("841098"),
                C = n("850391"),
                m = n("149022"),
                p = n("681060"),
                R = n("449918"),
                I = n("900938"),
                M = n("42203"),
                T = n("923959"),
                x = n("381546"),
                g = n("673220"),
                L = n("351825"),
                v = n("567054"),
                A = n("583789"),
                N = n("394294"),
                S = n("49111"),
                O = n("782340"),
                F = n("838903");
            let b = "RULE";

            function y(e) {
                let {
                    rule: t,
                    rulesChannel: n,
                    index: r,
                    onChange: s,
                    onKeyDown: u,
                    onClear: d,
                    onRuleReorder: c,
                    isDropHovered: E,
                    focused: h,
                    onFocus: _,
                    previewEnabled: R
                } = e, I = l.useRef(null), M = l.useRef(null), [{
                    textValue: T,
                    richValue: L
                }, v] = l.useState((0, m.createState)(t.value)), [, A, S] = (0, o.useDrag)({
                    type: b,
                    item: {
                        rule: t,
                        index: r
                    },
                    end: (e, t) => {
                        null != e && !t.didDrop() && c(e.rule, null, !0)
                    }
                }), [, y] = (0, o.useDrop)({
                    accept: b,
                    hover: (e, t) => {
                        var n;
                        let {
                            index: a
                        } = e, l = null === (n = I.current) || void 0 === n ? void 0 : n.getBoundingClientRect(), i = t.getClientOffset();
                        if (null == l || null == i) return;
                        let s = (l.bottom - l.top) / 2,
                            u = i.y - l.top;
                        (!(a < r) || !(u < s)) && (!(a > r) || !(u > s)) && c(e.rule, r, !1)
                    },
                    drop: e => {
                        c(e.rule, r, !0)
                    }
                });
                l.useLayoutEffect(() => (A(M), S(y(I)), () => {
                    A(null), y(null)
                }), [A, y, S]);
                if (l.useEffect(() => {
                        "" !== t.value && "" === T && v((0, m.createState)(t.value))
                    }, [t.value, T]), null == n) return null;
                let j = "" !== t.value ? t.value : t.id;
                return (0, a.jsxs)("div", {
                    ref: I,
                    className: i(F.draggableInputContainer, {
                        [F.dragging]: E
                    }),
                    "data-dnd-name": j,
                    children: [(0, a.jsxs)("div", {
                        className: F.inputWrapper,
                        children: [(0, a.jsx)(f.Clickable, {
                            onMouseDown: () => _(r),
                            children: (0, a.jsx)(p.default, {
                                innerClassName: F.rulesTextAreaInput,
                                type: C.ChatInputTypes.RULES_INPUT,
                                textValue: T,
                                richValue: L,
                                channel: n,
                                placeholder: O.default.Messages.MEMBER_VERIFICATION_RULE_PLACEHOLDER,
                                focused: h,
                                onChange: (e, t, n) => {
                                    let a = t;
                                    a.length > N.MAX_RULE_LENGTH && (a = a.slice(0, N.MAX_RULE_LENGTH)), t !== a && (t = a, n = (0, m.toRichValue)(a)), s(t), v({
                                        textValue: t,
                                        richValue: n
                                    })
                                },
                                onKeyDown: u,
                                canMentionChannels: R,
                                canMentionRoles: R,
                                maxCharacterCount: N.MAX_RULE_LENGTH,
                                characterCountClassName: F.characterCount,
                                onSubmit: () => Promise.resolve({
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                })
                            })
                        }), (0, a.jsx)(f.Button, {
                            className: F.clearButton,
                            onClick: d,
                            look: f.Button.Looks.BLANK,
                            size: f.Button.Sizes.NONE,
                            children: (0, a.jsx)(x.default, {
                                className: F.clearIcon
                            })
                        }), (0, a.jsx)(f.Text, {
                            className: F.rulesInputNumber,
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "".concat(r + 1, ".")
                        })]
                    }), (0, a.jsx)("div", {
                        ref: M,
                        className: F.dragContainer,
                        "data-dnd-name": j,
                        children: (0, a.jsx)(g.default, {
                            className: F.dragIcon
                        })
                    })]
                })
            }

            function j(e) {
                let {
                    shortRule: t,
                    fullRule: n,
                    disabled: l,
                    onClick: r
                } = e;
                return l ? (0, a.jsx)(f.Tooltip, {
                    text: O.default.Messages.MEMBER_VERIFICATION_RULE_LIMIT.format({
                        number: N.MAX_NUM_RULES
                    }),
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: i(F.exampleRule, {
                            [F.disabled]: l
                        }),
                        children: (0, a.jsx)(f.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: t
                        })
                    })
                }) : (0, a.jsx)(f.Clickable, {
                    className: i(F.exampleRule, {
                        [F.disabled]: l
                    }),
                    onClick: () => r(n),
                    children: (0, a.jsx)(f.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: t
                    })
                })
            }
            var D = function(e) {
                let {
                    field: t,
                    onSave: n,
                    onClose: r
                } = e, i = (0, _.default)(), s = (0, d.useStateFromStores)([I.default], () => I.default.getProps().guild), o = null == s ? void 0 : s.rulesChannelId, C = null == s ? void 0 : s.hasFeature(S.GuildFeatures.PREVIEW_ENABLED), m = (0, d.useStateFromStores)([M.default], () => null != o ? M.default.getChannel(o) : null), p = (0, d.useStateFromStores)([T.default], () => (null == s ? void 0 : s.id) != null ? T.default.getDefaultChannel(s.id) : null), [x, g] = l.useState((null == t ? void 0 : t.values) != null ? null == t ? void 0 : t.values.map(e => ({
                    id: u(),
                    value: e
                })) : [{
                    id: u(),
                    value: ""
                }]), [b, D] = l.useState(null), [U, B] = l.useState(null), [V, P] = l.useState(0), k = e => {
                    if (x.length !== N.MAX_NUM_RULES) {
                        if (null != e && "" === x[x.length - 1].value) {
                            let t = [...x];
                            t[x.length - 1].value = e, g(t), P(t.length - 1)
                        } else g([...x, {
                            id: u(),
                            value: null != e ? e : ""
                        }]), P(x.length)
                    }
                }, w = (e, t) => {
                    let n = [...x];
                    n[t].value = e, g(n)
                }, H = e => {
                    let t = [...x.slice(0, e), ...x.slice(e + 1)];
                    g(0 === t.length ? [{
                        id: u(),
                        value: ""
                    }] : t)
                }, z = l.useCallback((e, t, n) => {
                    if (null == x) return;
                    let a = x.indexOf(e);
                    if (null != t && t !== a) {
                        let n = [...x];
                        n.splice(a, 1), n.splice(t, 0, e), g(n)
                    }
                    n ? null !== U && B(null) : t !== U && B(t)
                }, [U, x]), G = async () => {
                    null != b && D(null);
                    let e = x.map(e => e.value.trim()).filter(e => "" !== e);
                    if (0 === e.length) {
                        D(O.default.Messages.MEMBER_VERIFICATION_RULES_REQUIRED_ERROR);
                        return
                    }
                    let t = {
                        field_type: v.VerificationFormFieldTypes.TERMS,
                        label: O.default.Messages.MEMBER_VERIFICATION_FORM_RULES_LABEL,
                        values: e,
                        required: !0
                    };
                    try {
                        await n(t), r()
                    } catch (t) {
                        let e = new h.APIError(t);
                        D(e.getAnyErrorMessage())
                    }
                };
                if (null == s) return null;
                let X = x.length === N.MAX_NUM_RULES;
                return (0, a.jsx)(E.default, {
                    page: S.AnalyticsPages.GUILD_RULES_CREATE_MODAL,
                    children: (0, a.jsxs)(A.default, {
                        ...e,
                        errorText: b,
                        title: O.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_RULES,
                        onCancel: r,
                        onConfirm: G,
                        children: [x.map((e, t) => (0, a.jsx)(y, {
                            rulesChannel: null != m ? m : p,
                            rule: e,
                            index: t,
                            onChange: e => w(e, t),
                            onClear: () => H(t),
                            onRuleReorder: z,
                            isDropHovered: t === U,
                            focused: t === V,
                            onFocus: P,
                            previewEnabled: null == C || C
                        }, e.id)), !X && (0, a.jsxs)("div", {
                            className: F.addItemContainer,
                            children: [(0, a.jsx)(L.default, {
                                height: 17,
                                width: 17,
                                color: (0, R.getColor)((0, c.isThemeDark)(i) ? S.Color.BLUE_345 : S.Color.BLUE_430)
                            }), (0, a.jsx)(f.Clickable, {
                                className: F.addItemButton,
                                onClick: () => k(),
                                children: (0, a.jsx)(f.Text, {
                                    color: "text-link",
                                    variant: "text-md/normal",
                                    children: O.default.Messages.MEMBER_VERIFICATION_ADD_RULE
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: F.divider
                        }), (0, a.jsx)(f.FormTitle, {
                            children: O.default.Messages.MEMBER_VERIFICATION_EXAMPLE_RULES_SUBTITLE
                        }), (0, a.jsxs)("div", {
                            className: F.termsExampleRulesContainer,
                            children: [(0, a.jsxs)("div", {
                                className: F.termsExampleRulePairContainer,
                                children: [(0, a.jsx)(j, {
                                    shortRule: O.default.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL,
                                    fullRule: O.default.Messages.MEMBER_VERIFICATION_RULE_BE_RESPECTFUL_FULL,
                                    disabled: X,
                                    onClick: k
                                }), (0, a.jsx)(j, {
                                    shortRule: O.default.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM,
                                    fullRule: O.default.Messages.MEMBER_VERIFICATION_RULE_NO_SPAM_FULL,
                                    disabled: X,
                                    onClick: k
                                })]
                            }), (0, a.jsxs)("div", {
                                className: F.termsExampleRulePairContainer,
                                children: [(0, a.jsx)(j, {
                                    shortRule: O.default.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW,
                                    fullRule: O.default.Messages.MEMBER_VERIFICATION_RULE_NO_NSFW_FULL,
                                    disabled: X,
                                    onClick: k
                                }), (0, a.jsx)(j, {
                                    shortRule: O.default.Messages.MEMBER_VERIFICATION_RULE_SAFE,
                                    fullRule: O.default.Messages.MEMBER_VERIFICATION_RULE_SAFE_FULL,
                                    disabled: X,
                                    onClick: k
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return c
                },
                default: function() {
                    return f
                }
            });
            var a = n("773670"),
                l = n("377849"),
                r = n.n(l),
                i = n("638800"),
                s = n("296892");
            let u = new Date("2023-01-01T07:59:59.000Z"),
                o = r(u),
                d = (0, s.default)({
                    id: "2022-12_seasonal_gifting",
                    label: "Seasonal Gifting",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function c() {
                let [e, t] = a.useState(() => o.isAfter(Date.now()));
                return a.useEffect(() => {
                    let n = new i.Timeout,
                        a = () => {
                            let e = o.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                o.isBefore(Date.now()) ? t(!1) : a()
                            })
                        };
                    return e && a(), () => n.stop()
                }), e
            }
            var f = d
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var r = l
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var r = l
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return T
                },
                openThreadSidebarForCreating: function() {
                    return x
                },
                closeThreadSidebar: function() {
                    return g
                },
                closeAndClearThreadSidebar: function() {
                    return L
                }
            });
            var a = n("161179"),
                l = n.n(a),
                r = n("427964"),
                i = n.n(r),
                s = n("913144"),
                u = n("295426"),
                o = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                E = n("144491"),
                h = n("845579"),
                _ = n("474643"),
                C = n("18494"),
                m = n("800762"),
                p = n("659500"),
                R = n("648564"),
                I = n("49111"),
                M = n("724210");

            function T(e, t, n) {
                o.MainWindowDispatch.dispatch(I.ComponentActions.POPOUT_CLOSE);
                let a = !i.isEmpty(m.default.getVoiceStatesForChannel(e.id));
                if (t || !h.UseThreadSidebar.getSetting() || __OVERLAY__ || a) {
                    s.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, E.transitionToThread)(e, n) : (0, E.transitionToChannel)(e.id);
                    return
                }
                l(null != e.parent_id, "all threads must have parents");
                let r = C.default.getChannelId();
                e.parent_id !== r && !(0, M.isGuildHomeChannel)(r) && (0, E.transitionToChannel)(e.parent_id), (0, f.transitionTo)(I.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, M.isGuildHomeChannel)(r) ? M.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? R.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    p.ComponentDispatch.dispatch(I.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function x(e, t, n) {
                l(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), l(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(I.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), o.MainWindowDispatch.dispatch(I.ComponentActions.POPOUT_CLOSE), C.default.getChannelId() !== e.id && (0, E.transitionToChannel)(e.id);
                let a = _.default.getDraft(e.id, _.DraftType.FirstThreadMessage);
                if ("" === a) {
                    let t = _.default.getDraft(e.id, _.DraftType.ChannelMessage);
                    u.default.saveDraft(e.id, "", _.DraftType.ChannelMessage), u.default.saveDraft(e.id, t, _.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    s.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function g(e, t) {
                (0, f.transitionTo)(I.Routes.CHANNEL(e, (0, M.isGuildHomeChannel)(t) ? M.StaticChannelRoute.GUILD_HOME : t)), s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function L(e) {
                s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: _.DraftType.FirstThreadMessage
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: _.DraftType.ThreadSettings
                })
            }
        },
        391845: function(e, t, n) {
            "use strict";

            function a() {
                let e = Promise.resolve(null);
                return t => new Promise((n, a) => {
                    e = e.then(t).then(n, a)
                })
            }
            n.r(t), n.d(t, {
                createLock: function() {
                    return a
                }
            })
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("509317"),
                i = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: l,
                            className: r,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, r.FolderIcon)
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return s
                },
                ChatLayerProvider: function() {
                    return u
                },
                default: function() {
                    return o
                }
            });
            var a = n("228256");
            let {
                Layer: l,
                LayerContainer: r,
                LayerProvider: i
            } = (0, a.createLayer)("Chat"), s = r, u = i;
            var o = l
        }
    }
]);