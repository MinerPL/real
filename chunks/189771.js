"use strict";
n.r(t), n.d(t, {
  shouldNotifyBase: function() {
    return O
  },
  shouldNotify: function() {
    return y
  },
  shouldNotifyForSelectedChannel: function() {
    return D
  },
  shouldNotifyForForumThreadCreation: function() {
    return b
  },
  makeTextChatNotification: function() {
    return U
  }
}), n("702976"), n("70102");
var l = n("679653"),
  a = n("605250"),
  s = n("267567"),
  i = n("288518"),
  r = n("884351"),
  o = n("406297"),
  u = n("913491"),
  d = n("755624"),
  c = n("414833"),
  f = n("233069"),
  h = n("982108"),
  C = n("42203"),
  p = n("305961"),
  m = n("945956"),
  E = n("27618"),
  g = n("18494"),
  I = n("162771"),
  S = n("101125"),
  _ = n("282109"),
  N = n("697218"),
  T = n("568734"),
  A = n("387111"),
  L = n("700097"),
  v = n("158998"),
  x = n("49111"),
  R = n("648564"),
  M = n("782340");

function O(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (t.hasFlag(x.UserFlags.SPAMMER) || n.isManaged()) return !1;
  let i = n.getGuildId();
  return !(null != i && s.default.isLurking(i) || t.id === e.id || E.default.isBlocked(t.id) || !l && S.default.getStatus() === x.StatusTypes.DND || !a && _.default.allowNoMessages(n)) && !0
}

function y(e, t) {
  var n;
  let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e.flags && (0, T.hasFlag)(e.flags, x.MessageFlags.SUPPRESS_NOTIFICATIONS)) return !1;
  let s = C.default.getChannel(t);
  e.type === x.MessageTypes.THREAD_STARTER_MESSAGE && (s = C.default.getChannel(null == s ? void 0 : s.parent_id));
  let r = N.default.getCurrentUser(),
    u = N.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  if (null == s || null == r || null == u || s.type === x.ChannelTypes.GROUP_DM && e.type === x.MessageTypes.RECIPIENT_REMOVE || !O(r, u, s, a) || i.default.isMessageRequest(t)) return !1;
  if (!l) {
    let e = g.default.getChannelId(I.default.getGuildId());
    if (e === s.id || h.default.getCurrentSidebarChannelId(e) === s.id) return !1
  }
  if (f.THREAD_CHANNEL_TYPES.has(s.type)) {
    if (d.default.isMuted(s.id)) return !1;
    let t = (0, c.computeThreadNotificationSetting)(s);
    return t !== R.ThreadMemberFlags.NO_MESSAGES && (t === R.ThreadMemberFlags.ALL_MESSAGES || (0, o.isRawMessageMentioned)({
      rawMessage: e,
      userId: r.id,
      suppressEveryone: !1,
      suppressRoles: !1
    }))
  } {
    let t = !f.GUILD_VOCAL_CHANNEL_TYPES.has(s.type) || m.default.getChannelId() === s.id;
    if (_.default.allowAllMessages(s) && t) return !0;
    let n = _.default.isSuppressEveryoneEnabled(s.getGuildId()),
      l = _.default.isSuppressRolesEnabled(s.getGuildId());
    return (0, o.isRawMessageMentioned)({
      rawMessage: e,
      userId: r.id,
      suppressEveryone: n,
      suppressRoles: l
    })
  }
}

function D(e, t) {
  var n;
  let l = g.default.getChannelId(I.default.getGuildId());
  if (l !== t) return !1;
  let a = C.default.getChannel(t);
  e.type === x.MessageTypes.THREAD_STARTER_MESSAGE && (a = C.default.getChannel(null == a ? void 0 : a.parent_id));
  let s = N.default.getCurrentUser(),
    i = N.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  return !(null == a || null == s || null == i || a.isManaged() || i.hasFlag(x.UserFlags.SPAMMER) || E.default.isBlocked(i.id) || i.id === s.id || S.default.getStatus() === x.StatusTypes.DND || _.default.allowNoMessages(a)) && !0
}

