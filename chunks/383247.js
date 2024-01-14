"use strict";
n.r(t), n.d(t, {
  renderComponents: function() {
    return C
  },
  default: function() {
    return S
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("798609"),
  u = n("42203"),
  o = n("307311"),
  i = n("812684"),
  r = n("802904"),
  d = n("682595"),
  c = n("433155"),
  m = n("73829"),
  p = n("263130"),
  f = n("284360"),
  E = n("393486");

function C(e) {
  return e.map((e, t) => (function(e, t) {
    switch (e.type) {
      case s.ComponentType.ACTION_ROW:
        return (0, l.jsx)(f.default, {
          ...e,
          renderComponents: C
        }, t);
      case s.ComponentType.BUTTON:
        return (0, l.jsx)(r.default, {
          ...e
        }, t);
      case s.ComponentType.STRING_SELECT:
        return (0, l.jsx)(m.default, {
          ...e
        }, t);
      case s.ComponentType.CHANNEL_SELECT:
        return (0, l.jsx)(d.default, {
          ...e
        }, t);
      case s.ComponentType.USER_SELECT:
      case s.ComponentType.ROLE_SELECT:
      case s.ComponentType.MENTIONABLE_SELECT:
        return (0, l.jsx)(c.default, {
          ...e
        }, t);
      case s.ComponentType.INPUT_TEXT:
        return (0, l.jsx)(p.default, {
          ...e
        }, t)
    }
  })(e, t.toString()))
}

function S(e) {
  let {
    message: t
  } = e, n = a.useMemo(() => {
    var e, n;
    let l = u.default.getChannel(t.channel_id),
      a = null == l ? void 0 : l.guild_id;
    return (0, i.createComponents)(null !== (e = t.components) && void 0 !== e ? e : [], null !== (n = t.applicationId) && void 0 !== n ? n : t.author.id, a)
  }, [t]);
  return 0 === n.length ? null : (0, l.jsx)("div", {
    className: E.container,
    children: (0, l.jsx)(o.ComponentStateContextProvider, {
      message: t,
      children: C(n)
    })
  })
}