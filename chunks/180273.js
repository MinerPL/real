"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var l = n("866227"),
  a = n.n(l),
  s = n("446674"),
  i = n("862337"),
  r = n("913144"),
  o = n("374014"),
  u = n("271938"),
  d = n("568307"),
  c = n("376152"),
  f = n("579565"),
  E = n("411511");
let h = null,
  _ = null,
  S = {},
  T = {},
  p = E.TooltipActions.LOADING_INITIAL_PROGRESS,
  N = new i.Timeout,
  I = {
    completed: !1,
    initialProgressFetched: !1,
    interrupted: !1,
    retries: 0
  },
  m = e => {
    let {
      dropsQuestId: t,
      streamKey: n,
      game: l,
      completed: a,
      gameTitle: s
    } = I;
    !(null == t || null == s || a || null == l || null == n || N.isStarted()) && (e ? (0, c.sendHeartbeat)(t, n, l.pid) : N.start(6e4, () => {
      (0, c.sendHeartbeat)(t, n, l.pid)
    }))
  },
  g = e => {
    I.retries = 0, I.completed = e.completed, I.initialProgressFetched = !0, I.progress = e.progress, I.lastCheckedAt = a.now(), p = I.completed ? E.TooltipActions.QUEST_COMPLETION : E.TooltipActions.TRACK_PROGRESS
  },
  A = (e, t, n) => {
    (!I.completed || e.dropsQuestId !== I.dropsQuestId) && (I.game = t, I.dropsQuestId = e.dropsQuestId, I.gameTitle = e.title, I.completed = !1, I.interrupted = !1, I.streamKey = n, I.retries = 0, I.lastCheckedAt = a.now(), N.start(5e3, () => m(!0)))
  };
class C extends s.default.Store {
  initialize() {
    this.waitFor(d.default)
  }
  getActivityPanelTooltipAction() {
    return p
  }
  getIsPartnerGameQuestComplete(e) {
    var t;
    let n = (0, f.getDrop)(e);
    if (null == n || null == _) return !1;
    let l = !!(null === (t = _[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at),
      a = I.completed && I.gameTitle === n.title || l;
    return a
  }
  get serverEligibleByQuestIds() {
    return S
  }
  get platformAvailability() {
    return h
  }
  get userStatus() {
    return _
  }
  get activityPanelTooltipAction() {
    return p
  }
  get enrolledDropsByQuestId() {
    return T
  }
  get hasInitialProgressFetched() {
    return I.initialProgressFetched
  }
  get isCurrentQuestCompleted() {
    return I.completed
  }
  get isCurrentQuestInterrupted() {
    return I.interrupted
  }
  get currentDropQuestGameTitle() {
    return I.gameTitle
  }
  get currentDropQuestStreamProgress() {
    let e = I.progress;
    if (null == e || null == e.steps || 0 === e.steps.length) return 0;
    let t = e.steps.find(e => "stream_length" === e.name);
    return null == t ? 0 : t.percent
  }
}
C.displayName = "DropsStore";
var R = new C(r.default, {
  DROPS_ELIGIBILITY_FETCH_SUCCESS: e => {
    S[e.dropsQuestId] = e.isEligible
  },
  DROPS_PLATFORM_AVAILABILITY_SUCCESS: e => {
    h = e.availablePlatforms.filter(e => E.DROPS_PLATFORMS.includes(e))
  },
  DROPS_USER_STATUS_FETCH_SUCCESS: e => {
    var t;
    _ = null !== (t = e.codes) && void 0 !== t ? t : {}
  },
  DROPS_USER_STATUS_FETCH_FAILURE: e => {
    _ = {}
  },
  DROPS_ENROLLED_USER_FETCH_SUCCESS: e => {
    T[e.dropsQuestId] = {
      isEnrolled: e.isEnrolled,
      enrolledUser: e.enrolledUser
    }
  },
  DROPS_FETCH_PROGRESS_SUCCESS: g,
  DROPS_FETCH_PROGRESS_FAILURE: e => {
    !I.initialProgressFetched && (I.initialProgressFetched = !0, p = E.TooltipActions.STREAM_CTA)
  },
  DROPS_HEARTBEAT_SUCCESS: e => {
    g(e), S[e.dropsQuestId] = !0, m()
  },
  DROPS_HEARTBEAT_FAILURE: e => {
    let {
      dropsQuestId: t,
      statusCode: n
    } = e;
    if (I.completed = !1, I.initialProgressFetched = !0, I.lastCheckedAt = a.now(), 429 === n && 0 === I.retries) {
      I.retries = I.retries + 1, m();
      return
    }
    p = E.TooltipActions.STREAM_CTA, 403 === n ? S[t] = !1 : I.interrupted = !0
  },
  DROPS_UNENROLL_USER: e => {
    _ = null, S = {
      ...S
    }, delete S[e.dropsQuestId], T = {
      ...T
    }, delete T[e.dropsQuestId], I.dropsQuestId === e.dropsQuestId && (I = {
      completed: !1,
      initialProgressFetched: !1,
      interrupted: !1,
      retries: 0
    })
  },
  STREAM_CLOSE: () => {
    I.completed && (p = E.TooltipActions.QUEST_COMPLETION), I.interrupted = !1, I.retries = 0, N.stop()
  },
  STREAM_START: function(e) {
    var t;
    let {
      streamType: n,
      guildId: l,
      channelId: a,
      pid: s
    } = e, i = (0, o.encodeStreamKey)({
      streamType: n,
      guildId: l,
      channelId: a,
      ownerId: u.default.getId()
    });
    if (null == s) return;
    let h = d.default.getGameForPID(s);
    if (null == h) return;
    let _ = Object.values(E.DROPS_GAMES).find(e => e.gameSearchTerm.find(e => {
      var t;
      return e.toLowerCase() === (null === (t = h.name) || void 0 === t ? void 0 : t.toLowerCase())
    }));
    if (null == _ || (0, f.getDropExpired)(_)) return;
    let S = null === (t = (0, f.getDropsExperimentForDrop)(_)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    });
    if (null == S || !S.dropsEnabled) return;
    let p = S.autoEnrollment;
    null != T[_.dropsQuestId] && T[_.dropsQuestId].isEnrolled || p ? A(_, h, i) : r.default.wait(async () => {
      var e;
      await (0, c.fetchEnrolledUser)(_.dropsQuestId), (null === (e = T[_.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && A(_, h, i)
    })
  },
  LOGOUT: function() {
    S = {}, T = {}, _ = {}, N.stop()
  }
})