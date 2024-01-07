            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                },
                AddOptionCard: function() {
                    return L
                }
            }), s("222007");
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("917351"),
                r = s.n(i),
                o = s("77078"),
                d = s("404118"),
                u = s("69678"),
                c = s("837648"),
                E = s("569912"),
                _ = s("205454"),
                T = s("673220"),
                I = s("351825"),
                S = s("330724"),
                N = s("653138"),
                g = s("782340"),
                f = s("504540");

            function A(e) {
                var t, n, i, d;
                let {
                    guild: c,
                    prompt: I,
                    singleColumn: A,
                    promptIndex: L,
                    option: m,
                    hasError: C,
                    onDragStart: O,
                    onDragComplete: h,
                    onDragReset: R
                } = e, D = null, M = r.findIndex(I.options, e => e.id === m.id), {
                    drag: G,
                    dragSourcePosition: x,
                    drop: p,
                    setIsDraggable: U
                } = (0, u.default)({
                    type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(I.id),
                    index: M,
                    optionId: m.id,
                    onDragStart: O,
                    onDragComplete: h,
                    onDragReset: R
                }), {
                    customEmoji: v,
                    unicodeEmoji: j
                } = (0, E.default)(null === (t = m.emoji) || void 0 === t ? void 0 : t.id, null === (n = m.emoji) || void 0 === n ? void 0 : n.name), P = (0, N.isEmojiEmpty)(m.emoji) || null != v || null != j;
                return !P && (D = g.default.Messages.GUILD_SETTINGS_ONBOARDING_PROMPT_INVALID_EMOJI), (0, a.jsxs)(o.Clickable, {
                    className: l(f.optionCard, {
                        [f.hasError]: C || null != D,
                        [f.dropIndicatorBefore]: null != x && M < x,
                        [f.dropIndicatorAfter]: null != x && M > x,
                        [f.singleColumn]: A
                    }),
                    onClick: () => (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("679844").then(s.bind(s, "679844"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            guild: c,
                            prompt: I,
                            option: m,
                            index: L,
                            onSave: e => {
                                (0, S.editGuildOnboardingPrompt)(c, I.id, {
                                    options: I.options.map(t => t.id === m.id ? e : t)
                                })
                            },
                            onDelete: () => {
                                (0, S.editGuildOnboardingPrompt)(c, I.id, {
                                    options: I.options.filter(e => e.id !== m.id)
                                })
                            }
                        })
                    }),
                    onMouseEnter: () => U(!0),
                    onMouseLeave: () => U(!1),
                    innerRef: e => G(p(e)),
                    children: [(0, a.jsx)("div", {
                        className: f.dragContainer,
                        children: (0, a.jsx)(T.default, {
                            className: f.dragIcon
                        })
                    }), (0, a.jsxs)("div", {
                        className: f.optionCardRow,
                        children: [(0, a.jsx)("div", {
                            className: f.emoji,
                            children: (0, a.jsx)(_.default, {
                                emojiId: null === (i = m.emoji) || void 0 === i ? void 0 : i.id,
                                emojiName: null === (d = m.emoji) || void 0 === d ? void 0 : d.name,
                                defaultComponent: null
                            })
                        }), (0, a.jsxs)("div", {
                            className: f.text,
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                lineClamp: 1,
                                children: m.title
                            }), "" !== m.description && (0, a.jsx)(o.Text, {
                                className: f.description,
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: m.description
                            })]
                        })]
                    }), null != D && (0, a.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-danger",
                        children: D
                    })]
                })
            }

            function L(e) {
                let {
                    guild: t,
                    prompt: n,
                    promptIndex: i,
                    singleColumn: r
                } = e, {
                    dropdownsAllowed: u
                } = (0, c.useOnboardingDropdownExperiment)(t.id), E = () => {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("679844").then(s.bind(s, "679844"));
                        return s => (0, a.jsx)(e, {
                            ...s,
                            guild: t,
                            prompt: n,
                            onSave: e => (0, S.editGuildOnboardingPrompt)(t, n.id, {
                                options: [...n.options, e]
                            }),
                            onDelete: () => {},
                            index: i
                        })
                    })
                };
                return (0, a.jsx)(o.Clickable, {
                    className: l(f.optionCard, f.addOptionCard, {
                        [f.addFirstOptionCard]: 0 === n.options.length,
                        [f.singleColumn]: r
                    }),
                    onClick: () => {
                        u && n.options.length + 1 === N.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD ? d.default.show({
                            title: g.default.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_TITLE,
                            body: g.default.Messages.ONBOARDING_PROMPT_THRESHOLD_ALERT_DESCRIPTION.format({
                                thresholdCount: N.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD
                            }),
                            confirmText: g.default.Messages.OKAY,
                            cancelText: g.default.Messages.CANCEL,
                            onConfirm: E
                        }) : E()
                    },
                    children: (0, a.jsxs)("div", {
                        className: f.optionCardRow,
                        children: [(0, a.jsx)(I.default, {
                            className: f.plusIcon,
                            width: 24,
                            height: 24
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: g.default.Messages.ONBOARDING_PROMPT_ADD_OPTION
                        })]
                    })
                })
            }