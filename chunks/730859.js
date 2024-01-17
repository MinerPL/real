"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("222007");
var n = a("37983"),
  l = a("884691"),
  s = a("414456"),
  i = a.n(s),
  r = a("917351"),
  o = a.n(r),
  u = a("77078"),
  d = a("272030"),
  c = a("427302"),
  m = a("158998"),
  h = a("393724");

function g(e) {
  let {
    className: t,
    maxUsers: s,
    users: r,
    guildId: g,
    onFocus: f
  } = e, [A, _] = l.useState(!1);

  function x() {
    return (0, n.jsx)(u.Dialog, {
      className: h.popoutWrapper,
      children: (0, n.jsx)(u.Scroller, {
        className: h.scroller,
        children: r.map(e => (0, n.jsx)(c.default, {
          guildId: g,
          user: e,
          nick: m.default.getName(e),
          onContextMenu: t => (0, d.openContextMenuLazy)(t, async () => {
            let {
              default: t
            } = await a.el("406784").then(a.bind(a, "406784"));
            return a => (0, n.jsx)(t, {
              ...a,
              user: e
            })
          }, {
            onClose: () => _(!1)
          })
        }, e.id))
      })
    })
  }
  return r.length <= 0 ? null : (0, n.jsx)("div", {
    className: i(t, h.avatars),
    children: function() {
      let e = o(r).take(s).map(e => {
          let t = m.default.getName(e);
          return (0, n.jsx)(u.TooltipContainer, {
            text: t,
            className: h.avatar,
            children: (0, n.jsx)(u.Avatar, {
              src: e.getAvatarURL(g, 24),
              "aria-label": t,
              size: u.AvatarSizes.SIZE_24
            })
          }, e.id)
        }).value(),
        t = r.length - s;
      return t > 0 && (e[e.length - 1] = (0, n.jsx)(u.Popout, {
        renderPopout: x,
        shouldShow: A,
        position: "bottom",
        onRequestClose: () => _(!1),
        children: () => (0, n.jsxs)(u.Button, {
          className: i(h.avatar, h.overflow),
          onFocus: f,
          onClick: () => _(!0),
          look: u.Button.Looks.BLANK,
          size: u.Button.Sizes.NONE,
          children: ["+", t + 1]
        })
      }, "overflow")), e
    }()
  })
}