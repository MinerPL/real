            "use strict";
            var e, o, i, u = n("522552"),
                s = n("268540"),
                c = n("490653"),
                f = n("321956"),
                a = n("694628"),
                p = n("54704"),
                v = n("355817"),
                l = n("418689"),
                y = v("iterator"),
                h = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (e = o) : h = !0), !c(e) || u(function() {
                var t = {};
                return e[y].call(t) !== t
            }) ? e = {} : l && (e = f(e)), !s(e[y]) && p(e, y, function() {
                return this
            }), t.exports = {
                IteratorPrototype: e,
                BUGGY_SAFARI_ITERATORS: h
            }