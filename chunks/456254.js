            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                getComponentStackTraceFromElement: function() {
                    return s
                }
            }), n("222007"), n("424973"), (i = r || (r = {}))[i.Unknown = 0] = "Unknown", i[i.Loaded = 1] = "Loaded", i[i.NotFound = 2] = "NotFound";
            let a = 0,
                l = null;

            function s(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                try {
                    let n = function(e) {
                        if (2 === a) return null;
                        0 === a && ! function(e) {
                            let t = e;
                            for (; null != t && t !== document.body;) {
                                let n = Object.keys(e);
                                for (let e of n)
                                    if (e.startsWith("__reactFiber$")) {
                                        l = e, a = 1;
                                        return
                                    } t = t.parentElement
                            }
                            null == l && (a = 2)
                        }(e);
                        let t = l,
                            n = e;
                        for (; null != n && n !== document.body;) {
                            if (t in n) {
                                let e = n[t];
                                return e
                            }
                            n = n.parentElement
                        }
                        return null
                    }(e);
                    if (null != n) return function(e, t) {
                        let n = [],
                            r = e;
                        for (; null != r;) {
                            var i, a;
                            let e = null == r ? void 0 : null === (i = r._debugSource) || void 0 === i ? void 0 : i.fileName,
                                l = null == r ? void 0 : null === (a = r._debugSource) || void 0 === a ? void 0 : a.lineNumber;
                            if (null != e && null != l) {
                                let r = "".concat(e, ":").concat(l);
                                if (t) {
                                    let e = r.split("/discord/");
                                    0 !== e.length && n.push(e[e.length - 1])
                                } else n.push(r)
                            }
                            r = null == r ? void 0 : r._debugOwner
                        }
                        return n
                    }(n, t);
                    return null
                } catch {
                    return null
                }
            }