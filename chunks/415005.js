            "use strict";
            var i, n = r("390493");
            r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("492311"), r("70102");
            var o = r("446825"),
                a = o.Buffer,
                s = {};
            for (i in o) {
                if (!!o.hasOwnProperty(i)) "SlowBuffer" !== i && "Buffer" !== i && (s[i] = o[i])
            }
            var f = s.Buffer = {};
            for (i in a) {
                if (!!a.hasOwnProperty(i)) "allocUnsafe" !== i && "allocUnsafeSlow" !== i && (f[i] = a[i])
            }
            if (s.Buffer.prototype = a.prototype, (!f.from || f.from === Uint8Array.from) && (f.from = function(t, e, r) {
                    if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type ' + typeof t);
                    if (t && void 0 === t.length) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                    return a(t, e, r)
                }), !f.alloc && (f.alloc = function(t, e, r) {
                    if ("number" != typeof t) throw TypeError('The "size" argument must be of type number. Received type ' + typeof t);
                    if (t < 0 || t >= 2147483648) throw RangeError('The value "' + t + '" is invalid for option "size"');
                    var i = a(t);
                    return e && 0 !== e.length ? "string" == typeof r ? i.fill(e, r) : i.fill(e) : i.fill(0), i
                }), !s.kStringMaxLength) try {
                s.kStringMaxLength = n.binding("buffer").kStringMaxLength
            } catch (t) {}!s.constants && (s.constants = {
                MAX_LENGTH: s.kMaxLength
            }, s.kStringMaxLength && (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)), t.exports = s