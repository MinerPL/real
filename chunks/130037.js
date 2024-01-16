"use strict";
n.r(t), n.d(t, {
  useTrackMemberSearchUsed: function() {
    return I
  },
  useTrackMemberFilterRolesUsed: function() {
    return T
  },
  MemberSafetyFlagType: function() {
    return l
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return f
  },
  ModerationActionType: function() {
    return r
  },
  useTrackModerationAction: function() {
    return S
  },
  trackMembersPageViewed: function() {
    return N
  }
});
var i, a, l, r, s = n("884691"),
  u = n("812204"),
  o = n("716241"),
  d = n("271938"),
  c = n("599110"),
  E = n("49111");

function _(e, t, n) {
  var i;
  let a = {
    ...t,
    ...(0, o.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
  };
  c.default.track(e, a)
}

function I(e) {
  let t = s.useCallback(t => {
    ! function(e) {
      let t = {
        guild_id: e,
        location: u.default.MEMBER_SAFETY_PAGE
      };
      _(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
    }(e)
  }, [e]);
  return t
}

function T(e) {
  let t = s.useCallback(t => {
    ! function(e, t) {
      let n = {
        selected_role_count: t.size,
        guild_id: e,
        location: u.default.MEMBER_SAFETY_PAGE
      };
      _(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
    }(e, t)
  }, [e]);
  return t
}(i = l || (l = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

function f(e) {
  let t = s.useCallback(t => {
    ! function(e, t) {
      let n = {
        flag_type: t,
        guild_id: e,
        location: u.default.MEMBER_SAFETY_PAGE
      };
      _(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
    }(e, t)
  }, [e]);
  return t
}

function S(e, t) {
  let {
    location: n,
    targetUserId: i,
    targets: a,
    locations: l
  } = t, r = s.useCallback(t => {
    let r = {
      action_type: t,
      mod_user_id: d.default.getId(),
      guild_id: e,
      location: n,
      locations: l,
      target_user_id: null != i ? i : void 0,
      targets: null != a ? a : void 0
    };
    _(E.AnalyticEvents.MODERATION_ACTION, r)
  }, [e, n, i, a, l]);
  return r
}

function N(e, t) {
  _(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}(a = r || (r = {})).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname"