            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("77078"),
                r = n("238055"),
                o = n("782340"),
                c = n("912945"),
                d = e => {
                    let {
                        school: t,
                        setStep: n
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: c.container,
                        children: [(0, a.jsx)("div", {
                            className: c.topImage
                        }), (0, a.jsx)(i.Heading, {
                            className: l(c.centerText, c.header),
                            variant: "heading-xl/semibold",
                            children: o.default.Messages.HUB_WAITLIST_MODAL_JOINED_HEADER
                        }), (0, a.jsx)("div", {
                            className: c.descriptionWidth,
                            children: (0, a.jsx)(i.Text, {
                                className: c.centerText,
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: o.default.Messages.HUB_WAITLIST_MODAL_JOINED_DESCRIPTION.format({
                                    school: t
                                })
                            })
                        }), (0, a.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            size: i.Button.Sizes.SMALL,
                            color: i.Button.Colors.LINK,
                            onClick: () => {
                                n(r.HubEmailConnectionSteps.VERIFY_EMAIL)
                            },
                            className: c.resendLink,
                            children: o.default.Messages.HUB_EMAIL_CONFIRMATION_DIFFERENT_EMAIL
                        })]
                    })
                }