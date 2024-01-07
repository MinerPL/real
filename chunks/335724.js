            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("213523"),
                o = s("567054"),
                d = s("546470"),
                u = s("782340"),
                c = s("977618"),
                E = function(e) {
                    let {
                        addFormField: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: l(c.spacingContainer, c.leftRailIconContainer, c.backgroundContainer),
                        children: [(0, a.jsx)("div", {
                            className: c.iconContainer,
                            children: (0, a.jsx)(r.default, {
                                width: 18,
                                height: 20,
                                className: c.icon
                            })
                        }), (0, a.jsxs)(i.FormSection, {
                            children: [(0, a.jsx)(i.FormTitle, {
                                tag: "h3",
                                className: c.leftRailIconContainerTitle,
                                children: u.default.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE
                            }), (0, a.jsx)(i.FormText, {
                                className: c.leftRailIconContainerDescription,
                                type: i.FormText.Types.DESCRIPTION,
                                children: u.default.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION
                            }), (0, a.jsx)(i.Button, {
                                onClick: () => (0, d.openEmptyFormFieldModal)(o.VerificationFormFieldTypes.TERMS, t),
                                children: u.default.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON
                            })]
                        })]
                    })
                }