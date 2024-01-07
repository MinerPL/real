            r("70102");
            var i = r("912065").Buffer;
            t.exports = function(t, e, r) {
                if (i.isBuffer(t)) return t;
                if ("string" == typeof t) return i.from(t, e);
                if (ArrayBuffer.isView(t)) return i.from(t.buffer);
                else throw TypeError(r + " must be a string, a Buffer, a typed array or a DataView")
            }