"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("996866");

function i(e) {
  let {
    activity: t,
    user: n,
    source: i,
    ...r
  } = e, {
    label: o,
    tooltip: u,
    loading: d,
    disabled: c,
    onClick: f
  } = (0, a.useSpotifyJoinAction)(t, n, i);
  return (0, s.jsx)(l.Tooltip, {
    text: u,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, s.jsx)(l.Button, {
        ...r,
        color: c ? l.Button.Colors.PRIMARY : l.Button.Colors.GREEN,
        onClick: f,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: !d && c,
        submitting: d,
        children: o
      })
    }
  })
}