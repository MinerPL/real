            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("884691"),
                a = n("446674"),
                l = n("233069"),
                i = n("282109"),
                r = n("47495"),
                o = n("458079"),
                u = n("862731"),
                d = n("133335");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (0, r.useShouldUseNewNotificationSystem)("useShouldRenderBanner"),
                    c = (0, a.useStateFromStores)([u.default, i.default], () => {
                        let {
                            guild_id: t,
                            id: n
                        } = e;
                        if (!l.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(e.type)) return !1;
                        let s = i.default.resolveUnreadSetting(e),
                            a = i.default.getChannelUnreadSetting(t, n),
                            r = u.default.getNumberOfRendersSince(7200),
                            o = u.default.getNumberOfChannelVisitsSince(t, n, 86400);
                        return a === d.UnreadSetting.UNSET && s !== d.UnreadSetting.ALL_MESSAGES && r <= 2 && o >= 2
                    }, [e]);
                return s.useEffect(() => {
                    t && c && (0, o.recordBannerRender)(e.guild_id, e.id)
                }, [t, c, e.guild_id, e.id]), s.useEffect(() => {
                    l.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(e.type) && (0, o.recordChannelVisit)(e.guild_id, e.id)
                }, [e.guild_id, e.id, e.type]), {
                    canRenderNotice: c && n,
                    recordNoticeRender: () => (0, o.recordBannerRender)(e.guild_id, e.id)
                }
            }