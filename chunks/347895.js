"use strict";
n.r(t), n.d(t, {
  fetchGuildHomeSettings: function() {
    return h
  },
  fetchNewMemberActions: function() {
    return T
  },
  selectHomeResourceChannel: function() {
    return S
  },
  selectNewMemberActionChannel: function() {
    return m
  },
  completeNewMemberAction: function() {
    return v
  },
  getBlockForChannelDeletion: function() {
    return C
  }
}), n("808653");
var l = n("872717"),
  u = n("913144"),
  r = n("819689"),
  i = n("115718"),
  a = n("38654"),
  d = n("144491"),
  o = n("42203"),
  s = n("599110"),
  c = n("698882"),
  E = n("129092"),
  f = n("675305"),
  _ = n("290886"),
  N = n("49111");
let h = async e => {
  u.default.dispatch({
    type: "GUILD_HOME_SETTINGS_FETCH_START",
    guildId: e
  });
  try {
    let t = await l.default.get({
        url: N.Endpoints.GUILD_HOME_SETTINGS(e),
        oldFormErrors: !0
      }),
      n = (0, E.settingsFromServer)(t.body);
    return u.default.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
      guildId: e,
      homeSettings: n
    }), n
  } catch (t) {
    u.default.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
      guildId: e
    })
  }
}, T = async e => {
  if (!a.default.isFullServerPreview(e)) {
    u.default.dispatch({
      type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
      guildId: e
    });
    try {
      let t = await l.default.get({
          url: N.Endpoints.GUILD_MEMBER_ACTIONS(e),
          oldFormErrors: !0
        }),
        n = (0, E.actionsFromServer)(t.body);
      return u.default.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
        guildId: e,
        memberActions: n
      }), n
    } catch (t) {
      u.default.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
        guildId: e
      })
    }
  }
}, S = function(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  if (u.default.dispatch({
      type: "SELECT_HOME_RESOURCE_CHANNEL",
      guildId: e,
      channelId: t
    }), null == t) return;
  let l = o.default.getChannel(t),
    E = c.default.getResourceForChannel(e, t);
  null != e && !a.default.isFullServerPreview(e) && null != l && null != E && s.default.track(N.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: l.id,
    server_guide_channel_type: "resource",
    channel_action_type: -1
  }), n && (0, d.transitionToChannel)(t), r.default.jumpToMessage({
    channelId: t,
    messageId: t,
    flash: !1,
    jumpType: i.JumpTypes.INSTANT
  })
}, m = (e, t) => {
  u.default.dispatch({
    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
    guildId: e,
    channelId: t
  });
  let n = o.default.getChannel(t),
    l = c.default.getActionForChannel(e, t);
  null != e && !a.default.isFullServerPreview(e) && null != n && null != l && s.default.track(N.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: n.id,
    server_guide_channel_type: "member action",
    channel_action_type: l.actionType
  }), (0, d.transitionToChannel)(t)
}, v = (e, t) => {
  if (u.default.dispatch({
      type: "COMPLETE_NEW_MEMBER_ACTION",
      guildId: e,
      channelId: t
    }), a.default.isFullServerPreview(e)) return;
  let n = o.default.getChannel(t),
    r = c.default.getActionForChannel(e, t);
  if (null != n && null != r) {
    var i, d;
    let t = Object.keys(null !== (i = f.default.getCompletedActions(e)) && void 0 !== i ? i : {}),
      l = null !== (d = c.default.getNewMemberActions(e)) && void 0 !== d ? d : [];
    s.default.track(N.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
      guild_id: n.guild_id,
      channel_id: n.id,
      channel_action_type: r.actionType,
      has_completed_all: l.reduce((e, n) => e && t.includes(n.channelId), !0)
    })
  }
  l.default.post({
    url: N.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
  })
};
async function C(e, t) {
  if (null == e) return !1;
  let n = (0, _.canSeeOnboardingHome)(e);
  if (!n) return !1;
  let l = c.default.getSettings(e);
  return l === c.NO_SETTINGS && (await h(e), l = c.default.getSettings(e)), l !== c.NO_SETTINGS && null != l && (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === t) ? "todo" : null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === t) && "resource")
}