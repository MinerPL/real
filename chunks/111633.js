"use strict";
e.exports = function(e) {
  var t, n;
  return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), b.test(e) ? e = e.substr(0, e.length - 2) : C.test(e) && (e = e.substr(0, e.length - 1)), (n = E.exec(e)) ? u.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = m.exec(e)) && d.test(n[1]) && (e = n[1], g.test(e) ? e += "e" : x.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = _.exec(e)) && d.test(n[1]) && (e = n[1] + "i"), (n = y.exec(e)) && u.test(n[1]) && (e = n[1] + i[n[2]]), (n = N.exec(e)) && u.test(n[1]) && (e = n[1] + s[n[2]]), (n = I.exec(e)) ? c.test(n[1]) && (e = n[1]) : (n = v.exec(e)) && c.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (c.test(n[1]) || o.test(n[1]) && !f.test(n[1])) && (e = n[1]), p.test(e) && c.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
};
var i = {
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
  s = {
    icate: "ic",
    ative: "",
    alize: "al",
    iciti: "ic",
    ical: "ic",
    ful: "",
    ness: ""
  },
  r = "[aeiouy]",
  l = "([^aeiou][^aeiouy]*)",
  a = "(" + r + "[aeiou]*)",
  u = RegExp("^" + l + "?" + a + l),
  o = RegExp("^" + l + "?" + a + l + a + "?$"),
  c = RegExp("^" + l + "?(" + a + l + "){2,}"),
  d = RegExp("^" + l + "?" + r),
  f = RegExp("^" + l + r + "[^aeiouwxy]$"),
  p = /ll$/,
  h = /^(.+?)e$/,
  _ = /^(.+?)y$/,
  v = /^(.+?(s|t))(ion)$/,
  m = /^(.+?)(ed|ing)$/,
  g = /(at|bl|iz)$/,
  E = /^(.+?)eed$/,
  C = /^.+?[^s]s$/,
  b = /^.+?(ss|i)es$/,
  x = /([^aeiouylsz])\1$/,
  y = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
  N = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
  I = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")