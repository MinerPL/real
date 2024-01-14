"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var l = n("77078"),
  s = n("95039"),
  r = n("305961"),
  a = n("957255"),
  o = n("145131"),
  c = n("181114"),
  u = n("599110"),
  d = n("488464"),
  f = n("998716"),
  h = n("923510"),
  p = n("49111"),
  v = n("646718"),
  C = n("782340"),
  m = n("400237");

function E(e) {
  var t;
  let n, {
      channel: E,
      transitionState: g,
      onClose: I
    } = e,
    S = r.default.getGuild(E.guild_id),
    _ = null !== (t = null == S ? void 0 : S.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
    L = !!(null == S ? void 0 : S.isCommunity()),
    M = C.default.Messages.STAGE_FULL_TITLE,
    x = L ? _ < p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED : (null == S ? void 0 : S.premiumTier) !== p.BoostedGuildTiers.TIER_3 && _ <= p.MAX_STAGE_VIDEO_USER_LIMIT_TIER2,
    A = a.default.can(h.MODERATE_STAGE_CHANNEL_PERMISSIONS, E);
  n = L && (null == S ? void 0 : S.premiumTier) === p.BoostedGuildTiers.TIER_3 ? _ <= p.MAX_STAGE_VIDEO_USER_LIMIT_UNCAPPED ? C.default.Messages.STAGE_FULL_BOOST_MORE_BODY : C.default.Messages.STAGE_FULL_MAX_BODY : x ? C.default.Messages.STAGE_FULL_BODY : C.default.Messages.STAGE_FULL_MAX_BODY;
  let T = () => {
      I(), u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
        guild_id: E.guild_id,
        type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
        is_moderator: A,
        action: v.BoostingUpsellAction.DISMISS
      })
    },
    R = d.default.getMutableParticipants(E.id, f.StageChannelParticipantNamedIndex.SPEAKER),
    N = R.filter(e => e.type === f.StageChannelParticipantTypes.VOICE),
    y = N.length,
    b = d.default.getParticipantCount(E.id, f.StageChannelParticipantNamedIndex.AUDIENCE);
  return u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_VIEWED, {
    guild_id: E.guild_id,
    type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
    is_moderator: A,
    listener_count: y + b
  }), (0, i.jsxs)(l.ModalRoot, {
    size: l.ModalSize.SMALL,
    transitionState: g,
    "aria-label": M,
    children: [(0, i.jsxs)(l.ModalHeader, {
      justify: o.default.Justify.END,
      separator: !1,
      className: m.header,
      children: [(0, i.jsx)("div", {
        className: m.fullArt
      }), (0, i.jsx)(l.ModalCloseButton, {
        onClick: I
      })]
    }), (0, i.jsxs)(l.ModalContent, {
      className: m.content,
      children: [(0, i.jsx)(l.Heading, {
        variant: "heading-xl/bold",
        children: M
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/medium",
        children: n
      })]
    }), (0, i.jsx)(l.ModalFooter, {
      className: m.footer,
      children: x ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Button, {
          look: l.ButtonLooks.LINK,
          className: m.noThanksButton,
          color: l.ButtonColors.CUSTOM,
          size: l.ButtonSizes.SMALL,
          onClick: T,
          children: C.default.Messages.NO_THANKS
        }), (0, i.jsx)(c.default, {
          onClick: () => {
            I(), (0, s.openGuildBoostingMarketingModal)({
              guildId: E.guild_id,
              location: {
                section: p.AnalyticsSections.STAGE_VIDEO_LIMIT
              }
            }), u.default.track(p.AnalyticEvents.BOOSTING_UPSELL_CLICKED, {
              guild_id: E.guild_id,
              type: v.PremiumUpsellTypes.VIDEO_STAGE_LIMIT,
              is_moderator: A,
              action: v.BoostingUpsellAction.BOOST
            })
          },
          size: l.ButtonSizes.SMALL,
          className: m.boostButton,
          children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
        })]
      }) : (0, i.jsx)(l.Button, {
        onClick: T,
        size: l.ButtonSizes.SMALL,
        color: l.ButtonColors.CUSTOM,
        className: m.boostButton,
        children: C.default.Messages.GOT_IT
      })
    })]
  })
}