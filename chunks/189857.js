"use strict";
n.r(t), n.d(t, {
  MESSAGE_SOUND: function() {
    return V
  },
  MESSAGE_SOUND_VOLUME: function() {
    return H
  }
}), n("424973");
var l = n("316693"),
  a = n("446674"),
  s = n("95410"),
  i = n("913144"),
  r = n("450911"),
  o = n("255397"),
  u = n("851387"),
  d = n("193990"),
  c = n("987317"),
  f = n("679653"),
  h = n("680986"),
  C = n("374021"),
  p = n("288518"),
  m = n("637929"),
  E = n("393414"),
  g = n("144491"),
  I = n("716214"),
  S = n("834052"),
  _ = n("967241"),
  N = n("42203"),
  T = n("305961"),
  A = n("385649"),
  L = n("957255"),
  v = n("27618"),
  x = n("18494"),
  R = n("101125"),
  M = n("102985"),
  O = n("697218"),
  y = n("800762"),
  D = n("387111"),
  b = n("189771"),
  j = n("566673"),
  G = n("773336"),
  U = n("709681"),
  P = n("158998"),
  w = n("49111"),
  F = n("745049"),
  B = n("782340");
let V = "message1",
  H = .4,
  k = "discord_dismissed_notification_shown",
  Y = document.hasFocus(),
  K = null,
  W = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
  Z = new class {
    track(e, t) {
      let n = this._channels[e];
      for (null == n && (n = [], this._channels[e] = n), n.push(t); n.length > 1;) {
        let e = n.shift();
        null != e && null != e.close && e.close()
      }
    }
    clearChannel(e) {
      let t = this._channels[e];
      null != t && (delete this._channels[e], t.forEach(e => e.close()))
    }
    constructor() {
      this._channels = {}
    }
  };

function z() {
  return A.default.getDesktopType() === w.DesktopNotificationTypes.NEVER || R.default.getStatus() === w.StatusTypes.DND || !1
}

