"use strict";
n.r(t), n.d(t, {
  subscribeMembers: function() {
    return l
  },
  unsubscribeMembers: function() {
    return r
  },
  subscribeToMemberUpdates: function() {
    return s
  },
  unsubscribeFromMemberUpdates: function() {
    return u
  },
  subscribeChannel: function() {
    return o
  },
  subscribeChannelDimensions: function() {
    return d
  }
}), n("424973");
var i = n("913144"),
  a = n("696605");

function l(e, t) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
    guildId: e,
    userIds: t
  })
}

function r(e, t) {
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

function u(e) {
  i.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
    guildId: e
  })
}

function o(e, t, n) {
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
    height: l,
    rowHeight: r
  } = e;

  function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Math.max(0, Math.ceil(Math.ceil(e / r)) + t)
  }
  let u = [];

  function d(e) {
    let t = e + (a.MINIMUM_RANGE - 1);
    return u.push([e, t]), t + 1
  }
  let c = s(.5 * l),
    E = s(i, -c),
    _ = s(i + l, c);
  for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / a.MINIMUM_RANGE) * a.MINIMUM_RANGE; E <= _;) E = d(E);
  o(t, n, u)
}