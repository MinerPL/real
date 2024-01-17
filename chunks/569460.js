"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var r = n("77078"),
  i = n("570697"),
  s = n("49111"),
  a = n("782340");

function o(e) {
  var t, n;
  return (0, l.jsx)(i.default, {
    errors: e.errors,
    disabled: e.disabled,
    title: a.default.Messages.DISPLAY_NAME,
    children: (0, l.jsx)("div", {
      children: (0, l.jsx)(r.TextInput, {
        placeholder: e.placeholder,
        maxLength: s.DISPLAY_NAME_MAX_LENGTH,
        onChange: e.onGlobalNameChange,
        value: null !== (n = null !== (t = e.pendingGlobalName) && void 0 !== t ? t : e.currentGlobalName) && void 0 !== n ? n : ""
      })
    })
  })
}