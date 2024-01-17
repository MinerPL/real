"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
});
var n = l("37983");
l("884691");
var u = l("77078"),
  i = l("450911"),
  r = l("54239"),
  o = l("271938"),
  a = l("49111"),
  d = l("782340");

function s(e, t) {
  let l = o.default.getId(),
    s = t === a.AppContext.POPOUT;
  return l === e || s ? null : (0, n.jsx)(u.MenuItem, {
    id: "message-user",
    label: d.default.Messages.USER_POPOUT_MESSAGE,
    action: () => {
      i.default.openPrivateChannel(e), (0, r.popLayer)()
    }
  })
}