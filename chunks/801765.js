            "use strict";
            n.r(t), n.d(t, {
                useListingThumbnailUrl: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("845579"),
                u = n("271560"),
                l = n("624180");

            function o(e, t) {
                let {
                    shouldAnimate: n = !0
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = i.GifAutoPlay.useSetting(), s = (0, l.useIsWindowFocused)(), a = n && s && o;
                return r.useMemo(() => {
                    if ((null == e ? void 0 : e.image_asset) != null) return (0, u.getAssetURL)(e.application_id, e.image_asset, t, a ? void 0 : "webp")
                }, [t, e, a])
            }