            "use strict";
            t.r(a), t.d(a, {
                TwoWayLinkError: function() {
                    return d
                }
            });
            var s = t("37983");
            t("884691");
            var n = t("77078"),
                l = t("145131"),
                r = t("758710"),
                o = t("782340"),
                i = t("429152"),
                c = t("143453");

            function d(e) {
                let {
                    onContinue: a,
                    onClose: t,
                    title: d,
                    body: u
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(n.ModalHeader, {
                        direction: l.default.Direction.VERTICAL,
                        className: i.header,
                        separator: !1,
                        children: [(0, s.jsx)("img", {
                            src: c,
                            className: i.illustration,
                            width: "254",
                            height: "127",
                            alt: ""
                        }), (0, s.jsx)(n.Heading, {
                            className: i.title,
                            variant: "heading-xl/extrabold",
                            children: d
                        }), null != t && (0, s.jsx)(n.ModalCloseButton, {
                            className: i.closeButton,
                            onClick: t
                        })]
                    }), (0, s.jsx)(n.ModalContent, {
                        className: i.body,
                        paddingFix: !1,
                        children: (0, s.jsx)(n.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: u
                        })
                    }), (0, s.jsx)(n.ModalFooter, {
                        className: i.footer,
                        children: (0, s.jsxs)(n.Button, {
                            className: i.footerButton,
                            color: n.Button.Colors.BRAND,
                            onClick: a,
                            children: [o.default.Messages.TRY_AGAIN, (0, s.jsx)(r.default, {
                                className: i.launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }