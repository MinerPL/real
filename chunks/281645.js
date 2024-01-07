            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("987317"),
                i = n("476765"),
                u = n("674083"),
                r = n("244480"),
                d = n("119184"),
                o = n("782340"),
                c = n("225946");

            function f(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: f
                } = e, E = (0, i.useUID)();

                function _() {
                    s.default.disconnect(), f()
                }
                return (0, a.jsxs)(l.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": E,
                    children: [(0, a.jsxs)(l.ModalContent, {
                        className: c.content,
                        children: [(0, a.jsx)(d.default, {
                            children: (0, a.jsx)("div", {
                                className: c.iconBackground,
                                children: (0, a.jsx)(u.default, {
                                    width: 40,
                                    height: 40,
                                    className: c.headerIcon
                                })
                            })
                        }), (0, a.jsx)(l.Heading, {
                            id: E,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: c.title,
                            children: o.default.Messages.EXPLICIT_END_STAGE_TITLE
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: c.subtitle,
                            children: o.default.Messages.EXPLICIT_END_STAGE_SUBTITLE
                        })]
                    }), (0, a.jsxs)(l.ModalFooter, {
                        children: [(0, a.jsx)(l.Button, {
                            color: l.Button.Colors.RED,
                            onClick: function() {
                                (0, r.endStage)(t), _()
                            },
                            children: o.default.Messages.EXPLICIT_END_STAGE_CONFIRM
                        }), (0, a.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            className: c.cancelButton,
                            onClick: _,
                            children: o.default.Messages.EXPLICIT_END_STAGE_CANCEL
                        })]
                    })]
                })
            }