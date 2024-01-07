            "use strict";
            t.r(a), t.d(a, {
                TwoWayLinkLanding: function() {
                    return d
                }
            });
            var s = t("37983");
            t("884691");
            var n = t("446674"),
                l = t("77078"),
                r = t("47319"),
                o = t("145131"),
                i = t("782340"),
                c = t("429152");

            function d(e) {
                let {
                    platformType: a,
                    onContinue: t,
                    onClose: d,
                    img: u,
                    headerConnect: h,
                    headerReconnect: N,
                    body: x,
                    learnMoreLink: m,
                    valueProps: C
                } = e, f = (0, n.useStateFromStores)([r.default], () => {
                    let e = r.default.getAccount(null, a);
                    return (null == e ? void 0 : e.twoWayLink) === !1
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(l.ModalHeader, {
                        direction: o.default.Direction.VERTICAL,
                        className: c.header,
                        separator: !1,
                        children: [(0, s.jsxs)("div", {
                            className: c.illustration,
                            children: [u, " "]
                        }), (0, s.jsx)(l.Heading, {
                            className: c.title,
                            variant: "heading-xl/extrabold",
                            children: f && null != N ? N : h
                        }), (0, s.jsx)(l.ModalCloseButton, {
                            className: c.closeButton,
                            onClick: d
                        })]
                    }), (0, s.jsxs)(l.ModalContent, {
                        className: c.body,
                        paddingFix: !1,
                        children: [(0, s.jsx)(l.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: x
                        }), (0, s.jsx)("div", {
                            className: c.valueProps,
                            children: C
                        }), null != m ? (0, s.jsx)(l.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: i.default.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({
                                helpCenterLink: m
                            })
                        }) : null]
                    }), (0, s.jsx)(l.ModalFooter, {
                        className: c.footer,
                        children: (0, s.jsx)(l.Button, {
                            className: c.footerButton,
                            color: l.Button.Colors.BRAND,
                            onClick: t,
                            children: i.default.Messages.CONTINUE
                        })
                    })]
                })
            }