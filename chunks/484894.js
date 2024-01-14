"use strict";
s.r(t), s.d(t, {
  OverridePremiumTypeDropDown: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("811199"),
  r = s("285471"),
  o = s("400205"),
  d = s("697218"),
  u = s("646718");
let c = e => {
  let {
    isDevTools: t = !1
  } = e, s = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()), c = (0, n.useStateFromStores)([o.default], () => o.default.getPremiumTypeOverride());
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.FormSection, {
      title: "Override Client-Side Premium Type",
      tag: l.FormTitleTags.H3,
      children: (0, a.jsx)(l.SingleSelect, {
        options: u.PREMIUM_TYPE_OVERRIDE_OPTIONS,
        value: c,
        onChange: e => {
          (0, r.updateClientPremiumTypeOverride)(e, s)
        },
        popoutLayerContext: t ? i.devToolsLayerContext : void 0
      })
    }), (0, a.jsx)(l.Button, {
      look: l.Button.Looks.LINK,
      style: {
        padding: "0"
      },
      onClick: () => {
        (0, r.updateClientPremiumTypeOverride)(u.UNSELECTED_PREMIUM_TYPE_OVERRIDE, s)
      },
      children: "Reset premium type override"
    })]
  })
}