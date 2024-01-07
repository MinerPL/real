            "use strict";
            n.r(t), n.d(t, {
                isImageFile: function() {
                    return o
                },
                isAnimatedImageUrl: function() {
                    return u
                },
                isVideoUrl: function() {
                    return d
                },
                isVideoFile: function() {
                    return c
                }
            }), n("222007");
            var i = n("773336");
            let r = (e, t) => {
                    if (null == e) return !1;
                    let [n, i] = e.split(/\?/, 1);
                    return t.test(n)
                },
                l = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                o = e => null != e && l.test(e),
                a = /\.(webp|gif)$/i,
                u = e => r(e, a),
                s = (0, i.isIOS)() ? /\.(mp4|mov)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov)$/i),
                d = e => r(e, s),
                c = e => null != e && s.test(e)