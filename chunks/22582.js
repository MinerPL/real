"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var i = n("14487"),
  l = n("77078"),
  s = n("847511"),
  u = n("491572"),
  r = n("782340");
let d = {
  [u.PollMessageContextItemTypes.END_EARLY]: e => (0, a.jsx)(l.MenuItem, {
    id: "end-poll-early",
    label: r.default.Messages.POLL_END_EARLY,
    icon: i.ClockXIcon,
    action: () => {
      s.default.endPollEarly({
        channelId: e.channel_id,
        messageId: e.id
      })
    }
  })
};

function o(e, t) {
  let n = (0, u.default)(e, t);
  return 0 === n.length ? null : (0, a.jsx)(a.Fragment, {
    children: n.map(t => d[t](e))
  })
}