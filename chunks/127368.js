            s("70102");
            var r = s("912065").Buffer;
            t.exports = function(t, e, s) {
                if (r.isBuffer(t)) return t;
                if ("string" == typeof t) return r.from(t, e);
                if (ArrayBuffer.isView(t)) return r.from(t.buffer);
                else throw TypeError(s + " must be a string, a Buffer, a typed array or a DataView")
            }