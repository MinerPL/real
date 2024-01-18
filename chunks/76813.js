"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("778588"),
  o = n("522049"),
  u = n("664336"),
  d = n("773336"),
  c = n("56947"),
  f = n("386045"),
  h = n("389535"),
  E = n("80028"),
  m = n("782340");

function p(e) {
  let {
    canShowReminder: t = !1,
    className: p
  } = e, {
    showClipsHeaderEntrypoint: S,
    ignorePlatformRestriction: g
  } = c.ClipsExperiment.useExperiment({
    location: "ClipsButton"
  }, {
    autoTrackExposure: !1
  }), {
    hasClips: N,
    hasNewClips: _,
    lastClipsSession: T,
    remindersEnabled: I
  } = (0, s.useStateFromStoresObject)([f.default], () => ({
    hasClips: f.default.hasClips(),
    hasNewClips: f.default.getNewClipIds().length > 0,
    lastClipsSession: f.default.getLastClipsSession(),
    remindersEnabled: f.default.getSettings().remindersEnabled
  })), C = null != T && T.newClipIds.length > 0, [A, M] = l.useState(null), v = (0, s.useStateFromStores)([r.default], () => r.default.hasLayers());

  function x() {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("167573").then(n.bind(n, "167573"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    }, {
      modalKey: E.CLIPS_GALLERY_MODAL_KEY
    })
  }
  return S && ((0, d.isWindows)() || g) && N ? (0, a.jsxs)(a.Fragment, {
    children: [null != A && t && I && C && !(0, i.hasAnyModalOpen)() && !v && (0, a.jsx)(h.default, {
      clipIconRef: A,
      lastClipsSession: T,
      onOpenClipsGallery: x
    }), (0, a.jsx)("div", {
      ref: M,
      children: (0, a.jsx)(u.Icon, {
        className: p,
        icon: o.default,
        showBadge: _,
        tooltip: m.default.Messages.CLIPS_GALLERY_TOOLTIP,
        onClick: x
      })
    })]
  }) : null
}