            "use strict";
            r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("659510"), r("527135"), r("70102");
            var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
            e.assign = function(t) {
                for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
                    var r, i, n = e.shift();
                    if (!!n) {
                        if ("object" != typeof n) throw TypeError(n + "must be non-object");
                        for (var a in n) {
                            ;
                            if (r = n, i = a, Object.prototype.hasOwnProperty.call(r, i)) t[a] = n[a]
                        }
                    }
                }
                return t
            }, e.shrinkBuf = function(t, e) {
                return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t)
            };
            var n = {
                    arraySet: function(t, e, r, i, n) {
                        if (e.subarray && t.subarray) {
                            t.set(e.subarray(r, r + i), n);
                            return
                        }
                        for (var a = 0; a < i; a++) t[n + a] = e[r + a]
                    },
                    flattenChunks: function(t) {
                        var e, r, i, n, a, o;
                        for (e = 0, i = 0, r = t.length; e < r; e++) i += t[e].length;
                        for (e = 0, o = new Uint8Array(i), n = 0, r = t.length; e < r; e++) a = t[e], o.set(a, n), n += a.length;
                        return o
                    }
                },
                a = {
                    arraySet: function(t, e, r, i, n) {
                        for (var a = 0; a < i; a++) t[n + a] = e[r + a]
                    },
                    flattenChunks: function(t) {
                        return [].concat.apply([], t)
                    }
                };
            e.setTyped = function(t) {
                t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, n)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, a))
            }, e.setTyped(i)