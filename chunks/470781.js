"use strict";
s.r(t), s.d(t, {
  XboxTwoWayLinkUpsell: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("151426"),
  l = s("926994"),
  i = s("701909"),
  r = s("886213"),
  o = s("49111"),
  d = s("782340"),
  u = s("682407");
let c = () => {
  let e = i.default.getArticleURL(o.HelpdeskArticles.XBOX_CONNECTION);
  return (0, a.jsx)(r.OneWayToTwoWayLinkUpsell, {
    title: d.default.Messages.XBOX_TWO_WAY_UPSELL_TITLE,
    body: d.default.Messages.XBOX_TWO_WAY_UPSELL_BODY.format({
      help_article: e
    }),
    img: (0, a.jsx)("img", {
      src: u,
      width: "auto",
      height: "45",
      alt: ""
    }),
    newIndicatorDismissibleContent: n.DismissibleContent.XBOX_ONE_WAY_RECONNECT,
    onClick: () => (0, l.default)(o.PlatformTypes.XBOX, "Xbox two way upsell")
  })
}