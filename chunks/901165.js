"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007"), n("70102");
var i = n("446674"),
  s = n("95410"),
  r = n("913144"),
  a = n("741148"),
  o = n("121338"),
  l = n("116949"),
  u = n("233069"),
  d = n("271938"),
  c = n("42203"),
  f = n("923959"),
  _ = n("505507"),
  h = n("162771"),
  g = n("773336"),
  m = n("50885"),
  E = n("819068"),
  p = n("471671"),
  v = n("49111"),
  S = n("6791");
let T = Object.freeze({
    selectedGuildId: null,
    selectedChannelId: null,
    displayUserMode: v.OverlayDisplayUsers.ALWAYS,
    displayNameMode: v.OverlayDisplayNames.ALWAYS,
    avatarSizeMode: v.OverlayAvatarSizes.LARGE,
    notificationPositionMode: v.OverlayNotificationPositions.TOP_LEFT,
    textChatNotifications: v.OverlayNotificationTextChatTypes.ENABLED,
    disableExternalLinkAlert: !1,
    disablePinTutorial: !1,
    showKeybindIndicators: !0,
    textWidgetOpacity: S.OpacityBounds.LOWER
  }),
  I = null,
  C = {},
  A = null,
  y = new Set,
  N = !1,
  R = null,
  O = !1,
  D = !1,
  P = new Set,
  b = !1;

