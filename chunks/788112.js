"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("77078"),
  i = s("143460"),
  r = s("49111"),
  o = s("782340"),
  d = s("198030"),
  u = s("705749");

function c(e) {
  let {
    rule: t,
    onChangeRule: s
  } = e, [c, E] = n.useState(t.name);
  return (0, a.jsxs)(l.FormItem, {
    children: [(0, a.jsx)(l.Text, {
      className: u.triggerHeader,
      variant: "text-sm/semibold",
      children: o.default.Messages.GUILD_AUTOMOD_INPUT_FILTER_NAME
    }), (0, a.jsx)(l.TextInput, {
      className: d.ruleNameInput,
      onChange: e => {
        E(e), s({
          ...t,
          name: e
        })
      },
      onClick: e => e.stopPropagation(),
      onKeyPress: e => {
        e.which === r.KeyboardKeys.SPACE && e.stopPropagation()
      },
      placeholder: o.default.Messages.GUILD_AUTOMOD_INPUT_FILTER_NAME_PLACEHOLDER,
      maxLength: i.MAX_RULE_NAME_LENGTH,
      value: c
    })]
  })
}