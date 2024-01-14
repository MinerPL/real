"use strict";
a.r(t), a.d(t, {
  default: function() {
    return R
  }
});
var s = a("37983");
a("884691");
var l = a("509043"),
  n = a("77078"),
  i = a("20606"),
  r = a("361777"),
  c = a("393621"),
  d = a("190986"),
  o = a("990864"),
  u = a("944633"),
  T = a("697468"),
  m = a("153160"),
  _ = a("915675"),
  E = a("49111"),
  x = a("782340"),
  h = a("443011");

function I(e) {
  let {
    listing: t
  } = e, {
    name: a,
    image: i,
    description: r
  } = t, c = (0, m.formatPrice)(t.price_tier, E.CurrencyCodes.USD);
  return (0, s.jsxs)("div", {
    children: [(0, s.jsxs)("div", {
      className: h.listingInfoRow,
      children: [(0, s.jsx)("img", {
        src: i,
        alt: "",
        className: h.avatar
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)(n.Heading, {
          variant: "heading-md/medium",
          className: h.tierName,
          children: a
        }), (0, s.jsx)(n.Text, {
          variant: "text-md/medium",
          tag: "span",
          children: c
        }), (0, s.jsx)(n.Text, {
          variant: "text-xxs/medium",
          tag: "span",
          children: "/mo."
        })]
      })]
    }), (0, s.jsxs)("div", {
      className: h.listingRoleRow,
      children: [(0, s.jsx)("div", {
        style: {
          backgroundColor: (0, l.int2hex)(t.role_color)
        },
        className: h.roleColor
      }), (0, s.jsx)("img", {
        src: i,
        alt: "",
        className: h.roleIcon
      }), (0, s.jsx)(n.Text, {
        variant: "text-xs/medium",
        children: a
      })]
    }), (0, s.jsx)(n.Text, {
      variant: "text-xs/normal",
      className: h.tierDescription,
      children: r
    })]
  })
}

function C(e) {
  let {
    channel: t
  } = e, a = function(e) {
    switch (e) {
      case E.ChannelTypes.GUILD_TEXT:
        return r.default;
      case E.ChannelTypes.GUILD_VOICE:
        return u.default;
      case E.ChannelTypes.GUILD_STAGE_VOICE:
        return T.default;
      case E.ChannelTypes.GUILD_FORUM:
        return c.default;
      case E.ChannelTypes.GUILD_MEDIA:
        return d.default;
      case E.ChannelTypes.GUILD_ANNOUNCEMENT:
        return o.default;
      default:
        return null
    }
  }(t.type);
  return (0, s.jsxs)("div", {
    className: h.channelBenefitRow,
    children: [null != a && (0, s.jsx)(a, {
      className: h.channelBenefitIcon
    }), (0, s.jsxs)("div", {
      className: h.channelBenefitText,
      children: [(0, s.jsx)(n.Text, {
        variant: "text-sm/normal",
        children: t.name
      }), (0, s.jsx)(n.Text, {
        variant: "text-xs/normal",
        className: h.channelBenefitTagline,
        children: t.tagline
      })]
    }), (0, s.jsx)(_.default, {
      className: h.emojiIcon,
      color: i.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
    })]
  })
}

function L(e) {
  let {
    benefit: t
  } = e;
  return void 0 === t ? null : (0, s.jsxs)("div", {
    className: h.intangibleBenefitRow,
    children: [(0, s.jsx)("div", {
      className: h.intangibleBenefitIcon
    }), (0, s.jsx)(n.Text, {
      variant: "text-sm/normal",
      children: t
    })]
  })
}

function N(e) {
  let {
    listing: t
  } = e;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsx)(n.Heading, {
      variant: "heading-sm/semibold",
      className: h.perksHeader,
      children: x.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PERKS_HEADER
    }), (0, s.jsx)(n.Text, {
      variant: "text-xs/semibold",
      className: h.benefitTypeHeader,
      children: x.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_EXCLUSIVE_CHANNELS_HEADER
    }), t.channels.map(e => (0, s.jsx)(C, {
      channel: e
    }, e.id)), (0, s.jsx)(n.Text, {
      variant: "text-xs/semibold",
      className: h.benefitTypeHeader,
      children: x.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_EXCLUSIVE_BENEFITS_HEADER
    }), t.additional_perks.map((e, t) => (0, s.jsx)(L, {
      benefit: e.name
    }, t))]
  })
}

function R(e) {
  let {
    selectedTemplate: t,
    handleSelectTemplate: a
  } = e;
  if (void 0 === t) return null;
  let l = t.listings[0];
  return (0, s.jsxs)("div", {
    className: h.container,
    children: [(0, s.jsxs)(n.ScrollerThin, {
      className: h.content,
      children: [(0, s.jsx)(I, {
        listing: l
      }), (0, s.jsx)("div", {
        className: h.divider
      }), (0, s.jsx)(N, {
        listing: l
      })]
    }), (0, s.jsx)(n.Button, {
      size: n.Button.Sizes.MEDIUM,
      onClick: () => {
        a(t)
      },
      children: x.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_SELECT_TEMPLATE_BUTTON
    })]
  })
}