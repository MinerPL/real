"use strict";
E.r(_), E.d(_, {
  default: function() {
    return a
  }
});
var t = E("77078"),
  o = E("229353"),
  n = E("131010"),
  r = E("583374"),
  i = E("782340"),
  a = new n.default({
    onSwitchSuccess(e) {
      setTimeout(() => {
        (0, t.showToast)((0, t.createToast)(i.default.Messages.SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS.format({
          username: e.username
        }), t.ToastType.SUCCESS))
      }, 100)
    },
    onSwitchError() {
      (0, t.showToast)((0, t.createToast)(o.SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR, t.ToastType.FAILURE))
    },
    onTokenSet() {
      (0, t.closeModal)(r.SWITCH_ACCOUNTS_MODAL_KEY)
    }
  })