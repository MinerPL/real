"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("702976"), n("222007"), n("70102");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("730290"),
  o = n("446674"),
  u = n("77078"),
  d = n("404118"),
  c = n("73961"),
  f = n("465527"),
  m = n("55620"),
  E = n("79112"),
  _ = n("308757"),
  h = n("997289"),
  p = n("84460"),
  I = n("299285"),
  T = n("661579"),
  g = n("393414"),
  C = n("915639"),
  S = n("697218"),
  A = n("437712"),
  N = n("622839"),
  M = n("552712"),
  v = n("167726"),
  x = n("471671"),
  O = n("181114"),
  L = n("216422"),
  R = n("599110"),
  P = n("568734"),
  y = n("719923"),
  D = n("882941"),
  j = n("49111"),
  U = n("782340"),
  b = n("576057");
class G extends s.Component {
  get analyticsLocation() {
    let {
      storeListingAnalyticsProperties: e,
      asGift: t
    } = this.props, n = null != e ? e.promotionId : null;
    return {
      ...this.props.analyticsContext.location,
      object: j.AnalyticsObjects.BUTTON_CTA,
      objectType: t ? j.AnalyticsObjectTypes.GIFT : j.AnalyticsObjectTypes.BUY,
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
      analyticsContext: a
    } = this.props;
    if (null != t && null != n) {
      let n = await f.grantChannelBranchEntitlement(e.applicationId, t, e.id);
      return n
    }
    let s = await f.purchaseSKU(e.applicationId, e.id, {
      analyticsLoadId: a.loadId
    });
    return s.entitlements
  }
  wrapWithDisabledTooltip(e, t) {
    let {
      className: n,
      tooltipPosition: s
    } = this.props;
    return (0, a.jsxs)("div", {
      className: i(b.disabledButtonWrapper, n),
      children: [e, (0, a.jsx)(u.Tooltip, {
        text: t,
        position: s,
        children: e => (0, a.jsx)("div", {
          className: b.disabledButtonOverlay,
          ...e
        })
      })]
    })
  }
  renderButton(e) {
    let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
      {
        isPurchasing: s,
        wrapperClassName: l,
        className: r,
        fullWidth: o,
        size: d,
        isWindowFocused: c,
        color: f,
        customDisabledColor: m,
        pauseAnimation: E,
        isEntitled: _,
        asGift: h,
        sku: p,
        entitlementBranchId: I,
        isInTestMode: T,
        innerClassName: g
      } = this.props,
      C = !0 === _ && (null == p || p.type !== j.SKUTypes.CONSUMABLE),
      S = !0 === n.disabled || null != p && !p.available && !(null != I) && !T || C && !h,
      A = n.disabledTooltipText,
      N = {
        wrapperClassName: l,
        className: r,
        fullWidth: o,
        size: d,
        color: S && null != m ? m : null != f ? f : u.Button.Colors.GREEN,
        hover: this.hover,
        innerClassName: i(null != g ? g : null, b.applicationBuyButton),
        disabled: S,
        submitting: s || !0 === n.submitting,
        onClick: null != n.onClick ? n.onClick : this.handleClick
      };
    return (t = !0 === n.useShinyButton ? (0, a.jsxs)(O.default, {
      ...N,
      pauseAnimation: !c || E,
      children: [n.buttonIcon, e]
    }) : (0, a.jsxs)(u.Button, {
      ...N,
      children: [n.buttonIcon, e]
    }), null != A) ? this.wrapWithDisabledTooltip(t, A) : t
  }
  renderFreeButton(e, t) {
    let {
      isEntitled: n,
      isUserPremium: a,
      isInTestMode: s,
      forceDistribution: l,
      entitlementBranchId: i
    } = this.props;
    if (null != i) return (0, D.canUserInstall)(e) && !n ? this.renderButton(U.default.Messages.GAME_ACTION_BUTTON_INSTALL) : this.renderButton(U.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY);
    let r = e.getPrice();
    if (e.premium && !l && (a || s)) return (0, D.canUserInstall)(e) && !n ? this.renderButton(U.default.Messages.GAME_ACTION_BUTTON_INSTALL, t) : this.renderButton(U.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY, t);
    if (null != r && 0 === r.amount && (!e.premium || (0, P.hasFlag)(e.flags, j.SKUFlags.PREMIUM_AND_DISTRIBUTION))) return (0, D.canUserInstall)(e) && !n ? this.renderButton(U.default.Messages.GAME_ACTION_BUTTON_INSTALL) : this.renderButton(U.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY)
  }
  render() {
    let {
      isAuthenticated: e,
      sku: t,
      onStoreListing: n,
      shouldRenderPrice: s,
      forceDistribution: l,
      asGift: i,
      isInTestMode: r
    } = this.props, o = {
      useShinyButton: !0,
      buttonIcon: (0, a.jsx)(L.default, {
        className: b.premiumIcon
      })
    };
    if (null == t) return this.renderButton(null, {
      submitting: !0
    });
    if (i) return t.isPreorder() ? this.renderButton(U.default.Messages.APPLICATION_STORE_PREORDER_AS_GIFT) : this.renderButton(U.default.Messages.APPLICATION_STORE_BUY_AS_GIFT);
    let u = this.renderFreeButton(t, o);
    if (null != u) return u;
    if (!n) return this.renderButton(U.default.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE, {
      onClick: this.handleViewInStore
    });
    let d = t.getPrice();
    return (t.available || r) && (t.premium || null != d) ? t.restricted ? this.renderButton(U.default.Messages.APPLICATION_STORE_BUY, {
      disabledTooltipText: U.default.Messages.GAME_ACTION_BUTTON_RESTRICTED_IN_REGION
    }) : t.premium && !l ? this.renderButton(U.default.Messages.APPLICATION_STORE_GET_PREMIUM, o) : e || null != t.externalPurchaseUrl ? t.isPreorder() ? this.renderButton(s ? U.default.Messages.APPLICATION_STORE_PREORDER_FOR_PRICE.format({
      price: (0, T.default)(t, !0, !0)
    }) : U.default.Messages.APPLICATION_STORE_PREORDER) : this.renderButton(s ? U.default.Messages.APPLICATION_STORE_BUY_FOR_PRICE.format({
      price: (0, T.default)(t, !0, !0)
    }) : U.default.Messages.APPLICATION_STORE_BUY) : this.renderButton(U.default.Messages.GAME_ACTION_BUTTON_LOGIN_TO_BUY) : this.renderButton(U.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE, {
      disabled: !0
    })
  }
  constructor(...e) {
    super(...e), this.handleViewInStore = e => {
      let {
        sku: t,
        skuId: n,
        application: a,
        onClick: s
      } = this.props;
      if (null == t) throw Error("Unexpected missing sku");
      null != s && s(e), null != n ? (0, m.goToSKUStoreListing)(t.id, {
        analyticsSource: this.analyticsLocation,
        slug: t.slug
      }) : null != a && (0, m.goToApplicationStoreListing)(a.id, {
        analyticsSource: this.analyticsLocation,
        slug: a.slug
      })
    }, this.handleClick = async e => {
      let {
        isAuthenticated: t,
        applicationId: n,
        sku: a,
        targetSkuId: s,
        entitlementBranchId: l,
        isUserPremium: i,
        onClick: o,
        isInTestMode: u,
        storeListingAnalyticsProperties: f,
        asGift: m,
        forceDistribution: h
      } = this.props;
      if (null == a) throw Error("should not be able to buy without sku");
      if (null != o && null != e && o(e), null != a.externalPurchaseUrl) {
        window.open(a.externalPurchaseUrl);
        return
      }
      if (!t) {
        let e = {
          redirect_to: j.Routes.APPLICATION_STORE_LISTING_SKU(a.id, a.slug)
        };
        (0, g.transitionTo)(j.Routes.LOGIN, {
          search: (0, r.stringify)(e)
        });
        return
      }
      let p = null != l;
      if (!a.premium || h || i || u || p) {
        if ((a.requiresPayment || h) && !p) {
          if (null != s) try {
            await (0, _.openSKUPaymentModal)(n, s, this.analyticsLocation, {
              promotionId: null != f ? f.promotionId : null,
              isGift: m
            })
          } catch (e) {
            e === j.PaymentModalPriceChangedError && d.default.show({
              title: U.default.Messages.PAYMENT_PRICE_CHANGE_TITLE,
              body: U.default.Messages.PAYMENT_PRICE_CHANGE_BODY,
              confirmText: U.default.Messages.OKAY
            })
          }
        } else try {
          let e = await this.purchaseOrGrantSKU(a);
          (0, c.openPurchaseConfirmationModal)(a.applicationId, a.id, e, {
            analyticsSource: this.analyticsLocation
          })
        } catch (e) {}
      } else {
        var I;
        I = this.analyticsLocation, R.default.track(j.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
          location: I
        }), E.default.open(j.UserSettingsSections.PREMIUM)
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
var B = s.forwardRef((e, t) => {
  let {
    entitlementBranchId: n,
    applicationId: s,
    channelId: l,
    skuId: i,
    ...r
  } = e, u = (0, o.useStateFromStores)([p.default, v.default], () => v.default.inTestModeForApplication(s) || p.default.inDevModeForApplication(s), [s]), [d, c, f, m, E, _] = (0, o.useStateFromStoresArray)([I.default, S.default, M.default, A.default], () => {
    let e = I.default.getApplication(s),
      t = S.default.getCurrentUser(),
      a = null == i && null != e ? e.destinationSkuId : i,
      l = null != a ? M.default.get(a) : null,
      r = null != n ? n : s,
      o = null != a ? A.default.isEntitledToSku(t, a, s, r) : null,
      u = y.default.canInstallPremiumApplications(t);
    return [e, t, l, o, u, a]
  }), T = (0, o.useStateFromStores)([x.default], () => x.default.isFocused()), g = (0, o.useStateFromStores)([N.default], () => N.default.isPurchasingSKU), O = (0, o.useStateFromStores)([C.default], () => C.default.locale), L = (0, h.useAnalyticsContext)();
  if (null != n && null == l) throw Error("Unexpected entitlementBranchId without a channelId");
  return (0, a.jsx)(G, {
    ...r,
    applicationId: s,
    skuId: i,
    entitlementBranchId: n,
    channelId: l,
    application: d,
    sku: f,
    isAuthenticated: null != c,
    isInTestMode: u,
    isEntitled: m,
    isUserPremium: E,
    isWindowFocused: T,
    isPurchasing: g,
    locale: O,
    analyticsContext: L,
    ref: t,
    targetSkuId: _
  })
})