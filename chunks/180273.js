"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var s = n("866227"),
  l = n.n(s),
  a = n("446674"),
  i = n("862337"),
  r = n("913144"),
  o = n("374014"),
  u = n("271938"),
  d = n("568307"),
  c = n("718517"),
  f = n("376152"),
  E = n("579565"),
  _ = n("411511");
let T = null,
  I = null,
  m = {},
  N = {},
  p = _.TooltipActions.LOADING_INITIAL_PROGRESS,
  S = new i.Timeout,
  A = {
    completed: !1,
    initialProgressFetched: !1,
    interrupted: !1,
    retries: 0
  },
  C = e => {
    let {
      dropsQuestId: t,
      streamKey: n,
      game: s,
      completed: l,
      gameTitle: a
    } = A;
    !(null == t || null == a || l || null == s || null == n || S.isStarted()) && (e ? (0, f.sendHeartbeat)(t, n, s.pid) : S.start(1 * c.default.Millis.MINUTE, () => {
      (0, f.sendHeartbeat)(t, n, s.pid)
    }))
  },
  h = e => {
    A.retries = 0, A.completed = e.completed, A.initialProgressFetched = !0, A.progress = e.progress, A.lastCheckedAt = l.now(), p = A.completed ? _.TooltipActions.QUEST_COMPLETION : _.TooltipActions.TRACK_PROGRESS
  },
  g = (e, t, n) => {
    (!A.completed || e.dropsQuestId !== A.dropsQuestId) && (A.game = t, A.dropsQuestId = e.dropsQuestId, A.gameTitle = e.title, A.completed = !1, A.interrupted = !1, A.streamKey = n, A.retries = 0, A.lastCheckedAt = l.now(), S.start(5e3, () => C(!0)))
  };
class M extends a.default.Store {
  initialize() {
    this.waitFor(d.default)
  }
  getActivityPanelTooltipAction() {
    return p
  }
  getIsPartnerGameQuestComplete(e) {
    var t;
    let n = (0, E.getDrop)(e);
    if (null == n || null == I) return !1;
    let s = !!(null === (t = I[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at),
      l = A.completed && A.gameTitle === n.title || s;
    return l
  }
  get serverEligibleByQuestIds() {
    return m
  }
  get platformAvailability() {
    return T
  }
  get userStatus() {
    return I
  }
  get activityPanelTooltipAction() {
    return p
  }
  get enrolledDropsByQuestId() {
    return N
  }
  get hasInitialProgressFetched() {
    return A.initialProgressFetched
  }
  get isCurrentQuestCompleted() {
    return A.completed
  }
  get isCurrentQuestInterrupted() {
    return A.interrupted
  }
  get currentDropQuestGameTitle() {
    return A.gameTitle
  }
  get currentDropQuestStreamProgress() {
    let e = A.progress;
    if (null == e || null == e.steps || 0 === e.steps.length) return 0;
    let t = e.steps.find(e => "stream_length" === e.name);
    return null == t ? 0 : t.percent
  }
}
M.displayName = "DropsStore";
var O = new M(r.default, {
  DROPS_ELIGIBILITY_FETCH_SUCCESS: e => {
    m[e.dropsQuestId] = e.isEligible
  },
  DROPS_PLATFORM_AVAILABILITY_SUCCESS: e => {
    T = e.availablePlatforms.filter(e => _.DROPS_PLATFORMS.includes(e))
  },
  DROPS_USER_STATUS_FETCH_SUCCESS: e => {
    var t;
    I = null !== (t = e.codes) && void 0 !== t ? t : {}
  },
  DROPS_USER_STATUS_FETCH_FAILURE: e => {
    I = {}
  },
  DROPS_ENROLLED_USER_FETCH_SUCCESS: e => {
    N[e.dropsQuestId] = {
      isEnrolled: e.isEnrolled,
      enrolledUser: e.enrolledUser
    }
  },
  DROPS_FETCH_PROGRESS_SUCCESS: h,
  DROPS_FETCH_PROGRESS_FAILURE: e => {
    !A.initialProgressFetched && (A.initialProgressFetched = !0, p = _.TooltipActions.STREAM_CTA)
  },
  DROPS_HEARTBEAT_SUCCESS: e => {
    h(e), m[e.dropsQuestId] = !0, C()
  },
  DROPS_HEARTBEAT_FAILURE: e => {
    let {
      dropsQuestId: t,
      statusCode: n
    } = e;
    if (A.completed = !1, A.initialProgressFetched = !0, A.lastCheckedAt = l.now(), 429 === n && 0 === A.retries) {
      A.retries = A.retries + 1, C();
      return
    }
    p = _.TooltipActions.STREAM_CTA, 403 === n ? m[t] = !1 : A.interrupted = !0
  },
  DROPS_UNENROLL_USER: e => {
    I = null, m = {
      ...m
    }, delete m[e.dropsQuestId], N = {
      ...N
    }, delete N[e.dropsQuestId], A.dropsQuestId === e.dropsQuestId && (A = {
      completed: !1,
      initialProgressFetched: !1,
      interrupted: !1,
      retries: 0
    })
  },
  STREAM_CLOSE: () => {
    A.completed && (p = _.TooltipActions.QUEST_COMPLETION), A.interrupted = !1, A.retries = 0, S.stop()
  },
  STREAM_START: function(e) {
    var t;
    let {
      streamType: n,
      guildId: s,
      channelId: l,
      pid: a
    } = e, i = (0, o.encodeStreamKey)({
      streamType: n,
      guildId: s,
      channelId: l,
      ownerId: u.default.getId()
    });
    if (null == a) return;
    let c = d.default.getGameForPID(a);
    if (null == c) return;
    let T = Object.values(_.DROPS_GAMES).find(e => e.gameSearchTerm.find(e => {
      var t;
      return e.toLowerCase() === (null === (t = c.name) || void 0 === t ? void 0 : t.toLowerCase())
    }));
    if (null == T || (0, E.getDropExpired)(T)) return;
    let I = null === (t = (0, E.getDropsExperimentForDrop)(T)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    });
    if (null == I || !I.dropsEnabled) return;
    let m = I.autoEnrollment;
    null != N[T.dropsQuestId] && N[T.dropsQuestId].isEnrolled || m ? g(T, c, i) : r.default.wait(async () => {
      var e;
      await (0, f.fetchEnrolledUser)(T.dropsQuestId), (null === (e = N[T.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && g(T, c, i)
    })
  },
  LOGOUT: function() {
    m = {}, N = {}, I = {}, S.stop()
  }
})