"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ez
  }
}), n("222007"), n("424973");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("446674"),
  o = n("151426"),
  u = n("862337"),
  d = n("966900"),
  c = n("358917"),
  E = n("838048"),
  f = n("359902"),
  _ = n("696675"),
  h = n("780624"),
  C = n("696526"),
  T = n("197801"),
  I = n("582601"),
  S = n("77078"),
  N = n("850068"),
  A = n("272030"),
  p = n("79112"),
  m = n("146350"),
  g = n("901582"),
  R = n("415929"),
  O = n("687531"),
  L = n("875212"),
  v = n("899633"),
  M = n("606292"),
  P = n("489740"),
  D = n("355025"),
  y = n("842272"),
  x = n("14124"),
  b = n("959646"),
  U = n("338677"),
  G = n("20606"),
  j = n("225772"),
  k = n("775377"),
  w = n("10641"),
  F = n("384997"),
  B = n("243632"),
  H = n("180273"),
  V = n("579565"),
  Y = n("473503"),
  W = n("257426"),
  K = n("76393"),
  z = n("957833"),
  q = n("397009"),
  Q = n("337328"),
  Z = n("167209"),
  X = n("691818"),
  J = n("106457"),
  $ = n("507917"),
  ee = n("837944"),
  et = n("374089"),
  en = n("189726"),
  ea = n("666647"),
  es = n("286914"),
  ei = n("235004"),
  el = n("696770"),
  er = n("506885"),
  eo = n("845579"),
  eu = n("933422"),
  ed = n("924658"),
  ec = n("244390"),
  eE = n("271938"),
  ef = n("42203"),
  e_ = n("778588"),
  eh = n("42887"),
  eC = n("945956"),
  eT = n("101125"),
  eI = n("102985"),
  eS = n("697218"),
  eN = n("521012"),
  eA = n("145131"),
  ep = n("398288"),
  em = n("837899"),
  eg = n("425190"),
  eR = n("474571"),
  eO = n("272339"),
  eL = n("200639"),
  ev = n("925877"),
  eM = n("849467"),
  eP = n("97347"),
  eD = n("962541"),
  ey = n("762489"),
  ex = n("329858"),
  eb = n("956089"),
  eU = n("599110"),
  eG = n("315102"),
  ej = n("306160"),
  ek = n("197881"),
  ew = n("158998"),
  eF = n("50885"),
  eB = n("49111"),
  eH = n("411511"),
  eV = n("782340"),
  eY = n("374555");
