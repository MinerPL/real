"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("742270"),
  s = n("815157"),
  i = n("391679"),
  l = n("523086"),
  r = n("599110"),
  o = n("65300"),
  u = n("883069"),
  d = n("49111");
let c = "template";
var f = {
  ...u.default,
  openNativeAppModal(e) {
    l.default.openNativeAppModal(e, d.RPCCommands.GUILD_TEMPLATE_BROWSER)
  },
  openMobileApp(e, t) {
    if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
    let n = null != e ? (0, a.getGuildTemplateDynamicLinkTemplate)(e) : (0, a.getDefaultDynamicLinkTemplate)(),
      l = (0, s.generateAttemptId)(),
      u = (0, s.default)(n, {
        utmSource: c,
        fingerprint: t,
        attemptId: l
      });
    r.default.track(d.AnalyticEvents.DEEP_LINK_CLICKED, {
      fingerprint: (0, i.maybeExtractId)(t),
      attempt_id: l,
      source: c,
      guild_template_code: e
    }), o.default.launch(u, () => {})
  }
}