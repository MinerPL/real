            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("407063"),
                a = l("49111");

            function s(e, t) {
                let l;
                if (null == e.image) return null;
                null == t && (t = window.screen.width * (0, n.getDevicePixelRatio)()), t = (0, n.getBestMediaProxySize)(t);
                let s = window.GLOBAL_ENV.CDN_HOST;
                if (null != s) {
                    var r;
                    l = "".concat((r = "https:", "https:"), "//").concat(s, "/guild-events/").concat(e.id, "/").concat(e.image)
                } else l = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + a.Endpoints.GUILD_EVENT_IMAGE(e.id, e.image, "png");
                return l += "?size=".concat(t)
            }