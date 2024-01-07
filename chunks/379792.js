            "use strict";
            var n = r("727204"),
                i = TypeError,
                u = function(t) {
                    var e, r;
                    this.promise = new t(function(t, n) {
                        if (void 0 !== e || void 0 !== r) throw i("Bad Promise constructor");
                        e = t, r = n
                    }), this.resolve = n(e), this.reject = n(r)
                };
            t.exports.f = function(t) {
                return new u(t)
            }