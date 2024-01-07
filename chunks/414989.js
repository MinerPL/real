            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("100300"),
                r = s("879478"),
                o = s("151185"),
                d = s("179016"),
                u = s("567054"),
                c = s("546470"),
                E = s("782340"),
                _ = s("977618");

            function T(e) {
                let {
                    onClick: t,
                    text: s,
                    icon: n
                } = e;
                return (0, a.jsx)("div", {
                    className: _.addFormFieldContainer,
                    children: (0, a.jsxs)(l.Clickable, {
                        className: _.addFormField,
                        onClick: t,
                        children: [(0, a.jsx)(n, {
                            className: _.icon,
                            height: 16,
                            width: 16
                        }), (0, a.jsx)(l.FormText, {
                            className: _.addFormFieldText,
                            children: s
                        })]
                    })
                })
            }
            var I = function(e) {
                let {
                    addFormField: t,
                    hasManualFormFields: I
                } = e, S = n.useCallback(e => {
                    (0, c.openEmptyFormFieldModal)(e, t)
                }, [t]), N = n.useCallback(e => {
                    I ? S(e) : (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await s.el("331761").then(s.bind(s, "331761"));
                        return s => (0, a.jsx)(t, {
                            ...s,
                            onSubmit: () => S(e)
                        })
                    })
                }, [I, S]);
                return (0, a.jsxs)("div", {
                    className: _.backgroundContainer,
                    children: [(0, a.jsx)("div", {
                        className: _.containerTopHat,
                        children: (0, a.jsx)(l.Text, {
                            className: _.containerTopHatText,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: E.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
                        })
                    }), (0, a.jsxs)("div", {
                        className: _.leftRailIconContainer,
                        children: [(0, a.jsx)("div", {
                            className: _.iconContainer,
                            children: (0, a.jsx)(o.default, {
                                width: 18,
                                height: 20,
                                className: _.icon
                            })
                        }), (0, a.jsxs)(l.FormSection, {
                            children: [(0, a.jsx)(l.FormTitle, {
                                tag: "h3",
                                className: _.leftRailIconContainerTitle,
                                children: E.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
                            }), (0, a.jsx)(l.FormText, {
                                className: _.leftRailIconContainerDescription,
                                type: l.FormText.Types.DESCRIPTION,
                                children: E.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
                            }), (0, a.jsx)(T, {
                                formFieldType: u.VerificationFormFieldTypes.TEXT_INPUT,
                                addFormField: t,
                                icon: d.default,
                                text: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
                                onClick: () => N(u.VerificationFormFieldTypes.TEXT_INPUT)
                            }), (0, a.jsx)(T, {
                                formFieldType: u.VerificationFormFieldTypes.PARAGRAPH,
                                addFormField: t,
                                icon: r.default,
                                text: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
                                onClick: () => N(u.VerificationFormFieldTypes.PARAGRAPH)
                            }), (0, a.jsx)(T, {
                                formFieldType: u.VerificationFormFieldTypes.MULTIPLE_CHOICE,
                                addFormField: t,
                                icon: i.default,
                                text: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
                                onClick: () => N(u.VerificationFormFieldTypes.MULTIPLE_CHOICE)
                            })]
                        })]
                    })]
                })
            }