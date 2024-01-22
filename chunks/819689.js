"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ep
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
  _ = n("679653"),
  g = n("139514"),
  h = n("312016"),
  m = n("605250"),
  S = n("619443"),
  p = n("582415"),
  M = n("600798"),
  T = n("569808"),
  I = n("9294"),
  A = n("52393"),
  C = n("143291"),
  L = n("379534"),
  D = n("40566"),
  O = n("994918"),
  v = n("815297"),
  y = n("168730"),
  N = n("129953"),
  R = n("28007"),
  b = n("880731"),
  G = n("562228"),
  U = n("793277");
n("685841");
var P = n("256572"),
  w = n("364685"),
  k = n("804888"),
  B = n("263024"),
  F = n("410912"),
  V = n("373469"),
  x = n("271938"),
  H = n("42203");
n("836417");
var K = n("305961"),
  Y = n("337543"),
  W = n("377253"),
  j = n("957255"),
  X = n("824563"),
  J = n("660478"),
  z = n("27618"),
  q = n("18494"),
  Q = n("162771"),
  Z = n("401848"),
  $ = n("697218"),
  ee = n("599110"),
  et = n("718517"),
  en = n("568734"),
  ea = n("659632"),
  el = n("701909"),
  es = n("719923"),
  ei = n("299039"),
  er = n("404118"),
  ed = n("49111"),
  eu = n("724210"),
  eo = n("579033"),
  ec = n("782340");
let eE = new m.default("MessageActionCreators"),
  ef = new m.default("MessageQueue"),
  e_ = !1;
class eg {
  markComplete() {
    this.completed = !0
  }
  constructor() {
    this.completed = !1
  }
}

