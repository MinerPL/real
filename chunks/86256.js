            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("436443"),
                i = n("917351"),
                r = n.n(i),
                o = n("347647");
            l.default.registerLanguage("ansi", o.default);
            var s = {
                highlight(e, t, n) {
                    if (! function(e) {
                            if (e.indexOf(a) >= 0) return !1;
                            let t = 0,
                                n = e.split("\n");
                            for (let e of n) {
                                if (e.length > 1e3) return !1;
                                null == e.match(/^\s*[/][/]/) && null != e.match(/[^/]/) && (t = 0);
                                let n = e.match(/[/]/g);
                                if (null != n && (t += n.length) > 30) return !1
                            }
                            return !0
                        }(t)) return null;
                    Date.now();
                    let i = l.default.highlight(e, t, n);
                    return Date.now(), i
                },
                hasLanguage: e => null != l.default.getLanguage(e)
            };
            let a = r.repeat("/", 15)