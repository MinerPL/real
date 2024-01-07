            "use strict";
            s.r(t), s.d(t, {
                getNativeContextMenuChannelAnalytics: function() {
                    return l
                }
            });
            var a = s("18494"),
                n = s("724210");

            function l() {
                var e;
                let t = null !== (e = a.default.getCurrentlySelectedChannelId()) && void 0 !== e ? e : void 0;
                return null != t && (0, n.isStaticChannelRoute)(t) ? {
                    channel_static_route: t
                } : {
                    channel_id: t
                }
            }