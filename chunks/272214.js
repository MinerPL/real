            var r = n("68421"),
                o = n("566040"),
                a = n("323033"),
                i = parseFloat,
                s = Math.min,
                c = Math.random;
            e.exports = function(e, t, n) {
                if (n && "boolean" != typeof n && o(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = a(e), void 0 === t ? (t = e, e = 0) : t = a(t)), e > t) {
                    var l = e;
                    e = t, t = l
                }
                if (n || e % 1 || t % 1) {
                    var u = c();
                    return s(e + u * (t - e + i("1e-" + ((u + "").length - 1))), t)
                }
                return r(e, t)
            }