"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("545158"),
  o = n("370492"),
  u = n("584369"),
  d = n("471654"),
  c = n("496657"),
  f = n("758710"),
  h = n("664336"),
  E = n("701909"),
  m = n("782340");

function p() {
  let e = (0, s.useStateFromStores)([u.default], () => u.default.devToolsEnabled),
    [t, p] = l.useState(!1),
    [S, g] = l.useState(0),
    N = e => {
      clearTimeout(S), g(setTimeout(() => {
        p(e)
      }, 100))
    };
  return (0, a.jsx)("div", {
    onMouseEnter: () => N(!0),
    onMouseLeave: () => N(!1),
    children: (0, a.jsx)(i.Popout, {
      shouldShow: t,
      animation: i.Popout.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: !1,
      onRequestOpen: () => p(!0),
      onRequestClose: () => p(!1),
      renderPopout: () => (function(e) {
        let {
          onClose: t,
          devToolsEnabled: l
        } = e;
        return (0, a.jsx)(i.Menu, {
          onSelect: () => {},
          navId: "staff-help-popout",
          variant: "fixed",
          onClose: t,
          "aria-label": m.default.Messages.GUILD_ACTIONS_MENU_LABEL,
          children: (0, a.jsxs)(i.MenuGroup, {
            children: [(0, a.jsx)(i.MenuItem, {
              id: "staff-help-bug-reporter",
              label: m.default.Messages.BUG_REPORT_TITLE,
              icon: d.default,
              action: () => (0, i.openModalLazy)(async () => {
                let {
                  default: e
                } = await n.el("323518").then(n.bind(n, "323518"));
                return t => (0, a.jsx)(e, {
                  ...t
                })
              })
            }), l && (0, a.jsx)(i.MenuItem, {
              id: "staff-devtools",
              label: "Toggle DevTools",
              icon: c.default,
              action: () => (0, o.toggleDisplayDevTools)()
            }), (0, a.jsx)(i.MenuItem, {
              id: "staff-help-center",
              label: "Go to Help Center",
              icon: f.default,
              action: () => (0, r.default)(E.SUPPORT_LOCATION)
            })]
          })
        })
      })({
        onClose: () => p(!1),
        devToolsEnabled: e
      }),
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(h.Icon, {
          ...e,
          icon: d.default,
          "aria-label": m.default.Messages.HELP,
          selected: n
        })
      }
    })
  })
}