"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("151426"),
  l = n("10641"),
  r = n("179803"),
  o = n("592407"),
  u = n("599110"),
  d = n("164586"),
  c = n("49111"),
  E = n("994428"),
  f = n("782340"),
  _ = e => {
    let {
      guild: t,
      markAsDismissed: n
    } = e;
    s.useEffect(() => {
      (0, l.requestMarkDismissibleContentAsShown)(i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
    }, []);
    let _ = s.useCallback(() => {
        o.default.open(t.id, c.GuildSettingsSections.ONBOARDING), u.default.track(c.AnalyticEvents.UPSELL_CLICKED, {
          type: i.DismissibleContent[i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE],
          action: "primary"
        }), (0, l.markDismissibleContentAsDismissed)(i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, {
          dismissAction: E.ContentDismissActionType.PRIMARY
        }), (0, r.dismissedGuildOnboardingUpsell)(t.id, i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
      }, [t.id]),
      h = s.useCallback(() => {
        u.default.track(c.AnalyticEvents.UPSELL_CLICKED, {
          type: i.DismissibleContent[i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE],
          action: "dismiss"
        }), n(E.ContentDismissActionType.UNKNOWN), (0, r.dismissedGuildOnboardingUpsell)(t.id, i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
      }, [t.id, n]);
    return (0, a.jsx)(d.default, {
      guild: t,
      onDismissed: h,
      onClick: _,
      title: f.default.Messages.GUILD_ONBOARDING_CHANNEL_NOTICE_TITLE,
      message: f.default.Messages.GUILD_ONBOARDING_CHANNEL_NOTICE_MESSAGE,
      cta: f.default.Messages.CHECK_IT_OUT,
      trackingSource: c.ChannelNoticeCtaSources.GUILD_ONBOARDING_UPSELL_NOTICE,
      type: c.ChannelNoticeTypes.GUILD_ONBOARDING_UPSELL
    })
  }