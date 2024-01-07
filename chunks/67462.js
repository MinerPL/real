            var n = r("60297"),
                o = r("191472"),
                a = r("346173"),
                i = Object.prototype,
                u = Function.prototype.toString,
                l = i.hasOwnProperty,
                c = u.call(Object);
            e.exports = function(e) {
                if (!a(e) || "[object Object]" != n(e)) return !1;
                var t = o(e);
                if (null === t) return !0;
                var r = l.call(t, "constructor") && t.constructor;
                return "function" == typeof r && r instanceof r && u.call(r) == c
            }