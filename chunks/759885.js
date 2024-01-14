"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var r = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  l = n("255397"),
  o = n("987317"),
  s = n("679653"),
  a = n("393414"),
  d = n("233069"),
  c = n("42203"),
  f = n("305961"),
  h = n("27618"),
  _ = n("697218"),
  C = n("666897"),
  p = n("404008"),
  g = n("794818"),
  E = n("49111");

function S(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: S,
    className: T,
    openChatWithoutConnecting: I
  } = e, m = (0, i.useStateFromStores)([_.default, h.default], () => null == t ? "" : (0, s.computeChannelName)(t, _.default, h.default), [t]);
  return (0, r.jsx)(u.Tooltip, {
    text: m,
    position: "top",
    children: e => {
      let {
        onMouseEnter: i,
        onMouseLeave: s
      } = e;
      return (0, r.jsx)(C.default, {
        role: "link",
        className: T,
        onClick: e => {
          e.stopPropagation(), null != n ? n() : (null != S && S(), (0, u.closeAllModals)(), ! function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e || null == t) return;
            let r = f.default.getGuild(e);
            if ((null == r ? void 0 : r.joinedAt) == null) {
              g.startLurking(e, {}, {
                channelId: t
              });
              return
            }
            let i = c.default.getChannel(t);
            if (null != i && (0, d.isGuildVocalChannelType)(i.type)) {
              if (n) {
                l.default.updateChatOpen(i.id, !0), (0, a.transitionTo)(E.Routes.CHANNEL(e, t));
                return
              }
              o.default.selectVoiceChannel(i.id);
              return
            }(0, a.transitionTo)(E.Routes.CHANNEL(e, t))
          }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, I))
        },
        onMouseEnter: i,
        onMouseLeave: s,
        iconType: (0, p.getMentionIconType)(t),
        children: m
      })
    }
  })
}