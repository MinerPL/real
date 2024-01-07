            "use strict";
            s.r(a), s.d(a, {
                default: function() {
                    return C
                }
            });
            var n = s("37983"),
                t = s("884691"),
                l = s("414456"),
                E = s.n(l),
                _ = s("77078"),
                d = s("145131"),
                i = s("579333"),
                T = s("350956"),
                r = s("47212"),
                u = s("782340"),
                L = s("238428");

            function M(e) {
                let {
                    guildTemplate: a,
                    onClick: s,
                    autoFocus: l
                } = e, E = t.useCallback(() => {
                    s(a)
                }, [a, s]);
                return (0, n.jsx)(T.default, {
                    icon: i.GUILD_TEMPLATE_ICONS[a.id],
                    message: a.label,
                    onClick: E,
                    autoFocus: l
                })
            }

            function C(e) {
                let {
                    className: a,
                    isNewUser: s,
                    onClose: t,
                    onChooseTemplate: l,
                    onJoin: i
                } = e, T = (0, r.getGuildTemplatesMap)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(_.ModalHeader, {
                        direction: d.default.Direction.VERTICAL,
                        className: L.header,
                        separator: !1,
                        children: [(0, n.jsx)(_.Heading, {
                            className: L.title,
                            variant: "heading-xl/semibold",
                            children: s ? u.default.Messages.NUF_DESKTOP_TEMPLATES_TITLE : u.default.Messages.GUILD_CREATE_TITLE
                        }), (0, n.jsx)(_.Text, {
                            className: L.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: u.default.Messages.NUF_DESKTOP_TEMPLATES_SUBTITLE
                        }), null != t && (0, n.jsx)(_.ModalCloseButton, {
                            className: L.closeButton,
                            onClick: t
                        })]
                    }), (0, n.jsxs)(_.ModalContent, {
                        className: E(L.templatesList, a),
                        paddingFix: !1,
                        children: [(0, n.jsx)(M, {
                            guildTemplate: T[r.GuildTemplateId.CREATE],
                            onClick: l,
                            autoFocus: !0
                        }), (0, n.jsx)(_.Text, {
                            className: L.optionHeader,
                            color: "header-secondary",
                            variant: "text-xs/bold",
                            children: u.default.Messages.GUILD_TEMPLATE_SELECTOR_OPTION_HEADER
                        }), (0, n.jsx)(M, {
                            guildTemplate: T[r.GuildTemplateId.GAMING],
                            onClick: l
                        }), (0, n.jsx)(M, {
                            guildTemplate: T[r.GuildTemplateId.SCHOOL_CLUB],
                            onClick: l
                        }), (0, n.jsx)(M, {
                            guildTemplate: T[r.GuildTemplateId.STUDY],
                            onClick: l
                        }), (0, n.jsx)(M, {
                            guildTemplate: T[r.GuildTemplateId.FRIENDS],
                            onClick: l
                        }), (0, n.jsx)(M, {
                            guildTemplate: T[r.GuildTemplateId.CREATORS],
                            onClick: l
                        }), (0, n.jsx)(M, {
                            guildTemplate: T[r.GuildTemplateId.LOCAL_COMMUNITY],
                            onClick: l
                        })]
                    }), null != i && (0, n.jsxs)(_.ModalFooter, {
                        className: L.footer,
                        children: [(0, n.jsx)(_.Heading, {
                            variant: "heading-lg/semibold",
                            className: L.footerTitle,
                            children: u.default.Messages.NUF_HAVE_AN_INVITE_ALREADY
                        }), (0, n.jsx)(_.Button, {
                            className: L.footerButton,
                            color: _.Button.Colors.PRIMARY,
                            onClick: i,
                            children: u.default.Messages.JOIN_SERVER_TITLE
                        })]
                    })]
                })
            }