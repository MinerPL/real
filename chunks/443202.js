"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var l = s("37983"),
  a = s("884691"),
  n = s("458960"),
  i = s("446674"),
  r = s("77078"),
  o = s("318738"),
  d = s("173446"),
  u = s("901998"),
  c = s("461380"),
  h = s("782340"),
  E = s("434632");

function f() {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.advancedMode),
    [t] = a.useState(new n.default.Value(e ? 1 : 0));
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.FormDivider, {
      className: E.advancedModeDivider
    }), (0, l.jsx)(r.HeadingLevel, {
      component: (0, l.jsx)(r.Button, {
        look: r.Button.Looks.BLANK,
        color: r.Button.Colors.TRANSPARENT,
        onClick: function() {
          e ? n.default.timing(t, {
            toValue: 0,
            duration: 250
          }).start(() => {
            (0, o.setAdvancedMode)(!1)
          }) : ((0, o.setAdvancedMode)(!0), n.default.timing(t, {
            toValue: 1,
            duration: 250
          }).start())
        },
        children: (0, l.jsxs)(r.FormTitle, {
          tag: "h1",
          className: E.advancedTitle,
          children: [h.default.Messages.CHANNEL_PERMISSIONS_ADVANCED_PERMISSIONS, (0, l.jsx)(c.default, {
            expanded: e,
            className: E.titleCaret,
            width: 20,
            height: 20
          })]
        })
      }),
      children: e && (0, l.jsx)(n.default.div, {
        style: {
          opacity: t
        },
        children: (0, l.jsx)(d.default, {})
      })
    })]
  })
}