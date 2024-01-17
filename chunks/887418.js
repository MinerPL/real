"use strict";
E.r(_), E.d(_, {
  default: function() {
    return I
  }
}), E("222007");
var t = E("77078"),
  o = E("689988"),
  n = E("42203"),
  r = E("377253");

function i(e) {
  let {
    channelId: _,
    messageId: o
  } = e, i = n.default.getChannel(_), a = r.default.getMessage(_, o);
  null != i && null != a && (0, t.openModalLazy)(async () => {
    let {
      default: e
    } = await E.el("942055").then(E.bind(E, "942055"));
    return _ => e({
      channel: i,
      message: a,
      ..._
    })
  })
}
class a extends o.default {
  constructor(...e) {
    super(...e), this.actions = {
      MESSAGE_FAILED_CLYDE_CONSENT: i
    }
  }
}
var I = new a