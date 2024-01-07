            "use strict";
            n.r(t), n.d(t, {
                getVolume: function() {
                    return s
                },
                setVolume: function() {
                    return i
                },
                getMuted: function() {
                    return r
                },
                setMuted: function() {
                    return o
                }
            });
            var l = n("95410");
            let a = "MediaPlayerVolume";

            function s() {
                var e;
                let {
                    volume: t
                } = null !== (e = l.default.get(a)) && void 0 !== e ? e : {};
                return "number" != typeof t && (t = 1), t = Math.min(1, Math.max(0, t))
            }

            function i(e) {
                l.default.set(a, {
                    volume: e,
                    muted: r()
                })
            }

            function r() {
                var e;
                let {
                    muted: t
                } = null !== (e = l.default.get(a)) && void 0 !== e ? e : {};
                return "boolean" != typeof t && (t = !1), t
            }

            function o(e) {
                l.default.set(a, {
                    volume: s(),
                    muted: e
                })
            }