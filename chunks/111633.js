            "use strict";
            t.exports = function(t) {
                var e, r;
                return (t = String(t).toLowerCase()).length < 3 ? t : (121 === t.charCodeAt(0) && (e = !0, t = "Y" + t.substr(1)), x.test(t) ? t = t.substr(0, t.length - 2) : _.test(t) && (t = t.substr(0, t.length - 1)), (r = b.exec(t)) ? u.test(r[1]) && (t = t.substr(0, t.length - 1)) : (r = v.exec(t)) && h.test(r[1]) && (t = r[1], y.test(t) ? t += "e" : P.test(t) ? t = t.substr(0, t.length - 1) : f.test(t) && (t += "e")), (r = m.exec(t)) && h.test(r[1]) && (t = r[1] + "i"), (r = w.exec(t)) && u.test(r[1]) && (t = r[1] + n[r[2]]), (r = S.exec(t)) && u.test(r[1]) && (t = r[1] + i[r[2]]), (r = T.exec(t)) ? l.test(r[1]) && (t = r[1]) : (r = g.exec(t)) && l.test(r[1]) && (t = r[1]), (r = p.exec(t)) && (l.test(r[1]) || c.test(r[1]) && !f.test(r[1])) && (t = r[1]), d.test(t) && l.test(t) && (t = t.substr(0, t.length - 1)), e && (t = "y" + t.substr(1)), t)
            };
            var n = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                i = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                a = "[aeiouy]",
                s = "([^aeiou][^aeiouy]*)",
                o = "(" + a + "[aeiou]*)",
                u = RegExp("^" + s + "?" + o + s),
                c = RegExp("^" + s + "?" + o + s + o + "?$"),
                l = RegExp("^" + s + "?(" + o + s + "){2,}"),
                h = RegExp("^" + s + "?" + a),
                f = RegExp("^" + s + a + "[^aeiouwxy]$"),
                d = /ll$/,
                p = /^(.+?)e$/,
                m = /^(.+?)y$/,
                g = /^(.+?(s|t))(ion)$/,
                v = /^(.+?)(ed|ing)$/,
                y = /(at|bl|iz)$/,
                b = /^(.+?)eed$/,
                _ = /^.+?[^s]s$/,
                x = /^.+?(ss|i)es$/,
                P = /([^aeiouylsz])\1$/,
                w = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                S = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                T = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")