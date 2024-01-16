"use strict";
n.r(t), n.d(t, {
  default: function() {
    return em
  }
}), n("70102"), n("222007"), n("702976");
var a = n("394846"),
  l = n("872717"),
  s = n("819855"),
  i = n("913144"),
  r = n("408062"),
  d = n("979911"),
  u = n("716241"),
  o = n("802493"),
  c = n("595525"),
  E = n("219788"),
  f = n("679653"),
  _ = n("139514"),
  g = n("312016"),
  h = n("605250"),
  m = n("619443"),
  S = n("582415"),
  p = n("600798"),
  M = n("569808"),
  T = n("9294"),
  A = n("52393"),
  I = n("143291"),
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
var H = n("305961"),
  K = n("337543"),
  Y = n("377253"),
  W = n("957255"),
  j = n("824563"),
  X = n("660478"),
  J = n("27618"),
  z = n("18494"),
  q = n("162771"),
  Q = n("401848"),
  Z = n("697218"),
  $ = n("599110"),
  ee = n("568734"),
  et = n("659632"),
  en = n("701909"),
  ea = n("719923"),
  el = n("299039"),
  es = n("404118"),
  ei = n("49111"),
  er = n("724210"),
  ed = n("579033"),
  eu = n("782340");
let eo = new h.default("MessageActionCreators"),
  ec = new h.default("MessageQueue"),
  eE = !1;
class ef {
  markComplete() {
    this.completed = !0
  }
  constructor() {
    this.completed = !1
  }
}

