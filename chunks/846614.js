"use strict";
n.r(t), n.d(t, {
  useNewUserDismissibleContent: function() {
    return c
  },
  disableNewUserDismissibleContent: function() {
    return d
  }
});
var i = n("249654"),
  r = n("65597"),
  s = n("151426"),
  a = n("271938"),
  o = n("718517");
let l = {
    [s.DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0,
    [s.DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
    [s.DismissibleContent.SEEN_LAUNCH_WELCOME]: 0,
    [s.DismissibleContent.SEEN_OLD_DESIGN]: 0
  },
  u = o.default.Millis.DAY;

function c(e) {
  let t = (0, r.default)([a.default], () => a.default.getId()),
    n = null != t ? i.default.age(t) : 0;
  return e.filter(e => {
    var t;
    let i = null !== (t = l[e]) && void 0 !== t ? t : u;
    return n > i
  })
}

function d(e) {
  var t;
  let n = null != a.default.getId() ? i.default.age(a.default.getId()) : 0,
    r = null !== (t = l[e]) && void 0 !== t ? t : u;
  return n < r
}