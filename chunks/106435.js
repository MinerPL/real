"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("884691"),
  r = n("77078"),
  l = n("606292"),
  s = n("688318"),
  a = n("19287");

function o(e) {
  let {
    user: t,
    guildId: n,
    size: o,
    showPending: u = !1,
    showTryItOut: d = !1,
    animateOnHover: c = !1,
    avatarDecorationOverride: m,
    avatarOverride: f
  } = e, {
    avatarSrc: _,
    isAvatarAnimating: E,
    eventHandlers: T
  } = (0, a.useAnimatedAvatarSrc)({
    user: t,
    guildId: n,
    size: (0, r.getAvatarSize)(o),
    showPending: u,
    animateOnHover: c,
    avatarOverride: f
  }), {
    avatarPlaceholderSrc: I,
    avatarDecorationSrc: P,
    eventHandlers: p
  } = (0, s.default)({
    user: t,
    size: (0, l.getDecorationSizeForAvatarSize)(o),
    showPending: u,
    animateOnHover: c,
    avatarDecorationOverride: m,
    showTryItOut: d
  }), S = i.useCallback(() => {
    T.onMouseEnter(), p.onMouseEnter()
  }, [T, p]), R = i.useCallback(() => {
    T.onMouseLeave(), p.onMouseLeave()
  }, [T, p]);
  return {
    avatarPlaceholderSrc: I,
    avatarDecorationSrc: P,
    avatarSrc: _,
    isAnimating: E,
    eventHandlers: {
      onMouseEnter: S,
      onMouseLeave: R
    }
  }
}