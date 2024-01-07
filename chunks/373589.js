            "use strict";

            function r(e, t, n, r) {
                var o = n ? n.call(r, e, t) : void 0;
                if (void 0 !== o) return !!o;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                var a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < a.length; c++) {
                    var l = a[c];
                    if (!s(l)) return !1;
                    var u = e[l],
                        d = t[l];
                    if (!1 === (o = n ? n.call(r, u, d, l) : void 0) || void 0 === o && u !== d) return !1
                }
                return !0
            }
            n.r(t), n.d(t, {
                shallowEqual: function() {
                    return r
                }
            })