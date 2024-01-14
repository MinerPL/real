"use strict";
t.r(n), t.d(n, {
  default: function() {
    return f
  }
});
var l = t("37983"),
  a = t("884691"),
  u = t("627445"),
  o = t.n(u),
  s = t("77078"),
  c = t("599110"),
  d = t("773336"),
  r = t("49111"),
  i = t("782340");

function f(e) {
  let n = a.useCallback(() => {
    o(null != e, "text cannot be null"), c.default.track(r.AnalyticEvents.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
  }, [e]);
  return d.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, l.jsx)(s.MenuItem, {
    id: "search-google",
    label: i.default.Messages.SEARCH_WITH_GOOGLE,
    action: n
  }, "search-google")] : null
}