function X(e) {
  let t = y.default.getVoiceStateForChannel(e);
  return null != t
}
class Q extends a.default.Store {
  initialize() {
    this.waitFor(O.default, N.default, A.default, T.default, S.default, v.default, L.default, y.default, p.default)
  }
}
Q.displayName = "NotificationStore", new Q(i.default, __OVERLAY__ ? {} : {
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t
    } = e;
    t === w.NotificationPermissionTypes.ENABLED && !G.isPlatformEmbedded && j.default.showNotification(n("348044"), B.default.Messages.NOTIFICATION_TITLE_DISCORD, B.default.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY, {
      notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
    }, {
      omitViewTracking: !0,
      sound: V,
      volume: H,
      tag: "hello",
      onClick: () => {
        window.focus()
      }
    })
  },
  NOTIFICATION_CREATE: function(e) {
    let {
      icon: t,
      title: n,
      body: l,
      trackingProps: a,
      options: s
    } = e;
    return !z() && (j.default.showNotification(t, n, l, a, s), !1)
  },
  WINDOW_FOCUS: function(e) {
    if (Y = e.focused) {
      let e = x.default.getChannelId();
      null != e && Z.clearChannel(e)
    }
  },
  MESSAGE_CREATE: function(e) {
    var t, l;
    let {
      channelId: a,
      message: s,
      optimistic: r
    } = e;
    if (r) return !1;
    let u = N.default.getChannel(a),
      c = O.default.getUser(null === (t = s.author) || void 0 === t ? void 0 : t.id);
    if (null == u || null == c || u.isBroadcastChannel()) return !1;
    let f = (0, b.shouldNotify)(s, a, !Y),
      h = A.default.getNotifyMessagesInSelectedChannel(),
      C = h && (0, b.shouldNotifyForSelectedChannel)(s, a);
    if (!f && !C) return !1;
    let p = !A.default.isSoundDisabled(V);
    if (C && (p && U.playSound("message3", .4), !Y) || !f) return !1;
    let E = n("860957").default,
      I = n("901165").default;
    if (null != E.getFocusedPID() && I.getTextChatNotificationMode() === w.OverlayNotificationTextChatTypes.ENABLED && !M.default.disableNotifications) return !1;
    let {
      icon: S,
      title: _,
      body: T
    } = (0, b.makeTextChatNotification)(u, s, c);
    if (i.default.dispatch({
        type: "RPC_NOTIFICATION_CREATE",
        channelId: u.id,
        message: s,
        icon: S,
        title: _,
        body: T
      }), (0, m.trackMessageNotificationTimestamps)(s, u.guild_id), A.default.getDesktopType() === w.DesktopNotificationTypes.NEVER) return p && U.playSound(V, H), !1;
    let L = j.default.showNotification(S, _, T, {
      notif_type: "MESSAGE_CREATE",
      notif_user_id: null === (l = s.author) || void 0 === l ? void 0 : l.id,
      message_id: s.id,
      message_type: s.type,
      channel_id: u.id,
      channel_type: u.type,
      guild_id: u.guild_id
    }, {
      omitViewTracking: !0,
      tag: s.id,
      sound: p ? V : void 0,
      volume: H,
      onClick() {
        (0, g.transitionToChannel)(u.id), (u.type === w.ChannelTypes.GUILD_VOICE || u.type === w.ChannelTypes.GUILD_STAGE_VOICE) && o.default.updateChatOpen(u.id, !0), d.default.clickedNotification()
      }
    });
    null != L && Z.track(u.id, L)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && Z.clearChannel(t), !1
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return Z.clearChannel(t), !1
  },
  ACTIVITY_START: function(e) {
    let {
      userId: t,
      activity: n
    } = e;
    if (z()) return !1;
    if (n.type === w.ActivityTypes.PLAYING) {
      let e = O.default.getUser(t);
      if (null == e) return !1;
      let l = P.default.getName(e),
        a = n.name,
        s = e.getAvatarURL(void 0, 128),
        i = B.default.Messages.NOTIFICATION_TITLE_START_GAME,
        o = B.default.Messages.NOTIFICATION_BODY_START_GAME.format({
          username: l,
          gameName: a
        });
      return j.default.showNotification(s, i, o, {
        notif_type: "ACTIVITY_START",
        activity_type: w.ActivityTypes.PLAYING,
        notif_user_id: t,
        activity_name: a
      }, {
        sound: "message2",
        playSoundIfDisabled: !1,
        volume: .4,
        onClick() {
          r.default.openPrivateChannel(t)
        }
      }), !1
    }
    return !1
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    if (z()) return;
    let n = O.default.getCurrentUser();
    if (null == n) return;
    let l = t.find(e => e.userId === n.id);
    if (null == l) return;
    let {
      channelId: a,
      guildId: s,
      suppress: i,
      requestToSpeakTimestamp: r
    } = l;
    if (null == a || null == s || !(!i && null != r)) return;
    let o = T.default.getGuild(s),
      u = N.default.getChannel(a),
      d = S.default.getStageInstanceByChannel(a);
    null != o && null != u && null != d && j.default.showNotification(o.getIconURL(128), u.name, B.default.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
      channelName: (0, f.computeChannelName)(u, O.default, v.default),
      channelTopic: null == d ? void 0 : d.topic
    }), {
      notif_type: "Stage Speak Invite"
    }, {})
  },
  STAGE_INSTANCE_UPDATE: function(e) {
    let {
      instance: t
    } = e;
    if (z() || !t.send_start_notification || X(t.channel_id)) return !1;
    let n = O.default.getCurrentUser(),
      a = T.default.getGuild(t.guild_id),
      s = N.default.getChannel(t.channel_id),
      i = O.default.getUser(t.host_id);
    if (null == n || null == s || null == a || null == i || !(0, b.shouldNotifyBase)(n, i, s) || !L.default.can(l.default.combine(w.Permissions.CONNECT, w.Permissions.VIEW_CHANNEL), s)) return !1;
    j.default.showNotification(a.getIconURL(128), B.default.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
      guildName: a.name
    }), B.default.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
      username: D.default.getName(a.id, s.id, i),
      topic: t.topic
    }), {
      notif_type: "STAGE_INSTANCE_CREATE",
      guild_id: a.id,
      channel_id: s.id
    }, {
      onClick() {
        (0, I.connectAndOpen)(s)
      }
    })
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    if (z() || null == t.notification_type) return !1;
    t.notification_type === F.GuildScheduledEventNotificationTypes.EVENT_START && (t.entity_type === F.GuildScheduledEventEntityTypes.STAGE_INSTANCE || t.entity_type === F.GuildScheduledEventEntityTypes.VOICE ? ! function(e) {
      if (z()) return !1;
      let t = e.channel_id;
      if (null == t || X(t)) return !1;
      let n = O.default.getCurrentUser(),
        a = T.default.getGuild(e.guild_id),
        s = N.default.getChannel(e.channel_id),
        i = O.default.getUser(e.host_id);
      if (null == n || null == s || null == a || null == i || !L.default.can(l.default.combine(w.Permissions.CONNECT, w.Permissions.VIEW_CHANNEL), s)) return !1;
      j.default.showNotification(a.getIconURL(128), B.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: a.name
      }), B.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
        topic: e.name,
        username: D.default.getName(a.id, s.id, i)
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: a.id,
        channel_id: s.id
      }, {
        onClick() {
          e.entity_type === F.GuildScheduledEventEntityTypes.STAGE_INSTANCE && (0, I.connectAndOpen)(s), e.entity_type === F.GuildScheduledEventEntityTypes.VOICE && c.default.selectVoiceChannel(s.id)
        }
      })
    }(t) : t.entity_type === F.GuildScheduledEventEntityTypes.EXTERNAL && ! function(e) {
      if (z()) return !1;
      let t = O.default.getCurrentUser(),
        n = T.default.getGuild(e.guild_id);
      if (null == t || null == n) return !1;
      j.default.showNotification(n.getIconURL(128), B.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
        guildName: n.name
      }), B.default.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({
        topic: e.name
      }), {
        notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
        guild_id: n.id
      }, {
        onClick() {
          u.default.transitionToGuildSync(e.guild_id), (0, C.openGuildEventDetails)({
            eventId: e.id
          })
        }
      })
    }(t))
  },
  THREAD_CREATE: function(e) {
    var t;
    let {
      channel: n,
      isNewlyCreated: l
    } = e;
    if (z()) return !1;
    let a = N.default.getChannel(n.parent_id);
    if (null == a || !w.ChannelTypesSets.GUILD_THREADS_ONLY.has(a.type) || !l || !(0, b.shouldNotifyForForumThreadCreation)(n, a, !Y)) return !1;
    let {
      author: s,
      user: i
    } = (0, h.getForumPostAuthor)(n);
    if (null == i) return !1;
    let r = T.default.getGuild(a.guild_id);
    if (null == r) return !1;
    let o = B.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
        channelName: a.name,
        guildName: r.name
      }),
      u = B.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
        channelName: n.name,
        userUsername: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : null == i ? void 0 : i.username
      }),
      d = i.getAvatarURL(void 0, 128);
    j.default.showNotification(d, o, u, {
      notif_type: "THREAD_CREATE",
      notif_user_id: i.id
    }, {
      onClick() {
        (0, _.openThreadSidebarForViewing)(n)
      }
    })
  },
  GENERIC_PUSH_NOTIFICATION_SENT: function(e) {
    let {
      icon: t,
      title: n,
      body: l,
      route: a,
      trackingType: s,
      tag: i
    } = e;
    return !z() && null != n && null != l && null != s && (j.default.showNotification(t, n, l, {
      notif_type: s
    }, {
      onClick() {
        null != a && (0, E.transitionTo)(a)
      },
      tag: i
    }), !1)
  },
  WINDOW_HIDDEN: function() {
    let e = (0, G.isWindows)(),
      t = (0, G.isLinux)(),
      l = s.default.get(k, !1),
      a = !l && G.isPlatformEmbedded && (e || t);
    if (!a) return !1;
    let i = !1;
    return null != K && (i = W.includes(K)), !!i && (j.default.showNotification(n("599964"), B.default.Messages.NOTIFICATION_TITLE_DISCORD, B.default.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN, {
      notif_type: "WINDOW_HIDDEN"
    }, {
      overrideStreamerMode: !0,
      onClick: () => {
        (0, E.transitionTo)(w.Routes.SETTINGS(e ? "windows" : "linux"))
      },
      onShown: () => {
        s.default.set(k, !0)
      }
    }), !1)
  },
  LOGOUT: function() {
    return s.default.remove(k), !1
  },
  CONNECTION_OPEN: function(e) {
    let {
      countryCode: t
    } = e;
    K = t
  }
})