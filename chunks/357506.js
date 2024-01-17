"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return ep
  }
}), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  o = n.n(s),
  r = n("499032"),
  d = n.n(r),
  u = n("483366"),
  c = n.n(u),
  f = n("969176"),
  h = n.n(f),
  p = n("446674"),
  g = n("77078"),
  m = n("404118"),
  E = n("272030"),
  S = n("539405"),
  v = n("304580"),
  y = n("175980"),
  C = n("485328"),
  N = n("827792"),
  O = n("812204"),
  T = n("685665"),
  I = n("9759"),
  _ = n("705565"),
  A = n("479788"),
  x = n("375202"),
  R = n("831773"),
  M = n("359477"),
  L = n("373469"),
  D = n("271938"),
  j = n("42203"),
  w = n("305961"),
  k = n("42887"),
  b = n("568307"),
  P = n("18494"),
  V = n("40597"),
  U = n("703370"),
  B = n("144747"),
  F = n("227602"),
  H = n("901165"),
  G = n("471671"),
  W = n("145131");
n("58608");
var Y = n("718517"),
  z = n("773336"),
  K = n("50885"),
  Z = n("13798"),
  X = n("819068"),
  J = n("999819"),
  Q = n("878624"),
  q = n("827922"),
  $ = n("485415"),
  ee = n("206496"),
  et = n("684325"),
  en = n("762243"),
  ei = n("265268"),
  ea = n("6791"),
  el = n("49111"),
  es = n("782340"),
  eo = n("885971");
p.default.PersistedStore.disableWrites = __OVERLAY__, p.default.initialize();
let er = null;

function ed(e) {
  e.preventDefault()
}

function eu(e) {
  (0, E.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.el("562353").then(n.bind(n, "562353"));
    return t => (0, a.jsx)(e, {
      ...t
    })
  })
}
let ec = e => {
    let {
      keybind: t,
      onClick: n,
      isPreviewingInGame: i,
      locked: l
    } = e, s = l ? g.Clickable : "div";
    return (0, a.jsx)(s, {
      className: o(eo.overlayBackground, {
        [eo.overlayActive]: !l,
        [eo.overlayLocked]: l,
        [eo.previewMode]: !l && i
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: a
        } = e;
        a === el.MouseButtons.PRIMARY && t === i && n()
      },
      onContextMenu: eu,
      children: l ? null : (0, a.jsx)("div", {
        className: eo.closeContainer,
        children: (0, a.jsx)(v.default, {
          variant: v.default.Variants.BOLD,
          keybind: t,
          closeAction: n
        })
      })
    })
  },
  ef = e => {
    let {
      keyCode: t,
      shiftKey: n,
      metaKey: i,
      altKey: a,
      ctrlKey: l
    } = e;
    return {
      keyCode: t,
      shiftKey: n,
      metaKey: i,
      altKey: a,
      ctrlKey: l
    }
  };
