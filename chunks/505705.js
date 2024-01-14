"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("97031"),
  o = s("592407"),
  d = s("900938"),
  u = s("479756"),
  c = s("507950"),
  E = s("393414"),
  _ = s("719887"),
  T = s("697218"),
  I = s("191814"),
  S = s("449008"),
  N = s("257869"),
  g = s("837008"),
  f = s("757715"),
  A = s("432153"),
  L = s("195367"),
  m = s("258984"),
  C = s("417186"),
  O = s("751886"),
  h = s("412939"),
  R = s("451419"),
  D = s("326127"),
  M = s("92447"),
  G = s("514377"),
  x = s("49111"),
  p = s("724210"),
  U = s("810367"),
  v = s("782340"),
  j = s("621452");

function P(e) {
  let {
    application: t,
    guild: s
  } = e, n = (0, g.useSubscriptionsSettings)(s.id), l = (0, g.useSubscriptionListingsForGuild)(s.id), i = l.some(e => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset), r = l.map(e => null == s ? void 0 : s.roles[e.role_id]), o = r.some(e => null != e && 0 !== e.color), d = l.some(e => e.role_benefits.benefits.length > 0), u = null != t && s.hasFeature(x.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED), c = [{
    title: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PAYMENT,
    items: [{
      description: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_PAYMENT_ENABLE,
      completed: u
    }]
  }, {
    title: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO,
    items: [{
      description: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_FORMAT,
      completed: !0
    }, {
      description: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_DESCRIPTION,
      completed: (null == n ? void 0 : n.description) != null && "" !== n.description
    }, {
      description: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_COVER_IMAGE,
      completed: (null == n ? void 0 : n.cover_image_asset) != null
    }]
  }, {
    title: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_TIERS,
    items: [{
      description: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_BASICS,
      completed: i
    }, {
      description: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_FLAIR,
      completed: o
    }, {
      description: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_PERKS,
      completed: d
    }]
  }];
  return (0, a.jsx)(R.default, {
    children: c
  })
}

function y(e) {
  let {
    application: t
  } = e, {
    teams: s
  } = (0, _.default)({
    refreshOnDepChange: !1
  }), n = s.find(e => {
    var s;
    return e.id === (null == t ? void 0 : null === (s = t.team) || void 0 === s ? void 0 : s.id)
  }), l = [U.PayoutAccountStatuses.ACTION_REQUIRED, U.PayoutAccountStatuses.BLOCKED, U.PayoutAccountStatuses.SUSPENDED];
  return (null == n ? void 0 : n.payout_account_status) != null && l.includes(null == n ? void 0 : n.payout_account_status) ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(I.default, {
      size: 16
    }), (0, a.jsx)(C.default, {
      children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYOUTS_PROBLEM_WARNING.format({
        url: x.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id)
      })
    }), (0, a.jsx)(I.default, {
      size: 16
    })]
  }) : null
}

