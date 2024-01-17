"use strict";
let r;
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("424973");
var i = n("917351"),
  l = n.n(i),
  o = n("693566"),
  u = n.n(o),
  a = n("851387"),
  s = n("305961"),
  c = n("697218"),
  d = n("718517"),
  f = n("158998"),
  h = n("782340");
let p = new u({
  maxAge: 1 * d.default.Millis.MINUTE
});

function I(e, t, n) {
  null != r && clearTimeout(r), r = setTimeout(() => {
    let r = [],
      i = e => {
        r.push(e.id)
      };
    if (null == e) l.forEach(s.default.getGuilds(), i);
    else if (Array.isArray(e)) e.forEach(e => {
      let t = s.default.getGuild(e);
      null != t && i(t)
    });
    else {
      let t = s.default.getGuild(e);
      null != t && i(t)
    }
    r.length > 0 && a.default.requestMembers(r, t.toLocaleLowerCase(), n)
  }, 200)
}

function m(e, t) {
  let n = "".concat(null != e ? e : "", ":").concat(t),
    r = p.get(n);
  if (null != r) return r;
  p.set(n, !0)
}
var E = {
  getGuildNameSuggestion: function(e) {
    let t = c.default.getCurrentUser(),
      n = f.getName(t);
    return null == n || 0 === n.length ? "" : h.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT.format({
      username: (null == e ? void 0 : e.truncateUsername) ? n.slice(0, 20) : n
    })
  },
  requestMembers(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
      r = Array.isArray(e),
      i = [],
      l = !1;
    if (r) e.forEach(e => {
      let n = m(e, t);
      null == n && i.push(e)
    });
    else {
      let n = m(e, t);
      null == n && (l = !0)
    }
    i.length > 0 && r ? I(i, t, n) : l && I(e, t, n)
  }
}