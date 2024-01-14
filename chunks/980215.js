"use strict";
n.r(t), n.d(t, {
  useClydeProfilesEnabled: function() {
    return l
  },
  useClydeEnabled: function() {
    return f
  },
  getClydeEnabled: function() {
    return c
  },
  getClydeExperimentEnabled: function() {
    return g
  },
  canUseCustomClydeProfiles: function() {
    return m
  }
}), n("884691"), n("446674");
var s = n("305961"),
  i = n("957255"),
  r = n("772051"),
  a = n("254927"),
  o = n("49111"),
  d = n("724210");

function u(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
    i = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
    a = r.default.useExperiment({
      guildId: i,
      location: s
    }, {
      autoTrackExposure: n
    }).experimentState;
  return a
}

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0,
    s = u(e, t, n);
  return s === r.ClydeExperimentState.ClydeProfiles
}

function f(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = u(e, n);
  return _(s, e, t)
}

function _(e, t, n) {
  if (null == t) {
    if (null != n && n.isPrivate()) {
      if (n.hasFlag(d.ChannelFlags.CLYDE_AI)) return !0;
      let e = (0, a.isClydeEnabledinGdms)();
      if (!e) return !1;
      let t = s.default.getGuildIds().some(e => g(s.default.getGuild(e)));
      return t
    }
    return !1
  }
  return null != e && e !== r.ClydeExperimentState.None && i.default.can(o.Permissions.USE_CLYDE_AI, n)
}

function c(e, t) {
  var n;
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
    a = r.default.getCurrentConfig({
      guildId: i,
      location: "1e9ccc_2"
    }, {
      autoTrackExposure: s
    }).experimentState;
  return _(a, e, t)
}

function g(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = h(e, t);
  return n !== r.ClydeExperimentState.None
}

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return h(e, t) === r.ClydeExperimentState.ClydeProfiles
}

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == e) return !1;
  let n = e.id;
  return r.default.getCurrentConfig({
    guildId: n,
    location: "1e9ccc_4"
  }, {
    autoTrackExposure: t
  }).experimentState
}