function b(e) {
  let t, {
      guild: r,
      application: o
    } = e,
    u = (0, l.useStateFromStores)([d.default], () => d.default.getProps().subsection),
    c = null != o && r.hasFeature(x.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  t = c ? function(e) {
    if (e === x.GuildSettingsSubsections.ROLE_SUBSCRIPTION_EMOJI) return M.TabBarSection.EMOJIS;
    return M.TabBarSection.TIERS
  }(u) : M.TabBarSection.PAYMENT;
  let E = r.hasFeature(x.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING),
    _ = r.hasFeature(x.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
    I = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    S = r.isOwner(I);
  return n.useEffect(() => {
    E && S && (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("677879").then(s.bind(s, "677879"));
      return t => (0, a.jsx)(e, {
        ...t,
        guildId: r.id,
        requireTeamSetup: _
      })
    })
  }, [E, _, r.id, S]), (0, a.jsx)(N.GroupListingsFetchContextProvider, {
    guildId: r.id,
    refetchOnMount: !0,
    children: (0, a.jsx)(f.RoleSubscriptionSettingsDisabledContextProvider, {
      guildId: r.id,
      children: (0, a.jsx)(M.TabBarContextProvider, {
        initialTab: t,
        children: (0, a.jsx)(B, {
          guild: r,
          application: o
        })
      })
    })
  })
}

function B(e) {
  let t, {
      guild: s,
      application: n
    } = e,
    d = null != n && s.hasFeature(x.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
    {
      currentTab: _,
      setCurrentTab: I
    } = (0, M.useTabBarState)(),
    g = (0, N.useGroupListingsFetchContext)(),
    f = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    C = (0, L.default)(s.id),
    R = s.isOwner(f),
    U = () => {
      let e = s.roles[s.id];
      o.default.close();
      let t = {
        [e.id]: e
      };
      (0, u.startImpersonating)(s.id, {
        type: c.ImpersonateType.ROLE_SUBSCRIPTION,
        roles: t
      }), (0, A.announceCreateTemplateChannels)(s.id), (0, E.transitionTo)(x.Routes.CHANNEL(s.id, p.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
    };
  if (!g) return (0, a.jsx)(i.Spinner, {});
  switch (_) {
    case M.TabBarSection.BASIC_INFO:
      t = (0, a.jsx)(h.default, {
        guild: s
      });
      break;
    case M.TabBarSection.TIERS:
      t = (0, a.jsx)(D.default, {
        guildId: s.id
      });
      break;
    case M.TabBarSection.PAYMENT:
      t = (0, a.jsx)(O.default, {
        guild: s
      });
      break;
    case M.TabBarSection.EMOJIS:
      t = (0, a.jsx)(G.default, {
        guild: s
      });
      break;
    default:
      (0, S.assertNever)(_)
  }
  return (0, a.jsxs)("div", {
    className: j.container,
    children: [(0, a.jsxs)("div", {
      className: j.mainContent,
      children: [(0, a.jsx)(i.FormTitle, {
        tag: "h1",
        children: v.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
      }), (0, a.jsx)(i.FormText, {
        type: i.FormText.Types.DESCRIPTION,
        children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_DESCRIPTION
      }), (0, a.jsx)(m.default, {
        guild: s
      }), d && (0, a.jsx)(y, {
        application: n
      }), (0, a.jsxs)("div", {
        className: j.tabBarContainer,
        children: [(0, a.jsxs)(i.TabBar, {
          className: j.tabBar,
          "aria-label": v.default.Messages.OPTIONS,
          selectedItem: _,
          type: "top",
          look: "brand",
          onItemSelect: I,
          children: [(0, a.jsx)(r.default, {
            id: M.TabBarSection.BASIC_INFO,
            disabledTooltip: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !d,
            children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO
          }), (0, a.jsx)(r.default, {
            id: M.TabBarSection.TIERS,
            disabledTooltip: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !d,
            children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_TIERS
          }), (0, a.jsx)(r.default, {
            id: M.TabBarSection.EMOJIS,
            disabledTooltip: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
            disabled: !d,
            children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_EMOJI
          }), R ? (0, a.jsx)(i.TabBar.Item, {
            className: j.tabBarItem,
            id: M.TabBarSection.PAYMENT,
            children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PAYMENT
          }) : null]
        }), d && (0, a.jsx)("div", {
          className: j.previewButton,
          children: (0, a.jsx)(i.Tooltip, {
            text: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW_DISABLED,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: s
              } = e;
              return (0, a.jsx)(i.Button, {
                disabled: C,
                onMouseEnter: C ? t : void 0,
                onMouseLeave: C ? s : void 0,
                onClick: U,
                color: i.Button.Colors.PRIMARY,
                size: i.Button.Sizes.SMALL,
                grow: !C,
                look: i.Button.Looks.OUTLINED,
                className: j.previewButton,
                children: v.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW
              })
            }
          })
        })]
      }), t]
    }), (0, a.jsx)(P, {
      application: n,
      guild: s
    })]
  })
}