"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("570697"),
  i = s("782340");

function r(e) {
  let {
    sectionTitle: t,
    errors: s,
    onPronounsChange: r,
    pendingPronouns: o,
    placeholder: d,
    currentPronouns: u,
    disabled: c = !1
  } = e;
  return (0, a.jsx)(l.default, {
    title: t,
    errors: s,
    disabled: c,
    children: (0, a.jsx)(n.TextInput, {
      placeholder: null != d ? d : i.default.Messages.PROFILE_CUSTOMIZATION_PRONOUNS_PLACEHOLDER,
      maxLength: 40,
      value: null != o ? o : u,
      onChange: function(e) {
        r(e === u ? void 0 : e)
      },
      disabled: c
    })
  })
}