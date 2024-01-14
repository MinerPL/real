"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("462392"),
  i = s("613375"),
  r = s("426016"),
  o = s("450546"),
  d = s("143460"),
  u = s("245225");

function c(e) {
  let {
    action: t,
    triggerType: s,
    toggled: i,
    onToggleAction: r
  } = e, o = (0, l.getActionInfo)(t.type, t, s);
  if (null == o) return null;
  let {
    headerText: d,
    descriptionText: c,
    icon: E
  } = o;
  return (0, a.jsxs)("div", {
    className: u.actionContainer,
    children: [(0, a.jsx)("div", {
      className: u.actionIconContainer,
      children: (0, a.jsx)(E, {
        width: 24,
        height: 24,
        className: u.actionIcon
      })
    }), (0, a.jsxs)("div", {
      className: u.actionTextContainer,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-sm/semibold",
        children: d
      }), (0, a.jsx)(n.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: c
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(n.Checkbox, {
        disabled: !o.isEditable,
        type: n.Checkbox.Types.INVERTED,
        value: i,
        onChange: () => r(!1),
        className: u.actionCheckbox
      })
    })]
  })
}

function E(e) {
  let {
    action: t,
    guildId: s,
    triggerType: n,
    toggled: l,
    onToggleAction: u
  } = e;
  switch (t.type) {
    case d.AutomodActionType.FLAG_TO_CHANNEL:
      return (0, a.jsx)(o.default, {
        action: t,
        triggerType: n,
        toggled: l,
        onToggleAction: u
      });
    case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
      return (0, a.jsx)(r.default, {
        action: t,
        guildId: s,
        triggerType: n,
        toggled: l,
        onToggleAction: u
      });
    case d.AutomodActionType.BLOCK_MESSAGE:
      return (0, a.jsx)(i.default, {
        action: t,
        triggerType: n,
        toggled: l,
        onToggleAction: u
      });
    default:
      return (0, a.jsx)(c, {
        action: t,
        guildId: s,
        toggled: l,
        triggerType: n,
        onToggleAction: u
      })
  }
}