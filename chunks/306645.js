            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("884691"),
                l = n("446674"),
                s = n("374014"),
                i = n("205817"),
                r = n("599110"),
                o = n("49111"),
                u = n("646718");

            function d(e, t) {
                let {
                    handleMouseDown: n,
                    handleMouseMove: d,
                    handleMouseUp: c,
                    handleMouseEnter: f
                } = e, h = a.useRef(null), p = (0, l.useStateFromStores)([i.default], () => i.default.getRTCConnection((0, s.encodeStreamKey)(t))), m = a.useCallback((e, t, a) => {
                    h.current = Date.now(), n(e, t, a)
                }, [n]), E = a.useCallback((e, t, n) => {
                    if (c(e, t, n), null != h.current) {
                        if (null != p) {
                            var a, l, s;
                            a = e, l = p, s = Date.now() - h.current, r.default.track(o.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
                                feature_name: "".concat(u.AnalyticsPremiumFeatureNames.SHARED_CANVAS, "_").concat(a.type),
                                feature_tier: u.AnalyticsPremiumFeatureTiers.FREE,
                                media_session_id: l.getMediaSessionId(),
                                parent_media_session_id: l.parentMediaSessionId,
                                guild_id: l.guildId,
                                duration: s
                            })
                        }
                        h.current = null
                    }
                }, [c, p]);
                return {
                    handleMouseUp: E,
                    handleMouseDown: m,
                    handleMouseMove: d,
                    handleMouseEnter: f
                }
            }