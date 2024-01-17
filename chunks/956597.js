"use strict";
n.r(t), n.d(t, {
  PremiumTrialGradientBadge: function() {
    return j
  },
  default: function() {
    return H
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  a = n("627445"),
  o = n.n(a),
  u = n("866227"),
  d = n.n(u),
  c = n("446674"),
  m = n("551042"),
  f = n("819855"),
  _ = n("77078"),
  E = n("841098"),
  T = n("206230"),
  I = n("32531"),
  P = n("393414"),
  p = n("945330"),
  S = n("41250"),
  R = n("379863"),
  C = n("216422"),
  O = n("719923"),
  M = n("286235"),
  g = n("626301"),
  L = n("917247"),
  v = n("635956"),
  U = n("400307"),
  h = n("646718"),
  N = n("49111"),
  x = n("782340"),
  A = n("670714"),
  b = n("481927");

function D(e) {
  if (null == e) return null;
  let t = d(e),
    n = t.diff(d(), "h");
  if (n > 24) {
    let e = t.diff(d(), "d");
    return x.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({
      numDays: e
    })
  }
  if (n > 1) return x.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({
    numHours: n
  });
  let i = t.diff(d(), "minutes");
  return x.default.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({
    numMinutes: i
  })
}

function F(e) {
  var t, n, r;
  let {
    className: l,
    children: a,
    withBottomMargin: o,
    discountOffer: u,
    trialOffer: d
  } = e, c = null !== (t = null == d ? void 0 : d.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, m = null == d ? void 0 : d.subscription_trial, f = null !== (r = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == m ? void 0 : m.sku_id) && void 0 !== r ? r : h.PremiumSubscriptionSKUs.TIER_2;
  return (0, i.jsxs)("div", {
    className: s(l, A.gradientUpsellWrapper, {
      [A.gradientUpsellWrapperTier0]: f === h.PremiumSubscriptionSKUs.TIER_0,
      [A.gradientUpsellWrapperTier2]: f === h.PremiumSubscriptionSKUs.TIER_2,
      [A.gradientUpsellWrapperWithBottomMargin]: o
    }),
    children: [(0, i.jsxs)("div", {
      className: A.logo,
      children: [(0, i.jsx)(C.default, {
        className: A.logoIcon
      }), f === h.PremiumSubscriptionSKUs.TIER_0 && (0, i.jsx)(R.default, {
        className: A.logoWordmark
      }), f === h.PremiumSubscriptionSKUs.TIER_2 && (0, i.jsx)(S.default, {
        className: A.logoWordmark
      })]
    }), (0, i.jsx)(_.Text, {
      variant: "text-md/medium",
      className: A.copy,
      color: "none",
      children: a
    }), (0, i.jsx)(U.PremiumPillWithSparkles, {
      text: null != u ? x.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
        percent: u.discount.amount
      }) : x.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
      colorOptions: f === h.PremiumSubscriptionSKUs.TIER_0 ? U.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : U.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
    }), (0, i.jsx)(_.Text, {
      variant: "eyebrow",
      className: A.countdownText,
      children: D(c)
    })]
  })
}

function y(e) {
  var t, n;
  let {
    className: l,
    onClose: s,
    subscriptionTier: a,
    analyticsLocationObject: o,
    trialOffer: u,
    discountOffer: d
  } = e, [c, m] = r.useState(!1), f = null != d ? x.default.Messages.PREMIUM_DISCOUNT_CTA.format({
    percent: d.discount.amount
  }) : (0, O.formatTrialCtaIntervalDuration)({
    intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
    intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
  });
  return (0, i.jsx)(v.default, {
    className: l,
    subscriptionTier: a,
    trialId: null == u ? void 0 : u.trial_id,
    submitting: c,
    premiumModalAnalyticsLocation: o,
    size: _.Button.Sizes.MEDIUM,
    color: _.Button.Colors.GREEN,
    onClick: () => {
      m(!0)
    },
    onSubscribeModalClose: e => {
      m(!1), e && (null == s || s())
    },
    buttonText: f
  })
}

function j(e) {
  var t, n;
  let r = null === (t = (0, L.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial,
    l = null !== (n = null == r ? void 0 : r.sku_id) && void 0 !== n ? n : h.PremiumSubscriptionSKUs.TIER_2;
  return (0, i.jsx)(_.Text, {
    variant: "text-xs/bold",
    className: s(A.trialBadge, e.className, {
      [A.trialBadgeGradientTier0]: l === h.PremiumSubscriptionSKUs.TIER_0,
      [A.trialBadgeGradientTier2]: l === h.PremiumSubscriptionSKUs.TIER_2
    }),
    color: "none",
    children: (0, O.formatTrialOfferIntervalDuration)({
      intervalType: null == r ? void 0 : r.interval,
      intervalCount: null == r ? void 0 : r.interval_count
    })
  })
}

function w(e) {
  let {
    subscriptionTier: t,
    onClose: n,
    analyticsLocationObject: r,
    trialOffer: l,
    discountOffer: s
  } = e;
  return (0, i.jsxs)("div", {
    className: A.footer,
    children: [(0, i.jsx)(_.Button, {
      onClick: n,
      size: _.Button.Sizes.SMALL,
      look: _.ButtonLooks.BLANK,
      className: A.cancelButton,
      children: x.default.Messages.CLOSE
    }), (0, i.jsx)(y, {
      className: A.subscribeButton,
      subscriptionTier: t,
      analyticsLocationObject: r,
      onClose: n,
      discountOffer: s,
      trialOffer: l
    })]
  })
}

function B(e) {
  let {
    onClose: t,
    analyticsLocationObject: n
  } = e, r = (0, L.usePremiumTrialOffer)();
  return (0, i.jsxs)("div", {
    className: A.tryOutUpsellContainer,
    children: [(0, i.jsx)(U.PremiumPillWithSparkles, {
      className: A.topRimPill,
      text: x.default.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
      colorOptions: U.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    }), (0, i.jsx)(_.Heading, {
      variant: "heading-md/semibold",
      color: "text-normal",
      children: x.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({
        onClick: g.navigateToPremiumMarketingPage
      })
    }), (0, i.jsx)(y, {
      trialOffer: r,
      className: A.subscribeButtonWide,
      subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
      analyticsLocationObject: n,
      onClose: t
    }), (0, i.jsx)(_.Text, {
      variant: "eyebrow",
      className: A.countdownTextInSetting,
      children: D(null == r ? void 0 : r.expires_at)
    })]
  })
}

function G(e) {
  let {
    headingText: t,
    context: n,
    children: r,
    trialOffer: l,
    discountOffer: s
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.Heading, {
      className: A.header,
      variant: "heading-xl/semibold",
      children: t
    }), null != n && (0, i.jsx)(_.Text, {
      className: A.context,
      variant: "text-md/normal",
      children: n
    }), (0, i.jsx)(F, {
      trialOffer: l,
      discountOffer: s,
      children: r
    })]
  })
}

function H(e) {
  let {
    headingText: t,
    context: r,
    children: l,
    onClose: a,
    type: u,
    subscriptionTier: d,
    analyticsLocationObject: S,
    trialOffer: R,
    discountOffer: C
  } = e, g = (0, c.useStateFromStores)([T.default], () => T.default.useReducedMotion), L = (0, E.default)();
  switch (u) {
    case h.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL:
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.Clickable, {
          className: A.upsellClose,
          onClick: a,
          children: (0, i.jsx)(p.default, {})
        }), (0, i.jsxs)("div", {
          className: A.contentContainer,
          children: [(0, i.jsx)("img", {
            className: A.upsellImage,
            src: b,
            alt: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }), (0, i.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: x.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
          }), (0, i.jsx)(F, {
            trialOffer: R,
            discountOffer: C,
            children: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, O.getDisplayNameFromSku)(d),
              onClick: () => (0, P.transitionTo)(N.Routes.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(w, {
          subscriptionTier: d,
          onClose: a,
          analyticsLocationObject: {
            section: N.AnalyticsSections.EXPRESSION_PICKER,
            object: N.AnalyticsObjects.BUTTON_CTA
          },
          trialOffer: R,
          discountOffer: C
        })]
      });
    case h.PremiumUpsellTypes.STICKER_PICKER_UPSELL:
      return o(null != l, "You must specify children for this upsell type"), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: A.contentContainer,
          children: [(0, i.jsx)("img", {
            className: A.upsellImage,
            src: b,
            alt: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
          }), (0, i.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
          }), (0, i.jsx)(F, {
            trialOffer: R,
            discountOffer: C,
            children: x.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
              planName: (0, O.getDisplayNameFromSku)(d),
              onClick: () => (0, P.transitionTo)(N.Routes.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(w, {
          subscriptionTier: d,
          onClose: a,
          analyticsLocationObject: {
            section: N.AnalyticsSections.EXPRESSION_PICKER,
            object: N.AnalyticsObjects.BUTTON_CTA
          },
          trialOffer: R,
          discountOffer: C
        })]
      });
    case h.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
      o(null != l, "You must specify children for this upsell type");
      let v = (0, f.isThemeLight)(L) ? n("602291") : n("609708");
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: A.contentContainer,
          children: [(0, i.jsx)("img", {
            alt: "",
            className: A.upsellImage,
            src: v
          }), (0, i.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: x.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
          }), (0, i.jsx)(F, {
            trialOffer: R,
            discountOffer: C,
            children: x.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
              planName: (0, O.getDisplayNameFromSku)(d),
              onClick: () => (0, P.transitionTo)(N.Routes.APPLICATION_STORE)
            })
          })]
        }), (0, i.jsx)(w, {
          subscriptionTier: d,
          onClose: a,
          analyticsLocationObject: {
            section: N.AnalyticsSections.EMOJI_PICKER_POPOUT,
            object: N.AnalyticsObjects.BUTTON_CTA
          },
          trialOffer: R,
          discountOffer: C
        })]
      });
    case h.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
    case h.PremiumUpsellTypes.BURST_REACTION_UPSELL:
    case h.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
    case h.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
      let U;
      switch (u) {
        case h.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL:
          U = x.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
            planName: (0, O.getDisplayNameFromSku)(d),
            premiumMaxSize: d === h.PremiumSubscriptionSKUs.TIER_0 ? x.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : x.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
            onClick: () => {
              (0, P.transitionTo)(N.Routes.APPLICATION_STORE), null == a || a()
            }
          });
          break;
        case h.PremiumUpsellTypes.BURST_REACTION_UPSELL:
          U = x.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
            planName: (0, O.getDisplayNameFromSku)(d),
            onClick: () => {
              (0, P.transitionTo)(N.Routes.APPLICATION_STORE), null == a || a()
            }
          });
          break;
        case h.PremiumUpsellTypes.STREAM_QUALITY_UPSELL:
          U = x.default.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
            onClick: () => {
              (0, P.transitionTo)(N.Routes.APPLICATION_STORE), null == a || a(), (0, m.closeAllModals)()
            }
          });
          break;
        case h.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL:
          U = x.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
            premiumMaxMessageLength: N.MAX_MESSAGE_LENGTH_PREMIUM,
            onClick: () => {
              (0, P.transitionTo)(N.Routes.APPLICATION_STORE), null == a || a()
            }
          })
      }
      return o(null != U, "There must be some upsell context"), (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)("div", {
          className: A.contentContainer,
          children: [(0, i.jsx)(_.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: t
          }), (0, i.jsx)(_.Text, {
            variant: "text-md/normal",
            children: r
          }), (0, i.jsx)(F, {
            trialOffer: R,
            discountOffer: C,
            children: U
          })]
        })
      });
    case h.PremiumUpsellTypes.BURST_REACTION_QUICK_ACTION_UPSELL:
      return (0, i.jsxs)("div", {
        className: A.contentContainer,
        children: [(0, i.jsx)(_.Heading, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: t
        }), (0, i.jsx)(_.Text, {
          variant: "text-md/normal",
          children: r
        }), (0, i.jsx)(F, {
          trialOffer: R,
          discountOffer: C,
          children: x.default.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
            planName: (0, O.getDisplayNameFromSku)(d),
            onClick: () => (0, P.transitionTo)(N.Routes.APPLICATION_STORE)
          })
        }), (0, i.jsx)(y, {
          className: A.upsellButton,
          subscriptionTier: d,
          analyticsLocationObject: S,
          onClose: a,
          trialOffer: R,
          discountOffer: C
        })]
      });
    case h.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
      return o(null != l, "You must specify children for this upsell type"), (0, i.jsx)(F, {
        trialOffer: R,
        discountOffer: C,
        children: x.default.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
          onClick: () => {
            (0, P.transitionTo)(N.Routes.APPLICATION_STORE), (0, I.closeEditor)()
          }
        })
      });
    case h.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
      return (0, i.jsxs)("div", {
        className: s(A.messageLengthUpsellContainer, {
          [A.messageLengthUpsellAppearAnimation]: !g
        }),
        children: [(0, i.jsx)(_.Text, {
          variant: "text-lg/bold",
          color: "status-danger",
          children: r
        }), (0, i.jsx)(_.Heading, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          className: A.messageLengthUpsellHeader,
          children: x.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
        }), (0, i.jsx)("div", {
          className: A.divider
        }), (0, i.jsx)(F, {
          trialOffer: R,
          discountOffer: C,
          className: A.messageLengthBrandedContainer,
          subscriptionTier: d,
          children: x.default.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
            premiumMaxMessageLength: N.MAX_MESSAGE_LENGTH_PREMIUM,
            onClick: () => {
              (0, P.transitionTo)(N.Routes.APPLICATION_STORE), null == a || a()
            }
          })
        }), (0, i.jsx)(y, {
          subscriptionTier: d,
          analyticsLocationObject: S,
          onClose: a,
          trialOffer: R,
          discountOffer: C
        })]
      });
    case h.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL:
    case h.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
      return (0, i.jsx)(B, {});
    case h.PremiumUpsellTypes.GUILD_CAP_MODAL_UPSELL:
    case h.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL:
    case h.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL:
    case h.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL:
    case h.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
    case h.PremiumUpsellTypes.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
    case h.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED:
      return (0, i.jsx)(G, {
        trialOffer: R,
        discountOffer: C,
        headingText: t,
        context: r,
        children: l
      });
    default:
      return M.default.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(u)), (0, i.jsx)(G, {
        headingText: t,
        context: r,
        children: l,
        trialOffer: R,
        discountOffer: C
      })
  }
}