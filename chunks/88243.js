"use strict";
n.r(t), n.d(t, {
  generateAttachmentSpec: function() {
    return d
  },
  generateMessageSpecs: function() {
    return c
  },
  default: function() {
    return f
  }
}), n("70102"), n("424973"), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("67602"),
  o = n("49111"),
  u = n("563166");

function d() {
  return {
    width: i.random(140, 400),
    height: i.random(100, 320)
  }
}

function c(e) {
  let {
    compact: t,
    messageGroups: n,
    groupRange: s,
    attachments: a,
    fontSize: l,
    groupSpacing: u
  } = e;
  if (a > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(a));
  let c = l / o.Accessibility.FONT_SIZE_DEFAULT,
    f = t ? r.HEIGHT_COMPACT_MESSAGE_START : r.HEIGHT_COZY_MESSAGE_START,
    h = t ? r.HEIGHT_COMPACT_MESSAGE : r.HEIGHT_COZY_MESSAGE,
    C = 0,
    p = Array(n).fill(null).map(() => {
      let e = i.random(1, s);
      return C += u * c + f * c + (e - 1) * h * c, e
    }),
    m = p.map((e, t) => t),
    g = [];
  for (; g.length < a;) {
    let e = d();
    g.push([m.splice(i.random(0, m.length - 1), 1)[0], e]), C += e.height + r.HEIGHT_ATTACHMEMT_PADDING * c
  }
  return {
    messages: p,
    attachmentSpecs: g,
    totalHeight: C,
    groupSpacing: u
  }
}

function f(e) {
  let {
    compact: t,
    messages: n,
    attachmentSpecs: l,
    totalHeight: i,
    groupSpacing: o
  } = e;
  return a.useMemo(() => {
    let e = Array(n.length).fill(void 0);
    for (let [t, n] of l) e[t] = n;
    return (0, s.jsx)("div", {
      className: u.wrapper,
      style: {
        height: i
      },
      children: n.map((n, a) => (0, s.jsx)(r.default, {
        groupSpacing: o,
        compact: t,
        messages: n,
        attachmentSpecs: e[a]
      }, a))
    })
  }, [t, n, l, i, o])
}