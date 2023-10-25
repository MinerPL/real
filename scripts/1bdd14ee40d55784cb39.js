(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["49709"], {
        13399: function(t, n, e) {
            "use strict";
            t.exports.parse = function(t) {
                var n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var e = null,
                    r = [];
                n[2] && (e = (i = n[2].split("-")).shift(), r = i);
                var o = [];
                n[5] && (o = n[5].split("-")).shift();
                var u = [];
                if (n[6]) {
                    (i = n[6].split("-")).shift();
                    for (var i, c, a = []; i.length;) {
                        var f = i.shift();
                        1 === f.length ? c ? (u.push({
                            singleton: c,
                            extension: a
                        }), c = f, a = []) : c = f : a.push(f)
                    }
                    u.push({
                        singleton: c,
                        extension: a
                    })
                }
                var s = [];
                n[7] && ((s = n[7].split("-")).shift(), s.shift());
                var l = [];
                return n[8] && (l = n[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: e,
                            extlang: r
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: o,
                        extension: u,
                        privateuse: s
                    },
                    privateuse: l,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        238455: function(t, n, e) {
            var r = e("63533"),
                o = e("651558"),
                u = e("349046"),
                i = e("153997"),
                c = e("820458"),
                a = e("663652"),
                f = Object.prototype.hasOwnProperty;
            t.exports = function(t, n) {
                var e = u(t),
                    s = !e && o(t),
                    l = !e && !s && i(t),
                    p = !e && !s && !l && a(t),
                    d = e || s || l || p,
                    b = d ? r(t.length, String) : [],
                    h = b.length;
                for (var g in t)(n || f.call(t, g)) && !(d && ("length" == g || l && ("offset" == g || "parent" == g) || p && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || c(g, h))) && b.push(g);
                return b
            }
        },
        291002: function(t, n, e) {
            var r = e("109633"),
                o = e("261711");
            t.exports = function(t) {
                return o(r(t))
            }
        },
        85722: function(t, n, e) {
            var r = e("616691"),
                o = e("960052"),
                u = e("509492"),
                i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return u(t) && o(t.length) && !!i[r(t)]
            }
        },
        891183: function(t, n, e) {
            var r = e("356827"),
                o = e("57100"),
                u = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return o(t);
                var n = [];
                for (var e in Object(t)) u.call(t, e) && "constructor" != e && n.push(e);
                return n
            }
        },
        773988: function(t, n, e) {
            var r = e("261711"),
                o = e("211919");
            t.exports = function(t) {
                return r(o(t))
            }
        },
        63533: function(t, n, e) {
            t.exports = function(t, n) {
                for (var e = -1, r = Array(t); ++e < t;) r[e] = n(e);
                return r
            }
        },
        870686: function(t, n, e) {
            t.exports = function(t) {
                return function(n) {
                    return t(n)
                }
            }
        },
        109521: function(t, n, e) {
            var r = e("107327");
            t.exports = function(t, n) {
                return r(n, function(n) {
                    return t[n]
                })
            }
        },
        109633: function(t, n, e) {
            t.exports = function(t, n) {
                var e = -1,
                    r = t.length;
                for (n || (n = Array(r)); ++e < r;) n[e] = t[e];
                return n
            }
        },
        356827: function(t, n, e) {
            var r = Object.prototype;
            t.exports = function(t) {
                var n = t && t.constructor;
                return t === ("function" == typeof n && n.prototype || r)
            }
        },
        57100: function(t, n, e) {
            var r = e("676315")(Object.keys, Object);
            t.exports = r
        },
        961077: function(t, n, e) {
            t = e.nmd(t);
            var r = e("71890"),
                o = "object" == typeof n && n && !n.nodeType && n,
                u = o && "object" == typeof t && t && !t.nodeType && t,
                i = u && u.exports === o && r.process,
                c = function() {
                    try {
                        var t = u && u.require && u.require("util").types;
                        if (t) return t;
                        return i && i.binding && i.binding("util")
                    } catch (t) {}
                }();
            t.exports = c
        },
        676315: function(t, n, e) {
            t.exports = function(t, n) {
                return function(e) {
                    return t(n(e))
                }
            }
        },
        261711: function(t, n, e) {
            var r = e("54506");
            t.exports = function(t, n) {
                var e = -1,
                    o = t.length,
                    u = o - 1;
                for (n = void 0 === n ? o : n; ++e < n;) {
                    var i = r(e, u),
                        c = t[i];
                    t[i] = t[e], t[e] = c
                }
                return t.length = n, t
            }
        },
        153997: function(t, n, e) {
            t = e.nmd(t);
            var r = e("619146"),
                o = e("108028"),
                u = "object" == typeof n && n && !n.nodeType && n,
                i = u && "object" == typeof t && t && !t.nodeType && t,
                c = i && i.exports === u ? r.Buffer : void 0,
                a = c ? c.isBuffer : void 0;
            t.exports = a || o
        },
        663652: function(t, n, e) {
            var r = e("85722"),
                o = e("870686"),
                u = e("961077"),
                i = u && u.isTypedArray,
                c = i ? o(i) : r;
            t.exports = c
        },
        905269: function(t, n, e) {
            var r = e("238455"),
                o = e("891183"),
                u = e("355653");
            t.exports = function(t) {
                return u(t) ? r(t) : o(t)
            }
        },
        906288: function(t, n, e) {
            var r = e("291002"),
                o = e("773988"),
                u = e("349046");
            t.exports = function(t) {
                return (u(t) ? r : o)(t)
            }
        },
        108028: function(t, n, e) {
            t.exports = function() {
                return !1
            }
        },
        211919: function(t, n, e) {
            var r = e("109521"),
                o = e("905269");
            t.exports = function(t) {
                return null == t ? [] : r(t, o(t))
            }
        },
        962429: function(t, n, e) {
            "use strict";

            function r(t, n) {
                if (t.length !== n.length) return !1;
                for (let e = 0; e < n.length && e < t.length; e++)
                    if (!Object.is(t[e], n[e])) return !1;
                return !0
            }
            e.r(n), e.d(n, {
                default: function() {
                    return r
                }
            })
        },
        365444: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return o.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var r = e("732427"),
                o = e("866490"),
                u = e("246105")
        },
        732427: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return o
                }
            });
            var r = e("773670");

            function o() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        246105: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return u
                }
            });
            var r = e("773670");
            let o = {};

            function u(t) {
                let n = (0, r.useRef)(o);
                return n.current === o && (n.current = t()), n.current
            }
        },
        866490: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return i
                }
            });
            var r = e("773670"),
                o = e("962429");
            let u = [];

            function i(t, n) {
                let e = (0, r.useRef)(),
                    i = (0, r.useRef)(u);
                return i.current === u ? (e.current = t(), i.current = n) : !(0, o.default)(n, i.current) && (e.current = t(), i.current = n), e.current
            }
        },
        989901: function(t, n, e) {
            "use strict";
            var r, o;
            e.r(n), e.d(n, {
                ThreadSearchTagSetting: function() {
                    return r
                }
            }), (o = r || (r = {})).MATCH_ALL = "match_all", o.MATCH_SOME = "match_some"
        },
        895393: function(t, n, e) {
            "use strict";

            function r(t) {
                let n = document.body;
                if (null == n) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let e = document.createRange(),
                    r = window.getSelection(),
                    o = document.createElement("textarea");
                o.value = t, o.contentEditable = "true", o.style.visibility = "none", n.appendChild(o), e.selectNodeContents(o), null == r || r.removeAllRanges(), null == r || r.addRange(e), o.focus(), o.setSelectionRange(0, t.length);
                let u = document.execCommand("copy");
                return n.removeChild(o), u
            }
            e.r(n), e.d(n, {
                copy: function() {
                    return r
                }
            })
        }
    }
]);