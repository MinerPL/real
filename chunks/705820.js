            "use strict";
            n.r(t), n.d(t, {
                CUSTOM_GIFT_MESSAGE_MAX_LENGTH: function() {
                    return I
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("414456"),
                i = n.n(l),
                a = n("77078"),
                u = n("850391"),
                o = n("149022"),
                c = n("681060"),
                d = n("570697"),
                f = n("233069"),
                m = n("49111"),
                _ = n("782340"),
                E = n("809331");
            let I = 190,
                p = (0, f.createChannelRecord)({
                    id: "1",
                    type: m.ChannelTypes.DM
                });

            function N(e) {
                let {
                    sectionTitle: t,
                    errors: n,
                    onTextChange: l,
                    pendingText: f,
                    placeholder: m,
                    currentText: N,
                    className: S,
                    innerClassName: P,
                    disabled: T = !1,
                    disableThemedBackground: C = !1
                } = e, [A, h] = r.useState(null != f ? f : N), [O, R] = r.useState((0, o.toRichValue)(A)), g = r.useRef(!1);
                return r.useEffect(() => {
                    g.current = !0
                }, []), r.useEffect(() => {
                    if (void 0 === f) {
                        let e = (0, o.toRichValue)(N);
                        h(N), R(e)
                    }
                }, [f, N]), (0, s.jsx)("div", {
                    className: i(E.body, S),
                    children: (0, s.jsxs)(d.default, {
                        title: t,
                        errors: n,
                        disabled: T,
                        children: [(0, s.jsx)(c.default, {
                            innerClassName: i(E.textArea, P),
                            editorClassName: E.editorTextArea,
                            maxCharacterCount: I,
                            onChange: function(e, t, n) {
                                t !== A && (h(t), R(n), l(t))
                            },
                            placeholder: m,
                            channel: p,
                            textValue: A,
                            richValue: O,
                            type: u.ChatInputTypes.CUSTOM_GIFT,
                            onBlur: () => {
                                g.current = !1
                            },
                            onFocus: () => {
                                g.current = !0
                            },
                            focused: g.current,
                            onSubmit: function() {
                                return new Promise(e => {
                                    e({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                })
                            },
                            disableThemedBackground: C
                        }), (0, s.jsx)(a.HiddenVisually, {
                            children: _.default.Messages.MAXIMUM_LENGTH.format({
                                maxLength: I
                            })
                        })]
                    })
                })
            }