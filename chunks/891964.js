"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("913144"),
  l = n("583374");

function r() {
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("685807").then(n.bind(n, "685807"));
    return t => (0, a.jsx)(e, {
      ...t
    })
  }, {
    onCloseCallback: () => {
      i.default.dispatch({
        type: "CLEAR_AUTHENTICATION_ERRORS"
      }), i.default.dispatch({
        type: "LOGIN_RESET",
        isMultiAccount: !0
      })
    },
    modalKey: l.SWITCH_ACCOUNTS_MODAL_KEY
  })
}