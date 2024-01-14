"use strict";
n.r(t), n.d(t, {
  channelEligibleForSummaries: function() {
    return r
  },
  canSeeChannelSummaries: function() {
    return o
  },
  canGuildUseConversationSummaries: function() {
    return u
  },
  useChannelSummariesExperiment: function() {
    return d
  }
}), n("65597");
var l = n("862205"),
  a = n("305961"),
  s = n("49111"),
  i = n("724210");
(0, l.createExperiment)({
  kind: "user",
  id: "2023-07_p13n_guild_dock_summaries",
  label: "Guild Dock Summaries on Mobile Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable guild dock summaries mobile UX",
    config: {
      enabled: !0
    }
  }]
});

function r(e) {
  return o(e, !0, !1)
}

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  if (null == e || ! function(e) {
      var t;
      if (null == e) return !1;
      let n = a.default.getGuild(null !== (t = null == e ? void 0 : e.guild_id) && void 0 !== t ? t : ""),
        l = null != n && n.rulesChannelId === e.id;
      return s.ChannelTypesSets.SUMMARIZEABLE.has(e.type) && !e.isNSFW() && !l
    }(e) || !1 === t && e.hasFlag(i.ChannelFlags.SUMMARIES_DISABLED)) return !1;
  let l = a.default.getGuild(e.guild_id);
  return u(l, n)
}

function u(e) {
  var t;
  let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  if (null == e) return !1;
  return !!((null == (t = e.id) || t !== s.ME && t !== s.FAVORITES) && e.hasFeature(s.GuildFeatures.SUMMARIES_ENABLED_GA)) && (!n || e.hasFeature(s.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
}

function d(e) {
  arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return o(e, t)
}