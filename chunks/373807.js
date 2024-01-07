            "use strict";
            s.r(t), s.d(t, {
                getSeasonalGiftingBody: function() {
                    return f
                },
                default: function() {
                    return x
                }
            });
            var o = s("37983"),
                i = s("884691"),
                l = s("77078"),
                n = s("977591"),
                C = s("841792"),
                a = s("599110"),
                r = s("49111"),
                d = s("994428"),
                u = s("782340"),
                c = s("843011");

            function f(e, t) {
                return e || t ? u.default.Messages.SEASONAL_GIFTING_DM_POPUP_BODY : u.default.Messages.SEASONAL_GIFTING_MAKE_SOMEONES_DAY_TOOLTIP
            }

            function p(e) {
                let {
                    onComplete: t,
                    onDMCheckItOutClick: d,
                    isDM: p
                } = e;
                i.useEffect(() => {
                    a.default.track(r.AnalyticEvents.PREMIUM_GIFT_UPSELL_VIEWED, {
                        type: "holiday_gifting_tip"
                    })
                }, []);
                let {
                    enabled: x
                } = n.ExpandedGiftingRevampExperiment.useExperiment({
                    location: "ChannelPremiumGiftButton"
                }, {
                    autoTrackExposure: !1
                }), h = i.useMemo(() => [() => s.el("540902").then(s.t.bind(s, "540902", 19)), () => s.el("915604").then(s.t.bind(s, "915604", 19)), () => s.el("166505").then(s.t.bind(s, "166505", 19))], []), j = p || x, F = j ? u.default.Messages.SEASONAL_GIFTING_DM_POPUP_HEADER : u.default.Messages.SEASONAL_GIFTING_POPUP_HEADER, m = j ? u.default.Messages.SEASONAL_GIFTING_DM_POPUP_CTA : u.default.Messages.SEASONAL_GIFTING_SEND_GIFT_CTA;
                return (0, o.jsxs)("div", {
                    className: c.container,
                    children: [(0, o.jsx)(C.default, {
                        className: c.image,
                        animationData: h
                    }), (0, o.jsxs)("div", {
                        className: c.body,
                        children: [(0, o.jsx)(l.Heading, {
                            className: c.text,
                            variant: "heading-sm/semibold",
                            children: F
                        }), (0, o.jsx)(l.Text, {
                            className: c.text,
                            variant: "text-sm/normal",
                            children: f(p, x)
                        })]
                    }), (0, o.jsxs)("div", {
                        className: c.dmButtonContainer,
                        children: [(0, o.jsx)(l.Button, {
                            className: c.dmButton,
                            look: l.Button.Looks.FILLED,
                            color: l.Button.Colors.BRAND,
                            onClick: () => t(),
                            children: u.default.Messages.GOT_IT
                        }), (0, o.jsx)(l.Button, {
                            className: c.dmButton,
                            look: l.Button.Looks.INVERTED,
                            color: l.Button.Colors.BRAND,
                            onClick: () => d(),
                            children: m
                        })]
                    }), (0, o.jsx)("div", {
                        className: c.pointer
                    })]
                })
            }

            function x(e) {
                let {
                    onComplete: t,
                    onDMCheckItOutClick: s,
                    markAsDismissed: i,
                    isDM: n
                } = e;
                return (0, o.jsx)(l.Popout, {
                    spacing: 0,
                    shouldShow: !0,
                    position: "top",
                    align: "center",
                    renderPopout: e => (0, o.jsx)(p, {
                        ...e,
                        onComplete: () => {
                            t(), i(d.ContentDismissActionType.USER_DISMISS)
                        },
                        onDMCheckItOutClick: () => {
                            s(), t(), i(d.ContentDismissActionType.TAKE_ACTION)
                        },
                        isDM: n
                    }),
                    onRequestClose: () => void 0,
                    closeOnScroll: !1,
                    ignoreModalClicks: !0,
                    children: () => (0, o.jsx)("div", {
                        className: c.popoutTarget
                    })
                })
            }