            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("753671");

            function a(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && (0, r.isShadowRoot)(n)) {
                    var a = t;
                    do {
                        if (a && e.isSameNode(a)) return !0;
                        a = a.parentNode || a.host
                    } while (a)
                }
                return !1
            }