"use strict";
E.r(_), E.d(_, {
  default: function() {
    return l
  }
}), E("222007");
var t = E("689988"),
  o = E("374014"),
  n = E("373469"),
  r = E("271938"),
  i = E("568307"),
  a = E("718517"),
  I = E("448881"),
  s = E("374023"),
  T = E("2973"),
  S = E("227231");
let N = 5 * a.default.Millis.SECOND,
  O = 12 * a.default.Millis.HOUR,
  A = 1 * a.default.Millis.MINUTE;
class R extends t.default {
  maybeFetchCurrentQuests() {
    s.default.getCurrentConfig({
      location: "maybeFetchCurrentQuests"
    }, {
      autoTrackExposure: !1
    }).enabled && !T.default.isFetchingCurrentQuests && (0, I.fetchCurrentQuests)()
  }
  constructor(...e) {
    super(...e), this.instantiatedAt = Date.now(), this.sendHeartbeatIntervalIds = new Map, this.initiateHeartbeat = e => {
      let {
        questId: _,
        streamKey: E,
        applicationId: t
      } = e;

      function o() {
        null != n.default.getRTCStream(E) && 0 !== n.default.getViewerIds(E).length && (0, I.sendHeartbeat)({
          questId: _,
          streamKey: E,
          applicationId: t
        })
      }
      window.clearInterval(this.sendHeartbeatIntervalIds.get(E)), o(), this.sendHeartbeatIntervalIds.set(E, window.setInterval(o, A))
    }, this.terminateHeartbeat = e => {
      window.clearInterval(this.sendHeartbeatIntervalIds.get(e)), this.sendHeartbeatIntervalIds.delete(e)
    }, this.handleEnrollmentSuccess = e => {
      let {
        enrolledQuestUserStatus: {
          questId: _
        }
      } = e, E = n.default.getStreamerActiveStreamMetadata();
      if (null == E || null == E.pid) return;
      let t = i.default.getGameForPID(E.pid);
      if (null == t || null == t.id) return;
      let r = (0, S.getQuestByApplicationId)(t.id);
      if (null == r || r.id !== _) return;
      let a = n.default.getCurrentUserActiveStream();
      null != a && this.initiateHeartbeat({
        streamKey: (0, o.encodeStreamKey)(a),
        applicationId: r.config.applicationId,
        questId: r.id
      })
    }, this.handlePostConnectionOpen = () => {
      window.setTimeout(this.maybeFetchCurrentQuests, Math.floor(Math.random() * N))
    }, this.handleSendHeartbeatSuccess = e => {
      let {
        streamKey: _,
        userStatus: E
      } = e;
      null != E.completedAt && this.terminateHeartbeat(_)
    }, this.handleRunningGamesChange = () => {
      !(this.instantiatedAt + O > Date.now() || T.default.lastFetchedCurrentQuests + O > Date.now()) && this.maybeFetchCurrentQuests()
    }, this.handleStreamStart = e => {
      var _, E;
      let {
        streamType: t,
        guildId: n,
        channelId: a,
        pid: I
      } = e, s = null != I ? i.default.getGameForPID(I) : null;
      if (null == s) return;
      let T = null != s.id ? (0, S.getQuestByApplicationId)(s.id) : null;
      if ((null == T ? void 0 : null === (_ = T.userStatus) || void 0 === _ ? void 0 : _.enrolledAt) != null && (null == T ? void 0 : null === (E = T.userStatus) || void 0 === E ? void 0 : E.completedAt) == null) !(0, S.isQuestExpired)(T) && this.initiateHeartbeat({
        streamKey: (0, o.encodeStreamKey)({
          streamType: t,
          guildId: n,
          channelId: a,
          ownerId: r.default.getId()
        }),
        applicationId: T.config.applicationId,
        questId: T.id
      })
    }, this.handleStreamClose = e => {
      let {
        streamKey: _
      } = e;
      this.terminateHeartbeat(_)
    }, this.actions = {
      QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
      QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      STREAM_START: this.handleStreamStart,
      STREAM_CLOSE: this.handleStreamClose
    }
  }
}
var l = new R