function b(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = N.default.getCurrentUser(),
    s = N.default.getUser(e.ownerId);
  if (null == t || null == a || null == s || !O(a, s, t, l, !0) || _.default.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) return !1;
  if (!n) {
    let e = g.default.getChannelId(I.default.getGuildId());
    if (e === t.id) return !1
  }
  return _.default.getNewForumThreadsCreated(t)
}
let j = (e, t, n) => "".concat(e, " (").concat((0, l.computeChannelName)(t, N.default, E.default, !0)).concat(null != n ? ", ".concat((0, l.computeChannelName)(n, N.default, E.default)) : "", ")");

function G(e, t, n, l) {
  switch (e.type) {
    case x.ChannelTypes.GUILD_ANNOUNCEMENT:
    case x.ChannelTypes.GUILD_TEXT:
      return t;
    case x.ChannelTypes.GROUP_DM:
      return n;
    case x.ChannelTypes.DM:
    default:
      return l
  }
}

function U(e, t, n) {
  var s;
  let i;
  let o = A.default.getName(e.getGuildId(), e.id, n),
    d = o;
  switch (e.type) {
    case x.ChannelTypes.GUILD_ANNOUNCEMENT:
    case x.ChannelTypes.GUILD_TEXT:
    case x.ChannelTypes.GUILD_VOICE:
    case x.ChannelTypes.ANNOUNCEMENT_THREAD:
    case x.ChannelTypes.PUBLIC_THREAD:
    case x.ChannelTypes.PRIVATE_THREAD:
      let c = C.default.getChannel(e.parent_id);
      if (t.type === x.MessageTypes.THREAD_STARTER_MESSAGE && null != c) d = j(d, c, C.default.getChannel(c.parent_id));
      else if ((0, u.default)(t)) {
        let t = p.default.getGuild(e.getGuildId());
        null != t && (d = j(d, e, c))
      } else d = j(d, e, c);
      break;
    case x.ChannelTypes.GROUP_DM:
      let f = e.isManaged() && n.bot && d === (0, l.computeChannelName)(e, N.default, E.default);
      !f && (d = "".concat(d, " (").concat((0, l.computeChannelName)(e, N.default, E.default, !0), ")"))
  }
  let h = t.content;
  if ((0, u.default)(t) && null == (h = L.default.stringify(t, e))) throw new(0, a.default)("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", t), Error("failed to stringify system message");
  let m = null !== (s = t.sticker_items) && void 0 !== s ? s : t.stickers;
  if (null != t.activity && null != t.application) i = t.activity.type === x.ActivityActionTypes.JOIN ? G(e, M.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, M.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, M.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
    user: o,
    game: t.application.name
  }) : t.activity.type === x.ActivityActionTypes.JOIN_REQUEST ? G(e, M.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, M.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, M.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
    user: o,
    game: t.application.name
  }) : "";
  else if (null != t.activity && t.activity.type === x.ActivityActionTypes.LISTEN) {
    let t = G(e, M.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, M.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, M.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN);
    i = t.format({
      user: o
    })
  } else i = null != m && m.length > 0 ? M.default.Messages.STICKER_NOTIFICATION_BODY.format({
    stickerName: m[0].name
  }) : t.type === x.MessageTypes.PREMIUM_REFERRAL ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
    username: v.default.getName(n)
  }) : r.default.unparse(h, e.id, !0);
  0 === i.length && (i = function(e) {
    var t;
    if (void 0 !== e.embeds && e.embeds.length > 0) {
      let t = e.embeds[0];
      if (null != t.description) return null != t.title ? "".concat(t.title, " ").concat(t.description) : t.description;
      if (null != t.title) return t.title;
      if (null != t.fields) {
        let e = t.fields[0];
        return "".concat(e.name, " ").concat(e.value)
      }
    }
    if ((0, T.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, x.MessageFlags.IS_VOICE_MESSAGE)) return M.default.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
    if (void 0 !== e.attachments && e.attachments.length > 0) {
      let t = e.attachments[0].filename;
      return M.default.Messages.NOTIFICATION_BODY_ATTACHMENT.format({
        filename: t
      })
    }
    return ""
  }(t));
  let g = n.getAvatarURL(e.guild_id, 128);
  return {
    icon: g,
    title: d,
    body: i
  }
}