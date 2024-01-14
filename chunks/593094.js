"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("592407"),
  i = n("5667"),
  l = n("49111"),
  r = n("782340"),
  o = n("465194"),
  u = n("892839");

function d(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e;
  return (0, a.jsx)(i.default, {
    header: r.default.Messages.DISCOVERY_LANDING_PAGE_UPSELL_TITLE,
    content: r.default.Messages.DISCOVERY_LANDING_PAGE_UPSELL_DESCRIPTION,
    asset: (0, a.jsx)("div", {
      className: o.image,
      children: (0, a.jsx)("img", {
        alt: "",
        src: u
      })
    }),
    buttonCTA: r.default.Messages.DISCOVERY_LANDING_PAGE_UPSELL_BUTTON_ACCEPT,
    onClick: e => {
      var n;
      n = t, s.default.open(n.id, l.GuildSettingsSections.DISCOVERY_LANDING_PAGE)
    },
    secondaryButtonCTA: r.default.Messages.DISCOVERY_LANDING_PAGE_UPSELL_BUTTON_DISMISS,
    onSecondaryClick: () => {},
    markAsDismissed: n
  })
}