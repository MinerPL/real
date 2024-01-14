"use strict";
var a, n;
s.r(t), s.d(t, {
  PhoneOrEmailSelectorForceMode: function() {
    return a
  },
  shouldShowCountryCodeSelector: function() {
    return l
  }
}), (n = a || (a = {})).PHONE = "phone", n.EMAIL = "email";
let r = /^[-() \d]+$/,
  o = e => e.startsWith("+");

function l(e, t) {
  return "phone" === e ? !o(t) : "email" !== e && !(t.length < 3) && r.test(t)
}