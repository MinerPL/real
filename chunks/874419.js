"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
});
var n = l("37983"),
  a = l("884691"),
  s = l("446674"),
  i = l("151426"),
  r = l("79112"),
  o = l("685665"),
  u = l("10641"),
  d = l("5667"),
  c = l("783142"),
  f = l("713135"),
  m = l("49111"),
  p = l("994428"),
  E = l("397336"),
  T = l("782340"),
  _ = l("393036");
let S = i.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP,
  h = e => {
    (0, u.markDismissibleContentAsDismissed)(S, {
      dismissAction: e,
      forceTrack: !0
    })
  };
var I = e => {
  let {
    position: t,
    onClose: l
  } = e, {
    analyticsLocations: i
  } = (0, o.default)(), u = (0, s.useStateFromStores)([f.default], () => f.default.getIsAccessibilityTooltipViewed());
  return a.useEffect(() => u ? () => h(p.ContentDismissActionType.AUTO) : () => (0, c.handleProfileAccessibilityTooltipViewed)(), [u]), (0, n.jsx)(d.default, {
    markAsDismissed: h,
    header: T.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_TITLE,
    headerClassName: _.header,
    content: (0, n.jsx)("div", {
      className: _.content,
      children: T.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_DESCRIPTION
    }),
    buttonCTA: T.default.Messages.TAKE_ME_THERE,
    onClick: () => {
      null == l || l(), r.default.open(m.UserSettingsSections.ACCESSIBILITY, null, {
        scrollPosition: E.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME,
        analyticsLocations: i
      })
    },
    secondaryButtonCTA: T.default.Messages.DISMISS,
    onSecondaryClick: l,
    buttonLayout: d.ButtonLayout.STACKED,
    caretPosition: "left" === t ? d.CaretPosition.RIGHT_CENTER : d.CaretPosition.LEFT_CENTER
  })
}