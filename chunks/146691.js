"use strict";
l.r(t), l.d(t, {
  useInstallApplication: function() {
    return n
  }
});
var i = l("884691"),
  a = l("613676");

function n(e, t) {
  let l = i.useMemo(() => null != e && (0, a.canInstallApplication)(e.id, e.custom_install_url, e.install_params), [e]),
    n = i.useCallback(l => {
      null != e && (0, a.installApplication)({
        applicationId: e.id,
        customInstallUrl: e.custom_install_url,
        installParams: e.install_params,
        guildId: null != t ? t : void 0,
        source: l
      })
    }, [e, t]);
  return {
    canInstall: l,
    install: n
  }
}