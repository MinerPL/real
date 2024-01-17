"use strict";
l.r(t), l.d(t, {
  useSelfBroadcast: function() {
    return u
  },
  default: function() {
    return d
  },
  useIsBroadcastingInChannel: function() {
    return c
  },
  isBroadcastingInChannel: function() {
    return f
  },
  getIsBroadcastingToAnyone: function() {
    return S
  }
});
var a = l("446674"),
  n = l("845579");
l("373469");
var s = l("271938"),
  r = l("42203");
l("18494");
var o = l("101125"),
  i = l("9759");

function u() {
  let e = (0, a.useStateFromStores)([s.default], () => s.default.getId()),
    {
      canBroadcast: t
    } = i.default.useExperiment({
      location: "use_self_broadcast"
    }, {
      autoTrackExposure: !1
    }),
    l = (0, a.useStateFromStores)([o.default], () => o.default.getBroadcast());
  return t && (null == l ? void 0 : l.userId) === e ? l : null
}

function d() {
  let e = u();
  return null != e
}

function c(e) {
  let t = u(),
    l = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(e));
  return null != t && null != l && l.ownerId === t.userId && l.isBroadcastChannel()
}

function f(e) {
  let t = s.default.getId(),
    {
      canBroadcast: l
    } = i.default.getCurrentConfig({
      location: "is_broadcasting_in_channel"
    }, {
      autoTrackExposure: !1
    }),
    a = o.default.getBroadcast();
  if (!l || null == a || a.userId !== t) return !1;
  let n = r.default.getChannel(e);
  return null != n && n.ownerId === a.userId && n.isBroadcastChannel()
}

function S() {
  let e = n.BroadcastAllowedGuildIds.getSetting(),
    t = n.BroadcastAllowedUserIds.getSetting(),
    l = n.BroadcastAllowFriends.getSetting();
  return l || e.length > 0 || t.length > 0
}
l("194051")