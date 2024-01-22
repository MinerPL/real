"use strict";
r.r(t), r.d(t, {
  registerFetchedSupplementals: function() {
    return g
  },
  JoinSourceType: function() {
    return s
  },
  getJoinSourceTypeLabel: function() {
    return v
  },
  getIntegrationLabel: function() {
    return M
  },
  useGetIntegrationIconString: function() {
    return O
  },
  fetchMemberSupplemental: function() {
    return A
  }
}), r("424973");
var n, s, u, l, i, a, o = r("872717"),
  c = r("819855"),
  d = r("841098"),
  f = r("376556"),
  E = r("572943"),
  h = r("49111"),
  _ = r("782340");
let I = {};

function p(e, t) {
  return e + t
}

function T(e, t) {
  return t.map(t => e + t)
}

function S(e) {
  return e.split("-")[1]
}(l = n || (n = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

function N(e, t) {
  e.forEach(e => {
    I[e] = t
  })
}

function g(e, t) {
  t.forEach(t => (function(e, t, r) {
    I[e + t] = 3
  })(e, t, 3))
}(i = s || (s = {}))[i.UNSPECIFIED = 0] = "UNSPECIFIED", i[i.BOT = 1] = "BOT", i[i.INTEGRATION = 2] = "INTEGRATION", i[i.DISCOVERY = 3] = "DISCOVERY", i[i.HUB = 4] = "HUB", i[i.INVITE = 5] = "INVITE", i[i.VANITY_URL = 6] = "VANITY_URL";
let v = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
  switch (e) {
    case 1:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
    case 2:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
    case 3:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
    case 4:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
    case 5:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
    case 6:
      if (null != t) return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
        vanityUrl: t
      });
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
    default:
      return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
  }
};
(a = u || (u = {})).DISCORD = "discord", a.TWITCH = "twitch", a.YOUTUBE = "youtube", a.GUILD_SUBSCRIPTION = "guild_subscription";
let M = e => {
    switch (e) {
      case "twitch":
        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
      case "youtube":
        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
      default:
        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
    }
  },
  O = e => {
    let t = f.default.get((0, E.useLegacyPlatformType)(e)),
      r = (0, d.default)();
    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, c.isThemeDark)(r) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
  };

function R(e) {
  return {
    userId: e.user_id,
    sourceInviteCode: e.source_invite_code,
    joinSourceType: e.join_source_type,
    inviterId: e.inviter_id,
    integrationType: e.integration_type
  }
}
async function A(e, t) {
  let r = T(e, t),
    n = r.filter(e => I[e] <= 1).map(S);
  if (0 === n.length) return [];
  N(r, 2);
  try {
    let t = await o.default.post({
      url: h.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
      body: {
        user_ids: n
      }
    });
    if (!Array.isArray(t.body)) return N(r, 0), [];
    let s = t.body.map(R),
      u = [];
    s.forEach(e => {
      let {
        userId: t
      } = e;
      return u.push(t)
    });
    let l = T(e, u),
      i = n.filter(e => !u.includes(e)),
      a = T(e, i);
    return N(l, 3), N(a, 0), s
  } catch (e) {
    N(r, 0)
  }
  return []
}