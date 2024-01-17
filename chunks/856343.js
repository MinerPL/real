"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("446674"),
  l = n("77078"),
  i = n("629109"),
  u = n("997289"),
  o = n("773356"),
  d = n("268491"),
  c = n("305961"),
  f = n("42887"),
  h = n("697218"),
  p = n("49111"),
  E = n("686298"),
  C = n("353927"),
  m = n("782340");

function S(e, t) {
  let {
    preset: S,
    resolution: g,
    fps: _
  } = (0, s.useStateFromStoresObject)([d.default], () => d.default.getState()), T = (0, s.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), v = (0, s.useStateFromStores)([h.default], () => h.default.getCurrentUser()), A = (0, s.useStateFromStores)([c.default], () => {
    var t;
    return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
  }), {
    location: I
  } = (0, u.useAnalyticsContext)(), M = r.useCallback((e, r, s, u) => {
    if (e) {
      if (null != T) {
        let e = {
          qualityOptions: {
            preset: E.ApplicationStreamPresets.PRESET_CUSTOM,
            resolution: r,
            frameRate: s
          },
          context: C.MediaEngineContextTypes.STREAM
        };
        null != T.desktopSource ? e.desktopSettings = {
          sourceId: T.desktopSource.id,
          sound: !0
        } : null != T.cameraSource && (e.cameraSettings = {
          videoDeviceGuid: T.cameraSource.videoDeviceGuid,
          audioDeviceGuid: T.cameraSource.audioDeviceGuid
        }), i.default.setGoLiveSource(e)
      }
    } else {
      var o, d;
      o = t, d = {
        ...I,
        object: p.AnalyticsObjects.RADIO_ITEM,
        objectType: u
      }, (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("754534").then(n.bind(n, "754534"));
        return t => (0, a.jsx)(e, {
          ...t,
          analyticsSource: d
        })
      }, {
        contextKey: o === p.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT
      })
    }
  }, [t, I, T]);
  if (null == e) return null;
  let x = S === E.ApplicationStreamPresets.PRESET_DOCUMENTS ? E.ApplicationStreamFPS.FPS_30 : _,
    N = E.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, o.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, g, t, v, A);
      return (0, a.jsx)(l.MenuRadioItem, {
        group: "stream-settings-fps",
        id: "stream-settings-fps-".concat(t),
        label: n,
        checked: t === _,
        action: () => M(r, g, t, p.AnalyticsObjectTypes.RESOLUTION)
      }, "stream-settings-fps-".concat(t))
    }),
    R = E.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, o.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, t, x, v, A);
      return (0, a.jsx)(l.MenuRadioItem, {
        group: "stream-settings-resolution",
        id: "stream-settings-resolution-".concat(t),
        label: n,
        checked: t === g,
        action: () => M(r, t, x, p.AnalyticsObjectTypes.RESOLUTION)
      }, "stream-settings-resolution-".concat(t))
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.MenuGroup, {
      label: m.default.Messages.SCREENSHARE_FRAME_RATE,
      children: N
    }), (0, a.jsx)(l.MenuGroup, {
      label: m.default.Messages.STREAM_RESOLUTION,
      children: R
    })]
  })
}