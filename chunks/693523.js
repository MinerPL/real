"use strict";
var e, o, i = n("503486"),
  u = n("297293"),
  c = i.process,
  s = i.Deno,
  f = c && c.versions || s && s.version,
  a = f && f.v8;
a && (o = (e = a.split("."))[0] > 0 && e[0] < 4 ? 1 : +(e[0] + e[1])), !o && u && (!(e = u.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = u.match(/Chrome\/(\d+)/)) && (o = +e[1]), t.exports = o