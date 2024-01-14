"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("147314"),
  r = s("697218"),
  o = s("191814"),
  d = s("973449");

function u(e) {
  let {
    guild: t
  } = e, s = (0, n.useStateFromStores)([r.default], () => {
    let e = r.default.getCurrentUser();
    return null != e && (null == t ? void 0 : t.isOwner(e)) === !0
  }), u = () => {
    (0, i.showNewTerms)(t.id, {
      demonetized: !0
    })
  };
  return (0, a.jsxs)("div", {
    className: d.container,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: "Monetization Temporarily Disabled"
    }), (0, a.jsx)(o.default, {
      size: 24
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: "This server is overdue for accepting our new terms of service so we've had to temporarily suspend monetization. Don't worry, existing subscribers can still access their benefits and renew their subscription. However, new subscriptions cannot be made until the owner accepts our new terms of service."
    }), (0, a.jsx)(o.default, {
      size: 24
    }), (0, a.jsx)(l.Tooltip, {
      text: "Only the server owner can accept new terms",
      shouldShow: !s,
      children: e => (0, a.jsx)(l.Button, {
        disabled: !s,
        ...e,
        onClick: u,
        children: "Accept New Terms"
      })
    })]
  })
}