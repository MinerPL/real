"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return J
  }
}), n("222007");
var i = n("803182"),
  l = n("811022"),
  d = n("95410"),
  u = n("913144"),
  s = n("404118"),
  r = n("819689"),
  o = n("115718"),
  c = n("689988"),
  f = n("408062"),
  g = n("619443"),
  p = n("582713"),
  _ = n("233069"),
  m = n("982108"),
  E = n("42203"),
  h = n("305961"),
  S = n("660478"),
  v = n("18494"),
  C = n("162771"),
  I = n("718517"),
  A = n("519841"),
  T = n("787336"),
  y = n("49111"),
  N = n("724210"),
  D = n("782340");
let M = new l.default("MessageManager");

function L(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: i,
    forceFetch: l,
    isPreload: u,
    jumpType: s,
    skipLocalFetch: c,
    logFailures: p
  } = e;
  if (null == n) {
    p && M.log("Skipping fetch because channelId is null");
    return
  }
  if ((0, N.isStaticChannelRoute)(n)) {
    p && M.log("Skipping fetch because channelId is a static route");
    return
  }
  let _ = E.default.getChannel(n);
  if ((null == _ ? void 0 : _.type) === y.ChannelTypes.GUILD_STORE || (null == _ ? void 0 : _.type) != null && y.ChannelTypesSets.GUILD_THREADS_ONLY.has(_.type)) {
    p && M.log("Skipping fetch because channel is a forum/store");
    return
  }
  let m = f.default.getOrCreate(n);
  A.AttachmentLinkRefreshExperiment.getCurrentConfig({
    location: "fetch_messages"
  }).enabled && m.some(T.messageHasExpiredAttachmentUrl) && (M.log("Found expired attachment link, clearing messages"), f.default.clear(n), m = f.default.getOrCreate(n)), null != m.jumpTargetId && null == i && (m = m.mutate({
    jumpTargetId: null,
    jumped: !1,
    jumpType: o.JumpTypes.ANIMATED
  }), f.default.commit(m)), null != m.focusTargetId && null == i && (m = m.mutate({
    focusTargetId: null
  }), f.default.commit(m));
  let v = l;
  if (!u || g.default.isConnected() || m.loadingMore ? m.loadingMore || m.ready && !m.cached ? null != i ? v = !0 : p && M.log("Skipping fetch because no other conditions matched") : null == t || null != h.default.getGuild(t) ? v = !0 : p && M.log("Skipping fetch we are connected and have loaded messages") : v = !0, v) {
    if (f.default.commit(m.mutate({
        loadingMore: !0
      })), null != i) r.default.jumpToMessage({
      channelId: n,
      messageId: i,
      flash: !0,
      isPreload: u,
      skipLocalFetch: c,
      jumpType: s
    });
    else if ((null == _ ? void 0 : _.isThread()) && function(e) {
        if (S.default.hasOpenedThread(e)) return !1;
        if (null == a) {
          var t;
          a = null !== (t = d.default.get(R, {})) && void 0 !== t ? t : {}
        }
        if (e in a) return !1;
        a[e] = Date.now();
        let n = Date.now() - b;
        for (let e in a) a[e] < n && delete a[e];
        return d.default.set(R, a), !0
      }(n)) M.log("Jumping to start of thread ".concat(_.id)), r.default.fetchMessages({
      channelId: n,
      limit: y.MAX_MESSAGES_PER_CHANNEL,
      jump: {
        messageId: n,
        flash: !1
      },
      isPreload: u,
      skipLocalFetch: c
    });
    else if ((null == _ ? void 0 : _.isThread()) && S.default.hasTrackedUnread(_.id) && !m.ready) {
      let e = S.default.getTrackedAckMessageId(_.id);
      M.log("Jumping to most recent message in thread ".concat(_.id, " - ").concat(e)), r.default.fetchMessages({
        channelId: n,
        limit: y.MAX_MESSAGES_PER_CHANNEL,
        jump: {
          messageId: e,
          flash: !1,
          offset: 1
        },
        isPreload: u,
        skipLocalFetch: c
      })
    } else r.default.fetchMessages({
      channelId: n,
      limit: y.MAX_MESSAGES_PER_CHANNEL,
      isPreload: u,
      skipLocalFetch: c,
      jump: {
        jumpType: o.JumpTypes.ANIMATED
      }
    })
  }
}
let b = 90 * I.default.Millis.DAY,
  R = "viewedThreadIds";

function O() {
  let e = v.default.getChannelId();
  if (null != e) {
    let n = E.default.getChannel(e);
    if (null != n) {
      var t;
      let e = (0, i.matchPath)(location.pathname, {
        path: y.Routes.CHANNEL(":guild", ":channel", ":message"),
        exact: !0
      });
      L({
        guildId: n.getGuildId(),
        channelId: n.id,
        messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
      }), G(n.getGuildId(), n.id)
    }
  }
}

