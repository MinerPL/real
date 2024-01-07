            "use strict";
            n.r(t), n.d(t, {
                ArchivedLockedThreadNotice: function() {
                    return p
                },
                LockedThreadNotice: function() {
                    return m
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                o = n("716241"),
                u = n("599110"),
                d = n("263024"),
                c = n("300322"),
                f = n("49111"),
                h = n("782340"),
                C = n("714331");

            function p(e) {
                let {
                    channel: t,
                    narrow: n
                } = e, l = (0, c.useCanUnarchiveThread)(t);
                return a.useEffect(() => {
                    u.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
                        ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                        ...(0, o.collectChannelAnalyticsMetadata)(t),
                        banner_type: "thread"
                    })
                }, [t]), (0, s.jsxs)("div", {
                    className: i(C.chatHeaderBar, {
                        [C.narrow]: n
                    }),
                    children: [(0, s.jsx)(r.Text, {
                        className: C.chatHeaderBarText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: t.isForumPost() ? h.default.Messages.FORUM_POST_HEADER_NOTICE_LOCKED : h.default.Messages.THREAD_HEADER_NOTICE_LOCKED
                    }), l ? (0, s.jsx)(r.Button, {
                        size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
                        className: C.chatHeaderBarButton,
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            u.default.track(f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
                                ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                                ...(0, o.collectChannelAnalyticsMetadata)(t),
                                banner_type: "thread",
                                cta_type: "unarchive"
                            }), d.default.unarchiveThread(t, !1)
                        },
                        children: h.default.Messages.UNARCHIVE
                    }) : null]
                })
            }

            function m(e) {
                let {
                    channel: t,
                    narrow: n
                } = e, l = (0, c.useIsThreadModerator)(t);
                return a.useEffect(() => {
                    u.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
                        ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                        ...(0, o.collectChannelAnalyticsMetadata)(t),
                        banner_type: "thread"
                    })
                }, [t]), (0, s.jsxs)("div", {
                    className: i(C.chatHeaderBar, {
                        [C.narrow]: n
                    }),
                    children: [(0, s.jsx)(r.Text, {
                        className: C.chatHeaderBarText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: t.isForumPost() ? h.default.Messages.FORUM_POST_HEADER_NOTICE_ACTIVE_LOCKED : h.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
                    }), l ? (0, s.jsx)(r.Button, {
                        size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
                        className: C.chatHeaderBarButton,
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            u.default.track(f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
                                ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
                                ...(0, o.collectChannelAnalyticsMetadata)(t),
                                banner_type: "thread",
                                cta_type: "unlock"
                            }), d.default.unlockThread(t)
                        },
                        children: h.default.Messages.UNLOCK
                    }) : null]
                })
            }