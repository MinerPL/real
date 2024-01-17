"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  s = n("990766"),
  l = n("773356"),
  i = n("349171"),
  u = n("292687"),
  o = n("305961"),
  d = n("42887"),
  c = n("697218"),
  f = n("773336"),
  h = n("49111"),
  p = n("686298");

function E(e, t, E) {
  let C = u.default.getWindowOpen(h.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? h.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
  if ((0, i.default)(C), f.isPlatformEmbedded)(0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("451863").then(n.bind(n, "451863"));
    return n => (0, a.jsx)(t, {
      ...n,
      guildId: e,
      analyticsLocation: E
    })
  });
  else {
    var m;
    let n = (0, l.default)(p.ApplicationStreamPresets.PRESET_CUSTOM, p.ApplicationStreamResolutions.RESOLUTION_1080, p.ApplicationStreamFPS.FPS_30, c.default.getCurrentUser(), null === (m = o.default.getGuild(e)) || void 0 === m ? void 0 : m.premiumTier) ? {
      width: 1920,
      height: 1080
    } : {
      width: 1280,
      height: 720
    };
    d.default.getMediaEngine().getDesktopSource(n, !0).then(n => {
      (0, s.startStream)(e, t, {
        pid: null,
        sourceId: n,
        sourceName: null
      })
    })
  }
}