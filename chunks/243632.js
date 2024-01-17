"use strict";
n.r(t), n.d(t, {
  useDropsExperiment: function() {
    return T
  },
  useShowEligibilityEnrollmentTooltip: function() {
    return I
  },
  useAnyDropsEnabled: function() {
    return m
  },
  useFetchInitialDropProgress: function() {
    return N
  },
  useActivityPanelDrop: function() {
    return p
  },
  useTrackDropsImpression: function() {
    return S
  }
});
var s = n("884691"),
  l = n("446674"),
  a = n("913144"),
  i = n("428958"),
  r = n("862853"),
  o = n("10641"),
  u = n("568307"),
  d = n("376152"),
  c = n("931115"),
  f = n("180273"),
  E = n("579565"),
  _ = n("411511");

function T(e) {
  let t, n;
  let s = c.DropsForGoLiveFortniteExperiment.useExperiment({
    location: "59cc4b_1"
  });
  if (null == e) return null;
  let l = (0, E.getDrop)(e);
  if (null == l) return null;
  if (l.dropsQuestId === _.FORTNITE_QUEST_ID) t = c.DropsForGoLiveFortniteExperiment, n = s;
  else t = null, n = null;
  return null == t || null == n ? null : {
    experiment: t,
    config: n,
    drop: l
  }
}

function I(e) {
  var t;
  let n = (0, l.useStateFromStores)([f.default], () => f.default.serverEligibleByQuestIds),
    i = T(e),
    r = function(e) {
      let t = (0, l.useStateFromStoresArray)([u.default], () => u.default.getGamesSeen(!1)),
        n = s.useMemo(() => (0, E.getEligibleGameLastSeenStartTimeSeconds)(), []),
        a = (0, E.isDropGameDetected)(e, t, n);
      return a
    }(e),
    o = null != i && n[i.drop.dropsQuestId];
  null != i && o && r && i.experiment.trackExposure({
    location: "ELIGIBILITY_ENROLLMENT_TOOLTIP"
  });
  let c = null == i ? void 0 : null === (t = i.config) || void 0 === t ? void 0 : t.dropsEnabled,
    _ = null == i ? void 0 : i.drop,
    I = null == _ || (0, E.getDropExpired)(_);
  return s.useEffect(() => {
    c && !I && r && null != _ && a.default.wait(() => {
      null == o && (0, d.fetchDropsEligibility)(_.dropsQuestId)
    })
  }, [o, _, c, I, r]), null != _ && !!c && !I && o && r
}

function m() {
  let e = T(_.PartnerGame.FORTNITE);
  return null == e ? void 0 : e.config.dropsEnabled
}

function N(e) {
  let t = T(e),
    n = null == t ? void 0 : t.drop,
    a = (0, l.useStateFromStores)([f.default], () => null != n && f.default.serverEligibleByQuestIds[n.dropsQuestId]),
    i = (0, l.useStateFromStores)([f.default], () => f.default.hasInitialProgressFetched);
  s.useEffect(() => {
    null != n && a && !i && (0, d.fetchProgress)(n.dropsQuestId)
  }, [n, a, i])
}

function p(e, t, n, s) {
  var a;
  let i = T(e),
    u = null == i ? void 0 : i.drop,
    d = (0, l.useStateFromStores)([f.default], () => null != u && f.default.serverEligibleByQuestIds[u.dropsQuestId]),
    c = (0, l.useStateFromStores)([f.default], () => f.default.getIsPartnerGameQuestComplete(e)),
    _ = (0, E.doesGameTitleMatchList)(null == t ? void 0 : t.name, null !== (a = null == u ? void 0 : u.gameSearchTerm) && void 0 !== a ? a : []),
    I = (0, r.useIsAnyContentShown)([n, s]),
    m = (0, o.useIsDismissibleContentDismissed)(s),
    N = null == u || (0, E.getDropExpired)(u),
    p = !!(null != u && !N && _ && (null == i ? void 0 : i.config.dropsEnabled) && d);
  return {
    partnerGame: p ? e : null,
    dropsActivityPanelExperienceBlocked: I,
    showDropsSparkles: !c && !m
  }
}

function S(e, t, n) {
  let s = (0, E.getDrop)(e);
  (0, i.default)({
    type: t,
    name: n,
    properties: {
      drops_quest_id: null == s ? void 0 : s.dropsQuestId,
      game_id: null == s ? void 0 : s.dropsGameId
    }
  })
}