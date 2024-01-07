            "use strict";
            r.r(e), r.d(e, {
                rrulestr: function() {
                    return y
                }
            }), r("70102"), r("424973"), r("781738");
            var n = r("676730"),
                i = r("191899"),
                a = r("511240"),
                o = r("737912"),
                s = r("871111"),
                u = r("304333"),
                d = {
                    dtstart: null,
                    cache: !1,
                    unfold: !1,
                    forceset: !1,
                    compatible: !1,
                    tzid: null
                };

            function y(t, e) {
                return void 0 === e && (e = {}),
                    function(t, e) {
                        var r, n, o, d, y, l, f, p, m, b = (r = t, n = e, o = [], d = [], y = [], l = [], p = (f = (0, u.parseDtstart)(r)).dtstart, m = f.tzid, (function(t, e) {
                                if (void 0 === e && (e = !1), !(t = t && t.trim())) throw Error("Invalid empty string");
                                if (!e) return t.split(/\s/);
                                for (var r = t.split("\n"), n = 0; n < r.length;) {
                                    var i = r[n] = r[n].replace(/\s+$/g, "");
                                    i ? n > 0 && " " === i[0] ? (r[n - 1] += i.slice(1), r.splice(n, 1)) : n += 1 : r.splice(n, 1)
                                }
                                return r
                            })(r, n.unfold).forEach(function(t) {
                                if (t) {
                                    var e, r = function(t) {
                                            var e = function(t) {
                                                    if (-1 === t.indexOf(":")) return {
                                                        name: "RRULE",
                                                        value: t
                                                    };
                                                    var e = (0, s.split)(t, ":", 1);
                                                    return {
                                                        name: e[0],
                                                        value: e[1]
                                                    }
                                                }(t),
                                                r = e.name,
                                                n = e.value,
                                                i = r.split(";");
                                            if (!i) throw Error("empty property name");
                                            return {
                                                name: i[0].toUpperCase(),
                                                parms: i.slice(1),
                                                value: n
                                            }
                                        }(t),
                                        n = r.name,
                                        i = r.parms,
                                        a = r.value;
                                    switch (n.toUpperCase()) {
                                        case "RRULE":
                                            if (i.length) throw Error("unsupported RRULE parm: ".concat(i.join(",")));
                                            o.push((0, u.parseString)(t));
                                            break;
                                        case "RDATE":
                                            var c = (null !== (e = /RDATE(?:;TZID=([^:=]+))?/i.exec(t)) && void 0 !== e ? e : [])[1];
                                            c && !m && (m = c), d = d.concat(h(a, i));
                                            break;
                                        case "EXRULE":
                                            if (i.length) throw Error("unsupported EXRULE parm: ".concat(i.join(",")));
                                            y.push((0, u.parseString)(a));
                                            break;
                                        case "EXDATE":
                                            l = l.concat(h(a, i));
                                            break;
                                        case "DTSTART":
                                            break;
                                        default:
                                            throw Error("unsupported property: " + n)
                                    }
                                }
                            }), {
                                dtstart: p,
                                tzid: m,
                                rrulevals: o,
                                rdatevals: d,
                                exrulevals: y,
                                exdatevals: l
                            }),
                            v = b.rrulevals,
                            w = b.rdatevals,
                            g = b.exrulevals,
                            k = b.exdatevals,
                            _ = b.dtstart,
                            E = b.tzid,
                            T = !1 === e.cache;
                        if (e.compatible && (e.forceset = !0, e.unfold = !0), e.forceset || v.length > 1 || w.length || g.length || k.length) {
                            var A = new a.RRuleSet(T);
                            return A.dtstart(_), A.tzid(E || void 0), v.forEach(function(t) {
                                A.rrule(new i.RRule(c(t, _, E), T))
                            }), w.forEach(function(t) {
                                A.rdate(t)
                            }), g.forEach(function(t) {
                                A.exrule(new i.RRule(c(t, _, E), T))
                            }), k.forEach(function(t) {
                                A.exdate(t)
                            }), e.compatible && e.dtstart && A.rdate(_), A
                        }
                        var R = v[0] || {};
                        return new i.RRule(c(R, R.dtstart || e.dtstart || _, R.tzid || e.tzid || E), T)
                    }(t, function(t) {
                        var e = [],
                            r = Object.keys(t),
                            i = Object.keys(d);
                        if (r.forEach(function(t) {
                                !(0, s.includes)(i, t) && e.push(t)
                            }), e.length) throw Error("Invalid options: " + e.join(", "));
                        return (0, n.__assign)((0, n.__assign)({}, d), t)
                    }(e))
            }

            function c(t, e, r) {
                return (0, n.__assign)((0, n.__assign)({}, t), {
                    dtstart: e,
                    tzid: r
                })
            }

            function h(t, e) {
                return ! function(t) {
                    t.forEach(function(t) {
                        if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(t)) throw Error("unsupported RDATE/EXDATE parm: " + t)
                    })
                }(e), t.split(",").map(function(t) {
                    return (0, o.untilStringToDate)(t)
                })
            }