"use strict";
s.r(t), s.d(t, {
  default: function() {
    return w
  }
}), s("424973");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  u = s("819855"),
  o = s("77078"),
  d = s("875212"),
  c = s("841098"),
  _ = s("812204"),
  E = s("685665"),
  I = s("308592"),
  T = s("915639"),
  f = s("697218"),
  S = s("521012"),
  R = s("36694"),
  m = s("945330"),
  p = s("719923"),
  N = s("153160"),
  A = s("324878"),
  g = s("917247"),
  P = s("641078"),
  C = s("400307"),
  O = s("218435"),
  M = s("881155"),
  h = s("646718"),
  L = s("49111"),
  x = s("782340"),
  v = s("992250"),
  U = s("640754"),
  b = s("510407"),
  j = s("657890"),
  D = s("823986");
let G = e => {
    let {
      isLightTheme: t
    } = e, s = (0, P.getBOGOPillCopy)();
    return (0, a.jsx)(C.PremiumPillWithSparkles, {
      text: s,
      className: v.bogoPillWithSparkles,
      colorOptions: t ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  B = () => (0, a.jsx)("div", {
    className: v.mostPopularPill,
    children: (0, a.jsx)(o.Heading, {
      className: v.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: x.default.Messages.MOST_POPULAR
    })
  }),
  y = e => {
    let t, {
        premiumType: s
      } = e,
      n = (0, c.default)();
    t = s === h.PremiumTypes.TIER_0 ? (0, u.isThemeDark)(n) ? U : b : (0, u.isThemeDark)(n) ? j : D;
    let l = (0, p.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: v.logo,
      alt: l
    })
  },
  k = e => {
    let {
      text: t,
      badge: s
    } = e;
    return (0, a.jsxs)(o.Text, {
      color: "text-normal",
      variant: "text-sm/normal",
      children: [t, " ", s]
    })
  },
  K = e => {
    let {
      text: t
    } = e;
    return (0, a.jsx)(o.Text, {
      color: "header-primary",
      variant: "text-md/semibold",
      children: t
    })
  },
  H = e => {
    let {
      includes: t
    } = e;
    return t ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(R.default, {
        className: v.checkmarkIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(o.HiddenVisually, {
        children: x.default.Messages.INCLUDED
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(m.default, {
        className: v.closeIcon,
        "aria-hidden": !0
      }), (0, a.jsx)(o.HiddenVisually, {
        children: x.default.Messages.NOT_INCLUDED
      })]
    })
  },
  F = e => {
    let {
      label: t,
      column1: s,
      column2: n
    } = e;
    return (0, a.jsxs)("tr", {
      className: i(v.headerRow, v.rowBottomBorder, v.topBorderRadius),
      children: [(0, a.jsx)("th", {
        scope: "col",
        className: v.headerLabelCell,
        children: t
      }), (0, a.jsx)("th", {
        scope: "col",
        className: v.headerCell,
        children: s
      }), (0, a.jsx)("th", {
        scope: "col",
        className: i(v.headerCell, v.topBorderRadius),
        children: n
      })]
    })
  },
  W = e => {
    let {
      label: t,
      column1: s,
      column2: n,
      withBottomBorder: l = !0,
      withTopBorderRadius: r = !1,
      withBottomBorderRadius: u = !1,
      buttonsRow: o = !1,
      shortRow: d = !1
    } = e;
    return (0, a.jsxs)("tr", {
      className: i(v.row, {
        [v.wideRow]: o,
        [v.topBorderRadius]: r,
        [v.bottomBorderRadius]: u,
        [v.rowBottomBorder]: l,
        [v.shortRow]: d
      }),
      children: [(0, a.jsx)("th", {
        scope: "row",
        className: v.labelCell,
        children: t
      }), (0, a.jsx)("td", {
        className: i(v.cell, {
          [v.buttonsCell]: o
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: i(v.cell, {
          [v.topBorderRadius]: r,
          [v.bottomBorderRadius]: u,
          [v.buttonsCell]: o
        }),
        children: n
      })]
    })
  };
var w = e => {
  var t;
  let s, {
      className: l,
      hideCTAs: R = !1,
      headingOverride: m,
      hidePill: U = !1,
      selectedPlanColumnClassName: b,
      selectedPlanTier: j = h.PremiumTypes.TIER_2
    } = e,
    {
      AnalyticsLocationProvider: D
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    w = (0, r.useStateFromStores)([S.default], () => S.default.hasFetchedSubscriptions()),
    V = (0, I.useSubscriptionPlansLoaded)(),
    Y = "PlanComparisonTable";
  (0, d.useTriggerDebuggingAA)({
    location: Y + " auto on",
    autoTrackExposure: !0
  }), (0, d.useTriggerDebuggingAA)({
    location: Y + " auto off",
    autoTrackExposure: !1
  });
  let z = (0, c.default)(),
    X = (0, u.isThemeLight)(z),
    Q = (0, r.useStateFromStores)([f.default], () => f.default.getCurrentUser()),
    Z = (0, p.isPremiumExactly)(Q, h.PremiumTypes.TIER_2),
    J = (0, g.usePremiumTrialOffer)(),
    q = null == J ? void 0 : null === (t = J.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    $ = (0, A.useCurrentPremiumTrialTier)(),
    ee = (0, P.useIsEligibleForBogoPromotion)();
  if (!w || !V) return null;
  let et = p.default.getDefaultPrice(h.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    es = p.default.getDefaultPrice(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    ea = {
      label: (0, a.jsx)(o.Heading, {
        className: v.textColor,
        variant: "heading-lg/extrabold",
        children: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
      }),
      column1: (0, a.jsx)(y, {
        premiumType: h.PremiumTypes.TIER_0
      }),
      column2: (0, a.jsx)(y, {
        premiumType: h.PremiumTypes.TIER_2
      })
    },
    en = [{
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PRICE
      }),
      column1: (0, a.jsx)(a.Fragment, {
        children: (0, a.jsx)(K, {
          text: p.default.formatPriceString(et, h.SubscriptionIntervalTypes.MONTH)
        })
      }),
      column2: (0, a.jsx)(a.Fragment, {
        children: (0, a.jsx)(K, {
          text: p.default.formatPriceString(es, h.SubscriptionIntervalTypes.MONTH)
        })
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_EMOJI
      }),
      column1: (0, a.jsx)(H, {
        includes: !0
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STICKER
      }),
      column1: (0, a.jsx)(H, {
        includes: !0
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE
      }),
      column1: (0, a.jsx)(H, {
        includes: !0
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SUPER_REACTIONS
      }),
      column1: (0, a.jsx)(H, {
        includes: !0
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_UPLOAD
      }),
      column1: (0, a.jsx)(K, {
        text: (0, p.getMaxFileSizeForPremiumType)(h.PremiumTypes.TIER_0)
      }),
      column2: (0, a.jsx)(K, {
        text: (0, p.getMaxFileSizeForPremiumType)(h.PremiumTypes.TIER_2)
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_STREAMING
      }),
      column1: (0, a.jsx)(H, {
        includes: !1
      }),
      column2: (0, a.jsx)(K, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_STREAMING_DETAILS
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BOOSTS.format({
          numBoosts: h.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
          percentageOff: (0, N.formatPercent)(T.default.locale, h.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
        })
      }),
      column1: (0, a.jsx)(H, {
        includes: !1
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_PROFILE_THEMES
      }),
      column1: (0, a.jsx)(H, {
        includes: !1
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_PROFILE
      }),
      column1: (0, a.jsx)(H, {
        includes: !1
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SHOP_DISCOUNTS_GENERIC
      }),
      column1: (0, a.jsx)(H, {
        includes: !1
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_CLIENT_THEME
      }),
      column1: (0, a.jsx)(H, {
        includes: !1
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_BADGE
      }),
      column1: (0, a.jsx)(H, {
        includes: !0
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_VIDEO_BACKGROUND
      }),
      column1: (0, a.jsx)(H, {
        includes: !0
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_SOUNDS_ANYWHERE
      }),
      column1: (0, a.jsx)(H, {
        includes: !1
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.SOUNDBOARD_MARKETING_CUSTOM_ENTRY_SOUNDS
      }),
      column1: (0, a.jsx)(H, {
        includes: !1
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_SERVER_LIMIT
      }),
      column1: (0, a.jsx)(H, {
        includes: !1
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }, {
      label: (0, a.jsx)(k, {
        text: x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_ROW_LABEL_MESSAGE_LENGTH.format({
          maxChars: L.MAX_MESSAGE_LENGTH_PREMIUM
        })
      }),
      column1: (0, a.jsx)(H, {
        includes: !1
      }),
      column2: (0, a.jsx)(H, {
        includes: !0
      })
    }];
  return R ? en.push({
    label: null,
    column1: null,
    column2: null,
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: !1,
    shortRow: !0
  }) : en.push({
    label: null,
    column1: (0, a.jsxs)(a.Fragment, {
      children: [q === h.PremiumSubscriptionSKUs.TIER_2 || ee ? (0, a.jsx)(M.default, {
        className: v.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1,
        look: o.ButtonLooks.OUTLINED,
        color: X ? o.ButtonColors.BRAND_NEW : o.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(M.default, {
        className: v.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1
      }), $ === h.PremiumTypes.TIER_2 || null != q ? null : (0, a.jsx)(O.default, {
        className: v.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0
      })]
    }),
    column2: (0, a.jsxs)(a.Fragment, {
      children: [q === h.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(M.default, {
        className: v.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        look: o.ButtonLooks.OUTLINED,
        color: X ? o.ButtonColors.BRAND_NEW : o.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(M.default, {
        className: v.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: ee
      }), $ === h.PremiumTypes.TIER_0 || null != q ? null : (0, a.jsx)(O.default, {
        className: v.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == q
  }), s = U ? null : null != q || null != $ ? (0, a.jsx)(C.PremiumPillWithSparkles, {
    text: null != q ? x.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: v.freeTrialPillWithSparkles,
    colorOptions: q === h.PremiumSubscriptionSKUs.TIER_0 ? X ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : X ? Z ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : ee ? (0, a.jsx)(G, {
    isLightTheme: X
  }) : (0, a.jsx)(B, {}), (0, a.jsx)(D, {
    children: (0, a.jsxs)("div", {
      className: i(v.root, l),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(o.Heading, {
        className: i(v.titleText, v.textColor),
        variant: "heading-xxl/extrabold",
        children: null != m ? m : x.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: v.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: q === h.PremiumSubscriptionSKUs.TIER_0 || $ === h.PremiumTypes.TIER_0 || j === h.PremiumTypes.TIER_0 ? i(b, v.tier0ColumnOuter) : i(b, v.tier2ColumnOuter),
          children: s
        }), (0, a.jsxs)("table", {
          className: v.table,
          children: [(0, a.jsx)("thead", {
            children: (0, a.jsx)(F, {
              ...ea
            })
          }), (0, a.jsx)("tbody", {
            children: en.map((e, t) => (0, n.createElement)(W, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}