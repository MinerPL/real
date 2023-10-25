(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77118"], {
        312953: function(e, a, s) {
            "use strict";
            s.r(a), s.d(a, {
                default: function() {
                    return h
                }
            });
            var t = s("920040");
            s("773670");
            var d = s("77078"),
                n = s("987317"),
                r = s("476765"),
                i = s("674083"),
                l = s("244480"),
                o = s("119184"),
                c = s("782340"),
                u = s("767627"),
                h = e => {
                    let {
                        channel: a,
                        ...s
                    } = e, h = (0, r.useUID)();
                    return (0, t.jsxs)(d.ConfirmModal, {
                        confirmText: c.default.Messages.END_STAGE,
                        cancelText: c.default.Messages.CANCEL,
                        onConfirm: () => {
                            (0, l.endStage)(a), n.default.disconnect()
                        },
                        confirmButtonColor: d.Button.Colors.RED,
                        bodyClassName: u.body,
                        ...s,
                        children: [(0, t.jsx)(o.default, {
                            className: u.headerIconContainer,
                            children: (0, t.jsx)("div", {
                                className: u.iconBackground,
                                children: (0, t.jsx)(i.default, {
                                    width: 40,
                                    height: 40,
                                    className: u.headerIcon
                                })
                            })
                        }), (0, t.jsx)(d.Heading, {
                            id: h,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: u.title,
                            children: c.default.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE
                        }), (0, t.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: u.subtitle,
                            children: c.default.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE
                        })]
                    })
                }
        }
    }
]);