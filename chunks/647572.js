            "use strict";
            n.r(t), n.d(t, {
                LocalizedStringDictionary: function() {
                    return r
                },
                LocalizedStringFormatter: function() {
                    return i
                }
            }), n("70102"), n("222007");
            class r {
                getStringForLocale(e, t) {
                    let n = this.strings[t];
                    !n && (n = function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en-US";
                        if (t[e]) return t[e];
                        let r = function(e) {
                            return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0]
                        }(e);
                        if (t[r]) return t[r];
                        for (let e in t)
                            if (e.startsWith(r + "-")) return t[e];
                        return t[n]
                    }(t, this.strings, this.defaultLocale), this.strings[t] = n);
                    let r = n[e];
                    if (!r) throw Error("Could not find intl message ".concat(e, " in ").concat(t, " locale"));
                    return r
                }
                constructor(e, t = "en-US") {
                    this.strings = {
                        ...e
                    }, this.defaultLocale = t
                }
            }
            let o = new Map,
                a = new Map;
            class i {
                format(e, t) {
                    let n = this.strings.getStringForLocale(e, this.locale);
                    return "function" == typeof n ? n(t, this) : n
                }
                plural(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "cardinal",
                        r = t["=" + e];
                    if (r) return "function" == typeof r ? r() : r;
                    let a = this.locale + ":" + n,
                        i = o.get(a);
                    return !i && (i = new Intl.PluralRules(this.locale, {
                        type: n
                    }), o.set(a, i)), "function" == typeof(r = t[i.select(e)] || t.other) ? r() : r
                }
                number(e) {
                    let t = a.get(this.locale);
                    return !t && (t = new Intl.NumberFormat(this.locale), a.set(this.locale, t)), t.format(e)
                }
                select(e, t) {
                    let n = e[t] || e.other;
                    return "function" == typeof n ? n() : n
                }
                constructor(e, t) {
                    this.locale = e, this.strings = t
                }
            }