function e_(e) {
  let {
    inviteKey: t,
    channelId: n,
    messageId: a,
    location: l,
    suggested: s = null,
    overrideProperties: i = {}
  } = e, r = (0, T.parseExtraDataFromInviteKey)(t), d = x.default.getChannel(n);
  if (null != d) {
    let e = null;
    d.isMultiUserDM() ? e = ei.LoggingInviteTypes.GDM_INVITE : !d.isPrivate() && (e = ei.LoggingInviteTypes.SERVER_INVITE);
    let n = {},
      c = K.default.getInvite(t);
    if (null != c && c.state === ei.InviteStates.RESOLVED && null != c.channel) {
      var o;
      let t = c.channel;
      n.invite_channel_id = t.id, n.invite_guild_id = null === (o = c.guild) || void 0 === o ? void 0 : o.id, n.invite_channel_type = t.type, null != c.inviter && (n.invite_inviter_id = c.inviter.id);
      let a = F.default.getLastActiveStream();
      if (null != a && a.channelId === t.id) {
        e = ei.LoggingInviteTypes.STREAM, n.destination_user_id = a.ownerId;
        let t = (0, S.getStreamerApplication)(a, j.default);
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
      send_type: ei.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: r.guildScheduledEventId,
      ...i
    }, u.default.trackWithMetadata(ei.AnalyticEvents.INVITE_SENT, n)
  } else {
    let e = {},
      n = K.default.getInvite(t);
    null != n && n.state === ei.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
      ...e,
      location: l,
      invite_type: ei.LoggingInviteTypes.FRIEND_INVITE,
      invite_code: r.baseCode,
      message_id: a,
      send_type: ei.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: r.guildScheduledEventId,
      ...i
    }, u.default.trackWithMetadata(ei.AnalyticEvents.INVITE_SENT, e))
  }
}
let eg = {
    [ei.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
      messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
      messageGetter: () => eu.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
    },
    [ei.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
      messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
      messageGetter: () => eu.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: en.default.getArticleURL(ei.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      })
    },
    [ei.AbortCodes.RATE_LIMIT_DM_OPEN]: {
      messageName: "BOT_DM_RATE_LIMITED",
      messageGetter: () => eu.default.Messages.BOT_DM_RATE_LIMITED
    },
    [ei.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => eu.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    },
    [ei.AbortCodes.SLOWMODE_RATE_LIMITED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => eu.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    }
  },
  eh = {
    receiveMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      i.default.dispatch({
        type: "MESSAGE_CREATE",
        channelId: e,
        message: t,
        optimistic: n,
        sendMessageOptions: a,
        isPushNotification: !1
      })
    },
    sendBotMessage(e, t, n) {
      null != n && u.default.trackWithMetadata(ei.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), eh.receiveMessage(e, (0, O.createBotMessage)({
        channelId: e,
        content: t,
        loggingName: n
      }))
    },
    sendClydeError(e) {
      let t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        l = x.default.getChannel(e);
      if (null != l) {
        if (a === ei.AbortCodes.EXPLICIT_CONTENT) {
          if (l.isDM()) t = eu.default.Messages.BOT_DM_EXPLICIT_CONTENT.format({
            name: (0, f.computeChannelName)(l, Z.default, J.default)
          }), n = "BOT_DM_EXPLICIT_CONTENT";
          else if (l.isMultiUserDM()) t = eu.default.Messages.BOT_GDM_EXPLICIT_CONTENT.format({
            name: (0, f.computeChannelName)(l, Z.default, J.default)
          }), n = "BOT_GDM_EXPLICIT_CONTENT";
          else {
            let e = H.default.getGuild(l.getGuildId());
            if (null == e) return;
            t = eu.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
              name: e.toString()
            }), n = "BOT_GUILD_EXPLICIT_CONTENT"
          }
        } else if (a === ei.AbortCodes.SLOWMODE_RATE_LIMITED) t = eu.default.Messages.CHANNEL_SLOWMODE_DESC.format({
          seconds: l.rateLimitPerUser
        }), n = "SLOWMODE_RATE_LIMITED";
        else if (a === ei.AbortCodes.INVALID_MESSAGE_SEND_USER) t = eu.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
          helpUrl: en.default.getArticleURL(ei.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
        }), n = "INVALID_MESSAGE_SEND_USER";
        else if (a === ei.AbortCodes.TOO_MANY_THREADS) {
          let e = l.isForumLikeChannel() || l.isForumPost();
          t = e ? eu.default.Messages.BOT_DM_TOO_MANY_POSTS : eu.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS"
        } else a === ei.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = eu.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : a === ei.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = eu.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
          helpUrl: ei.MarketingURLs.HARMFUL_LINKS
        }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : a in eg ? (n = eg[a].messageName, t = eg[a].messageGetter()) : (t = eu.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
          helpUrl: en.default.getArticleURL(ei.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
        }), n = "SEND_FAILED (".concat(a, ")"));
        eh.sendBotMessage(e, t, n)
      }
    },
    truncateMessages(e, t, n) {
      i.default.dispatch({
        type: "TRUNCATE_MESSAGES",
        channelId: e,
        truncateBottom: t,
        truncateTop: n
      })
    },
    clearChannel(e) {
      i.default.dispatch({
        type: "CLEAR_MESSAGES",
        channelId: e
      })
    },
    jumpToPresent(e, t) {
      eh.trackJump(e, null, "Present");
      let n = {
        present: !0
      };
      Y.default.hasPresent(e) ? i.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : eh.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, a) {
      u.default.trackWithMetadata(ei.AnalyticEvents.JUMP, {
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
      return "string" == typeof s && eh.trackJump(t, n, s, i), eh.fetchMessages({
        channelId: t,
        limit: ei.MAX_MESSAGES_FOR_JUMP,
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
      eh.fetchMessages({
        channelId: t,
        limit: ei.MAX_MESSAGES_FOR_JUMP,
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
        limit: s,
        jump: d,
        focus: u,
        isPreload: o,
        skipLocalFetch: c,
        truncate: E
      } = e, f = x.default.getChannel(t), _ = m.default.isConnectedOrOverlay(), g = Date.now();
      if (null != f && f.type === ei.ChannelTypes.GUILD_STORE) return !1;
      if (t === er.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
      if (eo.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(a, ". jump=").concat(JSON.stringify(d))), eh._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: a,
          limit: s,
          jump: d,
          focus: u,
          truncate: E
        })) return;
      B.default.fetchMessages.recordStart();
      let h = null != d ? d : void 0;
      null == h && null != u && (h = {
        ...u
      });
      let S = r.default.getOrCreate(t),
        p = S.loadStart(h);
      r.default.commit(p), i.default.dispatch({
        type: "LOAD_MESSAGES"
      });
      let M = null == h ? void 0 : h.messageId,
        T = new ef;
      return !c && this.fetchLocalMessages(t, n, a, s, T), l.default.get({
        url: ei.Endpoints.MESSAGES(t),
        query: {
          before: n,
          after: a,
          limit: s,
          around: M,
          preload: o
        },
        retries: 2,
        oldFormErrors: !0
      }).then(e => (B.default.fetchMessages.recordEnd(), B.default.dispatchMessages.measure(() => {
        let l = e.body,
          r = null != n,
          u = null != a,
          o = null == n && null == a,
          c = null != M || l.length === s && (r || o),
          f = null != M || u && l.length === s;
        if (null != M) {
          let e = Math.floor(s / 2),
            n = [M, ...l.map(e => {
              let {
                id: t
              } = e;
              return t
            })].filter((e, t, n) => n.indexOf(e) === t).sort(el.default.compare),
            a = n.indexOf(M);
          if (a < e && (c = !1), l.length - a < e && (f = !1), f && l.length > 0) {
            let e = X.default.lastMessageId(t);
            l[0].id === e && (f = !1)
          }
        }
        eo.log("Fetched ".concat(l.length, " messages for ").concat(t, " isBefore:").concat(r, " isAfter:").concat(u)), T.markComplete(), i.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: t,
          messages: l,
          isBefore: r,
          isAfter: u,
          hasMoreBefore: c,
          hasMoreAfter: f,
          limit: s,
          jump: d,
          isStale: !_ || m.default.lastTimeConnectedChanged() >= g,
          truncate: E
        })
      }), !0), () => (eo.log("Failed to fetch messages for ".concat(t)), i.default.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), !1))
    },
    async fetchLocalMessages(e, t, n, a, l) {
      let s = x.default.getBasicChannel(e),
        d = r.default.getOrCreate(e),
        u = o.default.database();
      if (null == u || null == s || null != t || null != n) {
        B.default.addLocalMessages(e, -1);
        return
      }
      if (d.ready && !d.cached) {
        B.default.addLocalMessages(e, -2);
        return
      }
      let f = await (0, c.tryLoadAsync)(() => E.default.load(u, e, a));
      if (null == f) {
        B.default.addLocalMessages(e, -3);
        return
      }
      if (eo.log("fetched ".concat(f.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(l.completed, ")")), B.default.addLocalMessages(e, f.messages.length), !l.completed && f.messages.length > 0) {
        let t = f.messages.length >= a && f.connectionId === m.default.lastTimeConnectedChanged();
        i.default.dispatch({
          type: "LOCAL_MESSAGES_LOADED",
          guildId: s.guild_id,
          channelId: e,
          users: f.users,
          members: f.members,
          messages: f.messages,
          stale: !t
        })
      }
    },
    async fetchNewLocalMessages(e, t) {
      var n;
      let a = x.default.getBasicChannel(e),
        l = o.default.database();
      if (null == l || null == a) return;
      let s = r.default.getOrCreate(e);
      if (s.hasMoreAfter) return;
      let d = await (0, c.tryLoadAsync)(() => E.default.load(l, e, t));
      if (null == d) return;
      s = r.default.getOrCreate(e);
      let u = null === (n = s.last()) || void 0 === n ? void 0 : n.id,
        f = null == u ? d.messages : d.messages.filter(e => el.default.compare(e.id, u) > 0);
      eo.log("Fetched ".concat(d.messages.length, " messages from the cache after foregrounding. ").concat(f.length, " are new")), 0 !== f.length && i.default.dispatch({
        type: "LOCAL_MESSAGES_LOADED",
        guildId: a.guild_id,
        channelId: e,
        users: d.users,
        members: d.members,
        messages: f,
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
        focus: r,
        truncate: d
      } = e, u = Y.default.getMessages(t);
      if (u.cached || !u.ready) return !1;
      if ((null == s ? void 0 : s.messageId) != null || (null == r ? void 0 : r.messageId) != null) {
        if ((null == s ? void 0 : s.messageId) != null && u.has(s.messageId, !1)) return i.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: l,
          truncate: d
        }), !0;
        if ((null == r ? void 0 : r.messageId) != null) {
          if (u.has(r.messageId, !1)) return i.default.dispatch({
            type: "LOAD_MESSAGES_SUCCESS_CACHED",
            channelId: t,
            focus: r,
            limit: l,
            truncate: d
          }), !0;
          s = {
            ...r
          }
        }
        let e = (null == s ? void 0 : s.messageId) != null ? el.default.extractTimestamp(null == s ? void 0 : s.messageId) : 0,
          n = u.first(),
          a = u.last();
        if (!u.hasMoreBefore && null != n && el.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != a && el.default.extractTimestamp(a.id) <= e || null != n && null != a && el.default.extractTimestamp(n.id) < e && el.default.extractTimestamp(a.id) > e) return i.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: ei.MAX_MESSAGES_FOR_JUMP
        }), !0
      } else if (null != n && u.hasBeforeCached(n)) return i.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        before: n,
        limit: l,
        truncate: d
      }), !0;
      else if (null != a && u.hasAfterCached(a)) return i.default.dispatch({
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
      if (null != s) return eh.sendMessage(s, t, a, l);
      let i = () => eh._sendMessage(e, t, l),
        r = I.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
          location: "8e1e29_1"
        }).enableBackgroundSending ? C.default.backgroundify(i, void 0) : i,
        d = null !== (n = l.nonce) && void 0 !== n ? n : (0, O.createNonce)();
      return (l = {
        ...l,
        nonce: d
      }, L.default.recordMessageSendAttempt(e, d), Y.default.isReady(e)) ? r() : a && e !== er.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (ec.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        Y.default.whenReady(e, () => {
          ec.info("Channel ".concat(e, " is ready for sending now.")), r().then(t, n)
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
          parse: Object.values(ei.AllowedMentionTypes),
          replied_user: !1
        };
      return {
        messageReference: n,
        allowedMentions: a
      }
    },
    sendInvite: (e, t, n, a) => eh._sendMessage(e, {
      content: (0, A.default)(t),
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != a ? a : void 0
    }),
    sendActivityBookmark: (e, t, n, a) => eh._sendMessage(e, {
      content: t,
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != a ? a : void 0
    }),
    sendClydeProfileOverride: (e, t, n, a) => eh._sendMessage(e, {
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
      return eh._sendMessage(e, {
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
          allowedMentions: s
        } = n;
      return l.default.post({
        url: ei.Endpoints.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: s,
          message_reference: a
        },
        oldFormErrors: !0
      }).then(n => (D.default.donateSentMessage(n.body.content, e), eh.receiveMessage(e, n.body), i.default.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw eo.log("Failed to send greeting"), 429 !== t.status && eh.sendClydeError(e, t.body.code), i.default.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return eh._sendMessage(e, {
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
      var l, s;
      let r = (0, G.default)(e);
      if (null != r) return ec.info("Converting channel to a private channel"), r.then(e => {
        ec.info("Finished converting channel to a private channel"), eh._sendMessage(e, t, n)
      });
      let o = t.content,
        {
          invalidEmojis: c,
          validNonShortcutEmojis: E,
          tts: f = !1
        } = t,
        {
          activityAction: h,
          location: m,
          suggestedInvite: S,
          stickerIds: T,
          messageReference: A,
          allowedMentions: I,
          poll: C
        } = n,
        y = null !== (l = n.flags) && void 0 !== l ? l : 0,
        [U, k] = (0, w.default)(o);
      if (U && (o = k, y = (0, ee.addFlag)(y, ei.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === o && null == h && null == T && null == C) return Promise.reject(Error("not sending empty message"));
      let B = null != A ? ei.MessageTypes.REPLY : ei.MessageTypes.DEFAULT,
        F = null !== (s = n.nonce) && void 0 !== s ? s : (0, O.createNonce)();
      if (!1 !== n.eagerDispatch) {
        let t = (0, O.default)({
          channelId: e,
          content: o,
          tts: f,
          type: B,
          messageReference: A,
          allowedMentions: I,
          flags: 0 !== y ? y : void 0,
          nonce: F,
          poll: (0, b.createPollServerDataFromCreateRequest)(C)
        });
        (0, N.updateComboOnMessageSend)(e, t.id), null != T && (t.sticker_items = T.map(e => P.default.getStickerById(e)).filter(e => null != e)), eh.receiveMessage(e, t, !0, n)
      }
      if (!eE && null != c && c.length > 0) {
        let t, n;
        eE = !0;
        let a = Z.default.getCurrentUser();
        c.some(e => e.animated) && !ea.default.canUseAnimatedEmojis(a) ? (t = eu.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : W.default.canWithPartialContext(ei.Permissions.USE_EXTERNAL_EMOJIS, {
          channelId: e
        }) ? (t = eu.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = eu.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), eh.sendBotMessage(e, t, n)
      }
      let H = {
        type: d.MessageDataType.SEND,
        message: {
          channelId: e,
          content: o,
          nonce: F,
          tts: f,
          message_reference: A,
          allowed_mentions: I,
          flags: y
        }
      };
      if (null != h) {
        let e = h.type === ei.ActivityActionTypes.JOIN_REQUEST ? null == h ? void 0 : h.activity.session_id : V.default.getSessionId();
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
      return null != C && (H.message.poll = C), null != T && (H.message.sticker_ids = T), R.default.isEnabled() && (H.message.has_poggermode_enabled = !0), new Promise((t, l) => {
        let s = Date.now(),
          r = d.default.length,
          c = Math.floor(1e4 * Math.random());
        ec.info("Queueing message to be sent LogId:".concat(c)), d.default.enqueue(H, d => {
          let c = Date.now() - s;
          if (d.ok) D.default.donateSentMessage(o, e), eh.receiveMessage(e, d.body, !0, {
            sendAnalytics: {
              duration: c,
              queueSize: r
            },
            poll: C
          }), L.default.recordMessageSendApiResponse(F), i.default.dispatch({
            type: "SLOWMODE_RESET_COOLDOWN",
            slowmodeType: Q.SlowmodeType.SendMessage,
            channelId: e
          }), i.default.dispatch({
            type: "EMOJI_TRACK_USAGE",
            emojiUsed: E
          }), i.default.dispatch({
            type: "STICKER_TRACK_USAGE",
            stickerIds: T
          }), ! function(e) {
            let {
              content: t,
              channelId: n,
              messageId: l,
              location: s,
              suggested: i = null,
              overrideProperties: r = {}
            } = e;
            (0, g.default)(t).forEach(e => {
              let {
                type: t,
                code: d
              } = e;
              if (t === _.CodedLinkType.INVITE) e_({
                inviteKey: d,
                channelId: n,
                messageId: l,
                location: s,
                suggested: i,
                overrideProperties: r
              });
              else if (t === _.CodedLinkType.TEMPLATE) {
                let e = M.default.getGuildTemplate(d);
                if (null == e || e.state === ed.GuildTemplateStates.RESOLVING) return;
                u.default.trackWithMetadata(ei.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                  guild_template_code: d,
                  guild_template_name: e.name,
                  guild_template_description: e.description,
                  guild_template_guild_id: e.sourceGuildId
                })
              } else if (t === _.CodedLinkType.BUILD_OVERRIDE);
              else if (t === _.CodedLinkType.EVENT);
              else if (t === _.CodedLinkType.CHANNEL_LINK);
              else if (t === _.CodedLinkType.APP_DIRECTORY_PROFILE) $.default.track(ei.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                application_id: d,
                device_platform: a.isMobile ? "mobile_web" : "desktop_web",
                guild_id: q.default.getGuildId(),
                channel_id: z.default.getChannelId()
              });
              else if (t === _.CodedLinkType.ACTIVITY_BOOKMARK);
              else if (t === _.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
              else if (t === _.CodedLinkType.GUILD_PRODUCT);
              else if (t === _.CodedLinkType.SERVER_SHOP);
              else if (t === _.CodedLinkType.CLYDE_PROFILE);
              else throw Error("Unknown coded link type: ".concat(t))
            })
          }({
            content: o,
            channelId: e,
            messageId: d.body.id,
            location: null != m ? m : "chat_input",
            suggested: S
          }), ! function(e, t, n, a, l) {
            (0, et.findGiftCodes)(e).forEach(e => {
              let s = x.default.getChannel(t);
              null != s && u.default.trackWithMetadata(ei.AnalyticEvents.GIFT_CODE_SENT, {
                location: a,
                gift_code: e,
                guild_id: s.getGuildId(),
                channel_id: s.id,
                channel_type: s.type,
                message_id: n,
                automatic_send: l
              })
            })
          }(o, e, d.body.id, null != m ? m : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(d);
          else {
            var f;
            eo.log("Failed to send message", {
              hasErr: d.hasErr,
              status: d.status,
              code: null === (f = d.body) || void 0 === f ? void 0 : f.code,
              error: d.err
            });
            let t = !1;
            if (d.hasErr) "ABORTED" === d.err.code && (t = !0);
            else if (d.status >= 400 && d.status < 500 && d.body) {
              if (d.body.code === ei.AbortCodes.SLOWMODE_RATE_LIMITED) {
                let t = d.body.retry_after;
                null != t && t > 0 && i.default.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: Q.SlowmodeType.SendMessage,
                  cooldownMs: 1e3 * t
                })
              } else p.AUTOMOD_ERROR_CODES.has(d.body.code) ? i.default.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: H,
                errorResponseBody: {
                  code: d.body.code,
                  message: d.body.message
                }
              }) : d.body.code === ei.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? i.default.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : d.body.code === ei.AbortCodes.CLYDE_CONSENT_REQUIRED ? i.default.dispatch({
                type: "MESSAGE_FAILED_CLYDE_CONSENT",
                messageId: F,
                channelId: e
              }) : null != C || eh.sendClydeError(e, d.body.code)
            }
            t ? eh.deleteMessage(e, F, !0) : (i.default.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: F,
              channelId: e
            }), (0, v.logMessageSendFailure)({
              failureCode: d.hasErr ? void 0 : d.status,
              errorMessage: d.hasErr ? d.err.message : void 0
            })), l(d)
          }
        }, c)
      })
    },
    startEditMessage(e, t, n, a) {
      i.default.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t,
        content: n,
        source: a
      })
    },
    updateEditMessage(e, t, n) {
      i.default.dispatch({
        type: "MESSAGE_UPDATE_EDIT",
        channelId: e,
        textValue: t,
        richValue: n
      })
    },
    endEditMessage(e, t) {
      i.default.dispatch({
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
          let n = Y.default.getMessage(e, t);
          if (null == n || n.type !== ei.MessageTypes.REPLY) return;
          let a = U.default.getMessageByReference(n.messageReference);
          if (a.state === U.ReferencedMessageState.LOADED) {
            if (!n.mentions.includes(a.message.author.id)) return {
              parse: Object.values(ei.AllowedMentionTypes),
              replied_user: !1
            }
          }
        }(e, t),
        r = {
          channelId: e,
          messageId: t,
          content: a,
          allowed_mentions: l
        };
      d.default.enqueue({
        type: d.MessageDataType.EDIT,
        message: r
      }, n => {
        let a = !n.hasErr && p.AUTOMOD_ERROR_CODES.has(n.body.code);
        if (a) {
          let e = {
            type: d.MessageDataType.EDIT,
            message: r
          };
          i.default.dispatch({
            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
            messageData: e,
            errorResponseBody: {
              code: n.body.code,
              message: n.body.message
            }
          })
        }
        n.hasErr ? s.AccessibilityAnnouncer.announce(eu.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : a ? s.AccessibilityAnnouncer.announce(eu.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : s.AccessibilityAnnouncer.announce(eu.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eh.endEditMessage(e, n.hasErr ? void 0 : n), eh.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await k.default.unarchiveThreadIfNecessary(e), l.default.patch({
        url: ei.Endpoints.MESSAGE(e, t),
        body: {
          flags: ei.MessageFlags.SUPPRESS_EMBEDS
        },
        oldFormErrors: !0
      })
    },
    async patchMessageAttachments(e, t, n) {
      await k.default.unarchiveThreadIfNecessary(e), l.default.patch({
        url: ei.Endpoints.MESSAGE(e, t),
        body: {
          attachments: n
        },
        oldFormErrors: !0
      })
    },
    async deleteMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = () => {
          i.default.dispatch({
            type: "MESSAGE_DELETE",
            id: t,
            channelId: e
          }).then(() => {
            s.AccessibilityAnnouncer.announce(eu.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
          })
        };
      n ? a() : (await k.default.unarchiveThreadIfNecessary(e), l.default.delete({
        url: ei.Endpoints.MESSAGE(e, t),
        oldFormErrors: !0
      }).then(() => {
        a()
      }));
      let r = Y.default.getMessage(e, t);
      (null == r ? void 0 : r.type) === ei.MessageTypes.GUILD_INVITE_REMINDER && (0, y.trackGuildInviteNotificationDismissed)()
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && u.default.trackWithMetadata(ei.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
        message_name: e.loggingName,
        message_author: e.author.username
      }), this.deleteMessage(e.channel_id, e.id, !0)
    },
    revealMessage(e, t) {
      i.default.dispatch({
        type: "MESSAGE_REVEAL",
        channelId: e,
        messageId: t
      })
    },
    crosspostMessage: (e, t) => l.default.post({
      url: ei.Endpoints.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: !0
    }).catch(e => {
      let t;
      t = 429 === e.status ? eu.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : eu.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, es.default.show({
        title: eu.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
        body: t,
        confirmText: eu.default.Messages.OKAY
      })
    }),
    trackInvite: e_
  };
var em = eh