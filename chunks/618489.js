"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ez
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("627445"),
  o = n.n(r),
  u = n("90915"),
  d = n("446674"),
  c = n("77078"),
  f = n("629109"),
  E = n("272030"),
  _ = n("406189"),
  h = n("32296"),
  C = n("412026"),
  I = n("86621"),
  T = n("997289"),
  S = n("244201"),
  m = n("266790"),
  p = n("191225"),
  A = n("372610"),
  g = n("380691"),
  N = n("943349"),
  R = n("702173"),
  O = n("10524"),
  L = n("478272"),
  v = n("812204"),
  M = n("685665"),
  P = n("754493"),
  D = n("458685"),
  y = n("679653"),
  x = n("76393"),
  b = n("261552"),
  U = n("167715"),
  G = n("479788"),
  j = n("16916"),
  w = n("597517"),
  k = n("269596"),
  F = n("38654"),
  H = n("393414"),
  B = n("245463"),
  V = n("486185"),
  Y = n("488464"),
  W = n("998716"),
  K = n("819450"),
  z = n("111542"),
  q = n("924872"),
  Q = n("274438"),
  Z = n("808422"),
  X = n("845579"),
  J = n("999180"),
  $ = n("830210"),
  ee = n("289180"),
  et = n("951691"),
  en = n("19065"),
  ea = n("977347"),
  es = n("799808"),
  ei = n("727284"),
  el = n("116439"),
  er = n("373469"),
  eo = n("271938"),
  eu = n("42203"),
  ed = n("305961"),
  ec = n("778588"),
  ef = n("42887"),
  eE = n("957255"),
  e_ = n("945956"),
  eh = n("27618"),
  eC = n("697218"),
  eI = n("800762"),
  eT = n("316133"),
  eS = n("145131"),
  em = n("437825"),
  ep = n("142303"),
  eA = n("406019"),
  eg = n("220075"),
  eN = n("82636"),
  eR = n("394832"),
  eO = n("394640"),
  eL = n("343571"),
  ev = n("962541"),
  eM = n("762489"),
  eP = n("599110"),
  eD = n("701909"),
  ey = n("158998"),
  ex = n("452469"),
  eb = n("997769"),
  eU = n("49111"),
  eG = n("533613"),
  ej = n("782340"),
  ew = n("833076"),
  ek = n("926622");

function eF(e) {
  let t = e.currentTarget;
  eP.default.track(eU.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: eU.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    }
  })
}

function eH() {
  let e = s.useRef(null);
  (0, c.useFocusLock)(e), s.useEffect(() => {
    eP.default.track(eU.AnalyticEvents.OPEN_POPOUT, {
      type: eU.AnalyticsSections.NOISE_CANCELLATION_POPOUT
    })
  }, []);
  let t = (0, d.useStateFromStores)([ef.default], () => ef.default.getNoiseCancellation());
  return (0, a.jsxs)("div", {
    ref: e,
    className: ew.noiseCancellationPopout,
    children: [(0, a.jsx)(c.FormSwitch, {
      hideBorder: !0,
      className: ek.marginBottom4,
      value: t,
      onChange: () => f.default.setNoiseCancellation(!t, {
        section: eU.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }),
      note: ej.default.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
      children: ej.default.Messages.NOISE_CANCELLATION_POPOUT_HEADER
    }), (0, a.jsx)(h.default, {
      title: ej.default.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
      notchBackground: h.NotchBackground.BLACK,
      buttonTest: ej.default.Messages.NOISE_CANCELLATION_POPOUT_TEST,
      buttonStop: ej.default.Messages.NOISE_CANCELLATION_POPOUT_STOP,
      buttonClassName: ew.micTestButton,
      buttonColor: c.Button.Colors.PRIMARY,
      location: {
        section: eU.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      }
    }), (0, a.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H5,
      className: l(ek.marginBottom8, ek.marginTop20),
      children: ej.default.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
    }), (0, a.jsxs)(eS.default, {
      justify: eS.default.Justify.BETWEEN,
      className: ew.footer,
      children: [(0, a.jsx)(c.Anchor, {
        href: eU.MarketingURLs.KRISP,
        onClick: e => eF(e),
        children: (0, a.jsx)("div", {
          className: ew.krispLogo
        })
      }), (0, a.jsx)(c.Anchor, {
        href: eD.default.getArticleURL(eU.HelpdeskArticles.NOISE_SUPPRESSION),
        className: ew.krispLink,
        onClick: e => eF(e),
        children: ej.default.Messages.LEARN_MORE
      })]
    })]
  })
}

