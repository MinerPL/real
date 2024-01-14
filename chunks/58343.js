"use strict";
n.r(t), n.d(t, {
  default: function() {
    return es
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n("446674"),
  u = n("95410"),
  d = n("77078"),
  c = n("913144"),
  f = n("731898"),
  h = n("244201"),
  p = n("191145"),
  m = n("161306"),
  E = n("412090"),
  C = n("452027"),
  g = n("383294"),
  S = n("292687"),
  _ = n("393414"),
  I = n("486030"),
  T = n("115531"),
  v = n("620592"),
  x = n("336971"),
  N = n("555038"),
  A = n("634472"),
  M = n("271938"),
  R = n("712234"),
  j = n("305961"),
  L = n("957255"),
  O = n("18494"),
  y = n("773336"),
  P = n("439932"),
  b = n("50885"),
  D = n("716214"),
  U = n("567469"),
  w = n("998716"),
  F = n("834052"),
  k = n("534471"),
  V = n("145635"),
  B = n("277354"),
  H = n("100082"),
  G = n("598050"),
  W = n("977026"),
  Y = n("679703"),
  z = n("276086"),
  K = n("96151"),
  Z = n("49111"),
  X = n("99795"),
  J = n("782340"),
  q = n("580105");
let Q = "HasBeenInStageChannel",
  $ = (e, t) => () => {
    let n = e.getGuildId();
    null != n && null != t && (0, _.transitionToGuild)(n, t), g.openChannelCallPopout(e)
  },
  ee = () => {
    c.default.wait(() => g.close(Z.PopoutWindowKeys.CHANNEL_CALL_POPOUT))
  },
  et = e => {
    g.setAlwaysOnTop(Z.PopoutWindowKeys.CHANNEL_CALL_POPOUT, e)
  };

function en(e) {
  let {
    channel: t,
    appContext: n,
    popoutOpen: s,
    popoutWindow: i,
    popoutWindowAlwaysOnTop: r,
    selectedParticipant: u
  } = e, d = t.getGuildId(), c = (0, o.useStateFromStores)([O.default], () => O.default.getMostRecentSelectedTextChannelId(d), [d]), f = M.default.getId(), h = (0, o.useStateFromStores)([p.default], () => p.default.isFullscreenInContext(n)), E = !h && (!y.isPlatformEmbedded || y.isPlatformEmbedded && b.default.supportsFeature(Z.NativeFeatures.POPOUT_WINDOWS)), C = null != u && u.type !== X.ParticipantTypes.ACTIVITY && u.user.id !== f, g = l.useMemo(() => {
    var e;
    return null !== (e = null == i ? void 0 : i.window) && void 0 !== e ? e : window
  }, [i]), S = (0, z.default)({
    channel: t,
    appContext: n,
    popoutOpen: s,
    popoutWindow: i,
    currentWindow: g
  }), _ = n === Z.AppContext.POPOUT && y.isPlatformEmbedded && b.default.supportsFeature(Z.NativeFeatures.POPOUT_WINDOWS);
  return (0, a.jsxs)(a.Fragment, {
    children: [C ? (0, a.jsx)(A.default, {
      context: (0, m.default)(u.type),
      userId: u.user.id,
      currentWindow: g,
      sliderClassName: q.volumeSlider
    }) : null, _ ? (0, a.jsx)(N.default, {
      className: q.rightTrayIcon,
      popoutWindowAlwaysOnTop: r,
      onToggleStayOnTop: et
    }) : null, E ? (0, a.jsx)(x.default, {
      className: q.rightTrayIcon,
      popoutOpen: s,
      onOpenPopout: $(t, c),
      onClosePopout: ee
    }) : null, S]
  })
}

function ea(e) {
  let {
    channel: t
  } = e, n = (0, h.useAppContext)(), l = (0, o.useStateFromStores)([L.default], () => L.default.can(Z.Permissions.CREATE_INSTANT_INVITE, t)), s = (0, o.useStateFromStores)([j.default], () => j.default.getGuild(t.guild_id)), i = (0, o.useStateFromStores)([F.default], () => F.default.getStageInstanceByChannel(t.id)), r = l || (null == i ? void 0 : i.invite_code) != null;
  return null != s && r ? (0, a.jsx)(I.default, {
    channel: t,
    appContext: n,
    className: q.leftTrayIcon,
    analyticsLocation: Z.AnalyticsPages.GUILD_CHANNEL
  }) : null
}

function el(e) {
  let t, {
      channel: n,
      toggleRequestToSpeakSidebar: s,
      showRequestToSpeakSidebar: u,
      popoutWindow: d,
      popoutWindowAlwaysOnTop: c,
      popoutOpen: f,
      chatOpen: m
    } = e,
    C = (0, h.useAppContext)(),
    g = (0, o.useStateFromStores)([O.default], () => O.default.getVoiceChannelId() === n.id, [n.id]),
    S = (0, o.useStateFromStores)([L.default], () => L.default.can(Z.Permissions.CONNECT, n)),
    _ = (0, U.useStageParticipants)(n.id, w.StageChannelParticipantNamedIndex.SPEAKER),
    I = (0, o.useStateFromStores)([p.default], () => p.default.getSelectedParticipant(n.id)),
    x = f && C !== Z.AppContext.POPOUT,
    [N, A] = l.useState(0),
    {
      isOnStartStageScreen: M
    } = (0, k.default)();
  (0, k.useUpdateIsOnStartStageScreenEffect)(n);
  let j = (0, o.useStateFromStores)([R.default], () => R.default.getToastsEnabled(n.id)),
    y = (0, K.default)(n),
    P = y ? null != I ? "84px" : "124px" : null != I ? "0px" : "48px";
  return t = M ? (0, a.jsx)(Y.default, {
    channel: n,
    onContinueClick: () => {
      (0, k.setIsOnStartStageScreen)(!1), !g && (0, D.connectToStage)(n)
    }
  }) : g ? (0, a.jsx)(G.default, {
    channel: n,
    onScroll: e => {
      let {
        scrollTop: t
      } = e.target;
      (0, r.debounce)(() => A(t), 1e3, {
        leading: !0
      })()
    }
  }) : (0, a.jsx)(B.default, {
    participants: _,
    channel: n,
    hasConnectPermission: S
  }), (0, a.jsx)(v.default, {
    style: {
      height: "calc(100% - ".concat(P, ")"),
      paddingTop: P
    },
    disableGradients: 0 === N && v.DisableGradient.TOP,
    renderBottomLeft: () => (0, a.jsx)(ea, {
      channel: n
    }),
    renderBottomCenter: () => g ? (0, a.jsx)(W.default, {
      channel: n,
      isOnStartStageScreen: M
    }) : null,
    renderBottomRight: () => g ? (0, a.jsx)(en, {
      channel: n,
      appContext: C,
      popoutOpen: f,
      popoutWindow: d,
      popoutWindowAlwaysOnTop: c,
      selectedParticipant: I
    }) : null,
    renderHeader: () => (0, a.jsx)(H.default, {
      inPopout: C === Z.AppContext.POPOUT,
      toggleRequestToSpeakSidebar: s,
      showRequestToSpeakSidebar: u,
      channel: n
    }),
    renderChatToasts: () => !j || m || x ? null : (0, a.jsx)(E.default, {
      children: (0, a.jsx)(T.default, {
        className: i(q.chatToasts, {
          [q.rtsSidebarOpen]: u
        }),
        channelId: n.id
      })
    }),
    onActive: () => {},
    onPreventIdle: () => {},
    onAllowIdle: () => {},
    onForceIdle: () => {},
    screenMessage: x ? {
      mainText: J.default.Messages.POPOUT_PLAYER_OPENED
    } : null,
    idle: !1,
    children: !x && t
  })
}

function es(e) {
  let {
    channel: t
  } = e, [s, r] = l.useState(!1), c = l.useCallback(() => {
    r(!s)
  }, [s, r]), {
    popoutWindow: m,
    popoutWindowAlwaysOnTop: g
  } = (0, o.useStateFromStoresObject)([S.default], () => ({
    popoutWindow: S.default.getWindow(Z.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
    popoutWindowAlwaysOnTop: S.default.getIsAlwaysOnTop(Z.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
  })), _ = null != m && !m.closed, I = (0, h.useAppContext)(), T = (0, o.useStateFromStores)([p.default], () => p.default.getChatOpen(t.id), [t.id]), v = (0, o.useStateFromStores)([j.default], () => j.default.getGuild(t.guild_id), [t.guild_id]);
  l.useEffect(() => {
    null == u.default.get(Q) && ((0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("108838").then(n.bind(n, "108838"));
      return t => (0, a.jsx)(e, {
        ...t
      })
    }), u.default.set(Q, Date.now()))
  }, []);
  let {
    width: x = 0,
    ref: N
  } = (0, f.default)();
  return (0, a.jsxs)(E.ChannelCallChatLayerProvider, {
    children: [(0, a.jsxs)("div", {
      className: q.container,
      ref: N,
      children: [(0, a.jsx)("div", {
        className: i(q.callContainer, (0, P.getThemeClass)(Z.ThemeTypes.DARK), {
          [q.sidebarVisible]: s,
          [q.sidebarOrChatVisible]: s || T
        }),
        children: (0, a.jsx)(el, {
          channel: t,
          toggleRequestToSpeakSidebar: c,
          showRequestToSpeakSidebar: s,
          popoutWindow: m,
          popoutWindowAlwaysOnTop: g,
          popoutOpen: _,
          chatOpen: T
        })
      }), s ? (0, a.jsx)(V.default, {
        channel: t,
        toggleRequestToSpeakSidebar: c,
        chatOpen: T
      }) : null, (0, a.jsx)("div", {
        className: q.channelChatWrapper,
        children: T && (!_ || _ && I === Z.AppContext.POPOUT) && (0, a.jsx)(C.default, {
          channel: t,
          guild: v,
          maxWidth: x - 550
        })
      })]
    }), (0, a.jsx)(E.ChannelCallChatLayerContainer, {})]
  })
}