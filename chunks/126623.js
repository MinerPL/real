"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  },
  useCustomizeCommunityPromptHelpText: function() {
    return m
  }
});
var a = l("446674"),
  n = l("679653"),
  o = l("42203"),
  r = l("27618"),
  i = l("697218"),
  s = l("449008"),
  u = l("782340");

function d(e, t, l) {
  return 0 === e.length ? "" : (l ? u.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES_ALSO : u.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES).format({
    count: e.length,
    extraCount: Math.max(e.length - 2, 0),
    role1: e[0],
    role2: e[1],
    itemHook: t
  })
}

function c(e) {
  let {
    guild: t,
    prompt: l,
    selectedRoleIds: c,
    selectedChannelIds: m,
    itemHook: f
  } = e, h = (0, a.useStateFromStoresArray)([o.default, i.default, r.default], () => Array.from(m).map(e => o.default.getChannel(e)).filter(s.isNotNullish).map(e => (0, n.computeChannelName)(e, i.default, r.default, !0))), v = Array.from(c).map(e => {
    var l, a;
    return null === (l = (null !== (a = null == t ? void 0 : t.roles) && void 0 !== a ? a : {})[e]) || void 0 === l ? void 0 : l.name
  }).filter(s.isNotNullish).map(e => "@".concat(e)), g = (null == l ? void 0 : l.singleSelect) ? "" : u.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS, x = "";
  if (0 === h.length && v.length > 0) g = d(v, f);
  else if (h.length > 0) {
    var p, C;
    p = h, C = f, g = 0 === p.length ? "" : u.default.Messages.ONBOARDING_HELP_TEXT_ADD_CHANNELS.format({
      count: p.length,
      extraCount: Math.max(p.length - 2, 0),
      channel1: p[0],
      channel2: p[1],
      itemHook: C
    }), v.length > 0 && (x = d(v, f, !0))
  }
  return {
    helpText: g,
    helpTextAdditional: x
  }
}

function m(e) {
  let {
    guild: t,
    prompt: l,
    selectedRoleIds: d,
    selectedChannelIds: c,
    itemHook: m
  } = e, f = (0, a.useStateFromStoresArray)([o.default, i.default, r.default], () => Array.from(c).map(e => o.default.getChannel(e)).filter(s.isNotNullish).map(e => (0, n.computeChannelName)(e, i.default, r.default, !0))), h = Array.from(d).map(e => {
    var l, a;
    return null === (l = (null !== (a = null == t ? void 0 : t.roles) && void 0 !== a ? a : {})[e]) || void 0 === l ? void 0 : l.name
  }).filter(s.isNotNullish).map(e => "@".concat(e)), v = (null == l ? void 0 : l.singleSelect) ? "" : u.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS;
  return 0 === f.length && h.length > 0 ? v = u.default.Messages.CUSTOMIZE_COMMUNITY_ADD_ROLES.format({
    count: h.length,
    extraCount: Math.max(h.length - 2, 0),
    role1: h[0],
    role2: h[1],
    itemHook: m
  }) : f.length > 0 && 0 === h.length ? v = u.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS.format({
    count: f.length,
    extraCount: Math.max(f.length - 2, 0),
    channel1: f[0],
    channel2: f[1],
    itemHook: m
  }) : f.length > 0 && h.length > 0 && (v = u.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS_AND_ROLES.format({
    channelCount: f.length,
    extraChannelCount: Math.max(f.length - 2, 0),
    channel1: f[0],
    channel2: f[1],
    itemHook: m,
    roleCount: h.length,
    extraRoleCount: Math.max(h.length - 2, 0),
    role1: h[0],
    role2: h[1]
  })), {
    helpText: v,
    helpTextAdditional: ""
  }
}