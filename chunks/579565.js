"use strict";
n.r(t), n.d(t, {
  getDropsExperiment: function() {
    return f
  },
  getDropsExperimentForDrop: function() {
    return E
  },
  doesGameTitleMatchList: function() {
    return h
  },
  getEligibleGameLastSeenStartTimeSeconds: function() {
    return _
  },
  isDropGameDetected: function() {
    return S
  },
  getEligibilityByRunningGameDetection: function() {
    return T
  },
  getShowDropsNoticeBanner: function() {
    return N
  },
  getShowDropsEndedIncompleteBanner: function() {
    return I
  },
  getDropExpired: function() {
    return m
  },
  getDrop: function() {
    return A
  },
  getDropByQuestId: function() {
    return g
  },
  getDropsPartnerGameNameByQuestId: function() {
    return C
  },
  getPlatformLabel: function() {
    return R
  }
});
var l = n("866227"),
  a = n.n(l),
  s = n("845579"),
  i = n("546463"),
  r = n("568307"),
  o = n("718517"),
  u = n("931115"),
  d = n("411511"),
  c = n("782340");

function f(e) {
  let t = A(e);
  return null == t ? null : E(t)
}

function E(e) {
  if (e.dropsQuestId === d.FORTNITE_QUEST_ID) return u.DropsForGoLiveFortniteExperiment;
  return null
}

function h(e, t) {
  if (null == e) return !1;
  let n = i.default.getGameByName(e);
  return !!(null != n && t.some(e => {
    var t;
    return e.toLowerCase() === (null == n ? void 0 : null === (t = n.name) || void 0 === t ? void 0 : t.toLowerCase())
  })) || !1
}

function _() {
  return Math.floor(Date.now() / 1e3) - d.DROPS_ELIGIBILITY_SEEN_GAMES_LOOKBACK_SECONDS
}

function S(e, t, n) {
  var l, a, s, i;
  let r = A(e);
  if (null == r) return !1;
  let u = (l = t, a = d.PartnerGameNameToSearchTermMapping[e], null !== (s = l.find(e => h(e.name, a))) && void 0 !== s ? s : null);
  if (null != u) {
    ;
    let e = null !== (i = null == u ? void 0 : u.lastLaunched) && void 0 !== i ? i : 0;
    return n <= u.lastFocused || n * o.default.Millis.SECOND <= e
  }
  return !1
}

function T(e) {
  let t = r.default.getGamesSeen(!1);
  return S(e, t, _())
}

function p(e, t) {
  let {
    endDate: n
  } = e, l = a(), s = a(n, d.noticeBannerDateFormat), i = a(l.clone().add(e.dropsNoticeBannerDurationDays, "days").format(d.noticeBannerDateFormat)), r = s.isSameOrBefore(i), o = s.isBefore(l, "minute");
  return r && (t && !o || !t && o)
}

function N(e) {
  var t;
  let n = A(e);
  if (null == n || !(null === (t = f(e)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    }).dropsEnabled)) return !1;
  let l = s.DropsOptedOut.getSetting(),
    a = p(n, !0);
  return !l && a
}

function I(e) {
  var t, n;
  let l = A(e);
  if (null == l || !(null === (n = f(e)) || void 0 === n ? void 0 : null === (t = n.getCurrentConfig({
      location: "2"
    }, {
      autoTrackExposure: !1
    })) || void 0 === t ? void 0 : t.dropsEnabled)) return !1;
  let a = s.DropsOptedOut.getSetting(),
    i = p(l, !1);
  return m(l) && !a && i
}

function m(e) {
  let {
    endDate: t
  } = e, n = a(t, "YYYY-MM-DD HH:mm"), l = a();
  return l > n
}

function A(e) {
  let t = d.DROPS_GAMES[e];
  return t
}

function g(e) {
  let t = Object.values(d.DROPS_GAMES).find(t => t.dropsQuestId === e);
  return t
}

function C(e) {
  let t = Object.keys(d.DROPS_GAMES).find(t => d.DROPS_GAMES[t].dropsQuestId === e);
  return t
}

function R(e) {
  switch (e) {
    case "SWITCH":
      return c.default.Messages.DROPS_PLATFORM_SWITCH;
    case "PC":
      return c.default.Messages.DROPS_PLATFORM_PC;
    case "PLAYSTATION":
      return c.default.Messages.DROPS_PLATFORM_PLAYSTATION;
    case "XBOX":
      return c.default.Messages.DROPS_PLATFORM_XBOX;
    default:
      return ""
  }
}