"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("462392"),
  i = s("782340"),
  r = s("245225");

function o(e) {
  let {
    action: t,
    triggerType: s,
    toggled: o,
    onToggleAction: d
  } = e, u = e => () => d(e), c = (0, l.getActionInfo)(t.type, t, s);
  if (null == c) return null;
  let {
    headerText: E,
    descriptionText: _,
    icon: T
  } = c;
  return (0, a.jsxs)("div", {
    className: r.actionContainer,
    children: [(0, a.jsx)("div", {
      className: r.actionIconContainer,
      children: (0, a.jsx)(T, {
        width: 24,
        height: 24,
        className: r.actionIcon
      })
    }), (0, a.jsxs)("div", {
      className: r.actionTextContainer,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-sm/semibold",
        children: E
      }), (0, a.jsx)(n.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: _
      }), o ? (0, a.jsxs)(n.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [i.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_CUSTOM_MESSAGE_HELPER, (0, a.jsx)(n.Clickable, {
          onClick: u(!0),
          className: r.editChannel,
          tag: "span",
          role: "link",
          children: i.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_CUSTOM_MESSAGE_CTA
        })]
      }) : null]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(n.Checkbox, {
        type: n.Checkbox.Types.INVERTED,
        value: o,
        onChange: u(!1),
        className: r.actionCheckbox
      })
    })]
  })
}