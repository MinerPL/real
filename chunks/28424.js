"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("450911"),
  i = n("377114"),
  r = n("949067"),
  o = n("389495"),
  u = n("782340");

function d(e) {
  let {
    channel: t,
    buttonSize: n = a.ButtonSizes.TINY,
    className: d,
    onReportClick: c,
    onReportSubmit: f,
    onMouseEnter: h,
    onMouseLeave: C
  } = e, {
    error: p,
    loaded: m
  } = (0, o.useMessageRequestPreview)(t), g = t.isDM() ? t.getRecipientId() : null, E = (0, r.useLongestChannelMessageBeforeReply)(t.id, g);
  if (null == E && (m || p)) return null;
  let S = () => {
    null == f || f(), l.default.closePrivateChannel(t.id)
  };
  return (0, s.jsx)(a.Button, {
    className: d,
    size: n,
    color: a.Button.Colors.RED,
    disabled: null == E,
    onClick: e => {
      e.stopPropagation(), null == c || c(), null != E && (0, i.showReportModalForFirstDM)(E, S)
    },
    onMouseEnter: h,
    onMouseLeave: C,
    children: u.default.Messages.REPORT
  })
}