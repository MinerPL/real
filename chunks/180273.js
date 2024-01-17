"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
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
  c = n("718517"),
  f = n("376152"),
  E = n("579565"),
  h = n("411511");
let _ = null,
  S = null,
  T = {},
  p = {},
  N = h.TooltipActions.LOADING_INITIAL_PROGRESS,
  I = new i.Timeout,
  m = {
    completed: !1,
    initialProgressFetched: !1,
    interrupted: !1,
    retries: 0
  },
  A = e => {
    let {
      dropsQuestId: t,
      streamKey: n,
      game: l,
      completed: a,
      gameTitle: s
    } = m;
    !(null == t || null == s || a || null == l || null == n || I.isStarted()) && (e ? (0, f.sendHeartbeat)(t, n, l.pid) : I.start(1 * c.default.Millis.MINUTE, () => {
      (0, f.sendHeartbeat)(t, n, l.pid)
    }))
  },
  g = e => {
    m.retries = 0, m.completed = e.completed, m.initialProgressFetched = !0, m.progress = e.progress, m.lastCheckedAt = a.now(), N = m.completed ? h.TooltipActions.QUEST_COMPLETION : h.TooltipActions.TRACK_PROGRESS
  },
  C = (e, t, n) => {
    (!m.completed || e.dropsQuestId !== m.dropsQuestId) && (m.game = t, m.dropsQuestId = e.dropsQuestId, m.gameTitle = e.title, m.completed = !1, m.interrupted = !1, m.streamKey = n, m.retries = 0, m.lastCheckedAt = a.now(), I.start(5e3, () => A(!0)))
  };
class R extends s.default.Store {
  initialize() {
    this.waitFor(d.default)
  }
  getActivityPanelTooltipAction() {
    return N
  }
  getIsPartnerGameQuestComplete(e) {
    var t;
    let n = (0, E.getDrop)(e);
    if (null == n || null == S) return !1;
    let l = !!(null === (t = S[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at),
      a = m.completed && m.gameTitle === n.title || l;
    return a
  }
  get serverEligibleByQuestIds() {
    return T
  }
  get platformAvailability() {
    return _
  }
  get userStatus() {
    return S
  }
  get activityPanelTooltipAction() {
    return N
  }
  get enrolledDropsByQuestId() {
    return p
  }
  get hasInitialProgressFetched() {
    return m.initialProgressFetched
  }
  get isCurrentQuestCompleted() {
    return m.completed
  }
  get isCurrentQuestInterrupted() {
    return m.interrupted
  }
  get currentDropQuestGameTitle() {
    return m.gameTitle
  }
  get currentDropQuestStreamProgress() {
    let e = m.progress;
    if (null == e || null == e.steps || 0 === e.steps.length) return 0;
    let t = e.steps.find(e => "stream_length" === e.name);
    return null == t ? 0 : t.percent
  }
}
R.displayName = "DropsStore";
var M = new R(r.default, {
  DROPS_ELIGIBILITY_FETCH_SUCCESS: e => {
    T[e.dropsQuestId] = e.isEligible
  },
  DROPS_PLATFORM_AVAILABILITY_SUCCESS: e => {
    _ = e.availablePlatforms.filter(e => h.DROPS_PLATFORMS.includes(e))
  },
  DROPS_USER_STATUS_FETCH_SUCCESS: e => {
    var t;
    S = null !== (t = e.codes) && void 0 !== t ? t : {}
  },
  DROPS_USER_STATUS_FETCH_FAILURE: e => {
    S = {}
  },
  DROPS_ENROLLED_USER_FETCH_SUCCESS: e => {
    p[e.dropsQuestId] = {
      isEnrolled: e.isEnrolled,
      enrolledUser: e.enrolledUser
    }
  },
  DROPS_FETCH_PROGRESS_SUCCESS: g,
  DROPS_FETCH_PROGRESS_FAILURE: e => {
    !m.initialProgressFetched && (m.initialProgressFetched = !0, N = h.TooltipActions.STREAM_CTA)
  },
  DROPS_HEARTBEAT_SUCCESS: e => {
    g(e), T[e.dropsQuestId] = !0, A()
  },
  DROPS_HEARTBEAT_FAILURE: e => {
    let {
      dropsQuestId: t,
      statusCode: n
    } = e;
    if (m.completed = !1, m.initialProgressFetched = !0, m.lastCheckedAt = a.now(), 429 === n && 0 === m.retries) {
      m.retries = m.retries + 1, A();
      return
    }
    N = h.TooltipActions.STREAM_CTA, 403 === n ? T[t] = !1 : m.interrupted = !0
  },
  DROPS_UNENROLL_USER: e => {
    S = null, T = {
      ...T
    }, delete T[e.dropsQuestId], p = {
      ...p
    }, delete p[e.dropsQuestId], m.dropsQuestId === e.dropsQuestId && (m = {
      completed: !1,
      initialProgressFetched: !1,
      interrupted: !1,
      retries: 0
    })
  },
  STREAM_CLOSE: () => {
    m.completed && (N = h.TooltipActions.QUEST_COMPLETION), m.interrupted = !1, m.retries = 0, I.stop()
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
    let c = d.default.getGameForPID(s);
    if (null == c) return;
    let _ = Object.values(h.DROPS_GAMES).find(e => e.gameSearchTerm.find(e => {
      var t;
      return e.toLowerCase() === (null === (t = c.name) || void 0 === t ? void 0 : t.toLowerCase())
    }));
    if (null == _ || (0, E.getDropExpired)(_)) return;
    let S = null === (t = (0, E.getDropsExperimentForDrop)(_)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    });
    if (null == S || !S.dropsEnabled) return;
    let T = S.autoEnrollment;
    null != p[_.dropsQuestId] && p[_.dropsQuestId].isEnrolled || T ? C(_, c, i) : r.default.wait(async () => {
      var e;
      await (0, f.fetchEnrolledUser)(_.dropsQuestId), (null === (e = p[_.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && C(_, c, i)
    })
  },
  LOGOUT: function() {
    T = {}, p = {}, S = {}, I.stop()
  }
})