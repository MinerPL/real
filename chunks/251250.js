            "use strict";
            var e = n("503486"),
                o = n("664144"),
                i = n("58986"),
                u = n("188523").NATIVE_ARRAY_BUFFER_VIEWS,
                ArrayBuffer = e.ArrayBuffer,
                Int8Array = e.Int8Array;
            t.exports = !u || !o(function() {
                Int8Array(1)
            }) || !o(function() {
                new Int8Array(-1)
            }) || !i(function(t) {
                new Int8Array, new Int8Array(null), new Int8Array(1.5), new Int8Array(t)
            }, !0) || o(function() {
                return 1 !== new Int8Array(new ArrayBuffer(2), 1, void 0).length
            })