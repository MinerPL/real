"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("917351"),
  l = n.n(a),
  s = n("446674"),
  i = n("913144"),
  r = n("863636"),
  d = n("900938"),
  o = n("49111");
let u = !1,
  c = null,
  N = new Set;

function _() {
  (function() {
    u = !1, c = null
  })(), null != (c = d.default.getGuildId()) && d.default.getSection() === o.GuildSettingsSections.ONBOARDING && (N = new Set(r.default.getDefaultChannelIds(c)))
}
class I extends s.default.Store {
  initialize() {
    this.waitFor(d.default, r.default)
  }
  hasChanges() {
    if (null == c) return !1;
    let e = r.default.getDefaultChannelIds(c).sort(),
      t = Array.from(N).sort();
    return !l.isEqual(e, t)
  }
  get guildId() {
    return c
  }
  get submitting() {
    return u
  }
  get editedDefaultChannelIds() {
    return N
  }
}
I.displayName = "GuildSettingsDefaultChannelsStore";
var E = new I(i.default, {
  GUILD_SETTINGS_INIT: _,
  GUILD_SETTINGS_SET_SECTION: _,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: _,
  GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: _,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: _,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function() {
    u = !1
  },
  GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function(e) {
    let {
      channelId: t
    } = e;
    (N = new Set(N)).has(t) ? N.delete(t) : N.add(t)
  },
  GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function() {
    u = !0
  }
})