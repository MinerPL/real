"use strict";
n.r(t), n.d(t, {
  fetchMemberCounts: function() {
    return d
  },
  requestMembersForRole: function() {
    return I
  }
});
var l = n("693566"),
  u = n.n(l),
  a = n("872717"),
  r = n("913144"),
  o = n("851387"),
  i = n("36402"),
  s = n("49111");
async function c(e) {
  try {
    r.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
      guildId: e
    });
    let t = await a.default.get({
        url: s.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
      }),
      n = t.body;
    r.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
      guildId: e,
      roleMemberCount: n
    })
  } catch (t) {
    r.default.dispatch({
      type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
      guildId: e
    })
  }
}
async function d(e) {
  i.default.shouldFetch(e) && await c(e)
}
let f = new u({
  maxAge: 1e4
});

function I(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    l = "".concat(e, "-").concat(t);
  if (!n || null == f.get(l)) {
    var u, r;
    return f.set(l, !0), u = e, r = t, a.default.get({
      url: s.Endpoints.GUILD_ROLE_MEMBER_IDS(u, r)
    }).then(e => (o.default.requestMembersById(u, e.body, !1), e.body.length))
  }
  return Promise.resolve(null)
}