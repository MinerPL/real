"use strict";
n.r(t), n.d(t, {
  fetchCurrentQuests: function() {
    return o
  },
  sendHeartbeat: function() {
    return d
  },
  enrollInQuest: function() {
    return c
  }
});
var a = n("872717"),
  i = n("913144"),
  s = n("599417"),
  l = n("2973"),
  r = n("227231"),
  u = n("49111");
async function o() {
  i.default.dispatch({
    type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
  });
  try {
    let e = await a.default.get({
      url: u.Endpoints.QUESTS_CURRENT_QUESTS
    });
    i.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
      quests: e.body.map(r.questWithUserStatusFromServer)
    })
  } catch (e) {
    i.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
      error: new s.default(e)
    })
  }
}
async function d(e) {
  let {
    questId: t,
    streamKey: n,
    applicationId: l
  } = e;
  try {
    let e = await a.default.post({
      url: u.Endpoints.QUESTS_HEARTBEAT(t),
      body: {
        stream_key: n,
        application_id: l
      }
    });
    i.default.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
      userStatus: (0, r.questUserStatusFromServer)(e.body),
      applicationId: l,
      questId: t,
      streamKey: n
    })
  } catch (e) {
    i.default.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_FAILURE",
      error: new s.default(e),
      questId: t,
      streamKey: n
    })
  }
}
async function c(e) {
  let t = l.default.isEnrolling(e);
  if (!t) {
    i.default.dispatch({
      type: "QUESTS_ENROLL_BEGIN",
      questId: e
    });
    try {
      let t = await a.default.post({
        url: u.Endpoints.QUESTS_ENROLL(e)
      });
      i.default.dispatch({
        type: "QUESTS_ENROLL_SUCCESS",
        enrolledQuestUserStatus: (0, r.questUserStatusFromServer)(t.body)
      })
    } catch (t) {
      i.default.dispatch({
        type: "QUESTS_ENROLL_FAILURE",
        questId: e
      })
    }
  }
}