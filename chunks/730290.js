            "use strict";
            r("781738"), r("808653"), r("424973");
            var i = r("272074"),
                n = r("766811"),
                a = r("526504");

            function o(t, e) {
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
                        o = e.length > 0 ? e.join("=") : void 0;
                    o = void 0 === o ? null : a(o), r(a(n), o, i)
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
                                return null === r ? [o(e, t), "[", i, "]"].join("") : [o(e, t), "[", o(i, t), "]=", o(r, t)].join("")
                            };
                        case "bracket":
                            return function(e, r) {
                                return null === r ? o(e, t) : [o(e, t), "[]=", o(r, t)].join("")
                            };
                        default:
                            return function(e, r) {
                                return null === r ? o(e, t) : [o(e, t), "=", o(r, t)].join("")
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
                    if (null === n) return o(i, e);
                    if (Array.isArray(n)) {
                        var a = [];
                        return n.slice().forEach(function(t) {
                            void 0 !== t && a.push(r(i, t, a.length))
                        }), a.join("&")
                    }
                    return o(i, e) + "=" + o(n, e)
                }).filter(function(t) {
                    return t.length > 0
                }).join("&") : ""
            }