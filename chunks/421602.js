"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var l = n("77078"),
  u = n("450911"),
  o = n("54239"),
  a = n("271938"),
  r = n("49111"),
  d = n("782340");

function s(e, t) {
  let n = a.default.getId(),
    s = t === r.AppContext.POPOUT;
  return n === e || s ? null : (0, i.jsx)(l.MenuItem, {
    id: "message-user",
    label: d.default.Messages.USER_POPOUT_MESSAGE,
    action: () => {
      u.default.openPrivateChannel(e), (0, o.popLayer)()
    }
  })
}