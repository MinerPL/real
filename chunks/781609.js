            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("446674"),
                i = s("697218"),
                n = s("975743"),
                u = s("567054"),
                r = s("272460"),
                o = s("472850"),
                d = s("199901"),
                c = s("772970"),
                E = s("621115"),
                I = s("782340"),
                S = function(e) {
                    let {
                        formFields: t,
                        user: s
                    } = e, S = (0, l.useStateFromStores)([i.default], () => null != s ? s : i.default.getCurrentUser());
                    return null == S ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.RequirementRenderer, {
                            icon: n.default,
                            text: I.default.Messages.MEMBER_VERIFICATION_FORM_PASSED_REQUIREMENTS,
                            meetsRequirement: !0
                        }), t.map((e, t) => (function(e, t) {
                            switch (e.field_type) {
                                case u.VerificationFormFieldTypes.TERMS:
                                    return (0, a.jsx)(c.DisabledTermsRequirementFormField, {
                                        formField: e
                                    }, t);
                                case u.VerificationFormFieldTypes.TEXT_INPUT:
                                    return (0, a.jsx)(E.DisabledTextInputFormField, {
                                        formField: e
                                    }, t);
                                case u.VerificationFormFieldTypes.PARAGRAPH:
                                    return (0, a.jsx)(d.DisabledParagraphFormField, {
                                        formField: e
                                    }, t);
                                case u.VerificationFormFieldTypes.MULTIPLE_CHOICE:
                                    return (0, a.jsx)(o.DisabledMultipleChoiceFormField, {
                                        formField: e
                                    }, t)
                            }
                        })(e, t))]
                    })
                }