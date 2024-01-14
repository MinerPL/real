"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("901165"),
  s = n("50885"),
  i = n("84090"),
  l = n("251744"),
  r = n("261131"),
  o = n("370453"),
  u = n("878099"),
  d = n("221850"),
  c = n("700721"),
  E = n("871832"),
  f = n("805875"),
  _ = n("376897"),
  h = n("683805"),
  C = n("825734"),
  T = n("766383"),
  I = n("696287"),
  S = n("778117"),
  N = n("195180"),
  A = n("357147");
let p = {
    ...i.crossPlatformCommands,
    ...d.default,
    ...c.default,
    ...f.default,
    ..._.default,
    ...h.default,
    ...C.default,
    ...I.default,
    ...N.default,
    ...S.default,
    ...E.default,
    ...T.default
  },
  m = {
    ...l.default,
    ...o.overlayEventHandlers,
    ...u.voiceSettingsEventHandlers
  };
var g = {
  server: r.default,
  commands: p,
  events: m,
  stores: [a.default],
  transports: [A.default],
  registerTransportsForEmbeddedPlatform: function() {
    s.default.ensureModule("discord_rpc").then(() => {
      let e = [n("255516").default, n("90906").default];
      for (let t of e) r.default.registerTransport(t)
    })
  }
}