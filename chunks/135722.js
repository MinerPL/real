            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var u = r("77078"),
                i = r("305961"),
                o = r("476765"),
                s = r("285899"),
                a = r("782340"),
                c = r("334931"),
                l = t => {
                    let {
                        onClose: e,
                        guildId: r
                    } = t, l = (0, o.useUID)(), f = a.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format({
                        helpdeskArticle: s.GUILD_LIMITED_ACCESS_HC_LINK
                    }), d = i.default.getGuild(r);
                    return null != d && (f = a.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format({
                        guildName: d.name,
                        helpdeskArticle: s.GUILD_LIMITED_ACCESS_HC_LINK
                    })), (0, n.jsxs)(u.ModalRoot, {
                        ...t,
                        "aria-labelledby": l,
                        children: [(0, n.jsxs)(u.ModalHeader, {
                            separator: !1,
                            className: c.modalHeader,
                            children: [(0, n.jsx)(u.Heading, {
                                id: l,
                                variant: "heading-xl/extrabold",
                                children: a.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING
                            }), (0, n.jsx)(u.ModalCloseButton, {
                                className: c.closeButton,
                                onClick: e
                            })]
                        }), (0, n.jsx)(u.ModalContent, {
                            className: c.modalContent,
                            children: (0, n.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: c.contentText,
                                children: f
                            })
                        }), (0, n.jsx)(u.ModalFooter, {
                            children: (0, n.jsx)(u.Button, {
                                className: c.button,
                                size: u.Button.Sizes.MIN,
                                onClick: e,
                                children: a.default.Messages.OKAY
                            })
                        })]
                    })
                }