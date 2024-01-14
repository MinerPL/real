"use strict";
n.r(t), n.d(t, {
  useShowApplicationInGDM: function() {
    return r
  }
});
var i = n("65597"),
  a = n("42203"),
  l = n("337026");

function r(e) {
  let t = (0, i.default)([a.default], () => a.default.getChannel(e)),
    {
      enabled: n
    } = l.default.useExperiment({
      location: "baec9c_1"
    });
  return n && function(e) {
    return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
  }(t)
}