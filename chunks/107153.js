            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("363025"),
                l = n("701909"),
                r = n("963662"),
                o = n("49111"),
                u = n("782340"),
                d = n("649592"),
                c = e => {
                    let {
                        guild: t
                    } = e, n = s.useCallback(() => {
                        (0, i.hideMaxMemberCountChannelNotice)(t.id)
                    }, [t.id]);
                    return (0, a.jsx)(r.default, {
                        guild: t,
                        onDismissed: n,
                        message: u.default.Messages.NOTICE_CHANNEL_MAX_MEMBERS_CAP_REACHED_MESSAGE.format({
                            maxMemberCount: t.maxMembers,
                            maxMembersUrl: l.default.getArticleURL(o.HelpdeskArticles.MAX_MEMBERS)
                        }),
                        type: o.ChannelNoticeTypes.MAX_MEMBER_COUNT,
                        image: d,
                        imageMarginX: 61
                    })
                }