            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("812204"),
                o = s("685665"),
                d = s("617917"),
                u = s("782340"),
                c = s("460633");
            let E = e => {
                let {
                    guild: t,
                    analyticsLocation: s,
                    className: n,
                    buttonProps: l = {
                        color: void 0,
                        look: i.ButtonLooks.INVERTED,
                        text: u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_BUTTON
                    }
                } = e, {
                    color: r,
                    look: o,
                    text: c
                } = l, E = t.premiumTier + 1;
                return (0, a.jsx)(d.default, {
                    color: r,
                    look: o,
                    analyticsLocation: s,
                    guild: t,
                    buttonText: c,
                    targetBoostedGuildTier: E,
                    className: n
                })
            };

            function _(e) {
                let {
                    header: t,
                    text: n,
                    analyticsLocation: d,
                    guild: u,
                    className: _,
                    textColor: T,
                    headerColor: I,
                    buttonProps: S
                } = e, {
                    AnalyticsLocationProvider: N
                } = (0, o.default)(r.default.GUILD_BOOSTING_UPSELL_BANNER);
                return (0, a.jsx)(N, {
                    children: (0, a.jsxs)("div", {
                        className: l(c.banner, _),
                        children: [(0, a.jsx)("img", {
                            className: c.headerGraphic,
                            alt: "",
                            src: s("250719")
                        }), (0, a.jsxs)("div", {
                            className: c.content,
                            children: [(0, a.jsx)(i.Text, {
                                variant: "text-lg/semibold",
                                color: null != I ? I : "always-white",
                                className: c.header,
                                children: t
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: null != T ? T : "always-white",
                                children: n
                            })]
                        }), (0, a.jsx)("div", {
                            className: c.ctaContainer,
                            children: (0, a.jsx)(E, {
                                guild: u,
                                analyticsLocation: d,
                                className: c.button,
                                buttonProps: S
                            })
                        })]
                    })
                })
            }