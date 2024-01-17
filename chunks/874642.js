"use strict";
l.r(r), l.d(r, {
  default: function() {
    return v
  }
});
var n = l("37983"),
  t = l("884691"),
  s = l("77078"),
  a = l("812204"),
  o = l("685665"),
  i = l("642906"),
  c = l("85336"),
  d = l("273619"),
  u = l("674158"),
  p = l("427459"),
  m = l("617917"),
  f = l("49111"),
  E = l("782340"),
  N = l("315706"),
  h = l("926622");
let S = "premium-guild-subscription-upsell-modal-header";

function x(e) {
  let {
    title: r,
    subtitle: l,
    image: t
  } = e;
  return (0, n.jsxs)("div", {
    className: N.header,
    children: [(0, n.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      id: S,
      color: "header-primary",
      className: h.marginBottom8,
      children: r
    }), (0, n.jsx)(s.Text, {
      variant: "text-md/normal",
      className: N.subtitleText,
      children: l
    }), t]
  })
}
let C = e => {
    let {
      onClose: r,
      perks: l,
      perkIntro: t = E.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
      headerProps: a
    } = e;
    return (0, n.jsxs)("div", {
      className: N.wrapper,
      children: [(0, n.jsx)(s.ModalCloseButton, {
        className: N.closeButton,
        onClick: () => {
          r()
        }
      }), (0, n.jsx)(T, {
        headerProps: a,
        perkIntro: t
      }), (0, n.jsx)("div", {
        className: N.perks,
        children: l.map((e, r) => {
          let {
            icon: l,
            iconClassName: t,
            description: s,
            color: a
          } = e;
          return (0, n.jsx)(u.default, {
            icon: l,
            iconClassName: t,
            description: s,
            color: a
          }, r)
        })
      })]
    })
  },
  T = e => {
    let {
      headerProps: r,
      perkIntro: a
    } = e;
    return (0, n.jsxs)(t.Fragment, {
      children: [null != r ? (0, n.jsx)(x, {
        ...r
      }) : (0, n.jsx)("img", {
        className: N.heroImage,
        src: l("243704"),
        alt: E.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        className: N.heading,
        children: a
      })]
    })
  },
  _ = e => {
    let {
      guild: r,
      targetBoostedGuildTier: l,
      onClose: t,
      analyticsSourceLocation: a
    } = e, o = {
      section: f.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL,
      object: f.AnalyticsObjects.BUTTON_CTA,
      objectType: null != l ? (0, p.boostedGuildTierToAnalyticsObjectType)(l) : null
    };
    return (0, n.jsxs)(s.ModalFooter, {
      className: N.footer,
      children: [(0, n.jsx)(s.Button, {
        size: s.Button.Sizes.SMALL,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        onClick: () => {
          t()
        },
        children: E.default.Messages.CLOSE
      }), (0, n.jsx)(m.default, {
        analyticsLocation: o,
        analyticsSourceLocation: a,
        guild: r,
        targetBoostedGuildTier: l,
        onClose: () => {
          t()
        }
      })]
    })
  };

function v(e) {
  let {
    analyticsSourceLocation: r,
    guild: l,
    targetBoostedGuildTier: t,
    perks: u,
    perkIntro: p,
    headerProps: m,
    onClose: f,
    ...E
  } = e, {
    AnalyticsLocationProvider: N
  } = (0, o.default)(a.default.ACTIVITY_DIRECTORY);
  return (0, n.jsx)(N, {
    children: (0, n.jsx)(i.PaymentContextProvider, {
      activeSubscription: null,
      stepConfigs: [],
      skuIDs: [],
      children: (0, n.jsx)(s.ModalRoot, {
        ...E,
        "aria-labelledby": S,
        children: (0, n.jsx)(d.default, {
          hideBreadcrumbs: !0,
          body: (0, n.jsx)(C, {
            onClose: f,
            perks: u,
            perkIntro: p,
            headerProps: m
          }),
          footer: (0, n.jsx)(_, {
            guild: l,
            targetBoostedGuildTier: t,
            onClose: f,
            analyticsSourceLocation: r
          }),
          steps: [c.Step.PREMIUM_GUILD_UPSELL],
          currentStep: c.Step.PREMIUM_GUILD_UPSELL
        })
      })
    })
  })
}