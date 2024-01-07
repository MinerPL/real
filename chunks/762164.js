            "use strict";
            s.r(t), s.d(t, {
                PreviewPhoneRequirementFormField: function() {
                    return o
                },
                PhoneRequirementFormField: function() {
                    return c
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("77078"),
                i = s("878720"),
                r = s("216947"),
                a = s("272460"),
                u = s("482931"),
                d = s("782340");

            function o() {
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(a.RequirementWithActionRenderer, {
                        icon: r.default,
                        text: d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL,
                        footnote: d.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                        meetsRequirement: !1,
                        children: (0, l.jsx)(n.Tooltip, {
                            text: d.default.Messages.MEMBER_VERIFICATION_VERIFICATION_FIELD_SETTINGS_TOOLTIP,
                            children: e => (0, l.jsx)(n.Button, {
                                ...e,
                                size: n.Button.Sizes.SMALL,
                                disabled: !0,
                                children: d.default.Messages.VERIFY
                            })
                        })
                    })
                })
            }

            function c(e) {
                let {
                    isUserVerified: t
                } = e, o = t ? d.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED : d.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_LABEL;
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(a.RequirementWithActionRenderer, {
                        icon: r.default,
                        text: o,
                        footnote: d.default.Messages.MEMBER_VERIFICATION_MODAL_PRIVACY_DESCRIPTION,
                        meetsRequirement: t,
                        children: (0, l.jsx)(n.Button, {
                            size: n.Button.Sizes.SMALL,
                            onClick: () => {
                                (0, n.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await s.el("601745").then(s.bind(s, "601745"));
                                    return t => (0, l.jsx)(e, {
                                        reason: i.ChangePhoneReason.GUILD_PHONE_REQUIRED,
                                        ...t
                                    })
                                }, {
                                    modalKey: u.PHONE_VERIFICATION_MODAL_KEY
                                })
                            },
                            children: d.default.Messages.VERIFY
                        })
                    })
                })
            }