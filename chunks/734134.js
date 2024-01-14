"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
});
var a = l("37983"),
  n = l("884691"),
  u = l("866227"),
  d = l.n(u),
  i = l("446674"),
  s = l("77078"),
  o = l("519705"),
  r = l("531674"),
  c = l("862205"),
  f = l("282109"),
  m = l("34676"),
  E = l("782340");
let _ = (0, c.createExperiment)({
  kind: "user",
  id: "2022-02_guild_folder_mute",
  label: "Guild Folder Mute",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function M(e, t) {
  let {
    enabled: l
  } = _.useExperiment({
    location: "74d87e_1"
  }, {
    autoTrackExposure: !1
  }), u = (0, i.useStateFromStoresObject)([f.default], () => Object.fromEntries(e.map(e => [e, f.default.isMuted(e)])), [e]), c = n.useCallback(l => {
    let a = Object.fromEntries(e.filter(e => !u[e]).map(e => [e, {
      muted: !0,
      mute_config: null != l ? {
        selected_time_window: l,
        end_time: l > 0 ? d().add(l, "second").toISOString() : null
      } : void 0
    }]));
    o.default.updateGuildNotificationSettingsBulk(a, m.NotificationLabels.Muted, t)
  }, [e, t, u]), M = n.useCallback(() => {
    o.default.updateGuildNotificationSettingsBulk(Object.fromEntries(e.filter(e => u[e]).map(e => [e, {
      muted: !1
    }])), m.NotificationLabels.Unmuted, t)
  }, [e, t, u]);
  return l ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.MenuItem, {
      id: "mute-folder",
      label: E.default.Messages.SERVER_FOLDER_MUTE_ALL,
      action: () => c(),
      children: (0, r.getMuteTimes)().map(e => {
        let {
          value: t,
          label: l
        } = e;
        return (0, a.jsx)(s.MenuItem, {
          id: "".concat(t),
          label: l,
          action: () => c(t)
        }, t)
      })
    }), (0, a.jsx)(s.MenuItem, {
      id: "unmute-folder",
      label: E.default.Messages.SERVER_FOLDER_UNMUTE_ALL,
      action: M
    })]
  }) : null
}