"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eS
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
  _ = n("893694"),
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
  v = n("40566"),
  D = n("994918"),
  O = n("815297"),
  y = n("168730"),
  N = n("129953"),
  R = n("28007"),
  b = n("880731"),
  G = n("562228"),
  P = n("793277");
n("685841");
var U = n("256572"),
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
  et = n("568734"),
  en = n("659632"),
  ea = n("701909"),
  el = n("719923"),
  es = n("299039"),
  ei = n("404118"),
  er = n("49111"),
  ed = n("724210"),
  eu = n("579033"),
  eo = n("782340");
let ec = new m.default("MessageActionCreators"),
  eE = new m.default("MessageQueue"),
  ef = !1;
class e_ {
  markComplete() {
    this.completed = !0
  }
  constructor() {
    this.completed = !1
  }
}

function eg(e) {
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
    d.isMultiUserDM() ? e = er.LoggingInviteTypes.GDM_INVITE : !d.isPrivate() && (e = er.LoggingInviteTypes.SERVER_INVITE);
    let n = {},
      c = Y.default.getInvite(t);
    if (null != c && c.state === er.InviteStates.RESOLVED && null != c.channel) {
      var o;
      let t = c.channel;
      n.invite_channel_id = t.id, n.invite_guild_id = null === (o = c.guild) || void 0 === o ? void 0 : o.id, n.invite_channel_type = t.type, null != c.inviter && (n.invite_inviter_id = c.inviter.id);
      let a = V.default.getLastActiveStream();
      if (null != a && a.channelId === t.id) {
        e = er.LoggingInviteTypes.STREAM, n.destination_user_id = a.ownerId;
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
      send_type: er.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: r.guildScheduledEventId,
      ...i
    }, u.default.trackWithMetadata(er.AnalyticEvents.INVITE_SENT, n)
  } else {
    let e = {},
      n = Y.default.getInvite(t);
    null != n && n.state === er.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
      ...e,
      location: l,
      invite_type: er.LoggingInviteTypes.FRIEND_INVITE,
      invite_code: r.baseCode,
      message_id: a,
      send_type: er.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: r.guildScheduledEventId,
      ...i
    }, u.default.trackWithMetadata(er.AnalyticEvents.INVITE_SENT, e))
  }
}
let eh = {
    [er.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
      messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
      messageGetter: () => eo.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
    },
    [er.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
      messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
      messageGetter: () => eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: ea.default.getArticleURL(er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      })
    },
    [er.AbortCodes.RATE_LIMIT_DM_OPEN]: {
      messageName: "BOT_DM_RATE_LIMITED",
      messageGetter: () => eo.default.Messages.BOT_DM_RATE_LIMITED
    },
    [er.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => eo.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    },
    [er.AbortCodes.SLOWMODE_RATE_LIMITED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => eo.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    }
  },
  em = {
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
      null != n && u.default.trackWithMetadata(er.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), em.receiveMessage(e, (0, O.createBotMessage)({
        channelId: e,
        content: t,
        loggingName: n
      }))
    },
    sendClydeError(e) {
      let t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        l = H.default.getChannel(e);
      if (null != l) {
        if (a === er.AbortCodes.EXPLICIT_CONTENT) {
          if (l.isDM()) t = eo.default.Messages.BOT_DM_EXPLICIT_CONTENT.format({
            name: (0, f.computeChannelName)(l, $.default, z.default)
          }), n = "BOT_DM_EXPLICIT_CONTENT";
          else if (l.isMultiUserDM()) t = eo.default.Messages.BOT_GDM_EXPLICIT_CONTENT.format({
            name: (0, f.computeChannelName)(l, $.default, z.default)
          }), n = "BOT_GDM_EXPLICIT_CONTENT";
          else {
            let e = K.default.getGuild(l.getGuildId());
            if (null == e) return;
            t = eo.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
              name: e.toString()
            }), n = "BOT_GUILD_EXPLICIT_CONTENT"
          }
        } else if (a === er.AbortCodes.SLOWMODE_RATE_LIMITED) t = eo.default.Messages.CHANNEL_SLOWMODE_DESC.format({
          seconds: l.rateLimitPerUser
        }), n = "SLOWMODE_RATE_LIMITED";
        else if (a === er.AbortCodes.INVALID_MESSAGE_SEND_USER) t = eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
          helpUrl: ea.default.getArticleURL(er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
        }), n = "INVALID_MESSAGE_SEND_USER";
        else if (a === er.AbortCodes.TOO_MANY_THREADS) {
          let e = l.isForumLikeChannel() || l.isForumPost();
          t = e ? eo.default.Messages.BOT_DM_TOO_MANY_POSTS : eo.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS"
        } else a === er.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = eo.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : a === er.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = eo.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
          helpUrl: er.MarketingURLs.HARMFUL_LINKS
        }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : a in eh ? (n = eh[a].messageName, t = eh[a].messageGetter()) : (t = eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
          helpUrl: ea.default.getArticleURL(er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
        }), n = "SEND_FAILED (".concat(a, ")"));
        em.sendBotMessage(e, t, n)
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
      em.trackJump(e, null, "Present");
      let n = {
        present: !0
      };
      W.default.hasPresent(e) ? i.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : em.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, a) {
      u.default.trackWithMetadata(er.AnalyticEvents.JUMP, {
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
      return "string" == typeof s && em.trackJump(t, n, s, i), em.fetchMessages({
        channelId: t,
        limit: er.MAX_MESSAGES_FOR_JUMP,
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
      em.fetchMessages({
        channelId: t,
        limit: er.MAX_MESSAGES_FOR_JUMP,
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
      } = e, f = H.default.getChannel(t), _ = S.default.isConnectedOrOverlay(), g = Date.now();
      if (null != f && f.type === er.ChannelTypes.GUILD_STORE) return !1;
      if (t === ed.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
      if (ec.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(a, ". jump=").concat(JSON.stringify(d))), em._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: a,
          limit: s,
          jump: d,
          focus: u,
          truncate: E
        })) return;
      F.default.fetchMessages.recordStart();
      let h = null != d ? d : void 0;
      null == h && null != u && (h = {
        ...u
      });
      let m = r.default.getOrCreate(t),
        p = m.loadStart(h);
      r.default.commit(p), i.default.dispatch({
        type: "LOAD_MESSAGES"
      });
      let M = null == h ? void 0 : h.messageId,
        T = new e_;
      return !c && this.fetchLocalMessages(t, n, a, s, T), l.default.get({
        url: er.Endpoints.MESSAGES(t),
        query: {
          before: n,
          after: a,
          limit: s,
          around: M,
          preload: o
        },
        retries: 2,
        oldFormErrors: !0
      }).then(e => (F.default.fetchMessages.recordEnd(), F.default.dispatchMessages.measure(() => {
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
            })].filter((e, t, n) => n.indexOf(e) === t).sort(es.default.compare),
            a = n.indexOf(M);
          if (a < e && (c = !1), l.length - a < e && (f = !1), f && l.length > 0) {
            let e = J.default.lastMessageId(t);
            l[0].id === e && (f = !1)
          }
        }
        ec.log("Fetched ".concat(l.length, " messages for ").concat(t, " isBefore:").concat(r, " isAfter:").concat(u)), T.markComplete(), i.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: t,
          messages: l,
          isBefore: r,
          isAfter: u,
          hasMoreBefore: c,
          hasMoreAfter: f,
          limit: s,
          jump: d,
          isStale: !_ || S.default.lastTimeConnectedChanged() >= g,
          truncate: E
        })
      }), !0), () => (ec.log("Failed to fetch messages for ".concat(t)), i.default.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), !1))
    },
    async fetchLocalMessages(e, t, n, a, l) {
      let s = H.default.getBasicChannel(e),
        d = r.default.getOrCreate(e),
        u = o.default.database();
      if (null == u || null == s || null != t || null != n) {
        F.default.addLocalMessages(e, -1);
        return
      }
      if (d.ready && !d.cached) {
        F.default.addLocalMessages(e, -2);
        return
      }
      let f = await (0, c.tryLoadAsync)(() => E.default.load(u, e, a));
      if (null == f) {
        F.default.addLocalMessages(e, -3);
        return
      }
      if (ec.log("fetched ".concat(f.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(l.completed, ")")), F.default.addLocalMessages(e, f.messages.length), !l.completed && f.messages.length > 0) {
        let t = f.messages.length >= a && f.connectionId === S.default.lastTimeConnectedChanged();
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
      let a = H.default.getBasicChannel(e),
        l = o.default.database();
      if (null == l || null == a) return;
      let s = r.default.getOrCreate(e);
      if (s.hasMoreAfter) return;
      let d = await (0, c.tryLoadAsync)(() => E.default.load(l, e, t));
      if (null == d) return;
      s = r.default.getOrCreate(e);
      let u = null === (n = s.last()) || void 0 === n ? void 0 : n.id,
        f = null == u ? d.messages : d.messages.filter(e => es.default.compare(e.id, u) > 0);
      ec.log("Fetched ".concat(d.messages.length, " messages from the cache after foregrounding. ").concat(f.length, " are new")), 0 !== f.length && i.default.dispatch({
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
      } = e, u = W.default.getMessages(t);
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
        let e = (null == s ? void 0 : s.messageId) != null ? es.default.extractTimestamp(null == s ? void 0 : s.messageId) : 0,
          n = u.first(),
          a = u.last();
        if (!u.hasMoreBefore && null != n && es.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != a && es.default.extractTimestamp(a.id) <= e || null != n && null != a && es.default.extractTimestamp(n.id) < e && es.default.extractTimestamp(a.id) > e) return i.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: er.MAX_MESSAGES_FOR_JUMP
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
      let s = await (0, P.default)(e);
      if (null != s) return em.sendMessage(s, t, a, l);
      let i = () => em._sendMessage(e, t, l),
        r = C.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
          location: "8e1e29_1"
        }).enableBackgroundSending ? L.default.backgroundify(i, void 0) : i,
        d = null !== (n = l.nonce) && void 0 !== n ? n : (0, O.createNonce)();
      return (l = {
        ...l,
        nonce: d
      }, v.default.recordMessageSendAttempt(e, d), W.default.isReady(e)) ? r() : a && e !== ed.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (eE.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        W.default.whenReady(e, () => {
          eE.info("Channel ".concat(e, " is ready for sending now.")), r().then(t, n)
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
          parse: Object.values(er.AllowedMentionTypes),
          replied_user: !1
        };
      return {
        messageReference: n,
        allowedMentions: a
      }
    },
    sendInvite: (e, t, n, a) => em._sendMessage(e, {
      content: (0, A.default)(t),
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != a ? a : void 0
    }),
    sendActivityBookmark: (e, t, n, a) => em._sendMessage(e, {
      content: t,
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != a ? a : void 0
    }),
    sendClydeProfileOverride: (e, t, n, a) => em._sendMessage(e, {
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
      return em._sendMessage(e, {
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
        url: er.Endpoints.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: s,
          message_reference: a
        },
        oldFormErrors: !0
      }).then(n => (D.default.donateSentMessage(n.body.content, e), em.receiveMessage(e, n.body), i.default.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw ec.log("Failed to send greeting"), 429 !== t.status && em.sendClydeError(e, t.body.code), i.default.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return em._sendMessage(e, {
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
      let r = (0, P.default)(e);
      if (null != r) return eE.info("Converting channel to a private channel"), r.then(e => {
        eE.info("Finished converting channel to a private channel"), em._sendMessage(e, t, n)
      });
      let o = t.content,
        {
          invalidEmojis: c,
          validNonShortcutEmojis: E,
          tts: f = !1
        } = t,
        {
          activityAction: m,
          location: S,
          suggestedInvite: p,
          stickerIds: I,
          messageReference: A,
          allowedMentions: C,
          poll: L
        } = n,
        N = null !== (l = n.flags) && void 0 !== l ? l : 0,
        [U, B] = (0, k.default)(o);
      if (U && (o = B, N = (0, et.addFlag)(N, er.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === o && null == m && null == I && null == L) return Promise.reject(Error("not sending empty message"));
      let F = null != A ? er.MessageTypes.REPLY : er.MessageTypes.DEFAULT,
        V = null !== (s = n.nonce) && void 0 !== s ? s : (0, O.createNonce)();
      if (!1 !== n.eagerDispatch) {
        let t = (0, O.default)({
          channelId: e,
          content: o,
          tts: f,
          type: F,
          messageReference: A,
          allowedMentions: C,
          flags: 0 !== N ? N : void 0,
          nonce: V,
          poll: (0, G.createPollServerDataFromCreateRequest)(L)
        });
        (0, R.updateComboOnMessageSend)(e, t.id), null != I && (t.sticker_items = I.map(e => w.default.getStickerById(e)).filter(e => null != e)), em.receiveMessage(e, t, !0, n)
      }
      if (!ef && null != c && c.length > 0) {
        let t, n;
        ef = !0;
        let a = $.default.getCurrentUser();
        c.some(e => e.animated) && !el.default.canUseAnimatedEmojis(a) ? (t = eo.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : j.default.canWithPartialContext(er.Permissions.USE_EXTERNAL_EMOJIS, {
          channelId: e
        }) ? (t = eo.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = eo.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), em.sendBotMessage(e, t, n)
      }
      let K = {
        type: d.MessageDataType.SEND,
        message: {
          channelId: e,
          content: o,
          nonce: V,
          tts: f,
          message_reference: A,
          allowed_mentions: C,
          flags: N
        }
      };
      if (null != m) {
        let e = m.type === er.ActivityActionTypes.JOIN_REQUEST ? null == m ? void 0 : m.activity.session_id : x.default.getSessionId();
        if (null != e) {
          let t = {
              type: m.type,
              session_id: e
            },
            {
              activity: n
            } = m;
          null != n.party && null != n.party.id && (t.party_id = n.party.id), K.message.application_id = n.application_id, K.message.activity = t
        }
      }
      return null != L && (K.message.poll = L), null != I && (K.message.sticker_ids = I), b.default.isEnabled() && (K.message.has_poggermode_enabled = !0), (0, _.default)(e) && (K.message.allow_proactive_clyde_reply = !0), new Promise((t, l) => {
        let s = Date.now(),
          r = d.default.length,
          c = Math.floor(1e4 * Math.random());
        eE.info("Queueing message to be sent LogId:".concat(c)), d.default.enqueue(K, d => {
          let c = Date.now() - s;
          if (d.ok) D.default.donateSentMessage(o, e), em.receiveMessage(e, d.body, !0, {
            sendAnalytics: {
              duration: c,
              queueSize: r
            },
            poll: L
          }), v.default.recordMessageSendApiResponse(V), i.default.dispatch({
            type: "SLOWMODE_RESET_COOLDOWN",
            slowmodeType: Z.SlowmodeType.SendMessage,
            channelId: e
          }), i.default.dispatch({
            type: "EMOJI_TRACK_USAGE",
            emojiUsed: E
          }), i.default.dispatch({
            type: "STICKER_TRACK_USAGE",
            stickerIds: I
          }), ! function(e) {
            let {
              content: t,
              channelId: n,
              messageId: l,
              location: s,
              suggested: i = null,
              overrideProperties: r = {}
            } = e;
            (0, h.default)(t).forEach(e => {
              let {
                type: t,
                code: d
              } = e;
              if (t === g.CodedLinkType.INVITE) eg({
                inviteKey: d,
                channelId: n,
                messageId: l,
                location: s,
                suggested: i,
                overrideProperties: r
              });
              else if (t === g.CodedLinkType.TEMPLATE) {
                let e = T.default.getGuildTemplate(d);
                if (null == e || e.state === eu.GuildTemplateStates.RESOLVING) return;
                u.default.trackWithMetadata(er.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                  guild_template_code: d,
                  guild_template_name: e.name,
                  guild_template_description: e.description,
                  guild_template_guild_id: e.sourceGuildId
                })
              } else if (t === g.CodedLinkType.BUILD_OVERRIDE);
              else if (t === g.CodedLinkType.EVENT);
              else if (t === g.CodedLinkType.CHANNEL_LINK);
              else if (t === g.CodedLinkType.APP_DIRECTORY_PROFILE) ee.default.track(er.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                application_id: d,
                device_platform: a.isMobile ? "mobile_web" : "desktop_web",
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
            content: o,
            channelId: e,
            messageId: d.body.id,
            location: null != S ? S : "chat_input",
            suggested: p
          }), ! function(e, t, n, a, l) {
            (0, en.findGiftCodes)(e).forEach(e => {
              let s = H.default.getChannel(t);
              null != s && u.default.trackWithMetadata(er.AnalyticEvents.GIFT_CODE_SENT, {
                location: a,
                gift_code: e,
                guild_id: s.getGuildId(),
                channel_id: s.id,
                channel_type: s.type,
                message_id: n,
                automatic_send: l
              })
            })
          }(o, e, d.body.id, null != S ? S : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(d);
          else {
            var f;
            ec.log("Failed to send message", {
              hasErr: d.hasErr,
              status: d.status,
              code: null === (f = d.body) || void 0 === f ? void 0 : f.code,
              error: d.err
            });
            let t = !1;
            if (d.hasErr) "ABORTED" === d.err.code && (t = !0);
            else if (d.status >= 400 && d.status < 500 && d.body) {
              if (d.body.code === er.AbortCodes.SLOWMODE_RATE_LIMITED) {
                let t = d.body.retry_after;
                null != t && t > 0 && i.default.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: Z.SlowmodeType.SendMessage,
                  cooldownMs: 1e3 * t
                })
              } else M.AUTOMOD_ERROR_CODES.has(d.body.code) ? i.default.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: K,
                errorResponseBody: {
                  code: d.body.code,
                  message: d.body.message
                }
              }) : d.body.code === er.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? i.default.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : d.body.code === er.AbortCodes.CLYDE_CONSENT_REQUIRED ? i.default.dispatch({
                type: "MESSAGE_FAILED_CLYDE_CONSENT",
                messageId: V,
                channelId: e
              }) : null != L || em.sendClydeError(e, d.body.code)
            }
            t ? em.deleteMessage(e, V, !0) : (i.default.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: V,
              channelId: e
            }), (0, y.logMessageSendFailure)({
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
      await B.default.unarchiveThreadIfNecessary(e);
      let l = function(e, t) {
          let n = W.default.getMessage(e, t);
          if (null == n || n.type !== er.MessageTypes.REPLY) return;
          let a = U.default.getMessageByReference(n.messageReference);
          if (a.state === U.ReferencedMessageState.LOADED) {
            if (!n.mentions.includes(a.message.author.id)) return {
              parse: Object.values(er.AllowedMentionTypes),
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
        let a = !n.hasErr && M.AUTOMOD_ERROR_CODES.has(n.body.code);
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
        n.hasErr ? s.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : a ? s.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : s.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), em.endEditMessage(e, n.hasErr ? void 0 : n), em.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await B.default.unarchiveThreadIfNecessary(e), l.default.patch({
        url: er.Endpoints.MESSAGE(e, t),
        body: {
          flags: er.MessageFlags.SUPPRESS_EMBEDS
        },
        oldFormErrors: !0
      })
    },
    async patchMessageAttachments(e, t, n) {
      await B.default.unarchiveThreadIfNecessary(e), l.default.patch({
        url: er.Endpoints.MESSAGE(e, t),
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
            s.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
          })
        };
      n ? a() : (await B.default.unarchiveThreadIfNecessary(e), l.default.delete({
        url: er.Endpoints.MESSAGE(e, t),
        oldFormErrors: !0
      }).then(() => {
        a()
      }));
      let r = W.default.getMessage(e, t);
      (null == r ? void 0 : r.type) === er.MessageTypes.GUILD_INVITE_REMINDER && (0, N.trackGuildInviteNotificationDismissed)()
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && u.default.trackWithMetadata(er.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
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
      url: er.Endpoints.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: !0
    }).catch(e => {
      let t;
      t = 429 === e.status ? eo.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : eo.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, ei.default.show({
        title: eo.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
        body: t,
        confirmText: eo.default.Messages.OKAY
      })
    }),
    trackInvite: eg
  };
var eS = em