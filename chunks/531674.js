"use strict";
n.r(t), n.d(t, {
  getMuteTimes: function() {
    return T
  },
  default: function() {
    return N
  }
}), n("222007");
var l = n("37983");
n("884691");
var a = n("866227"),
  s = n.n(a),
  i = n("446674"),
  r = n("77078"),
  o = n("820542"),
  u = n("519705"),
  d = n("319165"),
  c = n("282109"),
  f = n("34676"),
  E = n("679653"),
  h = n("49111"),
  _ = n("468200"),
  S = n("782340");
let T = () => [{
    value: _.MuteUntilSeconds.MINUTES_15,
    label: S.default.Messages.MUTE_DURATION_15_MINUTES
  }, {
    value: _.MuteUntilSeconds.HOURS_1,
    label: S.default.Messages.MUTE_DURATION_1_HOUR
  }, {
    value: _.MuteUntilSeconds.HOURS_3,
    label: S.default.Messages.MUTE_DURATION_3_HOURS
  }, {
    value: _.MuteUntilSeconds.HOURS_8,
    label: S.default.Messages.MUTE_DURATION_8_HOURS
  }, {
    value: _.MuteUntilSeconds.HOURS_24,
    label: S.default.Messages.MUTE_DURATION_24_HOURS
  }, {
    value: _.MuteUntilSeconds.ALWAYS,
    label: S.default.Messages.MUTE_DURATION_ALWAYS
  }],
  p = e => {
    let t = e > 0 ? s().add(e, "second").toISOString() : null;
    return {
      muted: !0,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function N(e, t) {
  let [n, a] = (0, i.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, d.useMutedUntilText)(a), _ = (0, E.default)(e, !0);

  function N(t) {
    t && e.type === h.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id), u.default.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, f.NotificationLabel.muted(t))
  }
  let I = S.default.Messages.MUTE_CHANNEL_GENERIC,
    m = S.default.Messages.UNMUTE_CHANNEL_GENERIC;
  switch (e.type) {
    case h.ChannelTypes.GUILD_CATEGORY:
      I = S.default.Messages.MUTE_CATEGORY, m = S.default.Messages.UNMUTE_CATEGORY;
      break;
    case h.ChannelTypes.GROUP_DM:
      I = S.default.Messages.MUTE_CONVERSATION, m = S.default.Messages.UNMUTE_CONVERSATION;
      break;
    case h.ChannelTypes.DM:
      I = S.default.Messages.MUTE_CHANNEL.format({
        name: _
      }), m = S.default.Messages.UNMUTE_CHANNEL.format({
        name: _
      });
      break;
    default:
      I = S.default.Messages.MUTE_CHANNEL_GENERIC, m = S.default.Messages.UNMUTE_CHANNEL_GENERIC
  }
  return n ? (0, l.jsx)(r.MenuItem, {
    id: "unmute-channel",
    label: m,
    subtext: s,
    action: () => N(!1)
  }) : (0, l.jsx)(r.MenuItem, {
    id: "mute-channel",
    label: I,
    action: () => N(!0),
    children: T().map(n => {
      let {
        value: a,
        label: s
      } = n;
      return (0, l.jsx)(r.MenuItem, {
        id: "".concat(a),
        label: s,
        action: () => (function(n) {
          e.type === h.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id);
          let l = p(n);
          u.default.updateChannelOverrideSettings(e.guild_id, e.id, l, f.NotificationLabels.Muted, t)
        })(a)
      }, a)
    })
  })
}