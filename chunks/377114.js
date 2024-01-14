"use strict";
n.r(t), n.d(t, {
  showReportModalForDiscoverableGuild: function() {
    return m
  },
  showReportModalForGuildDirectoryEntry: function() {
    return f
  },
  showReportModalForMessage: function() {
    return _
  },
  showReportModalForStageChannel: function() {
    return h
  },
  showReportModalForGuildScheduledEvent: function() {
    return E
  },
  showReportModalForFirstDM: function() {
    return v
  },
  submitHamReportForFirstDM: function() {
    return R
  },
  showReportModalForUser: function() {
    return x
  },
  showUnauthenticatedReportModalForUser: function() {
    return p
  },
  showUnauthenticatedReportModalForMessage: function() {
    return g
  }
});
var a = n("716241"),
  l = n("834052"),
  r = n("719926"),
  s = n("766274"),
  i = n("522874"),
  d = n("143618"),
  u = n("965153"),
  o = n("123265"),
  c = n("49111");

function m(e, t) {
  N(d.ReportNames.GUILD_DISCOVERY, {
    guild_id: e.id
  }), (0, o.showReportModal)({
    name: d.ReportNames.GUILD_DISCOVERY,
    record: e
  }, {}, t)
}

function f(e, t) {
  N(d.ReportNames.GUILD_DIRECTORY_ENTRY, {
    channel_id: e.channelId,
    guild_id: e.guildId
  }), (0, o.showReportModal)({
    name: d.ReportNames.GUILD_DIRECTORY_ENTRY,
    record: e
  }, {}, t)
}

function _(e, t) {
  N(d.ReportNames.MESSAGE, {
    message_id: e.id,
    channel_id: e.channel_id
  });
  let n = (0, i.shouldShowFraudMenuVariant)();
  (0, o.showReportModal)({
    name: d.ReportNames.MESSAGE,
    record: e
  }, {
    variant: n ? "4" : void 0
  }, t)
}

function h(e, t) {
  let n = l.default.getStageInstanceByChannel(e.id);
  null != n && (N(d.ReportNames.STAGE_CHANNEL, {
    stage_instance_id: n.id,
    channel_id: n.channel_id,
    guild_id: n.guild_id
  }), (0, o.showReportModal)({
    name: d.ReportNames.STAGE_CHANNEL,
    record: n
  }, {}, t))
}

function E(e, t) {
  var n;
  N(d.ReportNames.GUILD_SCHEDULED_EVENT, {
    guild_scheduled_event_id: e.id,
    guild_id: e.guild_id,
    channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
  }), (0, o.showReportModal)({
    name: d.ReportNames.GUILD_SCHEDULED_EVENT,
    record: e
  }, {}, t)
}

function v(e, t) {
  N(d.ReportNames.FIRST_DM, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, o.showReportModal)({
    name: d.ReportNames.FIRST_DM,
    record: e
  }, {}, t, void 0, !1)
}
async function R(e, t) {
  try {
    await (0, u.submitHeadlessReport)({
      name: d.ReportNames.FIRST_DM,
      record: e
    }, {
      variant: "_first_dm_ham_v1"
    }), null == t || t()
  } catch {}
}

function x(e, t, n) {
  N(d.ReportNames.USER, {
    reported_user_id: e.id
  }), (0, o.showReportModal)({
    name: d.ReportNames.USER,
    record: e,
    contextualGuildId: t
  }, {}, n, void 0, !1)
}

function p(e, t) {
  let n = new s.default({});
  N(d.UnauthenticatedReportNames.USER, {
    reported_user_id: n.id
  }), (0, o.showReportModal)({
    name: d.UnauthenticatedReportNames.USER,
    record: n
  }, {}, t, void 0, !1, !1, e)
}

function g(e, t) {
  let n = new r.default({});
  N(d.UnauthenticatedReportNames.MESSAGE, {
    message_id: void 0,
    channel_id: void 0
  }), (0, o.showReportModal)({
    name: d.UnauthenticatedReportNames.MESSAGE,
    record: n
  }, {}, t, void 0, !1, !1, e)
}

function N(e, t) {
  a.default.trackWithMetadata(c.AnalyticEvents.IAR_MODAL_OPEN, {
    report_type: e,
    ...t
  })
}