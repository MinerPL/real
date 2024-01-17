"use strict";
E.r(_), E.d(_, {
  BINARY_READ_OPTIONS: function() {
    return s
  },
  b64ToProtoWithType: function() {
    return S
  },
  b64ToProto: function() {
    return N
  },
  b64ToPreloadedUserSettingsProto: function() {
    return O
  },
  protoToB64WithType: function() {
    return A
  },
  protoToB64: function() {
    return R
  },
  mergeTopLevelFields: function() {
    return l
  },
  mutateUserGuildSettingsInternal: function() {
    return L
  },
  mutateUserChannelSettings: function() {
    return u
  },
  mutateUserChannelSettingsInternal: function() {
    return C
  },
  runMigrations: function() {
    return D
  },
  serializeUsageHistory: function() {
    return c
  }
}), E("70102"), E("222007"), E("424973");
var t = E("849266"),
  o = E("917351"),
  n = E.n(o),
  r = E("713349"),
  i = E("151426"),
  a = E("959714"),
  I = E("397336");
let s = {
    readerFactory: e => new t.BinaryReader(e, new TextDecoder("utf-8"))
  },
  T = {
    [I.UserSettingsTypes.PRELOADED_USER_SETTINGS]: i.PreloadedUserSettings,
    [I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: r.FrecencyUserSettings
  };

function S(e, _) {
  return null != _ && e in T ? N(T[e], _) : null
}

function N(e, _) {
  if (null == _) return null;
  let E = (0, t.base64decode)(_);
  try {
    return e.fromBinary(E, s)
  } catch (e) {
    throw Error("Settings proto failed to deserialize (potentially corrupt): ".concat(e))
  }
}

function O(e) {
  return N(i.PreloadedUserSettings, e)
}

function A(e, _) {
  return R(T[e], _)
}

function R(e, _) {
  return (0, t.base64encode)(e.toBinary(_))
}

function l(e, _, E) {
  for (let e in _ = {
      ..._
    }, E) delete _[e];
  return e.mergePartial(_, E), _
}

function L(e, _, E) {
  return (null == _ || "null" === _) && (_ = "0"), !(_ in e.guilds) && (e.guilds[_] = i.GuildSettings.create()), E(e.guilds[_])
}

function u(e, _, E, t) {
  var o, n, r;
  return o = e, n = _, r = e => C(e, E, t), null == o.guilds && (o.guilds = i.AllGuildSettings.create()), L(o.guilds, n, r)
}

function C(e, _, E) {
  return !(_ in e.channels) && (e.channels[_] = i.ChannelSettings.create()), E(e.channels[_])
}

function D(e, _) {
  null == e.versions && (e.versions = a.Versions.create());
  let E = 0;
  for (let e of _) {
    if (e.version <= E) throw Error("Migrations are out of order or there is a duplicate version");
    E = e.version
  }
  let t = .1 > Math.random(),
    o = !1,
    n = [];
  for (let E of _) {
    var r, i;
    if (E.version <= e.versions.clientVersion) {
      t && (null === (r = E.cleanup) || void 0 === r || r.call(E));
      continue
    }
    let _ = E.run(e);
    if (e.versions.clientVersion = E.version, !1 === _) {
      null === (i = E.cleanup) || void 0 === i || i.call(E);
      continue
    }
    o = !0, null != E.cleanup && n.push(E.cleanup)
  }
  return {
    proto: e,
    isDirty: o,
    cleanupFuncs: n
  }
}

function c(e, _) {
  let E = Object.entries(e);
  if (E.length > _)
    for (E = n.sortBy(E, e => {
        let [_, E] = e;
        return E.recentUses[E.recentUses.length - 1]
      }).reverse(); E.length > _;) E.pop();
  let t = {};
  for (let [e, _] of E) {
    let E = r.FrecencyItem.create();
    E.frecency = _.frecency, E.recentUses = _.recentUses.filter(e => null != e && e > 0).map(String), E.score = Math.round(_.score), E.totalUses = _.totalUses, t[e] = E
  }
  return t
}