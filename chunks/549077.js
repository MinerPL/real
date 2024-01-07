            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("716241"),
                u = n("689476"),
                d = n("599110"),
                c = n("629220"),
                f = n("49111"),
                h = n("782340"),
                C = n("942884");

            function p(e) {
                let {
                    channel: t,
                    narrow: n
                } = e;
                return a.useEffect(() => {
                    d.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
                        ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                        ...(0, o.collectChannelAnalyticsMetadata)(t),
                        banner_type: "channel_opt_in"
                    })
                }, [t]), (0, s.jsxs)("div", {
                    className: i(C.chatHeaderBar, {
                        [C.narrow]: n
                    }),
                    children: [(0, s.jsx)(r.Text, {
                        className: C.chatHeaderBarText,
                        variant: "text-sm/normal",
                        color: "text-normal",
                        children: h.default.Messages.OPT_IN_CHANNEL_NOTICE
                    }), (0, s.jsxs)(r.Button, {
                        size: r.Button.Sizes.TINY,
                        className: C.chatHeaderBarButton,
                        innerClassName: C.chatHeaderBarButtonInner,
                        color: r.Button.Colors.BRAND,
                        onClick: () => {
                            d.default.track(f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
                                ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                                ...(0, o.collectChannelAnalyticsMetadata)(t),
                                banner_type: "channel_opt_in",
                                cta_type: "add channel"
                            }), (0, c.setOptInChannel)(t.guild_id, t.id, !0, {
                                section: f.AnalyticsSections.CHANNEL
                            })
                        },
                        children: [(0, s.jsx)(u.default, {
                            width: 14,
                            height: 14
                        }), h.default.Messages.OPT_IN_CHANNEL_NOTICE_CTA]
                    })]
                })
            }