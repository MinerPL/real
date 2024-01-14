"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("685665"),
  u = s("606292"),
  c = s("790618"),
  S = s("181114"),
  E = s("906932"),
  f = s("570697"),
  T = s("782340"),
  m = s("808084");

function _(e) {
  let {
    user: t,
    className: s,
    forcedDivider: l = !1,
    withTutorial: _ = !1,
    isTryItOutFlow: g = !1
  } = e, {
    analyticsLocations: h
  } = (0, d.default)(), {
    pendingAvatarDecoration: I,
    errors: N
  } = (0, r.useStateFromStoresObject)([c.default], () => ({
    pendingAvatarDecoration: c.default.getPendingAvatarDecoration(),
    errors: c.default.getErrors().avatarDecoration
  })), p = n.useCallback(() => (0, u.openAvatarDecorationModal)({
    analyticsLocations: h,
    isTryItOutFlow: g
  }), [h, g]), C = g || void 0 !== I ? null != I : null != t.avatarDecoration, A = _ ? S.default : o.Button;
  return (0, a.jsx)(f.default, {
    className: s,
    forcedDivider: l,
    hasBackground: !0,
    title: T.default.Messages.USER_SETTINGS_AVATAR_DECORATION,
    errors: N,
    children: (0, a.jsxs)("div", {
      className: m.buttonsContainer,
      children: [(0, a.jsx)(A, {
        size: o.Button.Sizes.SMALL,
        onClick: p,
        className: i({
          [m.buttonHighlighted]: _
        }),
        children: T.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), C && (0, a.jsx)(o.Button, {
        className: m.removeButton,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        size: o.Button.Sizes.SMALL,
        onClick: function() {
          (0, E.setNewPendingAvatarDecoration)(null, t.avatarDecoration)
        },
        children: T.default.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
      })]
    })
  })
}