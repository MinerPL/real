! function() {
    var e, r, t, a, n, s = {
            448105: function(e, r, t) {
                "use strict";
                e.exports = function(e, r) {
                    var t = r.length,
                        a = e.length;
                    if (a > t) return !1;
                    if (a === t) return e === r;
                    e: for (var n = 0, s = 0; n < a; n++) {
                        for (var d = e.charCodeAt(n); s < t;)
                            if (r.charCodeAt(s++) === d) continue e;
                        return !1
                    }
                    return !0
                }
            },
            330206: function(e, r, t) {
                var a = t("690516").Symbol;
                e.exports = a
            },
            33426: function(e, r, t) {
                var a = t("330206"),
                    n = t("447245"),
                    s = t("677201"),
                    d = a ? a.toStringTag : void 0;
                e.exports = function(e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : d && d in Object(e) ? n(e) : s(e)
                }
            },
            447414: function(e, r, t) {
                var a = "object" == typeof t.g && t.g && t.g.Object === Object && t.g;
                e.exports = a
            },
            447245: function(e, r, t) {
                var a = t("330206"),
                    n = Object.prototype,
                    s = n.hasOwnProperty,
                    d = n.toString,
                    o = a ? a.toStringTag : void 0;
                e.exports = function(e) {
                    var r = s.call(e, o),
                        t = e[o];
                    try {
                        e[o] = void 0;
                        var a = !0
                    } catch (e) {}
                    var n = d.call(e);
                    return a && (r ? e[o] = t : delete e[o]), n
                }
            },
            677201: function(e, r, t) {
                var a = Object.prototype.toString;
                e.exports = function(e) {
                    return a.call(e)
                }
            },
            690516: function(e, r, t) {
                var a = t("447414"),
                    n = "object" == typeof self && self && self.Object === Object && self,
                    s = a || n || Function("return this")();
                e.exports = s
            },
            483366: function(e, r, t) {
                var a = t("285162"),
                    n = t("271388"),
                    s = t("16282"),
                    d = Math.max,
                    o = Math.min;
                e.exports = function(e, r, t) {
                    var h, i, u, c, l, f, p = 0,
                        v = !1,
                        b = !1,
                        y = !0;
                    if ("function" != typeof e) throw TypeError("Expected a function");

                    function g(r) {
                        var t = h,
                            a = i;
                        return h = i = void 0, p = r, c = e.apply(a, t)
                    }
                    r = s(r) || 0, a(t) && (v = !!t.leading, u = (b = "maxWait" in t) ? d(s(t.maxWait) || 0, r) : u, y = "trailing" in t ? !!t.trailing : y);

                    function m(e) {
                        var t = e - f,
                            a = e - p;
                        return void 0 === f || t >= r || t < 0 || b && a >= u
                    }

                    function E() {
                        var e, t, a, s, d = n();
                        if (m(d)) return O(d);
                        l = setTimeout(E, (t = (e = d) - f, a = e - p, s = r - t, b ? o(s, u - a) : s))
                    }

                    function O(e) {
                        return (l = void 0, y && h) ? g(e) : (h = i = void 0, c)
                    }

                    function j() {
                        var e, t = n(),
                            a = m(t);
                        if (h = arguments, i = this, f = t, a) {
                            if (void 0 === l) {
                                ;
                                return p = e = f, l = setTimeout(E, r), v ? g(e) : c
                            }
                            if (b) return clearTimeout(l), l = setTimeout(E, r), g(f)
                        }
                        return void 0 === l && (l = setTimeout(E, r)), c
                    }
                    return j.cancel = function() {
                        void 0 !== l && clearTimeout(l), p = 0, h = f = i = l = void 0
                    }, j.flush = function() {
                        return void 0 === l ? c : O(n())
                    }, j
                }
            },
            285162: function(e, r, t) {
                e.exports = function(e) {
                    var r = typeof e;
                    return null != e && ("object" == r || "function" == r)
                }
            },
            270879: function(e, r, t) {
                e.exports = function(e) {
                    return null != e && "object" == typeof e
                }
            },
            27556: function(e, r, t) {
                var a = t("33426"),
                    n = t("270879");
                e.exports = function(e) {
                    return "symbol" == typeof e || n(e) && "[object Symbol]" == a(e)
                }
            },
            271388: function(e, r, t) {
                var a = t("690516");
                e.exports = function() {
                    return a.Date.now()
                }
            },
            16282: function(e, r, t) {
                var a = t("285162"),
                    n = t("27556"),
                    s = 0 / 0,
                    d = /^\s+|\s+$/g,
                    o = /^[-+]0x[0-9a-f]+$/i,
                    h = /^0b[01]+$/i,
                    i = /^0o[0-7]+$/i,
                    u = parseInt;
                e.exports = function(e) {
                    if ("number" == typeof e) return e;
                    if (n(e)) return s;
                    if (a(e)) {
                        var r = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = a(r) ? r + "" : r
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, "");
                    var t = h.test(e);
                    return t || i.test(e) ? u(e.slice(2), t ? 2 : 8) : o.test(e) ? s : +e
                }
            },
            195547: function(e, r, t) {
                "use strict";

                function a(e, r) {
                    if (e.score === r.score) {
                        var t, a, n, s, d, o;
                        let h = null !== (s = null !== (n = e.sortable) && void 0 !== n ? n : null === (t = e.comparator) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && void 0 !== s ? s : "",
                            i = null !== (o = null !== (d = e.sortable) && void 0 !== d ? d : null === (a = r.comparator) || void 0 === a ? void 0 : a.toLocaleLowerCase()) && void 0 !== o ? o : "";
                        if (h < i) return -1;
                        if (h > i) return 1
                    }
                    return r.score - e.score
                }
                t.r(r), t.d(r, {
                    default: function() {
                        return a
                    }
                })
            },
            380029: function(e, r, t) {
                "use strict";
                t.r(r);
                var a = t("448105"),
                    n = t.n(a),
                    s = t("483366"),
                    d = t.n(s),
                    o = t("655518"),
                    h = t("159885"),
                    i = t("195547");
                let u = {
                        UPDATE_USERS: "UPDATE_USERS",
                        USER_RESULTS: "USER_RESULTS",
                        QUERY_SET: "QUERY_SET",
                        QUERY_CLEAR: "QUERY_CLEAR"
                    },
                    c = new Map,
                    l = new Map,
                    f = new Set,
                    p = "username",
                    v = "friendNickname",
                    b = "globalName",
                    y = d(() => {
                        0 !== f.size && (f.forEach(e => {
                            let r = l.get(e);
                            null != r && m(e, r)
                        }), f.clear())
                    }, 100, {
                        leading: !0,
                        trailing: !0
                    });

                function g(e, r) {
                    return e * (null != r ? r : 1)
                }

                function m(e, r) {
                    var t, a;
                    let {
                        query: s,
                        limit: d,
                        filters: u,
                        blacklist: l,
                        whitelist: f
                    } = r, y = null != u && u.strict && null !== (t = u.guild) && void 0 !== t ? t : null, m = null !== (a = r.boosters) && void 0 !== a ? a : {}, O = RegExp("^".concat(o.default.escape(s)), "i"), j = RegExp(o.default.escape(s), "i"), x = [];
                    if ("" === s) return E(s, x, e);
                    let S = s.toLocaleLowerCase(),
                        T = (0, h.normalize)(S);
                    c.forEach((e, r) => {
                        let t;
                        if (! function(e, r, t, a, n) {
                                if (null != a && a.indexOf(e) >= 0) return !1;
                                if (null != n && n.indexOf(e) >= 0) return !0;
                                if (null != t) {
                                    let {
                                        friends: e,
                                        guild: a
                                    } = t;
                                    return !0 === e && !0 === r.isFriend || null != a && (null != r[a] || null === r[a]) || !1
                                }
                                return !0
                            }(r, e, u, l, f)) return;
                        let {
                            username: a
                        } = e;
                        r === s ? t = {
                            id: r,
                            username: a,
                            comparator: r,
                            score: g(10, m[r])
                        } : Object.keys(e).forEach(s => {
                            let d;
                            let o = e[s];
                            if ("boolean" == typeof o || null == o || null != y && s !== p && s !== v && s !== b && y !== s) return;
                            let i = (0, h.stripDiacritics)(o.toLocaleLowerCase());
                            O.test(o) ? d = {
                                comparator: o,
                                score: g(10, m[r])
                            } : j.test(o) ? d = {
                                comparator: o,
                                score: g(5, m[r])
                            } : n(S, i) ? d = {
                                comparator: o,
                                score: g(1, m[r])
                            } : n(T, (0, h.normalize)(i)) && (d = {
                                comparator: o,
                                score: g(1, m[r])
                            }), null != d && (null == t || t.score < d.score) && (t = {
                                ...d,
                                id: r,
                                username: a
                            })
                        }), null != t && x.push(t)
                    }), x.sort(i.default), x.length > d && (x.length = d), E(s, x, e)
                }

                function E(e, r, t) {
                    let a = {
                        type: u.USER_RESULTS,
                        uuid: t,
                        payload: {
                            query: e,
                            results: r
                        }
                    };
                    self.postMessage(a)
                }
                self.addEventListener("message", e => {
                    let {
                        data: r
                    } = e;
                    if (null == r || null == r.type) throw Error("Invalid data");
                    switch (r.type) {
                        case u.UPDATE_USERS:
                            return function(e) {
                                let {
                                    payload: r
                                } = e, t = !1, a = new Set;
                                r.forEach(e => {
                                    var r;
                                    let {
                                        id: n,
                                        ...s
                                    } = e, d = null !== (r = c.get(n)) && void 0 !== r ? r : null, o = {
                                        ...d,
                                        ...s
                                    };
                                    c.set(n, o), l.size > 0 && ((o.isFriend !== (null == d ? void 0 : d.isFriend) || o.friendNickname !== (null == d ? void 0 : d.friendNickname)) && (t = !0), Object.keys(o).forEach(e => {
                                        "isBot" !== e && "isFriend" !== e && e !== p && e !== v && e !== b && a.add(e)
                                    }))
                                }), l.forEach((e, r) => {
                                    let {
                                        filters: n
                                    } = e;
                                    (null == n || n.friends === t || a.has(n.guild)) && f.add(r)
                                }), y()
                            }(r);
                        case u.QUERY_SET:
                            return function(e) {
                                let {
                                    uuid: r,
                                    payload: t
                                } = e;
                                l.set(r, t), m(r, t)
                            }(r);
                        case u.QUERY_CLEAR:
                            return function(e) {
                                let {
                                    uuid: r
                                } = e;
                                l.delete(r), f.delete(r), 0 === f.size && y.cancel()
                            }(r)
                    }
                })
            },
            655518: function(e, r, t) {
                "use strict";
                t.r(r), t.d(r, {
                    default: function() {
                        return a
                    }
                });
                var a = {
                    escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
                }
            },
            159885: function(e, r, t) {
                "use strict";
                t.r(r), t.d(r, {
                    isNullOrEmpty: function() {
                        return n
                    },
                    upperCaseFirstChar: function() {
                        return a.upperCaseFirstChar
                    },
                    getAcronym: function() {
                        return a.getAcronym
                    },
                    cssValueToNumber: function() {
                        return a.cssValueToNumber
                    },
                    stripDiacritics: function() {
                        return a.stripDiacritics
                    },
                    truncateText: function() {
                        return a.truncateText
                    },
                    normalize: function() {
                        return a.normalize
                    }
                });
                var a = t("617258");

                function n(e) {
                    return null == e || 0 === e.length
                }
            }
        },
        d = {};

    function o(e) {
        var r = d[e];
        if (void 0 !== r) return r.exports;
        var t = d[e] = {
            exports: {}
        };
        return s[e](t, t.exports, o), t.exports
    }
    o.m = s, o.x = function() {
        var e = o.O(void 0, ["shared"], function() {
            return o("380029")
        });
        return e = o.O(e)
    }, e = o.x, o.x = function() {
        return Promise.all(["shared"].map(o.e, o)).then(e)
    }, o.es = function(e, r) {
        return Object.keys(e).forEach(function(t) {
            "default" !== t && !Object.prototype.hasOwnProperty.call(r, t) && Object.defineProperty(r, t, {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            })
        }), e
    }, r = {
        100814: ["shared"],
        110374: ["shared"],
        114306: ["shared"],
        120467: ["shared"],
        122846: ["shared"],
        127891: ["shared"],
        130074: ["shared"],
        133541: ["shared"],
        135430: ["shared"],
        135722: ["shared"],
        143416: ["shared"],
        143909: ["shared"],
        153128: ["shared"],
        159747: ["shared"],
        166452: ["shared"],
        167573: ["shared"],
        168003: ["shared"],
        168984: ["shared"],
        170935: ["shared"],
        178521: ["shared"],
        184504: ["shared"],
        186638: ["shared"],
        188503: ["shared"],
        191131: ["shared"],
        194167: ["shared"],
        203811: ["shared"],
        203966: ["shared"],
        210565: ["shared"],
        21367: ["shared"],
        223993: ["shared"],
        225936: ["shared"],
        229233: ["shared"],
        247760: ["shared"],
        261649: ["shared"],
        262099: ["shared"],
        269055: ["shared"],
        277432: ["shared"],
        280201: ["shared"],
        281645: ["shared"],
        282585: ["shared"],
        292890: ["shared"],
        297267: ["shared"],
        298843: ["shared"],
        301450: ["shared"],
        303473: ["shared"],
        304207: ["shared"],
        310688: ["shared"],
        311972: ["shared"],
        312953: ["shared"],
        323518: ["shared"],
        324202: ["shared"],
        327241: ["shared"],
        33250: ["shared"],
        336522: ["shared"],
        337649: ["shared"],
        348866: ["shared"],
        353540: ["shared"],
        359113: ["shared"],
        360476: ["shared"],
        361896: ["shared"],
        363787: ["shared"],
        374278: ["shared"],
        374705: ["shared"],
        377531: ["shared"],
        380029: ["88243", "shared"],
        380140: ["shared"],
        381736: ["shared"],
        385065: ["shared"],
        385179: ["shared"],
        390594: ["shared"],
        392977: ["shared"],
        394816: ["shared"],
        399758: ["shared"],
        405314: ["shared"],
        406784: ["shared"],
        413012: ["shared"],
        420333: ["shared"],
        420610: ["shared"],
        432201: ["shared"],
        435768: ["shared"],
        437150: ["shared"],
        438967: ["shared"],
        443070: ["shared"],
        451680: ["shared"],
        451863: ["shared"],
        452113: ["shared"],
        452661: ["shared"],
        454e3: ["shared"],
        464667: ["shared"],
        467592: ["shared"],
        467940: ["shared"],
        469755: ["shared"],
        473070: ["shared"],
        475800: ["shared"],
        476427: ["shared"],
        479273: ["shared"],
        48175: ["shared"],
        485261: ["shared"],
        485857: ["shared"],
        487956: ["shared"],
        489118: ["shared"],
        492013: ["shared"],
        496088: ["shared"],
        497296: ["shared"],
        502155: ["shared"],
        510370: ["shared"],
        515680: ["shared"],
        523360: ["shared"],
        536071: ["shared"],
        538969: ["shared"],
        544929: ["shared"],
        545169: ["shared"],
        54666: ["shared"],
        549869: ["shared"],
        549988: ["shared"],
        552894: ["shared"],
        557890: ["shared"],
        55812: ["shared"],
        560057: ["shared"],
        56657: ["shared"],
        56814: ["shared"],
        57015: ["shared"],
        572544: ["shared"],
        572579: ["shared"],
        577766: ["shared"],
        581354: ["shared"],
        590749: ["shared"],
        590942: ["shared"],
        59833: ["shared"],
        601745: ["shared"],
        605455: ["shared"],
        613895: ["shared"],
        619596: ["shared"],
        620595: ["shared"],
        622618: ["shared"],
        62981: ["shared"],
        632507: ["shared"],
        632760: ["shared"],
        639028: ["shared"],
        644926: ["shared"],
        646077: ["shared"],
        646139: ["shared"],
        649486: ["shared"],
        651662: ["shared"],
        656137: ["shared"],
        657233: ["shared"],
        659707: ["shared"],
        668170: ["shared"],
        67323: ["shared"],
        67994: ["shared"],
        685807: ["shared"],
        693120: ["shared"],
        725420: ["shared"],
        726871: ["shared"],
        727212: ["shared"],
        727441: ["shared"],
        736139: ["shared"],
        743506: ["shared"],
        745705: ["shared"],
        747194: ["shared"],
        747593: ["shared"],
        750331: ["shared"],
        765105: ["shared"],
        775195: ["shared"],
        779020: ["shared"],
        787598: ["shared"],
        791050: ["shared"],
        79536: ["shared"],
        814781: ["shared"],
        823749: ["shared"],
        825138: ["shared"],
        826269: ["shared"],
        833843: ["shared"],
        834247: ["shared"],
        838093: ["shared"],
        83965: ["shared"],
        84279: ["shared"],
        843456: ["shared"],
        851172: ["shared"],
        860634: ["shared"],
        863089: ["shared"],
        874642: ["shared"],
        878551: ["shared"],
        878809: ["shared"],
        881892: ["shared"],
        889793: ["shared"],
        892845: ["shared"],
        894742: ["shared"],
        899945: ["shared"],
        918771: ["shared"],
        927475: ["shared"],
        93116: ["shared"],
        93184: ["shared"],
        933182: ["shared"],
        936380: ["shared"],
        937692: ["shared"],
        942055: ["shared"],
        949233: ["shared"],
        953750: ["shared"],
        953820: ["shared"],
        959350: ["shared"],
        960391: ["shared"],
        962276: ["shared"],
        962512: ["shared"],
        965179: ["shared"],
        969715: ["shared"],
        972119: ["shared"],
        973372: ["shared"],
        981125: ["shared"],
        986675: ["shared"],
        992996: ["shared"],
        994509: ["shared"],
        994827: ["shared"],
        995865: ["shared"],
        998730: ["shared"]
    }, o.el = function(e) {
        var t = r[e];
        return void 0 === t ? Promise.resolve() : t.length > 1 ? Promise.all(t.map(o.e)) : o.e(t[0])
    }, o.f = {}, o.e = function(e) {
        return Promise.all(Object.keys(o.f).reduce(function(r, t) {
            return o.f[t](e, r), r
        }, []))
    }, o.p = "/assets/", o.u = function(e) {
        return ({
            shared: "c6916cf9b593205f8f52.js"
        })[e]
    }, o.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, t = [], o.O = function(e, r, a, n) {
        if (r) {
            n = n || 0;
            for (var s = t.length; s > 0 && t[s - 1][2] > n; s--) t[s] = t[s - 1];
            t[s] = [r, a, n];
            return
        }
        for (var d = 1 / 0, s = 0; s < t.length; s++) {
            for (var r = t[s][0], a = t[s][1], n = t[s][2], h = !0, i = 0; i < r.length; i++) d >= n && Object.keys(o.O).every(function(e) {
                return o.O[e](r[i])
            }) ? r.splice(i--, 1) : (h = !1, n < d && (d = n));
            if (h) {
                t.splice(s--, 1);
                var u = a();
                void 0 !== u && (e = u)
            }
        }
        return e
    }, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.d = function(e, r) {
        for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.n = function(e) {
        return e && e.__esModule ? e.default : e
    }, n = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    } : function(e) {
        return e.__proto__
    }, o.t = function(e, r) {
        if (1 & r && (e = this(e)), 8 & r || "object" == typeof e && e && (4 & r && e.__esModule || 16 & r && "function" == typeof e.then)) return e;
        var t = Object.create(null);
        o.r(t);
        var s = {};
        a = a || [null, n({}), n([]), n(n)];
        for (var d = 2 & r && e;
            "object" == typeof d && !~a.indexOf(d); d = n(d)) Object.getOwnPropertyNames(d).forEach(function(r) {
            s[r] = function() {
                return e[r]
            }
        });
        return s.default = function() {
            return e
        }, o.d(t, s), t
    }, ! function() {
        o.b = self.location + "";
        var e = {
            88243: 1
        };
        o.f.i = function(r, t) {
            !e[r] && importScripts(o.p + o.u(r))
        };
        var r = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            t = r.push.bind(r);
        r.push = function(r) {
            var a = r[0],
                n = r[1],
                s = r[2];
            for (var d in n) o.o(n, d) && (o.m[d] = n[d]);
            for (s && s(o); a.length;) e[a.pop()] = 1;
            t(r)
        }
    }(), o.x()
}();