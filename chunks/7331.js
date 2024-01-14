"use strict";
n.r(t), n.d(t, {
  useIsUserInCreatorMonetizationEligibleCountry: function() {
    return s
  },
  isUserInCreatorMonetizationEligibleCountry: function() {
    return a
  },
  useIsExpeditedOnboardingGuild: function() {
    return o
  },
  isExpeditedMonetizationOnboardingGuild: function() {
    return l
  },
  useIsMonetizationWaitlistEnabledForGuild: function() {
    return u
  },
  isMonetizationWaitlistEnabledForGuild: function() {
    return c
  },
  isCreatorMonetizationNagActivateEnabled: function() {
    return d
  }
});
var i = n("615923"),
  r = n("49111");

function s() {
  let {
    isUserEligibleForCreatorMonetization: e
  } = i.CreatorMonetizationCountryAllowlistExperiment.useExperiment({
    location: "e3bb71_1"
  }, {
    autoTrackExposure: !1
  });
  return e
}

function a() {
  let {
    isUserEligibleForCreatorMonetization: e
  } = i.CreatorMonetizationCountryAllowlistExperiment.getCurrentConfig({
    location: "e3bb71_2"
  }, {
    autoTrackExposure: !1
  });
  return e
}

function o(e) {
  let t = function(e) {
      let {
        enableFastMonetizationOnboardingForGuild: t
      } = i.CreatorMonetizationRavenOnboardingGuildExperiment.useExperiment({
        guildId: null != e ? e : "",
        location: "e3bb71_3"
      }, {
        autoTrackExposure: !0
      }), {
        enableFastMonetizationOnboardingForUser: n
      } = i.CreatorMonetizationRavenOnboardingUserExperiment.useExperiment({
        location: "e3bb71_4"
      }, {
        autoTrackExposure: !1
      });
      return null != e && t && n
    }(null == e ? void 0 : e.id),
    n = function(e) {
      let {
        enableFastMonetizationOnboardingForUser: t
      } = i.CreatorMonetizationRavenOnboardingUserExperiment.useExperiment({
        location: "e3bb71_7"
      }, {
        autoTrackExposure: !1
      });
      return null != e && e.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE) && t
    }(e);
  return t || n
}

function l(e) {
  return function(e) {
    let {
      enableFastMonetizationOnboardingForGuild: t
    } = i.CreatorMonetizationRavenOnboardingGuildExperiment.getCurrentConfig({
      guildId: null != e ? e : "",
      location: "e3bb71_5"
    }), {
      enableFastMonetizationOnboardingForUser: n
    } = i.CreatorMonetizationRavenOnboardingUserExperiment.getCurrentConfig({
      location: "e3bb71_6"
    });
    return null != e && t && n
  }(null == e ? void 0 : e.id) || function(e) {
    let {
      enableFastMonetizationOnboardingForUser: t
    } = i.CreatorMonetizationRavenOnboardingUserExperiment.getCurrentConfig({
      location: "e3bb71_8"
    });
    return null != e && e.hasFeature(r.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE) && t
  }(e)
}

function u(e) {
  let {
    enableWaitlist: t
  } = i.CreatorMonetizationOnboardingWaitlistExperiment.useExperiment({
    guildId: null != e ? e : "",
    location: "e3bb71_9"
  }, {
    autoTrackExposure: !1
  });
  return t
}

function c(e) {
  let {
    enableWaitlist: t
  } = i.CreatorMonetizationOnboardingWaitlistExperiment.getCurrentConfig({
    guildId: null != e ? e : "",
    location: "e3bb71_10"
  });
  return t
}

function d() {
  let {
    enableCreatorMonetizationNagActivateForUser: e
  } = i.CreatorMonetizationNagActivateExperiment.getCurrentConfig({
    location: "e3bb71_11"
  }, {
    autoTrackExposure: !0
  });
  return e
}