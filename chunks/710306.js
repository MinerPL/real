"use strict";
n.r(t), n.d(t, {
  default: function() {
    return K
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("866227"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("79112"),
  f = n("4919"),
  E = n("86621"),
  _ = n("737960"),
  T = n("206230"),
  I = n("491232"),
  m = n("210721"),
  N = n("583711"),
  p = n("65324"),
  S = n("393414"),
  A = n("271938"),
  C = n("55411"),
  h = n("686470"),
  g = n("697218"),
  M = n("10514"),
  O = n("552712"),
  R = n("145131"),
  L = n("880013"),
  v = n("943519"),
  P = n("181108"),
  D = n("599110"),
  x = n("659632"),
  y = n("719923"),
  U = n("380186"),
  j = n("158998"),
  b = n("501076"),
  G = n("49111"),
  B = n("646718"),
  F = n("782340"),
  k = n("192800");

function w(e) {
  let {
    onClick: t,
    libraryApplication: n
  } = e;
  return (0, s.jsxs)(d.Clickable, {
    className: k.libraryLink,
    onClick: t,
    children: [(0, s.jsx)(L.default, {
      className: k.libraryIcon
    }), (0, s.jsx)("div", {
      children: n.isHidden() ? F.default.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY_HIDDEN : F.default.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY
    })]
  })
}
class H extends l.PureComponent {
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
    return (0, s.jsx)(f.ResponsiveEmbedTile, {
      isHorizontal: this.isHorizontal,
      renderTitle: this.renderTitle,
      renderTagline: this.renderTagline,
      renderMedia: this.renderMedia,
      renderActions: this.renderActions
    })
  }
  constructor(...e) {
    super(...e), this.renderMedia = () => (0, s.jsx)("div", {
      className: i(k.invalidPoop, {
        [k.invalidPoopHorizontal]: this.isHorizontal
      })
    }), this.renderTitle = () => this.props.isSelfGift ? F.default.Messages.GIFT_EMBED_INVALID_TITLE_SELF : F.default.Messages.GIFT_EMBED_INVALID_TITLE_OTHER, this.renderActions = () => this.props.isSelfGift ? (0, s.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      onClick: this.handleViewInventory,
      children: F.default.Messages.GIFT_INVENTORY
    }) : (0, s.jsx)(d.Button, {
      disabled: !0,
      size: d.Button.Sizes.SMALL,
      children: F.default.Messages.GIFT_EMBED_BUTTON_ACCEPT
    }), this.renderTagline = () => this.props.isSelfGift ? F.default.Messages.GIFT_EMBED_INVALID_TAGLINE_SELF : F.default.Messages.GIFT_EMBED_INVALID_TAGLINE_OTHER
  }
}
class V extends l.Component {
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
    return (0, s.jsxs)(R.default, {
      justify: R.default.Justify.BETWEEN,
      children: [(0, s.jsxs)(R.default, {
        children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, s.jsx)(w, {
          onClick: this.handleViewLibrary,
          libraryApplication: t
        })]
      }), (0, s.jsxs)(R.default, {
        align: R.default.Align.END,
        justify: R.default.Justify.END,
        className: k.metadata,
        direction: R.default.Direction.VERTICAL,
        children: [e.hasMultipleCopies ? (0, s.jsx)("div", {
          children: this.renderGiftCodeCopiesLeft(e)
        }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, s.jsx)("div", {
          children: F.default.Messages.GIFT_EMBED_EXPIRATION.format({
            hours: e.expiresAt.diff(o(), "h")
          })
        })]
      })]
    })
  }
  renderGiftCodeCopiesLeft(e) {
    let t = e.isSubscription ? F.default.Messages.GIFT_EMBED_SUBSCRIPTIONS_LEFT : F.default.Messages.GIFT_EMBED_COPIES_LEFT;
    return t.format({
      remaining: e.remainingUses,
      total: e.maxUses
    })
  }
  renderButton(e) {
    let {
      libraryApplication: t,
      currentUser: n,
      isSelfGift: l
    } = this.props, a = {
      onClick: this.handleAccept,
      color: d.Button.Colors.BRAND
    }, i = !e.isSubscription && null != t || !e.isSelfRedeemable && l || e.isExistingPremiumSubscriptionDisallowed && (0, y.isPremium)(n);
    return (e.redeemed || i || e.isClaimed || !n.verified) && (a.color = d.Button.Colors.BRAND, a.disabled = !0), (0, s.jsx)(d.Button, {
      ...a,
      className: (0, I.isCollectiblesGiftCode)(e) ? k.collectiblesAcceptButton : null,
      size: d.Button.Sizes.SMALL,
      children: e.redeemed ? F.default.Messages.GIFT_EMBED_BUTTON_CLAIMED : null != e.giftStyle ? F.default.Messages.SEASONAL_GIFTING_OPEN_GIFT : F.default.Messages.GIFT_EMBED_BUTTON_ACCEPT
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
      sku: s
    } = this.props;
    return this.isCustomGiftMessage() && !n ? F.default.Messages.GIFT_RECIPIENT_NOTIFICATION.format({
      recipientDisplayName: j.default.getName(t)
    }) : null == s ? null : e.isSubscription ? n ? F.default.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION_SELF : F.default.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION : n ? F.default.Messages.GIFT_EMBED_TITLE_SELF : F.default.Messages.GIFT_EMBED_TITLE
  }
  renderBody(e) {
    let {
      libraryApplication: t,
      isSelfGift: n,
      sku: s,
      gifter: l,
      subscriptionPlan: a,
      currentUser: i
    } = this.props;
    if (null == s) return F.default.Messages.LOADING;
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let r = s.isPreorder() ? F.default.Messages.PREORDER_SKU_NAME.format({
      name: s.name
    }) : s.name;
    if (e.redeemed) return e.isSubscription || (0, I.isCollectiblesGiftCode)(e) ? F.default.Messages.GIFT_EMBED_BODY_CLAIMED_SELF_SUBSCRIPTION : F.default.Messages.GIFT_EMBED_BODY_CLAIMED_SELF.format({
      skuName: r,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return F.default.Messages.GIFT_EMBED_BODY_OWNED.format({
      skuName: r,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return F.default.Messages.GIFT_EMBED_BODY_CLAIMED_OTHER;
    if (!i.verified) return F.default.Messages.GIFT_EMBED_BODY_REQUIRES_VERIFICATION.format({
      onClick: this.handleVerificationClick
    });
    if (n) return e.isSelfRedeemable ? F.default.Messages.GIFT_EMBED_BODY_SELF : F.default.Messages.GIFT_EMBED_BODY_SELF_NOT_REDEEMABLE.format({
      skuName: r
    });
    if (e.isExistingPremiumSubscriptionDisallowed) return F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_ALREADY_ACTIVE;
    if (e.hasMultipleCopies) return null != l ? e.isSubscription ? F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_GIVEAWAY.format({
      username: j.default.getUserTag(l),
      maxUses: e.maxUses,
      skuName: r
    }) : F.default.Messages.GIFT_EMBED_BODY_GIVEAWAY.format({
      username: j.default.getUserTag(l),
      totalCopies: e.maxUses,
      skuName: r
    }) : e.isSubscription ? F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_GIVEAWAY.format({
      maxUses: e.maxUses,
      skuName: r
    }) : F.default.Messages.GIFT_EMBED_BODY_NO_USER_GIVEAWAY.format({
      totalCopies: e.maxUses,
      skuName: r
    });
    if (e.isSubscription) {
      if (null == a) return F.default.Messages.LOADING;
      if (null != l) {
        let e = a.interval === B.SubscriptionIntervalTypes.MONTH ? F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_MONTHS : F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_YEARS;
        return e.format({
          username: j.default.getUserTag(l),
          skuName: r,
          intervalCount: a.intervalCount
        })
      }
      let e = a.interval === B.SubscriptionIntervalTypes.MONTH ? F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_MONTHS : F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_YEARS;
      return e.format({
        skuName: r,
        intervalCount: a.intervalCount
      })
    }
    return null != l ? F.default.Messages.GIFT_EMBED_BODY_DEFAULT.format({
      username: j.default.getUserTag(l)
    }) : F.default.Messages.GIFT_EMBED_BODY_NO_USER_DEFAULT
  }
  renderPromotionActions() {
    return (0, s.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      onClick: this.handleClaimPromotion,
      children: F.default.Messages.GIFT_EMBED_BUTTON_CLAIM
    })
  }
  renderEmbed() {
    let {
      giftCode: e,
      width: t
    } = this.props;
    return null == e ? null : (0, s.jsx)(b.StoreEmbedWithoutDimensions, {
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
      isSelfGift: l
    } = this.props;
    if (null != e && null != e.promotion) return (0, s.jsx)(b.StoreEmbedWithoutDimensions, {
      skuId: e.skuId,
      onEmbedClick: this.handleClaimPromotion,
      analyticsSection: G.AnalyticsSections.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderPromotionActions(),
      renderCustomTitle: () => F.default.Messages.GIFT_EMBED_TITLE_PROMOTION,
      renderCustomTagline: () => F.default.Messages.GIFT_EMBED_TAGLINE_PROMOTION,
      width: n
    });
    if (null == e || e.revoked) return t ? (0, s.jsx)(H, {
      isSelfGift: l,
      width: n
    }) : (0, s.jsx)(f.ResponsiveLoadingEmbedTile, {
      isHorizontal: n >= f.HORIZONTAL_EMBED_BREAKPOINT
    });
    return (0, I.isCollectiblesGiftCode)(e) ? (0, s.jsx)("div", {
      className: k.collectiblesEmbedWrapper,
      children: this.renderEmbed()
    }) : this.renderEmbed()
  }
  constructor(...e) {
    super(...e), this.handleViewLibrary = e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, S.transitionTo)(G.Routes.APPLICATION_LIBRARY_SETTINGS) : (0, S.transitionTo)(G.Routes.APPLICATION_LIBRARY, {
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
        content: s,
        type: l,
        giftInfo: a
      } = this.props;
      e.preventDefault(), e.stopPropagation(), D.default.track(G.AnalyticEvents.OPEN_MODAL, {
        type: "gift_accept",
        location: {
          ...this.analyticsLocation,
          object: G.AnalyticsObjects.BUTTON_CTA
        }
      });
      let i = l !== G.MessageTypes.CUSTOM_GIFT ? void 0 : s;
      (0, N.openGiftCodeAcceptModal)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: i,
        giftInfo: a
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
      let l = B.LegacySeasonalGiftStyles.includes(e.giftStyle),
        a = i(k.customGiftEmbedWrapper, {
          [k.legacySeasonalGiftEmbedWrapper]: l,
          [k.giftEmbedWrapperHorizontal]: n >= f.HORIZONTAL_EMBED_BREAKPOINT
        }),
        r = i({
          [k.legacySeasonalGiftEmbedBox]: l,
          [k.legacySeasonalGiftEmbedBoxHorizontal]: l && n >= f.HORIZONTAL_EMBED_BREAKPOINT,
          [k.customGiftEmbedBox]: !l,
          [k.customGiftEmbedBoxHorizontal]: !l && n >= f.HORIZONTAL_EMBED_BREAKPOINT
        });
      return (0, s.jsxs)("div", {
        className: a,
        children: [!t && B.AllSeasonalGiftStyles.includes(e.giftStyle) && (0, s.jsx)(P.default, {
          className: k.snow,
          wind: 5
        }), l && (0, s.jsx)(v.default, {
          className: k.headerIcon
        }), null != e.giftStyle && (0, s.jsx)(p.default, {
          defaultAnimationState: e.redeemed ? m.AnimationState.LOOP : m.AnimationState.IDLE,
          giftStyle: e.giftStyle,
          className: r
        })]
      })
    }
  }
}
let Y = (0, _.default)((0, E.default)(V));
var K = u.default.connectStores([C.default, O.default, g.default, h.default, M.default, A.default, T.default], e => {
  let {
    code: t,
    author: n,
    currentUser: s
  } = e, l = C.default.get(t), a = null != l ? O.default.get(l.skuId) : null, i = null != l && null != l.userId ? g.default.getUser(l.userId) : null, r = T.default.useReducedMotion;
  return {
    sku: a,
    giftCode: l,
    gifter: i,
    currentUser: s,
    subscriptionPlan: null != l && null != l.subscriptionPlanId ? (0, U.getOrFetchSubscriptionPlan)(l.subscriptionPlanId) : null,
    isSelfGift: null != l ? A.default.getId() === l.userId : A.default.getId() === n.id,
    resolved: C.default.getIsResolved(t),
    libraryApplication: null != a && (null == l ? void 0 : l.entitlementBranches) != null ? x.firstLibraryApplicationForGiftCode(l.entitlementBranches, a, h.default) : null,
    useReducedMotion: r
  }
})(Y)