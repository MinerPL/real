"use strict";
n.r(t), n.d(t, {
  useAutomodAvatar: function() {
    return m
  },
  AutomodAvatar: function() {
    return E
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("206230"),
  o = n("523096"),
  u = n("50885"),
  d = n("782340"),
  c = n("180094");
let f = u.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function m() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    [t, n] = s.useState(!1),
    a = (0, l.useStateFromStores)([r.default], () => r.default.useReducedMotion),
    i = s.useMemo(() => {
      let n = t || !a && !e;
      return (0, o.getAutomodAvatarURL)(n)
    }, [t, a, e]),
    u = s.useCallback(() => n(!0), []),
    d = s.useCallback(() => n(!1), []);
  return {
    avatarSrc: i,
    eventHandlers: {
      onMouseEnter: u,
      onMouseLeave: d
    }
  }
}

function E(e) {
  let {
    src: t
  } = e;
  return (0, a.jsx)("div", {
    className: c.avatarContainer,
    children: (0, a.jsx)(f, {
      src: t,
      size: i.AvatarSizes.SIZE_40,
      "aria-label": d.default.Messages.GUILD_AUTOMOD_USERNAME
    })
  })
}