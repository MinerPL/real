"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  i = n("419830"),
  l = n("153014"),
  r = n("316133"),
  o = n("782340"),
  u = n("916333"),
  d = function(e) {
    let {
      name: t,
      channel: n
    } = e, d = (0, s.useStateFromStoresArray)([r.default], () => r.default.getVoiceStatesForChannel(n).map(e => {
      let {
        user: t
      } = e;
      return t
    }), [n]), c = (0, i.getChannelIconComponent)(n);
    return (0, a.jsx)(l.GuildNoticeBody, {
      heading: o.default.Messages.STAGE_CHANNEL_LIVE_NOW,
      topic: t,
      location: o.default.Messages.HUB_STUDY_ROOM_VOICE_CHANNEL_TOOLTIP,
      locationIcon: null != c ? (0, a.jsx)(c, {
        width: 16,
        height: 16,
        className: u.icon
      }) : null,
      children: (0, a.jsx)(l.LiveVoiceOrStageChannelNotice, {
        channel: n,
        speakers: d,
        voiceType: l.VoiceChannelType.STUDY_ROOM
      })
    })
  }