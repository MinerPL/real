            e = r.nmd(e);
            var n = r("626849"),
                o = "object" == typeof t && t && !t.nodeType && t,
                a = o && "object" == typeof e && e && !e.nodeType && e,
                i = a && a.exports === o ? n.Buffer : void 0,
                u = i ? i.allocUnsafe : void 0;
            e.exports = function(e, t) {
                if (t) return e.slice();
                var r = e.length,
                    n = u ? u(r) : new e.constructor(r);
                return e.copy(n), n
            }