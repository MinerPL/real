"use strict";
l.r(t), l.d(t, {
  usePlatformAllowed: function() {
    return _
  },
  usePlatforms: function() {
    return S
  },
  useLegacyPlatformType: function() {
    return h
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
  c = l("718517"),
  f = l("49111"),
  m = l("894282");
let p = {
    [f.PlatformTypes.INSTAGRAM]: ["1036753656588017764"]
  },
  E = new Map([
    [f.PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()]
  ]),
  T = 30 * c.default.Millis.DAY;

function _(e) {
  let {
    forUserProfile: t
  } = e, l = (0, i.useStateFromStores)([d.default], () => d.default.getCurrentUser()), n = o.PlayStationVoiceExperiment.useExperiment({
    location: "f2f7ef_1"
  }, {
    autoTrackExposure: !1
  }).allowPlayStationStaging;
  return e => {
    var a;
    return e.type === f.PlatformTypes.PLAYSTATION_STAGING ? n : !!(void 0 !== l && (null === (a = p[e.type]) || void 0 === a ? void 0 : a.includes(l.id))) || !!t || e.enabled
  }
}

function S() {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.getAccounts()),
    t = _({
      forUserProfile: !1
    }),
    l = n.useMemo(() => {
      let t = new Set;
      return e.forEach(e => t.add(e.type)), t
    }, [e]);
  return s.sortBy(r.default.filter(t), [e => {
    var t;
    return !(E.has(e.type) && Date.now() < (null !== (t = E.get(e.type)) && void 0 !== t ? t : 0) + T)
  }, e => l.has(e.type), e => e.hasMetadata, e => !f.ACTIVITY_PLATFORM_TYPES.has(e.type), e => e.name])
}

function h(e) {
  let [t, l] = n.useState(!1);

  function a(e) {
    let {
      key: t
    } = e;
    t === m.KeyboardKeysUpdated.SHIFT && l(!0)
  }

  function s(e) {
    let {
      key: t
    } = e;
    t === m.KeyboardKeysUpdated.SHIFT && l(!1)
  }
  return (n.useEffect(() => (window.addEventListener("keydown", a), window.addEventListener("keyup", s), () => {
    window.removeEventListener("keydown", a), window.removeEventListener("keyup", s)
  }), []), t && e === f.PlatformTypes.TWITTER) ? f.PlatformTypes.TWITTER_LEGACY : e
}