function eh(e) {
  let {
    inviteKey: t,
    channelId: n,
    messageId: a,
    location: l,
    suggested: s = null,
    overrideProperties: i = {}
  } = e, r = (0, I.parseExtraDataFromInviteKey)(t), d = H.default.getChannel(n);
  if (null != d) {
    let e = null;
    d.isMultiUserDM() ? e = ed.LoggingInviteTypes.GDM_INVITE : !d.isPrivate() && (e = ed.LoggingInviteTypes.SERVER_INVITE);
    let n = {},
      c = Y.default.getInvite(t);
    if (null != c && c.state === ed.InviteStates.RESOLVED && null != c.channel) {
      var u;
      let t = c.channel;
      n.invite_channel_id = t.id, n.invite_guild_id = null === (u = c.guild) || void 0 === u ? void 0 : u.id, n.invite_channel_type = t.type, null != c.inviter && (n.invite_inviter_id = c.inviter.id);
      let a = V.default.getLastActiveStream();
      if (null != a && a.channelId === t.id) {
        e = ed.LoggingInviteTypes.STREAM, n.destination_user_id = a.ownerId;
        let t = (0, p.getStreamerApplication)(a, X.default);
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
      send_type: ed.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: r.guildScheduledEventId,
      ...i
    }, o.default.trackWithMetadata(ed.AnalyticEvents.INVITE_SENT, n)
  } else {
    let e = {},
      n = Y.default.getInvite(t);
    null != n && n.state === ed.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
      ...e,
      location: l,
      invite_type: ed.LoggingInviteTypes.FRIEND_INVITE,
      invite_code: r.baseCode,
      message_id: a,
      send_type: ed.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: r.guildScheduledEventId,
      ...i
    }, o.default.trackWithMetadata(ed.AnalyticEvents.INVITE_SENT, e))
  }
}
let em = {
    [ed.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
      messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
      messageGetter: () => ec.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
    },
    [ed.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
      messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
      messageGetter: () => ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: el.default.getArticleURL(ed.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      })
    },
    [ed.AbortCodes.RATE_LIMIT_DM_OPEN]: {
      messageName: "BOT_DM_RATE_LIMITED",
      messageGetter: () => ec.default.Messages.BOT_DM_RATE_LIMITED
    },
    [ed.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => ec.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    },
    [ed.AbortCodes.SLOWMODE_RATE_LIMITED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => ec.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    }
  },
  eS = {
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
      null != n && o.default.trackWithMetadata(ed.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), eS.receiveMessage(e, (0, v.createBotMessage)({
        messageId: a,
        channelId: e,
        content: t,
        loggingName: n
      }))
    },
    sendClydeError(e) {
      let t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        l = H.default.getChannel(e);
      if (null != l) {
        if (a === ed.AbortCodes.SLOWMODE_RATE_LIMITED) t = ec.default.Messages.CHANNEL_SLOWMODE_DESC.format({
          seconds: l.rateLimitPerUser
        }), n = "SLOWMODE_RATE_LIMITED";
        else if (a === ed.AbortCodes.INVALID_MESSAGE_SEND_USER) t = ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
          helpUrl: el.default.getArticleURL(ed.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
        }), n = "INVALID_MESSAGE_SEND_USER";
        else if (a === ed.AbortCodes.TOO_MANY_THREADS) {
          let e = l.isForumLikeChannel() || l.isForumPost();
          t = e ? ec.default.Messages.BOT_DM_TOO_MANY_POSTS : ec.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS"
        } else a === ed.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ec.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : a === ed.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ec.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
          helpUrl: ed.MarketingURLs.HARMFUL_LINKS
        }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : a in em ? (n = em[a].messageName, t = em[a].messageGetter()) : (t = ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
          helpUrl: el.default.getArticleURL(ed.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
        }), n = "SEND_FAILED (".concat(a, ")"));
        eS.sendBotMessage(e, t, n)
      }
    },
    sendExplicitMediaClydeError(e, t) {
      let n = H.default.getChannel(e);
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
        message: ec.default.Messages.BOT_DM_EXPLICIT_CONTENT.format({
          name: (0, _.computeChannelName)(n, $.default, z.default)
        }),
        messageName: "BOT_DM_EXPLICIT_CONTENT"
      })).with({
        isDM: !1,
        isGDM: !0
      }, () => ({
        message: ec.default.Messages.BOT_GDM_EXPLICIT_CONTENT.format({
          name: (0, _.computeChannelName)(n, $.default, z.default)
        }),
        messageName: "BOT_GDM_EXPLICIT_CONTENT"
      })).otherwise(() => {
        let e = K.default.getGuild(n.getGuildId());
        return null == e ? {} : {
          message: ec.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
            name: e.toString()
          }),
          messageName: "BOT_GUILD_EXPLICIT_CONTENT"
        }
      });
      if (null == l || null == s) return;
      let i = (0, v.createNonce)();
      null != t && t.length > 0 && r.default.dispatch({
        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
        messageId: i,
        channelId: e,
        attachments: t
      }), eS.sendBotMessage(e, l, s, i)
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
      eS.trackJump(e, null, "Present");
      let n = {
        present: !0
      };
      W.default.hasPresent(e) ? r.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : eS.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, a) {
      o.default.trackWithMetadata(ed.AnalyticEvents.JUMP, {
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
      return "string" == typeof s && eS.trackJump(t, n, s, i), eS.fetchMessages({
        channelId: t,
        limit: ed.MAX_MESSAGES_FOR_JUMP,
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
      eS.fetchMessages({
        channelId: t,
        limit: ed.MAX_MESSAGES_FOR_JUMP,
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
      } = e, f = H.default.getChannel(t), _ = S.default.isConnectedOrOverlay(), g = Date.now();
      if (null != f && f.type === ed.ChannelTypes.GUILD_STORE) return !1;
      if (t === eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
      if (eE.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(a, ". jump=").concat(JSON.stringify(i))), eS._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: a,
          limit: l,
          jump: i,
          focus: u,
          truncate: E
        })) return;
      F.default.fetchMessages.recordStart();
      let h = null != i ? i : void 0;
      null == h && null != u && (h = {
        ...u
      });
      let m = d.default.getOrCreate(t),
        p = m.loadStart(h);
      d.default.commit(p), r.default.dispatch({
        type: "LOAD_MESSAGES"
      });
      let M = null == h ? void 0 : h.messageId,
        T = new eg;
      return !c && this.fetchLocalMessages(t, n, a, l, T), s.default.get({
        url: ed.Endpoints.MESSAGES(t),
        query: {
          before: n,
          after: a,
          limit: l,
          around: M,
          preload: o
        },
        retries: 2,
        oldFormErrors: !0
      }).then(e => (F.default.fetchMessages.recordEnd(), F.default.dispatchMessages.measure(() => {
        let s = e.body,
          d = null != n,
          u = null != a,
          o = null == n && null == a,
          c = null != M || s.length === l && (d || o),
          f = null != M || u && s.length === l;
        if (null != M) {
          let e = Math.floor(l / 2),
            n = [M, ...s.map(e => {
              let {
                id: t
              } = e;
              return t
            })].filter((e, t, n) => n.indexOf(e) === t).sort(ei.default.compare),
            a = n.indexOf(M);
          if (a < e && (c = !1), s.length - a < e && (f = !1), f && s.length > 0) {
            let e = J.default.lastMessageId(t);
            s[0].id === e && (f = !1)
          }
        }
        eE.log("Fetched ".concat(s.length, " messages for ").concat(t, " isBefore:").concat(d, " isAfter:").concat(u)), T.markComplete(), r.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: t,
          messages: s,
          isBefore: d,
          isAfter: u,
          hasMoreBefore: c,
          hasMoreAfter: f,
          limit: l,
          jump: i,
          isStale: !_ || S.default.lastTimeConnectedChanged() >= g,
          truncate: E
        })
      }), !0), () => (eE.log("Failed to fetch messages for ".concat(t)), r.default.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), !1))
    },
    async fetchLocalMessages(e, t, n, a, l) {
      let s = H.default.getBasicChannel(e),
        i = d.default.getOrCreate(e),
        u = c.default.database();
      if (null == u || null == s || null != t || null != n) {
        F.default.addLocalMessages(e, -1);
        return
      }
      if (i.ready && !i.cached) {
        F.default.addLocalMessages(e, -2);
        return
      }
      let o = await (0, E.tryLoadAsync)(() => f.default.load(u, e, a));
      if (null == o) {
        F.default.addLocalMessages(e, -3);
        return
      }
      if (eE.log("fetched ".concat(o.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(l.completed, ")")), F.default.addLocalMessages(e, o.messages.length), !l.completed && o.messages.length > 0) {
        let t = o.messages.length >= a && o.connectionId === S.default.lastTimeConnectedChanged();
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
      let a = H.default.getBasicChannel(e),
        l = c.default.database();
      if (null == l || null == a) return;
      let s = d.default.getOrCreate(e);
      if (s.hasMoreAfter) return;
      let i = await (0, E.tryLoadAsync)(() => f.default.load(l, e, t));
      if (null == i) return;
      s = d.default.getOrCreate(e);
      let u = null === (n = s.last()) || void 0 === n ? void 0 : n.id,
        o = null == u ? i.messages : i.messages.filter(e => ei.default.compare(e.id, u) > 0);
      eE.log("Fetched ".concat(i.messages.length, " messages from the cache after foregrounding. ").concat(o.length, " are new")), 0 !== o.length && r.default.dispatch({
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
      } = e, u = W.default.getMessages(t);
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
        let e = (null == s ? void 0 : s.messageId) != null ? ei.default.extractTimestamp(null == s ? void 0 : s.messageId) : 0,
          n = u.first(),
          a = u.last();
        if (!u.hasMoreBefore && null != n && ei.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != a && ei.default.extractTimestamp(a.id) <= e || null != n && null != a && ei.default.extractTimestamp(n.id) < e && ei.default.extractTimestamp(a.id) > e) return r.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: ed.MAX_MESSAGES_FOR_JUMP
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
      let s = await (0, U.default)(e);
      if (null != s) return eS.sendMessage(s, t, a, l);
      let i = () => eS._sendMessage(e, t, l),
        r = C.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
          location: "8e1e29_1"
        }).enableBackgroundSending ? L.default.backgroundify(i, void 0) : i,
        d = null !== (n = l.nonce) && void 0 !== n ? n : (0, v.createNonce)();
      return (l = {
        ...l,
        nonce: d
      }, D.default.recordMessageSendAttempt(e, d), W.default.isReady(e)) ? r() : a && e !== eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (ef.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        W.default.whenReady(e, () => {
          ef.info("Channel ".concat(e, " is ready for sending now.")), r().then(t, n)
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
          parse: Object.values(ed.AllowedMentionTypes),
          replied_user: !1
        };
      return {
        messageReference: n,
        allowedMentions: a
      }
    },
    sendInvite: (e, t, n, a) => eS._sendMessage(e, {
      content: (0, A.default)(t),
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != a ? a : void 0
    }),
    sendActivityBookmark: (e, t, n, a) => eS._sendMessage(e, {
      content: t,
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != a ? a : void 0
    }),
    sendClydeProfileOverride: (e, t, n, a) => eS._sendMessage(e, {
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
      return eS._sendMessage(e, {
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
        url: ed.Endpoints.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: l,
          message_reference: a
        },
        oldFormErrors: !0
      }).then(n => (O.default.donateSentMessage(n.body.content, e), eS.receiveMessage(e, n.body), r.default.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw eE.log("Failed to send greeting"), 429 !== t.status && eS.sendClydeError(e, t.body.code), r.default.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return eS._sendMessage(e, {
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
      let i = (0, U.default)(e);
      if (null != i) return ef.info("Converting channel to a private channel"), i.then(e => {
        ef.info("Finished converting channel to a private channel"), eS._sendMessage(e, t, n)
      });
      let d = t.content,
        {
          invalidEmojis: c,
          validNonShortcutEmojis: E,
          tts: f = !1
        } = t,
        {
          activityAction: _,
          location: m,
          suggestedInvite: S,
          stickerIds: p,
          messageReference: I,
          allowedMentions: A,
          poll: C
        } = n,
        L = null !== (a = n.flags) && void 0 !== a ? a : 0,
        [N, P] = (0, k.default)(d);
      if (N && (d = P, L = (0, en.addFlag)(L, ed.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === d && null == _ && null == p && null == C) return Promise.reject(Error("not sending empty message"));
      let B = null != I ? ed.MessageTypes.REPLY : ed.MessageTypes.DEFAULT,
        F = null !== (s = n.nonce) && void 0 !== s ? s : (0, v.createNonce)();
      if (!1 !== n.eagerDispatch) {
        let t = (0, v.default)({
          channelId: e,
          content: d,
          tts: f,
          type: B,
          messageReference: I,
          allowedMentions: A,
          flags: 0 !== L ? L : void 0,
          nonce: F,
          poll: (0, G.createPollServerDataFromCreateRequest)(C)
        });
        (0, R.updateComboOnMessageSend)(e, t.id), null != p && (t.sticker_items = p.map(e => w.default.getStickerById(e)).filter(e => null != e)), eS.receiveMessage(e, t, !0, n)
      }
      if (!e_ && null != c && c.length > 0) {
        let t, n;
        e_ = !0;
        let a = $.default.getCurrentUser();
        c.some(e => e.animated) && !es.default.canUseAnimatedEmojis(a) ? (t = ec.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : j.default.canWithPartialContext(ed.Permissions.USE_EXTERNAL_EMOJIS, {
          channelId: e
        }) ? (t = ec.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = ec.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), eS.sendBotMessage(e, t, n)
      }
      let V = {
        type: u.MessageDataType.SEND,
        message: {
          channelId: e,
          content: d,
          nonce: F,
          tts: f,
          message_reference: I,
          allowed_mentions: A,
          flags: L
        }
      };
      if (null != _) {
        let e = _.type === ed.ActivityActionTypes.JOIN_REQUEST ? null == _ ? void 0 : _.activity.session_id : x.default.getSessionId();
        if (null != e) {
          let t = {
              type: _.type,
              session_id: e
            },
            {
              activity: n
            } = _;
          null != n.party && null != n.party.id && (t.party_id = n.party.id), V.message.application_id = n.application_id, V.message.activity = t
        }
      }
      return null != C && (V.message.poll = C), null != p && (V.message.sticker_ids = p), b.default.isEnabled() && (V.message.has_poggermode_enabled = !0), new Promise((t, a) => {
        let s = Date.now(),
          i = u.default.length,
          c = Math.floor(1e4 * Math.random());
        ef.info("Queueing message to be sent LogId:".concat(c)), u.default.enqueue(V, u => {
          let c = Date.now() - s;
          if (u.ok) O.default.donateSentMessage(d, e), eS.receiveMessage(e, u.body, !0, {
            sendAnalytics: {
              duration: c,
              queueSize: i
            },
            poll: C
          }), D.default.recordMessageSendApiResponse(F), r.default.dispatch({
            type: "SLOWMODE_RESET_COOLDOWN",
            slowmodeType: Z.SlowmodeType.SendMessage,
            channelId: e
          }), r.default.dispatch({
            type: "EMOJI_TRACK_USAGE",
            emojiUsed: E
          }), r.default.dispatch({
            type: "STICKER_TRACK_USAGE",
            stickerIds: p
          }), ! function(e) {
            let {
              content: t,
              channelId: n,
              messageId: a,
              location: s,
              suggested: i = null,
              overrideProperties: r = {}
            } = e;
            (0, h.default)(t).forEach(e => {
              let {
                type: t,
                code: d
              } = e;
              if (t === g.CodedLinkType.INVITE) eh({
                inviteKey: d,
                channelId: n,
                messageId: a,
                location: s,
                suggested: i,
                overrideProperties: r
              });
              else if (t === g.CodedLinkType.TEMPLATE) {
                let e = T.default.getGuildTemplate(d);
                if (null == e || e.state === eo.GuildTemplateStates.RESOLVING) return;
                o.default.trackWithMetadata(ed.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                  guild_template_code: d,
                  guild_template_name: e.name,
                  guild_template_description: e.description,
                  guild_template_guild_id: e.sourceGuildId
                })
              } else if (t === g.CodedLinkType.BUILD_OVERRIDE);
              else if (t === g.CodedLinkType.EVENT);
              else if (t === g.CodedLinkType.CHANNEL_LINK);
              else if (t === g.CodedLinkType.APP_DIRECTORY_PROFILE) ee.default.track(ed.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                application_id: d,
                device_platform: l.isMobile ? "mobile_web" : "desktop_web",
                guild_id: Q.default.getGuildId(),
                channel_id: q.default.getChannelId()
              });
              else if (t === g.CodedLinkType.ACTIVITY_BOOKMARK);
              else if (t === g.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
              else if (t === g.CodedLinkType.GUILD_PRODUCT);
              else if (t === g.CodedLinkType.SERVER_SHOP);
              else if (t === g.CodedLinkType.CLYDE_PROFILE);
              else throw Error("Unknown coded link type: ".concat(t))
            })
          }({
            content: d,
            channelId: e,
            messageId: u.body.id,
            location: null != m ? m : "chat_input",
            suggested: S
          }), ! function(e, t, n, a, l) {
            (0, ea.findGiftCodes)(e).forEach(e => {
              let s = H.default.getChannel(t);
              null != s && o.default.trackWithMetadata(ed.AnalyticEvents.GIFT_CODE_SENT, {
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
            eE.log("Failed to send message", {
              hasErr: u.hasErr,
              status: u.status,
              code: null === (f = u.body) || void 0 === f ? void 0 : f.code,
              error: u.err
            });
            let t = !1;
            if (u.hasErr) "ABORTED" === u.err.code && (t = !0);
            else if (u.status >= 400 && u.status < 500 && u.body) {
              if (u.body.code === ed.AbortCodes.SLOWMODE_RATE_LIMITED) {
                let t = u.body.retry_after;
                null != t && t > 0 && r.default.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: Z.SlowmodeType.SendMessage,
                  cooldownMs: t * et.default.Millis.SECOND
                })
              } else M.AUTOMOD_ERROR_CODES.has(u.body.code) ? r.default.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: V,
                errorResponseBody: {
                  code: u.body.code,
                  message: u.body.message
                }
              }) : u.body.code === ed.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? r.default.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : u.body.code === ed.AbortCodes.CLYDE_CONSENT_REQUIRED ? r.default.dispatch({
                type: "MESSAGE_FAILED_CLYDE_CONSENT",
                messageId: F,
                channelId: e
              }) : null != C || eS.sendClydeError(e, u.body.code)
            }
            t ? eS.deleteMessage(e, F, !0) : (r.default.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: F,
              channelId: e
            }), (0, y.logMessageSendFailure)({
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
      await B.default.unarchiveThreadIfNecessary(e);
      let l = function(e, t) {
          let n = W.default.getMessage(e, t);
          if (null == n || n.type !== ed.MessageTypes.REPLY) return;
          let a = P.default.getMessageByReference(n.messageReference);
          if (a.state === P.ReferencedMessageState.LOADED) {
            if (!n.mentions.includes(a.message.author.id)) return {
              parse: Object.values(ed.AllowedMentionTypes),
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
        n.hasErr ? i.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : a ? i.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : i.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eS.endEditMessage(e, n.hasErr ? void 0 : n), eS.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await B.default.unarchiveThreadIfNecessary(e), s.default.patch({
        url: ed.Endpoints.MESSAGE(e, t),
        body: {
          flags: ed.MessageFlags.SUPPRESS_EMBEDS
        },
        oldFormErrors: !0
      })
    },
    async patchMessageAttachments(e, t, n) {
      await B.default.unarchiveThreadIfNecessary(e), s.default.patch({
        url: ed.Endpoints.MESSAGE(e, t),
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
            i.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
          })
        };
      n ? a() : (await B.default.unarchiveThreadIfNecessary(e), s.default.delete({
        url: ed.Endpoints.MESSAGE(e, t),
        oldFormErrors: !0
      }).then(() => {
        a()
      }));
      let l = W.default.getMessage(e, t);
      (null == l ? void 0 : l.type) === ed.MessageTypes.GUILD_INVITE_REMINDER && (0, N.trackGuildInviteNotificationDismissed)()
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && o.default.trackWithMetadata(ed.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
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
      url: ed.Endpoints.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: !0
    }).catch(e => {
      let t;
      t = 429 === e.status ? ec.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : ec.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, er.default.show({
        title: ec.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
        body: t,
        confirmText: ec.default.Messages.OKAY
      })
    }),
    trackInvite: eh
  };
var ep = eS