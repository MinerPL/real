            function r(t, e, n, r, i, o, a) {
                try {
                    var u = t[o](a),
                        s = u.value
                } catch (t) {
                    n(t);
                    return
                }
                u.done ? e(s) : Promise.resolve(s).then(r, i)
            }
            n("854508");
            t.exports = function(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(i, o) {
                        var a = t.apply(e, n);

                        function u(t) {
                            r(a, i, o, u, s, "next", t)
                        }

                        function s(t) {
                            r(a, i, o, u, s, "throw", t)
                        }
                        u(void 0)
                    })
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports