"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("208021"),
  i = n("982108"),
  l = n("599110"),
  r = n("659500"),
  o = n("24927"),
  u = n("745772"),
  d = n("49111");

function c(e) {
  let {
    index: t,
    className: n,
    channel: c,
    user: f,
    hasSingleMessageRequest: E
  } = e;
  return (0, a.jsx)(o.default, {
    index: t,
    className: n,
    isFocused: !1,
    channel: c,
    user: f,
    onClick: e => {
      e.stopPropagation(), s.default.openPrivateChannelAsSidebar({
        channelId: c.id,
        baseChannelId: i.MESSAGE_REQUESTS_BASE_CHANNEL_ID,
        hasSingleMessageRequest: E
      }), l.default.track(d.AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, {
        is_spam: !0,
        channel_id: c.id,
        other_user_id: f.id
      }), setTimeout(() => {
        r.ComponentDispatch.dispatch(d.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: c.id
        })
      }, 0)
    },
    children: e => (0, a.jsx)(u.default, {
      active: e,
      user: f,
      channel: c
    })
  })
}