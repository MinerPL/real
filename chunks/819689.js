"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eh
  }
}), n("70102"), n("794252"), n("222007"), n("702976");
var a = n("506838"),
  l = n("394846"),
  s = n("872717"),
  i = n("819855"),
  r = n("913144"),
  d = n("408062"),
  u = n("979911"),
  o = n("716241"),
  c = n("802493"),
  E = n("595525"),
  f = n("219788"),
  _ = n("139514"),
  g = n("312016"),
  h = n("605250"),
  m = n("619443"),
  S = n("582415"),
  M = n("600798"),
  p = n("569808"),
  A = n("9294"),
  I = n("52393"),
  T = n("143291"),
  C = n("379534"),
  L = n("40566"),
  D = n("994918"),
  O = n("815297"),
  v = n("168730"),
  y = n("129953"),
  N = n("28007"),
  R = n("880731"),
  b = n("562228"),
  G = n("793277");
n("685841");
var U = n("256572"),
  P = n("364685"),
  w = n("804888"),
  k = n("263024"),
  B = n("410912"),
  F = n("373469"),
  V = n("271938"),
  x = n("42203");
n("836417");
var H = n("337543"),
  K = n("377253"),
  Y = n("957255"),
  W = n("824563"),
  j = n("660478"),
  J = n("18494"),
  z = n("162771"),
  X = n("401848"),
  q = n("697218"),
  Q = n("599110"),
  Z = n("718517"),
  $ = n("568734"),
  ee = n("659632"),
  et = n("701909"),
  en = n("719923"),
  ea = n("299039"),
  el = n("404118"),
  es = n("49111"),
  ei = n("724210"),
  er = n("579033"),
  ed = n("782340");
let eu = new h.default("MessageActionCreators"),
  eo = new h.default("MessageQueue"),
  ec = !1;
class eE {
  markComplete() {
    this.completed = !0
  }
  constructor() {
    this.completed = !1
  }
}

