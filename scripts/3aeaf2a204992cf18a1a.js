(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["60291"], {
        281645: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return h
                }
            });
            var s = t("37983");
            t("884691");
            var n = t("77078"),
                l = t("987317"),
                o = t("476765"),
                c = t("674083"),
                d = t("244480"),
                i = t("119184"),
                r = t("782340"),
                u = t("225946");

            function h(e) {
                let {
                    channel: a,
                    transitionState: t,
                    onClose: h
                } = e, E = (0, o.useUID)();

                function C() {
                    l.default.disconnect(), h()
                }
                return (0, s.jsxs)(n.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": E,
                    children: [(0, s.jsxs)(n.ModalContent, {
                        className: u.content,
                        children: [(0, s.jsx)(i.default, {
                            children: (0, s.jsx)("div", {
                                className: u.iconBackground,
                                children: (0, s.jsx)(c.default, {
                                    width: 40,
                                    height: 40,
                                    className: u.headerIcon
                                })
                            })
                        }), (0, s.jsx)(n.Heading, {
                            id: E,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: u.title,
                            children: r.default.Messages.EXPLICIT_END_STAGE_TITLE
                        }), (0, s.jsx)(n.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: u.subtitle,
                            children: r.default.Messages.EXPLICIT_END_STAGE_SUBTITLE
                        })]
                    }), (0, s.jsxs)(n.ModalFooter, {
                        children: [(0, s.jsx)(n.Button, {
                            color: n.Button.Colors.RED,
                            onClick: function() {
                                (0, d.endStage)(a), C()
                            },
                            children: r.default.Messages.EXPLICIT_END_STAGE_CONFIRM
                        }), (0, s.jsx)(n.Button, {
                            color: n.Button.Colors.PRIMARY,
                            className: u.cancelButton,
                            onClick: C,
                            children: r.default.Messages.EXPLICIT_END_STAGE_CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);