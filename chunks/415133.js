"use strict";
n.r(t), n.d(t, {
  getUserAvatarURLForPomelo: function() {
    return c
  },
  getDefaultPomelo: function() {
    return m
  },
  shouldSkipToEditUsername: function() {
    return O
  },
  formatPomeloForEditing: function() {
    return S
  },
  getMemberSince: function() {
    return R
  },
  formatUsernameLiveCheckValidation: function() {
    return T
  }
}), n("781738"), n("222007"), n("794252");
var i = n("866227"),
  a = n.n(i),
  s = n("506838"),
  r = n("315102"),
  o = n("299039"),
  u = n("159885"),
  l = n("644417"),
  d = n("935583"),
  g = n("782340");

function c(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return r.default.getUserAvatarURL({
    id: e.id,
    avatar: e.avatar,
    bot: e.bot,
    discriminator: "0000"
  }, t, 80)
}

function m(e) {
  let t = (0, u.stripDiacritics)(e.username).replace(d.dirtyChars, "").replace(d.coalescePeriods, ".").toLowerCase();
  return "".concat(t).concat(e.discriminator).substring(0, 32)
}
let E = ["@", "#", ":"],
  f = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
  _ = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function O(e) {
  var t, n;
  let i = e.username.toLowerCase();
  if ((t = i, n = d.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !n.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
  for (let e of E)
    if (i.includes(e)) return !0;
  for (let e of _)
    if (i === e.toLowerCase()) return !0;
  for (let e of f)
    if (i.includes(e.toLowerCase())) return !0;
  return !1
}

function S(e) {
  return e.toLowerCase().replace(/\s/g, "").replace("@", "")
}

function R(e) {
  let t = o.default.extractTimestamp(e);
  try {
    return a(new Date(t)).format("MMM DD, YYYY")
  } catch (e) {}
  return null
}

function T(e) {
  return (0, s.match)(e).with({
    rateLimited: !0
  }, () => ({
    type: l.NameValidationState.RATE_LIMIT,
    message: g.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
  })).with({
    error: s.P.not(s.P.nullish)
  }, e => {
    let {
      error: t
    } = e;
    return {
      type: l.NameValidationState.ERROR,
      message: t
    }
  }).with({
    taken: !1
  }, () => ({
    type: l.NameValidationState.AVAILABLE,
    message: g.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
  })).with({
    taken: !0
  }, () => ({
    type: l.NameValidationState.ERROR,
    message: g.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
  })).with({
    error: s.P.nullish
  }, () => ({
    type: l.NameValidationState.INTERNAL_ERROR,
    message: ""
  })).otherwise(() => void 0)
}