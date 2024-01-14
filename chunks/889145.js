"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("77078"),
  l = n("685829"),
  r = n("937692"),
  o = n("782340"),
  u = n("613230");

function d(e) {
  let {
    guildId: t,
    channelId: n
  } = e, d = s.useCallback(() => {
    null != t && null != n && ((0, l.startOnboarding)(t), (0, r.default)({
      guildId: t,
      returnChannelId: n
    }))
  }, [t, n]);
  return (0, a.jsx)("div", {
    className: u.container,
    children: (0, a.jsxs)("div", {
      className: u.explainerContainer,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: o.default.Messages.ONBOARDING_ERROR_PAGE_TEXT
      }), (0, a.jsx)(i.Button, {
        onClick: d,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/medium",
          children: o.default.Messages.START_ONBOARDING
        })
      })]
    })
  })
}