"use strict";
n.r(t), n.d(t, {
  useGuildEligibleForGuildProducts: function() {
    return i
  },
  isGuildEligibleForGuildProducts: function() {
    return r
  }
});
var s = n("60705");

function i(e, t) {
  let {
    enabled: n
  } = s.GuildProductsExperiment.useExperiment({
    guildId: null != e ? e : "",
    location: t
  });
  return n
}

function r(e, t) {
  let {
    enabled: n
  } = s.GuildProductsExperiment.getCurrentConfig({
    guildId: null != e ? e : "",
    location: t
  });
  return n
}