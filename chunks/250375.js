"use strict";
n.r(t), n.d(t, {
  useAutomodAvatar: function() {
    return E
  },
  AutomodAvatar: function() {
    return _
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("77078"),
  r = n("206230"),
  o = n("523096"),
  u = n("50885"),
  d = n("782340"),
  c = n("180094");
let f = u.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function E() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    [t, n] = l.useState(!1),
    s = (0, a.useStateFromStores)([r.default], () => r.default.useReducedMotion),
    i = l.useMemo(() => {
      let n = t || !s && !e;
      return (0, o.getAutomodAvatarURL)(n)
    }, [t, s, e]),
    u = l.useCallback(() => n(!0), []),
    d = l.useCallback(() => n(!1), []);
  return {
    avatarSrc: i,
    eventHandlers: {
      onMouseEnter: u,
      onMouseLeave: d
    }
  }
}

function _(e) {
  let {
    src: t
  } = e;
  return (0, s.jsx)("div", {
    className: c.avatarContainer,
    children: (0, s.jsx)(f, {
      src: t,
      size: i.AvatarSizes.SIZE_40,
      "aria-label": d.default.Messages.GUILD_AUTOMOD_USERNAME
    })
  })
}