"use strict";
n.r(t), n.d(t, {
  UserSafetyEducationReportingCoachmark: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var s = n("65597"),
  i = n("206230"),
  l = n("5667"),
  r = n("58608"),
  o = n("374089"),
  u = n("994428"),
  d = n("782340"),
  c = n("564998");
let E = e => {
  let {
    markAsDismissed: t
  } = e, n = (0, s.default)([i.default], () => i.default.useReducedMotion), E = (0, o.useCanSeeSafetyEducationReportingCoachmark)();
  return E ? (0, a.jsx)(l.default, {
    asset: (0, a.jsx)(r.default, {
      src: "https://cdn.discordapp.com/attachments/1063579271815245944/1095089224421740695/CEC_Reporting_Animation_v03_EN_1x1_Music_1.mp4",
      loop: !0,
      autoPlay: !n,
      className: c.video,
      width: "100%"
    }),
    header: d.default.Messages.SAFETY_CONSUMER_EDUCATION_REPORTING_HEADER,
    content: d.default.Messages.SAFETY_CONSUMER_EDUCATION_REPORTING_CONTENT,
    buttonCTA: d.default.Messages.GOT_IT,
    onClick: e => {
      e.stopPropagation(), t(u.ContentDismissActionType.UNKNOWN)
    },
    markAsDismissed: t,
    caretPosition: l.CaretPosition.BOTTOM_CENTER,
    headerClassName: c.header
  }) : null
}