"use strict";
E.r(_), E.d(_, {
  GUEST_INVITE_KEY: function() {
    return s
  },
  default: function() {
    return S
  }
}), E("222007");
var t = E("444095"),
  o = E("913144"),
  n = E("970728"),
  r = E("689988"),
  i = E("271938"),
  a = E("773336"),
  I = E("49111");
let s = "guestInviteToAccept";
class T extends r.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
    }, this.handleConnectionOpen = async () => {
      if ((0, a.isWeb)()) {
        let e = t.default.get(s);
        if (null != e && "string" == typeof e && i.default.isAuthenticated()) {
          let {
            invite: _
          } = await n.default.resolveInvite(e, "Desktop Modal");
          null != _ && (o.default.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: _,
            code: e,
            context: I.AppContext.APP
          }), t.default.remove(s))
        }
      }
    }
  }
}
var S = new T