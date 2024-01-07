            "use strict";
            a.r(t), a.d(t, {
                ActivateDeviceSuccess: function() {
                    return c
                }
            });
            var n = a("37983"),
                r = a("884691"),
                s = a("106076"),
                o = a("77078"),
                i = a("782340"),
                u = a("289177"),
                l = a("104528");
            let c = e => {
                let {
                    onComplete: t,
                    data: a
                } = e, c = null, d = (0, r.useId)();
                return (a.clientId === s.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID || a.clientId === s.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) && (c = (0, n.jsx)("img", {
                    src: l,
                    width: "241",
                    height: "118",
                    alt: "",
                    "aria-labelledby": d
                })), (0, n.jsxs)("div", {
                    className: u.bodyContent,
                    children: [c, (0, n.jsx)(o.Heading, {
                        className: u.title,
                        variant: "heading-xl/extrabold",
                        id: d,
                        children: i.default.Messages.ACTIVATE_DEVICE_SUCCESS_TITLE
                    }), null != a.twoWayLinkCode ? (0, n.jsx)(o.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: i.default.Messages.ACTIVATE_DEVICE_SUCCESS_TWO_WAY_BODY
                    }) : null, (0, n.jsx)(o.Button, {
                        className: u.footerButton,
                        color: o.Button.Colors.BRAND,
                        onClick: t,
                        children: i.default.Messages.DONE
                    })]
                })
            }