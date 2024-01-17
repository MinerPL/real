"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("151426"),
  l = n("819855"),
  r = n("77078"),
  o = n("685665"),
  u = n("593094"),
  d = n("951169"),
  c = n("384997"),
  f = n("379532"),
  E = n("526843"),
  _ = n("442619"),
  h = n("592407"),
  C = n("465511"),
  I = n("519119"),
  T = n("5667"),
  S = n("79798"),
  m = n("599110"),
  p = n("427459"),
  A = n("701909"),
  g = n("246351"),
  N = n("49111"),
  R = n("988268"),
  O = n("994428"),
  L = n("944305"),
  v = n("646718"),
  M = n("782340"),
  P = n("706904"),
  D = n("142190"),
  y = n("288562"),
  x = n("553274"),
  b = n("824489"),
  U = n("311492"),
  G = n("776432");

function j(e) {
  null != e && h.default.open(e.id, N.GuildSettingsSections.OVERVIEW, {
    section: N.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR
  }, N.GuildSettingsSubsections.DISPLAY)
}

function w(e, t) {
  t && h.default.open(e.id, N.GuildSettingsSections.DISCOVERY)
}

function k(e, t) {
  null != t && ((0, p.isTierUnlocked)(t, N.BoostedGuildTiers.TIER_1) ? h.default.open(t.id, N.GuildSettingsSections.OVERVIEW, {
    section: N.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH
  }, N.GuildSettingsSubsections.INVITE) : (0, f.default)({
    analyticsLocations: e,
    analyticsSourceLocation: N.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH,
    guild: t,
    perks: (0, L.guildInviteUpsellPerks)()
  }))
}

function F(e) {
  let {
    renderPopout: t,
    renderGuildHeaderDropdownButton: n
  } = e;
  return (0, a.jsx)(r.Popout, {
    renderPopout: () => (0, a.jsx)("div", {
      onClick: e => e.stopPropagation(),
      children: t
    }),
    position: "bottom",
    align: "center",
    animation: r.Popout.Animation.TRANSLATE,
    shouldShow: !0,
    children: () => n()
  })
}
var H = s.memo(function(e) {
  let {
    contentTypes: t,
    theme: n,
    guild: s,
    renderGuildHeaderDropdownButton: r
  } = e, {
    analyticsLocations: f
  } = (0, o.default)(), L = () => {
    m.default.track(N.AnalyticEvents.TOOLTIP_VIEWED, {
      type: v.PremiumUpsellTypes.PREMIUM_PROGRESS_BAR,
      location: {
        page: N.AnalyticsPages.GUILD_CHANNEL
      }
    })
  }, H = () => {
    m.default.track(N.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: v.PremiumUpsellTypes.INVITE_SPLASH_UPSELL,
      location: {
        page: N.AnalyticsPages.GUILD_CHANNEL
      },
      location_stack: f
    })
  }, B = (0, l.isThemeDark)(n) ? x : b, [V, Y] = (0, c.useSelectedDismissibleContent)(t, O.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS);
  return (0, a.jsx)(a.Fragment, {
    children: (() => {
      switch (V) {
        case i.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(T.default, {
              onComponentMount: L,
              header: M.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: B,
                className: D.fullWidthImage
              }),
              content: M.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CONTENT.format(),
              buttonCTA: M.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: M.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => j(),
              onClick: () => j(s),
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(T.default, {
              onComponentMount: L,
              header: M.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: B,
                className: D.fullWidthImage
              }),
              content: M.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_CONTENT.format(),
              buttonCTA: M.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: M.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => j(),
              onClick: () => j(s),
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(E.default, {
              guildId: s.id,
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(d.default, {
              onClick: () => w(s, !0),
              onSecondaryClick: () => w(s),
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(u.default, {
              guild: s,
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.GUILD_HEADER_INVITE_SPLASH:
          let e = (0, p.isTierUnlocked)(s, N.BoostedGuildTiers.TIER_1) ? M.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT.format() : M.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT_LOCKED.format({
              boostCount: (0, p.getNumberOfAppliedBoostsNeededForTier)(s, N.BoostedGuildTiers.TIER_1)
            }),
            t = (0, p.isTierUnlocked)(s, N.BoostedGuildTiers.TIER_1) ? M.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS : M.default.Messages.LEARN_MORE;
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(T.default, {
              onComponentMount: H,
              header: M.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: y,
                className: D.fullWidthImage
              }),
              content: e,
              buttonCTA: t,
              secondaryButtonCTA: M.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => k(f),
              onClick: () => k(f, s),
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(C.default, {
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(T.default, {
              className: P.tooltipOverrideColor,
              header: M.default.Messages.ACTIVE_THREADS_UPSELL_HEADER,
              content: M.default.Messages.ACTIVE_THREADS_UPSELL_CONTENT,
              buttonCTA: M.default.Messages.GOT_IT,
              onClick: () => Y(O.ContentDismissActionType.UNKNOWN),
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.CLYDE_GUILD_HEADER_NUX:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(T.default, {
              header: (0, a.jsxs)(a.Fragment, {
                children: [M.default.Messages.CLYDE_MODAL_TITLE, (0, a.jsx)(S.default, {
                  className: P.botTag,
                  type: R.BotTagTypes.AI,
                  verified: !0
                })]
              }),
              headerClassName: P.clydeTooltipHeaderContainer,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: U,
                className: P.clydeTooltipAsset
              }),
              content: M.default.Messages.CLYDE_GUILD_TOOLTIP_DETAILS.format({
                learnMoreURL: A.default.getArticleURL(N.HelpdeskArticles.CLYDE_AI)
              }),
              buttonCTA: M.default.Messages.ENABLE,
              onClick: () => {
                h.default.open(s.id, N.GuildSettingsSections.INTEGRATIONS)
              },
              secondaryButtonCTA: M.default.Messages.DISMISS,
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(T.default, {
              header: M.default.Messages.SOUNDBOARD_TOOLTIP_TITLE_NEW,
              content: M.default.Messages.SOUNDBOARD_TOOLTIP_BODY,
              buttonCTA: M.default.Messages.CHECK_IT_OUT,
              secondaryButtonCTA: M.default.Messages.NO_THANKS,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: G,
                className: D.fullWidthImage
              }),
              onClick: () => {
                h.default.open(s.id, N.GuildSettingsSections.ROLES), h.default.selectRole(s.id, M.default.Messages.USE_SOUNDBOARD)
              },
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.MEDIA_CHANNEL_UPSELL:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(I.default, {
              guildId: s.id,
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(_.default, {
              guildId: s.id,
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        case i.DismissibleContent.INVENTORY_GUILD_SETTINGS_MODMIN_COACHMARK_ROLLBACK:
          return (0, a.jsx)(F, {
            renderPopout: (0, a.jsx)(g.default, {
              guild: s,
              markAsDismissed: Y
            }),
            renderGuildHeaderDropdownButton: r
          });
        default:
          return r()
      }
    })()
  })
})