"use strict";
a.r(t), a.d(t, {
  default: function() {
    return Q
  }
});
var n = a("37983"),
  i = a("884691"),
  l = a("627445"),
  s = a.n(l),
  d = a("446674"),
  u = a("77078"),
  r = a("126501"),
  o = a("388142"),
  c = a("473528"),
  f = a("578899"),
  g = a("685058"),
  p = a("498139"),
  E = a("578411"),
  h = a("383292"),
  I = a("163139"),
  M = a("230947"),
  m = a("747867"),
  x = a("58622"),
  _ = a("413266"),
  S = a("701203"),
  v = a("95039"),
  A = a("255812"),
  G = a("199938"),
  C = a("592407"),
  R = a("529932"),
  b = a("267567"),
  T = a("724026"),
  L = a("393414"),
  j = a("26989"),
  D = a("957255"),
  N = a("282109"),
  y = a("697218"),
  U = a("756609"),
  H = a("660279"),
  O = a("171710"),
  P = a("796454"),
  V = a("919765"),
  w = a("474571"),
  F = a("118503"),
  k = a("987772"),
  B = a("351825"),
  z = a("561359"),
  Y = a("148337"),
  Z = a("599110"),
  W = a("49111"),
  K = a("695838"),
  X = a("782340");

function q(e, t) {
  (0, u.openModal)(a => (0, n.jsx)(E.GuildLeaveConfirmModalContents, {
    ...a,
    guild: e,
    discoverableGuildData: t
  }))
}
let J = i.memo(function(e) {
  let {
    guild: t,
    onClose: l,
    onSelect: E
  } = e, J = (0, d.useStateFromStores)([y.default], () => y.default.getCurrentUser());
  s(null != J, "GuildHeaderPopout: user cannot be undefined"), i.useEffect(() => {
    Z.default.track(W.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let Q = (0, d.useStateFromStores)([N.default], () => N.default.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: $,
      canManageChannels: ee,
      showGuildAnalytics: et
    } = (0, d.useStateFromStoresObject)([D.default], () => {
      let e = D.default.can(W.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(W.GuildFeatures.COMMUNITY);
      return {
        canAccessSettings: D.default.canAccessGuildSettings(t),
        canManageChannels: D.default.can(W.Permissions.MANAGE_CHANNELS, t),
        showGuildAnalytics: (0, G.staffOnlyGuildSettingsAccess)(t.id) || e
      }
    }, [t]),
    ea = (0, S.useCanReportRaid)(t),
    en = t.isOwner(J),
    ei = (0, d.useStateFromStores)([b.default], () => b.default.isLurking(t.id), [t.id]),
    el = (0, d.useStateFromStores)([j.default], () => j.default.isCurrentUserGuest(t.id)),
    es = (0, A.default)(t.id, !0),
    ed = (0, g.default)(t),
    eu = (0, x.default)({
      source: W.InstantInviteSources.GUILD_HEADER,
      guild: t
    }),
    er = (0, M.default)({
      guildId: t.id,
      userId: J.id,
      analyticsLocation: {
        page: W.AnalyticsPages.GUILD_CHANNEL,
        section: W.AnalyticsSections.GUILD_DROPDOWN_MENU
      },
      icon: k.default
    }),
    eo = t.hasFeature(W.GuildFeatures.HUB),
    ec = t.id === K.FAVORITES_RAW_GUILD_ID,
    ef = (0, T.default)(t.id),
    eg = (0, h.default)(t),
    ep = (0, I.default)(t),
    eE = (0, m.default)(t, !0),
    {
      isFavoritesPerk: eh
    } = (0, p.useFavoritesServerExperiment)("GuildHeaderPopout"),
    {
      triggerDeadchat: eI
    } = f.SimpleDeadchatPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    {
      triggerGamingStats: eM
    } = c.GamingStatsPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    em = (0, R.useExpressionSourceGuildDataForGuildLeaveModal)(t);
  return ei || el ? (0, n.jsx)(u.Menu, {
    onSelect: E,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: (0, n.jsx)(u.MenuItem, {
      id: "leave-guild",
      label: X.default.Messages.LEAVE_SERVER,
      icon: P.default,
      action: () => {
        C.default.leaveGuild(t.id), !el && (0, L.transitionTo)(W.Routes.GUILD_DISCOVERY)
      }
    })
  }) : ec ? (0, n.jsxs)(u.Menu, {
    onSelect: E,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(u.MenuGroup, {
      children: [eh && (0, n.jsx)(u.MenuItem, {
        id: "add-channel",
        label: X.default.Messages.FAVORITES_ADD_A_CHANNEL,
        color: "brand",
        icon: B.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("746039").then(a.bind(a, "746039"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      }), (0, n.jsx)(u.MenuItem, {
        id: "create-category",
        label: X.default.Messages.CREATE_CATEGORY,
        icon: V.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("515680").then(a.bind(a, "515680"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      })]
    }), (0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: X.default.Messages.HIDE_MUTED_CHANNELS,
        checked: Q,
        action: () => r.default.toggleCollapseGuild(t.id)
      })
    })]
  }) : eo ? (0, n.jsxs)(u.Menu, {
    onSelect: E,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(u.MenuGroup, {
      children: [$ ? (0, n.jsx)(u.MenuItem, {
        id: "settings",
        label: X.default.Messages.SERVER_SETTINGS,
        icon: w.default,
        action: () => {
          C.default.open(t.id, W.GuildSettingsSections.OVERVIEW)
        }
      }) : null, eu, (0, n.jsx)(u.MenuItem, {
        id: "privacy",
        label: X.default.Messages.PRIVACY_SETTINGS,
        icon: Y.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("349406").then(a.bind(a, "349406"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      }), er]
    }), en ? null : (0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuItem, {
        id: "leave",
        label: X.default.Messages.LEAVE_HUB,
        icon: P.default,
        color: "danger",
        action: () => q(t, em)
      })
    })]
  }) : (0, n.jsxs)(u.Menu, {
    onSelect: E,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuItem, {
        id: "premium-subscribe",
        label: X.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
        icon: F.default,
        action: () => {
          (0, v.openGuildBoostingMarketingModal)({
            guildId: t.id,
            location: {
              section: W.AnalyticsSections.GUILD_HEADER_POPOUT
            }
          })
        }
      })
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [en && J.isStaff() && eI ? (0, n.jsx)(u.MenuItem, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: O.default,
        action: () => {
          (0, o.forcePrompt)(t.id, W.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, en && J.isStaff() && eM ? (0, n.jsx)(u.MenuItem, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: O.default,
        action: () => {
          (0, o.forcePrompt)(t.id, W.MessageTypes.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, eu, $ ? (0, n.jsx)(u.MenuItem, {
        id: "settings",
        label: X.default.Messages.SERVER_SETTINGS,
        icon: w.default,
        action: () => {
          C.default.open(t.id, W.GuildSettingsSections.OVERVIEW)
        }
      }) : null, et ? (0, n.jsx)(u.MenuItem, {
        id: "insights",
        label: X.default.Messages.SERVER_INSIGHTS,
        icon: U.default,
        action: () => C.default.open(t.id, W.GuildSettingsSections.ANALYTICS)
      }) : null, ee ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u.MenuItem, {
          id: "create-channel",
          label: X.default.Messages.CREATE_CHANNEL,
          icon: B.default,
          action: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await a.el("581354").then(a.bind(a, "581354"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: W.ChannelTypes.GUILD_TEXT,
              guildId: t.id
            })
          })
        }), (0, n.jsx)(u.MenuItem, {
          id: "create-category",
          label: X.default.Messages.CREATE_CATEGORY,
          icon: V.default,
          action: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await a.el("581354").then(a.bind(a, "581354"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: W.ChannelTypes.GUILD_CATEGORY,
              guildId: t.id
            })
          })
        })]
      }) : null, es, eg, ep, ed]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [ef, (0, n.jsx)(u.MenuItem, {
        id: "notifications",
        label: X.default.Messages.NOTIFICATION_SETTINGS,
        icon: H.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("747593").then(a.bind(a, "747593"));
          return a => (0, n.jsx)(e, {
            ...a,
            guildId: t.id
          })
        })
      }), (0, n.jsx)(u.MenuItem, {
        id: "privacy",
        label: X.default.Messages.PRIVACY_SETTINGS,
        icon: Y.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("349406").then(a.bind(a, "349406"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      })]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [er, (0, n.jsx)(u.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: X.default.Messages.HIDE_MUTED_CHANNELS,
        checked: Q,
        action: () => r.default.toggleCollapseGuild(t.id)
      })]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [eE, ea && t.isCommunity() ? (0, n.jsx)(u.MenuItem, {
        id: "report-raid",
        label: X.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: z.default,
        color: "danger",
        action: () => (0, _.openReportRaidModal)(t.id)
      }) : null, en ? null : (0, n.jsx)(u.MenuItem, {
        id: "leave",
        label: X.default.Messages.LEAVE_SERVER,
        icon: P.default,
        color: "danger",
        action: () => q(t, em)
      })]
    })]
  })
});
var Q = J