"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("917351"),
  o = s.n(r),
  d = s("446674"),
  u = s("77078"),
  c = s("54239"),
  S = s("174727"),
  E = s("685665"),
  f = s("239380"),
  T = s("305961"),
  m = s("625634"),
  _ = s("521012"),
  g = s("476263"),
  h = s("628398"),
  I = s("118503"),
  N = s("663745"),
  p = s("423487"),
  C = s("599110"),
  A = s("315102"),
  O = s("427459"),
  x = s("701909"),
  R = s("719923"),
  M = s("299039"),
  v = s("308086"),
  D = s("954296"),
  L = s("49111"),
  P = s("782340"),
  j = s("733798");

function b(e) {
  let {
    deadline: t
  } = e, {
    days: s,
    hours: n,
    minutes: l
  } = (0, S.default)(t, 1e3);
  return (0, a.jsx)(a.Fragment, {
    children: P.default.Messages.PREMIUM_GUILD_COOLDOWN_AVAILABLE_COUNTDOWN.format({
      days: s,
      hours: n,
      minutes: l
    })
  })
}

function U(e) {
  let {
    guild: t,
    guildBoostSlots: s,
    availableGuildBoostSlots: l
  } = e, i = n.useContext(C.AnalyticsContext), {
    analyticsLocations: r
  } = (0, E.default)(), o = t.premiumSubscriberCount, d = s.sort((e, t) => Number(null != e.premiumGuildSubscription ? e.premiumGuildSubscription.id : 0) - Number(null != t.premiumGuildSubscription ? t.premiumGuildSubscription.id : 0))[0];
  if (null == d) return null;
  let S = null != d.premiumGuildSubscription ? M.default.extractTimestamp(d.premiumGuildSubscription.id) : 0,
    T = (0, O.getAppliedGuildBoostMonths)(S),
    m = null != t.banner ? A.default.getGuildBannerURL(t) : null;
  return (0, a.jsxs)("div", {
    className: j.guildHeader,
    children: [(0, a.jsx)("div", {
      className: j.guildHeaderBackground,
      style: {
        backgroundImage: null != m ? "url(".concat(m, ")") : void 0
      }
    }), (0, a.jsx)(g.default, {
      guild: t,
      className: j.guildIcon
    }), (0, a.jsxs)("div", {
      className: j.guildHeaderContent,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        className: j.guildName,
        children: t.name
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        className: j.guildSubscriptionDuration,
        children: P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_DURATION.format({
          months: T,
          date: new Date(S)
        })
      }), (0, a.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: j.guildSubscriberCount,
        children: [(0, a.jsx)(I.default, {
          className: j.guildSubscriberCountIcon
        }), (0, a.jsx)("div", {
          children: P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
            subscriberCount: s.length
          })
        }), 0 !== l.length ? (0, a.jsx)(u.Anchor, {
          onClick: () => {
            if (0 === l.length) return;
            let e = {
              ...i.location,
              section: L.AnalyticsSections.SETTINGS_PREMIUM
            };
            (0, D.addAppliedGuildBoosts)({
              analyticsLocations: r,
              analyticsLocation: e,
              guild: t
            })
          },
          className: j.guildSubscribeButton,
          children: P.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
        }) : null]
      })]
    }), (0, a.jsx)("div", {
      className: j.guildGemIndicatorContainer,
      children: (0, a.jsx)(u.Clickable, {
        onClick: function() {
          (0, f.transitionToGuild)(t.id), (0, c.popLayer)()
        },
        children: (0, a.jsx)(h.default, {
          className: j.gemIndicator,
          subscriberCount: o,
          guildId: t.id
        })
      })
    })]
  })
}

