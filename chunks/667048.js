"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("446674"),
  l = n("963662"),
  r = n("95039"),
  o = n("525065"),
  u = n("49111"),
  d = n("994428"),
  c = n("782340"),
  f = n("367574");
class E extends s.PureComponent {
  render() {
    let {
      guild: e,
      memberCount: t,
      markAsDismissed: n
    } = this.props;
    return (0, a.jsx)(l.default, {
      guild: e,
      onDismissed: () => n(d.ContentDismissActionType.UNKNOWN),
      onClick: this.handleButtonClick,
      message: null == t || t < 30 ? c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE_SMALL_GUILD : c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE,
      cta: c.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_NOTICE_BUTTON,
      trackingSource: u.ChannelNoticeCtaSources.GUILD_SUBSCRIPTION_NOTICE,
      type: u.ChannelNoticeTypes.GUILD_BOOSTING,
      image: f,
      imageMarginX: 26
    })
  }
  constructor(...e) {
    super(...e), this.handleButtonClick = () => {
      let {
        guild: e
      } = this.props;
      (0, r.openGuildBoostingMarketingModal)({
        guildId: e.id,
        location: {
          section: u.AnalyticsSections.CHANNEL_NOTICE,
          object: u.AnalyticsObjects.SERVER_STATUS_CTA
        }
      })
    }
  }
}
var _ = i.default.connectStores([o.default], e => {
  let {
    guild: t
  } = e;
  return {
    memberCount: o.default.getMemberCount(t.id)
  }
})(E)