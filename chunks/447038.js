"use strict";
n.r(t), n.d(t, {
  initializeMemberSafetyStoreV2: function() {
    return r
  },
  refreshMemberSafetyTimestampV2: function() {
    return s
  },
  updateMemberSafetyTablePaginationV2: function() {
    return a
  },
  updateSearchStateV2: function() {
    return o
  },
  getMemberSupplementalV2: function() {
    return u
  }
});
var l = n("913144"),
  i = n("835257");
async function r(e) {
  await l.default.dispatch({
    type: "INITIALIZE_MEMBER_SAFETY_STORE",
    guildId: e
  })
}

function s(e) {
  l.default.dispatch({
    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
    guildId: e
  })
}

function a(e, t) {
  let {
    continuationToken: n,
    ...i
  } = t;
  l.default.dispatch({
    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
    guildId: e,
    pagination: i
  })
}
async function o(e, t) {
  await l.default.dispatch({
    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
    guildId: e,
    searchState: t
  })
}
async function u(e, t) {
  let n = await (0, i.fetchMemberSupplemental)(e, t);
  return 0 === n.length ? [] : (await l.default.dispatch({
    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
    guildId: e,
    memberSupplementals: n
  }), n)
}