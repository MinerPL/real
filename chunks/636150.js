"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("37983");
n("884691");
var l = n("627445"),
  s = n.n(l),
  i = n("446674"),
  r = n("18346"),
  o = n("261552"),
  u = n("103979"),
  d = n("780166"),
  c = n("245463"),
  f = n("42887"),
  h = n("697218"),
  p = n("991170"),
  m = n("456127"),
  E = n("888814"),
  C = n("943917"),
  g = n("380116"),
  S = n("149882"),
  _ = n("568009"),
  I = n("49111"),
  T = n("621262");

function v(e) {
  let {
    channel: t,
    hasActiveStream: n,
    themeable: l = !1
  } = e, v = (0, i.useStateFromStores)([h.default], () => {
    let e = h.default.getCurrentUser();
    return s(null != e, "CenterControlTray: currentUser cannot be undefined"), e
  }), x = (0, o.default)(), {
    isSharedCanvasEnabled: N
  } = d.default.useExperiment({
    guildId: null == t ? void 0 : t.guild_id,
    location: "b7309a_1"
  }), {
    enableViewerClipping: A
  } = u.default.useExperiment({
    location: "VoiceEffectsActionBar"
  }, {
    autoTrackExposure: !1
  }), M = (0, r.default)(f.default);
  if (null == t || null != x) return null;
  let R = (0, c.default)(t),
    j = p.default.can({
      permission: I.Permissions.ADD_REACTIONS,
      user: v,
      context: t
    });
  return (0, a.jsxs)("div", {
    className: T.voiceEffectsActionBar,
    children: [R && (0, a.jsx)(S.default, {
      channel: t,
      themeable: l
    }), j && (0, a.jsx)(g.default, {
      channel: t
    }), A && M && (0, a.jsx)(m.default, {
      channel: t
    }), N && n && (0, a.jsx)(E.default, {}), N && n && (0, a.jsx)(C.default, {
      channel: t
    }), N && n && (0, a.jsx)(_.default, {})]
  })
}