function P() {
  let {
    isPreload: e,
    skipLocalFetch: t,
    logFailures: n
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = v.default.getChannelId();
  if (null != a) {
    let i = E.default.getChannel(a);
    null != i ? ((0, _.isTextChannel)(i.type) ? L({
      guildId: i.getGuildId(),
      channelId: i.id,
      isPreload: e,
      skipLocalFetch: t,
      logFailures: n
    }) : n && M.log("Skipping fetch because the selected channel is not a text channel"), G(i.getGuildId(), i.id)) : n && M.log("Skipping fetch because channel is null")
  } else n && M.log("Skipping fetch because there is no selected channel")
}

function w(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: a,
    jumpType: i
  } = e;
  L({
    guildId: t,
    channelId: n,
    messageId: a,
    jumpType: i
  }), G(t, n)
}

function U(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  L({
    guildId: t,
    channelId: n
  })
}

function G(e, t) {
  let n = m.default.getCurrentSidebarChannelId(t);
  if (null == n) return;
  let a = m.default.getCurrentSidebarMessageId(t);
  L({
    guildId: e,
    channelId: n,
    messageId: a
  })
}

function k() {
  let e = v.default.getChannelId(),
    t = C.default.getGuildId();
  if (null == t || null == e) return;
  let n = m.default.getSidebarState(e);
  (null == n ? void 0 : n.type) !== p.SidebarType.VIEW_CHANNEL && G(t, e)
}

function F(e) {
  let {
    guildId: t,
    channelId: n,
    context: a
  } = e;
  a === y.CURRENT_APP_CONTEXT && (L({
    guildId: t,
    channelId: n
  }), G(t, n))
}

function V(e) {
  let {
    channel: t,
    messageId: n
  } = e, a = t.guild_id;
  null != a && v.default.getChannelId(a) === t.id && L({
    guildId: a,
    channelId: t.id,
    messageId: n
  })
}

function x(e) {
  let {
    channelId: t
  } = e;
  r.default.fetchMessages({
    channelId: t,
    limit: y.MAX_MESSAGES_PER_CHANNEL
  })
}

function H(e) {
  let {
    response: t
  } = e;
  if (null == t || null == t.body) return null;
  if (t.body.code === y.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
    let e = t.body.retry_after;
    null != e && s.default.show({
      title: D.default.Messages.RATE_LIMITED,
      body: D.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
        retryAfterMinutes: Math.ceil(e / 60)
      })
    })
  }
}
let q = {};

function W(e) {
  var t;
  let {
    channelId: n,
    jump: a,
    isStale: i,
    isPreview: l = !1
  } = e;
  if (l) return;
  let d = null !== (t = q[n]) && void 0 !== t ? t : 0;
  if (Date.now() - d < 10 * I.default.Millis.SECOND) return;
  q[n] = Date.now();
  let u = v.default.getChannelId(),
    s = m.default.getCurrentSidebarChannelId(u),
    o = n === u || n === s;
  i && g.default.isConnected() && o && r.default.fetchMessages({
    channelId: n,
    limit: y.MAX_MESSAGES_PER_CHANNEL,
    jump: a
  })
}

function B(e) {
  let {
    channelId: t,
    messageRecord: n
  } = e;
  null != n && u.default.dispatch({
    type: "MESSAGE_SEND_FAILED",
    channelId: t,
    messageId: n.id
  })
}

function j(e) {
  let {
    state: t
  } = e;
  if ("active" !== t) return !1;
  let n = v.default.getChannelId();
  if (null == n) return !1;
  r.default.fetchNewLocalMessages(n, y.MAX_MESSAGES_PER_CHANNEL)
}
class K extends c.default {
  _initialize() {
    u.default.subscribe("CONNECTION_OPEN", O)
  }
  _terminate() {
    u.default.unsubscribe("CONNECTION_OPEN", O)
  }
  constructor(...e) {
    super(...e), this.fetchMessages = L, this.loadSelectedChannelIfNecessary = P, this.stores = new Map().set(m.default, k), this.actions = {
      APP_STATE_UPDATE: j,
      OVERLAY_INITIALIZE: O,
      CHANNEL_SELECT: w,
      VOICE_CHANNEL_SELECT: U,
      THREAD_CREATE: V,
      THREAD_LIST_SYNC: () => P(),
      CHANNEL_CREATE: V,
      CHANNEL_PRELOAD: F,
      THREAD_CREATE_LOCAL: x,
      GUILD_CREATE: () => P(),
      MESSAGE_END_EDIT: H,
      LOAD_MESSAGES_SUCCESS: W,
      UPLOAD_FAIL: B,
      CHANNEL_DELETE: () => P(),
      THREAD_DELETE: () => P()
    }
  }
}
var J = new K