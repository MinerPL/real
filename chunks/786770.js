"use strict";
n.r(t), n.d(t, {
  default: function() {
    return $
  }
}), n("222007"), n("424973");
var i, a, l, s, o = n("627445"),
  r = n.n(o),
  d = n("748820"),
  u = n("446674"),
  c = n("913144"),
  f = n("539405"),
  h = n("415635"),
  p = n("387129"),
  g = n("981253"),
  m = n("931237"),
  E = n("37359"),
  S = n("364864"),
  v = n("523505"),
  y = n("47271"),
  C = n("386045"),
  N = n("969416"),
  O = n("827922"),
  T = n("271938"),
  I = n("42203"),
  _ = n("385649"),
  A = n("824563"),
  x = n("18494"),
  R = n("101125"),
  M = n("102985"),
  L = n("697218"),
  D = n("189857"),
  j = n("901165"),
  w = n("718517"),
  k = n("189771"),
  b = n("686069"),
  P = n("703370"),
  V = n("49111"),
  U = n("6791"),
  B = n("782340");
(l = i || (i = {}))[l.GENERIC = 0] = "GENERIC", l[l.TEXT = 1] = "TEXT", l[l.INCOMING_CALL = 2] = "INCOMING_CALL", (s = a || (a = {}))[s.NORMAL = 0] = "NORMAL", s[s.HIGH = 1] = "HIGH", s[s.URGENT = 2] = "URGENT";
let F = 5 * w.default.Millis.SECOND,
  H = 8 * w.default.Millis.SECOND,
  G = 30 * w.default.Millis.SECOND,
  W = Object.freeze({
    priority: 0,
    duration: F,
    expirationExternallyManaged: !1,
    type: 0
  }),
  Y = [],
  z = (e, t, n) => {
    let i = t ? V.OverlayNotificationStatus.TIMED_OUT : V.OverlayNotificationStatus.DISMISSED;
    return setTimeout(() => f.default.updateNotificationStatus(e, i), null != n ? n : F)
  };

function K(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.OverlayNotificationStatus.DISMISSED;
  if (null == e) return !1;
  let n = Y.findIndex(t => t.id === e);
  if (-1 === n) return !1;
  let i = Y[n];
  clearTimeout(i.timerId), Y = [...Y], t === V.OverlayNotificationStatus.DISMISSED ? Y.splice(n, 1) : Y[n] = {
    ...i,
    status: t
  }
}

function Z(e) {
  let t = Y.length;
  return (Y = Y.filter(t => 1 !== t.type || t.channelId !== e || !1)).length !== t
}

function X(e) {
  let t = Y.find(t => 2 === t.type && t.channelId === e);
  return null != t ? t.id : null
}

function J(e, t) {
  let n = {
    ...W,
    ...t
  };
  if (2 !== n.priority && !j.default.isInstanceFocused()) return null;
  let i = (0, d.v4)(),
    a = {
      id: i,
      status: V.OverlayNotificationStatus.ACTIVE,
      timerId: z(i, n.expirationExternallyManaged, n.duration),
      props: e,
      ...n
    };
  Y = [...Y];
  let l = Y.findIndex(e => e.priority <= n.priority);
  if (-1 === l ? Y.push(a) : Y.splice(l, 0, a), Y.length > 10) {
    let e = Y.pop();
    clearTimeout(e.timerId)
  }
  return i
}

