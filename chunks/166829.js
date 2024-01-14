n("781738"), n("424973");
var r = n("258169"),
  o = /%[sdv%]/g,
  a = function(e) {
    var t = 1,
      n = arguments,
      r = n.length;
    return e.replace(o, function(e) {
      if (t >= r) return e;
      var o = n[t];
      switch (t += 1, e) {
        case "%%":
          return "%";
        case "%s":
          return String(o);
        case "%d":
          return Number(o);
        case "%v":
          return ""
      }
    })
  },
  i = function(e, t, n) {
    var r = [e + "=" + (t.format instanceof Function ? t.format(t.push ? n : n[t.name]) : t.format)];
    if (t.names)
      for (var o = 0; o < t.names.length; o += 1) {
        var i = t.names[o];
        t.name ? r.push(n[t.name][i]) : r.push(n[t.names[o]])
      } else r.push(n[t.name]);
    return a.apply(null, r)
  },
  s = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
  c = ["i", "c", "b", "a"];
e.exports = function(e, t) {
  t = t || {}, null == e.version && (e.version = 0), null == e.name && (e.name = " "), e.media.forEach(function(e) {
    null == e.payloads && (e.payloads = "")
  });
  var n = t.outerOrder || s,
    o = t.innerOrder || c,
    a = [];
  return n.forEach(function(t) {
    r[t].forEach(function(n) {
      n.name in e && null != e[n.name] ? a.push(i(t, n, e)) : n.push in e && null != e[n.push] && e[n.push].forEach(function(e) {
        a.push(i(t, n, e))
      })
    })
  }), e.media.forEach(function(e) {
    a.push(i("m", r.m[0], e)), o.forEach(function(t) {
      r[t].forEach(function(n) {
        n.name in e && null != e[n.name] ? a.push(i(t, n, e)) : n.push in e && null != e[n.push] && e[n.push].forEach(function(e) {
          a.push(i(t, n, e))
        })
      })
    })
  }), a.join("\r\n") + "\r\n"
}