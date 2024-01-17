"use strict";
n.r(t), n.d(t, {
  initializeMemberSafetyStoreV2: function() {
    return l
  },
  refreshMemberSafetyTimestampV2: function() {
    return u
  },
  updateMemberSafetyTablePaginationV2: function() {
    return o
  },
  updateSearchStateV2: function() {
    return s
  },
  getMemberSupplementalV2: function() {
    return a
  }
});
var i = n("913144"),
  r = n("835257");
async function l(e) {
  await i.default.dispatch({
    type: "INITIALIZE_MEMBER_SAFETY_STORE",
    guildId: e
  })
}

function u(e) {
  i.default.dispatch({
    type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH",
    guildId: e
  })
}

function o(e, t) {
  let {
    continuationToken: n,
    ...r
  } = t;
  i.default.dispatch({
    type: "MEMBER_SAFETY_PAGINATION_UPDATE",
    guildId: e,
    pagination: r
  })
}
async function s(e, t) {
  await i.default.dispatch({
    type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE",
    guildId: e,
    searchState: t
  })
}
async function a(e, t) {
  let n = await (0, r.fetchMemberSupplemental)(e, t);
  return 0 === n.length ? [] : (await i.default.dispatch({
    type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
    guildId: e,
    memberSupplementals: n
  }), n)
}