function Q(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = X(t), a = n.includes(T.default.getId());
  if (!a) return K(i);
  if (null != i) return !1;
  let l = I.default.getChannel(t);
  if (null == l || !l.isPrivate() || R.default.getStatus() === V.StatusTypes.DND) return !1;
  let s = Y.find(e => 1 === e.type && e.channelId === t && e.messageType === V.MessageTypes.CALL);
  null != s && K(s.id), J((0, m.default)(l), {
    priority: 1,
    expirationExternallyManaged: !0,
    type: 2,
    channelId: l.id
  })
}
class q extends u.default.Store {
  initialize() {
    this.waitFor(I.default, L.default)
  }
  getNotifications() {
    return Y
  }
}
q.displayName = "OverlayNotificationsStore";
var $ = new q(c.default, __OVERLAY__ ? {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    K(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    let {
      nudge: t
    } = e, n = function(e) {
      switch (e.type) {
        case U.OverlayNudgeTypes.BROADCAST:
          return (0, y.default)(e);
        case U.OverlayNudgeTypes.GO_LIVE_VOICE:
        case U.OverlayNudgeTypes.GO_LIVE_NON_VOICE:
          return (0, g.default)(e);
        case U.OverlayNudgeTypes.KEYBIND_INDICATORS:
          return (0, O.default)(e);
        case U.OverlayNudgeTypes.NEWS:
        default:
          return (0, v.default)(e)
      }
    }(t);
    null != n && J(n, {
      priority: 2,
      duration: H
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) return !1;
    Y = Y.map(e => e.status === V.OverlayNotificationStatus.ACTIVE ? (clearTimeout(e.timerId), {
      ...e,
      timerId: z(e.id, e.expirationExternallyManaged)
    }) : e)
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: a,
      message: l
    } = e, s = I.default.getChannel(a), o = L.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
    if (null == s || null == o) return !1;
    if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === V.ActivityActionTypes.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === V.ActivityActionTypes.JOIN_REQUEST) {
      if (!(0, k.shouldNotify)(l, a, !0, !0)) return !1;
      let e = function(e, t, n) {
        let i, a;
        if (r(null != t.activity, "received null message activity"), n.id === T.default.getId()) return !1;
        let l = P.default.getGame();
        if (null == l) return !1;
        switch (t.activity.type) {
          case V.ActivityActionTypes.JOIN:
            if (null == (i = A.default.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            a = (0, h.default)(e, t, n, l, i);
            break;
          case V.ActivityActionTypes.JOIN_REQUEST:
            if (null == (i = R.default.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            a = (0, E.default)(e, n, l, i)
        }
        if (null == a) return !1;
        let s = J(a, {
          priority: 2,
          expirationExternallyManaged: !0,
          channelId: e.id
        });
        return null != s && z(s, !1, G), !0
      }(s, l, o);
      if (!1 !== e) return e
    }
    if ((!j.default.isInstanceUILocked() || j.default.isPinned(V.OverlayWidgets.TEXT)) && a === x.default.getChannelId() || j.default.getTextChatNotificationMode() === V.OverlayNotificationTextChatTypes.DISABLED || M.default.disableNotifications || !(0, k.shouldNotify)(l, a)) return !1;
    let d = !_.default.isSoundDisabled(D.MESSAGE_SOUND);
    J((0, S.default)(s, l, o, d), {
      type: 1,
      channelId: s.id,
      messageType: l.type
    })
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && Z(t)
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return Z(t)
  },
  CALL_CREATE: Q,
  CALL_UPDATE: Q,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    K(X(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: a
      } = e,
      l = P.default.getGame();
    if (null == l || l.id !== a) return !1;
    if (n === V.ActivityActionTypes.JOIN) t = (0, p.default)(i, l);
    if (null == t) return !1;
    J(t, {
      priority: 2,
      type: 0
    })
  },
  CLIPS_SAVE_CLIP_START: function() {
    J((0, N.createClipsNotification)(B.default.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE))
  },
  CLIPS_SAVE_CLIP: function() {
    J((0, N.createClipsNotification)(B.default.Messages.CLIPS_NOTIFICATION_TITLE.format({
      duration: (0, b.getSecondsSliderLabel)(C.default.getSettings().clipsLength / 1e3, !0)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    J((0, N.createClipsNotification)(B.default.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE))
  },
  STREAM_START: function(e) {
    let t = (0, N.createClipsReminderNotification)();
    null != t && J(t)
  }
} : {})