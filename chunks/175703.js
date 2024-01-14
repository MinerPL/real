"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("184727"),
  i = e => {
    let {
      entry: t,
      forceLightTheme: n,
      hideEditButton: i,
      children: r,
      onRequestOpen: o,
      onRequestClose: u
    } = e;
    return (0, a.jsx)(l.Popout, {
      onRequestOpen: o,
      onRequestClose: u,
      animation: l.Popout.Animation.NONE,
      position: "bottom",
      spacing: 4,
      align: "right",
      renderPopout: e => {
        let {
          closePopout: l
        } = e;
        return (0, a.jsx)(s.default, {
          entry: t,
          closePopout: l,
          forceLightTheme: n,
          hideEditButton: i
        })
      },
      children: r
    })
  }