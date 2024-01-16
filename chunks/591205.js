"use strict";
n.r(t), n.d(t, {
  INVITE_OPTIONS_UNLIMITED: function() {
    return s
  },
  INVITE_OPTIONS_ONCE: function() {
    return i
  },
  INVITE_OPTIONS_5_TIMES: function() {
    return r
  },
  INVITE_OPTIONS_10_TIMES: function() {
    return u
  },
  INVITE_OPTIONS_25_TIMES: function() {
    return o
  },
  INVITE_OPTIONS_50_TIMES: function() {
    return d
  },
  INVITE_OPTIONS_100_TIMES: function() {
    return c
  },
  MAX_USES_OPTIONS: function() {
    return E
  },
  INVITE_OPTIONS_30_MINUTES: function() {
    return f
  },
  INVITE_OPTIONS_1_HOUR: function() {
    return _
  },
  INVITE_OPTIONS_6_HOURS: function() {
    return I
  },
  INVITE_OPTIONS_12_HOURS: function() {
    return h
  },
  INVITE_OPTIONS_1_DAY: function() {
    return T
  },
  INVITE_OPTIONS_7_DAYS: function() {
    return N
  },
  INVITE_OPTIONS_30_DAYS: function() {
    return v
  },
  INVITE_OPTIONS_FOREVER: function() {
    return m
  },
  MAX_AGE_OPTIONS: function() {
    return S
  }
});
var l = n("782340");

function a(e, t) {
  return {
    value: e,
    get label() {
      return t()
    }
  }
}
let s = a(0, () => l.default.Messages.MAX_USES.format({
    maxUses: 0
  })),
  i = a(1, () => l.default.Messages.MAX_USES.format({
    maxUses: 1
  })),
  r = a(5, () => l.default.Messages.MAX_USES.format({
    maxUses: 5
  })),
  u = a(10, () => l.default.Messages.MAX_USES.format({
    maxUses: 10
  })),
  o = a(25, () => l.default.Messages.MAX_USES.format({
    maxUses: 25
  })),
  d = a(50, () => l.default.Messages.MAX_USES.format({
    maxUses: 50
  })),
  c = a(100, () => l.default.Messages.MAX_USES.format({
    maxUses: 100
  })),
  E = [s, i, r, u, o, d, c],
  f = a(1800, () => l.default.Messages.DURATION_MINUTES.format({
    minutes: 30
  })),
  _ = a(3600, () => l.default.Messages.DURATION_HOURS.format({
    hours: 1
  })),
  I = a(21600, () => l.default.Messages.DURATION_HOURS.format({
    hours: 6
  })),
  h = a(43200, () => l.default.Messages.DURATION_HOURS.format({
    hours: 12
  })),
  T = a(86400, () => l.default.Messages.DURATION_DAYS.format({
    days: 1
  })),
  N = a(604800, () => l.default.Messages.DURATION_DAYS.format({
    days: 7
  })),
  v = a(2592e3, () => l.default.Messages.DURATION_DAYS.format({
    days: 30
  })),
  m = a(0, () => l.default.Messages.MAX_AGE_NEVER),
  S = [f, _, I, h, T, N, v, m]