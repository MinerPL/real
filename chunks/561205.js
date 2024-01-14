"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("476765"),
  d = s("461380"),
  u = s("306073"),
  c = s("782340"),
  E = s("929921");

function _(e) {
  let {
    intiallyExpanded: t = !1,
    title: s,
    description: l,
    children: _
  } = e, [T, I] = n.useState(t), S = () => I(e => !e), N = (0, o.useUID)();
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)(u.default, {
      className: i(E.header, {
        [E.headerWithDescription]: T && null != l
      }),
      onClick: S,
      children: e => {
        let {
          areaRef: t,
          handleStopPropagation: n
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.Heading, {
            variant: "heading-md/semibold",
            children: s
          }), (0, a.jsx)(r.Clickable, {
            onClick: n(S),
            "aria-label": c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TOGGLE_SECTION_LABEL,
            "aria-controls": N,
            "aria-expanded": T,
            focusProps: {
              ringTarget: t
            },
            children: (0, a.jsx)(d.default, {
              className: E.caret,
              direction: T ? d.default.Directions.UP : d.default.Directions.DOWN
            })
          })]
        })
      }
    }), T && (0, a.jsxs)("div", {
      id: N,
      children: [null != l && (0, a.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: E.description,
        children: l
      }), (0, a.jsx)("div", {
        className: E.divider
      }), (0, a.jsx)("div", {
        className: E.content,
        children: _
      })]
    })]
  })
}