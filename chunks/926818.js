            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var l = s("37983"),
                a = s("884691"),
                i = s("77078"),
                n = s("350956"),
                r = s("145131"),
                d = s("496693"),
                o = s("730647"),
                u = s("782340"),
                c = s("968501");

            function C(e) {
                let {
                    guildTemplate: t,
                    onClick: s,
                    autoFocus: i
                } = e, r = a.useCallback(() => {
                    s(t)
                }, [t, s]);
                return (0, l.jsx)(n.default, {
                    icon: d.GUILD_TEMPLATE_ICONS[t.id],
                    message: t.label,
                    onClick: r,
                    autoFocus: i
                })
            }

            function m(e) {
                let {
                    onClose: t,
                    onBack: s,
                    onChooseTemplate: a,
                    directoryGuildName: n
                } = e, d = (0, o.getHubGuildTemplatesMap)();
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(i.ModalHeader, {
                        direction: r.default.Direction.VERTICAL,
                        className: c.header,
                        separator: !1,
                        children: [(0, l.jsx)(i.Heading, {
                            className: c.title,
                            variant: "heading-xl/semibold",
                            children: u.default.Messages.HUB_CREATE_OR_ADD_GUILD_TITLE.format({
                                guildName: n
                            })
                        }), (0, l.jsx)(i.Text, {
                            className: c.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: u.default.Messages.HUB_CREATE_OR_ADD_GUILD_SUBTITLE
                        }), null != t && (0, l.jsx)(i.ModalCloseButton, {
                            className: c.closeButton,
                            onClick: t
                        })]
                    }), (0, l.jsxs)(i.ModalContent, {
                        className: c.templatesList,
                        paddingFix: !1,
                        children: [(0, l.jsx)(C, {
                            guildTemplate: {
                                ...d[o.HubGuildTemplateId.CREATE],
                                label: u.default.Messages.HUB_CREATE_GUILD_CTA
                            },
                            onClick: a
                        }), (0, l.jsx)(i.Text, {
                            className: c.optionHeader,
                            color: "header-secondary",
                            variant: "text-xs/bold",
                            children: u.default.Messages.GUILD_TEMPLATE_SELECTOR_OPTION_HEADER
                        }), (0, l.jsx)(C, {
                            guildTemplate: d[o.HubGuildTemplateId.HUB_STUDY],
                            onClick: a
                        }), (0, l.jsx)(C, {
                            guildTemplate: d[o.HubGuildTemplateId.HUB_SCHOOL_CLUB],
                            onClick: a
                        }), (0, l.jsx)(C, {
                            guildTemplate: d[o.HubGuildTemplateId.HUB_CLASS],
                            onClick: a
                        }), (0, l.jsx)(C, {
                            guildTemplate: d[o.HubGuildTemplateId.HUB_SOCIAL],
                            onClick: a
                        }), (0, l.jsx)(C, {
                            guildTemplate: d[o.HubGuildTemplateId.HUB_MAJOR],
                            onClick: a
                        }), (0, l.jsx)(C, {
                            guildTemplate: d[o.HubGuildTemplateId.HUB_DORM],
                            onClick: a
                        })]
                    }), (0, l.jsx)(i.ModalFooter, {
                        className: c.footer,
                        children: (0, l.jsx)(i.Button, {
                            look: i.Button.Looks.BLANK,
                            size: i.Button.Sizes.MIN,
                            onClick: s,
                            children: u.default.Messages.BACK
                        })
                    })]
                })
            }