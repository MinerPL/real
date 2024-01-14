"use strict";
i.r(t), i.d(t, {
  registerFetchedSupplementals: function() {
    return f
  },
  JoinSourceType: function() {
    return n
  },
  IntegrationType: function() {
    return s
  },
  fetchMemberSupplemental: function() {
    return b
  }
}), i("424973");
var r, n, s, u, a, l, h = i("872717"),
  o = i("49111");
let d = {};

function m(e, t) {
  return e + t
}

function c(e, t) {
  return t.map(t => e + t)
}

function _(e) {
  return e.split("-")[1]
}(u = r || (r = {}))[u.FAILED = 0] = "FAILED", u[u.UNFETCHED = 1] = "UNFETCHED", u[u.PENDING = 2] = "PENDING", u[u.SUCCEEDED = 3] = "SUCCEEDED", u[u.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

function M(e, t) {
  e.forEach(e => {
    d[e] = t
  })
}

function f(e, t) {
  t.forEach(t => (function(e, t, i) {
    d[e + t] = 3
  })(e, t, 3))
}

function g(e) {
  return {
    userId: e.user_id,
    sourceInviteCode: e.source_invite_code,
    joinSourceType: e.join_source_type,
    inviterId: e.inviter_id,
    integrationType: e.integration_type
  }
}
async function b(e, t) {
  let i = c(e, t),
    r = i.filter(e => d[e] <= 1).map(_);
  if (0 === r.length) return [];
  M(i, 2);
  try {
    let t = await h.default.post({
      url: o.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
      body: {
        user_ids: r
      }
    });
    if (!Array.isArray(t.body)) return M(i, 0), [];
    let n = t.body.map(g),
      s = [];
    n.forEach(e => {
      let {
        userId: t
      } = e;
      return s.push(t)
    });
    let u = c(e, s),
      a = r.filter(e => !s.includes(e)),
      l = c(e, a);
    return M(u, 3), M(l, 0), n
  } catch (e) {
    M(i, 0)
  }
  return []
}(a = n || (n = {}))[a.UNSPECIFIED = 0] = "UNSPECIFIED", a[a.BOT = 1] = "BOT", a[a.INTEGRATION = 2] = "INTEGRATION", a[a.DISCOVERY = 3] = "DISCOVERY", a[a.HUB = 4] = "HUB", a[a.INVITE = 5] = "INVITE", a[a.VANITY_URL = 6] = "VANITY_URL", (l = s || (s = {})).DISCORD = "discord", l.TWITCH = "twitch", l.YOUTUBE = "youtube", l.GUILD_SUBSCRIPTION = "guild_subscription"