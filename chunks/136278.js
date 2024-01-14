"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("917351"),
  l = n.n(a),
  s = n("446674"),
  i = n("913144"),
  r = n("863636"),
  d = n("900938"),
  o = n("49111"),
  u = n("653138");
let c = !1,
  N = null,
  _ = [],
  I = !1,
  E = [];

function f() {
  (function() {
    c = !1, N = null, E = [], I = !1
  })(), null != (N = d.default.getGuildId()) && d.default.getSection() === o.GuildSettingsSections.ONBOARDING && (_ = r.default.getOnboardingPrompts(N), I = r.default.isAdvancedMode(N))
}
class O extends s.default.Store {
  initialize() {
    this.waitFor(d.default, r.default)
  }
  hasChanges() {
    return null != N && !l.isEqual(r.default.getOnboardingPrompts(N), _)
  }
  get guildId() {
    return N
  }
  get submitting() {
    return c
  }
  get errors() {
    return E
  }
  get editedOnboardingPrompts() {
    return _
  }
  get advancedMode() {
    return I
  }
}
O.displayName = "GuildSettingsOnboardingPromptsStore";
var S = new O(i.default, {
  GUILD_SETTINGS_INIT: f,
  GUILD_SETTINGS_SET_SECTION: f,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: f,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: f,
  GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: f,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: f,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function(e) {
    var t;
    E = null !== (t = e.errors) && void 0 !== t ? t : [], c = !1
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function(e) {
    let {
      prompts: t
    } = e;
    _ = t
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function() {
    c = !0, E = []
  },
  GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function(e) {
    var t;
    E = null !== (t = e.errors) && void 0 !== t ? t : []
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
    let {
      mode: t
    } = e;
    I = t === u.GuildOnboardingMode.ONBOARDING_ADVANCED
  }
})