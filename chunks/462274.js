"use strict";
l.r(i), l.d(i, {
  useColorStore: function() {
    return c
  },
  maybeFetchColors: function() {
    return f
  },
  default: function() {
    return p
  },
  useAvatarColors: function() {
    return _
  }
}), l("222007");
var t = l("884691"),
  n = l("656280"),
  r = l.n(n),
  u = l("308503"),
  o = l("446674"),
  d = l("206230"),
  s = l("284679"),
  a = l("103603");
let c = (0, u.default)(() => ({
  palette: {},
  fetching: {}
}));
async function f(e) {
  null == c.getState().palette[e] && await m(e)
}
async function m(e) {
  if (!c.getState().fetching[e]) {
    c.setState(i => ({
      fetching: {
        ...i.fetching,
        [e]: !0
      }
    }));
    try {
      let i = await (0, a.getPaletteForAvatar)(e),
        l = (0, s.getComplimentaryPaletteForColor)(i[0]);
      c.setState(t => ({
        fetching: {
          ...t.fetching,
          [e]: !1
        },
        palette: {
          ...t.palette,
          [e]: [...i.slice(0, 2), ...l]
        }
      }))
    } catch (i) {
      c.setState(i => ({
        fetching: {
          ...i.fetching,
          [e]: !1
        }
      }))
    }
  }
}

function p(e, i) {
  let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    [t] = _(e, i, l);
  return t
}

function _(e, i) {
  let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    n = c(i => null == e ? void 0 : i.palette[e]),
    u = (0, o.useStateFromStores)([d.default], () => l && d.default.desaturateUserColors ? d.default.saturation : 1);
  t.useEffect(() => {
    null != e && null == n && m(e)
  }, [e, n]);
  let s = t.useMemo(() => null == n ? void 0 : n.map(e => {
    let [i, l, t] = e, {
      h: n,
      s: o,
      l: d
    } = r({
      r: i,
      g: l,
      b: t
    }).toHsl();
    return r({
      h: n,
      s: o * u,
      l: d
    }).toHexString()
  }), [n, u]);
  return null != s ? s : [i, i]
}