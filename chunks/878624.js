"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("884691"),
  a = n("316693"),
  l = n("446674"),
  s = n("716241"),
  o = n("701916"),
  r = n("939398"),
  d = n("42203"),
  u = n("923959"),
  c = n("26989"),
  f = n("305961"),
  h = n("957255"),
  p = n("18494"),
  g = n("162771"),
  m = n("697218"),
  E = n("901165"),
  S = n("819068"),
  v = n("49111");
class y extends i.Component {
  componentDidUpdate(e) {
    if (this.props.locked) return null;
    let {
      selectedGuild: t,
      selectedChannel: n,
      isNSFWChannel: i,
      isMemberPending: a,
      hasPreviewEnabled: l,
      postableChannelCount: u
    } = this.props;
    if ((t !== e.selectedGuild || a && !e.isMemberPending) && (0, r.trackWithOverlayMetadata)(v.AnalyticEvents.GUILD_VIEWED, {
        ...a ? {
          is_pending: a,
          preview_enabled: l
        } : {},
        postable_channels: u
      }), null != n && n !== e.selectedChannel) {
      let e = (0, o.collectThreadMetadata)(d.default.getChannel(n), !0);
      (0, r.trackWithOverlayMetadata)(v.AnalyticEvents.CHANNEL_OPENED, {
        channel_is_nsfw: i,
        ...e,
        ...(0, s.getChannelOpenedMetadata)(n)
      })
    }
  }
  render() {
    return null
  }
}
var C = l.default.connectStores([g.default, p.default, d.default, f.default, m.default, E.default, c.default, u.default, h.default], () => {
  var e, t, n;
  let i = g.default.getGuildId(),
    l = p.default.getChannelId(i),
    s = d.default.getChannel(l),
    o = f.default.getGuild(i),
    r = m.default.getCurrentUser(),
    y = null !== (t = u.default.getChannels(null == o ? void 0 : o.id)[u.GUILD_SELECTABLE_CHANNELS_KEY]) && void 0 !== t ? t : [],
    C = y.length > 0 ? y.filter(e => {
      let {
        channel: t
      } = e;
      return h.default.can(a.default.combine(v.Permissions.SEND_MESSAGES, v.Permissions.VIEW_CHANNEL), t)
    }).length : 0,
    N = null != r && null != i && null !== (n = null === (e = c.default.getMember(i, r.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== n && n;
  return {
    selectedGuild: i,
    selectedChannel: l,
    isNSFWChannel: null == s ? void 0 : s.nsfw,
    locked: E.default.isUILocked((0, S.getPID)()),
    hasPreviewEnabled: null == o ? void 0 : o.features.has(v.GuildFeatures.PREVIEW_ENABLED),
    isMemberPending: N,
    postableChannelCount: C
  }
})(y)