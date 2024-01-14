"use strict";
n.r(t), n.d(t, {
  useGetKeybindNotification: function() {
    return m
  },
  default: function() {
    return E
  }
}), n("222007");
var i = n("37983");
n("884691");
var a = n("151426"),
  l = n("77078"),
  s = n("539405"),
  o = n("910340"),
  r = n("235145"),
  d = n("415518"),
  u = n("849467"),
  c = n("999819"),
  f = n("6791"),
  h = n("994428"),
  p = n("782340"),
  g = n("672294");

function m() {
  let [e, t] = (0, r.useGetDismissibleContent)([a.DismissibleContent.OVERLAY_KEYBIND_NOTIFICATION]), {
    showKeybindIndicators: n
  } = c.default.useExperiment({
    location: "Overlay"
  }, {
    autoTrackExposure: !1
  });
  return {
    showKeybindIndicators: null != e && n,
    dismissKeybindNotification: t
  }
}

function E(e) {
  let {
    markAsDismissed: t
  } = e, {
    trackView: n,
    trackClick: a
  } = (0, o.makeAnalyticsTrackers)(f.OverlayNotificationType.KeybindIndicatorsNotification, {
    notif_type: f.OverlayNotificationType.KeybindIndicatorsNotification
  }), r = (0, i.jsxs)("div", {
    className: g.notificationBody,
    children: [(0, i.jsx)("div", {
      className: g.iconContainer,
      children: (0, i.jsx)(u.default, {
        height: 28,
        width: 28
      })
    }), (0, i.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: p.default.Messages.KEYBIND_NOTIFICATION_DESCRIPTION
    })]
  });
  return {
    icon: null,
    body: r,
    colorScheme: d.ColorSchemes.PRIMARY,
    onDismissClick: (e, n) => {
      a("dismiss"), t(h.ContentDismissActionType.DISMISS), s.default.updateNotificationStatus(n)
    },
    onNotificationShow: () => {
      t(h.ContentDismissActionType.AUTO_DISMISS), n()
    }
  }
}