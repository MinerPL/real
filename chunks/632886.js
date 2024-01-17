"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
});
var s = n("132710"),
  i = n.n(s),
  r = n("203288"),
  a = n("679653"),
  o = n("848848"),
  d = n("361572"),
  u = n("42203"),
  l = n("305961"),
  f = n("957255"),
  _ = n("27618"),
  c = n("697218"),
  g = n("315102"),
  m = n("404008"),
  h = n("159885"),
  v = n("82300"),
  E = n("290689"),
  p = n("49111"),
  y = n("782340");
let T = e => {
  let t = u.default.getChannel(e);
  return null == t ? void 0 : t.getGuildId()
};

function C(e) {
  return {
    type: "guild",
    guildId: e.id,
    content: (0, h.truncateText)(e.name, 32),
    icon: g.default.getGuildIconURL({
      id: e.id,
      icon: e.icon,
      size: 40
    })
  }
}

function S(e, t) {
  let n;
  let s = N((0, h.truncateText)(e.name, 32));
  return {
    type: "channel",
    content: [n = "italics" === t ? {
      type: "em",
      content: [s]
    } : s],
    channelType: e.type,
    iconType: e.iconType
  }
}

function I(e) {
  return {
    type: "channel",
    content: [N("")],
    iconType: e ? "post" : "message"
  }
}

function A(e, t) {
  var n;
  let s = u.default.getChannel(e),
    i = (0, o.getChannelRoleSubscriptionStatus)(e, u.default, r.default, f.default).isSubscriptionGated,
    l = null !== (n = (0, m.getMentionIconType)(s)) && void 0 !== n ? n : "text";
  if (null != t) {
    let n = t.find(t => t.id === e);
    if (null != n) return {
      type: n.type,
      id: n.id,
      guildId: n.guild_id,
      name: n.name,
      isDm: null != s && s.isPrivate(),
      isForumPost: null != s && s.isForumPost(),
      isMentionable: !0,
      canViewChannel: !0,
      roleSubscriptionGated: i,
      iconType: l,
      parentId: null == s ? void 0 : s.parent_id
    }
  }
  return null != s ? {
    type: s.type,
    id: s.id,
    guildId: s.guild_id,
    name: (0, a.computeChannelName)(s, c.default, _.default),
    isDm: s.isPrivate(),
    isForumPost: s.isForumPost(),
    isMentionable: (0, v.isChannelTypeMentionable)(s.type),
    canViewChannel: (0, d.canViewChannel)(s),
    roleSubscriptionGated: i,
    iconType: l,
    parentId: s.parent_id
  } : null
}

function D(e) {
  return {
    type: "link",
    content: [{
      type: "text",
      content: e
    }],
    target: e,
    title: void 0
  }
}

function N(e) {
  return {
    type: "text",
    content: e
  }
}

function O(e, t, n, s, i) {
  let r = l.default.getGuild(e),
    a = (null == r ? void 0 : r.id) === s;
  return {
    type: "channelMention",
    guildId: e,
    channelId: t,
    messageId: n,
    originalLink: i,
    inContent: null == r || a ? null : [C(r)],
    content: [S({
      name: y.default.Messages.UNKNOWN_CHANNEL,
      type: p.ChannelTypes.UNKNOWN,
      iconType: "text"
    }, "italics")]
  }
}

function b(e, t, n, s) {
  if (!e.canViewChannel) return function(e, t) {
    let n = {
      type: "channel",
      content: [N(e.roleSubscriptionGated ? e.name : y.default.Messages.NO_ACCESS)],
      channelType: e.roleSubscriptionGated ? e.type : p.ChannelTypes.UNKNOWN,
      iconType: "locked"
    };
    return {
      type: "channelMention",
      guildId: e.guildId,
      channelId: e.id,
      messageId: t,
      inContent: null,
      content: [n]
    }
  }(e, t);
  if (!e.isMentionable) return N("#".concat(e.name));
  let i = {
      type: "channelMention",
      channelId: e.id,
      guildId: e.guildId,
      messageId: t,
      originalLink: s
    },
    r = l.default.getGuild(e.guildId);
  if (null == r) {
    var a;
    if (e.isDm) return {
      ...i,
      guildId: p.ME,
      inContent: [S(e)],
      content: [I(!1)]
    };
    return null != (a = s) ? D(a) : N("#".concat(y.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER))
  }
  let o = e.guildId === n;
  return {
    ...i,
    ... function(e, t, n, s) {
      let i = C(e),
        r = S(t),
        a = I(t.isForumPost);
      if (n && s) {
        if (t.isForumPost) {
          let e = u.default.getChannel(t.parentId);
          if (null != e) {
            var o;
            return {
              inContent: [S({
                name: e.name,
                type: e.type,
                iconType: null !== (o = (0, m.getMentionIconType)(e)) && void 0 !== o ? o : "forum"
              })],
              content: [r]
            }
          }
        }
        return {
          inContent: [r],
          content: [a]
        }
      }
      if (n && !s) return {
        inContent: null,
        content: [r]
      };
      if (!n && s) return {
        inContent: [i],
        content: [t.isForumPost ? r : a]
      };
      else if (!n && !s) return {
        inContent: [i],
        content: [r]
      }
    }(r, e, o, null != t)
  }
}
let P = {
    order: E.default.order,
    requiredFirstCharacters: ["<"],
    match: e => /^<#(\d+)>/.exec(e),
    parse(e, t, n) {
      let s = e[1];
      if (n.returnMentionIds) return {
        type: "channelMention",
        id: s
      };
      let i = A(s, n.mentionChannels);
      return null == i ? O(null, s, null, T(n.channelId)) : b(i, null, T(n.channelId))
    }
  },
  k = {
    order: i.defaultRules.url.order - .5,
    requiredFirstCharacters: ["h"],
    match(e) {
      let t = d.CHANNEL_OR_MESSAGES_URL_RE.exec(e);
      return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
    },
    parse(e, t, n) {
      let s = e[0],
        i = e[1],
        r = e[2],
        a = e[3];
      if (null == r) return D(s);
      let o = A(r, null);
      return null == o ? O(i, r, a, T(n.channelId), s) : b(o, a, T(n.channelId), s)
    }
  },
  R = {
    order: i.defaultRules.url.order - .5,
    requiredFirstCharacters: ["h"],
    match: e => d.MEDIA_POST_URL_RE.exec(e),
    parse(e, t, n) {
      let s = e[0],
        i = e[1],
        r = e[2],
        a = e[3],
        o = e[4];
      if (null == r || null == a) return D(s);
      let d = A(a, null);
      if (null != d) return b(d, o, T(n.channelId), s);
      let u = A(r, null);
      return null != u ? b(u, o, T(n.channelId), s) : O(i, r, o, T(n.channelId), s)
    }
  };
var V = {
  channelMention: P,
  channelOrMessageUrl: k,
  mediaPostLink: R
}