function L(e) {
  let t = C[e];
  return null == t && (t = C[e] = {
    ...T
  }), t
}
let M = {
    ...T
  },
  U = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_MESSAGE_EVENT_ACTION", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_CLICK_ZONES", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_SET_SHOW_KEYBIND_INDICATORS", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_UI_LOCKED", "OVERLAY_NOTIFY_READY_TO_SHOW", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT", "USER_SETTINGS_PROTO_ENQUEUE_UPDATE", "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY"]),
  k = new Set([...U.values(), "ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]);

function w() {
  if (!__OVERLAY__) return !1;
  let e = I === (0, E.getPID)(),
    t = y.has((0, E.getPID)()) || P.size > 0;
  e && t ? (0, a.focus)(window, !0) : (0, a.focus)(window, !1)
}

function V() {
  if (I !== (0, E.getPID)()) return !1;
  P.clear()
}

function G(e) {
  let t = (0, E.getPID)();
  if (null == e.pid || e.pid === t) switch (e.type) {
    case v.OverlayEventTypes.STORAGE_SYNC:
      i.default.PersistedStore.initializeAll(e.states);
      break;
    case v.OverlayEventTypes.DISPATCH:
      null != e.payloads && (O = !0, e.payloads.forEach(e => (function(e) {
        var t, n, i, s, a, d;
        if ("OVERLAY_INITIALIZE" === e.type && (null == (d = e).version && 1 === E.OVERLAY_VERSION || d.version === E.OVERLAY_VERSION || (r.default.dispatch({
            type: "OVERLAY_INCOMPATIBLE_APP"
          }), (0, o.disconnect)(), 0))) D = !0;
        if (D) switch (e.type) {
          case "CHANNEL_CREATE":
          case "THREAD_CREATE":
          case "THREAD_UPDATE":
          case "CHANNEL_DELETE":
          case "THREAD_DELETE":
            let c = (0, u.createChannelRecord)(e.channel);
            if (!u.ALL_CHANNEL_TYPES.has(c.type)) break;
            r.default.dispatch({
              type: e.type,
              channel: c
            });
            break;
          case "CHANNEL_UPDATES":
            r.default.dispatch({
              type: e.type,
              channels: e.channels.map(e => (0, u.createChannelRecord)(e))
            });
            break;
          case "CONNECTION_OPEN_SUPPLEMENTAL":
            e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map(e => (0, u.createChannelRecord)(e)), r.default.dispatch(e);
            break;
          case "THREAD_LIST_SYNC":
            r.default.dispatch({
              ...e,
              threads: e.threads.map(e => (0, u.createChannelRecord)(e))
            });
            break;
          case "GUILD_CREATE":
            let f = e => (0, u.createChannelRecord)(e),
              _ = e.guild;
            _.channels = null !== (s = null === (n = _.channels) || void 0 === n ? void 0 : n.map(f)) && void 0 !== s ? s : null, _.threads = null === (i = _.threads) || void 0 === i ? void 0 : i.map(f), null != _.channelUpdates && (_.channelUpdates.writes = null === (a = _.channelUpdates.writes) || void 0 === a ? void 0 : a.map(f)), r.default.dispatch({
              type: "GUILD_CREATE",
              guild: _
            });
            break;
          case "USER_SETTINGS_PROTO_UPDATE":
            r.default.dispatch({
              ...e,
              settings: {
                proto: (0, l.b64ToProtoWithType)(e.settings.type, e.settings.proto),
                type: e.settings.type
              }
            });
            break;
          default:
            r.default.dispatch(e)
        }
      })(e)), O = !1)
  }
}
class F extends i.default.PersistedStore {
  initialize(e) {
    if (this.waitFor(d.default), this.syncWith([d.default], () => {
        let e = d.default.getId();
        M = null != e ? L(e) : {
          ...T
        }
      }), __OVERLAY__ && (g.isPlatformEmbedded && m.default.requireModule("discord_overlay2"), y.delete((0, E.getPID)())), null != e) {
      C = e;
      let t = d.default.getId();
      null != t && (null == (M = L(t)).textChatNotifications && (M.textChatNotifications = T.textChatNotifications), null == M.textWidgetOpacity && (M.textWidgetOpacity = T.textWidgetOpacity))
    }
  }
  getState() {
    return C
  }
  isUILocked(e) {
    return !y.has(e)
  }
  isInstanceUILocked() {
    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceUILocked()");
    return !y.has((0, E.getPID)())
  }
  isInstanceFocused() {
    if (!__OVERLAY__) throw Error("OverlayStore: App instance should never call .isInstanceFocused()");
    return I === (0, E.getPID)()
  }
  isFocused(e) {
    return I === e
  }
  isPinned(e) {
    let t = _.default.getLayout(E.OVERLAY_LAYOUT_ID);
    if (null != t) {
      let n = t.widgets.find(t => {
        let n = _.default.getWidget(t);
        return null != n && n.type === e && !!n.pinned || !1
      });
      return null != n
    }
    return !1
  }
  getSelectedGuildId() {
    return M.selectedGuildId
  }
  getSelectedChannelId() {
    return M.selectedChannelId
  }
  getSelectedCallId() {
    return A
  }
  getDisplayUserMode() {
    return M.displayUserMode
  }
  getDisplayNameMode() {
    return M.displayNameMode
  }
  getAvatarSizeMode() {
    return M.avatarSizeMode
  }
  getNotificationPositionMode() {
    return M.notificationPositionMode
  }
  getTextChatNotificationMode() {
    return M.notificationPositionMode === v.OverlayNotificationPositions.DISABLED ? v.OverlayNotificationTextChatTypes.DISABLED : M.textChatNotifications
  }
  get showKeybindIndicators() {
    return null == M.showKeybindIndicators || M.showKeybindIndicators
  }
  getDisableExternalLinkAlert() {
    return M.disableExternalLinkAlert
  }
  getFocusedPID() {
    return I
  }
  get initialized() {
    return D
  }
  get incompatibleApp() {
    return N
  }
  getActiveRegions() {
    return P
  }
  getTextWidgetOpacity() {
    return M.textWidgetOpacity
  }
  isPreviewingInGame() {
    return b
  }
}
F.displayName = "OverlayStore", F.persistKey = "OverlayStoreV2", F.migrations = [() => {
  let e = {
      ...s.default.get("OverlayStore")
    },
    {
      pinnedWidgets: t,
      positions: n,
      sizes: i,
      v: r,
      ...a
    } = e;
  return {
    ...T,
    ...5 === r ? a : null
  }
}, e => {
  let t = d.default.getId();
  if (null == e || null == t) return {};
  let n = {
    [t]: {
      ...e
    }
  };
  return n
}];
var x = new F(r.default, {
  LOGOUT: function(e) {
    !e.isSwitchingAccount && (C = {})
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
    e.userId in C && delete C[e.userId]
  },
  CONNECTION_CLOSED: function() {
    y.clear()
  },
  OVERLAY_START_SESSION: function() {
    r.default.addInterceptor(e => {
      if (O || !k.has(e.type)) return !1;
      if ("CHANNEL_SELECT" === e.type) {
        let {
          guildId: t,
          channelId: n
        } = e;
        return null != n && ((0, o.send)({
          type: v.OverlayEventTypes.DISPATCH,
          pid: (0, E.getPID)(),
          token: (0, E.getRPCAuthToken)(),
          payloads: [{
            type: "CHANNEL_PRELOAD",
            guildId: t === v.ME ? null : t,
            channelId: n,
            context: v.CURRENT_APP_CONTEXT
          }, {
            type: "OVERLAY_SELECT_CHANNEL",
            guildId: t,
            channelId: n
          }]
        }), !1)
      }
      return (0, o.send)({
        type: v.OverlayEventTypes.DISPATCH,
        pid: (0, E.getPID)(),
        token: (0, E.getRPCAuthToken)(),
        payloads: [e]
      }), !U.has(e.type)
    }), (0, o.setReceiveEventHandler)(G, (0, E.getRPCAuthToken)()), (0, o.connect)(), (0, o.send)({
      type: v.OverlayEventTypes.CONNECT,
      pid: (0, E.getPID)(),
      token: (0, E.getRPCAuthToken)()
    })
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      focusedPID: t
    } = e;
    I = t
  },
  OVERLAY_READY: function() {
    let e = M.selectedGuildId,
      t = M.selectedChannelId;
    if (null != e && (!f.default.hasChannels(e) || null != t && !f.default.hasSelectableChannel(e, t)) && (e = null, t = null), null != t && null == c.default.getChannel(t) && (e = null, t = null), null == e && null == t && (e = h.default.getGuildId()), null != e && null == t) {
      let n = f.default.getDefaultChannel(e);
      null != n && (t = n.id)
    }
    M.selectedGuildId = e, M.selectedChannelId = t
  },
  OVERLAY_FOCUSED: function(e) {
    let {
      pid: t
    } = e;
    I = t, w()
  },
  OVERLAY_SELECT_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    M.selectedGuildId = t, M.selectedChannelId = n
  },
  OVERLAY_SELECT_CALL: function(e) {
    let {
      callId: t
    } = e;
    A = t
  },
  CALL_DELETE: function() {
    A = null
  },
  LAYOUT_CREATE: function() {},
  OVERLAY_SET_DISPLAY_NAME_MODE: function(e) {
    let {
      mode: t
    } = e;
    M.displayNameMode = t
  },
  OVERLAY_SET_DISPLAY_USER_MODE: function(e) {
    let {
      mode: t
    } = e;
    M.displayUserMode = t
  },
  OVERLAY_SET_AVATAR_SIZE_MODE: function(e) {
    let {
      mode: t
    } = e;
    M.avatarSizeMode = t
  },
  OVERLAY_SET_NOTIFICATION_POSITION_MODE: function(e) {
    let {
      mode: t
    } = e;
    M.notificationPositionMode = t
  },
  OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function(e) {
    let {
      mode: t
    } = e;
    M.textChatNotifications = t
  },
  OVERLAY_SET_SHOW_KEYBIND_INDICATORS: function(e) {
    let {
      shouldShow: t
    } = e;
    M.showKeybindIndicators = t
  },
  OVERLAY_SET_TEXT_WIDGET_OPACITY: function(e) {
    let {
      opacity: t
    } = e, n = M.textWidgetOpacity !== t;
    return M.textWidgetOpacity = t, n
  },
  OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function() {
    M.disableExternalLinkAlert = !0
  },
  OVERLAY_INCOMPATIBLE_APP: function() {
    N = !0
  },
  OVERLAY_SET_UI_LOCKED: function(e) {
    let {
      locked: t,
      pid: n
    } = e;
    t ? y.delete(n) : y.add(n), V(), w(), b = !1
  },
  OVERLAY_ACTIVATE_REGION: function(e) {
    let {
      region: t
    } = e;
    if (I !== (0, E.getPID)() || P.has(t)) return !1;
    P.add(t)
  },
  OVERLAY_DEACTIVATE_ALL_REGIONS: V,
  OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
    b = e.isPreviewingInGame
  },
  WINDOW_RESIZED: function() {
    if (__OVERLAY__) {
      let e = p.default.windowSize();
      !(0, E.validResolution)(e) && (b = !1)
    }
  },
  OVERLAY_SET_ASSOCIATED_GAME: function(e) {
    y.delete(e.previousAssociatedGamePID)
  }
})