class eh extends l.Component {
  handleLock() {
    !(0, g.hasAnyModalOpen)() && !B.default.isOpen() && S.default.setLocked(!0, (0, X.getPID)())
  }
  handleDeactivate() {
    S.default.deactivateAllRegions()
  }
  componentDidMount() {
    S.default.startSession(), R.default.initialize(), N.default.initialize(), M.default.initialize()
  }
  componentDidUpdate(e) {
    let {
      initialized: t
    } = this.props;
    if (t) {
      if (t && !e.initialized) {
        this.initialSetup();
        return
      }
      if (!e.locked && this.props.locked) {
        if (window.addEventListener("contextmenu", ed, !1), null != er) {
          let e = Date.now() - er;
          S.default.track(el.AnalyticEvents.OVERLAY_LOCKED, {
            unlocked_duration: e
          }), er = null
        }
        C.default.disable(), this.activeKeyEventShapes = [], H.default.isPinned(el.OverlayWidgets.TEXT) && (C.default.setLayout(y.OVERLAY_LOCKED_LAYOUT), C.default.enable())
      } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", ed, !1), null == er && (er = Date.now(), S.default.track(el.AnalyticEvents.OVERLAY_UNLOCKED)), C.default.disable(), this.activeKeyEventShapes = [], C.default.setLayout(y.OVERLAY_LAYOUT), C.default.enable());
      e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, Z.toBrowserEvents)(this.props.keybindKeyCodes))
    }
  }
  initialSetup() {
    let {
      connectedToVoice: e,
      locked: t,
      canGoLive: n,
      isStreaming: i,
      voiceGuild: a,
      voiceChannelId: l,
      game: s,
      canStartBroadcast: o,
      canBroadcast: r,
      showKeybindNotification: d,
      dismissKeybindNotification: u
    } = this.props;
    S.default.track(el.AnalyticEvents.OVERLAY_INITIALIZED, {
      voice_widget_connected: e,
      text_widget_connected: H.default.isPinned(el.OverlayWidgets.TEXT)
    }), J.default.trackExposure({
      location: "Overlay"
    });
    let c = n && !i && null != s,
      f = e && null != a && null != l,
      h = {
        type: ea.OverlayNudgeTypes.WELCOME
      };
    if (d ? h = {
        type: ea.OverlayNudgeTypes.KEYBIND_INDICATORS,
        markAsDismissed: u
      } : c && !e && o ? (I.default.trackExposure({
        location: "overlay_notification"
      }), r && (h = {
        type: ea.OverlayNudgeTypes.BROADCAST,
        game: s
      })) : c && f ? h = {
        type: ea.OverlayNudgeTypes.GO_LIVE_VOICE,
        game: s,
        voiceChannelId: l,
        voiceGuild: a
      } : c && (h = {
        type: ea.OverlayNudgeTypes.GO_LIVE_NON_VOICE,
        game: s
      }), S.default.overlayMounted(h), window.addEventListener("resize", this.handleWindowResize), t && window.addEventListener("contextmenu", ed, !1), z.isPlatformEmbedded) {
      let e = K.default.requireModule("discord_overlay2");
      void 0 !== e.setPerfInfoCallback && (e.setPerfInfoCallback(e => {
        S.default.track(el.AnalyticEvents.OVERLAY_PERF_INFO, e)
      }), e.broadcastCommand({
        message: "set_perf_report_interval",
        interval: 15 * Y.default.Millis.MINUTE
      })), K.default.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
        H.default.getDisableExternalLinkAlert() || t === V.default.getLastURL() ? K.default.send("OPEN_EXTERNAL_URL", t) : m.default.show({
          title: es.default.Messages.OVERLAY_LINK_ALERT_TITLE,
          body: es.default.Messages.OVERLAY_LINK_ALERT_BODY,
          secondaryConfirmText: es.default.Messages.OVERLAY_LINK_ALERT_SECONDARY,
          confirmText: es.default.Messages.CONTINUE,
          cancelText: es.default.Messages.CANCEL,
          onConfirmSecondary: () => {
            S.default.disableExternalLinkAlert(), K.default.send("OPEN_EXTERNAL_URL", t)
          },
          onConfirm: () => K.default.send("OPEN_EXTERNAL_URL", t)
        })
      })
    }
    window.addEventListener("keydown", this.onKeyDownGlobal, !0), window.addEventListener("keyup", this.onKeyUpGlobal, !0)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, !0), window.removeEventListener("keyup", this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener("contextmenu", ed, !1), R.default.terminate(), N.default.terminate(), M.default.terminate()
  }
  renderInvalidSizeMessage() {
    return (0, a.jsx)(W.default, {
      justify: W.default.Justify.CENTER,
      align: W.default.Align.CENTER,
      className: eo.invalidContainer,
      children: (0, a.jsx)("div", {
        className: eo.inactiveContainer,
        children: es.default.Messages.OVERLAY_TOO_SMALL.format(X.OVERLAY_MIN_RESOLUTION)
      })
    })
  }
  render() {
    let {
      locked: e,
      keybind: t,
      incompatibleApp: n,
      initialized: l,
      isPreviewingInGame: s,
      activeRegions: r,
      windowSize: d,
      voiceGuild: u,
      voiceChannelId: c
    } = this.props, {
      width: f,
      height: h
    } = d;
    if (0 === f || 0 === h || n || !l) return null;
    let p = e || s,
      g = D.default.getId();
    return (0, a.jsxs)("div", {
      className: eo.overlay,
      children: [(0, a.jsx)(et.default, {}), s && (0, a.jsx)("header", {
        className: eo.previewingInGameHeader,
        children: es.default.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER
      }), i, (!e || r.has(el.OverlayActiveRegions.TEXT_WIDGET)) && (0, a.jsx)(ec, {
        locked: e,
        keybind: t,
        onClick: e ? this.handleDeactivate : this.handleLock,
        isPreviewingInGame: s
      }), (0, X.validResolution)(d) ? (0, a.jsx)(ee.default, {
        className: o({
          [eo.layoutLocked]: e,
          [eo.layoutUnlocked]: !e
        })
      }) : e ? null : this.renderInvalidSizeMessage(), (0, a.jsx)(ei.default, {}), null != u && null != c && (0, a.jsx)(en.default, {
        streamerId: g,
        guildId: u.id,
        channelId: c
      }), (0, a.jsx)($.default, {
        locked: p,
        keybind: t
      }), (0, a.jsx)(Q.default, {})]
    })
  }
  constructor(e) {
    super(e), this.handleWindowResize = c(() => {
      this.forceUpdate()
    }, 500), this.activeKeyEventShapes = [], this.lockEventShape = (0, Z.toBrowserEvents)(this.props.keybindKeyCodes), this.getActiveKeyEventIndex = e => this.activeKeyEventShapes.findIndex(t => h(t, e)), this.onKeyDownGlobal = e => {
      let t = ef(e),
        n = this.getActiveKeyEventIndex(t) > -1,
        i = [16, 17, 18, 91].includes(e.keyCode);
      !n && !i && this.activeKeyEventShapes.push(t);
      let a = this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => h(e, t)));
      a && (e.preventDefault(), e.stopPropagation());
      let {
        locked: l,
        activeRegions: s
      } = this.props;
      t.keyCode === d.codes.esc && l && s.has(el.OverlayActiveRegions.TEXT_WIDGET) && S.default.deactivateAllRegions()
    }, this.onKeyUpGlobal = e => {
      let t = ef(e),
        n = this.getActiveKeyEventIndex(t);
      n > -1 && this.activeKeyEventShapes.splice(n, 1)
    };
    let t = e.locked && H.default.isPinned(el.OverlayWidgets.TEXT);
    C.default.setLayout(t ? y.OVERLAY_LOCKED_LAYOUT : y.OVERLAY_LAYOUT), t && C.default.enable()
  }
}

