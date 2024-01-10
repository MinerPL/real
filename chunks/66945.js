            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
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
            let c = Object.freeze({
                NOTICE_RENDER: {
                    MAX: 1,
                    PER_SECONDS: 600
                },
                CHANNEL_VISTS: {
                    MIN: 2,
                    PER_SECONDS: 86400
                }
            });

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (0, r.useShouldUseNewNotificationSystem)("useShouldRenderBanner"),
                    f = (0, a.useStateFromStores)([u.default, i.default], () => {
                        let {
                            guild_id: t,
                            id: n
                        } = e;
                        if (!l.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(e.type)) return !1;
                        let s = i.default.resolveUnreadSetting(e),
                            a = i.default.getChannelUnreadSetting(t, n),
                            r = u.default.getNumberOfRendersSince(c.NOTICE_RENDER.PER_SECONDS),
                            o = u.default.getNumberOfChannelVisitsSince(t, n, c.CHANNEL_VISTS.PER_SECONDS);
                        return a === d.UnreadSetting.UNSET && s !== d.UnreadSetting.ALL_MESSAGES && r <= c.NOTICE_RENDER.MAX && o >= c.CHANNEL_VISTS.MIN
                    }, [e]);
                return s.useEffect(() => {
                    t && f && (0, o.recordBannerRender)(e.guild_id, e.id)
                }, [t, f, e.guild_id, e.id]), s.useEffect(() => {
                    l.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(e.type) && (0, o.recordChannelVisit)(e.guild_id, e.id)
                }, [e.guild_id, e.id, e.type]), {
                    canRenderNotice: f && n,
                    recordNoticeRender: () => (0, o.recordBannerRender)(e.guild_id, e.id)
                }
            }