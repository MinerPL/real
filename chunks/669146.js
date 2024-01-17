"use strict";
s.r(e), s.d(e, {
  default: function() {
    return J
  }
}), s("222007"), s("70102");
var i = s("37983"),
  l = s("884691"),
  a = s("414456"),
  n = s.n(a),
  r = s("265586"),
  o = s("446674"),
  u = s("819855"),
  d = s("77078"),
  c = s("569272"),
  f = s("841098"),
  p = s("206230"),
  h = s("812204"),
  m = s("685665"),
  C = s("651057"),
  S = s("299285"),
  g = s("491232"),
  I = s("426188"),
  T = s("355033"),
  E = s("264579"),
  _ = s("526887"),
  O = s("393414"),
  v = s("235004"),
  M = s("55411"),
  x = s("686470"),
  N = s("697218"),
  A = s("10514"),
  R = s("552712"),
  y = s("953109"),
  F = s("476765"),
  b = s("599110"),
  G = s("402671"),
  j = s("659632"),
  L = s("380186"),
  P = s("158998"),
  D = s("895737"),
  k = s("210721"),
  U = s("845149"),
  H = s("65324"),
  w = s("646718"),
  B = s("49111"),
  z = s("782340"),
  V = s("139194"),
  Y = s("653240"),
  Z = s("140802");
let X = t => {
    let {
      openedGift: e
    } = t, {
      createMultipleConfettiAt: s
    } = l.useContext(_.ConfettiCannonContext);
    return l.useEffect(() => {
      e && s(window.innerWidth / 2, window.innerHeight / 4)
    }, [s, e]), null
  },
  W = t => {
    let {
      step: e,
      soundId: s
    } = t;
    return l.useEffect(() => {
      var t;
      if (e !== B.GiftCodeModalStates.CONFIRM) return;
      let i = v.default.getSoundById(s);
      (0, D.playGiftSound)(s, null !== (t = null == i ? void 0 : i.volume) && void 0 !== t ? t : 1)
    }, [e, s]), null
  };
