            e("311790"), e("477657"), e("811875"), e("90301"), e("652153"), e("28797"), e("817884"), e("597349"), e("667536"), e("690341");
            var Symbol = e("506264"),
                Uint8Array = e("619462"),
                n = e("921563"),
                o = e("106985"),
                i = e("678531"),
                u = e("418578"),
                a = Symbol ? Symbol.prototype : void 0,
                c = a ? a.valueOf : void 0;
            t.exports = function(t, r, e, a, s, f, p) {
                switch (e) {
                    case "[object DataView]":
                        if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) break;
                        t = t.buffer, r = r.buffer;
                    case "[object ArrayBuffer]":
                        if (t.byteLength != r.byteLength || !f(new Uint8Array(t), new Uint8Array(r))) break;
                        return !0;
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return n(+t, +r);
                    case "[object Error]":
                        return t.name == r.name && t.message == r.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == r + "";
                    case "[object Map]":
                        var v = i;
                    case "[object Set]":
                        var l = 1 & a;
                        if (v || (v = u), t.size != r.size && !l) break;
                        var h = p.get(t);
                        if (h) return h == r;
                        a |= 2, p.set(t, r);
                        var _ = o(v(t), v(r), a, s, f, p);
                        return p.delete(t), _;
                    case "[object Symbol]":
                        if (c) return c.call(t) == c.call(r)
                }
                return !1
            }