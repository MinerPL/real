            "use strict";
            n.r(t), n.d(t, {
                hasBit: function() {
                    return i
                },
                addBit: function() {
                    return r
                },
                removeBit: function() {
                    return o
                },
                isUint8Array: function() {
                    return s
                },
                isSerializedUint8Array: function() {
                    return l
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");

            function i(e, t) {
                if (0 === e.length) return !1;
                let n = e[Math.floor(t / 8)];
                return (n & 1 << t % 8) != 0
            }

            function r(e, t) {
                let n = Math.floor(t / 8);
                if (e.length <= n) {
                    let t = new Uint8Array(n + 1);
                    t.set(e, 0), e = t
                }
                return e[n] |= 1 << t % 8, e
            }

            function o(e, t) {
                if (i(e, t)) {
                    let n = Math.floor(t / 8),
                        i = t % 8;
                    e[n] &= ~(1 << i)
                }
                return e
            }

            function s(e) {
                return e instanceof Uint8Array
            }

            function l(e) {
                return null != e && "object" == typeof e && "uint8array" === e.__tag__
            }