function eB() {
  let e = (0, d.useStateFromStores)([Q.default], () => Q.default.isMuted()),
    t = e ? ej.default.Messages.STAGE_MUSIC_UNMUTE : ej.default.Messages.STAGE_MUSIC_MUTE;
  return (0, a.jsx)(ev.default, {
    "aria-label": t,
    tooltipText: t,
    icon: e ? eL.default : eO.default,
    onClick: () => (0, z.updateStageMusicMuted)(!e)
  })
}

function eV(e) {
  let {
    channel: t,
    enableActivities: n,
    disabled: i
  } = e, r = (0, J.default)(), o = (0, ee.default)(t), u = (0, d.useStateFromStoresObject)([p.default], () => null != p.default.getSelfEmbeddedActivityForChannel(t.id)), E = (0, B.default)(t), {
    reachedLimit: _,
    limit: h
  } = (0, $.default)(t), C = s.useCallback(() => {
    (0, en.default)()
  }, []), I = (0, S.useAppContext)(), T = s.useCallback(e => {
    if (ef.default.isVideoEnabled() === e) return;
    let n = () => {
      var n;
      f.default.setVideoEnabled(e), e && (0, H.transitionTo)(eU.Routes.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eU.ME, t.id))
    };
    e ? (0, ei.default)(n, I) : n()
  }, [t, I]), m = u || n || E;
  return (0, a.jsx)(el.VideoButtonWrapper, {
    onChange: T,
    onCameraUnavailable: C,
    hasPermission: o,
    channelLimit: h,
    channelLimitReached: _,
    ...r,
    enabled: !i && r.enabled,
    children: e => {
      let {
        unavailable: t,
        active: n,
        label: s,
        iconComponent: i,
        ...r
      } = e, o = n ? em.default : ep.default, u = (0, a.jsx)(o, {
        className: l(ew.buttonIcon, {
          [ew.withText]: !m
        })
      });
      return (0, a.jsx)(c.Popout, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(D.default, {
            onClose: t
          })
        },
        position: "top",
        align: "center",
        animation: c.Popout.Animation.FADE,
        children: (e, i) => {
          let {
            onClick: o,
            ...d
          } = e, {
            isShown: f
          } = i;
          return (0, a.jsx)(c.Tooltip, {
            text: s,
            children: e => (0, a.jsx)(c.Button, {
              ...r,
              ...e,
              ...d,
              onClick: t => {
                var n;
                r.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), f && o(t)
              },
              onContextMenu: t => {
                var n;
                o(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e)
              },
              size: c.Button.Sizes.SMALL,
              className: l(ew.button, ew.buttonColor, {
                [ew.buttonActive]: n,
                [ew.fauxDisabled]: t,
                [ew.disabled]: r.disabled
              }),
              innerClassName: ew.buttonContents,
              wrapperClassName: ew.button,
              fullWidth: !0,
              children: m ? u : (0, a.jsxs)(eS.default, {
                align: eS.default.Align.CENTER,
                children: [u, ej.default.Messages.VIDEO]
              })
            })
          })
        }
      })
    }
  })
}