class K extends l.Component {
  componentDidMount() {
    let {
      application: t,
      sku: e,
      customGiftMessage: s,
      giftCode: i,
      emojiName: l
    } = this.props;
    null == t && null != e && C.default.fetchApplication(e.applicationId);
    let a = null != s || null != i.giftStyle,
      n = (0, g.isCollectiblesGiftCode)(i),
      r = null != l ? G.default.getURL(l) : void 0;
    this.setState({
      isCustomGift: a,
      isCollectiblesGift: n,
      emojiURL: r,
      opened: n
    }), this.trackStepAnalytics()
  }
  get step() {
    let {
      libraryApplication: t,
      accepting: e,
      giftCode: s
    } = this.props, {
      error: i,
      accepted: l,
      opened: a,
      isCustomGift: n
    } = this.state;
    return (0, j.getStep)(t, s, i, l, e, a, n)
  }
  get buttonText() {
    return (0, j.getButtonText)(this.step, this.props.giftCode, this.state.isCustomGift)
  }
  get firstHeaderText() {
    let {
      isCustomGift: t,
      opened: e,
      accepted: s
    } = this.state, {
      giftCode: i,
      subscriptionPlan: l,
      collectiblesItemType: a
    } = this.props;
    if (t && this.step === B.GiftCodeModalStates.ERROR) return z.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
    if (t && !s) {
      if (!e) return z.default.Messages.GIFT_RECIPIENT_INFO.format({
        recipientDisplayName: P.default.getName(N.default.getCurrentUser())
      });
      {
        let t = N.default.getUser(i.userId),
          e = P.default.getName(t);
        return a === r.CollectiblesItemType.AVATAR_DECORATION ? z.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_DECORATION.format({
          sender: e
        }) : a === r.CollectiblesItemType.PROFILE_EFFECT ? z.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_EFFECT.format({
          sender: e
        }) : z.default.Messages.GIFT_SUBSCRIPTION_INFO.format({
          sender: e,
          timeInterval: (null == l ? void 0 : l.interval) === w.SubscriptionIntervalTypes.MONTH ? z.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : z.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
        })
      }
    }
    return null == this.props.sku ? null : (0, j.getHeaderText)(this.step, this.props.giftCode, this.props.sku)
  }
  get secondHeaderText() {
    if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
    let t = N.default.getUser(this.props.giftCode.userId);
    return z.default.Messages.GIFT_SENDER_INFO.format({
      sender: P.default.getName(t)
    })
  }
  get bodyText() {
    let {
      sku: t,
      accepting: e,
      libraryApplication: s,
      subscriptionPlan: i
    } = this.props;
    if (null == t) return null;
    let {
      error: l,
      accepted: a,
      isCustomGift: n,
      opened: r
    } = this.state;
    return !r && n ? null : (0, j.getBodyText)({
      step: this.step,
      sku: t,
      libraryApplication: s,
      error: l,
      accepted: a,
      accepting: e,
      onGoToLibrary: this.handleGoToLibrary,
      subscriptionPlan: i
    })
  }
  get errorMessage() {
    let {
      libraryApplication: t,
      accepting: e
    } = this.props, {
      error: s,
      accepted: i
    } = this.state;
    return (0, j.getErrorMessage)(t, s, i, e, this.handleGoToLibrary)
  }
  get handleClick() {
    let {
      giftCode: t,
      onClose: e
    } = this.props;
    switch (this.step) {
      case B.GiftCodeModalStates.ERROR:
        return e;
      case B.GiftCodeModalStates.SUCCESS:
        if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
        return this.handleGoToLibrary;
      case B.GiftCodeModalStates.OPEN:
        return this.handleOpen;
      case B.GiftCodeModalStates.CONFIRM:
      default:
        return this.handleAccept
    }
  }
  trackStepAnalytics() {
    let {
      giftCode: t,
      customGiftMessage: e,
      emojiName: s,
      soundId: i
    } = this.props, {
      isCustomGift: l
    } = this.state;
    b.default.track(B.AnalyticEvents.GIFT_ACCEPT_STEP, {
      to_step: this.step,
      has_custom_message: l,
      is_custom_message_edited: l && e !== z.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
      gift_style: t.giftStyle,
      gift_code: t.code,
      emoji_name: s,
      sound_id: i
    })
  }
  render() {
    let {
      application: t,
      accepting: e,
      onClose: s,
      giftCode: l,
      headerId: a,
      transitionState: r,
      useReducedMotion: o,
      onComplete: u,
      customGiftMessage: c,
      emojiName: f,
      soundId: p,
      isThemeDark: h
    } = this.props, m = N.default.getUser(l.userId), {
      isCustomGift: C,
      isCollectiblesGift: S,
      accepted: g,
      opened: I,
      emojiURL: E
    } = this.state, _ = N.default.getCurrentUser(), O = this.step === B.GiftCodeModalStates.ERROR, v = (null == l ? void 0 : l.userId) != null && null != _ && (null == _ ? void 0 : _.id) != null && l.userId === _.id;
    switch (this.step) {
      case B.GiftCodeModalStates.ERROR:
        null == u || u(l, !1);
        break;
      case B.GiftCodeModalStates.SUCCESS:
        null == u || u(l, !0)
    }
    return (0, i.jsxs)("div", {
      ref: this.modalRef,
      children: [(0, i.jsxs)(d.ModalRoot, {
        transitionState: r,
        size: d.ModalSize.SMALL,
        className: V.modal,
        "aria-labelledby": a,
        children: [null != l.giftStyle && !C && !S && (0, i.jsx)(H.default, {
          defaultAnimationState: this.getDefaultAnimationStatus(),
          idleAnimationState: this.getIdleAnimationStatus(),
          giftStyle: l.giftStyle,
          className: V.seasonalGiftIcon
        }), (0, i.jsx)("div", {
          className: C ? void 0 : V.backSplash
        }), (0, i.jsxs)(d.ModalContent, {
          className: n({
            [V.content]: !C,
            [V.contentCustomGift]: C
          }),
          children: [!S && (0, i.jsx)(d.ModalCloseButton, {
            onClick: s,
            className: V.closeButton
          }), !S && (null == l.giftStyle || C && g) && (0, i.jsx)(y.default, {
            size: y.default.Sizes.LARGE,
            game: t,
            skuId: l.skuId
          }), O && (0, i.jsx)("img", {
            alt: "",
            src: h ? Y : Z
          }), (0, i.jsxs)(d.Heading, {
            id: a,
            className: n({
              [V.customGiftHeader]: C && !g,
              [V.header]: !C || g
            }),
            variant: "heading-sm/semibold",
            children: [(0, i.jsx)("div", {
              className: n({
                [V.customGiftHeaderText]: C
              }),
              children: this.firstHeaderText
            }), (0, i.jsx)("div", {
              children: this.secondHeaderText
            })]
          }), !(C && !g) && (0, i.jsx)(d.Text, {
            className: V.body,
            variant: "text-sm/normal",
            children: this.bodyText
          }), C && !S && null != l.giftStyle && !g && (0, i.jsx)(H.default, {
            defaultAnimationState: this.getDefaultAnimationStatus(),
            idleAnimationState: this.getIdleAnimationStatus(),
            className: V.giftAnimation,
            giftStyle: l.giftStyle
          }), this.state.opened && !O && (0, i.jsx)(T.default, {
            giftCode: l
          }), O && (0, i.jsx)(d.Text, {
            className: V.body,
            variant: "text-md/normal",
            children: this.errorMessage
          }), C && this.state.opened && !this.state.accepted && !O && null != c && "" !== c && !v && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.FormTitle, {
              children: z.default.Messages.GIFT_SENDER_INFO.format({
                sender: P.default.getName(m)
              })
            }), (0, i.jsx)(d.Heading, {
              id: a,
              className: V.customMessage,
              variant: "heading-sm/bold",
              children: c
            })]
          }), (0, i.jsx)(d.Button, {
            submitting: e,
            onClick: () => {
              this.trackStepAnalytics(), this.handleClick()
            },
            children: this.buttonText
          })]
        })]
      }), null != l.giftStyle && !o && this.step !== B.GiftCodeModalStates.ERROR && (0, i.jsx)(i.Fragment, {
        children: !g && !e && I && (null == f || null == E ? (0, i.jsx)(X, {
          openedGift: I && !g && !e
        }) : (0, i.jsx)(U.default, {
          confettiTarget: this.modalRef.current,
          emojiURL: E
        }))
      }), !g && !e && I && null != p && (0, i.jsx)(W, {
        soundId: p,
        step: this.step
      })]
    })
  }
  constructor(...t) {
    super(...t), this.state = {
      error: null,
      accepted: !1,
      opened: !1,
      isCustomGift: !1,
      isCollectiblesGift: !1,
      step: void 0,
      emojiURL: void 0
    }, this.modalRef = l.createRef(), this.handleOpen = () => {
      this.setState({
        opened: !0
      })
    }, this.handleAccept = async () => {
      let {
        giftCode: t,
        channelContext: e,
        onAccept: s
      } = this.props;
      if (null == t) throw Error("GiftCode is null at acceptance.");
      try {
        await c.default.redeemGiftCode({
          code: t.code,
          options: {
            channelId: e
          }
        }), this.setState({
          accepted: !0
        }), null == s || s()
      } catch (t) {
        this.setState({
          error: t
        })
      }
    }, this.handleGoToLibrary = () => {
      let {
        onClose: t,
        libraryApplication: e
      } = this.props;
      (0, O.transitionTo)(B.Routes.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != e ? e.id : null
        }
      }), t()
    }, this.getDefaultAnimationStatus = () => {
      if (this.step === B.GiftCodeModalStates.OPEN) return k.AnimationState.IDLE;
      return k.AnimationState.ACTION
    }, this.getIdleAnimationStatus = () => {
      if (this.step !== B.GiftCodeModalStates.OPEN) return k.AnimationState.LOOP
    }
  }
}
let q = o.default.connectStores([x.default, R.default, S.default, M.default, A.default, p.default], t => {
  let {
    giftCode: e
  } = t, s = R.default.get(e.skuId), i = null != s ? S.default.getApplication(s.applicationId) : null, l = p.default.useReducedMotion;
  return {
    sku: s,
    libraryApplication: null != s && (null == e ? void 0 : e.entitlementBranches) != null ? (0, j.firstLibraryApplicationForGiftCode)(e.entitlementBranches, s, x.default) : null,
    application: i,
    subscriptionPlan: null != e.subscriptionPlanId ? (0, L.getOrFetchSubscriptionPlan)(e.subscriptionPlanId) : null,
    accepting: M.default.getIsAccepting(e.code),
    useReducedMotion: l
  }
})(K);
var J = t => {
  var e;
  let {
    channelContext: s,
    code: l,
    customGiftMessage: a,
    emojiName: n,
    soundId: r,
    onClose: d,
    ...c
  } = t, p = (0, F.useUID)(), C = (0, o.useStateFromStores)([M.default], () => M.default.get(l)), S = (0, f.default)(), {
    analyticsLocations: g
  } = (0, m.default)(h.default.GIFT_CODE_MODAL), {
    product: T
  } = (0, I.useFetchCollectiblesProduct)(null == C ? void 0 : C.skuId);
  return null == C ? null : (0, i.jsx)(q, {
    ...c,
    customGiftMessage: a,
    channelContext: s,
    giftCode: C,
    headerId: p,
    emojiName: n,
    soundId: r,
    analyticsLocations: g,
    isThemeDark: (0, u.isThemeDark)(S),
    onClose: d,
    collectiblesItemType: null == T ? void 0 : null === (e = T.items[0]) || void 0 === e ? void 0 : e.type,
    onAccept: null != T ? () => {
      d(), (0, E.default)({
        product: T,
        analyticsLocations: g
      })
    } : void 0
  })
}