            "use strict";
            A.r(t), A.d(t, {
                default: function() {
                    return I
                }
            }), A("222007");
            var a = A("37983"),
                l = A("884691"),
                n = A("414456"),
                r = A.n(n),
                s = A("748820"),
                o = A("77078"),
                i = A("149022"),
                u = A("681060"),
                d = A("233069"),
                c = A("474643"),
                f = A("49111"),
                C = A("782340"),
                g = A("68233"),
                h = A("253469");
            let T = (0, s.v4)(),
                m = (0, d.createChannelRecord)({
                    id: "1",
                    type: f.ChannelTypes.DM
                });

            function p() {
                return new Promise(e => {
                    e({
                        shouldClear: !1,
                        shouldRefocus: !0
                    })
                })
            }

            function U(e) {
                var t;
                let {
                    hasError: A,
                    maxLength: l,
                    text: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: r(h.maxLength, {
                        [h.errorOverflow]: A
                    }),
                    "aria-hidden": "true",
                    children: [null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0, " ", null != l && "/ ".concat(l)]
                })
            }

            function I(e) {
                var t;
                let {
                    "aria-labelledby": A,
                    className: n,
                    id: s,
                    autoFocus: d,
                    maxLength: f,
                    onChange: h,
                    onSubmit: I,
                    showCharacterCount: v = !1,
                    placeholder: E,
                    required: x,
                    value: N,
                    enableThemedBackground: q = !1,
                    parentModalKey: O
                } = e, R = (0, o.useFormContext)(), [L, D] = l.useState(() => (0, i.toRichValue)(N)), P = l.useRef(!0 === d), V = null != A ? A : null == R ? void 0 : R.titleId, j = null !== (t = null == R ? void 0 : R.errorId) && void 0 !== t ? t : T, b = l.useMemo(() => ({
                    analyticsName: "simple",
                    autocomplete: {
                        alwaysUseLayer: !0,
                        small: !0
                    },
                    disableAutoFocus: !0 !== d,
                    drafts: {
                        type: c.DraftType.ChannelMessage
                    },
                    emojis: {
                        button: !0
                    },
                    permissions: {
                        requireSendMessages: !1
                    },
                    submit: {
                        useDisabledStylesOnSubmit: !0,
                        disableEnterToSubmit: !0
                    }
                }), [d]);
                return (0, a.jsxs)(u.default, {
                    "aria-describedby": j,
                    "aria-labelledby": V,
                    innerClassName: r(n, g.textArea),
                    id: s,
                    maxCharacterCount: f,
                    onChange: function(e, t, A) {
                        h(t), D(A)
                    },
                    placeholder: E,
                    required: x,
                    channel: m,
                    textValue: N,
                    richValue: L,
                    type: b,
                    onBlur: () => {
                        P.current = !1
                    },
                    onFocus: () => {
                        P.current = !0
                    },
                    focused: P.current,
                    onSubmit: null != I ? I : p,
                    disableThemedBackground: !q,
                    parentModalKey: O,
                    emojiPickerCloseOnModalOuterClick: !0,
                    children: [!0 === v && (0, a.jsx)(U, {
                        hasError: null != R.error || null != f && N.length > f,
                        text: N,
                        maxLength: f
                    }), null != f && (0, a.jsx)(o.HiddenVisually, {
                        id: T,
                        children: C.default.Messages.MAXIMUM_LENGTH.format({
                            maxLength: f
                        })
                    })]
                })
            }