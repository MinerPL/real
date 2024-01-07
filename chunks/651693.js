            "use strict";
            n.r(t), n.d(t, {
                isImageFile: function() {
                    return s
                },
                isAnimatedImageUrl: function() {
                    return u
                },
                isVideoUrl: function() {
                    return c
                },
                isVideoFile: function() {
                    return d
                }
            }), n("222007");
            var r = n("773336");
            let i = (e, t) => {
                    if (null == e) return !1;
                    let [n, r] = e.split(/\?/, 1);
                    return t.test(n)
                },
                a = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                s = e => null != e && a.test(e),
                o = /\.(webp|gif)$/i,
                u = e => i(e, o),
                l = (0, r.isIOS)() ? /\.(mp4|mov)$/i : ((0, r.isAndroid)(), /\.(mp4|webm|mov)$/i),
                c = e => i(e, l),
                d = e => null != e && l.test(e)