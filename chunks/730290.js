            "use strict";
            r("781738"), r("808653"), r("424973");
            var i = r("272074"),
                n = r("766811"),
                o = r("526504");

            function a(t, e) {
                return e.encode ? e.strict ? i(t) : encodeURIComponent(t) : t
            }
            e.extract = function(t) {
                return t.split("?")[1] || ""
            }, e.parse = function(t, e) {
                var r = function(t) {
                        var e;
                        switch (t.arrayFormat) {
                            case "index":
                                return function(t, r, i) {
                                    if (e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), !e) {
                                        i[t] = r;
                                        return
                                    }
                                    void 0 === i[t] && (i[t] = {}), i[t][e[1]] = r
                                };
                            case "bracket":
                                return function(t, r, i) {
                                    if (e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), e) {
                                        if (void 0 === i[t]) {
                                            i[t] = [r];
                                            return
                                        }
                                    } else {
                                        i[t] = r;
                                        return
                                    }
                                    i[t] = [].concat(i[t], r)
                                };
                            default:
                                return function(t, e, r) {
                                    if (void 0 === r[t]) {
                                        r[t] = e;
                                        return
                                    }
                                    r[t] = [].concat(r[t], e)
                                }
                        }
                    }(e = n({
                        arrayFormat: "none"
                    }, e)),
                    i = Object.create(null);
                return "string" == typeof t && (t = t.trim().replace(/^(\?|#|&)/, "")) ? (t.split("&").forEach(function(t) {
                    var e = t.replace(/\+/g, " ").split("="),
                        n = e.shift(),
                        a = e.length > 0 ? e.join("=") : void 0;
                    a = void 0 === a ? null : o(a), r(o(n), a, i)
                }), Object.keys(i).sort().reduce(function(t, e) {
                    var r = i[e];
                    return r && "object" == typeof r && !Array.isArray(r) ? t[e] = function t(e) {
                        return Array.isArray(e) ? e.sort() : "object" == typeof e ? t(Object.keys(e)).sort(function(t, e) {
                            return Number(t) - Number(e)
                        }).map(function(t) {
                            return e[t]
                        }) : e
                    }(r) : t[e] = r, t
                }, Object.create(null))) : i
            }, e.stringify = function(t, e) {
                var r = function(t) {
                    switch (t.arrayFormat) {
                        case "index":
                            return function(e, r, i) {
                                return null === r ? [a(e, t), "[", i, "]"].join("") : [a(e, t), "[", a(i, t), "]=", a(r, t)].join("")
                            };
                        case "bracket":
                            return function(e, r) {
                                return null === r ? a(e, t) : [a(e, t), "[]=", a(r, t)].join("")
                            };
                        default:
                            return function(e, r) {
                                return null === r ? a(e, t) : [a(e, t), "=", a(r, t)].join("")
                            }
                    }
                }(e = n({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none"
                }, e));
                return t ? Object.keys(t).sort().map(function(i) {
                    var n = t[i];
                    if (void 0 === n) return "";
                    if (null === n) return a(i, e);
                    if (Array.isArray(n)) {
                        var o = [];
                        return n.slice().forEach(function(t) {
                            void 0 !== t && o.push(r(i, t, o.length))
                        }), o.join("&")
                    }
                    return a(i, e) + "=" + a(n, e)
                }).filter(function(t) {
                    return t.length > 0
                }).join("&") : ""
            }