function B(e) {
  let {
    guildBoostSlot: t,
    premiumSubscription: s,
    hasCancelableGuildBoostSlot: n
  } = e, l = null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, r = null != l && l > new Date, o = null != t.premiumGuildSubscription ? new Date(M.default.extractTimestamp(t.premiumGuildSubscription.id)) : null, d = (0, O.isGuildBoostSlotCanceled)(t), c = d ? p.default : I.default;
  return (0, a.jsxs)("div", {
    className: j.guildSubscriptionSlot,
    children: [(0, a.jsx)(c, {
      className: i(j.guildSubscriptionSlotIcon, {
        [j.guildSubscriptionSlotIconCanceled]: d
      })
    }), (0, a.jsxs)("div", {
      className: j.guildSubscriptionSlotContent,
      children: [(0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: j.guildSubscriptionCreationDate,
        children: null != o ? P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CREATION_DATE.format({
          date: o
        }) : P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UNUSED_SLOT_DESCRIPTION
      }), (0, a.jsxs)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [r && null != l ? (0, a.jsx)(b, {
          deadline: l.getTime()
        }) : null, r && d ? " • " : null, d ? P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
          date: s.currentPeriodEnd
        }) : null]
      })]
    }), (0, a.jsx)(u.Popout, {
      renderPopout: function(e) {
        let {
          closePopout: l
        } = e;
        return (0, a.jsx)(v.default, {
          onClose: l,
          guildBoostSlot: t,
          premiumSubscription: s,
          hasCancelableGuildBoostSlot: n
        })
      },
      position: "right",
      align: "center",
      children: e => (0, a.jsx)(u.Clickable, {
        ...e,
        "aria-label": P.default.Messages.MORE_OPTIONS,
        className: j.guildSubscriptionSlotMenuIcon,
        children: (0, a.jsx)(N.default, {})
      })
    })]
  })
}

function y(e) {
  let {
    guildId: t,
    guildBoostSlots: s,
    premiumSubscription: n,
    availableGuildBoostSlots: l,
    hasCancelableGuildBoostSlot: i
  } = e, r = (0, d.useStateFromStores)([T.default], () => "0" !== t ? T.default.getGuild(t) : null);
  return null == r && "0" !== t ? null : (0, a.jsxs)("div", {
    className: j.guild,
    children: [null != r ? (0, a.jsx)(U, {
      guild: r,
      guildBoostSlots: s,
      availableGuildBoostSlots: l
    }) : null, (0, a.jsx)("div", {
      className: j.guildSubscriptionSlots,
      children: s.map(e => (0, a.jsx)(B, {
        guildBoostSlot: e,
        premiumSubscription: n,
        hasCancelableGuildBoostSlot: i
      }, e.id))
    })]
  })
}

function F() {
  let e = (0, d.useStateFromStores)([_.default], () => _.default.getPremiumTypeSubscription()),
    t = (0, d.useStateFromStores)([m.default], () => m.default.boostSlots),
    s = o(t).filter(e => e.isAvailable()).value(),
    n = o(t).groupBy(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return null != t ? t.guildId : "0"
    }).value(),
    l = n["0"],
    i = Object.keys(n).filter(e => "0" !== e);
  if (0 === i.length && null == l || null == e) return null;
  let r = o(t).filter(e => {
      let {
        canceled: t
      } = e;
      return !t
    }).value().length,
    c = R.default.getNumIncludedPremiumGuildSubscriptionSlots(e.planId),
    S = r > c;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.Text, {
      variant: "text-sm/normal",
      className: j.blurb,
      children: P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBTITLE.format({
        helpdeskArticle: x.default.getArticleURL(L.HelpdeskArticles.GUILD_SUBSCRIPTIONS)
      })
    }), null != l ? (0, a.jsx)(y, {
      guildId: "0",
      guildBoostSlots: l,
      premiumSubscription: e,
      availableGuildBoostSlots: s,
      hasCancelableGuildBoostSlot: S
    }) : null, i.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-deprecated-12/semibold",
        className: j.subSectionHeader,
        children: P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ACTIVE_TITLE
      }), i.map(t => (0, a.jsx)(y, {
        guildId: t,
        guildBoostSlots: n[t],
        premiumSubscription: e,
        availableGuildBoostSlots: s,
        hasCancelableGuildBoostSlot: S
      }, t))]
    }) : null]
  })
}