            "use strict";
            n.r(t), n.d(t, {
                clearCanvas: function() {
                    return d
                },
                getMouseCoordinatesPercent: function() {
                    return c
                },
                normalizeCoordinate: function() {
                    return f
                },
                normalizeCoordinates: function() {
                    return h
                },
                isLine: function() {
                    return p
                },
                getUserColors: function() {
                    return m
                }
            });
            var a = n("656280"),
                l = n.n(a),
                s = n("509043"),
                i = n("462274"),
                r = n("697218"),
                o = n("315841"),
                u = n("827520");

            function d(e) {
                let t = e.current,
                    n = null == t ? void 0 : t.getContext("2d");
                null != t && null != n && n.clearRect(0, 0, t.width, t.height)
            }

            function c(e, t) {
                let {
                    width: n,
                    height: a,
                    left: l,
                    top: s
                } = e.getBoundingClientRect(), i = (t.clientX - l) / n, r = (t.clientY - s) / a;
                return {
                    x: i,
                    y: r
                }
            }

            function f(e, t) {
                return Math.round(e * t * window.devicePixelRatio)
            }

            function h(e, t, n) {
                return {
                    x: f(e.x, t),
                    y: f(e.y, n),
                    deltaTime: e.deltaTime
                }
            }

            function p(e) {
                return e.type === o.DrawableType.LINE
            }

            function m(e, t, n, a) {
                var o;
                let d = r.default.getUser(e),
                    c = null == d ? void 0 : d.getAvatarURL(null, u.AVATAR_COLOR_AVATAR_SIZE),
                    f = null != c ? null === (o = i.useColorStore.getState().palette[c]) || void 0 === o ? void 0 : o[0] : null,
                    h = null != f ? "#".concat(l({
                        r: f[0],
                        g: f[1],
                        b: f[2]
                    }).toHex()) : a,
                    p = (0, s.getDarkness)((0, s.hex2int)(h)) > .5 ? n : t;
                return {
                    fillColor: h,
                    outlineColor: p
                }
            }