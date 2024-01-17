"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007"), n("866227");
var s, l, a = n("316693"),
  i = n("446674");
n("95410");
var r = n("913144"),
  o = n("518888"),
  u = n("525065"),
  d = n("305961"),
  c = n("957255"),
  f = n("162771"),
  E = n("697218"),
  _ = n("49111");
let T = {
    hiddenSurveys: {},
    surveyOverride: null,
    lastFetched: null
  },
  I = T,
  m = {},
  N = null;
(l = s || (s = {})).IS_OWNER = "is_owner", l.IS_ADMIN = "is_admin", l.IS_COMMUNITY = "is_community", l.GUILD_SIZE = "guild_size", l.IS_HUB = "is_hub", l.IS_VIEWING = "is_viewing", l.GUILD_PERMISSIONS = "guild_permissions", l.GUILD_SIZE_ALL = "guild_size_all";
let p = new Set(Object.values(s));

function S(e) {
  let {
    guild_requirements: t = [],
    guild_size: n = [null, null],
    guild_permissions: s = []
  } = e;
  if (0 === t.length) return !0;
  for (let e of t)
    if (!p.has(e)) return !1;
  let l = t.includes("guild_size_all"),
    i = !0,
    r = Object.values(d.default.getGuilds());
  for (let o of r) {
    if (l || t.includes("guild_size")) {
      let e = u.default.getMemberCount(o.id);
      if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
        i = !1;
        continue
      }
    }
    if (t.includes("is_community") && !o.hasFeature(_.GuildFeatures.COMMUNITY) || t.includes("is_hub") && !o.hasFeature(_.GuildFeatures.HUB)) continue;
    if (t.includes("guild_permissions")) {
      if (0 === s.length) continue;
      let e = !1;
      for (let t of s) try {
        let n = a.default.deserialize(t);
        if (c.default.can(n, o)) {
          e = !0;
          break
        }
      } catch (e) {}
      if (!e) continue
    }
    let r = E.default.getCurrentUser(),
      d = (null == r ? void 0 : r.id) === o.ownerId,
      T = c.default.can(_.Permissions.ADMINISTRATOR, o);
    if (t.includes("is_owner") && !d || t.includes("is_admin") && !T) continue;
    null == (m = null != m ? m : {})[e.key] && (m[e.key] = e);
    let I = f.default.getGuildId(),
      N = null != I && I === o.id;
    if ((!t.includes("is_viewing") || N) && !l) return !0
  }
  return !!l && !!i || !1
}

function A(e) {
  let {
    survey: t
  } = e;
  if (I.lastFetched = Date.now(), null != t && null == I.hiddenSurveys[t.key]) {
    if (!S(t)) return;
    N = t
  }
}

function C() {
  if (null != N && (S(N) || (N = null, 0))) return !1;
  ! function() {
    m = null != m ? m : {};
    let e = Object.values(m)[0];
    if (null != e && S(e)) {
      A({
        type: "SURVEY_FETCHED",
        survey: e
      });
      return
    }
    if (null == N) return;
    N = null
  }()
}
class h extends i.default.PersistedStore {
  initialize(e) {
    I = null != e ? e : T, this.syncWith([f.default], C)
  }
  getState() {
    return I
  }
  getCurrentSurvey() {
    return N
  }
  getSurveyOverride() {
    return I.surveyOverride
  }
}
h.displayName = "SurveyStore", h.persistKey = "SurveyStore", h.migrations = [e => {
  let t = {
    ...e
  };
  return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
}];
var g = new h(r.default, {
  CONNECTION_OPEN: function() {
    var e;
    if (!(null != I.lastFetched && Date.now() - (null !== (e = I.lastFetched) && void 0 !== e ? e : 0) < 864e5) || null != I.surveyOverride)(0, o.surveyFetch)(I.surveyOverride)
  },
  SURVEY_FETCHED: A,
  SURVEY_HIDE: function(e) {
    let {
      key: t
    } = e;
    I.hiddenSurveys[t] = !0, N = null, m = null != m ? m : {}, delete m[t]
  },
  SURVEY_OVERRIDE: function(e) {
    let {
      id: t
    } = e;
    I.surveyOverride = t, null != t && delete I.hiddenSurveys[t], (0, o.surveyFetch)(I.surveyOverride)
  },
  PUSH_NOTIFICATION_CLICK: function() {},
  DISPLAYED_INVITE_SHOW: function() {},
  LOGOUT: function() {
    I.hiddenSurveys = {}
  }
})