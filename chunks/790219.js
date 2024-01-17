"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("702976"), n("222007"), n("70102");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("730290"),
  o = n("446674"),
  u = n("77078"),
  d = n("404118"),
  c = n("73961"),
  f = n("465527"),
  E = n("55620"),
  _ = n("79112"),
  T = n("308757"),
  I = n("997289"),
  m = n("84460"),
  N = n("299285"),
  p = n("661579"),
  S = n("393414"),
  A = n("915639"),
  C = n("697218"),
  h = n("437712"),
  g = n("622839"),
  M = n("552712"),
  O = n("167726"),
  R = n("471671"),
  L = n("181114"),
  v = n("216422"),
  P = n("599110"),
  D = n("568734"),
  x = n("719923"),
  y = n("882941"),
  U = n("49111"),
  j = n("782340"),
  b = n("576057");
class G extends l.Component {
  get analyticsLocation() {
    let {
      storeListingAnalyticsProperties: e,
      asGift: t
    } = this.props, n = null != e ? e.promotionId : null;
    return {
      ...this.props.analyticsContext.location,
      object: U.AnalyticsObjects.BUTTON_CTA,
      objectType: t ? U.AnalyticsObjectTypes.GIFT : U.AnalyticsObjectTypes.BUY,
      promotionId: n
    }
  }
  get hover() {
    let {
      hover: e,
      color: t
    } = this.props;
    return null != e ? e : null != t ? u.Button.Hovers.GREEN : u.Button.Hovers.DEFAULT
  }
  componentDidMount() {
    let {
      sku: e,
      applicationId: t,
      targetSkuId: n
    } = this.props;
    null == e && null != n && f.fetchSKU(t, n).catch(() => {})
  }
  componentDidUpdate(e) {
    this.props.locale !== e.locale && null != this.props.targetSkuId && f.fetchSKU(this.props.applicationId, this.props.targetSkuId).catch(() => {})
  }
  async purchaseOrGrantSKU(e) {
    let {
      channelId: t,
      entitlementBranchId: n,
      analyticsContext: s
    } = this.props;
    if (null != t && null != n) {
      let n = await f.grantChannelBranchEntitlement(e.applicationId, t, e.id);
      return n
    }
    let l = await f.purchaseSKU(e.applicationId, e.id, {
      analyticsLoadId: s.loadId
    });
    return l.entitlements
  }
  wrapWithDisabledTooltip(e, t) {
    let {
      className: n,
      tooltipPosition: l
    } = this.props;
    return (0, s.jsxs)("div", {
      className: i(b.disabledButtonWrapper, n),
      children: [e, (0, s.jsx)(u.Tooltip, {
        text: t,
        position: l,
        children: e => (0, s.jsx)("div", {
          className: b.disabledButtonOverlay,
          ...e
        })
      })]
    })
  }
  renderButton(e) {
    let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
      {
        isPurchasing: l,
        wrapperClassName: a,
        className: r,
        fullWidth: o,
        size: d,
        isWindowFocused: c,
        color: f,
        customDisabledColor: E,
        pauseAnimation: _,
        isEntitled: T,
        asGift: I,
        sku: m,
        entitlementBranchId: N,
        isInTestMode: p,
        innerClassName: S
      } = this.props,
      A = !0 === T && (null == m || m.type !== U.SKUTypes.CONSUMABLE),
      C = !0 === n.disabled || null != m && !m.available && !(null != N) && !p || A && !I,
      h = n.disabledTooltipText,
      g = {
        wrapperClassName: a,
        className: r,
        fullWidth: o,
        size: d,
        color: C && null != E ? E : null != f ? f : u.Button.Colors.GREEN,
        hover: this.hover,
        innerClassName: i(null != S ? S : null, b.applicationBuyButton),
        disabled: C,
        submitting: l || !0 === n.submitting,
        onClick: null != n.onClick ? n.onClick : this.handleClick
      };
    return (t = !0 === n.useShinyButton ? (0, s.jsxs)(L.default, {
      ...g,
      pauseAnimation: !c || _,
      children: [n.buttonIcon, e]
    }) : (0, s.jsxs)(u.Button, {
      ...g,
      children: [n.buttonIcon, e]
    }), null != h) ? this.wrapWithDisabledTooltip(t, h) : t
  }
  renderFreeButton(e, t) {
    let {
      isEntitled: n,
      isUserPremium: s,
      isInTestMode: l,
      forceDistribution: a,
      entitlementBranchId: i
    } = this.props;
    if (null != i) return (0, y.canUserInstall)(e) && !n ? this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_INSTALL) : this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY);
    let r = e.getPrice();
    if (e.premium && !a && (s || l)) return (0, y.canUserInstall)(e) && !n ? this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_INSTALL, t) : this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY, t);
    if (null != r && 0 === r.amount && (!e.premium || (0, D.hasFlag)(e.flags, U.SKUFlags.PREMIUM_AND_DISTRIBUTION))) return (0, y.canUserInstall)(e) && !n ? this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_INSTALL) : this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY)
  }
  render() {
    let {
      isAuthenticated: e,
      sku: t,
      onStoreListing: n,
      shouldRenderPrice: l,
      forceDistribution: a,
      asGift: i,
      isInTestMode: r
    } = this.props, o = {
      useShinyButton: !0,
      buttonIcon: (0, s.jsx)(v.default, {
        className: b.premiumIcon
      })
    };
    if (null == t) return this.renderButton(null, {
      submitting: !0
    });
    if (i) return t.isPreorder() ? this.renderButton(j.default.Messages.APPLICATION_STORE_PREORDER_AS_GIFT) : this.renderButton(j.default.Messages.APPLICATION_STORE_BUY_AS_GIFT);
    let u = this.renderFreeButton(t, o);
    if (null != u) return u;
    if (!n) return this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE, {
      onClick: this.handleViewInStore
    });
    let d = t.getPrice();
    return (t.available || r) && (t.premium || null != d) ? t.restricted ? this.renderButton(j.default.Messages.APPLICATION_STORE_BUY, {
      disabledTooltipText: j.default.Messages.GAME_ACTION_BUTTON_RESTRICTED_IN_REGION
    }) : t.premium && !a ? this.renderButton(j.default.Messages.APPLICATION_STORE_GET_PREMIUM, o) : e || null != t.externalPurchaseUrl ? t.isPreorder() ? this.renderButton(l ? j.default.Messages.APPLICATION_STORE_PREORDER_FOR_PRICE.format({
      price: (0, p.default)(t, !0, !0)
    }) : j.default.Messages.APPLICATION_STORE_PREORDER) : this.renderButton(l ? j.default.Messages.APPLICATION_STORE_BUY_FOR_PRICE.format({
      price: (0, p.default)(t, !0, !0)
    }) : j.default.Messages.APPLICATION_STORE_BUY) : this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_LOGIN_TO_BUY) : this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE, {
      disabled: !0
    })
  }
  constructor(...e) {
    super(...e), this.handleViewInStore = e => {
      let {
        sku: t,
        skuId: n,
        application: s,
        onClick: l
      } = this.props;
      if (null == t) throw Error("Unexpected missing sku");
      null != l && l(e), null != n ? (0, E.goToSKUStoreListing)(t.id, {
        analyticsSource: this.analyticsLocation,
        slug: t.slug
      }) : null != s && (0, E.goToApplicationStoreListing)(s.id, {
        analyticsSource: this.analyticsLocation,
        slug: s.slug
      })
    }, this.handleClick = async e => {
      let {
        isAuthenticated: t,
        applicationId: n,
        sku: s,
        targetSkuId: l,
        entitlementBranchId: a,
        isUserPremium: i,
        onClick: o,
        isInTestMode: u,
        storeListingAnalyticsProperties: f,
        asGift: E,
        forceDistribution: I
      } = this.props;
      if (null == s) throw Error("should not be able to buy without sku");
      if (null != o && null != e && o(e), null != s.externalPurchaseUrl) {
        window.open(s.externalPurchaseUrl);
        return
      }
      if (!t) {
        let e = {
          redirect_to: U.Routes.APPLICATION_STORE_LISTING_SKU(s.id, s.slug)
        };
        (0, S.transitionTo)(U.Routes.LOGIN, {
          search: (0, r.stringify)(e)
        });
        return
      }
      let m = null != a;
      if (!s.premium || I || i || u || m) {
        if ((s.requiresPayment || I) && !m) {
          if (null != l) try {
            await (0, T.openSKUPaymentModal)(n, l, this.analyticsLocation, {
              promotionId: null != f ? f.promotionId : null,
              isGift: E
            })
          } catch (e) {
            e === U.PaymentModalPriceChangedError && d.default.show({
              title: j.default.Messages.PAYMENT_PRICE_CHANGE_TITLE,
              body: j.default.Messages.PAYMENT_PRICE_CHANGE_BODY,
              confirmText: j.default.Messages.OKAY
            })
          }
        } else try {
          let e = await this.purchaseOrGrantSKU(s);
          (0, c.openPurchaseConfirmationModal)(s.applicationId, s.id, e, {
            analyticsSource: this.analyticsLocation
          })
        } catch (e) {}
      } else {
        var N;
        N = this.analyticsLocation, P.default.track(U.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
          location: N
        }), _.default.open(U.UserSettingsSections.PREMIUM)
      }
    }
  }
}
G.defaultProps = {
  tooltipPosition: "top",
  onStoreListing: !1,
  shouldRenderPrice: !1,
  pauseAnimation: !1,
  asGift: !1,
  forceDistribution: !1
};
var B = l.forwardRef((e, t) => {
  let {
    entitlementBranchId: n,
    applicationId: l,
    channelId: a,
    skuId: i,
    ...r
  } = e, u = (0, o.useStateFromStores)([m.default, O.default], () => O.default.inTestModeForApplication(l) || m.default.inDevModeForApplication(l), [l]), [d, c, f, E, _, T] = (0, o.useStateFromStoresArray)([N.default, C.default, M.default, h.default], () => {
    let e = N.default.getApplication(l),
      t = C.default.getCurrentUser(),
      s = null == i && null != e ? e.destinationSkuId : i,
      a = null != s ? M.default.get(s) : null,
      r = null != n ? n : l,
      o = null != s ? h.default.isEntitledToSku(t, s, l, r) : null,
      u = x.default.canInstallPremiumApplications(t);
    return [e, t, a, o, u, s]
  }), p = (0, o.useStateFromStores)([R.default], () => R.default.isFocused()), S = (0, o.useStateFromStores)([g.default], () => g.default.isPurchasingSKU), L = (0, o.useStateFromStores)([A.default], () => A.default.locale), v = (0, I.useAnalyticsContext)();
  if (null != n && null == a) throw Error("Unexpected entitlementBranchId without a channelId");
  return (0, s.jsx)(G, {
    ...r,
    applicationId: l,
    skuId: i,
    entitlementBranchId: n,
    channelId: a,
    application: d,
    sku: f,
    isAuthenticated: null != c,
    isInTestMode: u,
    isEntitled: E,
    isUserPremium: _,
    isWindowFocused: p,
    isPurchasing: S,
    locale: L,
    analyticsContext: v,
    ref: t,
    targetSkuId: T
  })
})