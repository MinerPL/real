            "use strict";
            n.r(t), n.d(t, {
                MAX_THUMBNAIL_COUNT: function() {
                    return a
                },
                getEmbedPreviewImageUrl: function() {
                    return l
                },
                getThumbnailImage: function() {
                    return s
                }
            });
            var i = n("651693");
            let a = 4;

            function l(e) {
                var t, n;
                if (null == e) return;
                let {
                    thumbnail: i,
                    image: a
                } = e;
                return null != i ? null !== (t = i.proxy_url) && void 0 !== t ? t : i.url : null != a ? null !== (n = a.proxy_url) && void 0 !== n ? n : a.url : void 0
            }

            function s(e) {
                if (null == e) return;
                let {
                    url: t,
                    proxy_url: n
                } = e;
                if (null != t && null != n) {
                    let e = (0, i.isVideoUrl)(t);
                    return e ? "".concat(n, "?format=jpeg") : n
                }
                return t
            }