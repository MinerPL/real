            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                i = n("77078"),
                l = n("206230"),
                r = n("164586"),
                o = n("592407"),
                u = n("957255"),
                d = n("79798"),
                c = n("599110"),
                E = n("701909"),
                f = n("772051"),
                _ = n("980215"),
                h = n("49111"),
                C = n("988268"),
                T = n("994428"),
                I = n("782340"),
                S = n("445930"),
                N = n("311492"),
                A = n("382719");

            function m(e) {
                let {
                    guild: t,
                    markAsDismissed: n
                } = e, m = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion), p = (0, _.useClydeExperiment)(t) === f.ClydeExperimentState.ComingSoon, g = (0, s.useStateFromStores)([u.default], () => u.default.can(h.Permissions.ADMINISTRATOR, t)), R = p && g, O = () => {
                    open(E.default.getArticleURL(h.HelpdeskArticles.CLYDE_AI)), n(T.ContentDismissActionType.UNKNOWN)
                };
                return (0, a.jsx)(r.default, {
                    image: m ? A : N,
                    imageStyles: {
                        borderRadius: "50%"
                    },
                    imageMarginTop: 8,
                    guild: t,
                    onDismissed: () => n(T.ContentDismissActionType.UNKNOWN),
                    centerText: !0,
                    imageMarginX: 64,
                    onClick: R ? void 0 : O,
                    title: () => {
                        let e = R ? I.default.Messages.CLYDE_NUX_ADMIN_CHANNEL_NOTICE_TITLE : I.default.Messages.CLYDE_NUX_USER_CHANNEL_NOTICE_TITLE;
                        return (0, a.jsxs)("div", {
                            className: S.titleContainer,
                            children: [(0, a.jsx)(i.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                className: S.title,
                                children: e
                            }), (0, a.jsx)(d.default, {
                                type: C.BotTagTypes.AI
                            })]
                        })
                    },
                    message: R ? I.default.Messages.CLYDE_NUX_ADMIN_CHANNEL_NOTICE_MESSAGE : I.default.Messages.CLYDE_NUX_USER_CHANNEL_NOTICE_MESSAGE,
                    cta: R ? () => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(i.Button, {
                            className: S.button,
                            size: i.Button.Sizes.SMALL,
                            onClick: () => {
                                o.default.open(t.id, h.GuildSettingsSections.INTEGRATIONS), c.default.track(h.AnalyticEvents.CLYDE_NUX_NOTICE_MANAGE_SETTINGS_CTA_CLICKED, {
                                    guild_id: t.id
                                }), n(T.ContentDismissActionType.UNKNOWN)
                            },
                            fullWidth: !0,
                            color: i.Button.Colors.PRIMARY,
                            children: I.default.Messages.CLYDE_NUX_ADMIN_CHANNEL_NOTICE_MANAGE_SETTINGS
                        }), (0, a.jsx)(i.Button, {
                            className: S.button,
                            size: i.Button.Sizes.SMALL,
                            onClick: () => {
                                c.default.track(h.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
                                    source: h.ChannelNoticeCtaSources.CLYDE_ADMIN_NUX_NOTICE,
                                    guild_id: t.id,
                                    notice_type: h.ChannelNoticeTypes.CLYDE_ADMIN_NUX
                                }), O()
                            },
                            fullWidth: !0,
                            children: I.default.Messages.CLYDE_NUX_CHANNEL_NOTICE_LEARN_MORE
                        })]
                    }) : I.default.Messages.CLYDE_NUX_CHANNEL_NOTICE_LEARN_MORE,
                    trackingSource: R ? h.ChannelNoticeCtaSources.CLYDE_ADMIN_NUX_NOTICE : h.ChannelNoticeCtaSources.CLYDE_USER_NUX_NOTICE,
                    type: R ? h.ChannelNoticeTypes.CLYDE_ADMIN_NUX : h.ChannelNoticeTypes.CLYDE_USER_NUX
                })
            }