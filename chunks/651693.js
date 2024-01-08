            "use strict";
            n.r(t), n.d(t, {
                isImageFile: function() {
                    return l
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
            var i = n("773336");
            let r = (e, t) => {
                    if (null == e) return !1;
                    let [n, i] = e.split(/\?/, 1);
                    return t.test(n)
                },
                s = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                l = e => null != e && s.test(e),
                o = /\.(webp|gif)$/i,
                u = e => r(e, o),
                a = (0, i.isIOS)() ? /\.(mp4|mov)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov)$/i),
                c = e => r(e, a),
                d = e => null != e && a.test(e)