function ep() {
  let {
    locked: e,
    initialized: t,
    incompatibleApp: n,
    activeRegions: i,
    isPreviewingInGame: l
  } = (0, p.useStateFromStoresObject)([H.default], () => ({
    locked: H.default.isUILocked((0, X.getPID)()),
    initialized: H.default.initialized,
    incompatibleApp: H.default.incompatibleApp,
    activeRegions: H.default.getActiveRegions(),
    isPreviewingInGame: H.default.isPreviewingInGame()
  })), s = (0, p.useStateFromStores)([G.default], () => G.default.windowSize()), o = (0, p.useStateFromStores)([F.default], () => F.default.getOverlayKeybind()), r = (0, p.useStateFromStores)([P.default], () => P.default.getVoiceChannelId()), d = (0, p.useStateFromStores)([j.default], () => j.default.getChannel(r)), u = (0, p.useStateFromStores)([w.default], () => null != d ? w.default.getGuild(d.guild_id) : null), c = (0, p.useStateFromStores)([b.default, U.default], () => (0, x.default)(b.default, U.default)), f = (0, p.useStateFromStores)([k.default], () => (0, A.default)(k.default)), {
    canBroadcast: h
  } = I.default.useExperiment({
    location: "overlay"
  }, {
    autoTrackExposure: !1
  }), m = (0, _.default)() && null != c, E = (0, p.useStateFromStores)([L.default], () => null != L.default.getCurrentUserActiveStream()), {
    AnalyticsLocationProvider: S
  } = (0, T.default)(O.default.OVERLAY), {
    showKeybindIndicators: v,
    dismissKeybindNotification: y
  } = (0, q.useGetKeybindNotification)();
  return (0, a.jsx)(S, {
    children: (0, a.jsx)(g.RedesignIconContextProvider, {
      children: (0, a.jsx)(eh, {
        locked: e,
        initialized: t,
        incompatibleApp: n,
        activeRegions: i,
        isPreviewingInGame: l,
        windowSize: s,
        keybind: null != o ? (0, Z.toString)(o.shortcut, !0) : "???",
        keybindKeyCodes: null != o ? o.shortcut : [],
        connectedToVoice: null != r,
        voiceChannelId: null != d ? d.id : null,
        voiceGuild: u,
        game: c,
        canGoLive: f,
        isStreaming: E,
        canBroadcast: h,
        canStartBroadcast: m,
        showKeybindNotification: v,
        dismissKeybindNotification: y
      })
    })
  })
}