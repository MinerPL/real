"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("37983");
n("884691");
var r = n("446674"),
  l = n("77078"),
  u = n("255397"),
  o = n("987317"),
  s = n("679653"),
  a = n("393414"),
  d = n("233069"),
  c = n("42203"),
  f = n("305961"),
  S = n("27618"),
  E = n("697218"),
  h = n("666897"),
  g = n("404008"),
  p = n("794818"),
  _ = n("49111");

function C(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: C,
    className: m,
    openChatWithoutConnecting: I
  } = e, T = (0, r.useStateFromStores)([E.default, S.default], () => null == t ? "" : (0, s.computeChannelName)(t, E.default, S.default), [t]);
  return (0, i.jsx)(l.Tooltip, {
    text: T,
    position: "top",
    children: e => {
      let {
        onMouseEnter: r,
        onMouseLeave: s
      } = e;
      return (0, i.jsx)(h.default, {
        role: "link",
        className: m,
        onClick: e => {
          e.stopPropagation(), null != n ? n() : (null != C && C(), (0, l.closeAllModals)(), ! function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e || null == t) return;
            let i = f.default.getGuild(e);
            if ((null == i ? void 0 : i.joinedAt) == null) {
              p.startLurking(e, {}, {
                channelId: t
              });
              return
            }
            let r = c.default.getChannel(t);
            if (null != r && (0, d.isGuildVocalChannelType)(r.type)) {
              if (n) {
                u.default.updateChatOpen(r.id, !0), (0, a.transitionTo)(_.Routes.CHANNEL(e, t));
                return
              }
              o.default.selectVoiceChannel(r.id);
              return
            }(0, a.transitionTo)(_.Routes.CHANNEL(e, t))
          }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, I))
        },
        onMouseEnter: r,
        onMouseLeave: s,
        iconType: (0, g.getMentionIconType)(t),
        children: T
      })
    }
  })
}