function ef(e) {
  let {
    inviteKey: t,
    channelId: n,
    messageId: a,
    location: l,
    suggested: s = null,
    overrideProperties: i = {}
  } = e, r = (0, A.parseExtraDataFromInviteKey)(t), d = x.default.getChannel(n);
  if (null != d) {
    let e = null;
    d.isMultiUserDM() ? e = es.LoggingInviteTypes.GDM_INVITE : !d.isPrivate() && (e = es.LoggingInviteTypes.SERVER_INVITE);
    let n = {},
      c = H.default.getInvite(t);
    if (null != c && c.state === es.InviteStates.RESOLVED && null != c.channel) {
      var u;
      let t = c.channel;
      n.invite_channel_id = t.id, n.invite_guild_id = null === (u = c.guild) || void 0 === u ? void 0 : u.id, n.invite_channel_type = t.type, null != c.inviter && (n.invite_inviter_id = c.inviter.id);
      let a = F.default.getLastActiveStream();
      if (null != a && a.channelId === t.id) {
        e = es.LoggingInviteTypes.STREAM, n.destination_user_id = a.ownerId;
        let t = (0, S.getStreamerApplication)(a, W.default);
        n.application_id = null != t ? t.id : null
      }
    }
    null != s && (n.is_suggested = s.isAffinitySuggestion, n.row_num = s.rowNum, n.num_total = s.numTotal, n.num_affinity_connections = s.numAffinityConnections, n.is_filtered = s.isFiltered), n = {
      ...n,
      location: l,
      invite_type: e,
      invite_code: r.baseCode,
      guild_id: d.getGuildId(),
      channel_id: d.id,
      message_id: a,
      send_type: es.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: r.guildScheduledEventId,
      ...i
    }, o.default.trackWithMetadata(es.AnalyticEvents.INVITE_SENT, n)
  } else {
    let e = {},
      n = H.default.getInvite(t);
    null != n && n.state === es.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
      ...e,
      location: l,
      invite_type: es.LoggingInviteTypes.FRIEND_INVITE,
      invite_code: r.baseCode,
      message_id: a,
      send_type: es.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: r.guildScheduledEventId,
      ...i
    }, o.default.trackWithMetadata(es.AnalyticEvents.INVITE_SENT, e))
  }
}
let e_ = {
    [es.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
      messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
      messageGetter: () => ed.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
    },
    [es.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
      messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
      messageGetter: () => ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: et.default.getArticleURL(es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      })
    },
    [es.AbortCodes.RATE_LIMIT_DM_OPEN]: {
      messageName: "BOT_DM_RATE_LIMITED",
      messageGetter: () => ed.default.Messages.BOT_DM_RATE_LIMITED
    },
    [es.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => ed.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    },
    [es.AbortCodes.SLOWMODE_RATE_LIMITED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => ed.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    }
  },
  eg = {
    receiveMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      r.default.dispatch({
        type: "MESSAGE_CREATE",
        channelId: e,
        message: t,
        optimistic: n,
        sendMessageOptions: a,
        isPushNotification: !1
      })
    },
    sendBotMessage(e, t, n, a) {
      null != n && o.default.trackWithMetadata(es.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), eg.receiveMessage(e, (0, O.createBotMessage)({
        messageId: a,
        channelId: e,
        content: t,
        loggingName: n
      }))
    },
    sendClydeError(e) {
      let t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        l = x.default.getChannel(e);
      if (null != l) {
        if (a === es.AbortCodes.SLOWMODE_RATE_LIMITED) t = ed.default.Messages.CHANNEL_SLOWMODE_DESC.format({
          seconds: l.rateLimitPerUser
        }), n = "SLOWMODE_RATE_LIMITED";
        else if (a === es.AbortCodes.INVALID_MESSAGE_SEND_USER) t = ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
          helpUrl: et.default.getArticleURL(es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
        }), n = "INVALID_MESSAGE_SEND_USER";
        else if (a === es.AbortCodes.TOO_MANY_THREADS) {
          let e = l.isForumLikeChannel() || l.isForumPost();
          t = e ? ed.default.Messages.BOT_DM_TOO_MANY_POSTS : ed.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS"
        } else a === es.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ed.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : a === es.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ed.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
          helpUrl: es.MarketingURLs.HARMFUL_LINKS
        }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : a in e_ ? (n = e_[a].messageName, t = e_[a].messageGetter()) : (t = ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
          helpUrl: et.default.getArticleURL(es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
        }), n = "SEND_FAILED (".concat(a, ")"));
        eg.sendBotMessage(e, t, n)
      }
    },
    sendExplicitMediaClydeError(e, t) {
      let n = x.default.getChannel(e);
      if (null == n) return;
      let {
        message: l,
        messageName: s
      } = (0, a.match)({
        isDM: n.isDM(),
        isGDM: n.isGroupDM()
      }).with({
        isDM: !0
      }, () => ({
        message: ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
        messageName: "BOT_DM_EXPLICIT_CONTENT"
      })).with({
        isDM: !1,
        isGDM: !0
      }, () => ({
        message: ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
        messageName: "BOT_GDM_EXPLICIT_CONTENT"
      })).otherwise(() => ({
        message: ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
        messageName: "BOT_GUILD_EXPLICIT_CONTENT"
      })), i = (0, O.createNonce)();
      eg.sendBotMessage(e, l, s, i), null != t && t.length > 0 && r.default.dispatch({
        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
        messageId: i,
        channelId: e,
        attachments: t
      })
    },
    truncateMessages(e, t, n) {
      r.default.dispatch({
        type: "TRUNCATE_MESSAGES",
        channelId: e,
        truncateBottom: t,
        truncateTop: n
      })
    },
    clearChannel(e) {
      r.default.dispatch({
        type: "CLEAR_MESSAGES",
        channelId: e
      })
    },
    jumpToPresent(e, t) {
      eg.trackJump(e, null, "Present");
      let n = {
        present: !0
      };
      K.default.hasPresent(e) ? r.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : eg.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, a) {
      o.default.trackWithMetadata(es.AnalyticEvents.JUMP, {
        context: n,
        channel_id: e,
        message_id: t,
        ...a
      })
    },
    jumpToMessage(e) {
      let {
        channelId: t,
        messageId: n,
        flash: a = !1,
        offset: l,
        context: s,
        extraProperties: i = null,
        isPreload: r,
        returnMessageId: d,
        skipLocalFetch: u,
        jumpType: o
      } = e;
      return "string" == typeof s && eg.trackJump(t, n, s, i), eg.fetchMessages({
        channelId: t,
        limit: es.MAX_MESSAGES_FOR_JUMP,
        jump: {
          messageId: n,
          flash: a,
          offset: l,
          returnMessageId: d,
          jumpType: o
        },
        isPreload: r,
        skipLocalFetch: u
      })
    },
    focusMessage(e) {
      let {
        channelId: t,
        messageId: n
      } = e;
      eg.fetchMessages({
        channelId: t,
        limit: es.MAX_MESSAGES_FOR_JUMP,
        focus: {
          messageId: n
        }
      })
    },
    fetchMessages(e) {
      let {
        channelId: t,
        before: n,
        after: a,
        limit: l,
        jump: i,
        focus: u,
        isPreload: o,
        skipLocalFetch: c,
        truncate: E
      } = e, f = x.default.getChannel(t), _ = m.default.isConnectedOrOverlay(), g = Date.now();
      if (null != f && f.type === es.ChannelTypes.GUILD_STORE) return !1;
      if (t === ei.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
      if (eu.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(a, ". jump=").concat(JSON.stringify(i))), eg._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: a,
          limit: l,
          jump: i,
          focus: u,
          truncate: E
        })) return;
      B.default.fetchMessages.recordStart();
      let h = null != i ? i : void 0;
      null == h && null != u && (h = {
        ...u
      });
      let S = d.default.getOrCreate(t),
        M = S.loadStart(h);
      d.default.commit(M), r.default.dispatch({
        type: "LOAD_MESSAGES"
      });
      let p = null == h ? void 0 : h.messageId,
        A = new eE;
      return !c && this.fetchLocalMessages(t, n, a, l, A), s.default.get({
        url: es.Endpoints.MESSAGES(t),
        query: {
          before: n,
          after: a,
          limit: l,
          around: p,
          preload: o
        },
        retries: 2,
        oldFormErrors: !0
      }).then(e => (B.default.fetchMessages.recordEnd(), B.default.dispatchMessages.measure(() => {
        let s = e.body,
          d = null != n,
          u = null != a,
          o = null == n && null == a,
          c = null != p || s.length === l && (d || o),
          f = null != p || u && s.length === l;
        if (null != p) {
          let e = Math.floor(l / 2),
            n = [p, ...s.map(e => {
              let {
                id: t
              } = e;
              return t
            })].filter((e, t, n) => n.indexOf(e) === t).sort(ea.default.compare),
            a = n.indexOf(p);
          if (a < e && (c = !1), s.length - a < e && (f = !1), f && s.length > 0) {
            let e = j.default.lastMessageId(t);
            s[0].id === e && (f = !1)
          }
        }
        eu.log("Fetched ".concat(s.length, " messages for ").concat(t, " isBefore:").concat(d, " isAfter:").concat(u)), A.markComplete(), r.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: t,
          messages: s,
          isBefore: d,
          isAfter: u,
          hasMoreBefore: c,
          hasMoreAfter: f,
          limit: l,
          jump: i,
          isStale: !_ || m.default.lastTimeConnectedChanged() >= g,
          truncate: E
        })
      }), !0), () => (eu.log("Failed to fetch messages for ".concat(t)), r.default.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), !1))
    },
    async fetchLocalMessages(e, t, n, a, l) {
      let s = x.default.getBasicChannel(e),
        i = d.default.getOrCreate(e),
        u = c.default.database();
      if (null == u || null == s || null != t || null != n) {
        B.default.addLocalMessages(e, -1);
        return
      }
      if (i.ready && !i.cached) {
        B.default.addLocalMessages(e, -2);
        return
      }
      let o = await (0, E.tryLoadAsync)(() => f.default.load(u, e, a));
      if (null == o) {
        B.default.addLocalMessages(e, -3);
        return
      }
      if (eu.log("fetched ".concat(o.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(l.completed, ")")), B.default.addLocalMessages(e, o.messages.length), !l.completed && o.messages.length > 0) {
        let t = o.messages.length >= a && o.connectionId === m.default.lastTimeConnectedChanged();
        r.default.dispatch({
          type: "LOCAL_MESSAGES_LOADED",
          guildId: s.guild_id,
          channelId: e,
          users: o.users,
          members: o.members,
          messages: o.messages,
          stale: !t
        })
      }
    },
    async fetchNewLocalMessages(e, t) {
      var n;
      let a = x.default.getBasicChannel(e),
        l = c.default.database();
      if (null == l || null == a) return;
      let s = d.default.getOrCreate(e);
      if (s.hasMoreAfter) return;
      let i = await (0, E.tryLoadAsync)(() => f.default.load(l, e, t));
      if (null == i) return;
      s = d.default.getOrCreate(e);
      let u = null === (n = s.last()) || void 0 === n ? void 0 : n.id,
        o = null == u ? i.messages : i.messages.filter(e => ea.default.compare(e.id, u) > 0);
      eu.log("Fetched ".concat(i.messages.length, " messages from the cache after foregrounding. ").concat(o.length, " are new")), 0 !== o.length && r.default.dispatch({
        type: "LOCAL_MESSAGES_LOADED",
        guildId: a.guild_id,
        channelId: e,
        users: i.users,
        members: i.members,
        messages: o,
        stale: !0
      })
    },
    _tryFetchMessagesCached(e) {
      let {
        channelId: t,
        before: n,
        after: a,
        limit: l,
        jump: s,
        focus: i,
        truncate: d
      } = e, u = K.default.getMessages(t);
      if (u.cached || !u.ready) return !1;
      if ((null == s ? void 0 : s.messageId) != null || (null == i ? void 0 : i.messageId) != null) {
        if ((null == s ? void 0 : s.messageId) != null && u.has(s.messageId, !1)) return r.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: l,
          truncate: d
        }), !0;
        if ((null == i ? void 0 : i.messageId) != null) {
          if (u.has(i.messageId, !1)) return r.default.dispatch({
            type: "LOAD_MESSAGES_SUCCESS_CACHED",
            channelId: t,
            focus: i,
            limit: l,
            truncate: d
          }), !0;
          s = {
            ...i
          }
        }
        let e = (null == s ? void 0 : s.messageId) != null ? ea.default.extractTimestamp(null == s ? void 0 : s.messageId) : 0,
          n = u.first(),
          a = u.last();
        if (!u.hasMoreBefore && null != n && ea.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != a && ea.default.extractTimestamp(a.id) <= e || null != n && null != a && ea.default.extractTimestamp(n.id) < e && ea.default.extractTimestamp(a.id) > e) return r.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: es.MAX_MESSAGES_FOR_JUMP
        }), !0
      } else if (null != n && u.hasBeforeCached(n)) return r.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        before: n,
        limit: l,
        truncate: d
      }), !0;
      else if (null != a && u.hasAfterCached(a)) return r.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        after: a,
        limit: l,
        truncate: d
      }), !0;
      return !1
    },
    async sendMessage(e, t) {
      var n;
      let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (t.reaction) return Promise.resolve();
      let s = await (0, G.default)(e);
      if (null != s) return eg.sendMessage(s, t, a, l);
      let i = () => eg._sendMessage(e, t, l),
        r = T.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
          location: "8e1e29_1"
        }).enableBackgroundSending ? C.default.backgroundify(i, void 0) : i,
        d = null !== (n = l.nonce) && void 0 !== n ? n : (0, O.createNonce)();
      return (l = {
        ...l,
        nonce: d
      }, L.default.recordMessageSendAttempt(e, d), K.default.isReady(e)) ? r() : a && e !== ei.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (eo.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        K.default.whenReady(e, () => {
          eo.info("Channel ".concat(e, " is ready for sending now.")), r().then(t, n)
        })
      })) : r()
    },
    getSendMessageOptionsForReply(e) {
      var t;
      if (null == e) return {};
      let n = {
          guild_id: null !== (t = e.channel.getGuildId()) && void 0 !== t ? t : void 0,
          channel_id: e.channel.id,
          message_id: e.message.id
        },
        a = e.shouldMention ? void 0 : {
          parse: Object.values(es.AllowedMentionTypes),
          replied_user: !1
        };
      return {
        messageReference: n,
        allowedMentions: a
      }
    },
    sendInvite: (e, t, n, a) => eg._sendMessage(e, {
      content: (0, I.default)(t),
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != a ? a : void 0
    }),
    sendActivityBookmark: (e, t, n, a) => eg._sendMessage(e, {
      content: t,
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != a ? a : void 0
    }),
    sendClydeProfileOverride: (e, t, n, a) => eg._sendMessage(e, {
      content: t,
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != a ? a : void 0
    }),
    sendStickers(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return eg._sendMessage(e, {
        content: n,
        invalidEmojis: [],
        validNonShortcutEmojis: [],
        tts: l
      }, {
        ...a,
        stickerIds: t
      })
    },
    sendGreetMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        {
          messageReference: a,
          allowedMentions: l
        } = n;
      return s.default.post({
        url: es.Endpoints.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: l,
          message_reference: a
        },
        oldFormErrors: !0
      }).then(n => (D.default.donateSentMessage(n.body.content, e), eg.receiveMessage(e, n.body), r.default.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw eu.log("Failed to send greeting"), 429 !== t.status && eg.sendClydeError(e, t.body.code), r.default.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return eg._sendMessage(e, {
        content: "",
        tts: !1,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, {
        ...n,
        poll: t
      })
    },
    _sendMessage(e, t, n) {
      var a, s;
      let i = (0, G.default)(e);
      if (null != i) return eo.info("Converting channel to a private channel"), i.then(e => {
        eo.info("Finished converting channel to a private channel"), eg._sendMessage(e, t, n)
      });
      let d = t.content,
        {
          invalidEmojis: c,
          validNonShortcutEmojis: E,
          tts: f = !1
        } = t,
        {
          activityAction: h,
          location: m,
          suggestedInvite: S,
          stickerIds: A,
          messageReference: I,
          allowedMentions: T,
          poll: C
        } = n,
        y = null !== (a = n.flags) && void 0 !== a ? a : 0,
        [U, k] = (0, w.default)(d);
      if (U && (d = k, y = (0, $.addFlag)(y, es.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === d && null == h && null == A && null == C) return Promise.reject(Error("not sending empty message"));
      let B = null != I ? es.MessageTypes.REPLY : es.MessageTypes.DEFAULT,
        F = null !== (s = n.nonce) && void 0 !== s ? s : (0, O.createNonce)();
      if (!1 !== n.eagerDispatch) {
        let t = (0, O.default)({
          channelId: e,
          content: d,
          tts: f,
          type: B,
          messageReference: I,
          allowedMentions: T,
          flags: 0 !== y ? y : void 0,
          nonce: F,
          poll: (0, b.createPollServerDataFromCreateRequest)(C)
        });
        (0, N.updateComboOnMessageSend)(e, t.id), null != A && (t.sticker_items = A.map(e => P.default.getStickerById(e)).filter(e => null != e)), eg.receiveMessage(e, t, !0, n)
      }
      if (!ec && null != c && c.length > 0) {
        let t, n;
        ec = !0;
        let a = q.default.getCurrentUser();
        c.some(e => e.animated) && !en.default.canUseAnimatedEmojis(a) ? (t = ed.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : Y.default.canWithPartialContext(es.Permissions.USE_EXTERNAL_EMOJIS, {
          channelId: e
        }) ? (t = ed.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = ed.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), eg.sendBotMessage(e, t, n)
      }
      let H = {
        type: u.MessageDataType.SEND,
        message: {
          channelId: e,
          content: d,
          nonce: F,
          tts: f,
          message_reference: I,
          allowed_mentions: T,
          flags: y
        }
      };
      if (null != h) {
        let e = h.type === es.ActivityActionTypes.JOIN_REQUEST ? null == h ? void 0 : h.activity.session_id : V.default.getSessionId();
        if (null != e) {
          let t = {
              type: h.type,
              session_id: e
            },
            {
              activity: n
            } = h;
          null != n.party && null != n.party.id && (t.party_id = n.party.id), H.message.application_id = n.application_id, H.message.activity = t
        }
      }
      return null != C && (H.message.poll = C), null != A && (H.message.sticker_ids = A), R.default.isEnabled() && (H.message.has_poggermode_enabled = !0), new Promise((t, a) => {
        let s = Date.now(),
          i = u.default.length,
          c = Math.floor(1e4 * Math.random());
        eo.info("Queueing message to be sent LogId:".concat(c)), u.default.enqueue(H, u => {
          let c = Date.now() - s;
          if (u.ok) D.default.donateSentMessage(d, e), eg.receiveMessage(e, u.body, !0, {
            sendAnalytics: {
              duration: c,
              queueSize: i
            },
            poll: C
          }), L.default.recordMessageSendApiResponse(F), r.default.dispatch({
            type: "SLOWMODE_RESET_COOLDOWN",
            slowmodeType: X.SlowmodeType.SendMessage,
            channelId: e
          }), r.default.dispatch({
            type: "EMOJI_TRACK_USAGE",
            emojiUsed: E
          }), r.default.dispatch({
            type: "STICKER_TRACK_USAGE",
            stickerIds: A
          }), ! function(e) {
            let {
              content: t,
              channelId: n,
              messageId: a,
              location: s,
              suggested: i = null,
              overrideProperties: r = {}
            } = e;
            (0, g.default)(t).forEach(e => {
              let {
                type: t,
                code: d
              } = e;
              if (t === _.CodedLinkType.INVITE) ef({
                inviteKey: d,
                channelId: n,
                messageId: a,
                location: s,
                suggested: i,
                overrideProperties: r
              });
              else if (t === _.CodedLinkType.TEMPLATE) {
                let e = p.default.getGuildTemplate(d);
                if (null == e || e.state === er.GuildTemplateStates.RESOLVING) return;
                o.default.trackWithMetadata(es.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                  guild_template_code: d,
                  guild_template_name: e.name,
                  guild_template_description: e.description,
                  guild_template_guild_id: e.sourceGuildId
                })
              } else if (t === _.CodedLinkType.BUILD_OVERRIDE);
              else if (t === _.CodedLinkType.EVENT);
              else if (t === _.CodedLinkType.CHANNEL_LINK);
              else if (t === _.CodedLinkType.APP_DIRECTORY_PROFILE) Q.default.track(es.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                application_id: d,
                device_platform: l.isMobile ? "mobile_web" : "desktop_web",
                guild_id: z.default.getGuildId(),
                channel_id: J.default.getChannelId()
              });
              else if (t === _.CodedLinkType.ACTIVITY_BOOKMARK);
              else if (t === _.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
              else if (t === _.CodedLinkType.GUILD_PRODUCT);
              else if (t === _.CodedLinkType.SERVER_SHOP);
              else if (t === _.CodedLinkType.CLYDE_PROFILE);
              else throw Error("Unknown coded link type: ".concat(t))
            })
          }({
            content: d,
            channelId: e,
            messageId: u.body.id,
            location: null != m ? m : "chat_input",
            suggested: S
          }), ! function(e, t, n, a, l) {
            (0, ee.findGiftCodes)(e).forEach(e => {
              let s = x.default.getChannel(t);
              null != s && o.default.trackWithMetadata(es.AnalyticEvents.GIFT_CODE_SENT, {
                location: a,
                gift_code: e,
                guild_id: s.getGuildId(),
                channel_id: s.id,
                channel_type: s.type,
                message_id: n,
                automatic_send: l
              })
            })
          }(d, e, u.body.id, null != m ? m : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(u);
          else {
            var f;
            eu.log("Failed to send message", {
              hasErr: u.hasErr,
              status: u.status,
              code: null === (f = u.body) || void 0 === f ? void 0 : f.code,
              error: u.err
            });
            let t = !1;
            if (u.hasErr) "ABORTED" === u.err.code && (t = !0);
            else if (u.status >= 400 && u.status < 500 && u.body) {
              if (u.body.code === es.AbortCodes.SLOWMODE_RATE_LIMITED) {
                let t = u.body.retry_after;
                null != t && t > 0 && r.default.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: X.SlowmodeType.SendMessage,
                  cooldownMs: t * Z.default.Millis.SECOND
                })
              } else M.AUTOMOD_ERROR_CODES.has(u.body.code) ? r.default.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: H,
                errorResponseBody: {
                  code: u.body.code,
                  message: u.body.message
                }
              }) : u.body.code === es.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? r.default.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : u.body.code === es.AbortCodes.CLYDE_CONSENT_REQUIRED ? r.default.dispatch({
                type: "MESSAGE_FAILED_CLYDE_CONSENT",
                messageId: F,
                channelId: e
              }) : null != C || eg.sendClydeError(e, u.body.code)
            }
            t ? eg.deleteMessage(e, F, !0) : (r.default.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: F,
              channelId: e
            }), (0, v.logMessageSendFailure)({
              failureCode: u.hasErr ? void 0 : u.status,
              errorMessage: u.hasErr ? u.err.message : void 0
            })), a(u)
          }
        }, c)
      })
    },
    startEditMessage(e, t, n, a) {
      r.default.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t,
        content: n,
        source: a
      })
    },
    updateEditMessage(e, t, n) {
      r.default.dispatch({
        type: "MESSAGE_UPDATE_EDIT",
        channelId: e,
        textValue: t,
        richValue: n
      })
    },
    endEditMessage(e, t) {
      r.default.dispatch({
        type: "MESSAGE_END_EDIT",
        channelId: e,
        response: t
      })
    },
    async editMessage(e, t, n) {
      let {
        content: a
      } = n;
      await k.default.unarchiveThreadIfNecessary(e);
      let l = function(e, t) {
          let n = K.default.getMessage(e, t);
          if (null == n || n.type !== es.MessageTypes.REPLY) return;
          let a = U.default.getMessageByReference(n.messageReference);
          if (a.state === U.ReferencedMessageState.LOADED) {
            if (!n.mentions.includes(a.message.author.id)) return {
              parse: Object.values(es.AllowedMentionTypes),
              replied_user: !1
            }
          }
        }(e, t),
        s = {
          channelId: e,
          messageId: t,
          content: a,
          allowed_mentions: l
        };
      u.default.enqueue({
        type: u.MessageDataType.EDIT,
        message: s
      }, n => {
        let a = !n.hasErr && M.AUTOMOD_ERROR_CODES.has(n.body.code);
        if (a) {
          let e = {
            type: u.MessageDataType.EDIT,
            message: s
          };
          r.default.dispatch({
            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
            messageData: e,
            errorResponseBody: {
              code: n.body.code,
              message: n.body.message
            }
          })
        }
        n.hasErr ? i.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : a ? i.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : i.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eg.endEditMessage(e, n.hasErr ? void 0 : n), eg.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await k.default.unarchiveThreadIfNecessary(e), s.default.patch({
        url: es.Endpoints.MESSAGE(e, t),
        body: {
          flags: es.MessageFlags.SUPPRESS_EMBEDS
        },
        oldFormErrors: !0
      })
    },
    async patchMessageAttachments(e, t, n) {
      await k.default.unarchiveThreadIfNecessary(e), s.default.patch({
        url: es.Endpoints.MESSAGE(e, t),
        body: {
          attachments: n
        },
        oldFormErrors: !0
      })
    },
    async deleteMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = () => {
          r.default.dispatch({
            type: "MESSAGE_DELETE",
            id: t,
            channelId: e
          }).then(() => {
            i.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
          })
        };
      n ? a() : (await k.default.unarchiveThreadIfNecessary(e), s.default.delete({
        url: es.Endpoints.MESSAGE(e, t),
        oldFormErrors: !0
      }).then(() => {
        a()
      }));
      let l = K.default.getMessage(e, t);
      (null == l ? void 0 : l.type) === es.MessageTypes.GUILD_INVITE_REMINDER && (0, y.trackGuildInviteNotificationDismissed)()
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && o.default.trackWithMetadata(es.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
        message_name: e.loggingName,
        message_author: e.author.username
      }), this.deleteMessage(e.channel_id, e.id, !0)
    },
    revealMessage(e, t) {
      r.default.dispatch({
        type: "MESSAGE_REVEAL",
        channelId: e,
        messageId: t
      })
    },
    crosspostMessage: (e, t) => s.default.post({
      url: es.Endpoints.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: !0
    }).catch(e => {
      let t;
      t = 429 === e.status ? ed.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : ed.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, el.default.show({
        title: ed.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
        body: t,
        confirmText: ed.default.Messages.OKAY
      })
    }),
    trackInvite: ef
  };
var eh = eg