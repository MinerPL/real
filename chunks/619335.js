"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
});
var n = l("274870"),
  a = l("116320"),
  s = l("617559"),
  r = l("213523"),
  i = l("593195"),
  u = l("361777"),
  o = l("497757"),
  d = l("774223"),
  c = l("991497"),
  f = l("393621"),
  m = l("905999"),
  S = l("660074"),
  C = l("990745"),
  E = l("190986"),
  h = l("721618"),
  _ = l("733160"),
  g = l("990864"),
  p = l("274652"),
  N = l("922744"),
  I = l("155207"),
  x = l("745183"),
  v = l("368121"),
  A = l("944633"),
  R = l("228427"),
  T = l("959097"),
  L = l("656038"),
  M = l("49111");

function O(e, t) {
  switch (e.type) {
    case M.ChannelTypes.DM:
      return a.default;
    case M.ChannelTypes.GROUP_DM:
      let l = (0, n.getIsBroadcastingGDM)(e.id);
      return l ? d.default : I.default;
    case M.ChannelTypes.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return p.default;
      if ((0, L.default)(e)) return g.default;
      else return _.default;
    case M.ChannelTypes.GUILD_TEXT:
      if (e.id === (null == t ? void 0 : t.rulesChannelId)) return r.default;
      if (e.isNSFW()) return o.default;
      else if ((0, L.default)(e)) return u.default;
      else return i.default;
    case M.ChannelTypes.GUILD_FORUM:
      let O = e.isMediaChannel();
      if (e.isNSFW()) return O ? h.default : m.default;
      if ((0, L.default)(e)) return O ? E.default : f.default;
      else return O ? C.default : c.default;
    case M.ChannelTypes.GUILD_MEDIA:
      if (e.isNSFW()) return h.default;
      if ((0, L.default)(e)) return E.default;
      else return C.default;
    case M.ChannelTypes.GUILD_STAGE_VOICE:
      return R.default;
    case M.ChannelTypes.GUILD_VOICE:
      if ((0, L.default)(e)) return A.default;
      return v.default;
    case M.ChannelTypes.ANNOUNCEMENT_THREAD:
    case M.ChannelTypes.PUBLIC_THREAD:
      if (e.isNSFW()) return N.default;
      if (e.isForumPost()) return S.default;
      else return T.default;
    case M.ChannelTypes.PRIVATE_THREAD:
      if (e.isNSFW()) return N.default;
      return x.default;
    case M.ChannelTypes.GUILD_DIRECTORY:
      return s.default;
    default:
      return null
  }
}