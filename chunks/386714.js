            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("845579"),
                i = n("217513");

            function l(e, t) {
                if ("undefined" == typeof Image) return;
                let n = (0, i.getDisplayProfile)(e.user.id, t);
                if (null == n) return;
                let l = r.GifAutoPlay.getSetting(),
                    s = n.getBannerURL({
                        canAnimate: l,
                        size: 480
                    });
                if (null == s) return;
                let u = new Image;
                u.src = s
            }