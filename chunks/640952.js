            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            }), s("222007");
            var l = s("37983"),
                a = s("884691"),
                i = s("77078"),
                n = s("599417"),
                d = s("145131"),
                r = s("730647"),
                o = s("782340"),
                u = s("852243");

            function c(e) {
                let {
                    directoryChannelId: t,
                    description: s,
                    onDescriptionChange: c,
                    categoryId: C,
                    onCategoryIdChange: m,
                    onSubmit: f,
                    onClose: E,
                    onBack: T
                } = e, [_, x] = a.useState(!1), [I, L] = a.useState(null), h = async () => {
                    x(!0);
                    try {
                        await f()
                    } catch (e) {
                        L(new n.default(e))
                    }
                    x(!1)
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(i.ModalHeader, {
                        direction: d.default.Direction.VERTICAL,
                        className: u.header,
                        separator: !1,
                        children: [(0, l.jsx)(i.Heading, {
                            className: u.title,
                            variant: "heading-xl/semibold",
                            children: o.default.Messages.HUB_CUSTOMIZE_GUILD_TITLE
                        }), (0, l.jsx)(i.Text, {
                            className: u.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: o.default.Messages.HUB_CUSTOMIZE_GUILD_SUBTITLE
                        }), null != E && (0, l.jsx)(i.ModalCloseButton, {
                            className: u.closeButton,
                            onClick: E
                        })]
                    }), (0, l.jsxs)(i.ModalContent, {
                        className: u.createGuild,
                        paddingFix: !1,
                        children: [(0, l.jsx)(i.FormItem, {
                            title: o.default.Messages.HUB_ADD_GUILD_DESCRIPTION_TITLE,
                            children: (0, l.jsx)(i.TextArea, {
                                value: s,
                                maxLength: 200,
                                placeholder: o.default.Messages.HUB_ADD_GUILD_DESCRIPTION_PLACEHOLDER,
                                onChange: c,
                                error: null == I ? void 0 : I.getAnyErrorMessage()
                            })
                        }), (0, l.jsx)(i.FormItem, {
                            className: u.formItemSpaced,
                            title: o.default.Messages.HUB_ADD_GUILD_CATEGORY_TITLE,
                            children: (0, l.jsx)(i.SingleSelect, {
                                placeholder: o.default.Messages.SELECT,
                                options: (0, r.getHubCategories)(t),
                                clearable: !1,
                                value: C,
                                onChange: m,
                                maxVisibleItems: 4,
                                popoutClassName: "theme-light"
                            })
                        })]
                    }), (0, l.jsxs)(i.ModalFooter, {
                        justify: d.default.Justify.BETWEEN,
                        children: [(0, l.jsx)(i.Button, {
                            color: i.Button.Colors.BRAND,
                            onClick: h,
                            submitting: _,
                            disabled: "" === s || C === r.DirectoryEntryCategories.UNCATEGORIZED,
                            children: o.default.Messages.HUB_ADD_SERVER_CTA
                        }), (0, l.jsx)(i.Button, {
                            look: i.Button.Looks.BLANK,
                            size: i.Button.Sizes.MIN,
                            onClick: T,
                            children: o.default.Messages.BACK
                        })]
                    })]
                })
            }