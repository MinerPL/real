            "use strict";
            var n, o = r("418855"),
                i = r("786083"),
                c = r("978437"),
                u = r("241818"),
                s = r("574430"),
                a = r("382780"),
                f = r("285425"),
                p = "prototype",
                l = "script",
                y = f("IE_PROTO"),
                v = function() {},
                h = function(t) {
                    return "<" + l + ">" + t + "</" + l + ">"
                },
                d = function(t) {
                    t.write(h("")), t.close();
                    var e = t.parentWindow.Object;
                    return t = null, e
                },
                g = function() {
                    var t, e = a("iframe");
                    return e.style.display = "none", s.appendChild(e), e.src = String("java" + l + ":"), (t = e.contentWindow.document).open(), t.write(h("document.F=Object")), t.close(), t.F
                },
                O = function() {
                    try {
                        n = new ActiveXObject("htmlfile")
                    } catch (t) {}
                    O = "undefined" != typeof document ? document.domain && n ? d(n) : g() : d(n);
                    for (var t = c.length; t--;) delete O[p][c[t]];
                    return O()
                };
            u[y] = !0, t.exports = Object.create || function(t, e) {
                var r;
                return null !== t ? (v[p] = o(t), r = new v, v[p] = null, r[y] = t) : r = O(), void 0 === e ? r : i.f(r, e)
            }