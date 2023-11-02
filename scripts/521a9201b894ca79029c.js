(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63081"], {
        653240: function(e, s, t) {
            "use strict";
            e.exports = t.p + "baa5b6db50bb89d55668.svg"
        },
        540758: function(e, s, t) {
            "use strict";
            e.exports = t.p + "abb37025036befe38e64.svg"
        },
        651662: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return f
                }
            });
            var a = t("37983");
            t("884691");
            var o = t("819855"),
                l = t("77078"),
                n = t("841098"),
                r = t("476765"),
                c = t("782340"),
                i = t("310477"),
                d = t("653240"),
                u = t("540758");

            function f(e) {
                let {
                    onClose: s,
                    transitionState: t
                } = e, f = (0, r.useUID)(), h = (0, o.isThemeDark)((0, n.default)());
                return (0, a.jsxs)(l.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": f,
                    size: l.ModalSize.SMALL,
                    children: [(0, a.jsxs)(l.ModalContent, {
                        className: i.content,
                        children: [(0, a.jsx)(l.ModalCloseButton, {
                            className: i.closeButton,
                            onClick: s
                        }), (0, a.jsx)("img", {
                            className: i.image,
                            src: h ? d : u,
                            alt: ""
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-lg/semibold",
                            color: "header-primary",
                            className: i.title,
                            children: c.default.Messages.GUILD_PRODUCT_NOT_AVAILABLE_TITLE
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: i.body,
                            children: c.default.Messages.GUILD_PRODUCT_NOT_AVAILABLE_BODY
                        })]
                    }), (0, a.jsx)(l.ModalFooter, {
                        children: (0, a.jsx)(l.Button, {
                            className: i.button,
                            color: l.Button.Colors.BRAND,
                            onClick: s,
                            size: l.Button.Sizes.LARGE,
                            children: c.default.Messages.OKAY
                        })
                    })]
                })
            }
        }
    }
]);