            "use strict";
            s.r(t), s.d(t, {
                PreviewFormRenderer: function() {
                    return R
                },
                ApplicantFormRenderer: function() {
                    return _
                }
            }), s("222007");
            var l = s("37983"),
                n = s("884691"),
                i = s("446674"),
                r = s("305961"),
                a = s("697218"),
                u = s("567054"),
                d = s("528507"),
                o = s("705081"),
                c = s("472850"),
                I = s("199901"),
                m = s("762164"),
                E = s("772970"),
                f = s("621115");

            function M(e) {
                let {
                    guildId: t,
                    formFields: s,
                    updateFormFields: n
                } = e, a = (0, i.useStateFromStores)([r.default], () => {
                    var e;
                    return null === (e = r.default.getGuild(t)) || void 0 === e ? void 0 : e.rulesChannelId
                }), d = (e, t) => {
                    let l = s[e];
                    n([...s.slice(0, e), {
                        ...l,
                        response: t
                    }, ...s.slice(e + 1)])
                }, o = (e, t) => {
                    let l = s[e];
                    n([...s.slice(0, e), {
                        ...l,
                        response: t
                    }, ...s.slice(e + 1)])
                }, m = (e, t) => {
                    let {
                        value: l
                    } = t, i = s[e];
                    n([...s.slice(0, e), {
                        ...i,
                        response: l
                    }, ...s.slice(e + 1)])
                }, M = (e, t) => {
                    switch (e.field_type) {
                        case u.VerificationFormFieldTypes.TERMS:
                            return (0, l.jsx)(E.TermsFormField, {
                                channelId: a,
                                formField: e,
                                onChange: (e, s) => d(t, s)
                            }, t);
                        case u.VerificationFormFieldTypes.TEXT_INPUT:
                            return (0, l.jsx)(f.TextInputFormField, {
                                formField: e,
                                onChange: e => o(t, e)
                            }, t);
                        case u.VerificationFormFieldTypes.PARAGRAPH:
                            return (0, l.jsx)(I.ParagraphFormField, {
                                formField: e,
                                onChange: e => o(t, e)
                            }, t);
                        case u.VerificationFormFieldTypes.MULTIPLE_CHOICE:
                            return (0, l.jsx)(c.MultipleChoiceFormField, {
                                formField: e,
                                onChange: e => m(t, e)
                            }, t)
                    }
                };
                return (0, l.jsx)(l.Fragment, {
                    children: s.map((e, t) => M(e, t))
                })
            }

            function R(e) {
                let {
                    guildId: t,
                    formFields: s,
                    updateFormFields: n
                } = e, r = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()), u = (0, d.useIsPhoneVerificationLevel)({
                    guildId: t
                }), c = u ? m.PreviewPhoneRequirementFormField : o.PreviewEmailRequirementFormField;
                return null == r ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(c, {}), (0, l.jsx)(M, {
                        guildId: t,
                        formFields: s,
                        updateFormFields: n
                    })]
                })
            }

            function _(e) {
                let {
                    guildId: t,
                    formFields: s,
                    updateFormFields: r
                } = e, u = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()), {
                    isPhoneVerificationLevel: c,
                    isCurrentUserVerified: I
                } = (0, d.useCurrentUserVerificationStatus)({
                    guildId: t
                }), E = n.useRef(I), f = c ? m.PhoneRequirementFormField : o.EmailRequirementFormField;
                return null == u ? null : (0, l.jsxs)(l.Fragment, {
                    children: [!E.current && (0, l.jsx)(f, {
                        isUserVerified: I
                    }), (0, l.jsx)(M, {
                        guildId: t,
                        formFields: s,
                        updateFormFields: r
                    })]
                })
            }