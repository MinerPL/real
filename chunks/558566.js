"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("917351"),
  u = s("65597"),
  o = s("77078"),
  d = s("206230"),
  c = s("235145"),
  _ = s("599110"),
  E = s("719923"),
  I = s("837797"),
  T = s("154889"),
  f = s("917247"),
  S = s("119829"),
  R = s("628550"),
  m = s("881155"),
  p = s("646718"),
  N = s("49111"),
  A = s("994428"),
  g = s("782340"),
  P = s("651187");
let C = e => {
    let {
      name: t,
      canReveal: s = !0,
      dismissibleContentType: l,
      forceShadow: E
    } = e, I = (0, u.default)([d.default], () => d.default.useReducedMotion), [T, f] = n.useState(!1), [m, p] = n.useState(!1), M = (0, R.default)(), [h, L] = (0, c.useGetDismissibleContent)(null != l && s ? [l] : []), {
      easterEggLevel: x,
      isEasterEggTriggered: v,
      onHover: U,
      onUnhover: b
    } = (0, S.default)(5), j = (0, r.debounce)(() => {
      _.default.track(N.AnalyticEvents.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
        card_type: (0, r.snakeCase)(t)
      })
    }, 800);
    e = {
      onMouseEnter: j,
      ...e
    };
    let D = h !== l || null == l || m;
    return (n.useEffect(() => {
      I && T && (p(!0), _.default.track(N.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
        card_type: t
      }), null != l && L(A.ContentDismissActionType.TAKE_ACTION))
    }, [I, T, l, t, L]), s) ? t === R.PerksDiscoverabilityCardTypes.UPCOMING_DROP_UNTIMED ? (0, a.jsx)("div", {
      className: i(P.flipCardContainer, {
        [P.forceShadow]: E
      }),
      onMouseEnter: U,
      onFocus: U,
      onMouseLeave: b,
      onBlur: b,
      children: (0, a.jsxs)("div", {
        className: i(P.flipCard, {
          [P.partialFlipCard]: !v,
          [P.ultraFlipCard]: v,
          [P.rotateCard]: v && 3 === x,
          [P.reducedMotion]: I
        }),
        children: [(0, a.jsx)("div", {
          className: P.flipCardFront,
          children: (0, a.jsx)(O, {
            ...e,
            className: P.topCover
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardBack,
          children: (0, a.jsx)(O, {
            ...e,
            className: P.topCover
          })
        })]
      })
    }) : D ? (0, a.jsx)("div", {
      className: i(P.noFlipCardContainer, {
        [P.forceShadow]: E,
        [P.reducedMotion]: I
      }),
      children: (0, a.jsx)(O, {
        ...e
      })
    }) : (0, a.jsx)("div", {
      className: i(P.flipCardContainer, {
        [P.forceShadow]: E
      }),
      children: (0, a.jsxs)(o.Clickable, {
        onClick: () => f(!0),
        className: i(P.flipCard, P.clickable, {
          [P.flipped]: T,
          [P.partialFlipCard]: !m && !T,
          [P.reducedMotion]: I
        }),
        onTransitionEnd: e => {
          T && "transform" === e.propertyName && e.target.classList.contains(P.flipCard) && (p(!0), _.default.track(N.AnalyticEvents.PREMIUM_MARKETING_PERK_CARD_FLIPPED, {
            card_type: t
          }), null != l && L(A.ContentDismissActionType.TAKE_ACTION))
        },
        children: [(0, a.jsx)("div", {
          className: P.flipCardHidden,
          "aria-hidden": !0,
          children: (0, a.jsx)(O, {
            ...e
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardFront,
          children: (0, a.jsx)(O, {
            ...M.upcomingDropUntimed,
            pillText: ""
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardBack,
          children: (0, a.jsx)(O, {
            ...e,
            description: ""
          })
        }), (0, a.jsx)("div", {
          className: P.flipCardButtonContainer,
          children: (0, a.jsx)(o.Button, {
            onClick: () => f(!0),
            children: g.default.Messages.REVEAL
          })
        })]
      })
    }) : (0, a.jsx)(C, {
      ...M.upcomingDropUntimed,
      forceShadow: E
    })
  },
  O = e => {
    let {
      title: t,
      titleClassName: s = "",
      subtitle: n = "",
      description: l = "",
      descriptionCta: r = "",
      isPremiumGetCta: u,
      perkImage: d,
      backgroundImage: c,
      pillText: _,
      onClick: S,
      onCtaClick: R,
      onMouseEnter: N,
      className: A
    } = e, C = (0, f.usePremiumTrialOffer)(), O = null == C ? void 0 : C.subscription_trial, M = (0, T.usePremiumDiscountOffer)(), h = (0, E.formatTrialCtaIntervalDuration)({
      intervalType: null == O ? void 0 : O.interval,
      intervalCount: null == O ? void 0 : O.interval_count
    }), L = (0, I.useResponseOnUserState)({
      defaultResponse: g.default.Messages.PREMIUM_SETTINGS_GET,
      onNonTier2Subscriber: g.default.Messages.BILLING_SWITCH_PLAN_UPGRADE,
      onTier2TrialOffer: h,
      onTier0TrialOffer: h,
      onDiscountOffer: g.default.Messages.PREMIUM_DISCOUNT_CTA.format({
        percent: null == M ? void 0 : M.discount.amount
      })
    });
    return (0, a.jsxs)(o.Clickable, {
      className: i(P.card, A, {
        [P.clickable]: null != S
      }),
      onMouseEnter: N,
      style: {
        backgroundImage: null != c ? "url(".concat(c, ")") : void 0
      },
      onClick: S,
      children: [null != _ ? (0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: P.pill,
        children: _
      }) : null, (0, a.jsx)("div", {
        className: i(P.cover, P.below)
      }), (0, a.jsx)(o.Heading, {
        variant: "heading-xl/extrabold",
        className: i(P.cardHeading, s),
        children: t
      }), 0 !== n.length ? (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: P.cardSubtitle,
        children: n
      }) : null, null != d ? (0, a.jsx)("img", {
        src: d,
        alt: "",
        className: P.cardImage
      }) : null, 0 !== l.length ? (0, a.jsxs)("div", {
        className: P.cardDescription,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/extrabold",
          className: i(P.cardHeading, s),
          children: t
        }), 0 !== n.length ? (0, a.jsxs)(o.Text, {
          variant: "text-sm/normal",
          className: P.cardDescriptionText,
          children: [n, (0, a.jsx)("br", {}), " ", (0, a.jsx)("br", {}), l]
        }) : null, u ? (0, a.jsx)(m.default, {
          subscriptionTier: p.PremiumSubscriptionSKUs.TIER_2,
          buttonText: L,
          color: o.Button.Colors.GREEN,
          look: o.Button.Looks.FILLED
        }) : null, 0 !== r.length && null != R ? (0, a.jsx)(o.Button, {
          onClick: R,
          children: r
        }) : null]
      }) : null, (0, a.jsx)("div", {
        className: i(P.cover, P.above)
      })]
    })
  };
var M = C