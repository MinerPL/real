            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("850391"),
                r = s("149022"),
                o = s("681060"),
                d = s("233069"),
                u = s("476765"),
                c = s("570697"),
                S = s("49111"),
                E = s("782340"),
                f = s("515847");
            let m = (0, u.uid)(),
                T = (0, d.createChannelRecord)({
                    id: "1",
                    type: S.ChannelTypes.DM
                }),
                _ = (0, u.uid)();

            function g(e) {
                let {
                    sectionTitle: t,
                    errors: s,
                    onBioChange: d,
                    pendingBio: u,
                    placeholder: g,
                    currentBio: h,
                    disabled: I = !1
                } = e, [N, p] = n.useState(null != u ? u : h), [C, A] = n.useState((0, r.toRichValue)(N)), O = n.useRef(!1);
                return n.useEffect(() => {
                    if (void 0 === u) {
                        let e = (0, r.toRichValue)(h);
                        p(h), A(e)
                    }
                }, [u, h]), (0, a.jsxs)(c.default, {
                    title: t,
                    titleId: m,
                    description: E.default.Messages.USER_SETTINGS_ABOUT_ME_DETAILS,
                    errors: s,
                    disabled: I,
                    children: [(0, a.jsx)(o.default, {
                        "aria-describedby": _,
                        "aria-labelledby": m,
                        innerClassName: f.bioTextArea,
                        maxCharacterCount: S.BIO_MAX_LENGTH,
                        onChange: function(e, t, s) {
                            t !== N && (p(t), A(s), d(t))
                        },
                        placeholder: g,
                        channel: T,
                        textValue: N,
                        richValue: C,
                        type: i.ChatInputTypes.PROFILE_BIO_INPUT,
                        onBlur: () => {
                            O.current = !1
                        },
                        onFocus: () => {
                            O.current = !0
                        },
                        focused: O.current,
                        onSubmit: function() {
                            return new Promise(e => {
                                e({
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                })
                            })
                        }
                    }), (0, a.jsx)(l.HiddenVisually, {
                        id: _,
                        children: E.default.Messages.MAXIMUM_LENGTH.format({
                            maxLength: S.BIO_MAX_LENGTH
                        })
                    })]
                })
            }