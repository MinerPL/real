"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("987317"),
  l = n("990766"),
  r = n("158998"),
  o = n("782340");

function u(e) {
  let {
    applicationStreams: t
  } = e;
  return t.map(e => {
    let {
      stream: t,
      streamUser: n
    } = e;
    return (0, a.jsx)(s.MenuItem, {
      id: "spectate-".concat(t.ownerId),
      action: () => {
        i.default.selectVoiceChannel(t.channelId), (0, l.watchStreamAndTransitionToStream)(t)
      },
      label: o.default.Messages.WATCH_USER_STREAM.format({
        streamerName: r.default.getName(n)
      })
    }, "spectate-".concat(t.ownerId))
  })
}