"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
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
  f = n("871832"),
  E = n("805875"),
  _ = n("376897"),
  h = n("683805"),
  C = n("825734"),
  I = n("766383"),
  T = n("696287"),
  S = n("778117"),
  m = n("195180"),
  p = n("357147");
let A = {
    ...i.crossPlatformCommands,
    ...d.default,
    ...c.default,
    ...E.default,
    ..._.default,
    ...h.default,
    ...C.default,
    ...T.default,
    ...m.default,
    ...S.default,
    ...f.default,
    ...I.default
  },
  g = {
    ...l.default,
    ...o.overlayEventHandlers,
    ...u.voiceSettingsEventHandlers
  };
var N = {
  server: r.default,
  commands: A,
  events: g,
  stores: [a.default],
  transports: [p.default],
  registerTransportsForEmbeddedPlatform: function() {
    s.default.ensureModule("discord_rpc").then(() => {
      let e = [n("255516").default, n("90906").default];
      for (let t of e) r.default.registerTransport(t)
    })
  }
}