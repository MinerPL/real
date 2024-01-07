            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                l = a("476263"),
                o = a("782340"),
                i = a("120825"),
                r = a("270111"),
                u = e => {
                    let {
                        headerId: t,
                        reapplyText: a,
                        onReapply: u,
                        confirmText: d,
                        onConfirm: c,
                        rejectionReason: f = null,
                        guild: E = null
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: i.confirmation,
                        children: [(0, n.jsxs)("div", {
                            className: i.confirmationContent,
                            children: [null !== E ? (0, n.jsx)(l.default, {
                                size: l.default.Sizes.LARGER,
                                guild: E,
                                className: i.guildIcon
                            }) : (0, n.jsx)("img", {
                                alt: o.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
                                src: r,
                                className: i.verificationStateIcon
                            }), (0, n.jsx)(s.Heading, {
                                id: t,
                                variant: "heading-xl/semibold",
                                className: i.header,
                                children: (null == E ? void 0 : E.name) != null ? o.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format({
                                    guildName: E.name
                                }) : o.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE
                            }), null != f && "" !== f ? (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsxs)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: [(0, n.jsx)("span", {
                                        className: i.rejectionReasonLabel,
                                        children: o.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON
                                    }), (0, n.jsx)("span", {
                                        className: i.rejectionReason,
                                        children: f
                                    })]
                                })
                            }) : null]
                        }), (0, n.jsxs)("div", {
                            className: i.confirmationButtonRow,
                            children: [(0, n.jsx)(s.Button, {
                                onClick: u,
                                color: s.Button.Colors.PRIMARY,
                                className: i.confirmationButton,
                                children: a
                            }), (0, n.jsx)(s.Button, {
                                onClick: c,
                                color: s.Button.Colors.PRIMARY,
                                className: i.confirmationButton,
                                children: d
                            })]
                        })]
                    })
                }