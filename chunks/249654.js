            "use strict";
            n.r(t), n.d(t, {
                DISCORD_EPOCH: function() {
                    return s
                },
                default: function() {
                    return l
                }
            });
            var i = n("552442"),
                r = n.n(i);
            let s = 14200704e5;

            function a(e) {
                return Math.floor(Number(e) / 4194304) + s
            }

            function o(e) {
                let t = e - s;
                return t <= 0 ? "0" : r(t).shiftLeft(22).toString()
            }
            var l = {
                age: function(e) {
                    return Date.now() - a(e)
                },
                extractTimestamp: a,
                fromTimestamp: o,
                atPreviousMillisecond: function(e) {
                    return o(a(e) - 1)
                },
                compare: function(e, t) {
                    return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1
                }
            }