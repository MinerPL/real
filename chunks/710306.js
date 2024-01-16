"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("866227"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("79112"),
  f = n("4919"),
  m = n("86621"),
  E = n("737960"),
  _ = n("206230"),
  h = n("491232"),
  p = n("210721"),
  I = n("583711"),
  T = n("65324"),
  g = n("393414"),
  C = n("271938"),
  S = n("55411"),
  A = n("686470"),
  N = n("697218"),
  M = n("10514"),
  v = n("552712"),
  x = n("145131"),
  O = n("880013"),
  L = n("943519"),
  R = n("181108"),
  P = n("599110"),
  y = n("659632"),
  D = n("719923"),
  j = n("380186"),
  U = n("158998"),
  b = n("501076"),
  G = n("49111"),
  B = n("646718"),
  k = n("782340"),
  w = n("192800");

function H(e) {
  let {
    onClick: t,
    libraryApplication: n
  } = e;
  return (0, a.jsxs)(d.Clickable, {
    className: w.libraryLink,
    onClick: t,
    children: [(0, a.jsx)(O.default, {
      className: w.libraryIcon
    }), (0, a.jsx)("div", {
      children: n.isHidden() ? k.default.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY_HIDDEN : k.default.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY
    })]
  })
}
class F extends s.PureComponent {
  get isHorizontal() {
    let {
      width: e
    } = this.props;
    return e >= f.HORIZONTAL_EMBED_BREAKPOINT
  }
  handleViewInventory() {
    c.default.open(G.UserSettingsSections.INVENTORY)
  }
  render() {
    return (0, a.jsx)(f.ResponsiveEmbedTile, {
      isHorizontal: this.isHorizontal,
      renderTitle: this.renderTitle,
      renderTagline: this.renderTagline,
      renderMedia: this.renderMedia,
      renderActions: this.renderActions
    })
  }
  constructor(...e) {
    super(...e), this.renderMedia = () => (0, a.jsx)("div", {
      className: i(w.invalidPoop, {
        [w.invalidPoopHorizontal]: this.isHorizontal
      })
    }), this.renderTitle = () => this.props.isSelfGift ? k.default.Messages.GIFT_EMBED_INVALID_TITLE_SELF : k.default.Messages.GIFT_EMBED_INVALID_TITLE_OTHER, this.renderActions = () => this.props.isSelfGift ? (0, a.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      onClick: this.handleViewInventory,
      children: k.default.Messages.GIFT_INVENTORY
    }) : (0, a.jsx)(d.Button, {
      disabled: !0,
      size: d.Button.Sizes.SMALL,
      children: k.default.Messages.GIFT_EMBED_BUTTON_ACCEPT
    }), this.renderTagline = () => this.props.isSelfGift ? k.default.Messages.GIFT_EMBED_INVALID_TAGLINE_SELF : k.default.Messages.GIFT_EMBED_INVALID_TAGLINE_OTHER
  }
}
class V extends s.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return {
      ...e,
      section: G.AnalyticsSections.GIFT_CODE_EMBED
    }
  }
  renderActions(e) {
    let {
      libraryApplication: t
    } = this.props;
    return (0, a.jsxs)(x.default, {
      justify: x.default.Justify.BETWEEN,
      children: [(0, a.jsxs)(x.default, {
        children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, a.jsx)(H, {
          onClick: this.handleViewLibrary,
          libraryApplication: t
        })]
      }), (0, a.jsxs)(x.default, {
        align: x.default.Align.END,
        justify: x.default.Justify.END,
        className: w.metadata,
        direction: x.default.Direction.VERTICAL,
        children: [e.hasMultipleCopies ? (0, a.jsx)("div", {
          children: this.renderGiftCodeCopiesLeft(e)
        }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, a.jsx)("div", {
          children: k.default.Messages.GIFT_EMBED_EXPIRATION.format({
            hours: e.expiresAt.diff(o(), "h")
          })
        })]
      })]
    })
  }
  renderGiftCodeCopiesLeft(e) {
    let t = e.isSubscription ? k.default.Messages.GIFT_EMBED_SUBSCRIPTIONS_LEFT : k.default.Messages.GIFT_EMBED_COPIES_LEFT;
    return t.format({
      remaining: e.remainingUses,
      total: e.maxUses
    })
  }
  renderButton(e) {
    let {
      libraryApplication: t,
      currentUser: n,
      isSelfGift: s
    } = this.props, l = {
      onClick: this.handleAccept,
      color: d.Button.Colors.BRAND
    }, i = !e.isSubscription && null != t || !e.isSelfRedeemable && s || e.isExistingPremiumSubscriptionDisallowed && (0, D.isPremium)(n);
    return (e.redeemed || i || e.isClaimed || !n.verified) && (l.color = d.Button.Colors.BRAND, l.disabled = !0), (0, a.jsx)(d.Button, {
      ...l,
      className: (0, h.isCollectiblesGiftCode)(e) ? w.collectiblesAcceptButton : null,
      size: d.Button.Sizes.SMALL,
      children: e.redeemed ? k.default.Messages.GIFT_EMBED_BUTTON_CLAIMED : null != e.giftStyle ? k.default.Messages.SEASONAL_GIFTING_OPEN_GIFT : k.default.Messages.GIFT_EMBED_BUTTON_ACCEPT
    })
  }
  isCustomGiftMessage() {
    let {
      type: e
    } = this.props;
    return e === G.MessageTypes.CUSTOM_GIFT
  }
  renderTitle(e) {
    let {
      currentUser: t,
      isSelfGift: n,
      sku: a
    } = this.props;
    return this.isCustomGiftMessage() && !n ? k.default.Messages.GIFT_RECIPIENT_NOTIFICATION.format({
      recipientDisplayName: U.default.getName(t)
    }) : null == a ? null : e.isSubscription ? n ? k.default.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION_SELF : k.default.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION : n ? k.default.Messages.GIFT_EMBED_TITLE_SELF : k.default.Messages.GIFT_EMBED_TITLE
  }
  renderBody(e) {
    let {
      libraryApplication: t,
      isSelfGift: n,
      sku: a,
      gifter: s,
      subscriptionPlan: l,
      currentUser: i
    } = this.props;
    if (null == a) return k.default.Messages.LOADING;
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let r = a.isPreorder() ? k.default.Messages.PREORDER_SKU_NAME.format({
      name: a.name
    }) : a.name;
    if (e.redeemed) return e.isSubscription || (0, h.isCollectiblesGiftCode)(e) ? k.default.Messages.GIFT_EMBED_BODY_CLAIMED_SELF_SUBSCRIPTION : k.default.Messages.GIFT_EMBED_BODY_CLAIMED_SELF.format({
      skuName: r,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return k.default.Messages.GIFT_EMBED_BODY_OWNED.format({
      skuName: r,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return k.default.Messages.GIFT_EMBED_BODY_CLAIMED_OTHER;
    if (!i.verified) return k.default.Messages.GIFT_EMBED_BODY_REQUIRES_VERIFICATION.format({
      onClick: this.handleVerificationClick
    });
    if (n) return e.isSelfRedeemable ? k.default.Messages.GIFT_EMBED_BODY_SELF : k.default.Messages.GIFT_EMBED_BODY_SELF_NOT_REDEEMABLE.format({
      skuName: r
    });
    if (e.isExistingPremiumSubscriptionDisallowed) return k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_ALREADY_ACTIVE;
    if (e.hasMultipleCopies) return null != s ? e.isSubscription ? k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_GIVEAWAY.format({
      username: U.default.getUserTag(s),
      maxUses: e.maxUses,
      skuName: r
    }) : k.default.Messages.GIFT_EMBED_BODY_GIVEAWAY.format({
      username: U.default.getUserTag(s),
      totalCopies: e.maxUses,
      skuName: r
    }) : e.isSubscription ? k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_GIVEAWAY.format({
      maxUses: e.maxUses,
      skuName: r
    }) : k.default.Messages.GIFT_EMBED_BODY_NO_USER_GIVEAWAY.format({
      totalCopies: e.maxUses,
      skuName: r
    });
    if (e.isSubscription) {
      if (null == l) return k.default.Messages.LOADING;
      if (null != s) {
        let e = l.interval === B.SubscriptionIntervalTypes.MONTH ? k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_MONTHS : k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_YEARS;
        return e.format({
          username: U.default.getUserTag(s),
          skuName: r,
          intervalCount: l.intervalCount
        })
      }
      let e = l.interval === B.SubscriptionIntervalTypes.MONTH ? k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_MONTHS : k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_YEARS;
      return e.format({
        skuName: r,
        intervalCount: l.intervalCount
      })
    }
    return null != s ? k.default.Messages.GIFT_EMBED_BODY_DEFAULT.format({
      username: U.default.getUserTag(s)
    }) : k.default.Messages.GIFT_EMBED_BODY_NO_USER_DEFAULT
  }
  renderPromotionActions() {
    return (0, a.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      onClick: this.handleClaimPromotion,
      children: k.default.Messages.GIFT_EMBED_BUTTON_CLAIM
    })
  }
  renderEmbed() {
    let {
      giftCode: e,
      width: t
    } = this.props;
    return null == e ? null : (0, a.jsx)(b.StoreEmbedWithoutDimensions, {
      skuId: e.skuId,
      onEmbedClick: this.handleEmbedClick,
      analyticsSection: G.AnalyticsSections.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderActions(e),
      renderCustomTitle: () => this.renderTitle(e),
      renderCustomTagline: () => this.renderBody(e),
      renderCustomMedia: null == e.giftStyle ? void 0 : () => this.renderCustomGiftBox(e),
      width: t
    })
  }
  render() {
    let {
      giftCode: e,
      resolved: t,
      width: n,
      isSelfGift: s
    } = this.props;
    if (null != e && null != e.promotion) return (0, a.jsx)(b.StoreEmbedWithoutDimensions, {
      skuId: e.skuId,
      onEmbedClick: this.handleClaimPromotion,
      analyticsSection: G.AnalyticsSections.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderPromotionActions(),
      renderCustomTitle: () => k.default.Messages.GIFT_EMBED_TITLE_PROMOTION,
      renderCustomTagline: () => k.default.Messages.GIFT_EMBED_TAGLINE_PROMOTION,
      width: n
    });
    if (null == e || e.revoked) return t ? (0, a.jsx)(F, {
      isSelfGift: s,
      width: n
    }) : (0, a.jsx)(f.ResponsiveLoadingEmbedTile, {
      isHorizontal: n >= f.HORIZONTAL_EMBED_BREAKPOINT
    });
    return (0, h.isCollectiblesGiftCode)(e) ? (0, a.jsx)("div", {
      className: w.collectiblesEmbedWrapper,
      children: this.renderEmbed()
    }) : this.renderEmbed()
  }
  constructor(...e) {
    super(...e), this.handleViewLibrary = e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, g.transitionTo)(G.Routes.APPLICATION_LIBRARY_SETTINGS) : (0, g.transitionTo)(G.Routes.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : null
        }
      })
    }, this.handleVerificationClick = e => {
      e.stopPropagation(), e.preventDefault(), c.default.open(G.UserSettingsSections.ACCOUNT)
    }, this.handleAccept = e => {
      let {
        channelId: t,
        code: n,
        content: a,
        type: s,
        giftInfo: l
      } = this.props;
      e.preventDefault(), e.stopPropagation(), P.default.track(G.AnalyticEvents.OPEN_MODAL, {
        type: "gift_accept",
        location: {
          ...this.analyticsLocation,
          object: G.AnalyticsObjects.BUTTON_CTA
        }
      });
      let i = s !== G.MessageTypes.CUSTOM_GIFT ? void 0 : a;
      (0, I.openGiftCodeAcceptModal)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: i,
        giftInfo: l
      })
    }, this.handleEmbedClick = e => {
      let {
        giftCode: t
      } = this.props;
      null != t && t.isSubscription && (e.preventDefault(), c.default.open(G.UserSettingsSections.PREMIUM))
    }, this.handleClaimPromotion = e => {
      var t;
      e.stopPropagation(), e.preventDefault();
      let n = null === (t = this.props.giftCode) || void 0 === t ? void 0 : t.code;
      null != n && window.open(G.Routes.BILLING_PROMOTION_REDEMPTION(n))
    }, this.renderCustomGiftBox = e => {
      let {
        useReducedMotion: t,
        width: n
      } = this.props;
      if (null == e || null == e.giftStyle) return null;
      let s = B.LegacySeasonalGiftStyles.includes(e.giftStyle),
        l = i(w.customGiftEmbedWrapper, {
          [w.legacySeasonalGiftEmbedWrapper]: s,
          [w.giftEmbedWrapperHorizontal]: n >= f.HORIZONTAL_EMBED_BREAKPOINT
        }),
        r = i({
          [w.legacySeasonalGiftEmbedBox]: s,
          [w.legacySeasonalGiftEmbedBoxHorizontal]: s && n >= f.HORIZONTAL_EMBED_BREAKPOINT,
          [w.customGiftEmbedBox]: !s,
          [w.customGiftEmbedBoxHorizontal]: !s && n >= f.HORIZONTAL_EMBED_BREAKPOINT
        });
      return (0, a.jsxs)("div", {
        className: l,
        children: [!t && B.AllSeasonalGiftStyles.includes(e.giftStyle) && (0, a.jsx)(R.default, {
          className: w.snow,
          wind: 5
        }), s && (0, a.jsx)(L.default, {
          className: w.headerIcon
        }), null != e.giftStyle && (0, a.jsx)(T.default, {
          defaultAnimationState: e.redeemed ? p.AnimationState.LOOP : p.AnimationState.IDLE,
          giftStyle: e.giftStyle,
          className: r
        })]
      })
    }
  }
}
let Y = (0, E.default)((0, m.default)(V));
var W = u.default.connectStores([S.default, v.default, N.default, A.default, M.default, C.default, _.default], e => {
  let {
    code: t,
    author: n,
    currentUser: a
  } = e, s = S.default.get(t), l = null != s ? v.default.get(s.skuId) : null, i = null != s && null != s.userId ? N.default.getUser(s.userId) : null, r = _.default.useReducedMotion;
  return {
    sku: l,
    giftCode: s,
    gifter: i,
    currentUser: a,
    subscriptionPlan: null != s && null != s.subscriptionPlanId ? (0, j.getOrFetchSubscriptionPlan)(s.subscriptionPlanId) : null,
    isSelfGift: null != s ? C.default.getId() === s.userId : C.default.getId() === n.id,
    resolved: S.default.getIsResolved(t),
    libraryApplication: null != l && (null == s ? void 0 : s.entitlementBranches) != null ? y.firstLibraryApplicationForGiftCode(s.entitlementBranches, l, A.default) : null,
    useReducedMotion: r
  }
})(Y)