let eW = eF.default.getEnableHardwareAcceleration() ? S.AnimatedAvatar : S.Avatar;
class eK extends s.PureComponent {
  get isCopiedStreakGodlike() {
    let {
      copiedStreak: e
    } = this.state;
    return e >= 10
  }
  componentDidUpdate(e) {
    let {
      speakingWhileMuted: t,
      occluded: n
    } = e, {
      speakingWhileMuted: a,
      occluded: s
    } = this.props;
    s !== n && this.handleOccludedChanged(), a !== t && this.handleSpeakingWhileMutedChanged()
  }
  componentWillUnmount() {
    this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop()
  }
  renderCopiedSuccess() {
    let {
      copiedStreak: e
    } = this.state, t = [eV.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_1, eV.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_2, eV.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_3, eV.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_4, eV.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_5, eV.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_6, eV.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_7, eV.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_8, eV.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_9, eV.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_10, eV.default.Messages.ACCOUNT_USERNAME_COPY_SUCCESS_11], n = Math.min(Math.max(0, e - 1), t.length - 1);
    return (0, a.jsx)(S.Shaker, {
      isShaking: this.isCopiedStreakGodlike,
      children: t[n]
    })
  }
  renderNameTag() {
    let e;
    let {
      hovered: t
    } = this.state, {
      customStatusActivity: n,
      userTag: s,
      currentUser: i,
      status: l
    } = this.props;
    if (null == i) return null;
    let r = ew.default.getName(i),
      o = null != l && l !== eB.StatusTypes.UNKNOWN,
      u = null != n;
    return (u || o && i.isPomelo()) && (e = (0, a.jsx)(ep.default, {
      hoverText: s,
      forceHover: t,
      children: u ? (0, a.jsx)(k.default, {
        activity: n,
        emojiClassName: eY.emoji,
        className: eY.customStatus
      }) : ew.default.humanizeStatus(l)
    })), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: eY.panelTitleContainer,
        children: (0, a.jsx)(ex.default, {
          children: r
        })
      }), (0, a.jsx)("div", {
        className: eY.panelSubtextContainer,
        children: (0, a.jsx)(ey.default, {
          children: null != e ? e : s
        })
      })]
    })
  }
  renderCopiableNameTag() {
    let {
      currentUser: e
    } = this.props, {
      shouldShowNametagTooltip: t,
      shouldShowCopiedFeedback: n
    } = this.state;
    if (null == e) return null;
    let s = null,
      i = S.TooltipColors.PRIMARY;
    return ej.SUPPORTS_COPY && (s = eV.default.Messages.ACCOUNT_CLICK_TO_COPY, n && (s = this.renderCopiedSuccess(), i = this.isCopiedStreakGodlike ? S.TooltipColors.RED : S.TooltipColors.GREEN)), (0, a.jsx)(S.Tooltip, {
      text: s,
      forceOpen: t,
      "aria-label": !!ej.SUPPORTS_COPY && eV.default.Messages.ACCOUNT_CLICK_TO_COPY,
      color: i,
      delay: 500,
      onAnimationRest: (e, a) => {
        n && !t && a.phase === eB.SpringTransitionPhases.LEAVE && this.setState({
          shouldShowCopiedFeedback: !1
        })
      },
      children: e => {
        let {
          onClick: t,
          onMouseEnter: s,
          ...i
        } = e;
        return (0, a.jsx)(S.Clickable, {
          ...i,
          onMouseEnter: () => {
            n ? (this.copiedTimeout.stop(), this.setState({
              shouldShowNametagTooltip: !1
            }, s)) : null == s || s()
          },
          onClick: () => {
            null == t || t(), this.handleCopyTag()
          },
          className: l(eY.nameTag, {
            [eY.canCopy]: ej.SUPPORTS_COPY
          }),
          children: this.renderNameTag()
        })
      }
    })
  }
  renderAvatarWithPopout() {
    let {
      speaking: e,
      streaming: t,
      currentUser: n,
      status: s,
      showTagAsButton: i,
      showTaglessAccountPanel: r
    } = this.props;
    if (null == n) return null;
    let o = (0, eG.getAvatarDecorationURL)({
      avatarDecoration: n.avatarDecoration,
      size: (0, M.getDecorationSizeForAvatarSize)(S.AvatarSizes.SIZE_32)
    });
    return (0, a.jsx)(g.default, {
      object: eB.AnalyticsObjects.AVATAR,
      children: (0, a.jsx)(S.Popout, {
        renderPopout: this.renderStatusPickerPopout,
        position: "top",
        align: "left",
        animation: S.Popout.Animation.FADE,
        spacing: 14,
        fixed: !0,
        preload: () => (0, er.default)(n.id, null == n ? void 0 : n.getAvatarURL(null, 80)),
        children: (u, d) => (0, a.jsxs)(S.Clickable, {
          ...u,
          "aria-label": eV.default.Messages.SET_STATUS,
          className: l(eY.avatarWrapper, {
            [eY.withTagAsButton]: i,
            [eY.withTagless]: r
          }),
          children: [(0, a.jsx)(eW, {
            size: S.AvatarSizes.SIZE_32,
            src: n.getAvatarURL(void 0, 32, !1),
            avatarDecoration: o,
            "aria-label": n.username,
            status: t ? eB.StatusTypes.STREAMING : s,
            isSpeaking: e,
            className: eY.avatar
          }), i || r ? (0, a.jsx)("div", {
            className: l(eY.nameTag, {
              [eY.canCopy]: ej.SUPPORTS_COPY
            }),
            children: r ? (0, a.jsx)(eD.default, {
              tooltipText: null,
              icon: d.isShown ? em.default : eg.default,
              role: "switch",
              "aria-label": eV.default.Messages.SET_STATUS
            }) : this.renderNameTag()
          }) : null]
        })
      })
    })
  }
  renderNameZone() {
    let {
      currentUser: e,
      dismissibleContents: t
    } = this.props, {
      showTagAsButton: n,
      showTaglessAccountPanel: s
    } = this.props;
    return null == e ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(F.default, {
        contentTypes: t.avatar,
        children: e => {
          let {
            visibleContent: t
          } = e;
          return this.renderAvatarWithPopout()
        }
      }), n || s ? null : this.renderCopiableNameTag()]
    })
  }
  render() {
    let {
      currentUser: e,
      selfDeaf: t,
      selfMute: n,
      awaitingRemote: s,
      serverMute: i,
      serverDeaf: r,
      suppress: u,
      dismissibleContents: d
    } = this.props, {
      shouldShowSpeakingWhileMutedTooltip: c
    } = this.state;
    if (null == e) return null;
    let E = n || u || i,
      f = t || r;
    return (0, a.jsxs)("div", {
      className: eY.container,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      children: [this.renderNameZone(), (0, a.jsxs)(eA.default, {
        grow: 0,
        children: [(0, a.jsx)(eD.default, {
          tooltipText: c ? eV.default.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, x.default)(n, i, u, s),
          tooltipColor: c ? S.TooltipColors.GREEN : void 0,
          tooltipForceOpen: c || void 0,
          onMouseEnter: this.handleMouseEnterMute,
          onMouseLeave: this.handleMouseLeaveMute,
          icon: (0, a.jsx)(eQ, {
            selfMute: n,
            serverMute: i,
            suppress: u
          }),
          iconForeground: E ? eY.strikethrough : null,
          onClick: this.handleToggleSelfMute,
          innerClassName: l({
            [eY.redIcon]: i || u
          }),
          onContextMenu: this.handleInputAudioContextMenu,
          role: "switch",
          "aria-label": eV.default.Messages.MUTE,
          "aria-checked": E,
          disabled: s
        }), (0, a.jsx)(eD.default, {
          tooltipText: (0, y.default)(t, r, s),
          icon: (0, a.jsx)(eZ, {
            selfDeaf: t,
            serverDeaf: r
          }),
          onClick: this.handleToggleSelfDeaf,
          onContextMenu: this.handleOutputAudioContextMenu,
          innerClassName: l({
            [eY.redIcon]: r
          }),
          iconForeground: f ? eY.strikethrough : null,
          role: "switch",
          "aria-label": eV.default.Messages.DEAFEN,
          "aria-checked": f,
          disabled: s
        }), (0, a.jsx)(F.default, {
          contentTypes: d.settings,
          children: e => {
            let {
              visibleContent: t,
              markAsDismissed: n
            } = e;
            switch (t) {
              case o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)($.default, {}),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(Y.default, {
                    markAsDismissed: n,
                    partnerGame: eH.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(W.default, {
                    markAsDismissed: n,
                    partnerGame: eH.PartnerGame.FORTNITE
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(eu.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(en.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(ea.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(el.default, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              case o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                return (0, a.jsx)(S.Popout, {
                  position: "top",
                  align: "center",
                  shouldShow: !0,
                  renderPopout: () => (0, a.jsx)(es.UserSafetyEducationReportingCoachmark, {
                    markAsDismissed: n
                  }),
                  children: this.renderSettingsGear
                });
              default:
                return this.renderSettingsGear()
            }
          }
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.copiedTimeout = new u.Timeout, this.copiedDecayTimeout = new u.Timeout, this.speakingWhileMutedTooltipTimeout = new u.Timeout, this.state = {
      hovered: !1,
      copiedStreak: 0,
      shouldShowNametagTooltip: !1,
      shouldShowCopiedFeedback: !1,
      shouldShowSpeakingWhileMutedTooltip: !1,
      hoveringOnMute: !1
    }, this.handleToggleSelfMute = () => {
      let {
        serverMute: e,
        suppress: t
      } = this.props;
      (0, U.default)(e, t)
    }, this.handleToggleSelfDeaf = () => {
      let {
        serverDeaf: e
      } = this.props;
      (0, b.default)(e)
    }, this.handleOpenAccountSettings = () => {
      this.handleOpenSettings()
    }, this.handleOpenSettings = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.UserSettingsSections.ACCOUNT,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
      p.default.open(e, t, n)
    }, this.handleOpenSettingsContextMenu = e => {
      let {
        currentUser: t
      } = this.props;
      null != t && (0, A.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("727212").then(n.bind(n, "727212"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t,
          premiumSubscription: this.props.premiumSubscription,
          webBuildOverride: this.props.webBuildOverride
        })
      })
    }, this.handleInputAudioContextMenu = e => {
      (0, A.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("266392").then(n.bind(n, "266392"));
        return () => (0, a.jsx)(e, {
          onClose: A.closeContextMenu,
          renderInputDevices: !0,
          renderInputModes: !0,
          renderInputVolume: !0
        })
      })
    }, this.handleOutputAudioContextMenu = e => {
      (0, A.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("266392").then(n.bind(n, "266392"));
        return () => (0, a.jsx)(e, {
          onClose: A.closeContextMenu,
          renderOutputDevices: !0,
          renderOutputVolume: !0
        })
      })
    }, this.handleMouseEnter = () => {
      this.setState({
        hovered: !0
      })
    }, this.handleMouseLeave = () => {
      this.setState({
        hovered: !1
      })
    }, this.handleMouseEnterMute = () => {
      this.setState({
        hoveringOnMute: !0,
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop()
    }, this.handleMouseLeaveMute = () => {
      this.setState({
        hoveringOnMute: !1
      })
    }, this.handleCopyTag = () => {
      let {
        currentUser: e
      } = this.props, {
        shouldShowNametagTooltip: t,
        copiedStreak: n
      } = this.state;
      if (null == e) return;
      (0, ej.copy)(ew.default.getUserTag(e, {
        decoration: "never",
        identifiable: "always"
      })), eU.default.track(eB.AnalyticEvents.TEXT_COPIED, {
        type: "User Tag"
      });
      let a = {
        shouldShowCopiedFeedback: !0,
        shouldShowNametagTooltip: !0
      };
      !t && (a.copiedStreak = n + 1), this.setState(a, () => {
        this.copiedTimeout.start(1e3, () => this.setState({
          shouldShowNametagTooltip: !1
        })), this.copiedDecayTimeout.start(2e3, () => this.setState({
          copiedStreak: 0
        }))
      })
    }, this.handleOccludedChanged = () => {
      let {
        occluded: e
      } = this.props;
      e && this.setState({
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1
      })
    }, this.handleSpeakingWhileMutedChanged = () => {
      let {
        selfMute: e,
        serverMute: t,
        suppress: n,
        speakingWhileMuted: a,
        occluded: s
      } = this.props, {
        hoveringOnMute: i
      } = this.state;
      a ? !i && e && !t && !n && !s && this.setState({
        shouldShowSpeakingWhileMutedTooltip: !0
      }, () => {
        this.speakingWhileMutedTooltipTimeout.start(2e3, () => this.setState({
          shouldShowSpeakingWhileMutedTooltip: !1
        }))
      }) : (this.setState({
        shouldShowSpeakingWhileMutedTooltip: !1
      }), this.speakingWhileMutedTooltipTimeout.stop())
    }, this.renderStatusPickerPopout = e => {
      let {
        closePopout: t
      } = e, {
        showRichProfilePopup: n,
        currentUser: s
      } = this.props;
      if (n) {
        let e = {
          userId: null == s ? void 0 : s.id,
          user: s,
          onClose: () => {
            this.handleMouseLeave(), null == t || t()
          }
        };
        return (0, a.jsx)("div", {
          className: eY.accountProfilePopoutWrapper,
          children: (0, a.jsx)(Q.default, {
            ...e
          })
        })
      }
      return (0, a.jsx)(m.default, {
        onClose: () => {
          this.handleMouseLeave(), null == t || t()
        }
      })
    }, this.renderSettingsGear = () => (0, a.jsx)(eq, {
      isEligibleForPomelo: this.props.isEligibleForPomelo,
      webBuildOverride: this.props.webBuildOverride,
      onClick: this.handleOpenAccountSettings,
      onContextMenu: this.handleOpenSettingsContextMenu
    })
  }
}

function ez() {
  let e = (0, r.useStateFromStores)([eS.default], () => eS.default.getCurrentUser()),
    t = (0, B.useShowEligibilityEnrollmentTooltip)(eH.PartnerGame.FORTNITE),
    n = (0, r.useStateFromStores)([eE.default], () => eE.default.getId()),
    i = eo.CustomStatusSetting.useSetting(),
    l = s.useMemo(() => null != i ? (0, j.default)(i) : null, [i]),
    {
      streaming: u,
      status: d
    } = (0, r.useStateFromStoresObject)([eT.default], () => ({
      streaming: null != eT.default.findActivity(e => e.type === eB.ActivityTypes.STREAMING),
      status: eT.default.getStatus()
    })),
    c = (0, v.default)({
      userId: n
    }),
    E = ew.default.useUserTag(e, {
      decoration: "never"
    }),
    f = (0, r.useStateFromStores)([eI.default], () => eI.default.hidePersonalInformation),
    _ = (0, r.useStateFromStores)([eC.default, ef.default], () => {
      let e = eC.default.getChannelId();
      return null != e ? ef.default.getChannel(e) : null
    }),
    {
      mute: h,
      selfMute: C,
      suppress: T
    } = (0, ec.default)(_),
    {
      selfDeaf: I,
      deaf: A
    } = (0, ed.default)(_),
    p = (0, r.useStateFromStores)([P.default], () => {
      var e;
      return (0, D.probablyHasBuildOverride)() ? null === (e = P.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
    }),
    m = (0, r.useStateFromStores)([eN.default], () => eN.default.getPremiumTypeSubscription()),
    g = (0, r.useStateFromStores)([eh.default], () => eh.default.getEverSpeakingWhileMuted()),
    M = (0, r.useStateFromStores)([e_.default], () => e_.default.hasLayers()),
    y = (0, S.useModalsStore)(S.hasAnyModalOpenSelector),
    x = y || M || ek.ProcessArgs.isDisallowPopupsSet(),
    b = (0, Z.useIsEligibleForPomelo)();
  s.useEffect(() => {
    q.default.trackExposure({
      location: "08bd40_3"
    })
  });
  let U = (0, r.useStateFromStores)([K.default], () => null != K.default.getAwaitingRemoteSessionInfo()),
    {
      isPopupEnabled: G,
      isJoinedTagButtonEnabled: k,
      isTaglessAccountPanelEnabled: F
    } = q.default.useExperiment({
      location: "08bd40_4"
    }, {
      autoTrackExposure: !1
    }),
    Y = (0, r.useStateFromStores)([H.default], () => H.default.isCurrentQuestCompleted),
    W = (0, r.useStateFromStores)([H.default], () => H.default.currentDropQuestGameTitle),
    Q = (0, z.useIsHomeSelected)(),
    $ = (0, O.useIsDmSpamFilterCoachmarkEnabled)(),
    en = (0, ee.useCanSeeSafetyEducationBlockMuteCoachmark)(),
    ea = (0, R.useIsSafetyConsumerEducationBlockMuteBucket)(),
    es = (0, et.useCanSeeSafetyEducationReportingCoachmark)(),
    el = "account";
  (0, L.useTriggerDebuggingAA)({
    location: el + " auto on",
    autoTrackExposure: !0
  }), (0, L.useTriggerDebuggingAA)({
    location: el + " auto off",
    autoTrackExposure: !1
  }), (0, ee.useSafetyEducationAATriggerPoint)();
  let er = (0, r.useStateFromStores)([ei.default], () => ei.default.hasHadOtherUserPlaySoundInSession()),
    eu = function() {
      let e = (0, w.useIsDismissibleContentDismissed)(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
        [t, n] = (0, r.useStateFromStoresArray)([X.default], () => [X.default.hasFetchedRelevance, X.default.profileThemesRelevanceExceeded]),
        [a, i] = (0, r.useStateFromStoresArray)([eN.default], () => [eN.default.hasFetchedMostRecentPremiumTypeSubscription(), eN.default.getMostRecentPremiumTypeSubscription()]),
        {
          enabled: l
        } = J.default.useExperiment({
          location: "08bd40_1"
        }, {
          autoTrackExposure: !0
        }),
        u = s.useMemo(() => {
          let e = new Date().getTime();
          return null != i && (i.status === eB.SubscriptionStatusTypes.ACTIVE || e - i.currentPeriodEnd.getTime() < 2592e6)
        }, [i]);
      return s.useEffect(() => {
        let s = async () => {
          if (!e && null == n && !!l) {
            if (!a) {
              await (0, N.fetchMostRecentSubscription)();
              return
            }!u && !t && await (0, N.getPerksRelevance)()
          }
        };
        s()
      }, [l, n, e, a, t, u]), !e && !!l && !u && null != n && n
    }(),
    eA = {
      avatar: [],
      settings: []
    };
  if (!x) {
    if (eu && eA.settings.push(o.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), t) {
      var ep;
      eA.settings.push(o.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP), Y && W === (null === (ep = (0, V.getDrop)(eH.PartnerGame.FORTNITE)) || void 0 === ep ? void 0 : ep.title) && eA.settings.push(o.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP)
    }
    Q && $ && eA.settings.push(o.DismissibleContent.USER_SAFETY_SAFE_DIRECT_MESSAGING), en && (1 === ea ? eA.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eA.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), er && eA.settings.push(o.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION), es && eA.settings.push(o.DismissibleContent.USER_SAFETY_CONSUMER_EDUCATION_REPORTING)
  }
  return (0, a.jsx)(eK, {
    currentUser: e,
    customStatusActivity: l,
    dismissibleContents: eA,
    userTag: E,
    hidePrivateData: f,
    occluded: x,
    premiumSubscription: m,
    selfDeaf: I,
    selfMute: C,
    serverDeaf: A,
    serverMute: h,
    showRichProfilePopup: G,
    showTagAsButton: k,
    showTaglessAccountPanel: F,
    speaking: c,
    speakingWhileMuted: g,
    status: d,
    streaming: u,
    suppress: T,
    webBuildOverride: p,
    awaitingRemote: U,
    isEligibleForPomelo: b
  })
}

function eq(e) {
  let {
    webBuildOverride: t,
    isEligibleForPomelo: n,
    onClick: s,
    onContextMenu: i
  } = e, l = (0, S.useRedesignIconContext)().enabled, r = null, o = eR.default;
  return l ? o = null != t ? I.SettingsInfoIcon : n ? C.SettingsCircleIcon : T.SettingsIcon : null != t ? r = (0, a.jsx)(ev.default, {
    width: 9,
    height: 9,
    className: eY.hasBuildOverride,
    "aria-hidden": !0
  }) : n && (r = (0, a.jsx)(eb.CircleBadge, {
    color: G.default.STATUS_DANGER,
    className: eY.hasBuildOverride,
    "aria-hidden": !0
  })), (0, a.jsx)(eD.default, {
    tooltipText: null != t ? eV.default.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({
      webBuildOverride: t.id
    }) : eV.default.Messages.USER_SETTINGS,
    onClick: s,
    onContextMenu: i,
    innerClassName: null != t || n ? eY.buildOverrideButton : null,
    icon: o,
    children: r
  })
}

function eQ(e) {
  let {
    selfMute: t,
    suppress: n,
    serverMute: s
  } = e, i = (0, S.useRedesignIconContext)().enabled;
  if (i) {
    let e, i;
    return s ? (e = f.MicrophoneDenyIcon, i = S.tokens.colors.STATUS_DANGER) : n ? (e = f.MicrophoneDenyIcon, i = S.tokens.colors.STATUS_DANGER) : t ? (e = h.MicrophoneSlashIcon, i = S.tokens.colors.STATUS_DANGER) : e = _.MicrophoneIcon, (0, a.jsx)(e, {
      width: 20,
      height: 20,
      color: null != i ? i : "currentColor"
    })
  } {
    let e = t || n || s,
      i = e ? eP.default : eM.default;
    return (0, a.jsx)(i, {
      width: 20,
      height: 20,
      foreground: e ? eY.strikethrough : void 0
    })
  }
}

function eZ(e) {
  let {
    selfDeaf: t,
    serverDeaf: n
  } = e, s = (0, S.useRedesignIconContext)().enabled;
  if (s) {
    let e, s;
    return n ? (e = d.HeadphonesDenyIcon, s = S.tokens.colors.STATUS_DANGER) : t ? (e = E.HeadphonesSlashIcon, s = S.tokens.colors.STATUS_DANGER) : e = c.HeadphonesIcon, (0, a.jsx)(e, {
      width: 20,
      height: 20,
      color: null != s ? s : "currentColor"
    })
  } {
    let e = t ? eL.default : eO.default;
    return (0, a.jsx)(e, {
      width: 20,
      height: 20,
      foreground: t ? eY.strikethrough : void 0
    })
  }
}