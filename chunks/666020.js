"use strict";
n.r(t), n.d(t, {
  subscribeMembers: function() {
    return r
  },
  unsubscribeMembers: function() {
    return a
  },
  subscribeToMemberUpdates: function() {
    return s
  },
  unsubscribeFromMemberUpdates: function() {
    return o
  },
  subscribeChannel: function() {
    return u
  },
  subscribeChannelDimensions: function() {
    return d
  }
}), n("424973");
var i = n("913144"),
  l = n("696605");

function r(e, t) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
    guildId: e,
    userIds: t
  })
}

function a(e, t) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
    guildId: e,
    userIds: t
  })
}

function s(e) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
    guildId: e
  })
}

function o(e) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
    guildId: e
  })
}

function u(e, t, n) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
    guildId: e,
    channelId: t,
    ranges: n
  })
}

function d(e) {
  let {
    guildId: t,
    channelId: n,
    y: i,
    height: r,
    rowHeight: a
  } = e;

  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
  }
  let o = [];

  function d(e) {
    let t = e + (l.MINIMUM_RANGE - 1);
    return o.push([e, t]), t + 1
  }
  let c = s(.5 * r),
    f = s(i, -c),
    h = s(i + r, c);
  for (f > 0 && (f = Math.max(d(0), f)), f = Math.floor(f / l.MINIMUM_RANGE) * l.MINIMUM_RANGE; f <= h;) f = d(f);
  u(t, n, o)
}