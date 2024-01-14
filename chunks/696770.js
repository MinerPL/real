"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("151426"),
  i = n("79112"),
  l = n("369964"),
  r = n("49111"),
  o = n("994428"),
  u = n("782340"),
  d = n("828081");

function c(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, a.jsx)(l.default, {
    header: u.default.Messages.SOUNDBOARD_VOLUME_TOOLTIP_HEADER,
    body: u.default.Messages.SOUNDBOARD_VOLUME_TOOLTIP_BODY,
    tryItText: u.default.Messages.TAKE_ME_THERE,
    dismissibleContent: s.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION,
    artClassName: d.art,
    onTryFeature: () => {
      i.default.open(r.UserSettingsSections.VOICE), t(o.ContentDismissActionType.UNKNOWN)
    },
    onClose: () => t(o.ContentDismissActionType.UNKNOWN),
    shouldUseHorizontalButtons: !0,
    inlineArt: !0
  })
}