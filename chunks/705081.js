            "use strict";
            s.r(t), s.d(t, {
                PreviewEmailRequirementFormField: function() {
                    return I
                },
                EmailRequirementFormField: function() {
                    return m
                }
            }), s("222007");
            var l = s("37983"),
                n = s("884691"),
                i = s("77078"),
                r = s("437822"),
                a = s("556081"),
                u = s("272460"),
                d = s("782340"),
                o = s("847121");

            function c() {
                let [e, t] = n.useState(!1), [s, a] = n.useState(!1), [u, c] = n.useState(!1);
                n.useEffect(() => {
                    let e;
                    return s && (e = setTimeout(() => {
                        a(!1)
                    }, 2e3)), () => {
                        null != e && clearTimeout(e)
                    }
                }, [s]);
                let I = async () => {
                    if (!e) {
                        t(!0);
                        try {
                            await r.default.verifyResend(), a(!0), c(!0)
                        } catch (e) {} finally {
                            t(!1)
                        }
                    }
                };
                return s ? (0, l.jsx)(i.Text, {
                    className: o.verifyConfirmText,
                    variant: "text-sm/normal",
                    color: "text-positive",
                    children: d.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT
                }) : (0, l.jsx)(i.Button, {
                    size: i.Button.Sizes.SMALL,
                    submitting: e,
                    onClick: I,
                    children: u ? d.default.Messages.RESEND_EMAIL_SHORT : d.default.Messages.VERIFY
                })
            }

            function I() {
                return (0, l.jsx)(u.RequirementWithActionRenderer, {
                    icon: a.default,
                    text: d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL,
                    footnote: d.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                    meetsRequirement: !1,
                    children: (0, l.jsx)(i.Tooltip, {
                        text: d.default.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
                        children: e => (0, l.jsx)(i.Button, {
                            ...e,
                            size: i.Button.Sizes.SMALL,
                            disabled: !0,
                            children: d.default.Messages.VERIFY
                        })
                    })
                })
            }

            function m(e) {
                let {
                    isUserVerified: t
                } = e, s = t ? d.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFIED : d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_LABEL;
                return (0, l.jsx)(u.RequirementWithActionRenderer, {
                    icon: a.default,
                    text: s,
                    footnote: d.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                    meetsRequirement: t,
                    children: (0, l.jsx)(c, {})
                })
            }