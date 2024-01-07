            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("272030"),
                i = s("100300"),
                r = s("879478"),
                o = s("151185"),
                d = s("179016"),
                u = s("567054"),
                c = s("546470"),
                E = s("782340"),
                _ = s("667456");

            function T(e) {
                let {
                    addFormField: t,
                    onSelect: s
                } = e;
                return (0, a.jsx)(n.Menu, {
                    navId: "add-questions",
                    className: _.menu,
                    onClose: l.closeContextMenu,
                    "aria-label": E.default.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: (0, a.jsxs)(n.MenuGroup, {
                        children: [(0, a.jsx)(n.MenuItem, {
                            id: "text-input",
                            icon: d.default,
                            label: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
                            action: () => (0, c.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.TEXT_INPUT, t)
                        }), (0, a.jsx)(n.MenuItem, {
                            id: "paragraph",
                            icon: r.default,
                            label: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
                            action: () => (0, c.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.PARAGRAPH, t)
                        }), (0, a.jsx)(n.MenuItem, {
                            id: "multiple-choice",
                            icon: i.default,
                            label: E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
                            action: () => (0, c.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.MULTIPLE_CHOICE, t)
                        })]
                    })
                })
            }
            var I = function(e) {
                let {
                    addFormField: t
                } = e, s = e => {
                    (0, l.openContextMenu)(e, e => (0, a.jsx)(T, {
                        ...e,
                        addFormField: t
                    }), {
                        position: "top",
                        align: "center"
                    })
                };
                return (0, a.jsx)("div", {
                    className: _.container,
                    children: (0, a.jsx)(n.Tooltip, {
                        text: E.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
                        children: e => (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(n.Clickable, {
                                ...e,
                                className: _.iconContainer,
                                onClick: s,
                                children: (0, a.jsx)(o.default, {
                                    width: 18,
                                    height: 20,
                                    className: _.icon
                                })
                            }), (0, a.jsx)(n.Text, {
                                color: "interactive-normal",
                                variant: "text-sm/normal",
                                children: E.default.Messages.MEMBER_VERIFICATION_ADD_QUESTION
                            })]
                        })
                    })
                })
            }