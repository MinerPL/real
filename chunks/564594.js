"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("37983");
l("884691");
var a = l("376341"),
  s = l.n(a),
  i = l("77078"),
  r = l("145131"),
  o = l("936629"),
  u = l("996866"),
  d = l("228974");

function c(e) {
  let {
    activity: t,
    user: l,
    source: a,
    ...c
  } = e, {
    label: f,
    tooltip: m,
    loading: p,
    disabled: E,
    onClick: T
  } = (0, u.useSpotifyPlayAction)(t, l, a);
  return (0, n.jsx)(i.Tooltip, {
    text: m,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: l
      } = e;
      return (0, n.jsx)(i.Button, {
        ...s(c, ["channelId", "guildId"]),
        onClick: T,
        onMouseEnter: t,
        onMouseLeave: l,
        disabled: E,
        submitting: p,
        children: (0, n.jsxs)(r.default, {
          align: r.default.Align.CENTER,
          children: [(0, n.jsx)(o.default, {
            className: d.spotifyButtonLogo
          }), f]
        })
      })
    }
  })
}