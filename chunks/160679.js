r("70102"), r("424973"), e.parse = function(t, e) {
  if ("string" != typeof t) throw TypeError("argument str must be a string");
  var r = {},
    u = t.split(i),
    o = (e || {}).decode || n;
  return u.forEach(function(t) {
    var e = t.indexOf("=");
    if (!(e < 0)) {
      var n = t.substr(0, e).trim(),
        u = t.substr(++e, t.length).trim();
      '"' == u[0] && (u = u.slice(1, -1)), void 0 == r[n] && (r[n] = function(t, e) {
        try {
          return e(t)
        } catch (e) {
          return t
        }
      }(u, o))
    }
  }), r
}, e.serialize = function(t, e, r) {
  var n = r || {},
    i = n.encode || u;
  if (!o.test(t)) throw TypeError("argument name is invalid");
  var s = i(e);
  if (s && !o.test(s)) throw TypeError("argument val is invalid");
  var a = [t + "=" + s];
  if (null != n.maxAge) {
    var c = n.maxAge - 0;
    if (isNaN(c)) throw Error("maxAge should be a Number");
    a.push("Max-Age=" + Math.floor(c))
  }
  if (n.domain) {
    if (!o.test(n.domain)) throw TypeError("option domain is invalid");
    a.push("Domain=" + n.domain)
  }
  if (n.path) {
    if (!o.test(n.path)) throw TypeError("option path is invalid");
    a.push("Path=" + n.path)
  }
  return n.expires && a.push("Expires=" + n.expires.toUTCString()), n.httpOnly && a.push("HttpOnly"), n.secure && a.push("Secure"), n.firstPartyOnly && a.push("First-Party-Only"), a.join("; ")
};
var n = decodeURIComponent,
  u = encodeURIComponent,
  i = /; */,
  o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/