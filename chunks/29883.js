"use strict";
n.r(t), n.d(t, {
  EmbedStates: function() {
    return s
  },
  useEmbeddedApplicationEmbedState: function() {
    return o
  },
  useJoinOrStartButtonState: function() {
    return u
  }
}), n("222007");
var s, l, a = n("884691"),
  i = n("501260"),
  r = n("782340");

function o(e) {
  let {
    embeddedActivity: t
  } = e, [n, s] = a.useState(null != t ? 0 : 2);
  return a.useEffect(() => {
    0 === n && null == t && s(1)
  }, [t, n]), a.useEffect(() => {
    if (1 === n) {
      let e = setTimeout(() => s(2), 650);
      return () => clearTimeout(e)
    }
  }, [n]), n
}

function u(e) {
  let {
    embedState: t,
    embeddedActivity: n,
    currentUserId: s,
    joinability: l
  } = e, o = null != n && n.userIds.has(s);
  return a.useMemo(() => {
    let e = {
      disabled: 1 === t,
      usePrimaryColor: 2 === t,
      text: 2 !== t ? r.default.Messages.EMBEDDED_ACTIVITIES_JOIN : r.default.Messages.START,
      tooltip: void 0
    };
    if (o) return {
      ...e,
      disabled: !0,
      text: r.default.Messages.EMBEDDED_ACTIVITIES_JOINED,
      tooltip: r.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY
    };
    if (null != l && l !== i.EmbeddedActivityJoinability.CAN_JOIN) {
      let t;
      switch (l) {
        case i.EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
          t = r.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
          break;
        case i.EmbeddedActivityJoinability.ACTIVITY_AGE_GATED:
          t = r.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
          break;
        case i.EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
          t = r.default.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
          break;
        case i.EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS:
          t = r.default.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS;
          break;
        case i.EmbeddedActivityJoinability.CHANNEL_FULL:
          t = r.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL;
          break;
        case i.EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION:
          t = r.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_NO_VOICE_PERMISSION;
          break;
        case i.EmbeddedActivityJoinability.NO_CHANNEL:
        case i.EmbeddedActivityJoinability.NO_GUILD:
        case i.EmbeddedActivityJoinability.NO_USER:
        case i.EmbeddedActivityJoinability.IS_AFK_CHANNEL:
          t = r.default.Messages.EMBEDDED_ACTIVITIES_INSTANCE_EMBED_INVALID_CHANNEL
      }
      return {
        ...e,
        disabled: !0,
        tooltip: t
      }
    }
    return e
  }, [t, o, l])
}(l = s || (s = {}))[l.ACTIVE = 0] = "ACTIVE", l[l.JUST_ENDED = 1] = "JUST_ENDED", l[l.ENDED = 2] = "ENDED"