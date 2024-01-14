"use strict";
l.r(t), l.d(t, {
  usePlatformAllowed: function() {
    return E
  },
  usePlatforms: function() {
    return T
  },
  useLegacyPlatformType: function() {
    return _
  }
}), l("222007");
var n = l("884691"),
  a = l("917351"),
  s = l.n(a),
  i = l("446674"),
  r = l("376556"),
  o = l("695702"),
  u = l("47319"),
  d = l("697218"),
  c = l("49111"),
  f = l("894282");
let m = {
    [c.PlatformTypes.INSTAGRAM]: ["1036753656588017764"]
  },
  p = new Map([
    [c.PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()]
  ]);

function E(e) {
  let {
    forUserProfile: t
  } = e, l = (0, i.useStateFromStores)([d.default], () => d.default.getCurrentUser()), n = o.PlayStationVoiceExperiment.useExperiment({
    location: "f2f7ef_1"
  }, {
    autoTrackExposure: !1
  }).allowPlayStationStaging;
  return e => {
    var a;
    return e.type === c.PlatformTypes.PLAYSTATION_STAGING ? n : !!(void 0 !== l && (null === (a = m[e.type]) || void 0 === a ? void 0 : a.includes(l.id))) || !!t || e.enabled
  }
}

function T() {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.getAccounts()),
    t = E({
      forUserProfile: !1
    }),
    l = n.useMemo(() => {
      let t = new Set;
      return e.forEach(e => t.add(e.type)), t
    }, [e]);
  return s.sortBy(r.default.filter(t), [e => {
    var t;
    return !(p.has(e.type) && Date.now() < (null !== (t = p.get(e.type)) && void 0 !== t ? t : 0) + 2592e6)
  }, e => l.has(e.type), e => e.hasMetadata, e => !c.ACTIVITY_PLATFORM_TYPES.has(e.type), e => e.name])
}

function _(e) {
  let [t, l] = n.useState(!1);

  function a(e) {
    let {
      key: t
    } = e;
    t === f.KeyboardKeysUpdated.SHIFT && l(!0)
  }

  function s(e) {
    let {
      key: t
    } = e;
    t === f.KeyboardKeysUpdated.SHIFT && l(!1)
  }
  return (n.useEffect(() => (window.addEventListener("keydown", a), window.addEventListener("keyup", s), () => {
    window.removeEventListener("keydown", a), window.removeEventListener("keyup", s)
  }), []), t && e === c.PlatformTypes.TWITTER) ? c.PlatformTypes.TWITTER_LEGACY : e
}