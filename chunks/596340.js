            r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341");
            var Symbol = r("330206"),
                Uint8Array = r("474211"),
                e = r("561662"),
                o = r("556459"),
                i = r("218282"),
                u = r("531217"),
                a = Symbol ? Symbol.prototype : void 0,
                c = a ? a.valueOf : void 0;
            t.exports = function(t, n, r, a, s, f, p) {
                switch (r) {
                    case "[object DataView]":
                        if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) break;
                        t = t.buffer, n = n.buffer;
                    case "[object ArrayBuffer]":
                        if (t.byteLength != n.byteLength || !f(new Uint8Array(t), new Uint8Array(n))) break;
                        return !0;
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return e(+t, +n);
                    case "[object Error]":
                        return t.name == n.name && t.message == n.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == n + "";
                    case "[object Map]":
                        var l = i;
                    case "[object Set]":
                        var v = 1 & a;
                        if (l || (l = u), t.size != n.size && !v) break;
                        var h = p.get(t);
                        if (h) return h == n;
                        a |= 2, p.set(t, n);
                        var _ = o(l(t), l(n), a, s, f, p);
                        return p.delete(t), _;
                    case "[object Symbol]":
                        if (c) return c.call(t) == c.call(n)
                }
                return !1
            }