"use strict";
s.r(t), s.d(t, {
  DiscoverySettingsViews: function() {
    return n
  },
  getSettingsView: function() {
    return u
  },
  trackDiscoverySettingsChange: function() {
    return c
  },
  getSuggestedTags: function() {
    return E
  }
}), s("222007"), s("884691"), s("446674"), s("305961");
var a, n, l, i, r = s("599110");
s("271889"), s("75766");
var o = s("447621"),
  d = s("49111");

function u(e, t) {
  let s = e.hasFeature(d.GuildFeatures.VERIFIED),
    a = e.hasFeature(d.GuildFeatures.DISCOVERABLE),
    n = e.hasFeature(d.GuildFeatures.ENABLED_DISCOVERABLE_BEFORE);
  if (s) return "settings";
  if (!a && !n) return "intro";
  if (null == t) return "settings";
  let l = t.sufficientWithoutGracePeriod && null != t.gracePeriodEndDate && t.gracePeriodEndDate > new Date;
  return t.sufficient || l || !a ? t.sufficient || l ? "settings" : "intro" : "disqualified"
}

function c(e, t) {
  let s = !1,
    a = {
      guild_id: e.id,
      automatic: !1
    };
  (null == t || e.discoverySplash !== t.discoverySplash) && (a.discovery_splash_edit_type = null == e.discoverySplash ? "removed" : "uploaded", s = !0), (null == t || e.features.has(d.GuildFeatures.DISCOVERABLE) !== t.features.has(d.GuildFeatures.DISCOVERABLE)) && (a.is_discoverable = e.features.has(d.GuildFeatures.DISCOVERABLE), s = !0), (null == t || e.rulesChannelId !== t.rulesChannelId) && (a.rules_channel_id = e.rulesChannelId, s = !0), s && r.default.track(d.AnalyticEvents.GUILD_SETTINGS_DISCOVERY_UPDATED, a)
}

function E(e) {
  var t, s;
  return null !== (s = null === (t = o.SUGGESTED_TAGS_FOR_CATEGORIES[e]) || void 0 === t ? void 0 : t.map(e => e())) && void 0 !== s ? s : []
}(l = a || (a = {})).UPLOADED = "uploaded", l.REMOVED = "removed", (i = n || (n = {})).INTRO = "intro", i.DISQUALIFIED = "disqualified", i.SETTINGS = "settings"