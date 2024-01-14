"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("586391"),
  i = s("843455"),
  r = {
    openNewUserAgeGateModal: e => {
      (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("377531").then(s.bind(s, "377531"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }, {
        modalKey: l.NEW_USER_AGE_GATE_MODAL_KEY,
        onCloseRequest: i.NOOP,
        onCloseCallback: e
      })
    },
    openClaimAccountModal: function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
      (0, n.openModalLazy)(async () => {
        let {
          default: t
        } = await s.el("633156").then(s.bind(s, "633156"));
        return s => (0, a.jsx)(t, {
          claimRequired: e,
          ...s
        })
      }, {
        onCloseRequest: e ? i.NOOP : null,
        onCloseCallback: t
      })
    }
  }