            "use strict";
            _.r(t), _.d(t, {
                isImageFile: function() {
                    return i
                },
                isAnimatedImageUrl: function() {
                    return a
                },
                isVideoUrl: function() {
                    return A
                },
                isVideoFile: function() {
                    return R
                }
            }), _("222007");
            var s = _("773336");
            let r = (e, t) => {
                    if (null == e) return !1;
                    let [_, s] = e.split(/\?/, 1);
                    return t.test(_)
                },
                E = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                i = e => null != e && E.test(e),
                n = /\.(webp|gif)$/i,
                a = e => r(e, n),
                I = (0, s.isIOS)() ? /\.(mp4|mov)$/i : ((0, s.isAndroid)(), /\.(mp4|webm|mov)$/i),
                A = e => r(e, I),
                R = e => null != e && I.test(e)