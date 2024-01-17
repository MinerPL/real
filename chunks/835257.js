"use strict";
r.r(t), r.d(t, {
  registerFetchedSupplementals: function() {
    return I
  },
  JoinSourceType: function() {
    return s
  },
  IntegrationType: function() {
    return u
  },
  fetchMemberSupplemental: function() {
    return S
  }
}), r("424973");
var n, s, u, i, l, o, a = r("872717"),
  c = r("49111");
let d = {};

function f(e, t) {
  return e + t
}

function h(e, t) {
  return t.map(t => e + t)
}

function p(e) {
  return e.split("-")[1]
}(i = n || (n = {}))[i.FAILED = 0] = "FAILED", i[i.UNFETCHED = 1] = "UNFETCHED", i[i.PENDING = 2] = "PENDING", i[i.SUCCEEDED = 3] = "SUCCEEDED", i[i.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

function E(e, t) {
  e.forEach(e => {
    d[e] = t
  })
}

function I(e, t) {
  t.forEach(t => (function(e, t, r) {
    d[e + t] = 3
  })(e, t, 3))
}

function v(e) {
  return {
    userId: e.user_id,
    sourceInviteCode: e.source_invite_code,
    joinSourceType: e.join_source_type,
    inviterId: e.inviter_id,
    integrationType: e.integration_type
  }
}
async function S(e, t) {
  let r = h(e, t),
    n = r.filter(e => d[e] <= 1).map(p);
  if (0 === n.length) return [];
  E(r, 2);
  try {
    let t = await a.default.post({
      url: c.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
      body: {
        user_ids: n
      }
    });
    if (!Array.isArray(t.body)) return E(r, 0), [];
    let s = t.body.map(v),
      u = [];
    s.forEach(e => {
      let {
        userId: t
      } = e;
      return u.push(t)
    });
    let i = h(e, u),
      l = n.filter(e => !u.includes(e)),
      o = h(e, l);
    return E(i, 3), E(o, 0), s
  } catch (e) {
    E(r, 0)
  }
  return []
}(l = s || (s = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.BOT = 1] = "BOT", l[l.INTEGRATION = 2] = "INTEGRATION", l[l.DISCOVERY = 3] = "DISCOVERY", l[l.HUB = 4] = "HUB", l[l.INVITE = 5] = "INVITE", l[l.VANITY_URL = 6] = "VANITY_URL", (o = u || (u = {})).DISCORD = "discord", o.TWITCH = "twitch", o.YOUTUBE = "youtube", o.GUILD_SUBSCRIPTION = "guild_subscription"