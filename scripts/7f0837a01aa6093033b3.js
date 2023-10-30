(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84361"], {
        437030: function(e, s, a) {
            "use strict";
            e.exports = a.p + "2c7de9076c125b8dc602.png"
        },
        390251: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return x
                }
            });
            var t = a("37983");
            a("884691");
            var l = a("271841"),
                n = a("77078"),
                c = a("298878"),
                i = a("945330"),
                o = a("474571"),
                r = a("909004"),
                d = a("701909"),
                h = a("49111"),
                u = a("782340"),
                N = a("844847"),
                m = a("437030");

            function x(e) {
                return (0, t.jsxs)(n.ModalRoot, {
                    className: N.root,
                    transitionState: e.transitionState,
                    "aria-label": u.default.Messages.SUMMARIES_UPSELL_ENABLED,
                    children: [(0, t.jsxs)(n.ModalHeader, {
                        className: N.header,
                        separator: !1,
                        children: [(0, t.jsx)("img", {
                            className: N.headerImage,
                            src: m,
                            alt: ""
                        }), (0, t.jsx)(l.Button, {
                            "aria-label": u.default.Messages.CLOSE,
                            look: l.Button.Looks.BLANK,
                            size: l.Button.Sizes.NONE,
                            onClick: e.onClose,
                            className: N.close,
                            children: (0, t.jsx)(i.default, {
                                width: 18,
                                height: 18,
                                className: N.closeIcon
                            })
                        })]
                    }), (0, t.jsxs)(n.ModalContent, {
                        className: N.content,
                        children: [(0, t.jsx)("div", {
                            className: N.betaTagContainer,
                            children: (0, t.jsx)(c.default, {
                                className: N.betaTag
                            })
                        }), (0, t.jsx)(n.Heading, {
                            className: N.contentTitle,
                            variant: "heading-xl/semibold",
                            children: u.default.Messages.SUMMARIES_UPSELL_ENABLED
                        }), (0, t.jsxs)(n.Text, {
                            variant: "text-md/normal",
                            color: "text-normal",
                            className: N.contentSubtitle,
                            children: [u.default.Messages.SUMMARIES_UPSELL_ENABLED_SUBTITLE, " ", u.default.Messages.SUMMARIES_MOBILE_SOON]
                        }), (0, t.jsxs)("div", {
                            className: N.contentBullets,
                            children: [(0, t.jsxs)("div", {
                                className: N.contentBullet,
                                children: [(0, t.jsx)("div", {
                                    className: N.iconContainer,
                                    children: (0, t.jsx)(r.default, {
                                        width: 20,
                                        height: 20,
                                        className: N.icon
                                    })
                                }), (0, t.jsx)(n.Text, {
                                    className: N.contentText,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: u.default.Messages.SUMMARIES_UPSELL_BULLET_1
                                })]
                            }), (0, t.jsxs)("div", {
                                className: N.contentBullet,
                                children: [(0, t.jsx)("div", {
                                    className: N.iconContainer,
                                    children: (0, t.jsx)(o.default, {
                                        width: 20,
                                        height: 20,
                                        className: N.icon
                                    })
                                }), (0, t.jsx)(n.Text, {
                                    className: N.contentText,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: u.default.Messages.SUMMARIES_UPSELL_BULLET_2
                                })]
                            })]
                        })]
                    }), (0, t.jsx)(n.ModalFooter, {
                        className: N.footer,
                        separator: !1,
                        children: u.default.Messages.SUMMARIES_UPSELL_ENABLED_LEARN_MORE_LINK.format({
                            helpdeskArticle: d.default.getArticleURL(h.HelpdeskArticles.CONVERSATION_SUMMARIES)
                        })
                    })]
                })
            }
        }
    }
]);