function eY(e) {
  let {
    channel: t,
    enableActivities: n
  } = e, s = (0, S.useAppContext)(), {
    analyticsLocations: i
  } = (0, M.default)(), r = s === eU.AppContext.POPOUT, o = t.getGuildId();
  (0, m.useActivitiesRolloutExperiments)(o);
  let u = (0, N.useEmbeddedActivityLaunchability)(t.id),
    f = (0, N.getEmbeddedActivityLaunchabilityLabel)(u),
    [E] = (0, d.useStateFromStores)([p.default], () => null != t.id && "" !== t.id ? p.default.getEmbeddedActivitiesForChannel(t.id) : p.NO_ACTIVITIES),
    {
      userInActivity: _
    } = (0, d.useStateFromStoresObject)([p.default], () => ({
      userInActivity: null != p.default.getSelfEmbeddedActivityForChannel(t.id)
    })),
    h = (0, T.useAnalyticsContext)(),
    C = (0, g.useShowActivityIndicator)(),
    I = u !== N.EmbeddedActivityLaunchability.CAN_LAUNCH;
  return n ? (0, a.jsx)(c.Tooltip, {
    text: f,
    children: e => (0, a.jsxs)(c.Button, {
      ...e,
      fullWidth: !0,
      size: c.Button.Sizes.SMALL,
      onClick: () => {
        var n;
        (0, L.default)({
          channel: t,
          guildId: t.guild_id,
          locationObject: h.location,
          openInPopout: r,
          analyticsLocations: i
        }), null === (n = e.onClick) || void 0 === n || n.call(e)
      },
      disabled: I,
      className: l(ew.button, ew.buttonColor, {
        [ew.buttonActive]: _ || null != E,
        [ew.disabled]: I
      }),
      innerClassName: ew.buttonContents,
      wrapperClassName: ew.button,
      children: [C ? (0, a.jsx)(O.FreeActivityIndicatorDot, {
        top: -1,
        right: -1
      }) : null, (0, a.jsx)(eN.default, {
        className: ew.buttonIcon
      })]
    })
  }) : null
}

