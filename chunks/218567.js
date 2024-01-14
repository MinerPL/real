"use strict";
s.r(t), s.d(t, {
  useCreatorMonetizationSettingsDisabled: function() {
    return r
  },
  CreatorMonetizationSettingsDisabledContextProvider: function() {
    return o
  }
}), s("70102");
var a = s("37983"),
  n = s("884691"),
  l = s("465869");
let i = n.createContext(void 0);

function r() {
  let e = n.useContext(i);
  if (null == e) throw Error("useCreatorMonetizationSettingsDisabled must be used within a CreatorMonetizationSettingsDisabledContext");
  return e
}

function o(e) {
  let {
    guildId: t,
    children: s
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: n
  } = (0, l.useShouldRestrictUpdatingCreatorMonetizationSettings)(t);
  return (0, a.jsx)(i.Provider, {
    value: n,
    children: s
  })
}