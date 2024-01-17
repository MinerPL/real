"use strict";
n.r(t), n.d(t, {
  fetchDropsEligibility: function() {
    return r
  },
  fetchCodePlatformAvailability: function() {
    return o
  },
  claimDropsRewardCode: function() {
    return u
  },
  fetchDropsUserStatus: function() {
    return d
  },
  unenrollDropsUser: function() {
    return c
  },
  fetchEnrolledUser: function() {
    return f
  },
  enrollDropsUser: function() {
    return E
  },
  sendHeartbeat: function() {
    return _
  },
  fetchProgress: function() {
    return T
  }
});
var s = n("872717"),
  l = n("913144"),
  a = n("373469"),
  i = n("49111");
let r = async e => {
  let t = !1;
  try {
    let n = await s.default.get({
      url: i.Endpoints.DROPS_ELIGIBILITY,
      query: {
        drops_quest_id: e
      }
    });
    t = n.body.eligible
  } catch (e) {
    t = !1
  }
  l.default.dispatch({
    type: "DROPS_ELIGIBILITY_FETCH_SUCCESS",
    isEligible: t,
    dropsQuestId: e
  })
}, o = async e => {
  let t = [];
  try {
    let n = await s.default.get({
      url: i.Endpoints.DROPS_PLATFORM_AVAILABILITY,
      query: {
        drops_quest_id: e
      }
    });
    t = n.body.available_platforms
  } catch (e) {
    t = []
  }
  l.default.dispatch({
    type: "DROPS_PLATFORM_AVAILABILITY_SUCCESS",
    availablePlatforms: t
  })
}, u = async (e, t) => {
  try {
    let n = await s.default.post({
      url: i.Endpoints.DROPS_CLAIM_REWARD_CODE,
      query: {
        drops_quest_id: e,
        platform: t
      }
    });
    return l.default.dispatch({
      type: "DROPS_REWARD_CODE_CLAIM_SUCCESS",
      rewardCode: n.body.code
    }), n.body.code
  } catch (e) {
    throw e
  }
}, d = async () => {
  try {
    let e = await s.default.get({
      url: i.Endpoints.DROPS_USER_STATUS
    });
    l.default.dispatch({
      type: "DROPS_USER_STATUS_FETCH_SUCCESS",
      codes: e.body
    })
  } catch (e) {
    l.default.dispatch({
      type: "DROPS_USER_STATUS_FETCH_FAILURE"
    })
  }
}, c = async e => {
  await s.default.delete({
    url: i.Endpoints.DROPS_ENROLL_USER,
    query: {
      drops_quest_id: e
    }
  }), l.default.dispatch({
    type: "DROPS_UNENROLL_USER",
    dropsQuestId: e
  }), await d()
}, f = async e => {
  let t = await s.default.get({
    url: i.Endpoints.DROPS_ENROLL_USER,
    query: {
      drops_quest_id: e
    }
  });
  await l.default.dispatch({
    type: "DROPS_ENROLLED_USER_FETCH_SUCCESS",
    enrolledUser: t.body.user,
    isEnrolled: t.body.enrolled,
    dropsQuestId: e
  })
}, E = async e => {
  await s.default.post({
    url: i.Endpoints.DROPS_ENROLL_USER,
    query: {
      drops_quest_id: e
    }
  }), l.default.dispatch({
    type: "DROPS_ENROLL_SUCCESS"
  })
}, _ = async (e, t, n) => {
  let r = a.default.getViewerIds(t);
  try {
    let a = await s.default.post({
      url: i.Endpoints.DROPS_HEARTBEAT(e),
      query: {
        stream_key: t,
        application_id: n,
        viewer_count: r.length
      },
      retries: 2
    });
    l.default.dispatch({
      type: "DROPS_HEARTBEAT_SUCCESS",
      dropsQuestId: e,
      completed: a.body.completed,
      progress: a.body.progress
    })
  } catch (t) {
    l.default.dispatch({
      type: "DROPS_HEARTBEAT_FAILURE",
      dropsQuestId: e,
      statusCode: null == t ? void 0 : t.status
    })
  }
}, T = async e => {
  try {
    let t = await s.default.get({
      url: i.Endpoints.DROPS_PROGRESS(e)
    });
    l.default.dispatch({
      type: "DROPS_FETCH_PROGRESS_SUCCESS",
      dropsQuestId: e,
      completed: t.body.completed,
      progress: t.body.progress
    })
  } catch (t) {
    l.default.dispatch({
      type: "DROPS_FETCH_PROGRESS_FAILURE",
      dropsQuestId: e
    })
  }
}