function eW(e) {
  let t, {
      channel: n,
      canGoLive: i,
      enableActivities: r,
      disabled: o
    } = e,
    u = (0, d.useStateFromStores)([eC.default], () => eC.default.getCurrentUser()),
    f = (0, d.useStateFromStoresArray)([er.default], () => er.default.getAllActiveStreams()),
    E = (0, ee.default)(n),
    _ = n.getGuildId(),
    h = (0, d.useStateFromStoresObject)([p.default], () => null != p.default.getSelfEmbeddedActivityForChannel(n.id)),
    C = (0, B.default)(n),
    I = s.useCallback(() => {
      (0, es.default)(_, n.id, eU.AnalyticsSections.ACTIVITY_PANEL)
    }, [_, n.id]),
    T = f.find(e => e.ownerId === (null == u ? void 0 : u.id)),
    S = (0, et.useOtherStreams)(n, u, f);
  t = null == T ? i ? I : ea.default : () => (0, j.default)(T);
  let m = null != T || S.length > 0,
    A = E ? ej.default.Messages.SHARE_YOUR_SCREEN : ej.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
    g = h || r || C,
    N = (0, a.jsx)(eR.default, {
      className: l(ew.buttonIcon, {
        [ew.withText]: !g
      })
    });
  return (0, a.jsx)(c.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(et.default, {
        channel: n,
        currentUser: u,
        activeStreams: f,
        onClose: t,
        handleGoLive: i ? I : ea.default
      })
    },
    position: "top",
    align: "center",
    animation: c.Popout.Animation.FADE,
    children: e => {
      let {
        onClick: n,
        ...s
      } = e;
      return (0, a.jsx)(c.Tooltip, {
        text: A,
        children: e => (0, a.jsx)(c.Button, {
          ...e,
          size: c.Button.Sizes.SMALL,
          onClick: a => {
            var s;
            m ? n(a) : t(), null === (s = e.onClick) || void 0 === s || s.call(e)
          },
          disabled: !E || o,
          className: l(ew.button, ew.buttonColor, {
            [ew.buttonActive]: null != T,
            [ew.disabled]: !E || o
          }),
          ...m ? s : null,
          innerClassName: ew.buttonContents,
          wrapperClassName: ew.button,
          children: g ? N : (0, a.jsxs)(eS.default, {
            align: eS.default.Align.CENTER,
            children: [N, ej.default.Messages.GO_LIVE_SHARE_SCREEN]
          })
        })
      })
    }
  })
}
class eK extends s.PureComponent {
  renderConnectionStatus() {
    let e;
    let {
      channel: t,
      guild: n,
      rtcConnectionQuality: s,
      rtcConnectionState: i,
      rtcConnectionLastPing: l,
      hasVideo: r,
      isBroadcasting: o
    } = this.props;
    if (null == t) return null;
    let d = (0, y.computeChannelName)(t, eC.default, eh.default);
    return null != n ? (e = eU.Routes.CHANNEL(n.id, t.id), d = "".concat(d, " / ").concat(n.name)) : e = eU.Routes.CHANNEL(eU.ME, t.id), o && t.isBroadcastChannel() && (d = ej.default.Messages.BROADCASTING), (0, a.jsx)(C.default, {
      statusTextClassName: ew.statusWithPopout,
      quality: s,
      state: i,
      lastPing: l,
      hasVideo: r,
      children: (0, a.jsx)(c.FocusRing, {
        children: (0, a.jsx)(u.Link, {
          to: e,
          onClick: this.handleChannelLinkClick,
          onContextMenu: this.handleChannelLinkContextMenu,
          children: (0, a.jsx)(eM.default, {
            className: ew.channel,
            children: d
          })
        })
      })
    })
  }
  renderNoiseCancellation() {
    let {
      noiseCancellationActive: e,
      noiseCancellationError: t,
      hasLayers: n,
      remoteVoiceState: s,
      channel: i,
      voiceStates: l
    } = this.props;
    if (null != s) return null;
    if (null == i ? void 0 : i.isGuildStageVoice()) {
      let e = null != l.find(e => e.user.id === eo.default.getId() && (0, Z.getAudienceRequestToSpeakState)(e.voiceState) === Z.RequestToSpeakStates.ON_STAGE);
      if (!e && (0, q.shouldShowStageMusicMuteButton)(i.id)) return (0, a.jsx)(eB, {})
    }
    return !n && t ? (0, a.jsx)(c.Tooltip, {
      text: ej.default.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
      tooltipClassName: ew.noiseCancellationTooltip,
      forceOpen: !0,
      children: e => {
        let {
          "aria-label": t
        } = e;
        return (0, a.jsx)(ev.default, {
          "aria-label": t,
          tooltipText: null,
          disabled: !0,
          icon: eg.default
        })
      }
    }) : (0, a.jsx)(c.Popout, {
      position: "top",
      align: "center",
      renderPopout: () => (0, a.jsx)(eH, {}),
      children: (t, n) => {
        let {
          isShown: s
        } = n;
        return (0, a.jsx)(ev.default, {
          ...t,
          tooltipClassName: ew.noiseCancellationTooltip,
          tooltipText: s ? null : ej.default.Messages.NOISE_CANCELLATION_TOOLTIP,
          icon: e ? eA.default : eg.default
        })
      }
    }, "krisp-popout")
  }
  renderVoiceStates() {
    let {
      channel: e,
      voiceStates: t,
      showVoiceStates: n
    } = this.props;
    return null != e && n && 0 !== t.length ? (0, a.jsx)(eb.default, {
      voiceStates: t,
      channel: e,
      className: ew.voiceUsers
    }) : null
  }
  renderChannelButtons() {
    let {
      channel: e,
      canGoLive: t,
      remoteVoiceState: n,
      enableActivities: s,
      voiceStates: i,
      selfStream: r,
      isPrivateChannelWithEnabledActivities: o
    } = this.props;
    if (null == e || null != n) return null;
    let u = eo.default.getId();
    if (e.isGuildStageVoice()) {
      if (!(0, K.isStageVideoEnabled)(e.guild_id) || !t) return null;
      let n = i.find(e => e.user.id === u);
      if (null == n || n.voiceState.suppress) return null
    }
    let d = (e.isGuildVoice() || o) && s,
      {
        reachedLimit: c
      } = (0, $.getChannelVideoLimit)(e),
      f = (0, K.getStageHasMedia)(e.id);
    return (0, a.jsxs)("div", {
      className: ew.actionButtons,
      children: [(0, a.jsx)(eV, {
        channel: e,
        enableActivities: d,
        disabled: !f && c
      }), (0, a.jsx)(eW, {
        channel: e,
        canGoLive: t,
        enableActivities: d,
        disabled: e.isGuildStageVoice() && (f && null == r || !f && c)
      }), (0, a.jsxs)(a.Fragment, {
        children: [d ? (0, a.jsx)(eY, {
          channel: e,
          enableActivities: s
        }) : null, (0, B.default)(e) ? (0, a.jsx)(V.default, {
          className: l(ew.button, ew.buttonColor),
          innerClassName: ew.buttonContents,
          iconClassName: ew.buttonIcon,
          channel: e
        }) : null]
      })]
    })
  }
  render() {
    let {
      channel: e,
      noiseCancellationSupported: t,
      shouldShowVoicePanelIntroduction: n
    } = this.props;
    return null == e ? null : (0, a.jsx)(c.Popout, {
      renderPopout: this.renderVoicePanelIntroduction,
      position: "top",
      align: "center",
      animation: c.Popout.Animation.TRANSLATE,
      shouldShow: n,
      children: () => (0, a.jsxs)("div", {
        className: ew.container,
        children: [(0, a.jsxs)(eS.default, {
          className: ew.connection,
          align: eS.default.Align.CENTER,
          children: [(0, a.jsx)("div", {
            className: ew.inner,
            children: this.renderConnectionStatus()
          }), (0, a.jsxs)(eS.default, {
            grow: 0,
            shrink: 0,
            children: [t ? this.renderNoiseCancellation() : null, (0, a.jsx)(ex.default, {
              channel: e
            })]
          })]
        }), this.renderVoiceStates(), this.renderChannelButtons()]
      })
    })
  }
  constructor(...e) {
    super(...e), this.canScreenshare = () => {
      let {
        channel: e,
        canGoLive: t
      } = this.props;
      return t && null != e && null != e.getGuildId()
    }, this.handleNoiseCancellationClicked = () => {
      let {
        noiseCancellationActive: e
      } = this.props;
      f.default.setNoiseCancellation(!e, {
        section: eU.AnalyticsSections.NOISE_CANCELLATION_POPOUT
      })
    }, this.handleGoLive = () => {
      let {
        guild: e,
        channel: t
      } = this.props, n = null != t ? t.getGuildId() : null != e ? e.id : null;
      null != n && (0, es.default)(n, t.id, eU.AnalyticsLocations.VOICE_PANEL)
    }, this.handleChannelLinkClick = e => {
      var t;
      let {
        guild: n,
        channel: a
      } = this.props;
      o(null != a, "Channel is null during navigation click"), e.stopPropagation(), _.default.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eU.ME, a.id)
    }, this.handleChannelLinkContextMenu = e => {
      let {
        channel: t
      } = this.props;
      (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("19577").then(n.bind(n, "19577"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t
        })
      })
    }, this.handleCloseVoicePanelIntroduction = () => {
      w.hideHotspot(eG.HotspotLocations.VOICE_PANEL_INTRODUCTION)
    }, this.renderVoicePanelIntroduction = () => (0, a.jsxs)("div", {
      className: l(ew.voicePanelIntroductionWrapper, "theme-light"),
      children: [(0, a.jsx)(c.Heading, {
        className: ew.voicePanelIntroductionHeader,
        variant: "heading-md/semibold",
        children: ej.default.Messages.VOICE_PANEL_INTRODUCTION_HEADER
      }), (0, a.jsx)(c.Text, {
        className: ew.voicePanelIntroductionText,
        variant: "text-sm/normal",
        children: ej.default.Messages.VOICE_PANEL_INTRODUCTION_TEXT
      }), (0, a.jsx)(c.Button, {
        className: ew.voicePanelIntroductionButton,
        color: c.Button.Colors.BRAND,
        onClick: this.handleCloseVoicePanelIntroduction,
        children: ej.default.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
      })]
    })
  }
}
var ez = (0, I.default)(function(e) {
  let t = (0, b.default)(),
    n = (0, d.useStateFromStores)([x.default], () => x.default.getAwaitingRemoteSessionInfo()),
    i = (0, d.useStateFromStores)([eC.default], () => eC.default.getCurrentUser()),
    {
      channelId: l,
      ...r
    } = (0, d.useStateFromStoresObject)([e_.default], () => null != t ? {
      channelId: t.channelId,
      rtcConnectionQuality: eU.RTCConnectionQuality.FINE,
      rtcConnectionState: eU.RTCConnectionStates.RTC_CONNECTED,
      rtcConnectionLastPing: 0
    } : {
      channelId: e_.default.getChannelId(),
      rtcConnectionQuality: e_.default.getQuality(),
      rtcConnectionState: e_.default.getState(),
      rtcConnectionLastPing: e_.default.getLastPing()
    }),
    o = (0, d.useStateFromStores)([eu.default], () => eu.default.getChannel(l), [l]),
    u = null == o ? void 0 : o.getGuildId(),
    f = (0, d.useStateFromStores)([ed.default], () => ed.default.getGuild(u), [u]),
    E = (0, d.useStateFromStoresObject)([ef.default], () => ({
      noiseCancellationSupported: ef.default.isNoiseCancellationSupported(),
      noiseCancellationActive: ef.default.getNoiseCancellation(),
      noiseCancellationError: ef.default.isNoiseCancellationError(),
      canGoLive: (0, G.default)(ef.default)
    })),
    _ = (0, d.useStateFromStores)([ef.default, k.default], () => k.default.hasHotspot(eG.HotspotLocations.VOICE_PANEL_INTRODUCTION) && (0, ey.isNewUser)(i) && !ef.default.isInteractionRequired() && !(null == o ? void 0 : o.isGuildStageVoice())),
    h = (0, d.useStateFromStores)([eI.default], () => null != l && eI.default.hasVideo(l), [l]),
    C = (0, d.useStateFromStores)([er.default], () => er.default.getCurrentUserActiveStream()),
    I = (0, d.useStateFromStores)([ec.default], () => ec.default.hasLayers()),
    T = (0, d.useStateFromStores)([F.default], () => F.default.isViewingRoles(u)),
    S = (0, d.useStateFromStores)([eE.default], () => T && !eE.default.can(eU.Permissions.VIEW_CHANNEL, o), [T, o]),
    m = X.RtcPanelShowVoiceStates.useSetting(),
    [p, g, N] = (0, d.useStateFromStoresArray)([eT.default, Y.default], () => (null == o ? void 0 : o.isGuildStageVoice()) ? [Y.default.getMutableParticipants(o.id, W.StageChannelParticipantNamedIndex.SPEAKER), Y.default.getParticipantsVersion(o.id), null] : [null, null, null != o ? eT.default.getVoiceStatesForChannel(o) : null], [o]),
    O = s.useMemo(() => {
      var e, t;
      return null !== (t = null !== (e = null == p ? void 0 : p.map(e => {
        let {
          user: t,
          userNick: n,
          voiceState: a
        } = e;
        return {
          user: t,
          nick: n,
          voiceState: a
        }
      })) && void 0 !== e ? e : N) && void 0 !== t ? t : []
    }, [p, g, N]),
    [L, D] = s.useState(!1);
  s.useEffect(() => {
    (T || S) && D(!1)
  }, [T, S, D]);
  let {
    AnalyticsLocationProvider: y
  } = (0, M.default)(v.default.RTC_PANEL), j = (0, A.default)(null != u ? u : "", null == o ? void 0 : o.id), w = (0, R.default)(null == o ? void 0 : o.id), H = (0, P.default)();
  return (0, a.jsx)(y, {
    children: (0, a.jsxs)("div", {
      className: ew.wrapper,
      children: [null != t || null != n ? (0, a.jsx)(U.default, {
        voiceState: t,
        awaitingRemoteSessionInfo: n
      }) : null, (0, a.jsx)(eK, {
        ...e,
        ...E,
        ...r,
        enableActivities: j,
        remoteVoiceState: t,
        guild: f,
        channel: o,
        hasVideo: h,
        selfStream: C,
        hasLayers: I,
        voiceStates: O,
        showVoiceStates: m,
        shouldShowVoicePanelIntroduction: _,
        isPrivateChannelWithEnabledActivities: w,
        isBroadcasting: H
      }), !L && T && null != u ? (0, a.jsxs)("div", {
        className: ew.viewAsRolesWarning,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: ew.viewAsRolesWarningText,
          children: S ? ej.default.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING : ej.default.Messages.VIEW_AS_ROLES_VOICE_WARNING
        }), (0, a.jsx)(c.Button, {
          className: ew.viewAsRolesWarningButton,
          size: c.Button.Sizes.MIN,
          onClick: () => {
            D(!0)
          },
          children: ej.default.Messages.DISMISS
        })]
      }) : null]
    })
  })
})