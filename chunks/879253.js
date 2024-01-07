            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalPersonalitySection: function() {
                    return _
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("65597"),
                s = n("77078"),
                a = n("570697"),
                o = n("826432"),
                u = n("204203"),
                c = n("599110"),
                d = n("335189"),
                f = n("473591"),
                h = n("680894"),
                E = n("49111"),
                C = n("782340"),
                p = n("192731");

            function _(e) {
                var t;
                let {
                    settings: n
                } = e, [_, v] = i.useState(!1), [m, R] = i.useState(), {
                    pendingPersonality: I,
                    errors: g
                } = (0, r.useStateFromStoresObject)([f.default], () => ({
                    pendingPersonality: f.default.getPendingPersonality(),
                    errors: f.default.getErrors()
                })), [S, N] = i.useState(), L = null != I && m === I, T = null != g && Number(g.code) === E.AbortCodes.CLYDE_UNSAFE_PERSONALITY ? g.message : void 0, x = L ? C.default.Messages.CLYDE_GENERATE_PERSONALITY_UNDO : C.default.Messages.CLYDE_GENERATE_PERSONALITY_HINT;
                return (0, l.jsxs)(a.default, {
                    title: C.default.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, l.jsxs)(s.FormText, {
                        type: s.FormText.Types.DESCRIPTION,
                        className: p.description,
                        children: [C.default.Messages.PERSONALITY_DESCRIPTION, " ", (0, l.jsx)(s.Anchor, {
                            href: h.CLYDE_PERSONALITY_FEEDBACK_URL,
                            children: C.default.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, l.jsx)(s.TextArea, {
                        value: null !== (t = null != I ? I : n.personality) && void 0 !== t ? t : "",
                        onChange: e => {
                            (0, d.setPendingPersonality)(e)
                        },
                        placeholder: C.default.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: h.CLYDE_PERSONALITY_MAX_LENGTH,
                        disabled: _,
                        autosize: !0
                    }), null != T ? (0, l.jsx)(s.FormErrorBlock, {
                        className: p.errorBlock,
                        children: T
                    }) : null, (0, l.jsxs)("div", {
                        className: p.generateButtonContainer,
                        children: [(0, l.jsx)(s.Button, {
                            color: L ? s.ButtonColors.PRIMARY : s.ButtonColors.BRAND,
                            innerClassName: p.generateButton,
                            onClick: () => {
                                if (L && null != S) {
                                    (0, d.setPendingPersonality)(S), N(void 0);
                                    return
                                }
                                null != I && "" !== I.trim() && (c.default.track(E.AnalyticEvents.CLYDE_AI_GENERATE_PERSONALITY_CLICKED, {
                                    guild_id: n.guild_id
                                }), v(!0), (0, d.generatePersonality)(I).then(e => {
                                    null != e && (N(I), R(e), (0, d.setPendingPersonality)(e, !0)), v(!1)
                                }))
                            },
                            disabled: null == I || "" === I.trim(),
                            submitting: _,
                            children: L ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(u.default, {
                                    className: p.buttonIcon
                                }), C.default.Messages.UNDO]
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.default, {
                                    className: p.buttonIcon
                                }), C.default.Messages.CLYDE_GENERATE_PERSONALITY]
                            })
                        }), (0, l.jsx)(s.Text, {
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: x
                        })]
                    })]
                }, "personality")
            }