"use strict";
n.r(t), n.d(t, {
  getDropsExperiment: function() {
    return f
  },
  getDropsExperimentForDrop: function() {
    return E
  },
  doesGameTitleMatchList: function() {
    return _
  },
  getEligibleGameLastSeenStartTimeSeconds: function() {
    return T
  },
  isDropGameDetected: function() {
    return I
  },
  getEligibilityByRunningGameDetection: function() {
    return m
  },
  getShowDropsNoticeBanner: function() {
    return p
  },
  getShowDropsEndedIncompleteBanner: function() {
    return S
  },
  getDropExpired: function() {
    return A
  },
  getDrop: function() {
    return C
  },
  getDropByQuestId: function() {
    return h
  },
  getDropsPartnerGameNameByQuestId: function() {
    return g
  },
  getPlatformLabel: function() {
    return M
  }
});
var s = n("866227"),
  l = n.n(s),
  a = n("845579"),
  i = n("546463"),
  r = n("568307"),
  o = n("718517"),
  u = n("931115"),
  d = n("411511"),
  c = n("782340");

function f(e) {
  let t = C(e);
  return null == t ? null : E(t)
}

function E(e) {
  if (e.dropsQuestId === d.FORTNITE_QUEST_ID) return u.DropsForGoLiveFortniteExperiment;
  return null
}

function _(e, t) {
  if (null == e) return !1;
  let n = i.default.getGameByName(e);
  return !!(null != n && t.some(e => {
    var t;
    return e.toLowerCase() === (null == n ? void 0 : null === (t = n.name) || void 0 === t ? void 0 : t.toLowerCase())
  })) || !1
}

function T() {
  return Math.floor(Date.now() / 1e3) - d.DROPS_ELIGIBILITY_SEEN_GAMES_LOOKBACK_SECONDS
}

function I(e, t, n) {
  var s, l, a, i;
  let r = C(e);
  if (null == r) return !1;
  let u = (s = t, l = d.PartnerGameNameToSearchTermMapping[e], null !== (a = s.find(e => _(e.name, l))) && void 0 !== a ? a : null);
  if (null != u) {
    ;
    let e = null !== (i = null == u ? void 0 : u.lastLaunched) && void 0 !== i ? i : 0;
    return n <= u.lastFocused || n * o.default.Millis.SECOND <= e
  }
  return !1
}

function m(e) {
  let t = r.default.getGamesSeen(!1);
  return I(e, t, T())
}

function N(e, t) {
  let {
    endDate: n
  } = e, s = l(), a = l(n, d.noticeBannerDateFormat), i = l(s.clone().add(e.dropsNoticeBannerDurationDays, "days").format(d.noticeBannerDateFormat)), r = a.isSameOrBefore(i), o = a.isBefore(s, "minute");
  return r && (t && !o || !t && o)
}

function p(e) {
  var t;
  let n = C(e);
  if (null == n || !(null === (t = f(e)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    }).dropsEnabled)) return !1;
  let s = a.DropsOptedOut.getSetting(),
    l = N(n, !0);
  return !s && l
}

function S(e) {
  var t, n;
  let s = C(e);
  if (null == s || !(null === (n = f(e)) || void 0 === n ? void 0 : null === (t = n.getCurrentConfig({
      location: "2"
    }, {
      autoTrackExposure: !1
    })) || void 0 === t ? void 0 : t.dropsEnabled)) return !1;
  let l = a.DropsOptedOut.getSetting(),
    i = N(s, !1);
  return A(s) && !l && i
}

function A(e) {
  let {
    endDate: t
  } = e, n = l(t, "YYYY-MM-DD HH:mm"), s = l();
  return s > n
}

function C(e) {
  let t = d.DROPS_GAMES[e];
  return t
}

function h(e) {
  let t = Object.values(d.DROPS_GAMES).find(t => t.dropsQuestId === e);
  return t
}

function g(e) {
  let t = Object.keys(d.DROPS_GAMES).find(t => d.DROPS_GAMES[t].dropsQuestId === e);
  return t
}

function M(e) {
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