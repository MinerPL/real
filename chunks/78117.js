            "use strict";
            i("780440");
            var n = i("404446"),
                r = i("484784"),
                a = i("274198"),
                s = i("664144"),
                o = i("174669"),
                l = i("366483"),
                u = o("species"),
                c = RegExp.prototype;
            t.exports = function(t, e, i, h) {
                var f = o(t),
                    d = !s(function() {
                        var e = {};
                        return e[f] = function() {
                            return 7
                        }, 7 !== "" [t](e)
                    }),
                    m = d && !s(function() {
                        var e = !1,
                            i = /a/;
                        return "split" === t && ((i = {}).constructor = {}, i.constructor[u] = function() {
                            return i
                        }, i.flags = "", i[f] = /./ [f]), i.exec = function() {
                            return e = !0, null
                        }, i[f](""), !e
                    });
                if (!d || !m || i) {
                    var v = n(/./ [f]),
                        p = e(f, "" [t], function(t, e, i, r, s) {
                            var o = n(t),
                                l = e.exec;
                            if (l === a || l === c.exec) return d && !s ? {
                                done: !0,
                                value: v(e, i, r)
                            } : {
                                done: !0,
                                value: o(i, e, r)
                            };
                            return {
                                done: !1
                            }
                        });
                    r(String.prototype, t, p[0]), r(c, f, p[1])
                }
                h && l(c[f], "sham", !0)
            }